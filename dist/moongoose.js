(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("moongoose", [], factory);
	else if(typeof exports === 'object')
		exports["moongoose"] = factory();
	else
		root["moongoose"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/moongoose.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/moongoose.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/moongoose.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _icons_all = __webpack_require__(/*! ./icons_all */ "./src/icons_all.js");

var _icons_all2 = _interopRequireDefault(_icons_all);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'moongoose',
    props: ['name'],

    data: function data() {
        var out = { rawHtml: '' };
        return out;
    },

    watch: {
        name: function name(newVal, oldVal) {
            this.updateHtml();
        }
    },

    mounted: function mounted() {
        this.updateHtml();
    },

    methods: {
        updateHtml: function updateHtml() {
            this.rawHtml = _icons_all2.default[this.name];
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/moongoose.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/moongoose.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.moongoose {\n  display: inline-block;\n  height: 1em;\n  width: 1em;\n}\n.moongoose svg {\n    display: inline-block;\n    stroke-width: 0;\n    stroke: currentColor;\n    fill: currentColor;\n    vertical-align: middle;\n    height: 1.2em;\n    width: 1em;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/moongoose.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/moongoose.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib??vue-loader-options!./moongoose.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/moongoose.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/moongoose.vue?vue&type=template&id=1c506f2f&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/moongoose.vue?vue&type=template&id=1c506f2f& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("i", {
    staticClass: "moongoose",
    domProps: { innerHTML: _vm._s(_vm.rawHtml) }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./src/icons_all.js":
/*!**************************!*\
  !*** ./src/icons_all.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "1x1": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96.5 40h320v320h-320V40z"/></svg>',
    "1x2": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 40h143.8v320H96V40zm176.2 0H416v320H272.2V40z"/></svg>',
    "1x3": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 40h85.4v320H96V40zm118 0h85.4v320H214V40zm116.6 0H416v320h-85.4V40z"/></svg>',
    "1x4": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M356.3 40H416v320h-59.7V40zm-86.7 0h59.7v320h-59.7V40zm-86.8 0h59.7v320h-59.7V40zM96 40h59.7v320H96V40z"/></svg>',
    "1x5": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M373.7 40H416v320h-42.3V40zm-69.4 0h42.3v320h-42.3V40zm-69.5 0h42.3v320h-42.3V40zm-69.4 0h42.3v320h-42.3V40zM96 40h42.3v320H96V40z"/></svg>',
    "2x1": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 213.6h320V360H96V213.6zM96 40h320v146.4H96V40z"/></svg>',
    "2x2": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M269.6 213.6H416V360H269.6V213.6zm-173.6 0h146.4V360H96V213.6zM269.6 40H416v146.4H269.6V40zM96 40h146.4v146.4H96V40z"/></svg>',
    "2x3": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M327.4 213.6H416V360h-88.6V213.6zm-115.7 0h88.6V360h-88.6V213.6zm-115.7 0h88.6V360H96V213.6zM327.4 40H416v146.4h-88.6V40zm-115.7 0h88.6v146.4h-88.6V40zM96 40h88.6v146.4H96V40z"/></svg>',
    "2x4": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M356.3 213.6H416V360h-59.7V213.6zm-86.7 0h59.7V360h-59.7V213.6zm-86.8 0h59.7V360h-59.7V213.6zm-86.8 0h59.7V360H96V213.6zM356.3 40H416v146.4h-59.7V40zm-86.7 0h59.7v146.4h-59.7V40zm-86.8 0h59.7v146.4h-59.7V40zM96 40h59.7v146.4H96V40z"/></svg>',
    "2x5": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M373.7 213.6H416V360h-42.3V213.6zm-69.4 0h42.3V360h-42.3V213.6zm-69.5 0h42.3V360h-42.3V213.6zm-69.4 0h42.3V360h-42.3V213.6zm-69.4 0h42.3V360H96V213.6zM373.7 40H416v146.4h-42.3V40zm-69.4 0h42.3v146.4h-42.3V40zm-69.5 0h42.3v146.4h-42.3V40zm-69.4 0h42.3v146.4h-42.3V40zM96 40h42.3v146.4H96V40z"/></svg>',
    "3x1": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 271.4h320V360H96v-88.6zm0-115.7h320v88.6H96v-88.6zM96 40h320v88.6H96V40z"/></svg>',
    "3x2": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M269.6 271.4H416V360H269.6v-88.6zm-173.6 0h146.4V360H96v-88.6zm173.6-115.7H416v88.6H269.6v-88.6zm-173.6 0h146.4v88.6H96v-88.6zM269.6 40H416v88.6H269.6V40zM96 40h146.4v88.6H96V40z"/></svg>',
    "3x3": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M327.4 271.4H416V360h-88.6v-88.6zm-115.7 0h88.6V360h-88.6v-88.6zm-115.7 0h88.6V360H96v-88.6zm231.4-115.7H416v88.6h-88.6v-88.6zm-115.7 0h88.6v88.6h-88.6v-88.6zm-115.7 0h88.6v88.6H96v-88.6zM327.4 40H416v88.6h-88.6V40zm-115.7 0h88.6v88.6h-88.6V40zM96 40h88.6v88.6H96V40z"/></svg>',
    "3x4": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M356.3 271.4H416V360h-59.7v-88.6zm-86.7 0h59.7V360h-59.7v-88.6zm-86.8 0h59.7V360h-59.7v-88.6zm-86.8 0h59.7V360H96v-88.6zm260.3-115.7H416v88.6h-59.7v-88.6zm-86.7 0h59.7v88.6h-59.7v-88.6zm-86.8 0h59.7v88.6h-59.7v-88.6zm-86.8 0h59.7v88.6H96v-88.6zM356.3 40H416v88.6h-59.7V40zm-86.7 0h59.7v88.6h-59.7V40zm-86.8 0h59.7v88.6h-59.7V40zM96 40h59.7v88.6H96V40z"/></svg>',
    "3x5": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M373.7 271.4H416V360h-42.3v-88.6zm-69.4 0h42.3V360h-42.3v-88.6zm-69.5 0h42.3V360h-42.3v-88.6zm-69.4 0h42.3V360h-42.3v-88.6zm-69.4 0h42.3V360H96v-88.6zm277.7-115.7H416v88.6h-42.3v-88.6zm-69.4 0h42.3v88.6h-42.3v-88.6zm-69.5 0h42.3v88.6h-42.3v-88.6zm-69.4 0h42.3v88.6h-42.3v-88.6zm-69.4 0h42.3v88.6H96v-88.6zM373.7 40H416v88.6h-42.3V40zm-69.4 0h42.3v88.6h-42.3V40zm-69.5 0h42.3v88.6h-42.3V40zm-69.4 0h42.3v88.6h-42.3V40zM96 40h42.3v88.6H96V40z"/></svg>',
    "4x1": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 300.3h320V360H96v-59.7zm0-86.7h320v59.7H96v-59.7zm0-86.8h320v59.7H96v-59.7zM96 40h320v59.7H96V40z"/></svg>',
    "4x2": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M269.6 300.3H416V360H269.6v-59.7zm-173.6 0h146.4V360H96v-59.7zm173.6-86.7H416v59.7H269.6v-59.7zm-173.6 0h146.4v59.7H96v-59.7zm173.6-86.8H416v59.7H269.6v-59.7zm-173.6 0h146.4v59.7H96v-59.7zM269.6 40H416v59.7H269.6V40zM96 40h146.4v59.7H96V40z"/></svg>',
    "4x3": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M327.4 300.3H416V360h-88.6v-59.7zm-115.7 0h88.6V360h-88.6v-59.7zm-115.7 0h88.6V360H96v-59.7zm231.4-86.7H416v59.7h-88.6v-59.7zm-115.7 0h88.6v59.7h-88.6v-59.7zm-115.7 0h88.6v59.7H96v-59.7zm231.4-86.8H416v59.7h-88.6v-59.7zm-115.7 0h88.6v59.7h-88.6v-59.7zm-115.7 0h88.6v59.7H96v-59.7zM327.4 40H416v59.7h-88.6V40zm-115.7 0h88.6v59.7h-88.6V40zM96 40h88.6v59.7H96V40z"/></svg>',
    "4x4": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M356.3 300.3H416V360h-59.7v-59.7zm-86.7 0h59.7V360h-59.7v-59.7zm-86.8 0h59.7V360h-59.7v-59.7zm-86.8 0h59.7V360H96v-59.7zm260.3-86.7H416v59.7h-59.7v-59.7zm-86.7 0h59.7v59.7h-59.7v-59.7zm-86.8 0h59.7v59.7h-59.7v-59.7zm-86.8 0h59.7v59.7H96v-59.7zm260.3-86.8H416v59.7h-59.7v-59.7zm-86.7 0h59.7v59.7h-59.7v-59.7zm-86.8 0h59.7v59.7h-59.7v-59.7zm-86.8 0h59.7v59.7H96v-59.7zM356.3 40H416v59.7h-59.7V40zm-86.7 0h59.7v59.7h-59.7V40zm-86.8 0h59.7v59.7h-59.7V40zM96 40h59.7v59.7H96V40z"/></svg>',
    "4x5": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M373.7 300.3H416V360h-42.3v-59.7zm-69.4 0h42.3V360h-42.3v-59.7zm-69.5 0h42.3V360h-42.3v-59.7zm-69.4 0h42.3V360h-42.3v-59.7zm-69.4 0h42.3V360H96v-59.7zm277.7-86.7H416v59.7h-42.3v-59.7zm-69.4 0h42.3v59.7h-42.3v-59.7zm-69.5 0h42.3v59.7h-42.3v-59.7zm-69.4 0h42.3v59.7h-42.3v-59.7zm-69.4 0h42.3v59.7H96v-59.7zm277.7-86.8H416v59.7h-42.3v-59.7zm-69.4 0h42.3v59.7h-42.3v-59.7zm-69.5 0h42.3v59.7h-42.3v-59.7zm-69.4 0h42.3v59.7h-42.3v-59.7zm-69.4 0h42.3v59.7H96v-59.7zM373.7 40H416v59.7h-42.3V40zm-69.4 0h42.3v59.7h-42.3V40zm-69.5 0h42.3v59.7h-42.3V40zm-69.4 0h42.3v59.7h-42.3V40zM96 40h42.3v59.7H96V40z"/></svg>',
    "5x1": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 317.7h320V360H96v-42.3zm0-69.4h320v42.3H96v-42.3zm0-69.5h320v42.3H96v-42.3zm0-69.4h320v42.3H96v-42.3zM96 40h320v42.3H96V40z"/></svg>',
    "5x2": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M269.6 317.7H416V360H269.6v-42.3zm-173.6 0h146.4V360H96v-42.3zm173.6-69.4H416v42.3H269.6v-42.3zm-173.6 0h146.4v42.3H96v-42.3zm173.6-69.5H416v42.3H269.6v-42.3zm-173.6 0h146.4v42.3H96v-42.3zm173.6-69.4H416v42.3H269.6v-42.3zm-173.6 0h146.4v42.3H96v-42.3zM269.6 40H416v42.3H269.6V40zM96 40h146.4v42.3H96V40z"/></svg>',
    "5x3": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M327.4 317.7H416V360h-88.6v-42.3zm-115.7 0h88.6V360h-88.6v-42.3zm-115.7 0h88.6V360H96v-42.3zm231.4-69.4H416v42.3h-88.6v-42.3zm-115.7 0h88.6v42.3h-88.6v-42.3zm-115.7 0h88.6v42.3H96v-42.3zm231.4-69.5H416v42.3h-88.6v-42.3zm-115.7 0h88.6v42.3h-88.6v-42.3zm-115.7 0h88.6v42.3H96v-42.3zm231.4-69.4H416v42.3h-88.6v-42.3zm-115.7 0h88.6v42.3h-88.6v-42.3zm-115.7 0h88.6v42.3H96v-42.3zM327.4 40H416v42.3h-88.6V40zm-115.7 0h88.6v42.3h-88.6V40zM96 40h88.6v42.3H96V40z"/></svg>',
    "5x4": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M356.3 317.7H416V360h-59.7v-42.3zm-86.7 0h59.7V360h-59.7v-42.3zm-86.8 0h59.7V360h-59.7v-42.3zm-86.8 0h59.7V360H96v-42.3zm260.3-69.4H416v42.3h-59.7v-42.3zm-86.7 0h59.7v42.3h-59.7v-42.3zm-86.8 0h59.7v42.3h-59.7v-42.3zm-86.8 0h59.7v42.3H96v-42.3zm260.3-69.5H416v42.3h-59.7v-42.3zm-86.7 0h59.7v42.3h-59.7v-42.3zm-86.8 0h59.7v42.3h-59.7v-42.3zm-86.8 0h59.7v42.3H96v-42.3zm260.3-69.4H416v42.3h-59.7v-42.3zm-86.7 0h59.7v42.3h-59.7v-42.3zm-86.8 0h59.7v42.3h-59.7v-42.3zm-86.8 0h59.7v42.3H96v-42.3zM356.3 40H416v42.3h-59.7V40zm-86.7 0h59.7v42.3h-59.7V40zm-86.8 0h59.7v42.3h-59.7V40zM96 40h59.7v42.3H96V40z"/></svg>',
    "5x5": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M373.7 317.7H416V360h-42.3v-42.3zm-69.4 0h42.3V360h-42.3v-42.3zm-69.5 0h42.3V360h-42.3v-42.3zm-69.4 0h42.3V360h-42.3v-42.3zm-69.4 0h42.3V360H96v-42.3zm277.7-69.4H416v42.3h-42.3v-42.3zm-69.4 0h42.3v42.3h-42.3v-42.3zm-69.5 0h42.3v42.3h-42.3v-42.3zm-69.4 0h42.3v42.3h-42.3v-42.3zm-69.4 0h42.3v42.3H96v-42.3zm277.7-69.5H416v42.3h-42.3v-42.3zm-69.4 0h42.3v42.3h-42.3v-42.3zm-69.5 0h42.3v42.3h-42.3v-42.3zm-69.4 0h42.3v42.3h-42.3v-42.3zm-69.4 0h42.3v42.3H96v-42.3zm277.7-69.4H416v42.3h-42.3v-42.3zm-69.4 0h42.3v42.3h-42.3v-42.3zm-69.5 0h42.3v42.3h-42.3v-42.3zm-69.4 0h42.3v42.3h-42.3v-42.3zm-69.4 0h42.3v42.3H96v-42.3zM373.7 40H416v42.3h-42.3V40zm-69.4 0h42.3v42.3h-42.3V40zm-69.5 0h42.3v42.3h-42.3V40zm-69.4 0h42.3v42.3h-42.3V40zM96 40h42.3v42.3H96V40z"/></svg>',
    "add-chatbubbles": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M137.9 305.8c1.2 2.2 2 4.7 2 7.6l-9 46.6 41.7-16.4c2-.9 4.2-1.2 6.4-1.2 2 0 4.1.3 5.8 1.1h.1c.3.1.7.2.9.3 13.2 5.5 27.8 8.4 43 8.4 34.3 0 65-15.2 85.2-39-10.5 2.7-21.5 4.2-32.7 4.2-71-.1-128.8-55.8-128.8-124.4 0-8.8 1-17.2 2.8-25.4-22.3 19.5-36.2 47.4-36.2 78.5 0 21 6.3 40.9 17.4 57.5.5.7 1 1.5 1.4 2.2z"/>    <path d="M299 51.2c-62.1 0-114.1 42.5-126.2 98.8-1.8 8.2-2.8 16.8-2.8 25.4 0 68.6 57.7 124.3 128.9 124.3 11.4 0 22.3-1.6 32.7-4.2 6-1.6 11.9-3.4 17.7-5.7.3-.1.7-.3 1.1-.5.1 0 .1 0 .1-.1 2.1-.9 4.5-1.2 6.9-1.2 2.7 0 5.2.6 7.5 1.5l51 19.1-12.7-54.8c0-3.3.9-6.3 2.5-9 .5-.9 1.1-1.6 1.6-2.2 12.8-19.5 20.4-42.5 20.4-67.2.3-68.5-57.3-124.2-128.7-124.2zM124.3 0h38.9v118.9h-38.9V0z"/>    <path d="M84.4 79V40h118.9v38.9L84.4 79z"/></svg>',
    "address-book": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M316.3 265.9v-41.4c0-3.7-1.9-6.9-5.7-9.4l-51.8-24.4c13.2-8.2 19.8-21.3 19.8-39.6 0-12.5-3.7-23.2-11.3-32-7.6-8.8-16.7-13.2-27.3-13.2-10.7 0-19.8 4.4-27.3 13.2-7.6 8.8-11.3 19.5-11.3 32 0 17.6 6.9 30.8 20.7 39.6L169.3 215c-3.1 1.9-4.7 5-4.7 9.4v41.4c0 6.9 2.8 10.4 8.5 10.4h133.7c6.3 0 9.5-3.4 9.5-10.3zm90.3-155.4H384v28.3h22.6c6.3 0 9.4 3.1 9.4 9.4v28.3c0 6.3-3.1 9.4-9.4 9.4H384v27.3h22.6c6.3 0 9.4 3.4 9.4 10.4v28.3c0 6.3-3.1 9.4-9.4 9.4H384v27.2h22.6c6.3 0 9.4 3.4 9.4 10.4v28.3c0 6.3-3.1 9.4-9.4 9.4H384v8.5c0 10-5 15-15 15H111c-10 0-15-5-15-15V55c0-10 5-15 15-15h257.9c10 0 15 5 15 15v8.5h22.6c6.3 0 9.4 3.1 9.4 9.4v28.3c.1 6.2-3 9.3-9.3 9.3z"/></svg>',
    "alert-circled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M439.9 338.5L267.8 47.2C265.3 43 260.9 40 256 40s-9.4 3-11.8 7.2L72.1 338.5c-2.3 4.2-4 10.8-1.6 14.9 2.5 4.1 6.8 6.6 11.6 6.6h347.6c4.8 0 9.2-2.5 11.6-6.6 2.7-4 .9-10.8-1.4-14.9zm-157.2-18.4h-53.3v-40h53.3v40zm0-66.7h-53.3V133.3h53.3v120.1z"/></svg>',
    "alert-send": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M246.4 187.6h19.2v43.3h-19.2v-43.3zm0 53h19.2V255h-19.2v-14.4z"/>    <path d="M347.7 145.6c-21.6-22.6-50.3-36.4-81.3-38.9V34.1L329.8 91c2 1.7 4.4 2.7 7.1 2.7 2.9 0 5.7-1.2 7.9-3.5 3.9-4.3 3.6-10.9-.8-14.8L263.3 2.7l-.4-.4-.1-.1c-.1-.1-.1-.1-.3-.2 0 0-.1 0-.1-.1l-.4-.3-.4-.2c-.1-.1-.1-.1-.2-.1l-.8-.8h-.8c-.2-.1-.4-.1-.8-.2-.3-.1-.7-.1-.9-.1-.2-.2-.7-.2-.9-.2h-2c-.4 0-.8.1-.9.1-.1 0-.2 0-.3.1h-.6l-.4.2h-.4l-1.3.7-.6.3-.1.1h-.3L168 75.3c-2.1 1.9-3.4 4.4-3.5 7.3-.1 2.8.8 5.5 2.7 7.6 2 2.2 4.8 3.5 7.9 3.5 2.6 0 5.1-.9 7.1-2.7l63.4-56.9v72.6c-65.2 5.6-115.9 60.4-115.9 126.5 0 69.8 56.9 126.7 126.7 126.7S383.1 303 383.1 233.2c-.6-32.9-12.9-63.9-35.4-87.6zm-21.3 134.9h-141c-2 0-3.7-1-4.7-2.6-.9-1.7-.3-4.4.7-6.1l69.8-118.1c.9-1.7 2.7-2.9 4.7-2.9s3.8 1.2 4.7 2.9l69.8 118.1c.9 1.7 1.6 4.4.7 6.1-.9 1.6-2.7 2.6-4.7 2.6z"/></svg>',
    "alert": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M301.7 360h-91.4v-68.6h91.4V360zm-11.4-114.3h-68.6L210.3 40h91.4l-11.4 205.7z"/></svg>',
    "android-arrow-back": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M416 180H173L285 68l-29-28L96 200l160 160 28-28-111-112h243v-40z"/></svg>',
    "android-close": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M416 72l-32-32-128 128L128 40 96 72l128 128L96 328l32 32 128-128 128 128 32-32-128-128L416 72z"/></svg>',
    "android-download": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M378.5 127.6C366.9 70.1 316.9 26.7 256 26.7c-48.4 0-90 27.5-110.9 67.5-50 5-89.1 47.5-89.1 99.1 0 55 45 100 100 100h216.6c45.9 0 83.4-37.5 83.4-83.4 0-44.1-34.1-79.7-77.5-82.3zm-149.1 42.5v-63.4h53.4v63.4h56.6L256 253.3l-83.4-83.2h56.8z"/></svg>',
    "android-favorite-outline": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M328 52.4c-28 0-54.4 12.9-72 33.8-17.6-20.9-44-33.8-72-33.8-49.6 0-88 38.6-88 88.5 0 61.2 54.4 110.3 136.8 185.9l23.2 20.9 23.2-20.9C361.6 251.2 416 202.1 416 140.9c0-49.9-38.4-88.5-88-88.5zm-62.1 253.2l-3.2 3-6.6 6-6.6-6-3.2-3c-38.8-35.6-72.3-66.3-94.4-93.8-21.5-26.7-31.1-48.6-31.1-70.9 0-17.6 6.5-33.8 18.2-45.6S166.8 77 184.1 77c20.1 0 40 9.4 53.2 25l18.7 22.3 18.8-22.4C288 86.3 307.9 77 328 77c17.4 0 33.4 6.5 45.1 18.3 11.8 11.8 18.2 28 18.2 45.6 0 22.3-9.6 44.2-31.1 70.9-22.1 27.4-55.5 58.2-94.3 93.8z"/></svg>',
    "android-favorite": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 347.7l-23.2-20.9C150.4 251.1 96 202 96 140.8c0-49.9 38.4-88.5 88-88.5 28 0 54.4 12.9 72 33.8 17.6-20.9 44-33.8 72-33.8 49.6 0 88 38.6 88 88.5 0 61.2-54.4 110.3-136.8 185.9l-23.2 21z"/></svg>',
    "android-folder": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M225.5 85.7h-99.1c-16.7 0-30.4 13.7-30.4 30.5v167.6c0 16.8 13.7 30.5 30.5 30.5h259c16.8 0 30.5-13.7 30.5-30.5V150.5c0-16.8-13.7-30.5-30.5-30.5H256l-30.5-34.3z"/></svg>',
    "android-happy": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 40c-88.8 0-160 72-160 160s71.2 160 160 160 160-72 160-160S344 40 256 40zm0 288c-70.4 0-128-57.6-128-128S185.6 72 256 72s128 57.6 128 128-57.6 128-128 128zm56-144c13.6 0 24-10.4 24-24s-10.4-24-24-24-24 10.4-24 24 10.4 24 24 24zm-112 0c13.6 0 24-10.4 24-24s-10.4-24-24-24-24 10.4-24 24 10.4 24 24 24zm56 104c37.6 0 68.8-23.2 81.6-56H174.4c12.8 32.8 44 56 81.6 56z"/></svg>',
    "android-microphone-off": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M345.9 299.2l-21.4-21.3-7.6-7.6-3.8-3.8-112.6-112.3v.3l-89.1-89-19.3 19.3 108.4 108.3v23.2c0 30.4 25 55.2 55.4 55.2 6.7 0 13.4-1.2 19.8-3.7l26 25.9c-14 7.1-29.6 11.1-45.6 11.1-50.6 0-97.5-39-97.5-93.6h-31.3c0 61.9 49.9 114.6 110.2 123V400h37v-65.9c17.8-2.7 34.6-9 49.5-18.1l76.5 76.4 19.4-19.4-27.1-27.1-46.9-46.7 46.7 46.6-46.7-46.6zm-34.6-83v-121c0-30.4-25.1-55.2-55.5-55.2s-55.5 24.8-55.5 55.2v20.2l110.1 110c.8-2.9.9-6 .9-9.2zm73.5-5.1h-31.3c0 16.5-4.4 31.8-12 45.2l22.2 22.2c13.2-19.5 21.1-42.5 21.1-67.4zm35 161.9l-27.2-27.1 27.2 27.1z"/></svg>',
    "android-microphone": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256.1 271.4c30.3 0 55.1-24.9 55.1-55.2v-121c0-30.4-24.9-55.2-55.1-55.2S201 64.9 201 95.2v121c-.1 30.3 24.8 55.2 55.1 55.2zm97.3-60.6c0 55.2-46.8 93.8-97.3 93.8s-97.3-38.7-97.3-93.8h-31.3c0 62.5 49.6 115.1 110.1 123.3V400h36.7v-65.9c60.6-9.1 110.2-60.8 110.2-123.3h-31.1z"/></svg>',
    "android-person-add": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M292 184c39.6 0 72-32.4 72-72s-32.4-72-72-72-72 32.4-72 72 32.4 72 72 72zm0 36c-47.7 0-144 24.3-144 72v36h288v-36c0-47.7-96.3-72-144-72zm-144-60v-48h-24v48H76v24h48v48h24v-48h48v-24h-48z"/></svg>',
    "android-person": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 200c44 0 80-36 80-80s-36-80-80-80-80 36-80 80 36 80 80 80zm0 40c-53 0-160 27-160 80v40h320v-40c0-53-107-80-160-80z"/></svg>',
    "android-share-alt": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M362.5 290.4c-13.4 0-25.9 4.4-34.8 13.3L200.3 230c.9-4.4 1.8-8 1.8-12.4s-.9-8-1.8-12.4L326 132.3c9.8 8.9 22.3 14.2 36.5 14.2 29.4 0 53.5-24 53.5-53.3C416 64 391.9 40 362.5 40S309 64 309 93.3c0 4.4.9 8 1.8 12.4l-125.7 72.8c-9.8-8.9-22.3-14.2-36.5-14.2-29.4 0-52.6 24-52.6 53.3 0 29.3 24.1 53.3 53.5 53.3 14.3 0 26.7-5.3 36.5-14.2l126.6 73.7c-.9 3.5-1.8 7.1-1.8 11.5 0 28.4 23.2 51.5 51.7 51.5 28.5 0 51.7-23.1 51.7-51.5 0-28.5-23.2-51.5-51.7-51.5z"/></svg>',
    "android-share": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M416 166.7L282.7 40v71.1C158.2 128.9 113.8 217.8 96 306.7c44.4-62.2 97.8-90.7 186.7-90.7v72.9L416 166.7z"/></svg>',
    "announcement": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M284.7 351.7c3.1 6 2.2 11.2-2.7 15.5v.9l-23.8 12.7-1.9 1.9c-6 4.3-11.6 2.7-16.4-4.6l-.9-.9-44.7-77.5v-.9c-.5 0-.9-.3-.9-.9-4.3-7.3-2.7-13 4.6-17.3 2.4-1.2 4.3-1.9 5.5-1.9h33.6c3.1 0 5.7 1.9 8.2 5.5l39.1 66.5v1h.3zM431.3 57.4v259.7c0 8.4-4.3 12.7-12.7 12.7-3.1 0-5.7-1.2-8.2-3.6l-122.1-70.1H199c-7.3 0-11.6-3.9-12.7-11.8V123.9c0-8.4 4.3-12.7 12.7-12.7h100.3l112-63.8c1.9-1.9 4.3-2.7 7.3-2.7 8.5 0 12.7 4.3 12.7 12.7zM149.8 114c8.4 0 12.7 4.3 12.7 12.7v115.7c-1.2 7.3-5.5 10.8-12.7 10.8-18.8 0-35.1-6.8-48.8-20.5s-20.4-30.1-20.4-49.5 6.7-35.8 20.1-49.2 29.7-20 49.1-20z"/></svg>',
    "aol": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M247.1 179.8c-40.3 0-70.8 31.3-70.8 70.1 0 40.8 31.8 70.1 70.8 70.1s70.7-29.2 70.7-70.1c0-38.8-30.4-70.1-70.7-70.1zm0 36.9c17.4-.2 31.7 14.7 31.7 33.1 0 18.2-14.1 33.1-31.7 33.1-17.4 0-31.7-14.8-31.7-33.1s14.4-33 31.7-33.1zm201.7 78.7c0 13.6-11 24.6-24.6 24.6-13.6 0-24.6-11-24.6-24.6 0-13.6 11-24.6 24.6-24.6 13.6.1 24.6 11.1 24.6 24.6zm-71.4 20h-38.6V141.1h38.6v174.3zM106.3 141.1H70.1L0 315.4h49.1l8.2-24.6H118l8.2 24.6h49.1l-69-174.3zM70.1 254.6l18.1-58.3 18.1 58.3H70.1z"/></svg>',
    "archive": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M423.7 186.4l-85-106.2c-2-2.5-5.1-4-8.3-4H181.6c-3.2 0-6.3 1.5-8.3 4l-85 106.2c-1.5 1.9-2.3 4.2-2.3 6.6v95.6c0 11.8 9.6 21.2 21.2 21.2h297.5c11.8 0 21.2-9.6 21.2-21.2v-95.7c.2-2.2-.7-4.8-2.2-6.5zm-19 17.3h-74.4l-42.5 42.5h-63.7l-42.5-42.5h-74.4v-6.9l79.5-99.4h138.5l79.5 99.4v6.9z"/>    <path d="M326 149.9H186c-5.5 0-10-4.5-10-10s4.5-10 10-10h140c5.5 0 10 4.5 10 10s-4.4 10-10 10zm20.1 40H166c-5.5 0-10-4.5-10-10s4.5-10 10-10h180c5.5 0 10 4.5 10 10s-4.4 10-9.9 10z"/></svg>',
    "arrow-down-b": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M98.9 128.8l1.8 2.1 136 156.5c4.6 5.3 11.5 8.6 19.2 8.6s14.6-3.4 19.2-8.6L411 131.1l2.3-2.6c1.7-2.5 2.7-5.5 2.7-8.7 0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2 0-16.6 7.1-16.6 15.8 0 3.4 1.1 6.4 2.9 9z"/></svg>',
    "arrow-down-c": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M372 260.7l-95.5 91.2c-5.3 5.5-12.5 8.2-20.4 8.2s-15-2.7-20.4-8.2L140 260.7c-11.4-10.8-11.4-28.5 0-39.3 11.4-10.8 29.7-10.8 41.1 0l45.9 43.8V67.8c-.2-15.3 12.8-27.8 29-27.8 16.1 0 29.1 12.5 29.1 27.8v197.4l45.9-43.8c11.4-10.8 29.7-10.8 41.1 0 11.3 10.8 11.3 28.4-.1 39.3z"/></svg>',
    "arrow-left-b": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M327.3 42.9l-2.1 1.8-156.6 136c-5.3 4.6-8.6 11.5-8.6 19.2s3.4 14.6 8.6 19.2L324.9 355l2.6 2.3c2.5 1.7 5.5 2.7 8.7 2.7 8.7 0 15.8-7.4 15.8-16.6V56.6c0-9.2-7.1-16.6-15.8-16.6-3.3 0-6.4 1.1-8.9 2.9z"/></svg>',
    "arrow-left-c": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M195.4 83.9l-91.2 95.5c-5.5 5.3-8.2 12.5-8.2 20.4s2.7 15 8.2 20.4l91.2 95.8c10.8 11.4 28.5 11.4 39.3 0 10.8-11.4 10.8-29.7 0-41.1L191 229.1h197.2c15.4 0 27.8-13 27.8-29.1s-12.5-29.1-27.8-29.1H190.9l43.8-45.8c10.8-11.4 10.8-29.7 0-41.1-10.9-11.4-28.4-11.4-39.3-.1z"/></svg>',
    "arrow-right-b": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M184.8 357.1l2.1-1.8 156.5-136c5.3-4.6 8.6-11.5 8.6-19.2 0-7.7-3.4-14.6-8.6-19.2L187.2 45l-2.6-2.3c-2.5-1.7-5.5-2.7-8.7-2.7-8.8 0-15.8 7.4-15.8 16.6v286.8c0 9.2 7.1 16.6 15.8 16.6 3.2 0 6.3-1.1 8.9-2.9z"/></svg>',
    "arrow-right-c": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M316.6 83.9l91.2 95.5c5.5 5.3 8.2 12.5 8.2 20.4s-2.7 15-8.2 20.4L316.6 316c-10.8 11.4-28.5 11.4-39.3 0s-10.8-29.7 0-41.1l43.8-45.8H123.9c-15.5 0-27.9-13-27.9-29.1s12.5-29.1 27.8-29.1h197.3l-43.8-45.8c-10.8-11.4-10.8-29.7 0-41.1 10.9-11.4 28.4-11.4 39.3-.1z"/></svg>',
    "arrow-swap": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 260v40c0 3.7 3 6.7 6.7 6.7h206.7V360L416 280l-106.7-80v53.3H102.7c-3.7 0-6.7 3-6.7 6.7zm320-120v-40c0-3.7-3-6.7-6.7-6.7H202.7V40L96 120l106.7 80v-53.3h206.7c3.6 0 6.6-3 6.6-6.7z"/></svg>',
    "arrow-up-b": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M413.1 271.2l-1.8-2.1-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6-7.7 0-14.6 3.4-19.2 8.6L101 268.9l-2.3 2.6C97 274 96 277 96 280.1c0 8.7 7.4 15.8 16.6 15.8h286.8c9.2 0 16.6-7.1 16.6-15.8 0-3.2-1.1-6.3-2.9-8.9z"/></svg>',
    "arrow-up-c": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M140 139.4l95.5-91.2c5.3-5.4 12.4-8.2 20.4-8.2 7.9 0 15 2.7 20.4 8.2l95.7 91.2c11.4 10.8 11.4 28.5 0 39.3-11.4 10.8-29.8 10.8-41.1 0L285 134.9v197.3c0 15.4-13 27.8-29.1 27.8s-29.1-12.5-29.1-27.8V134.9l-45.9 43.9c-11.4 10.8-29.8 10.8-41.1 0-11.2-11-11.2-28.5.2-39.4z"/></svg>',
    "beaker": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M164.9 141.2v179.3c0 7.1 6.3 13.2 13.4 13.2h166.9c7.1 0 12.3-6.2 12.3-13.2V141.2H164.9zm173.3 121.5c0 3.6-2.9 6.4-6.5 6.4s-6.4-2.9-6.4-6.4v-38.5c0-3.6 2.9-6.4 6.5-6.4s6.4 2.9 6.4 6.4v38.5zm-5.9-57.8c-3.6 0-6.5-2.9-6.5-6.4 0-3.6 2.9-6.5 6.4-6.5 3.6 0 6.4 2.9 6.4 6.5.1 3.5-2.7 6.4-6.3 6.4z"/>    <path d="M399.6 30H159.2c-41.3 0-49 20.8-49 30.2 23 3.2 24.1 3.6 24.1 27.9v233c0 26.8 22.2 48.9 49.1 48.9H341c26.8 0 48.2-22.1 48.2-48.9V66.5c0-15.4 9.3-29.1 10.3-30.5.9-1.5 2.3-2.9 2.3-3.7 0-1-.3-2.3-2.2-2.3zM365 66.5v254.7c0 13.6-9.5 24.7-22.6 24.7h-159c-13.4 0-24.8-11.3-24.8-24.7V88c0-8.9.8-28.2-2.9-33.4.7-.6 2.4-.5 3.5-.5h207c-.8.2-1.2 8.3-1.2 12.4z"/></svg>',
    "bookmark": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M333.9 30H178.1c-3.9 0-7.1 3.2-7.1 7.1v49.6h170V37.1c0-3.9-3.2-7.1-7.1-7.1zM171 370l85-85 85 85V100.8H171V370z"/></svg>',
    "bug": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M354.8 92.7C330.4 60.4 295.2 40 256 40s-74.5 20.4-98.8 52.7c5.3 13.1 13.2 25 23.5 35.2 20.2 20.2 46.9 31.3 75.4 31.3s55.3-11.1 75.4-31.3c10.1-10.1 18.1-22.1 23.3-35.2z"/>    <path d="M148.3 105.7c-1.4 2.3-2.8 4.8-4.2 7.2-2.5-1.5-4.4-3.2-6.4-4.8-.9-.8-2.5-3.3-3.7-6.1 4.6-9.5.9-20.9-8.3-26-9.7-5.4-21.8-2-27.2 7.7s-2 21.8 7.7 27.2c1.1.6 2.1 1.1 3.2 1.4 2.3 5.3 6.1 11.9 11.3 16.3 3.5 2.9 7.4 6 12.7 8.9-6 16.9-9.7 35.2-10.5 54.5-9.2.1-15.5 1.8-21.2 3.4-3.5 1.1-6.9 2.8-9.8 4.9-.8-.1-1.6-.1-2.5-.1-11.1 0-20 9-20 20 0 11.1 9 20 20 20 10.7 0 19.6-8.5 20-19.3 4.2-1.3 8.3-2.2 14.2-2.3 2.7 27.5 11.1 52.9 23.8 74.3-11.8 9.2-19 19.1-22.2 30.2 0 0-.6.4-1.5 1.2-.8.7-1.6 1.4-2.3 2.2-7.4 8.2-6.8 20.9 1.5 28.2 8.2 7.4 20.9 6.8 28.2-1.5 6.8-7.5 6.8-18.7.5-26.1 2.6-4.7 5.3-7.5 11.4-12.5 22.5 26.4 52.9 43.4 86.5 45.4V172.5c-44.5-2.5-82.6-29-101.2-66.8zm274.4 94.4c-.8 0-1.6 0-2.5.1-3-2.1-6.4-3.9-9.8-4.9-5.7-1.6-12-3.3-21.2-3.4-.8-19.3-4.4-37.7-10.5-54.5 5.4-2.9 9.2-6 12.7-8.9 5.1-4.3 9-11.1 11.3-16.3 1.2-.4 2.2-.8 3.2-1.4 9.7-5.4 13.1-17.6 7.7-27.2-5.4-9.7-17.6-13.1-27.2-7.7-9.2 5.1-12.7 16.6-8.3 26-1.3 2.8-2.8 5.3-3.7 6.1-2 1.8-4 3.3-6.4 4.8-1.3-2.5-2.7-4.8-4.2-7.2-18.7 37.8-56.6 64.3-100.9 66.8V360c33.6-2 63.8-19 86.5-45.4 6.2 4.9 8.9 7.8 11.4 12.5-6.3 7.5-6.3 18.7.5 26.1 7.4 8.2 20.1 8.9 28.2 1.5s8.9-20.1 1.5-28.2c-.7-.8-1.5-1.5-2.3-2.2-.9-.8-1.5-1.2-1.5-1.2C384 312 376.8 302 365 292.9c12.7-21.5 21.2-46.8 23.8-74.3 6 .1 10 1.1 14.2 2.3.5 10.6 9.2 19.3 20 19.3 11.1 0 20-9 20-20-.1-11-9.3-20.1-20.3-20.1z"/></svg>',
    "camera": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M390.2 116.2h-51.9l-31.1-31.4-.2-.2-.2-.2c-4.6-4.6-10.8-7.5-17.9-7.5h-64.6c-7.5 0-14.2 3.2-18.9 8.4v.1L175 116.2h-53.1c-14.3 0-25.8 11.2-25.8 25.5v155.5c0 14.3 11.5 25.9 25.8 25.9h268.4c14.2 0 25.8-11.6 25.8-25.9V141.8c-.1-14.3-11.7-25.6-25.9-25.6zM256 284.3c-39.2 0-71.1-32-71.1-71.2 0-39.3 31.9-71.2 71.1-71.2s71.1 31.9 71.1 71.2c0 39.2-31.9 71.2-71.1 71.2zm129.3-126.9c-5.9 0-10.8-4.8-10.8-10.8 0-6 4.8-10.8 10.8-10.8 5.9 0 10.8 4.8 10.8 10.8 0 5.9-4.9 10.8-10.8 10.8z"/>    <path d="M256 159.2c-29.7 0-53.7 24.1-53.7 53.8s24 53.8 53.7 53.8c29.6 0 53.7-24.1 53.7-53.8s-24.1-53.8-53.7-53.8z"/></svg>',
    "chatbubbles": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M115.5 304c1.4 2.3 2.2 4.9 2.2 7.9l-9.3 48.3 43.3-17c2.1-.8 4.3-1.3 6.7-1.3 2.2 0 4.2.4 6.2 1.1h.2c.3.2.6.2.9.4 13.7 5.6 28.8 8.8 44.6 8.8 35.6 0 67.4-15.8 88.4-40.5-10.9 2.8-22.2 4.4-33.9 4.4-73.8 0-133.7-57.7-133.7-128.9 0-9.1 1-17.9 2.8-26.4-23.4 20-37.9 49-37.9 81.3 0 21.9 6.6 42.5 18.1 59.7.5.6.9 1.5 1.4 2.2z"/>    <path d="M282.5 40c-64.4 0-118.2 44-130.9 102.5-1.8 8.5-2.8 17.3-2.8 26.4 0 71.2 59.8 128.9 133.7 128.9 11.8 0 23.1-1.6 33.9-4.4 6.2-1.6 12.4-3.5 18.3-5.9.4-.2.7-.3 1.1-.5.1 0 .2 0 .2-.1 2.2-.8 4.7-1.3 7.2-1.3 2.8 0 5.4.5 7.8 1.5l52.8 19.9-13.1-56.8c0-3.4.9-6.6 2.5-9.4.5-.8 1.1-1.6 1.6-2.4 13.4-20.1 21.2-44 21.2-69.7.2-71-59.6-128.7-133.5-128.7z"/></svg>',
    "checkmark-box-checked": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M397.1 349.6H114.9c-10.4 0-18.9-8.4-18.9-18.9V58.9c.1-10.5 8.5-18.9 18.9-18.9H397c10.4 0 18.9 8.4 18.9 18.9v271.8c0 10.5-8.4 18.9-18.8 18.9zm-25.7-233.1l-30.4-24c-.9-.8-2.2-1.2-3.4-1.2-1.2 0-2.6.5-3.4 1.4L223.8 234.4s-43.4-41.7-44.6-43-2.8-3.3-5.2-3.3c-2.4 0-3.5 1.8-4.9 3-.9 1-16.3 17.3-24 25.4-.4.4-.7.8-1.1 1.1-.7.9-1.1 2-1.1 3.1s.4 2.3 1.1 3.2l1.6 1.5s77 74 78.3 75.2c1.2 1.1 2.8 2.8 5.1 2.8s4.1-2.4 5.1-3.4l137.6-176.9c.7-.9 1.1-2 1.1-3.2-.2-1.1-.6-2.5-1.4-3.4z"/></svg>',
    "checkmark-box": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M397.1 349.6H114.9c-10.4 0-18.9-8.4-18.9-18.9V58.9c.1-10.5 8.5-18.9 18.9-18.9H397c10.4 0 18.9 8.4 18.9 18.9v271.8c0 10.5-8.4 18.9-18.8 18.9zm-11.9-30.4V69.3H125.5v250h259.7v-.1z"/></svg>',
    "checkmark-circled-outlined": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 69.1c-72.3 0-130.9 58.6-130.9 130.9S183.7 330.9 256 330.9 386.9 272.3 386.9 200 328.3 69.1 256 69.1zm67.2 87.1l-81.3 104.3c-.6.6-1.7 2-3 2s-2.2-.9-3-1.7c-.8-.8-46.1-44.3-46.1-44.3l-.9-.9c-.4-.5-.6-1.1-.6-1.9 0-.8.3-1.3.6-1.9.3-.3.4-.4.6-.7 4.5-4.7 13.6-14.3 14.2-14.9.8-.8 1.4-1.8 2.8-1.8 1.5 0 2.4 1.2 3.1 1.9.7.7 26.3 25.3 26.3 25.3l65.1-83.5c.6-.4 1.3-.8 2-.8.8 0 1.5.3 2 .8l17.9 14.1c.4.6.8 1.3.8 2 .1.8-.2 1.5-.5 2z"/>    <path d="M256 55.8c79.6 0 144.2 64.6 144.2 144.2S335.6 344.2 256 344.2 111.8 279.6 111.8 200 176.4 55.8 256 55.8m0-15.8c-21.6 0-42.6 4.2-62.3 12.6-19 8-36.2 19.6-50.8 34.3-14.7 14.7-26.2 31.8-34.3 50.8C100.2 157.4 96 178.4 96 200s4.2 42.6 12.6 62.3c8 19 19.6 36.2 34.3 50.8s31.8 26.2 50.8 34.3c19.7 8.3 40.7 12.6 62.3 12.6s42.6-4.2 62.3-12.6c19-8 36.2-19.6 50.8-34.3s26.2-31.8 34.3-50.8c8.3-19.7 12.6-40.7 12.6-62.3s-4.2-42.6-12.6-62.3c-8-19-19.6-36.2-34.3-50.8s-31.8-26.2-50.8-34.3C298.6 44.2 277.6 40 256 40z"/></svg>',
    "checkmark-circled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 40c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160S344.4 40 256 40zm82.1 106.5L238.7 274c-.8.8-2.1 2.5-3.6 2.5-1.6 0-2.7-1.1-3.6-2.1s-56.4-54.2-56.4-54.2l-1.1-1.1c-.4-.6-.8-1.4-.8-2.3s.4-1.6.8-2.3c.3-.3.5-.5.8-.9 5.5-5.8 16.6-17.5 17.4-18.2.9-.9 1.7-2.1 3.4-2.1 1.8 0 2.9 1.5 3.8 2.4.9.9 32.1 30.9 32.1 30.9L311 124.5c.7-.6 1.6-1 2.5-1s1.8.4 2.5.9l21.9 17.2c.6.7.9 1.6.9 2.5.1 1-.3 1.8-.7 2.4z"/></svg>',
    "checkmark": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M414.2 75.2L372 41.9c-1.3-1.1-2.9-1.8-4.8-1.8-1.8 0-3.5.8-4.8 1.9L208.6 239.4s-60.4-58.1-62.1-59.8c-1.7-1.7-3.9-4.5-7.3-4.5s-4.9 2.4-6.7 4.2c-1.3 1.4-22.9 24-33.5 35.2-.6.7-1 1.1-1.5 1.6-.9 1.3-1.5 2.8-1.5 4.4 0 1.7.6 3.1 1.5 4.4l2.2 2s107.2 102.9 108.9 104.7c1.8 1.8 3.9 4 7.1 4 3.1 0 5.6-3.3 7.1-4.8L414.5 84.5c.9-1.3 1.5-2.8 1.5-4.5 0-1.8-.8-3.5-1.8-4.8z"/></svg>',
    "chevron-down": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 230.3l124.4-119.5c3.1-3 8.1-2.9 11.3.1l21.9 21.4c3.1 3.1 3.2 8.1.1 11.1l-152 145.9c-1.6 1.6-3.7 2.3-5.8 2.1-2.1.1-4.2-.6-5.8-2.1L98.3 143.4c-3.1-3-3-8 .1-11.1l21.9-21.4c3.1-3.1 8.2-3.1 11.3-.1L256 230.3z"/></svg>',
    "chevron-left-double": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M413.8 324.5c3 3.1 2.9 8.1-.1 11.3l-21.4 21.9c-3.1 3.1-8.1 3.2-11.1.1l-145.9-152c-1.5-1.6-2.2-3.6-2.1-5.8-.1-2.1.6-4.2 2.1-5.8l145.9-152c3-3.1 8-3 11.1.1l21.4 21.9c3.1 3.1 3.1 8.2.1 11.3L294.3 199.9l119.5 124.6z"/>    <path d="M276.6 324.5c3 3.1 2.9 8.1-.1 11.3l-21.4 21.9c-3.1 3.1-8.1 3.2-11.1.1l-145.9-152c-1.5-1.6-2.2-3.6-2.1-5.8-.1-2.1.6-4.2 2.1-5.8L244 42.3c3-3.1 8-3 11.1.1l21.4 21.9c3.1 3.1 3.1 8.2.1 11.3L157.2 199.9l119.4 124.6z"/></svg>',
    "chevron-left": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M225.8 200L345.3 75.6c3-3.1 2.9-8.2-.2-11.3l-21.4-21.9c-3.1-3.1-8.1-3.2-11.1-.2l-145.9 152c-1.6 1.6-2.3 3.7-2.2 5.8-.1 2.2.6 4.2 2.2 5.8l145.9 152c3 3.1 8 3 11.1-.2l21.4-21.9c3.1-3.1 3.1-8.2.2-11.3L225.8 200z"/></svg>',
    "chevron-right-double": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M217.7 199.9L98.2 75.6c-3-3.1-2.9-8.1.1-11.3l21.4-21.9c3.1-3.1 8.1-3.2 11.1-.1l145.9 152c1.6 1.6 2.3 3.7 2.1 5.8.1 2.1-.6 4.2-2.1 5.8L130.8 357.7c-3 3.1-8 3-11.1-.1l-21.4-21.9c-3.1-3.1-3.1-8.2-.1-11.3l119.5-124.5z"/>    <path d="M354.8 199.9L235.4 75.6c-3-3.1-2.9-8.1.1-11.3l21.4-21.9c3.1-3.1 8.1-3.2 11.1-.1l145.9 152c1.6 1.6 2.3 3.7 2.1 5.8.1 2.1-.6 4.2-2.1 5.8L268 357.7c-3 3.1-8 3-11.1-.1l-21.4-21.9c-3.1-3.1-3.1-8.2-.1-11.3l119.4-124.5z"/></svg>',
    "chevron-right": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M286.2 200L166.8 75.6c-3-3.1-2.9-8.2.2-11.3l21.4-21.9c3.1-3.1 8.1-3.2 11.1-.2l145.9 152c1.6 1.6 2.3 3.7 2.2 5.8.1 2.2-.6 4.2-2.2 5.8l-145.9 152c-3 3.1-8 3-11.1-.2L167 335.7c-3.1-3.1-3.1-8.2-.2-11.3L286.2 200z"/></svg>',
    "chevron-up": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 169.8l124.4 119.4c3.1 3 8.1 2.9 11.3-.1l21.9-21.4c3.1-3.1 3.2-8.1.1-11.1l-152-145.9c-1.6-1.6-3.7-2.3-5.8-2.1-2.1-.1-4.2.6-5.8 2.1L98.3 256.6c-3.1 3-3 8 .1 11.1l21.9 21.4c3.1 3.1 8.2 3.1 11.3.1L256 169.8z"/></svg>',
    "clipboard": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M183.2 127.4h145.5c-1.3-15.2-7.3-26.8-21.2-30.6-.3-.1-.8-.3-1.2-.4-9.1-2.6-15.9-5.8-15.9-15.8V65c0-19.3-15.6-35-34.9-35-19.3 0-34.9 15.7-34.9 35v15.6c0 9.9-6.5 13-15.6 15.6-.3.1-.6.5-1 .6-13.6 3.7-19.3 15.4-20.8 30.6zM256 54.5c5.8 0 10.4 4.7 10.4 10.5s-4.7 10.5-10.4 10.5-10.4-4.7-10.4-10.5c0-5.7 4.6-10.5 10.4-10.5z"/>    <path d="M369 53.8h-56.2v10.6c0 8 7 14.4 14.8 14.4h28.2c5.1 0 9.2 4.1 9.4 9.3l.1 248c-.3 4.8-4 8.8-8.8 9.1H156.1c-4.7-.3-8.4-4.3-8.7-9.2l-.1-247.9c.3-5.1 4.4-9.3 9.5-9.3h28.3c7.8 0 14-6.4 14-14.4V53.8h-55.4c-11.4 0-21.1 9.6-21.1 21.3v273.1c0 11.8 9.7 21.7 21.1 21.7H369c11.5 0 20.3-9.9 20.3-21.7v-273c.1-11.8-8.8-21.4-20.3-21.4z"/>    <path d="M177.2 151.6h84.9v24.3h-84.9v-24.3zm0 145.6h121.3v24.3H177.2v-24.3zm0-48.5H275V273h-97.8v-24.3zm0-48.5h157.7v24.3H177.2v-24.3z"/></svg>',
    "close": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M412.4 309.1L303 199.3 412.6 91c4.5-4.5 4.5-11.8 0-16.3l-31.2-31.3c-2.2-2.2-5.1-3.3-8.2-3.3-3.1 0-6 1.2-8.2 3.3L256 151.3 146.8 43.4c-2.2-2.2-5.1-3.3-8.2-3.3-3.1 0-6 1.2-8.2 3.3l-31 31.4c-4.5 4.5-4.5 11.8 0 16.3L209 199.4 99.7 309.1c-2.2 2.2-3.4 5.1-3.4 8.2 0 3.1 1.2 6 3.4 8.2l31.2 31.3c2.2 2.2 5.2 3.4 8.2 3.4 2.9 0 5.9-1.1 8.2-3.4L256 247.4l109 109.3c2.3 2.2 5.2 3.4 8.2 3.4 2.9 0 5.9-1.1 8.2-3.4l31.2-31.3c2.2-2.2 3.4-5.1 3.4-8.2-.2-3-1.5-5.9-3.6-8.1z"/></svg>',
    "cloud": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M376.6 180.7c0-1.1.1-2 .1-3.1 0-55.1-43.9-99.7-98.2-99.7-39.1 0-72.7 23.3-88.5 56.9-6.9-3.4-14.6-5.5-22.7-5.5-25.1 0-46 18.5-49.9 42.9-30 10.2-51.5 38.9-51.5 72.8 0 42.6 34 77.1 75.9 77.2h234.8c38.4-.2 69.4-31.9 69.4-70.8.1-39-31-70.6-69.4-70.7z"/></svg>',
    "code": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M168 321.5c-6.4 0-12.5-2.5-17-7l-112-112c-9.4-9.4-9.4-24.6 0-33.9l112-112c9.4-9.4 24.6-9.4 33.9 0 9.4 9.4 9.4 24.6 0 33.9l-95 95 95 95c9.4 9.4 9.4 24.6 0 33.9-4.4 4.6-10.5 7.1-16.9 7.1zm176 0c6.4 0 12.5-2.5 17-7l112-112c9.4-9.4 9.4-24.6 0-33.9l-112-112c-9.4-9.4-24.6-9.4-33.9 0-9.4 9.4-9.4 24.6 0 33.9l95 95-95 95c-9.4 9.4-9.4 24.6 0 33.9 4.4 4.6 10.5 7.1 16.9 7.1z"/></svg>',
    "company": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M171.3 349.3h64.9v-44.9h39v44.9h64.9V109.6H171.3v239.7zm116.9-214.6h28.1v28.1h-28.1v-28.1zm0 56.7h28.1v28.1h-28.1v-28.1zm0 56.7h28.1v28.1h-28.1v-28.1zm-46.6-113.4h28.1v28.1h-28.1v-28.1zm0 56.7h28.1v28.1h-28.1v-28.1zm0 56.7h28.1v28.1h-28.1v-28.1zm-46.5-113.4h28.1v28.1h-28.1v-28.1zm0 56.7h28.1v28.1h-28.1v-28.1zm0 56.7h28.1v28.1h-28.1v-28.1zM76 349.3h76.1v-180H76v180zm24-157.9h28.1v28.1H100v-28.1zm0 56.7h28.1v28.1H100v-28.1zm260-78.8v180h76v-180h-76zm52 106.9h-28.1v-28.1H412v28.1zm0-56.7h-28.1v-28.1H412v28.1zM195 80.1h121.3v19.3H195V80.1zm25.4-29.4h70.4V70h-70.3V50.7h-.1z"/></svg>',
    "disconnected": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M86 271.7c.9-3.9 1.7-7.9 2.9-11.9 2.9-9.1 7.9-17 14.7-23.7l69.5-69.5c.4-.4.8-.7 1-.9l18.1 18.1c-.6.6-1.4 1.5-2.3 2.4l-67.1 67.1c-8.3 8.3-12.3 18-10.3 29.8 2 11.9 8.8 20.4 19.8 24.7 11.2 4.5 22.1 3.1 31.9-4.4 2.1-1.6 4.1-3.4 5.9-5.3l77.7-77.7c1.3-1.4 2.6-2.7 4.3-4.5-9.4-2.9-17.6-7-24.8-13.4-7.1-6.4-11.9-14.5-16.5-23.1 7.4-4.1 14.8-8.3 22.5-12.6 5.5 11 12.1 20.8 25.4 23.9-2.4-12-8.9-20.4-19.9-25-11.1-4.6-21.6-2-32.3 2.7-2.9-8.2-5.8-16.1-8.6-23.9 31.1-16.8 77.7-2.7 86.4 41.7.9-.4 1.8-.9 2.6-1.3 31.8-17.9 63.6-35.6 95.4-53.6 11.5-6.5 17.7-16.4 17.6-29.8-.1-23.1-25.2-39-45.9-28.6-15 7.5-29.4 16.2-44.1 24.4-21.6 12.1-43.2 24.2-64.8 36.4-.9.5-1.9 1.1-3.2 1.7-4.1-7.4-8.3-14.7-12.5-22.2.9-.6 1.6-1.1 2.4-1.6 35.3-19.8 70.5-39.8 105.8-59.3 21.9-12.1 43.6-11.5 64 3.1 18 12.9 26.1 31.1 23.6 53.3-2.2 20.3-12.8 35.2-30.4 45.1-32.9 18.6-65.9 37.1-98.9 55.4-3.9 2.2-8.3 3.6-12.4 5.5-1.2.6-2.6 1.7-3.1 2.9-3.4 8.1-8.5 14.9-14.6 21.1-26.4 26.4-52.8 52.7-79.1 79.1-12.4 12.5-27.4 18.6-45.1 18.1-27.1-.9-51.2-22.4-54.9-49.3-.1-1.1-.5-2.1-.7-3.2v-11.7zM116.8 156c-3.4 0-5.9-2-6.3-5-.5-3.4 1.2-6 4.9-6.8 8-1.6 16.1-3.1 24.1-4.5l43.1-7.7c4-.7 7 1.1 7.7 4.4.7 3.5-1.2 6.4-5.1 7.1-22.5 4.1-45 8.2-67.5 12.2-.4.3-.8.3-.9.3zm74.5-109.6c0-3.5 2.1-5.9 5.1-6.4 3.1-.4 5.9 1.3 6.6 4.7 1.4 6.5 2.4 13 3.6 19.6 2.9 16 5.8 31.9 8.6 47.9.7 3.9-1.2 7-4.6 7.6-3.5.6-6.4-1.3-7.1-5.3-4.1-22.3-8.1-44.6-12.1-66.8-.1-.5-.1-1.1-.1-1.3z"/></svg>',
    "division": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M375.4 343.2c-6.5 0-12-2.4-16.7-7-4.6-4.6-7-10.2-7-16.7 0-6.7 2.4-12.3 7-16.8 4.6-4.6 10.2-6.8 16.7-6.8 6.7 0 12.3 2.3 16.8 6.8 4.6 4.6 6.8 10.1 6.8 16.8 0 6.5-2.3 12-6.8 16.7-4.5 4.8-10.1 7-16.8 7zm-119.2 0c-6.5 0-12-2.4-16.7-7-4.6-4.6-7-10.2-7-16.7 0-6.7 2.4-12.3 7-16.8s10.2-6.8 16.7-6.8 12 2.3 16.7 6.8c4.6 4.6 7 10.1 7 16.8 0 6.5-2.4 12-7 16.7-4.7 4.8-10.2 7-16.7 7zm-119.1 0c-6.7 0-12.3-2.4-16.8-7-4.6-4.6-6.8-10.2-6.8-16.7 0-6.7 2.3-12.3 6.8-16.8s10.1-6.8 16.8-6.8c6.5 0 12 2.3 16.5 6.8 4.6 4.6 6.8 10.1 6.8 16.8 0 6.5-2.3 12-6.8 16.7-4.7 4.8-10.1 7-16.5 7zm119.1-286c6.5 0 12 2.3 16.7 6.8 4.6 4.6 7 10.1 7 16.8 0 6.5-2.4 12-7 16.7-4.6 4.6-10.2 7-16.7 7s-12-2.4-16.7-7c-4.6-4.6-7-10.2-7-16.7 0-6.7 2.4-12.3 7-16.8 4.8-4.5 10.3-6.8 16.7-6.8zm136.6 225.2v-39.6c0-16.4-5.8-30.4-17.5-42.1s-25.8-17.5-42.5-17.5h-34c-7.1 0-13.1-2.5-18.2-7.5-5-5-7.5-11-7.5-18.2v-39.6c7.1-3.1 12.9-8 17.3-14.6s6.7-14.1 6.7-22.3c0-11.3-4-21-12-28.9-8-8-17.6-12-28.9-12-11.3 0-21 4-28.9 12-8.1 7.9-12.1 17.6-12.1 28.9 0 8.2 2.2 15.7 6.7 22.3 4.5 6.7 10.2 11.6 17.3 14.6v39.6c0 7.1-2.5 13.1-7.5 18.2-5 5-11 7.5-18.2 7.5h-34c-16.7 0-30.8 5.8-42.5 17.5-11.6 11.6-17.5 25.7-17.5 42.1v39.6c-6.8 3.3-12.5 8.3-17 14.8-4.4 6.5-6.7 14-6.7 22.5 0 11.3 4 20.9 12 28.8s17.6 11.8 28.9 11.8 20.9-4 28.8-12c7.9-8 11.8-17.5 11.8-28.6 0-8.4-2.2-15.9-6.7-22.5-4.4-6.5-10.1-11.5-17-14.8v-39.6c0-7.1 2.5-13.1 7.5-18.2 5-5 11-7.5 18.2-7.5h34c4.6 0 9.1-.5 13.3-1.5 4.2-1 8.3-2.5 12.4-4.5v71.3c-7.1 3.3-12.9 8.3-17.3 14.8s-6.7 14-6.7 22.5c0 11.3 4 20.9 12 28.8 8 7.9 17.6 11.8 28.9 11.8s21-4 28.9-12c8-8 12-17.5 12-28.6 0-8.4-2.2-15.9-6.7-22.5-4.4-6.5-10.2-11.5-17.3-14.8v-71.3c4 2 8.1 3.5 12.4 4.5 4.2 1 8.7 1.5 13.3 1.5h34c7.1 0 13.1 2.5 18.2 7.5 5 5 7.5 11 7.5 18.2v39.6c-6.8 3.3-12.5 8.3-17 14.8-4.4 6.5-6.7 14-6.7 22.5 0 11.3 3.9 20.9 11.8 28.8s17.5 11.8 28.8 11.8 21-4 28.9-12c7.9-7.9 12-17.5 12-28.6 0-8.4-2.2-15.9-6.7-22.5-4-6.6-9.7-11.5-16.5-14.8z"/></svg>',
    "document": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M382.4 132.5c-.6-2.6-1.8-4.4-3.1-6l-74.1-81.2c-1.7-1.9-3.6-2.7-5.8-3.9-2.6-1.3-5.4-1.4-8.3-1.4H149.5c-11 0-21 8.5-21 20.3v296.8c0 11.9 10 22.9 21 22.9h215.2c11 0 18.8-11.1 18.8-22.9V140.9c0-3.1-.4-5.5-1.1-8.4zm-83-51.2l51.4 56.2h-51.4V81.3zM156.8 351.8V68.4H271v72.3c0 13.1 11.9 25.1 24.9 25.1h59.2v185.9H156.8z"/></svg>',
    "drag": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 123.7h320v20H96v-20zm0 60h320v20H96v-20zm0 60h320v20H96v-20zm125.4 67.2l.4.5 30.4 35.1c1 1.2 2.6 1.9 4.3 1.9s3.2-.8 4.3-1.9l30.4-35 .5-.6c.4-.6.6-1.2.6-1.9 0-1.9-1.7-3.6-3.7-3.6h-64.2c-2.1 0-3.7 1.6-3.7 3.6.1.6.4 1.3.7 1.9zm70.4-233.4l-.4-.5L261 41.9c-1-1.2-2.6-1.9-4.3-1.9s-3.2.8-4.3 1.9l-30.4 35-.5.6c-.4.6-.6 1.2-.6 1.9 0 1.9 1.7 3.6 3.7 3.6h64.2c2.1 0 3.7-1.6 3.7-3.6-.1-.6-.3-1.3-.7-1.9z"/></svg>',
    "earth": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M236.1 106.8c-1.6-2.8-6.8-8.5-10-9.5-4.3-.7-1.7 3.2-1.7 4.8-1.1.8-2.8 1.8-3.6 2.9-.5.4 1.2 4.4 4.5 3.1 3.3-1.3 1.4 1.3 3.7 6.3s6.9 5.1 8.9 3.6c2.6-2-.4-8.6-1.8-11.2zm13.2 32.2zm42 18.9c.3 0-1.3-.3 0 0z"/>    <path d="M256 40c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160S344.4 40 256 40zm-59 283.9c-3.9-2.2-6.7-5.4-7.8-11.4-2.8-14.9-.2-22.9 12.8-31.6 6.1-4.1 7.2-9.1 12.1-14 1.2-1.5 4.4-7.4 6.6-7.7 2.6-.6 9.8-1.8 11.2-4.6 2.7-3.7 8.7-19.6 11.3-21.1 4.3-2.8 10.3-11.4 5.9-16.5-5-6.2-12-6.3-18.5-9.5-5.7-2.9-8.3-15.9-12.6-20.4-8.5-8.7-21.4-13.7-32.1-19.1-5.8-2.3-5.2-3-9.8 1.5-5.8 5.8-14.4-1.5-15.2-7.5-.1-2-2.4-13-1-13.9 12.8-8-5.9-6.2-7.5-9.9-3.8-10.7 9.3-19.2 18.1-20.1 9.9-1.2 12 15.6 15.8 14.2 1.8-.9 1.8-8.9 2.1-10.6.9-5.7 2.6-6.6 8.1-8.7 6.5-2.4 11.5-5.4 18.4-6.6 7.9-2.3 14.5-1.1 20.6-6.1 2.8-2.1 4.8 1.1 7.4 1.7 5.7 1.1 6.9-7.9 6.9-11.4 0-3.3.9-6.2-3.4-9.7-5.6-4.3-13.6-.6-18.1 3.9-5.4 5-11.7 4.7-9.9-4 .5-3.2 7.3-6.8 10-8.6 2.6-1.6 4.2 1.8 7.4 1 4.7-1 6.5 3.4 12 3.4 2.3-.5 10.6-4.9 6.2-13.8h2c1.3 0 2.6 0 4 .1 2 6.3-4.3 11.7-1.1 19.7 6.3 15.3 11.4 2.2 17.6-5 2-2 3.3-1.6 6.6-2.2 2.1-.3 5-6.6 6-8.6 14.3 3.5 28 9.4 40.4 17.3-5.3.6-6.7-1-6.6 5.3 0 2.4.2 9.5 3.8 10.1 5.9.7 4.8 4.9 10.4 5.6 5.3.7 2 5.4 4.2 10 2.4 7.3-14.1 9.5-17.4 10.6-9.7 3.3 4.5 17.4 10.9 15.9 2-.5 8.7-1.4 9.2-3.6 0-.2-1.3-7.9-.6-8.7 1.1-1.4 3.7-2.1 7.7.2 9.6 5.4 14.4 18.4 25.6 20.9 1.5.3 4.2-.1 6.1 1.5 1.6 2.2 5.7 6 .8 6-6.4-1.4-9.8.6-15.1-3.5-5.5-4.3-9-7.8-16.2-7.9-6.3-.1-11.9-2.7-18.4-1.7-3.6.6-7.2 2-10.7 3.1-3.3 1.1-3.9 7-7.3 7.6-13.9 3.3-10.9 16.5-13.4 27.1-1 4-4.3 15-.7 18.6 6.5 6.3 14.1 15 23.7 16.4 5.1.7 16.4-3.3 19.9 2 1.5 2.9 5.3-2.2 6.4.4 2.6 7.8-3 13-3.1 20.4-.1 10.9 6.6 14.7-2.3 24.4-9.7 9.7-3.1 22-8.5 33.6-2.9 6-3.4 14.2-7.8 17-9.5 6.1-19.8 11-30.5 14.6-19 6.3-39.4 8.3-59.3 6-10.5-1.2-20.7-3.6-30.6-7.2-2.7-1-5.2-1.8-7.5-2.6-1.8-.8-3.5-1.5-5.2-2.3zm-29.8-19.4c-.3-.3-.7-.6-1-.9-2.5-2.1-4.9-4.4-7.2-6.7-2.4-2.4-4.7-4.9-7-7.5l-.1-.1c-.5-.5-.9-1.1-1.3-1.6-36.9-44.6-42.3-109.9-11.4-159.9 4.3 4.3-2.9 12.9 5.4 18.6 3.7 2.6 7.2 1.5 6.4 6.3-.7 4.6 3.8 4.5 4.5 8.6 2 8.9 13.7 13.3 7.1 23.3-6.5 9-12.1 19.1-7.2 30.6 1.6 4.2 5.7 8.5 8.7 11.6 5.6 5.7 5.3 2.3 5.3 9.5-.1 3.1 3.8 6.4 3.4 8.4-.7 5.7-2.1 11.4-2.8 17.1-1.3 20.5-.1 40.5 15.2 55.8-5.7-3.4-11.2-7.3-16.4-11.6-.5-.6-1.1-1-1.6-1.5z"/></svg>',
    "easel": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M130.3 120h251.4v137.1H130.3V120z"/>    <path d="M404.6 85.7H107.4c-6.3 0-11.4 5.1-11.4 11.4V280c0 6.3 5 11.4 11.3 11.4h297.3c6.3 0 11.4-5.1 11.4-11.4V97.1c0-6.3-5.1-11.4-11.4-11.4zm-11.5 182.9H118.9v-160h274.3v160zM130.3 360h22.9l20.1-57.1h-22.4L130.3 360zM266.6 40h-21l-12.4 34.3h45.7L266.6 40zm72.2 262.9l20.1 57.1h22.9l-20.6-57.1h-22.4zm-94.2 0h22.9v34.3h-22.9v-34.3z"/></svg>',
    "edit": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M189.6 331.1l-64.7-64.7L303.7 87.6l64.7 64.7-178.8 178.8zM410.1 80.3l-34.4-34.4c-8.4-8.4-22.5-7.8-31.6 1.3l-32.3 32.3 64.7 64.7 32.3-32.3c9.1-9.1 9.7-23.2 1.3-31.6zM118.9 276.6L96 360l83.4-22.9-60.5-60.5z"/></svg>',
    "ellipsis": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M130 242.5c-24.3 0-44-18.9-44-42.5 0-23.5 19.7-42.5 44-42.5 24.4 0 44.1 19 44.1 42.5 0 23.6-19.7 42.5-44.1 42.5zm126 0c-24.3 0-44.1-18.9-44.1-42.5 0-23.5 19.8-42.5 44.1-42.5s44 19 44 42.5c0 23.6-19.7 42.5-44 42.5zm125.9 0c-24.3 0-44.1-18.9-44.1-42.5 0-23.5 19.7-42.5 44.1-42.5 24.3 0 44.1 19 44.1 42.5 0 23.6-19.7 42.5-44.1 42.5z"/></svg>',
    "email": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M100.7 112.2c9 4.8 133.9 72.8 138.5 75.2 4.7 2.4 9.3 3.6 16.8 3.6s12.1-1.2 16.8-3.6c4.7-2.4 129.5-70.5 138.5-75.2 3.4-1.7 9-4.8 10.2-8.3 2.1-6.2-.2-8.6-9.2-8.6H99.7c-9 0-11.4 2.4-9.2 8.6 1.2 3.7 6.9 6.6 10.2 8.3z"/>    <path d="M419.2 116c-6.7 3.4-66.8 46.2-106.7 72l67.1 75.6c1.6 1.6 2.3 3.6 1.5 4.6-1 .8-3.1.4-4.8-1.2l-80.5-68c-12.2 7.9-20.7 13.3-22.2 14-6.3 3.2-10.7 3.6-16.8 3.6-6.1 0-10.4-.4-16.8-3.6-1.6-.8-10.1-6.2-22.2-14l-80.5 68c-1.6 1.6-3.8 2.1-4.8 1.2-1-.8-.2-3 1.4-4.6L201 188c-39.8-25.7-100.6-68.5-107.3-72-7.3-3.7-7.8.6-7.8 4v167.6c0 7.6 11.2 17.1 19.2 17.1h303.2c8 0 17.5-9.6 17.5-17.1V120c.2-3.5.7-7.8-6.6-4z"/></svg>',
    "eye-disabled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M347.4 125.9l54.3-54.4-17.1-17.2-58.9 58.9C304.6 102.6 281.5 96 256 96c-62.2 0-110.6 39.6-170 104 26.5 28.4 50.7 55.1 78.4 74.5l-54.1 54.1 17.1 17.1 58.3-58.3C206.3 297.8 229 304 256 304c75.9 0 131.6-62 170-102.8-21.2-25.9-47.4-54.6-78.6-75.3zm-159.4 74c0-38.2 30.5-69.3 68-69.3 14.7 0 28.3 4.7 39.3 12.9L256.8 182c-.5-2-.8-4.1-.8-6.3 0-5.9 2.2-11.5 5.7-15.7-1.9-.3-3.8-.4-5.7-.4-21.9 0-39.7 18.2-39.7 40.5 0 6.5 1.5 12.8 4.2 18.2L199.8 239c-7.4-11.1-11.8-24.6-11.8-39.1zm68 69.4c-14.7 0-28.3-4.7-39.3-12.9l20.8-20.8c5.5 3.1 11.8 4.7 18.5 4.7 21.9 0 39.7-18.2 39.7-40.5 0-1.7-.1-3.5-.3-5.2-4.1 3.3-9.4 5.2-15 5.2-2.2 0-4.2-.3-6.3-.9l38.1-38.1c7.4 11.1 11.8 24.5 11.8 39 0 38.4-30.5 69.5-68 69.5z"/></svg>',
    "eye": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 102.9c-62.2 0-110.6 37.1-170 97.1 51.1 51.4 94.1 97.1 170 97.1s131.6-58 170-96c-39.3-44.7-95-98.2-170-98.2zm0 166.4c-37.5 0-68-31.1-68-69.3 0-38.2 30.5-69.3 68-69.3s68 31.1 68 69.3c0 38.3-30.5 69.3-68 69.3z"/>    <path d="M256 175.8c0-5.9 2.2-11.5 5.7-15.7-1.9-.3-3.8-.4-5.7-.4-21.9 0-39.7 18.2-39.7 40.5s17.8 40.5 39.7 40.5 39.7-18.2 39.7-40.5c0-1.7-.1-3.5-.3-5.2-4.1 3.3-9.4 5.2-15 5.2-13.6-.2-24.4-11-24.4-24.4z"/></svg>',
    "face-hide": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M218.3 156.3c-.1-.1-1.6-2.9-4-13.3l-.2-.8-.3-.8c-.7-2-.4-2.9-.3-3.2 2-6.5 2.7-9.7 2.7-12.8v-1l-.1-1c-1-8.3-2.1-16.9-3.1-25.2-.7-7.5 3.4-16.5 11.9-26.8 8.3-10 21.5-14.8 40.6-14.8 19 0 32.3 4.8 40.6 14.8 4 4.8 6.9 9.3 8.9 13.4l12.1-12.1c-2.4-4.2-5.2-8.1-8.3-11.9C307.4 46.9 289.7 40 265.7 40s-41.8 6.9-53.3 20.8c-11.5 13.8-16.7 26.8-15.7 38.8 1 8.9 2.1 17.5 3.1 25.8 0 1.1-.6 3.7-2 7.8-1.3 4.2-1.2 8.6.4 13.3 2.1 9.4 4.2 15.7 6.3 18.8 2.1 3.1 3.7 7.3 4.7 12.5.7 3.8 1.4 7.3 2.2 10.5l13.9-13.9c-1.4-7.3-3.7-13.3-7-18.1M416 340.7l-1.6-31.3c-2.1-10.4-23.2-23.2-63.4-38.4-1.3-.4-2.6-.9-3.9-1.6-24.5-8.9-37.3-13.8-38.4-14.9-3.1-2.1-4.7-11-4.7-26.6 0-6.3 2.3-12.4 7-18.4 4.7-6 8.4-16.6 11-31.7 1-5.2 2.6-9.4 4.7-12.5 1.4-2.1 2.8-5.7 4.2-10.5L304.6 181c-2.6 12.2-5.4 16.9-6.5 18.4-7 8.9-10.5 18.6-10.5 28.5 0 18.8 1.8 32 10.4 39.1 2.8 2.6 7 4.7 42.8 17.6 1.4.7 3 1.3 4.7 1.9 40 15.1 50.3 24 52.7 26.7l.5 11H161.4l-16.5 16.5H416zM390 67.8L111 346.7l-15-15 278.9-279L390 67.8z"/></svg>',
    "face-show": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M3570.2 218.6c-524.3 0-911.8 151-1162.7 453-250.6 302.2-364.6 584.2-341.8 846.4 22.8 193.8 45.6 381.8 68.3 564.2 0 22.8-14.4 79.7-42.9 170.8-28.3 91.4-25.4 188.2 8.6 290.6 45.6 205.3 91.1 342 136.6 410.4 45.8 68.2 79.9 159.7 102.7 273.6 57 330.4 136.9 561.4 239.3 692.3 102.7 131.2 154 265 154 401.7v102.6c0 250.9-22.8 401.8-68.3 453-45.6 51.4-199.6 122.6-461.7 213.7-164.8 58.5-330.1 115.5-496 171-877.6 330.7-1339.2 609.9-1384.8 837.8-22.8 159.7-34.2 387.5-34.2 684H6853l-34.3-684c-45.6-227.8-507.2-507-1384.8-837.8-29.3-9.3-57.9-20.7-85.6-34-535.8-193.8-815-302.2-837.8-325-68.3-45.6-102.6-239.4-102.6-581.4 0-136.6 51.4-270.5 154-401.7 102.4-131 182.2-361.9 239.4-692.3 22.8-113.9 56.8-205.4 102.6-273.6 45.6-68.4 91.2-205.1 136.7-410.4 34.1-102.4 36.9-199.3 8.4-290.6-28.3-91.2-42.7-148-42.7-170.8 22.8-182.5 45.6-370.5 68.4-564.2 22.7-262.2-91.2-544.2-341.8-846.4-250.9-301.9-638.5-452.9-1162.7-452.9m0 359.6c415.6 0 705.4 105.8 885.9 323 186.8 225.2 274.4 422.1 261.4 574.6-22.8 192.8-45.6 380.1-68.2 561.4l-2.9 22.2v22.6c0 66.4 14.9 136.7 59.2 278.2 2.2 7 8.2 25.8-6.4 69.5l-6 17.5-3.8 18.2c-50.6 227.8-85.1 288.7-85.1 288.7-72.5 108.8-123.5 240.6-157.6 412-63.3 367-138.9 494.2-168.2 532-153 195.2-230.4 405-230.4 623.2 0 410.1 39 699.4 226.2 853.6 60.6 56.3 152 101.6 934.8 384.8 31 14.4 65.3 27.8 103.8 40.8 873 329.6 1097 523 1149.8 583l12 240H654.5c4.3-90.4 10.4-168.8 18.2-234.2 42.4-52 250.6-247.8 1154.1-588.6 165.1-55.4 329.7-112.1 493.8-170.2 401-139.6 531.7-223.8 612.2-314.4 114.6-129 159.2-323 159.2-692.2v-102.6c0-218.2-77.4-428-230.4-623.2-29.3-37.8-104.8-165-169.8-541.4-32.3-162.1-83.4-293.8-154.4-400-1.4-2.4-35.8-63.5-86.6-291.4l-3.8-18.2-6-17.5c-14.6-43.7-8.6-62.6-6.5-69.6 44.3-141.4 59.2-211.7 59.2-278.2v-22.6l-2.9-22.2c-22.6-181.4-45.3-368.6-66.9-550.6-14.2-163.4 73.4-360.2 260.2-585.4 180.7-217 470.5-322.8 886.1-322.8" clip-path="url(#d)"/></svg>',
    "film-marker": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M404 150.8H139.4l262.5-52.3c6.5-1.2 10.8-7.5 9.5-13.9l-6.8-34.9c-1.2-6.5-7.5-10.6-14.1-9.4L105.8 96.8c-6.5 1.2-10.8 7.5-9.5 13.8l6.8 34.9c.5 2.2 1.6 4 3 5.5-5.7.9-10.1 5.5-10.1 11.5v160.9c0 6.5 5.4 11.8 12 11.8h296c6.6 0 12-5.3 12-11.8V162.6c0-6.5-5.4-11.8-12-11.8zM293.7 300.3l-39-27.9-39 27.9 15-44.9-39.1-27.7h48.2l14.8-44.9 14.8 44.9h48.2l-39.1 27.7 15.2 44.9z"/></svg>',
    "flag": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M398.1 165.4c-29.8 4.9-78.5 6.3-110.9-55.1-34.7-65.9-90.7-67.9-123.4-61.9-15.9 2.9-27.8 16.3-27.8 29.2v163.9c9.4 3.6 19.5-.2 22.1-.7.7-.2 1.3-.3 2-.4 20.8-4.6 42.8-6.8 97.4 19.4 68.4 32.8 128.2-27.6 151.4-69.6 1.7-2.9 7.3-16.8 7.3-30.2-8.3 3.4-18.1 5.4-18.1 5.4zM116 40h-13.3C99 40 96 43 96 46.7v360.1c0 3.7 3 6.7 6.7 6.7H116c3.7 0 6.7-3 6.7-6.7V46.7c0-3.7-3-6.7-6.7-6.7z"/></svg>',
    "folder-open": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M385.4 120H255.9l-30.5-34.3h-99c-16.8 0-30.5 13.7-30.5 30.5v167.7c0 16.8 13.7 30.5 30.5 30.5h259.1c16.8 0 30.5-13.7 30.5-30.5V150.5c-.1-16.8-13.8-30.5-30.6-30.5zm7.7 163.8c0 4.1-3.5 7.6-7.6 7.6H126.3c-4.1 0-7.6-3.5-7.6-7.6v-141h266.7c4.1 0 7.6 3.5 7.6 7.6v133.4z"/></svg>',
    "forward": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M282.7 195.1V272L416 160 282.7 40v66.7C126.7 106.7 96 280 96 280c44.2-77.5 102-84.9 186.7-84.9z"/></svg>',
    "gear-a": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M385.2 200c0-19.9 12.3-35.7 30.8-46.5-3.3-11.1-7.8-21.8-13.2-31.8-20.8 5.4-37.5-2.7-51.7-16.8-14.1-14.1-18.4-30.9-13-51.7-10-5.4-20.7-9.8-31.8-13.2C295.5 58.5 276 70.8 256 70.8c-19.9 0-39.5-12.2-50.3-30.8-11.2 3.3-21.8 7.8-31.8 13.2 5.4 20.8 1.1 37.5-13 51.7-14.1 14.1-30.9 22.2-51.6 16.8-5.5 10-9.9 20.7-13.2 31.8 18.5 10.8 30.8 26.6 30.8 46.5s-12.3 39.5-30.8 50.3c3.3 11.2 7.8 21.8 13.2 31.8 20.8-5.4 37.5-1.1 51.6 13 14.2 14.1 18.4 30.9 13 51.7 10.1 5.4 20.7 9.8 31.8 13.2 10.8-18.5 30.4-30.8 50.3-30.8s39.5 12.2 50.3 30.8c11.2-3.3 21.8-7.8 31.8-13.2-5.4-20.8-1.1-37.5 13-51.7 14.1-14.1 30.9-22.3 51.7-16.8 5.4-10.1 9.8-20.8 13.2-31.8-18.5-10.8-30.7-26.6-30.8-46.5zM256 281.9c-45.2 0-81.9-36.7-81.9-81.9s36.7-81.9 81.9-81.9 81.9 36.7 81.9 81.9-36.7 81.9-81.9 81.9z"/></svg>',
    "grid-layout": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 172.7h185.5v185.5H96V172.7zm209.1 96.4H416v89.1H305.1v-89.1zm0-96.4H416v72.7H305.1v-72.7zM228.7 40H416v109.1H228.7V40zM96 40h109.1v109.1H96V40z"/></svg>',
    "grid": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M159.9 97.2c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7V46.7c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zm128.1 0c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7V46.7c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zm128 0c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7V46.7c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zM159.9 225.3c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zm128.1 0c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zm128 0c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zm-256.1 128c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zm128.1 0c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zm128 0c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5z"/></svg>',
    "hammer": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M379.8 20H338c-2.7 0-4.8 2.2-4.8 4.8v4.5c-3.2 3.2-8.8 7.9-14.3 7.9-8.4 0-11.9-13.2-21-14.8S276 20 267.4 20c-8.6 0-41.8.6-82 17.3s-57.5 52.2-58 65.4c-.2 7 2.2 17 8 8.9s28.4-34 46.4-35.9c17.9-1.8 36.7.6 51.2 13.8 13.9 12.6 17.1 24.8 17.1 59.1l-5.3 1.6c-3.5 1-5.6 4.6-5.6 7.2 0 0-.2 5.2-.2 56.6 0 76-8.7 161.2-8.7 161.2 0 2.7 2.2 4.8 4.8 4.8h67.5c2.7 0 4.8-2.2 4.8-4.8 0 0-8.7-85.2-8.7-161.2 0-51.4-.2-56.6-.2-56.6 0-2.7-1.8-6.3-5.6-7.2l-6.4-1.6c0-30.7-.3-43.4 5.1-53 5.6-10 17.9-18.4 23.9-20.2 4.7-1.4 12.9 1 17.7 5.2v11.7c0 2.7 2.2 4.8 4.8 4.8h41.8c2.7 0 4.8-2.2 4.8-4.8V24.8c0-2.6-2.2-4.8-4.8-4.8z"/></svg>',
    "heart": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M389.8 64.4c-31.1-32.4-81.5-32.4-112.6 0L256 86.3l-21.2-22c-31.2-32.4-81.5-32.4-112.6 0-35 36.4-35 95.5 0 131.8L256 335.4l133.8-139.2c34.9-36.4 34.9-95.5 0-131.8z"/></svg>',
    "help-circled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 40c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160S344.4 40 256 40zm14.4 233.4c-.4 12.7-9.8 20.6-22 20.2-11.7-.4-20.9-8.7-20.6-21.5.4-12.7 10.1-20.8 21.8-20.4 12.3.3 21.3 8.9 20.8 21.7zm34.8-91c-3 4.2-9.7 9.6-18.1 16.2l-9.4 6.4c-4.6 3.5-7.4 7.6-8.9 12.4-.8 2.5-1.4 9-1.5 13.4-.1.9-.6 2.8-3.2 2.8h-27.9c-2.9 0-3.3-1.7-3.2-2.6.4-11.9 2.1-21.6 7.1-29.5 6.6-10.6 25.4-21.7 25.4-21.7 2.9-2.1 5.1-4.4 6.8-6.9 3.1-4.3 5.7-9.1 5.7-14.2 0-5.9-1.4-11.6-5.2-16.3-4.4-5.5-9.2-8.1-18.4-8.1-9.1 0-14.4 4.6-18.1 10.6-3.8 6-3.1 13.1-3.1 19.5h-34.8c0-24.3 6.4-39.8 19.8-48.9 9.1-6.2 20.6-8.9 34.1-8.9 17.7 0 31.8 3.3 44.2 12.7 11.5 8.7 17.6 21 17.6 37.6-.2 10-3.8 18.6-8.9 25.5z"/></svg>',
    "help": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M333.5 44.4C309.6 26.3 282.6 20 248.4 20c-25.9 0-48.1 5.3-65.7 17.1-25.9 17.7-38 47.3-38 94.2h66.8c0-12.5-1.2-26 6.1-37.6s17.5-20.5 34.9-20.5c17.7 0 26.9 5.1 35.5 15.7 7.3 9 10.1 19.8 10.1 31.3 0 9.9-5 19.1-11.1 27.3-3.3 4.9-7.7 9.3-13.1 13.4 0 0-36.1 21.5-48.8 41.8-9.5 15.1-12.9 34.1-13.6 56.8-.1 1.7.6 5 6.3 5h53.7c5 0 6.1-3.8 6.2-5.4.3-8.3 1.4-20.9 2.9-25.7 2.9-9 8.4-17 17.1-23.7l18-12.5c16.3-12.7 29.2-23 35-31.2 9.8-13.4 16.7-29.9 16.7-49.5-.1-31.7-11.9-55.3-33.9-72.1zm-89.7 254.9c-22.5-.7-41.1 15-41.9 39.4-.7 24.5 17 40.6 39.6 41.3 23.5.7 41.7-14.5 42.4-38.9.7-24.4-16.6-41.1-40.1-41.8z"/></svg>',
    "home": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M416 226.7L256 40 96 226.7h40V360h80V253.3h80V360h80V226.7h40z"/></svg>',
    "icecream": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M153.3 200l102.8 180 102.8-180H153.3zm220.6-67.1c-.6-.3-1.2-.6-1.8-1-3.5-2.2-6.7-6.8-7-10.2l.1-.6c2.6-7.2 4-15.4 4-23.9 0-42.7-34.5-77.2-77.2-77.2-25.2 0-47.6 12-61.7 30.8 0 0-7.3 11.2-8.7 23.3 0 0 .9-15.6 3.4-25.3-5.9-2-12.4-3.1-19-3.1-33.5 0-60.7 27.1-60.7 60.7 0 5.1.6 10.1 1.8 14.9 0 .3-.1.6-.2.8-.7 4.1-3.2 7.6-6.7 9.9-.6.4-1.2.7-1.8 1-6.6 4-10.8 10.9-10.8 18.8 0 12.4 10.8 22.5 24 22.5h209.1c13.2 0 23.9-10 23.9-22.5.1-7.9-4.2-14.9-10.7-18.9z"/></svg>',
    "images": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M409 112.1l-62.6-3.1-3.6-40.8c-.7-8.6-8.4-14.6-17.4-13.9L100.8 72.8c-8.9.7-15.4 8-14.8 16.5l16 178.9c.7 8.6 8.5 14.6 17.4 13.9l11.4-1-1.8 34.7c-.4 9.6 7 17.3 17 17.9l250.6 11.9c10 .4 18.3-6.5 18.8-16l10.5-199.8c.5-9.5-7-17.2-16.9-17.7zm-269.4 4.1l-5.4 102.3-13.2 18.7-12.2-135.1v-.7c.4-3.8 3.3-6.8 7.2-7.1L314.1 78c3.9-.3 7.3 2.2 8 6 0 .1.2.1.2.3 0 .1.2.1.2.3l2 23.4-166.1-8c-10-.3-18.3 6.7-18.8 16.2zM393.2 296l-35.5-42-20.8-24.9c-1.8-2.2-4.8-4-8.1-4.1-3.3-.1-5.7 1.2-8.4 3.1l-12.4 9c-2.7 1.6-4.7 2.7-7.5 2.6-2.8-.1-5.2-1.2-6.9-2.9-.6-.6-1.7-1.7-2.7-2.6l-32.5-37.1c-2.3-3-6.3-4.9-10.5-5.1-4.4-.2-8.5 1.6-11.3 4.3l-76.7 82.6-5.2 5.6.2-5.2 5.2-97.9 2.6-47.7v-.7c1.1-4.1 4.7-7 9-6.8l154.9 7.4 21.8 1.1 44.2 2.1c4.4.2 7.9 3.6 7.9 7.8 0 .1.2.2.2.4 0 .1.2.2.2.4L393.2 296z"/>    <path d="M256 181.6c13.9 0 25.1-11.3 25.1-25.1 0-13.9-11.2-25.1-25.1-25.1s-25.1 11.2-25.1 25.1 11.2 25.1 25.1 25.1z"/></svg>',
    "information-circled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M416 197.9c-1.2-88.3-73.8-159-162.1-157.8s-159 73.7-157.9 162c1.2 88.3 73.8 159 162.1 157.8 88.4-1.1 159.1-73.7 157.9-162zM256 97.1c12.6 0 22.9 10.2 22.9 22.9s-10.2 22.9-22.9 22.9-22.9-10.2-22.9-22.9 10.3-22.9 22.9-22.9zm31.4 202.2h-62.9v-7.9h15.7V177.1h-15.7v-8.6h47.1v122.8h15.7v8z"/></svg>',
    "ios-book": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M179.7 40c-46 0-83.7 21.7-83.7 65.8v235.8h18.5c10.7-21.9 36.9-35 65.3-35 33.5 0 61.6 22.9 68 53.3h1.6V66.1C235 48.3 208.5 40 179.7 40zm152.7 0c-28.6 0-55.6 8.2-69.7 25.8V360h1.5c6.4-30.4 34.6-53.3 68.1-53.3 28.4 0 51 9.7 65.4 35H416V105.8c0-44.2-37.6-65.8-83.6-65.8z"/></svg>',
    "ios-briefcase": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M132.9 76.9h24.6v12.3h-24.6V76.9zM96 150.8h320v184.6H96V150.8zm258.5-73.9h24.6v12.3h-24.6V76.9z"/>    <path d="M379.1 89.2v24.6h-24.6V89.2h-36.9V64.6c-.4-14-10.5-24.6-24.8-24.6h-76.2c-14.3 0-22.1 10.5-22.1 24.6v24.6h-36.9v24.6H133V89.2H96v49.2h320V89.2h-36.9zm-73.9-.4v.4h-98.5v-23c0-7.8 2.2-13.9 10.5-13.9H292c8 0 13.2 5.9 13.2 13.9v22.6z"/></svg>',
    "ios-circle-filled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 40c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160S344.4 40 256 40zm0 306.7c-80.8 0-146.7-65.8-146.7-146.7 0-80.8 65.8-146.7 146.7-146.7 80.8 0 146.7 65.8 146.7 146.7 0 80.8-65.9 146.7-146.7 146.7z"/>    <path d="M256 76.9c-68 0-123.1 55.1-123.1 123.1S188 323.1 256 323.1 379.1 268 379.1 200 324 76.9 256 76.9z"/></svg>',
    "ios-circle-outline": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 40c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160S344.4 40 256 40zm0 306.7c-80.8 0-146.7-65.8-146.7-146.7 0-80.8 65.8-146.7 146.7-146.7 80.8 0 146.7 65.8 146.7 146.7 0 80.8-65.9 146.7-146.7 146.7z"/></svg>',
    "ios-close-empty": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M396.3 40L255.7 180.5l-140-139.8L96 60.3 236 200 96 339.8l19.7 19.5 140-139.7L396.3 360l19.7-19.5L275.3 200 416 59.7 396.3 40z"/></svg>',
    "ios-copy": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M156.9 341.7V72.5h-28.4V370H341v-28.4l-184.1.1z"/>    <path d="M317.4 30H171v297.5h212.6V96.4L317.4 30zm37.7 99.1h-70.9V58.4h14.2V115h56.7v14.1z"/></svg>',
    "ios-finger-print": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M450.8 182c-8.6-24.4-20.3-44.9-33-57.5-2.6-2.6-6-4-9.7-4-3.7 0-7.1 1.4-9.7 4-5.3 5.3-5.3 14 0 19.4 9.9 9.9 19.6 27.4 26.8 48.1 7.3 21.2 11.4 43.6 11.4 63.1 0 3-.1 7.6-.2 10.1-.2 3.7 1.1 7.1 3.6 9.8 2.5 2.7 5.8 4.3 9.5 4.4h.6c7.3 0 13.3-5.7 13.7-13.1.1-3.1.2-8.1.2-11.3 0-22.8-4.7-48.8-13.2-73zM143 110.6c2.9 0 5.6-.9 8-2.6 29.9-21.4 66.2-32.7 105-32.7 40.8 0 80.1 14.8 113.7 42.8 2.5 2 5.6 3.2 8.8 3.2 4.1 0 7.9-1.8 10.5-4.9 4.8-5.8 4-14.4-1.7-19.3C348.6 65 303.3 48 256 48c-44.6 0-86.4 13.1-121 37.8-3 2.1-4.9 5.3-5.5 8.9-.6 3.6.2 7.2 2.4 10.2 2.5 3.6 6.7 5.7 11.1 5.7zM75.4 255c0-43.7 15.8-85.8 44.5-118.7 2.4-2.8 3.6-6.3 3.3-9.9-.2-3.6-1.9-7-4.7-9.4-2.5-2.2-5.7-3.4-9-3.4-4 0-7.7 1.7-10.3 4.7C66.2 156.2 48 204.7 48 255c0 32.8 5.9 58.8 15.4 90.2 1.8 5.8 7 9.7 13.1 9.7 1.3 0 2.7-.2 4-.6 3.5-1.1 6.4-3.4 8.1-6.6 1.7-3.2 2.1-6.9 1-10.4-8.8-29-14.2-52.8-14.2-82.3z"/>    <path d="M355.7 129.8C328.4 106.1 295 93.6 259 93.6c-48.3 0-91.4 17.8-121.5 50.1-28.7 30.8-42.8 71.7-39.7 115.1 2.3 32.7 6 50.7 9.3 66.6 4.3 21.1 7.7 37.8 5.1 84.1-.4 6.7 3.7 12.7 10 14.6 1.2.4 2.3.5 3.6.5 7.2 0 13.2-5.7 13.7-12.9 2.9-50.4-.8-68.7-5.5-91.9-3.1-15.1-6.6-32.2-8.8-63.1-2.6-35.7 9-69.3 32.4-94.5 24.8-26.7 60.9-41.4 101.4-41.4 29.3 0 56.5 10.2 78.7 29.5 22.3 19.3 39.2 47.4 49 81.1 11.4 39.3 14.5 89.3 9.1 144.5-.7 7.5 4.8 14.2 12.3 15 .4 0 .9.1 1.3.1 7.1 0 12.9-5.3 13.6-12.4 5.8-58.7 2.3-112.2-10.1-154.8-11.1-38.6-30.9-71.2-57.2-94z"/>    <path d="M373.5 267.5c-5.9-37.5-19.9-68.8-40.6-90.6-20.8-22-47.4-33.7-76.9-33.7-19 0-37.7 4.1-54.1 12-3.7 1.8-6.4 5.1-7.4 9.1-1 4.1-.1 8.3 2.5 11.6 2.6 3.4 6.5 5.3 10.8 5.3 2.1 0 4-.5 5.9-1.3 12.6-6 27.2-9.2 42.2-9.2 22.4 0 42.5 9.2 58.3 26.6 16.1 17.8 27.3 43.6 32.1 74.6 4.7 29.6 7 53.5 7.1 73.1.2 39.7-4.8 72.7-4.8 73.1-.6 3.6.3 7.2 2.5 10.2 2.2 3 5.3 4.9 8.9 5.5.7.1 1.4.2 2.1.2 6.8 0 12.5-4.9 13.5-11.6.2-1.4 5.4-35.2 5.2-77.5 0-21.3-2.4-46.5-7.3-77.4zm-188.2-64c4-5.8 2.9-13.6-2.5-18.2-2.5-2.1-5.6-3.2-8.8-3.2-4.5 0-8.7 2.2-11.3 5.9-14.7 21.5-19.7 49.1-14.4 79.8 8.9 51.3 16.9 111.1 9.4 165-.5 3.8.5 7.7 2.9 10.7 2.3 3 5.7 4.8 9.4 5.1.4 0 .8.1 1.2.1 6.8 0 12.6-5.1 13.5-11.8 8.2-57.7-.2-120.2-9.5-173.8-4.1-23.8-.7-43.9 10.1-59.6zM317.5 388h-.5c-7.6.3-13.5 6.6-13.2 14.2 0 .2.6 17.9-2.6 34.7-1.3 6.9 2.6 13.7 9.1 15.8 1.4.4 2.8.7 4.3.7 6.6 0 12.2-4.7 13.4-11.1 3.8-20.1 3.1-40.2 3.1-41.1-.2-7.5-6.2-13.2-13.6-13.2z"/>    <path d="M294.6 205.9c-11.2-10.5-25.2-16.1-40.5-16.1-19.8 0-36.7 7.3-47.6 20.5-8.3 10.1-17 28.8-10.9 60 12.3 62.5 15 121.6 8.1 175.6-1 7.5 4.4 14.4 11.8 15.3.6.1 1.2.1 1.7.1 6.9 0 12.7-5.1 13.6-12 7.3-57 4.5-119-8.3-184.4-3.2-16.4-1.4-29.3 5.1-37.3 5.6-6.8 15-10.5 26.4-10.5 25 0 35.1 27.6 38.3 39.4 6.9 25.7 10.9 63 11.5 107.7.1 7.4 6.2 13.5 13.7 13.5h.2c3.6-.1 7-1.5 9.6-4.1 2.5-2.6 3.9-6.1 3.9-9.7-.7-47-5-86.5-12.5-114.4-4.9-18.5-13.1-33.2-24.1-43.6z"/>    <path d="M265.2 245.9c-2.1-5.1-7.1-8.5-12.7-8.5-1.8 0-3.6.4-5.2 1-7 2.9-10.3 10.9-7.4 17.9 6.6 16 11.8 46.2 14.1 82.8 2.4 36.9 1.7 76.9-2 109.6-.4 3.6.6 7.2 2.9 10.1 2.3 2.9 5.5 4.6 9.2 5 .5.1 1 .1 1.5.1 7 0 12.8-5.2 13.6-12.2 3.9-35.5 4.6-76.6 2-115.8-2.5-39.3-8.2-71.3-16-90z"/></svg>',
    "ios-lightbulb-outline": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M378.1 119.6C378.1 53.5 322.1 0 256 0S133.9 53.5 133.9 119.6c0 26.3 11.2 50 25.7 70.4h-.2c9.3 12.8 18.2 23.5 26.7 38.2 18.6 32.1 15.8 63 15.8 69.2v1.3h108.5v-1.3c0-7.6-3.1-37.2 15.6-69.2 8.6-14.7 17.5-25.4 26.7-38.2h-.1c14.3-20.4 25.5-44.1 25.5-70.4zm-41.5 69c-.5.7-.9 1.3-1.5 2-6.9 9.3-13.9 18.9-20.9 30.6-14.7 25.2-17.3 49.1-17.6 63.6h-13.4V190l27.1-54.3h-14L269.6 190v95h-27.1v-95l-26.6-54.3h-14L229 190v95h-13.5c-.4-14.6-3.3-38.7-17.7-63.5-3.8-6.5-7.7-12.8-11.6-17.8h.1L170.4 182c-13.4-18.4-23-39.9-23-62.5 0-28.3 13.6-55 33.6-74.9s46.7-31.1 74.9-31.1 55 11.2 74.9 31.1c20 20 33.6 46.7 33.6 74.9 0 22.5-9.6 44-23 62.4l-4.8 6.7zM228.9 366.4h54.3V380h-54.3v-13.6zm-13.5-27.1h81.5v13.6h-81.5v-13.6zm0-27.2h81.5v13.6h-81.5v-13.6z"/></svg>',
    "ios-list-outline": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M402.7 53.3v293.3H109.3V53.3h293.4M416 40H96v320h320V40z"/>    <path d="M202.7 113.3h160v13.3h-160v-13.3zm0 80h160v13.3h-160v-13.3zm0 80h160v13.3h-160v-13.3z"/>    <circle cx="162.7" cy="120" r="13.3"/>    <circle cx="162.7" cy="200" r="13.3"/>    <circle cx="162.7" cy="280" r="13.3"/></svg>',
    "ios-people": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M233.8 282.2c11.8 4.2-11.8-4 0 0z"/>    <path d="M330.9 282.2c-14-4.9-29.3-5.3-43.4-10.1-4.2-1.5-12.7-3.2-14.5-8.3-1.6-4.8-1.6-10.3-2.1-15.5-.1-3.9-.3-7.9-.3-11.8 0-2.6 6.8-8.2 8.3-10.4 5.6-9.4 6.2-22 7.1-32.5 9.1 2.4 10.2-14.3 11.8-19.4 1.1-3.6 8.2-27.9-2.8-24.5 2.6-4.6 3.7-10.2 4.4-15.4 2.1-13.3 2.9-27.9-1.1-41.1-8.5-27.1-34.4-42.2-61.7-43.2-27.9-.8-55.8 12.4-66.1 39.5-4.9 13.1-4.6 27.4-2.9 41.2.8 6.3 1.7 13.3 4.9 18.8-10.1-3.1-4.7 18.5-3.5 22.2 1.6 5.3 3.1 24.4 12.6 21.8.8 8.4 1.7 17.1 4 25.2 1.6 5.5 4.8 10.2 8.6 14.5 1.9 2.1 2.8 2.3 2.8 4.9-.1 8.3.1 17-2.1 24.8-2.1 7.9-19.5 11.2-26.4 12.7-18.8 3.8-36 5.6-51.7 17.3-18.2 13.4-27.8 34.4-27.8 57h289.8c-.2-30.4-18.7-57.4-47.9-67.7z"/>    <path d="M232.9 269.6l1.6-.8-.8.5c-.2-.2-.6-.1-.8.3zm-116.7 0l.8-.5.8-.5c7.1-3.3 14.7-4.2 22.4-4.9 2.9-.3 4.2-2.3 2.1-5.2-4.2-5.3-18.6-6.4-24.5-8.7-3.8-1.5-4.8-2.8-5.2-7-.1-1.9-1.2-10.2.3-11.5.9-.9 7.6-.7 9.1-.8 6-.8 11.9-2.1 17.7-4.2 2.3-.8 4.7-2.1 6.8-3.5 2.4-1.9-1.9-6.4-3.1-8.8-3.5-7.9-5.2-16.3-5.6-24.9-.9-16.9 1.6-33.7-1.6-50.4-4.7-25.6-24.4-38.4-49.5-38.4-15.5 0-30.8 5.3-39.6 18.8-9.6 14.9-9.1 33.5-8.6 50.5.3 9.6.8 19.5-.7 29.3-.7 4.2-1.6 8.3-3.1 12.3-1.2 3.1-7 10.4-4.7 12.2 8.6 6.2 23.3 8.3 33.7 7.5.3 5.2 1.3 11.7-.7 16.5-2.9 7.5-24.8 9.5-31.2 11.7C13.6 264.7 0 279.5 0 300.4h82.9c1.3 0 6.5-9.6 8-11.2 7.3-8 15.8-14.8 25.3-19.6zm319-11.1c-8.4-2.8-24.8-3.5-30.8-10.8-3.1-3.7-1.3-13-.9-17.3 4.6.5 9.6-.3 14.3-.8 4.2-.7 8.4-1.5 12.6-2.9 1.9-.8 3.8-1.5 5.5-2.4 4-2.3 2.3-2.8.1-6.4-11.4-19.2-6.3-43.1-6.8-64.2-.5-17.3-4.9-36.5-20.9-46.2-14.3-8.8-35.5-9.2-50.8-2.9-44.3 17.7-18.1 76.3-33.3 109.9-2.6 5.6-6.4 7.6.1 11 3.7 1.9 7.6 3.1 11.5 4 6 1.5 12.3 2.3 18.6 2.4.9 0 .3 13.1 0 14.5-1.1 5.2-12.3 6.5-16.5 7.8-4.2 1.2-11.4 1.5-13.4 6-3.1 6.8 10.3 4.9 13.8 5.6 10.8 2.1 20.3 7.9 28.7 14.7 6.3 5.2 14.7 11.9 17 20.3h83.6c-.4-21.5-14.1-36.4-32.4-42.3z"/></svg>',
    "ios-personadd": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M426 80.6h-26.6V54h-14.9v26.6H358v14.9h26.6V122h14.9V95.4H426V80.6zm-56 224c-13.7-4.9-33.4-6.6-45.9-9.3-7.2-1.6-17.7-5.6-21.2-9.8-3.5-4.2-1.4-43.5-1.4-43.5s6.5-10.2 10-19.1c3.5-8.9 7.3-33.4 7.3-33.4s7.2 0 9.8-12.6c2.8-13.8 7-19.5 6.5-29.9-.5-9.6-5.5-10.1-6.1-10.1s5.2-14.5 5.9-45.1C335.8 55.7 308.1 20 256 20s-79.7 35.6-78.9 71.8c.6 30.5 6 45.1 6 45.1-.5 0-5.5.5-6.1 10.1-.5 10.3 3.8 15.8 6.5 29.6 2.6 12.6 9.8 12.8 9.8 12.8s3.8 24.5 7.3 33.5 10 19.1 10 19.1 2.1 39.2-1.4 43.5c-3.5 4.2-14 8.2-21.2 9.8-12.6 2.8-32.2 4.6-45.9 9.5-13.7 4.9-56 21.4-56 55.4h340c-.1-34.2-42.4-50.7-56.1-55.6z"/></svg>',
    "ios-telephone-hang-up": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M43.6 268.8c19.2.2 64.2-8.4 81.9-26 4.1-4.1 6.7-8.5 7.8-13.4 3.2-14.1 5.6-25.3 9.1-28.6 1.9-1.9 5.4-2.1 13.4-2.7l1.4-.1c22.1-1.5 27.3-1.5 36.7-1.3l2.4.1c1.6 0 3.3.1 4.6.1 8.1.1 14 .1 36 1.5l1.1.1c10.5.6 17.4 1.1 20.2 3.5 2.7 2.4 4.7 8.8 6.7 22.5 2.5 16.5 13.9 28.4 33.8 35.5 15.9 5.6 34.4 7.4 50.7 9.2l1.5.1c14.1 1.5 25.4-2.1 33.6-10.2 9.2-9.2 11.9-21.6 13.3-28.2.1-.5.1-1.2.4-1.6 3.3-14.7 2-29.1-3.5-39.5-8.4-15.6-21.4-33.8-71.4-48.4-43.3-12.7-75.9-17.6-120.5-18.2-42-.5-58.1 1.9-93.5 7.5-39.5 6.4-71.2 18.8-86.5 34.2C8.6 179-2.7 190.3.6 225.9c3.1 37.1 22.5 42.5 43 42.9z"/></svg>',
    "ios-telephone": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M401.4 272.2c-13.3-13.6-51-39.2-75.7-39.2-5.7 0-10.7 1.3-14.8 3.9-12.1 7.7-21.7 13.7-26.4 13.7-2.5 0-5.3-2.3-11.3-7.5l-1-.9c-16.6-14.5-20.2-18.2-26.6-24.9l-1.6-1.7c-1.2-1.2-2.2-2.3-3.2-3.3-5.6-5.8-9.7-10-24.2-26.4l-.6-.7c-6.9-7.8-11.5-12.9-11.7-16.6-.3-3.6 2.9-9.5 11-20.5 9.8-13.3 10.2-29.6 1.2-48.6-7.2-15-18.9-29.4-29.3-42l-.9-1.1C177.3 45.5 167 40 155.4 40c-12.8 0-23.5 6.9-29.1 10.5-.5.3-.9.6-1.4.9-12.6 8-21.8 19-25.3 30.2-5.2 16.8-8.6 38.6 16.2 84 21.5 39.3 40.9 65.6 71.8 97.4 29.1 29.8 42 39.4 70.9 60.4 32.2 23.3 63.1 36.6 84.7 36.6 20.1 0 35.9 0 58.4-27.2 23.8-28.6 14-46-.2-60.6z"/></svg>',
    "junk-email": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M110.4 129c8.5 4.5 126 68.5 130.4 70.8 4.4 2.3 8.8 3.4 15.8 3.4 7.1 0 11.4-1.1 15.8-3.4s121.9-66.4 130.4-70.8c3.2-1.6 8.5-4.5 9.6-7.8 2-5.8-.2-8.1-8.7-8.1H109.5c-8.5 0-10.7 2.3-8.7 8.1 1.2 3.5 6.5 6.2 9.6 7.8z"/>    <path d="M410.2 132.6c-6.3 3.2-62.9 43.5-100.4 67.8l63.2 71.2c1.5 1.5 2.2 3.4 1.4 4.3-.9.8-2.9.4-4.5-1.1l-75.8-64c-11.5 7.4-19.5 12.5-20.9 13.2-5.9 3-10.1 3.4-15.8 3.4-5.7 0-9.8-.4-15.8-3.4-1.5-.8-9.5-5.8-20.9-13.2l-75.8 64c-1.5 1.5-3.6 2-4.5 1.1-.9-.8-.2-2.8 1.3-4.3l63.2-71.2c-37.5-24.2-94.7-64.5-101-67.8-6.9-3.5-7.3.6-7.3 3.8v157.7c0 7.2 10.5 16.1 18.1 16.1h285.4c7.5 0 16.5-9 16.5-16.1V136.4c0-3.3.5-7.4-6.4-3.8z"/></svg>',
    "link": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M216.5 152.5h-.5.5zM327.4 105h-48s25.8 16.9 31.2 47.5h16.7c17.5 0 31.1 13.8 31.1 31.1v31.7c0 17.5-13.8 32.2-31.1 32.2H216.6c-17.5 0-32.2-14.7-32.2-32.2v-31.2h-47.5v31.2c0 11.4 2.5 22.3 6.9 32.2 12.5 27.9 40.5 47.5 72.8 47.5h110.8c43.7 0 78.6-35.9 78.6-79.7v-31.7c0-43.7-34.9-78.6-78.6-78.6z"/>    <path d="M288.8 152.5c-12-28-39.7-47.5-72.3-47.5H105.7C61.9 105 26 139.9 26 183.6v31.7C26 259 61.9 295 105.7 295h47s-25.5-16.9-31.8-47.5h-15.2c-17.5 0-32.2-14.7-32.2-32.2v-31.7c0-17.5 14.7-31.1 32.2-31.1h110.8c17.5 0 31.1 13.8 31.1 31.1v32.2h47.5v-32.2c.1-11-2.1-21.6-6.3-31.1z"/></svg>',
    "load-d": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M421 185h-75c-8.2 0-15 6.8-15 15s6.8 15 15 15h75c8.2 0 15-6.8 15-15s-6.8-15-15-15zm-240 15c0-8.2-6.8-15-15-15H91c-8.2 0-15 6.8-15 15s6.8 15 15 15h75c8.2 0 15-6.8 15-15zm75 75c-8.2 0-15 6.8-15 15v75c0 8.2 6.8 15 15 15s15-6.8 15-15v-75c0-8.2-6.8-15-15-15zm0-255c-8.2 0-15 6.8-15 15v75c0 8.2 6.8 15 15 15s15-6.8 15-15V35c0-8.2-6.8-15-15-15zm65 142.5c4.2 7.2 13.3 9.7 20.5 5.5l65-37.5c7.2-4.2 9.7-13.3 5.5-20.5-4.2-7.2-13.3-9.7-20.5-5.5L326.6 142c-7.4 4.2-9.7 13.2-5.6 20.5zm-130 75c-4.2-7.2-13.3-9.7-20.5-5.5l-65 37.5c-7.2 4.2-9.7 13.3-5.5 20.5s13.3 9.7 20.5 5.5l65-37.5c7.2-4.2 9.6-13.3 5.5-20.5zm123 32.9c-4.2-7.2-13.3-9.7-20.5-5.5-7.2 4.2-9.7 13.3-5.5 20.5l37.5 65c4.2 7.2 13.3 9.7 20.5 5.5 7.2-4.2 9.7-13.3 5.5-20.5l-37.5-65zM186.5 49.6c-4.2-7.2-13.3-9.7-20.5-5.5s-9.7 13.3-5.5 20.5l37.5 65c4.2 7.2 13.3 9.7 20.5 5.5s9.7-13.3 5.5-20.5l-37.5-65zm107 85.4c7.2 4.2 16.3 1.7 20.5-5.5l37.5-65c4.2-7.2 1.7-16.3-5.5-20.6-7.2-4.2-16.3-1.7-20.5 5.5L288 114.5c-4.1 7.2-1.7 16.4 5.5 20.5zm-75 130c-7.2-4.2-16.3-1.7-20.5 5.5l-37.5 65c-4.2 7.2-1.7 16.3 5.5 20.5s16.3 1.7 20.5-5.5l37.5-65c4.1-7.2 1.7-16.4-5.5-20.5zm187.9 4.4l-65-37.5c-7.2-4.2-16.3-1.7-20.5 5.5-4.2 7.2-1.7 16.3 5.5 20.5l65 37.5c7.2 4.2 16.3 1.7 20.5-5.5 4.1-7.1 1.7-16.2-5.5-20.5zM105.6 130.5l65 37.5c7.2 4.2 16.3 1.7 20.5-5.5 4.3-7.2 1.7-16.3-5.5-20.5l-65-37.5c-7.2-4.2-16.3-1.7-20.5 5.5-4.2 7.2-1.7 16.3 5.5 20.5z"/></svg>',
    "locked": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M134.9 360h242.3c8.7 0 16-7 16-15.8V192.8c0-8.7-7.1-15.7-16-15.7h-15.4V155c0-29.7-11.6-62.6-30.4-82.5C312.5 52.8 285.6 40 256.1 40h-.2c-29.5 0-56.4 12.8-75.3 32.6-18.9 19.9-30.4 52.8-30.4 82.5v22.1h-15.4c-8.8 0-16 7-16 15.7v151.4c0 8.7 7.2 15.7 16.1 15.7zm53.2-205c0-19.5 7-43.6 20.1-57.3v-.3c12.6-13.3 29.9-21.1 47.7-21.1h.2c17.8 0 35.1 7.8 47.7 21.1v.2l-.1.1c13 13.7 20.1 37.9 20.1 57.3v22.1H188.1V155z"/></svg>',
    "log-in": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 40c-68.2 0-126.5 42.7-149.5 102.9h24.7c6.7-14.6 16-28.1 27.8-39.8 25.9-25.9 60.3-40.2 97-40.2 36.6 0 71.1 14.3 97 40.2 25.9 25.9 40.2 60.3 40.2 97 0 36.6-14.3 71.1-40.2 97-25.9 25.9-60.3 40.2-97 40.2-36.6 0-71.1-14.3-97-40.2-11.7-11.7-21.1-25.2-27.8-39.8h-24.7c23 60 81.3 102.7 149.5 102.7 88.4 0 160-71.6 160-160S344.4 40 256 40z"/>    <path d="M220.9 248.5l16.2 16.2 64.7-64.6-64.7-64.7-16.2 16.2 37.1 37.1H96v22.9h162l-37.1 36.9z"/></svg>',
    "log-out": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M335.2 248.5l16.2 16.2L416 200l-64.6-64.7-16.2 16.2 37.1 37.1h-162v22.9h162l-37.1 37z"/>    <path d="M352.8 297c-25.9 25.9-60.3 40.2-97 40.2-36.6 0-71.1-14.3-97-40.2-25.9-25.9-40-60.3-40-97 0-36.6 14.1-71.1 40-97 25.9-25.9 60.3-40.2 97-40.2 36.6 0 71.1 14.3 97 40.2 1.8 1.8 3.5 3.6 5.2 5.5h29.1C358.2 67.1 310.2 40 255.8 40 167.4 40 96 111.6 96 200s71.4 160 159.8 160c54.4 0 102.4-27.1 131.3-68.6H358c-1.7 1.9-3.4 3.8-5.2 5.6z"/></svg>',
    "md-finger-print": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M78.1 205.6c-2.4 0-4.9-.6-7.1-1.9-6.7-3.9-9-12.4-5.1-19.1 17.8-30 71.9-100.1 190.1-100.1 51.2 0 96.1 13.6 133.4 40.4 30.7 22 47.9 46.9 56.1 58.9 4.4 6.4 2.7 15-3.7 19.4-6.4 4.3-15.2 2.7-19.6-3.7-14.9-21.6-60.1-87.2-166.2-87.2-103.6 0-150.4 60.4-165.7 86.3-2.6 4.6-7.3 7-12.2 7z"/>    <path d="M315.5 480c-1.2 0-2.3-.1-3.5-.4-85.7-21.5-117.7-108.1-119-111.7l-.2-.8c-.7-2.5-17.9-61.9 8.5-96.7 12.1-15.9 30.5-24 54.8-24 22.6 0 38.9 7.1 50.1 21.8 9.2 12 12.9 26.8 16.5 41.1 7.5 29.7 12.9 45.3 44.1 46.9 13.7.7 22.7-7.4 27.8-14.3 13.8-18.8 16.2-49.5 5.8-76.5-13.4-35-60.8-100.9-144.4-100.9-35.7 0-68.5 11.6-94.8 33.4-21.8 18.1-39.1 43.6-47.4 69.8-15.4 48.8 4.8 125.5 5 126.2 2 7.4-2.5 15.1-10 17-7.5 2-15.3-2.5-17.3-9.9-.9-3.5-22.5-85.3-4.7-141.7C106.2 198.2 166 136.6 256 136.6c41.6 0 80.9 14.3 113.7 41.3 25.4 21 46.2 49.2 57 77.4 13.8 36 10.1 76.4-9.4 102.8-13 17.6-31.5 26.8-52 25.8-53.4-2.7-63-40.4-70-67.9-7.2-28.2-11.8-41.8-39.3-41.8-15.1 0-25.7 4.2-32.3 12.9-9 11.9-9.7 30.5-8.7 44 1 14.1 4 25.5 4.7 27.8 2.2 5.6 30.8 76.5 99.3 93.7 7.6 1.9 12.1 9.5 10.2 16.9-1.7 6.3-7.4 10.5-13.7 10.5z"/>    <path d="M205.5 473.6c-3.8 0-7.5-1.5-10.3-4.4-34.3-36.4-53.7-77.1-61-128v-.3c-4.1-33.7 1.9-81.4 31.3-114.2 21.7-24.2 52.2-36.5 90.5-36.5 45.3 0 80.9 21.3 103.1 61.5 16.1 29.2 19.3 58.3 19.4 59.5.8 7.7-4.9 14.5-12.6 15.3-7.7.8-14.7-4.8-15.5-12.4 0-.3-2.8-25.3-16.5-49.7-17.2-30.7-43.4-46.3-78-46.3-29.9 0-53.3 9.1-69.4 27.1-23.2 25.9-27.7 65.8-24.5 92.2 6.4 45 23.5 80.8 53.7 112.8 5.3 5.6 5 14.5-.7 19.7-2.6 2.4-6.1 3.7-9.5 3.7z"/>    <path d="M363.5 433.5c-30 0-55.5-8.4-75.9-25.1-41-33.4-45.6-87.8-45.8-90.1-.6-7.7 5.2-14.4 13-15 7.8-.6 14.5 5.1 15.1 12.8.1.8 4.2 45.3 35.8 70.9 18.7 15.1 43.7 21.1 74.5 17.6 7.7-.9 14.7 4.6 15.6 12.3.9 7.7-4.7 14.6-12.4 15.4-6.8.8-13.5 1.2-19.9 1.2zm23.7-370.9C375.5 54.9 334 32 256 32c-81.9 0-123.5 25.3-132.7 31.7-.6.4-1.2.8-1.7 1.3-.1.1-.2.1-.2.1-2.9 2.6-4.7 6.3-4.7 10.4 0 7.7 6.3 13.9 14.1 13.9 3.1 0 5.9-1 8.2-2.6l-.1.1c.4-.3 36.3-27 117.1-27s116.7 26.8 117.1 27l-.1-.1.2-.2c2.4 1.8 5.3 2.8 8.5 2.8 7.8 0 14.1-6.2 14.1-13.9 0-5.8-3.5-10.8-8.6-12.9z"/></svg>',
    "media-excel": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 40v320h320V40H96zm194.1 243.2l-36.3-54.4-38.4 54.4h-53.3l67.2-87.5-54.4-76.8h54.4l25.6 41.6 26.7-41.6h55.5l-56.5 76.8 64 87.5h-54.5z"/></svg>',
    "media-image": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 40v320h320V40H96zm87.5 80c17 0 31 13.9 31 31s-13.9 31-31 31-31-13.9-31-31c0-18.2 13.9-31 31-31zm180.2 155.7H143l45.9-36.3 23.5 18.1 92.8-72.5 34.1 26.7 23.5-18.1v82.1h.9z"/></svg>',
    "media-pdf": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M160 290.7v1.1c3.2-1.1 8.5-3.2 12.8-7.5 4.3-3.2 10.7-9.6 19.2-20.3-13.9 6.4-21.3 13.9-24.5 17.1-6.4 4.2-7.5 7.4-7.5 9.6zm91.7-101.4c-6.4 16-14.9 32-21.3 43.7h2.1c14.9-4.3 25.6-6.4 35.2-8.5 3.2-1.1 6.4-1.1 9.6-2.1-2.1-3.2-5.3-6.4-7.5-8.5-7.4-7.5-13.8-16-18.1-24.6zm-2.1-42.6c3.2-12.8 5.3-23.5 5.3-30.9v-4.3c0-3.2 1.1-5.3 1.1-7.5-1.1-1.1-2.1-1.1-3.2-2.1h-2.1s-1.1 1.1-2.1 1.1c0 1.1-1.1 3.2-2.1 8.5-1.1 5.3-1.1 10.7 0 17.1-.1 5.3 1 11.7 3.1 18.1z"/>    <path d="M96 40v320h320V40H96zm276.3 226.1c-2.1 3.2-5.3 8.5-13.9 10.7-6.4 2.1-11.7 2.1-18.1 0-5.3-2.1-12.8-5.3-20.3-10.7-7.5-5.3-14.9-11.7-22.4-19.2-3.2-3.2-6.4-6.4-9.6-10.7-5.3 1.1-11.7 1.1-19.2 3.2-8.5 1.1-19.2 4.3-33.1 7.5-6.4 2.1-12.8 4.3-18.1 6.4-1.1 1.1-1.1 2.1-2.1 3.2-11.7 17.1-23.5 30.9-33.1 39.5-7.5 6.4-14.9 9.6-21.3 10.7h-3.2c-5.3 0-8.5-2.1-10.7-6.4-2.1-3.2-2.1-8.5-1.1-13.9 1.1-6.4 4.3-11.7 10.7-17.1 7.5-7.5 18.1-13.9 29.9-20.3 6.4-3.2 13.9-6.4 21.3-8.5 9.6-13.9 22.4-36.3 30.9-60.8 1.1-3.2 2.1-5.3 3.2-8.5-3.2-6.4-4.3-12.8-6.4-17.1-2.1-8.5-4.3-17.1-5.3-23.5-1.1-6.4 0-13.9 0-20.3 1.1-6.4 2.1-10.7 4.3-13.9 3.2-4.3 6.4-6.4 9.6-7.5 2.1-1.1 3.2-1.1 4.3-1.1 2.1 0 4.3-1.1 7.5 0 2.1 1.1 3.2 1.1 5.3 3.2 9.6 4.3 8.5 11.7 7.5 22.4v4.3c-1.1 12.8-5.3 32-11.7 53.3 0 1.1 1.1 2.1 2.1 3.2 5.3 9.6 11.7 20.3 21.3 30.9 4.3 5.3 8.5 10.7 13.9 16h22.4c7.5 1.1 16 2.1 22.4 3.2 8.5 2.1 13.9 4.3 19.2 7.5 6.4 4.3 10.7 9.6 13.9 14.9 2 6.6 3.1 14.1-.1 19.4z"/>    <path d="M349.9 244.8c-3.2-2.1-7.5-4.3-13.9-5.3-6.4-1.1-12.8-3.2-20.3-3.2h-7.5l1.1 1.1c7.5 7.5 13.9 12.8 21.3 18.1 6.4 4.3 11.7 7.5 16 8.5 3.2 1.1 6.4 1.1 9.6 0 1.1 0 3.2-1.1 4.3-3.2 1.1-1.1 1.1-4.3 0-6.4-3.2-4.3-6.4-7.5-10.6-9.6z"/></svg>',
    "media-powerpoint": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 40v320h320V40H96zm212.3 177.1c-8.5 10.7-21.3 17.1-40.5 17.1h-24.5v51.2H206V136h60.8c17.1 0 30.9 5.3 39.5 14.9 7.5 8.5 11.7 19.2 11.7 33.1-.1 12.8-3.3 23.5-9.7 33.1z"/>    <path d="M251.2 164.8h-13.9v39.5h13.9c9.6 0 14.9-2.1 19.2-6.4 3.2-3.2 4.3-8.5 4.3-13.9 0-6.4-2.1-10.7-5.3-13.9-3.3-4.2-9.7-5.3-18.2-5.3z"/></svg>',
    "media-text": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 40v320h320V40H96zm175.5 244.3H145.2v-33.1h126.3v33.1zm94.2-66.2H145.2V185h220.5v33.1zm0-65H145.2V120h220.5v33.1z"/></svg>',
    "media-word": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 40v320h320V40H96zm222.9 244.3h-38.4l-26.7-86.4-27.7 86.4h-38.4L144 136h39.5l25.6 96 30.9-96h29.9l28.8 96 27.7-96h39.5l-47 148.3z"/></svg>',
    "minus-circled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 40c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160S344.4 40 256 40zm91.4 171.4H164.6v-22.9h182.9v22.9z"/></svg>',
    "minus": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 173.4h320v53.3H96v-53.3z"/></svg>',
    "monitor": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M417.3 54.3H94.7c-4.6 0-8.6 3.8-8.6 8.4v201.6c0 4.7 3.9 8.4 8.6 8.4h322.8c4.6 0 8.6-3.8 8.6-8.4V62.7c-.2-4.6-4.1-8.4-8.8-8.4zm-15.7 194.3H110.4v-170h291.4v169.9h-.2zm-110.3 97.1c21.2-.4 31.4-3 22-9.5-9.5-6.6-21.7-11.6-22-17.1-.3-2.7-1.3-34.1-1.3-34.1h-68s-1.2 31.3-1.3 34.1c-.4 5.4-12.5 10.5-22 17.1-9.5 6.6.7 9.1 22 9.5h70.6z"/></svg>',
    "navicon": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 184h320v32H96v-32zm0-96h320v32H96V88zm0 192h320v32H96v-32z"/></svg>',
    "notification-off": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M424.7 67.9c1 1.2 1.3 2.4 1.3 3.9-.1 1.6-.6 2.8-1.8 3.8L108.9 348.8c-1.2 1-2.4 1.3-3.9 1.2-1.6-.1-2.7-.7-3.6-1.8L87.3 332c-1-1.2-1.3-2.4-1.3-3.9.1-1.6.6-2.7 1.8-3.6l31.3-27.1c-2.1-3.5-3.2-7.2-3.2-11.2 5.6-4.7 10.7-9.7 15.3-14.9s9.3-11.8 14.3-20.1 9.1-17.2 12.5-26.7c3.4-9.6 6.3-21.1 8.4-34.6 2.1-13.6 3.3-28.2 3.3-43.8 0-17.1 6.6-32.8 19.8-47.6 13.2-14.7 30.3-23.5 51.6-26.7-1-2.1-1.3-4.4-1.3-6.6 0-4.5 1.6-8.3 4.7-11.5 3.2-3.2 7-4.7 11.5-4.7s8.3 1.6 11.5 4.7c3.2 3.2 4.7 7 4.7 11.5 0 2.2-.4 4.5-1.3 6.6 13.9 2 26.2 6.7 36.9 13.9s18.9 16 24.9 26.6L403.1 51c1.2-1 2.4-1.3 3.9-1.2 1.6.1 2.7.7 3.6 1.8l14.1 16.3zM256 337.3c1.8 0 2.7-1 2.7-2.7 0-1.8-1-2.7-2.7-2.7-6.7 0-12.3-2.4-17.1-7.1-4.8-4.8-7.1-10.4-7.1-17.1 0-1.8-1-2.7-2.7-2.7-1.8 0-2.7 1-2.7 2.7 0 8.2 2.9 15.2 8.7 20.9 5.7 5.9 12.7 8.7 20.9 8.7zm90-144.8c6.9 39.9 23.6 71.2 50.3 93.6 0 5.8-2.1 10.9-6.4 15.2s-9.2 6.4-15.2 6.4h-75.4c0 11.9-4.1 22.1-12.6 30.5-8.4 8.4-18.6 12.6-30.5 12.6-11.9 0-22.1-4.1-30.4-12.5-8.4-8.4-12.6-18.5-12.6-30.4L346 192.5z"/></svg>',
    "notification": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M416 310.8c0 6.6-2.5 12.5-7.3 17.3s-10.6 7.3-17.3 7.3h-86.1c0 13.6-4.8 25.2-14.4 34.8s-21.2 14.4-34.8 14.4-25.2-4.8-34.8-14.4-14.4-21.2-14.4-34.8h-86.1c-6.6 0-12.5-2.5-17.3-7.3S96 317.5 96 310.8c6.4-5.4 12.3-11 17.5-17 5.2-5.9 10.7-13.5 16.3-23 5.7-9.5 10.4-19.6 14.3-30.5s7.2-24.1 9.6-39.6c2.5-15.5 3.7-32.2 3.7-50 0-19.5 7.5-37.5 22.5-54.3 15-16.8 34.6-26.9 59-30.5-1.1-2.5-1.5-4.9-1.5-7.5 0-5.1 1.8-9.5 5.4-13.1 3.6-3.6 8-5.4 13.1-5.4s9.5 1.8 13.1 5.4c3.6 3.6 5.4 8 5.4 13.1 0 2.6-.5 5-1.5 7.5 24.4 3.6 44 13.8 59 30.5s22.5 34.8 22.5 54.3c0 17.8 1.2 34.5 3.7 50s5.7 28.7 9.6 39.6c3.9 10.9 8.7 21 14.3 30.5 5.7 9.5 11.1 17.1 16.3 23 5.5 6 11.3 11.6 17.7 17zm-156.9 55.4c0-2-1.1-3.1-3.1-3.1-7.6 0-14-2.7-19.5-8.1-5.5-5.5-8.1-11.9-8.1-19.5 0-2-1.1-3.1-3.1-3.1s-3.1 1.1-3.1 3.1c0 9.4 3.3 17.3 9.9 23.9 6.6 6.6 14.6 9.9 23.9 9.9 2.1 0 3.1-1.1 3.1-3.1z"/></svg>',
    "nuclear": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <circle cx="256" cy="200" r="34.3"/>    <circle cx="256" cy="200" r="34.3"/>    <path d="M416 200H301.7c0 17.1-9.4 31.9-23.3 39.8l55.9 97.4C382.5 309.6 416 259.5 416 200zm-160-45.7c8.4 0 16.2 2.3 22.9 6.2l57.6-98.8C312.9 47.9 285.4 40 256 40s-57.1 8-80.8 21.9l57 99.1c6.9-4.3 15.1-6.7 23.8-6.7zM210.3 200H96c0 59.5 33.5 109.6 81.7 137.1l55.9-97.4c-14-7.8-23.3-22.6-23.3-39.7z"/></svg>',
    "outlet": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M337.1 40H174.8C131.4 40 96 76.1 96 120.4v159.1c0 44.3 35.4 80.4 78.8 80.4h162.3c43.5 0 78.9-36.1 78.9-80.4V120.4c0-44.3-35.4-80.4-78.9-80.4zm-139 156.4v.5c0 7.8-6.5 14.6-14.2 14.6h-16.6c-7.7 0-14.2-6.8-14.2-14.6V123c.7-7.7 6.6-14.4 14.2-14.4h16.6c7.8 0 14.2 7 14.2 14.9v72.9zm87.2 103.4v1.9c0 8.2-6.3 12.6-14.4 12.6H241c-8 0-14.4-5.8-14.4-14v-20.9c0-16.7 12.9-30.2 29.3-30.2 16.3 0 29.3 13.5 29.3 30.2v20.4zm73.6-103.4v.5c0 7.8-6.5 14.6-14.2 14.6h-17.3c-7.7 0-14.2-6.8-14.2-14.6V123c.7-7.7 6.6-14.4 14.2-14.4h17.3c7.7 0 14.2 7 14.2 14.9v72.9z"/></svg>',
    "outlook": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <script/>    <path d="M298.8 102.8V170l23.5 14.8c.6.2 1.9.2 2.5 0l101.1-68.2c0-8.1-7.5-13.8-11.8-13.8H298.8z"/>    <path d="M298.8 195.1l21.5 14.8c3 2.2 6.7 0 6.7 0-3.6 2.2 99.1-66 99.1-66v123.5c0 13.5-8.6 19.1-18.3 19.1H298.7l.1-91.4zm-111-31c-7.3 0-13.2 3.4-17.4 10.3s-6.5 15.9-6.5 27.2c0 11.5 2.1 20.5 6.5 27.2 4.2 6.7 10 10 16.9 10 7.2 0 12.9-3.3 17.1-9.7 4.2-6.5 6.4-15.5 6.4-27 0-12-2-21.3-6.2-28-4.2-6.6-9.8-10-16.8-10z"/>    <path d="M86 68.7v262.9l200.1 42V29.9L86 68.7zm133.9 175.9c-8.5 11.2-19.4 16.7-33 16.7-13.3 0-24-5.4-32.4-16.1-8.3-10.8-12.5-24.9-12.5-42.2 0-18.3 4.2-33 12.7-44.4 8.5-11.3 19.8-17 33.7-17 13.2 0 23.9 5.4 32.1 16.3 8.2 10.8 12.2 25.1 12.2 42.8-.1 18.1-4.3 32.8-12.8 43.9z"/></svg>',
    "paper-airplane": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 202.1l97.1 36.4L205.3 360l60.7-85 85 85 85-340L96 202.1zm241.8 110.4L266 238.6 363.1 105 217.4 221.8l-62.7-23.5L399.1 67.4l-61.3 245.1z"/></svg>',
    "paperclip": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M324.1 99.9c-6.2-.1-11.3 5-11.3 11.5l-.2 192.6c-.1 43.3-29.4 62.7-56.6 62.5-27.2-.3-56.5-20.2-56.4-63.4 0-33.1.2-165.9.3-232.3 0-15.2 5.9-27.1 16.6-33.3 10.5-6.1 24.1-6 34.6.3 10.7 6.4 16.5 18.4 16.5 33.6l-.3 222.1c0 7.2-1.7 13.1-4.6 16.9-1.9 2.4-4.4 3.8-6.8 3.8-5.5-.1-11.3-7.2-11.2-20.6 0 0 .2-164.5.3-170.8 0-6.4-5-11.7-11.3-11.7s-11.3 5.1-11.3 11.6l-.3 170.8c0 28.7 17 43.8 33.8 44 9.3.1 18.1-4.4 24.3-12.3 6.2-7.9 9.6-18.8 9.6-31.4l.3-222.1c0-23.5-10.1-43.1-27.8-53.7C245 7.5 222.5 7.3 205 17.5c-17.7 10.4-27.9 29.8-28 53.3-.1 66.3-.2 199-.3 232.3-.1 56.6 39.6 86.5 78.9 86.9 20.3.2 40.6-7.6 55.7-22.8 14-14.3 23.4-35.3 23.4-62.7l.1-192.8c.6-6.6-4.5-11.8-10.7-11.8z"/></svg>',
    "person-add": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M400.2 260v-42.5h42.5v-35h-42.5V140h-35v42.5h-42.5v35h42.5V260h35z"/>    <path d="M389.4 360s0-22-1.9-33.5c-1.5-9.1-14.1-21.1-67.5-40.7-52.6-19.4-49.5-9.9-49.5-45.5 0-23.1 11.8-9.7 19.2-53.5 2.9-17.3 5.2-5.7 11.5-33.4 3.4-14.5-2.2-15.6-1.6-22.5.7-6.9 1.3-13.1 2.6-27.3 1.5-17.5-14.7-63.6-73-63.6s-74.5 46.1-72.9 63.7c1.3 14.1 1.9 20.3 2.6 27.3s-4.9 8-1.6 22.5c6.3 27.5 8.6 16.1 11.5 33.4 7.5 43.9 19.2 30.4 19.2 53.5 0 35.7 3.3 26.2-49.5 45.5C85 305.5 72.4 317.5 71 326.6 69.1 338 69.1 360 69.1 360h320.3z"/></svg>',
    "person-blocked": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M203.8 149.1c.5 4.8-3.4 5.5-1.1 15.6 4.4 19.2 6 11.1 8 23.2 2 11.7 4.5 17.6 6.8 21.3l84.8-56.1c-.5-1.2-.8-2.4-.6-4.1.5-4.8.9-9.1 1.8-19 1.1-12.2-10.2-44.2-50.7-44.2s-51.9 32.1-50.7 44.3c.8 9.8 1.2 14.1 1.7 19z"/>    <path d="M435.8 197.9c-.3-28.6-7.2-56-20-80.7-8.7-16.8-20.3-32.3-34.2-46-1.1-1-2.1-2.1-3.3-3-.3-.3-.7-.6-1.1-.9-.8-.7-1.5-1.4-2.3-2-.5-.3-.9-.8-1.4-1.1-.7-.6-1.4-1.1-2-1.8-.5-.3-1-.8-1.5-1.2-.6-.6-1.4-1.1-1.9-1.6-.6-.3-1-.9-1.6-1.2-.6-.5-1.4-1-1.9-1.5-.6-.3-1.1-.8-1.6-1.2-.6-.5-1.2-.9-1.9-1.4-.6-.3-1.1-.8-1.7-1.1-.6-.5-1.2-.9-1.9-1.4-.6-.3-1.1-.8-1.7-1.1-.6-.5-1.2-.9-1.9-1.4-.6-.3-1.1-.8-1.8-1.1-.7-.3-1.2-.9-1.9-1.2-.6-.3-1.2-.7-1.8-1.1-.6-.3-1.4-.8-1.9-1.1-.6-.3-1.2-.7-1.8-1.1-.6-.5-1.4-.8-1.9-1.1-.6-.3-1.2-.7-1.8-1-.6-.3-1.4-.7-1.9-1.1-.6-.3-1.2-.6-1.9-1l-2-1c-.6-.3-1.4-.6-1.9-.9-.7-.3-1.4-.6-2-.9-.6-.3-1.4-.6-1.9-.9-.7-.3-1.4-.6-2-.9-.7-.3-1.4-.6-2-.9-.7-.3-1.4-.6-2-.9-.7-.2-1.4-.6-2-.8-.7-.2-1.4-.6-2-.8-.7-.2-1.4-.5-2-.8-.7-.2-1.4-.5-2.1-.8l-2-.7-2.1-.7c-.7-.2-1.4-.5-2.1-.6-.7-.2-1.4-.5-2.1-.6-.7-.2-1.4-.3-2.1-.6-.7-.2-1.4-.3-2.1-.6-.7-.1-1.4-.3-2.1-.6-.7-.1-1.4-.3-2.1-.6l-2.1-.5c-.7-.1-1.5-.3-2.1-.5l-2.1-.5c-.7-.1-1.5-.3-2.1-.5l-2.1-.3c-.7-.1-1.5-.2-2.1-.3l-2.1-.3c-.7-.1-1.5-.2-2.3-.3l-2.1-.3c-.8-.1-1.5-.1-2.3-.3-.7-.1-1.5-.1-2.1-.2-.8-.1-1.5-.1-2.3-.2-.7-.1-1.5-.1-2.1-.1-.8-.1-1.5-.1-2.3-.1-.7-.1-1.5-.1-2.1-.1-.8-.1-1.6-.1-2.3-.1s-1.5-.1-2.1-.1c-.8 0-1.6-.1-2.3-.1h-5.2c-7.5.1-15 .6-22.3 1.6-10.2 1.4-20.3 3.6-30 6.8-2.8.9-5.5 1.8-8.2 2.8-16.4 6.1-31.8 14.6-46 25.3-7 5.4-13.7 11.3-20 17.8-7.3 7.5-14 15.6-19.8 24.1-1.7 2.4-3.3 4.8-4.8 7.4-3.8 6.3-7.3 12.7-10.4 19.2-.6 1.4-1.2 2.6-1.8 4.1-1.7 4.1-3.3 8.1-4.7 12.3-1.4 4.2-2.7 8.3-3.8 12.6-.8 2.8-1.4 5.7-2 8.6-.6 2.8-1.1 5.7-1.6 8.7-.2 1.5-.5 2.9-.6 4.4l-1 8.8c-.6 6-.7 11.9-.6 17.9.1 7.5.6 15 1.6 22.3 1.1 8.8 3 17.4 5.5 25.9.9 2.8 1.7 5.6 2.6 8.3 1.9 5.5 4.1 10.9 6.5 16.3 2.4 5.3 5.1 10.5 8.1 15.5 2.3 3.8 4.5 7.5 7.1 11.1 1.7 2.4 3.4 4.8 5.2 7.2 1.8 2.4 3.6 4.6 5.5 7 .9 1.1 1.9 2.3 2.9 3.4 2 2.3 4.1 4.4 6.1 6.5l3.2 3.2c1.1 1 2.1 2.1 3.3 3 .3.3.8.7 1.1 1 .7.7 1.5 1.4 2.1 1.9l1.4 1.1 2 1.7c.5.3 1 .9 1.5 1.2.6.6 1.4 1.1 1.9 1.6.6.3 1.1.9 1.6 1.2.6.5 1.2 1 1.9 1.5.6.3 1.1.8 1.6 1.2.6.5 1.2.9 1.9 1.4.6.3 1.1.8 1.7 1.1.6.5 1.2.9 1.9 1.4.6.3 1.1.8 1.7 1.1.6.5 1.2.9 1.9 1.4.6.3 1.1.8 1.8 1.1.6.3 1.2.9 1.9 1.2.6.3 1.2.8 1.8 1.1.6.3 1.4.8 1.9 1.1.6.3 1.2.7 1.8 1.1.6.3 1.4.8 1.9 1.1.6.3 1.2.7 1.8 1s1.4.7 1.9 1.1c.6.3 1.2.6 1.9 1l2 1c.6.3 1.4.6 1.9.9.7.3 1.4.6 2 .9.6.3 1.4.6 1.9.9.7.3 1.4.6 2 .9s1.4.6 2 .9c.7.3 1.4.6 2 .9.7.2 1.4.6 2 .8s1.4.6 2 .8c.7.2 1.4.5 2 .8.7.2 1.4.5 2.1.8l2 .7 2.1.7c.7.2 1.4.5 2.1.6.7.2 1.4.5 2.1.6.7.2 1.4.3 2.1.6s1.4.3 2.1.6c.7.1 1.4.3 2.1.6.7.1 1.4.3 2.1.6l2.1.5c.7.1 1.5.3 2.1.5l2.1.5c.7.1 1.5.3 2.1.5l2.1.3c.7.1 1.5.2 2.1.3l2.1.3c.7.1 1.5.2 2.3.3l2.1.3c.8.1 1.5.1 2.3.3.7.1 1.5.1 2.1.2.8.1 1.5.1 2.3.2.7.1 1.5.1 2.1.1.8.1 1.5.1 2.3.1.7.1 1.5.1 2.1.1.8.1 1.6.1 2.3.1s1.5.1 2.1.1c.8 0 1.6.1 2.3.1h5.5c7.5-.1 15-.6 22.3-1.6 10.2-1.4 20.3-3.6 30-6.8 2.8-.9 5.5-1.8 8.2-2.8 4.1-1.6 8.2-3.2 12.2-5.1 2.6-1.2 5.3-2.5 7.9-3.8 10.4-5.4 20.3-11.8 29.5-19.2 2.4-1.8 4.5-3.8 6.8-5.7 3.3-2.9 6.5-6 9.7-9.2 2.1-2.1 4.2-4.3 6.1-6.5 2-2.3 3.8-4.5 5.7-6.8 1.8-2.4 3.6-4.6 5.4-7 1.8-2.4 3.4-4.8 5.1-7.2 4.1-6.2 7.7-12.5 10.8-19 7.8-15.8 13.1-32.5 15.9-50 .2-1.5.5-2.9.6-4.4.3-3 .8-6.1 1-9.2.2-2.8.3-5.5.6-8.3.1-1.6.1-3.2.1-4.7-.5-1.9-.5-3.4-.5-5zM121 264c-.3-.8-.8-1.6-1.1-2.4l-2.1-4.8c-1-2.4-1.9-4.8-2.8-7.3-1.1-3.3-2.3-6.6-3.2-10-.7-2.6-1.4-5.2-1.8-7.8-1.5-7-2.6-14.1-3-21.4-.1-2.7-.3-5.5-.3-8.2-.1-9 .6-17.8 2-26.4.2-1.2.3-2.5.7-3.6.7-3.6 1.6-7.2 2.5-10.8.6-2.4 1.4-4.7 2.1-7 1.8-5.7 4.1-11.4 6.6-16.9.6-1.1 1-2.1 1.6-3.3 2.1-4.3 4.5-8.4 7-12.6 1.2-2 2.6-4.1 3.9-6 .7-1 1.4-1.9 2.1-2.9 2.1-2.9 4.3-5.7 6.6-8.4 1.6-1.8 3.2-3.6 4.8-5.3 1.6-1.8 3.3-3.5 5.1-5.1 3.4-3.3 7-6.5 10.7-9.5 1.8-1.5 3.8-2.9 5.7-4.4 7.8-5.6 16.1-10.6 24.8-14.6 4.4-2.1 8.9-3.8 13.5-5.5l3.5-1.1c5.7-1.8 11.8-3.4 17.9-4.6 4.8-.9 9.9-1.6 14.9-2.1 3.8-.3 7.5-.6 11.4-.6h5.7c.9 0 1.7.1 2.5.1s1.6.1 2.4.1c.9.1 1.7.1 2.5.1.8.1 1.6.1 2.3.1l2.6.2c.8.1 1.5.1 2.3.2.9.1 1.7.2 2.6.3.7.1 1.5.2 2.1.3.9.1 1.7.3 2.6.3l2.1.3c.9.1 1.7.3 2.6.6l2.1.5c.9.1 1.7.3 2.6.6.7.1 1.4.3 2 .5l2.6.7c.7.1 1.4.3 2 .6.9.2 1.7.5 2.5.8.6.2 1.4.3 1.9.6.9.2 1.6.6 2.5.9.6.2 1.2.5 1.9.6.9.3 1.6.6 2.5.9l1.8.7c.9.3 1.6.7 2.5 1 .6.2 1.2.5 1.8.8.9.3 1.6.7 2.4 1.1.6.2 1.1.6 1.8.8.8.3 1.6.8 2.4 1.1.6.3 1.1.6 1.7.9.8.3 1.6.9 2.4 1.2.6.3 1.1.6 1.7.9l2.4 1.4 1.6.9 2.4 1.4c.6.3 1.1.6 1.6 1 .8.5 1.5.9 2.3 1.5.6.3 1.1.7 1.6 1 .8.5 1.5 1 2.3 1.6.6.3 1 .7 1.6 1.1.7.6 1.5 1.1 2.1 1.6.6.3 1 .8 1.6 1.1l2.1 1.6c.5.3 1 .8 1.5 1.1.7.6 1.4 1.1 2.1 1.7.5.3.9.8 1.5 1.1.7.6 1.4 1.1 2 1.8.5.3.9.9 1.4 1.2.6.6 1.4 1.2 1.9 1.8l1.4 1.4 1.8 1.8 1.4 1.4c.6.6 1.2 1.4 1.8 1.9l1.4 1.4c.6.7 1.1 1.4 1.8 2 .3.5.9.9 1.2 1.4.6.7 1.1 1.4 1.8 2.1l1.1 1.4c.6.7 1.1 1.5 1.7 2.1.3.5.7.9 1.1 1.4.6.8 1.2 1.6 1.8 2.5.3.3.6.8.9 1.2.9 1.1 1.7 2.4 2.5 3.6 0 .1.1.1.1.1l-70.9 46.8-7.4 4.8-77.9 51.4-94 61.2c-1.6-2.5-3.2-5-4.6-7.5l-1.1-2.1c-.7-1.2-1.4-2.5-2-3.8-.9-1.6-1.6-3.2-2.4-4.6zm283.3-50.4c-.2 2.5-.6 5.1-.9 7.5-1.1 7.4-2.6 14.6-4.7 21.7-.7 2.4-1.5 4.6-2.3 7-1.2 3.5-2.6 6.8-4.1 10.1-2.4 5.5-5.2 10.9-8.2 16.1-1.2 2.1-2.5 4.1-3.8 6.1-3.5 5.3-7.2 10.4-11.4 15.1-4.5 5.2-9.2 10.1-14.4 14.6-3.6 3.2-7.3 6.2-11.1 9s-7.9 5.5-12 8c-21.7 12.9-46.9 20.4-73.9 20.7h-4.7c-.7 0-1.4 0-2-.1-.6 0-1.2-.1-1.8-.1-.6 0-1.4-.1-1.9-.1-.6 0-1.2-.1-1.8-.1-.6 0-1.4-.1-1.9-.1-.6-.1-1.2-.1-1.8-.1-.6 0-1.4-.1-1.9-.2-.6-.1-1.2-.1-1.8-.2-.6-.1-1.4-.1-1.9-.2-.6-.1-1.1-.1-1.8-.2-.6-.1-1.4-.2-1.9-.3-.6-.1-1.1-.1-1.8-.3-.6-.1-1.4-.2-1.9-.3l-1.7-.3c-.6-.1-1.4-.2-1.9-.3l-1.7-.3c-.6-.1-1.4-.3-1.9-.5-.6-.1-1.1-.2-1.6-.3-.6-.1-1.4-.3-1.9-.6l-1.6-.5c-.6-.1-1.4-.3-1.9-.6l-1.6-.5c-.6-.2-1.4-.3-1.9-.6-.6-.1-1.1-.3-1.6-.6-.6-.2-1.4-.5-1.9-.7-.6-.1-1-.3-1.6-.6-.6-.2-1.2-.5-1.9-.7-.6-.1-1-.3-1.6-.6-.6-.2-1.2-.6-1.9-.8-.5-.2-1-.3-1.5-.6-.6-.2-1.2-.6-1.8-.8-.5-.2-1-.3-1.5-.6l-1.8-.9c-.5-.2-.9-.5-1.5-.7l-1.8-.9-1.4-.7-1.8-.9-1.3-.6c-.6-.3-1.2-.7-1.8-1-.5-.2-.9-.5-1.4-.8-.6-.3-1.1-.7-1.8-1.1-.5-.2-.9-.6-1.4-.8-.6-.3-1.1-.7-1.8-1.1-.5-.3-.9-.6-1.4-.9-.6-.3-1.1-.8-1.7-1.1-.5-.3-.9-.6-1.4-.9-.6-.3-1.1-.8-1.7-1.1-.3-.3-.9-.6-1.2-.9-.6-.3-1.1-.8-1.7-1.2-.3-.3-.9-.6-1.2-.9-.6-.3-1.1-.9-1.7-1.2-.3-.3-.8-.6-1.2-.9-.6-.5-1.1-.9-1.6-1.4l-1.1-.9-1.6-1.4c-.3-.3-.8-.6-1.1-.9-.6-.5-1.1-1-1.7-1.5-.3-.3-.7-.6-1-.9-.6-.6-1.1-1.1-1.8-1.6-.3-.2-.6-.6-.9-.8-.9-.8-1.6-1.6-2.5-2.4l-.1-.1 12.7-8.4 118.3-78.2 112.4-74.3c.3 1 .9 2.1 1.2 3 1.1 3.2 2.3 6.3 3.3 9.6l.9 3.3c.6 2.1 1.1 4.4 1.6 6.5 2.3 9.9 3.5 20.3 3.6 30.8-.2 5-.4 10.1-.9 15.1z"/>    <path d="M257.5 336.2c36.2-.5 70.2-15.1 95.6-41.1l2.4-2.4c2.6-2.7 5-5.5 7.2-8.4-1.6-6.3-11.1-14.4-46.8-27.6-30.4-11.1-34-8.6-34.3-21.4L189 296.5l-16.7 11c23.7 18.6 52.9 28.7 83.5 28.7h1.7z"/></svg>',
    "person-permissions": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <circle cx="384.6" cy="209.3" r="18.3"/>    <path d="M366.2 166.1c-34.4 0-62.2 27.9-62.2 62.2 0 7.8 1.5 15.2 4 22l-95.3 91 7.7 18.7 45.7-2.5 9.6-17.5 16.6-3.1 13.6-32.8 26.6-3.5 5.6-16.8c8.5 4.3 18 6.8 28.1 6.8 34.4 0 62.2-27.9 62.2-62.2s-27.8-62.3-62.2-62.3zm18.4 61.5c-10.1 0-18.3-8.2-18.3-18.3 0-10.1 8.2-18.3 18.3-18.3s18.3 8.2 18.3 18.3c.1 10.1-8.2 18.3-18.3 18.3z"/>    <path d="M269.4 225.1c0-21.3 10.9-8.9 17.8-49.5 2.7-16 4.9-5.3 10.7-30.8 3.1-13.4-2-14.4-1.5-20.8s1.2-12.1 2.4-25.2c1.4-16.2-13.6-58.8-67.5-58.8s-68.9 42.6-67.4 58.9c1.2 13 1.7 18.8 2.4 25.2s-4.5 7.4-1.5 20.8c5.8 25.4 8 14.9 10.7 30.8 6.9 40.5 17.8 28.1 17.8 49.5 0 33 3 24.3-45.7 42C98 285.4 86.3 296.5 85 304.9c-1.7 10.6-1.7 30.8-1.7 30.8h98.5l94.8-86-5.4-1.7c-1.1-4.2-1.8-12.1-1.8-22.9z"/></svg>',
    "person-stalker": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M397 257.2c-34.5-13.1-32.4-7.8-32.4-32.1 0-15.6 7.7-9.9 12.7-39.8 1.9-11.8 3.5-4 7.6-22.7 2.2-9.8-1.5-10.6-1-15.3.5-4.7.8-8.9 1.6-18.5 1-12-9.7-43.3-47.8-43.3s-48.9 31.4-47.8 43.3c.7 9.7 1.3 13.9 1.6 18.5.3 4.7-3.1 5.4-1 15.3 4.1 18.8 5.7 11 7.6 22.7 4.9 29.9 12.6 24.1 12.6 39.8 0 11.2 2.6 15.9-12.4 22.9 4.5 1.6 9.8 3.5 16.1 5.9 45.4 17.3 44.2 33.9 45.4 41.9.8 5.4 1.3 48.5 1.4 64h81.5s0-67.1-1.3-74.9c-1-6.1-9.1-14.3-44.4-27.7z"/>    <path d="M340.1 359.9s0-11.8-.1-25.3c-.1-15.5-.6-33.4-1.4-38.6-1.3-7.9-11.9-18.5-57.2-35.7-6.3-2.3-11.5-4.2-16.1-5.9-27.8-9.8-25.8-13.1-25.8-40 0-20.3 10-7.1 16.3-45.5 2.4-15.2 4.5-5.1 9.8-29.3 2.8-12.7-1.9-13.6-1.3-19.7.6-6.1 1.2-11.5 2.2-23.9 1.3-15.4-12.4-55.9-61.7-55.9s-63 40.4-61.7 55.9c1 12.4 1.6 17.8 2.2 23.9.6 6.1-4.2 7-1.3 19.7 5.4 24.3 7.3 14.1 9.8 29.3 6.3 38.4 16.2 25.2 16.2 45.5 0 31.4 2.8 29-41.9 46-45.1 17.1-55.7 27.7-57 35.6-1.6 10-1.6 64-1.6 64h270.7l-.1-.1z"/></svg>',
    "person": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M416 360s0-22-1.8-33.5c-1.5-9.1-14.1-21.1-67.6-40.8-52.7-19.3-49.4-9.9-49.4-45.5 0-23.1 11.8-9.7 19.2-53.5 2.9-17.2 5.2-5.8 11.6-33.4 3.3-14.5-2.2-15.6-1.6-22.5.7-6.9 1.3-13.1 2.6-27.2 1.5-17.5-14.8-63.6-73-63.6s-74.5 46.1-72.9 63.7c1.2 14.1 1.9 20.3 2.6 27.2.7 6.9-4.9 8-1.6 22.5 6.3 27.6 8.7 16.1 11.6 33.4 7.5 43.8 19.2 30.4 19.2 53.5 0 35.7 3.2 26.3-49.4 45.5-53.5 19.6-66.2 31.7-67.6 40.8C96 338 96 360 96 360h320z"/></svg>',
    "pie-graph": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96.4 200H256V40.4c-3.6-.3-7.6-.4-11.4-.4C162.5 40 96 106.5 96 188.6c0 3.8.1 7.8.4 11.4z"/>    <path d="M151.6 304.4c27.2 33.9 69 55.6 115.9 55.6 82.1 0 148.6-66.5 148.6-148.6 0-46.9-21.7-88.6-55.6-115.9-22.6-18.2-50.9-29.9-81.6-32.3v159.6H119.3c2.3 30.8 14.1 59 32.3 81.6z"/></svg>',
    "pin": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M323.7 225c-1.1-.4-2.1-.9-3.1-1.4-6.2-3.6-10.9-9.8-12.4-17.1l-16.4-105.1-.2-5.2c0-6.3 3.7-9.1 8.9-11.7l1.9-.8c6.4-3.1 10.8-6.9 10.8-14.6 0-17.9-5.8-19.1-16.2-19.1h-81.6c-10.4 0-16.2 1.1-16.2 19.1 0 7.6 4.3 11.4 10.8 14.6.7.2 1.2.4 1.9.8 5.2 2.6 8.9 5.3 8.9 11.7l-.2 5.2-16.4 105.1c-1.4 7.4-6.2 13.6-12.4 17.1-1 .7-2.1 1.1-3.1 1.4-17.7 9.1-32.3 27.4-32.3 48.9 0 14.2 3.1 19 13.6 19h72L252.3 450h7.1l10.8-157.1h72.1c10.4 0 13.6-4.2 13.6-19 .1-21.5-14.7-39.8-32.2-48.9z"/></svg>',
    "pizza": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M382.4 129.5c-38.8-17.2-81.2-25.9-126-25.8-44.9 0-90.2 9.3-126 25.4-6.7 3-12.7 8.1-8.5 17.7l134.5 300.5 134.2-299.9c2.5-6.3.6-14-8.2-17.9zm-184.2 56c-16.1 0-29.1-13-29.1-29.1s13-29.1 29.1-29.1 29.1 13 29.1 29.1-13.1 29.1-29.1 29.1zm58.1 133.6c-16.1 0-29.1-13-29.1-29.1s13-29.1 29.1-29.1 29.1 13 29.1 29.1-13 29.1-29.1 29.1zm58.2-104.5c-16.1 0-29.1-13-29.1-29.1s13-29.1 29.1-29.1 29.1 13 29.1 29.1-13 29.1-29.1 29.1z"/>    <path d="M406.7 70.9C363.3 52.2 309.6 40 256 40c-53.6 0-106.3 11-150.7 30.4-3.9 1.7-9.2 5.1-9.2 12.5 0 2.3.8 4.5.8 4.5l7.3 17.4c2.3 4.4 7.2 7.4 12.5 7.4 1.5 0 3.6-.3 6-1.3C163.5 93.7 208.6 84 256 84c47.4 0 96 10.6 133.3 26.9 3 1.3 4.7 1.3 6.1 1.3 5.5 0 10.1-3 12.5-7.3l7.3-17.6c.5-1.4.9-3 .9-4.3-.1-6.6-4.1-9.8-9.4-12.1z"/></svg>',
    "play": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M380.3 180.8l-232-138.1c-2.8-1.7-5.8-2.7-9.1-2.7-9.1 0-16.5 7.5-16.5 16.7h-.1v286.7h.1c0 9.2 7.4 16.7 16.5 16.7 3.4 0 6.2-1.2 9.3-2.8l231.8-137.9c5.5-4.6 9-11.5 9-19.2s-3.5-14.8-9-19.4z"/></svg>',
    "plus-circled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 40c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160S344.4 40 256 40zm91.4 171.4h-80v80h-22.9v-80h-80v-22.9h80v-80h22.9v80h80v22.9z"/></svg>',
    "plus": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M416 173.3H282.7V40h-53.3v133.3H96v53.3h133.3V360h53.3V226.7H416v-53.4z"/></svg>',
    "quote": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M202.7 40c-33.9 0-60.4 9.4-78.9 27.8S96 112.8 96 146.7V360h133.3V146.7h-80c0-19.2 4.1-33.1 12.2-41.1 8.1-8.1 21.9-12.2 41.1-12.2M389.3 40c-33.9 0-60.4 9.4-78.9 27.8-18.5 18.5-27.8 45-27.8 78.9V360H416V146.7h-80c0-19.2 4.1-33.1 12.2-41.1 8.1-8.1 21.9-12.2 41.1-12.2"/></svg>',
    "recent": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M136.5 200H171c-17.2 22.9-34 45.4-51.1 68.1-16.9-22.7-33.8-45-51-68h33.5c.5-6.7.8-12.9 1.4-18.9 4.3-39.6 20.8-73.4 48.9-101.6 23.8-23.8 52.1-40 85.3-46.1 69.2-12.6 126.6 8.5 170.4 63.8 25.2 31.9 35.9 69.1 34.5 109.6-2.8 78.9-60.9 145.3-136.3 159.6-58.7 11-110-4.4-153.4-45.8-5.1-4.9-6.7-10.8-4.7-17.4 2-6.9 6.9-10.9 13.9-11.9 5.8-.9 10.6 1.2 14.7 5.3 14.3 13.9 30.6 24.4 49.4 31.2 78.8 28.8 165.6-21.2 180.1-103.3 12.7-72.4-33.1-141.3-104.5-157.2-74.8-16.8-149.3 32.4-163.1 108-1.2 7.8-1.5 15.9-2.5 24.6z"/>    <path d="M272.9 192.2v-76.9c0-9.7-7.1-17.2-16.5-17.4-9.7-.2-17.7 7-17.7 16.7-.1 34.1-.1 68.3 0 102.4 0 9.4 7.2 16.9 16.6 16.9 22.9.2 45.9.2 69 0 9.5-.1 16.9-8.2 16.7-17.4-.2-9.7-7.6-16.7-17.5-16.7H273v-7.6h-.1z"/></svg>',
    "record-outlined": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 331.5c72.7 0 131.5-58.9 131.5-131.5S328.7 68.5 256 68.5 124.5 127.3 124.5 200 183.3 331.5 256 331.5z"/>    <path d="M256 55.8c79.6 0 144.2 64.6 144.2 144.2S335.6 344.2 256 344.2 111.8 279.6 111.8 200 176.4 55.8 256 55.8m0-15.8c-21.6 0-42.6 4.2-62.3 12.6-19 8-36.2 19.6-50.8 34.3-14.7 14.7-26.2 31.8-34.3 50.8C100.2 157.4 96 178.4 96 200s4.2 42.6 12.6 62.3c8 19 19.6 36.2 34.3 50.8s31.8 26.2 50.8 34.3c19.7 8.3 40.7 12.6 62.3 12.6s42.6-4.2 62.3-12.6c19-8 36.2-19.6 50.8-34.3s26.2-31.8 34.3-50.8c8.3-19.7 12.6-40.7 12.6-62.3s-4.2-42.6-12.6-62.3c-8-19-19.6-36.2-34.3-50.8s-31.8-26.2-50.8-34.3C298.6 44.2 277.6 40 256 40z"/></svg>',
    "record": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 360c88.4 0 160-71.6 160-160S344.4 40 256 40 96 111.6 96 200s71.6 160 160 160z"/></svg>',
    "refresh": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M353.1 272.8l72.9-84.9h-49.1c-1.7-21.1-8-41-17.8-58.6-20.9-37.3-57.5-64.6-101-72.5-.5-.1-1.2-.2-1.7-.3-.4-.1-.6-.1-1.1-.1-7.6-1.3-15.6-2-23.7-2h-.3c-68.9 0-126.7 48.1-141.6 112.6v.1c-.2.8-.4 1.7-.5 2.5-.1.4-.1.6-.2 1.1l-.3 1.6c-.1.6-.2 1.3-.4 2-.1.3-.1.5-.1.8l-.4 2.8v.1c-.7 4.8-1.2 9.7-1.5 14.4v.6c-.1 1.1-.1 2-.1 3.1 0 1.2-.1 2.5-.1 3.8s0 2.5.1 3.8c0 1.1.1 2 .1 3.1v.6c.2 4.9.7 9.8 1.5 14.4v.1l.4 2.8c.1.3.1.5.1.8.1.6.2 1.4.4 2l.3 1.6c.1.4.1.7.2 1.1.1.8.4 1.7.5 2.4v.1c15 64.5 72.9 112.6 141.9 112.7 32.5-.1 63.1-10.7 88.7-30.9l5.7-4.5-32.8-35.1-4.7 3.5c-16.8 12.3-36 18.4-56.9 18.4-53.5 0-97.1-43.2-97.1-97.1S178 103 231.6 103c50.3 0 93.2 35.4 98.3 85h-55.8l79 84.8z"/></svg>',
    "reply-all": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M300.7 141.5v-73L162.1 199.8l138.6 122.6v-84c62.1 0 98.6 8.1 145.4 93.1-.1 0-5.7-190-145.4-190z"/>    <path d="M66 199.9l131.5 115.5V262l-75-62.1 75-71.7v-52L66 199.9z"/></svg>',
    "reply": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M416 280s-30.7-173.3-186.7-173.3V40L96 160l133.3 112v-76.9c84.7 0 142.5 7.4 186.7 84.9z"/></svg>',
    "save": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M316.1 79.8h-40.2v80h40.2v-80zm19.9 80c0 5.5-1.9 10.1-5.9 14.1-3.9 3.9-8.6 5.9-14.1 5.9H195.9c-5.5 0-10.1-1.9-14.1-5.9-3.9-3.9-5.9-8.6-5.9-14.1V59.9h160l.1 99.9zM359.4 40H136.2c-10.9 0-20.4 3.9-28.3 11.7-8 7.9-11.9 17.2-11.9 28.1v239.6c0 11.2 4 20.7 11.9 28.5 7.9 7.8 17.4 11.7 28.3 11.7h239.6c10.9 0 20.4-3.9 28.3-11.7 7.9-7.8 11.9-17.3 11.9-28.5v-217L359.4 40z"/></svg>',
    "scout-external-email": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M353 255.1c8 2.8-7.8-2.7 0 0zm-144.8-8.7l1.1-.5c-.3.1-.4.3-.5.3-.3.1-.5.1-.6.2zm-59.5-106c-1-1.8-4.4-5.4-6.5-6.2-2.7-.4-1.1 2.1-1.1 3.2-.7.5-1.8 1.1-2.3 1.8-.4.3.8 2.7 2.9 1.9 2.1-.8 1 .8 2.3 4.1 1.5 3.3 4.4 3.3 5.6 2.3 2-1.2 0-5.5-.9-7.1zm35.3 32.7c.3 0-.8-.2 0 0z"/>    <path d="M102.4 97.6C45.9 97.6 0 143.5 0 200c0 56.6 45.9 102.4 102.4 102.4 56.6 0 102.4-45.8 102.4-102.4-.1-56.5-45.9-102.4-102.4-102.4zM64.6 279.3c-2.5-1.4-4.3-3.4-4.9-7.3-1.8-9.5-.1-14.7 8.2-20.2 4-2.6 4.5-5.8 7.7-8.9.8-1 2.7-4.7 4.3-4.9 1.6-.4 6.3-1.1 7.1-3 1.8-2.3 5.5-12.5 7.3-13.5 2.7-1.8 6.6-7.3 3.8-10.6-3.3-4-7.7-4-11.8-6-3.7-1.8-5.2-10.2-8.1-13.1-5.4-5.5-13.7-8.8-20.6-12.2-3.7-1.5-3.4-1.9-6.3 1-3.7 3.7-9.2-1-9.8-4.8-.1-1.2-1.5-8.2-.7-8.9 8.2-5.1-3.8-4-4.8-6.3-2.5-6.9 5.9-12.2 11.5-12.9 6.3-.8 7.7 10 10.2 9.1 1.2-.5 1.2-5.6 1.4-6.7.5-3.7 1.6-4.3 5.2-5.5 4.1-1.5 7.3-3.4 11.8-4.3 4.9-1.5 9.3-.7 13.2-4 1.8-1.4 3.2.7 4.8 1.1 3.7.7 4.4-5.1 4.4-7.3 0-2.1.5-4-2.2-6.2-3.6-2.7-8.7-.4-11.5 2.5-3.4 3.3-7.4 3-6.3-2.5.3-2.1 4.7-4.4 6.5-5.5 1.6-1 2.6 1.1 4.8.7 3-.7 4.1 2.2 7.7 2.2 1.5-.4 6.7-3.2 4-8.9h1.2c.8 0 1.6 0 2.5.1 1.2 4.1-2.7 7.6-.7 12.6 4 9.8 7.3 1.4 11.3-3.2 1.4-1.4 2.1-1 4.3-1.4 1.4-.3 3.3-4.3 3.8-5.5 9.2 2.2 17.9 6 25.8 11.1-3.4.4-4.3-.7-4.3 3.4 0 1.5.1 6.2 2.3 6.5 3.8.4 3.2 3.2 6.7 3.6 3.4.4 1.2 3.4 2.6 6.5 1.5 4.7-9.1 6-11.1 6.7-6.3 2.1 2.9 11.1 7 10.2 1.2-.4 5.5-.8 5.9-2.3 0-.1-.8-5.1-.4-5.5.7-1 2.3-1.4 4.9.1 6.2 3.4 9.2 11.8 16.4 13.3 1 .3 2.6-.1 3.8 1 1 1.4 3.6 3.8.5 3.8-4.1-1-6.3.4-9.8-2.2-3.6-2.7-5.6-4.9-10.4-5.1-4-.1-7.6-1.8-11.8-1.1-2.3.4-4.5 1.2-6.9 1.9-2.1.7-2.5 4.4-4.7 4.9-8.9 2.1-7 10.6-8.5 17.3-.7 2.6-2.7 9.6-.4 12 4.1 4.1 9.1 9.6 15.1 10.4 3.3.5 10.4-2.1 12.8 1.2 1 1.9 3.4-1.4 4.1.3 1.6 4.9-1.9 8.2-1.9 13.1-.1 7 4.3 9.5-1.5 15.7-6.3 6.2-1.9 14-5.4 21.4-1.8 3.8-2.2 9.1-4.9 10.9-6.2 3.8-12.6 7-19.5 9.3-12.2 4-25.1 5.4-37.9 3.8-6.7-.8-13.3-2.3-19.7-4.5-1.6-.7-3.3-1.1-4.8-1.6-1.1-.9-2.2-1.3-3.3-1.8zm-19.1-12.4c-.3-.3-.4-.4-.7-.5-1.5-1.4-3.2-2.7-4.5-4.3-1.5-1.5-3-3.2-4.4-4.8 0 0 0-.1-.1-.1l-.8-1.1c-23.6-28.6-27.1-70.4-7.3-102.4 2.7 2.7-1.9 8.2 3.4 12 2.3 1.6 4.5 1 4.1 4s2.5 2.9 2.9 5.5c1.2 5.6 8.8 8.5 4.5 15-4.1 5.8-7.7 12.2-4.7 19.5 1.1 2.6 3.6 5.4 5.5 7.4 3.6 3.7 3.4 1.5 3.4 6-.1 1.9 2.3 4.1 2.2 5.4-.5 3.7-1.4 7.3-1.8 10.9-.8 13.1-.1 25.8 9.8 35.7-3.7-2.2-7.1-4.7-10.4-7.4-.4-.2-.7-.5-1.1-.8zM234 140.6c5.6 3 84.8 46 87.8 47.7 3 1.6 6 2.2 10.6 2.2s7.7-.7 10.6-2.2c3-1.5 82-44.7 87.8-47.7 2.1-1.1 5.6-3 6.5-5.2 1.4-4-.1-5.4-5.9-5.4H233.5c-5.8 0-7.1 1.5-5.9 5.4.8 2.2 4.4 4.1 6.4 5.2z"/>    <path d="M435.2 143c-4.3 2.2-42.3 29.3-67.6 45.6l42.6 47.8c1.1 1.1 1.5 2.2 1 2.9-.7.5-1.9.3-3-.7l-51-43c-7.7 4.9-13.2 8.4-14 8.9-4 2.1-6.7 2.2-10.6 2.2s-6.6-.3-10.6-2.2c-1-.5-6.3-4-14-8.9l-51 43c-1.1 1.1-2.5 1.4-3 .7-.7-.5-.1-1.8 1-2.9l42.5-47.8c-25.1-16.4-63.8-43.4-68-45.6-4.5-2.3-4.8.4-4.8 2.5v106.1c0 4.8 7.1 10.9 12.2 10.9H429c5.1 0 11.1-6 11.1-10.9V145.4c-.6-2.2-.2-4.8-4.9-2.4z"/></svg>',
    "scout-external-people": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M348.8 254.4c8 2.8-7.7-2.7 0 0z"/>    <path d="M348.8 254.4c-9.3-3.3-19.5-3.4-28.9-6.7-2.9-1-8.5-2.2-9.6-5.4-1.1-3.2-1.1-7-1.4-10.3-.1-2.6-.3-5.2-.3-8 0-1.8 4.4-5.4 5.4-7 3.7-6.3 4.1-14.7 4.8-21.7 6 1.6 6.9-9.5 7.8-12.9.8-2.3 5.4-18.7-1.8-16.4 1.8-3 2.5-6.9 2.9-10.2 1.4-8.9 1.9-18.7-.8-27.4-5.6-18-23-28.2-41.2-28.7-18.6-.7-37.3 8.2-44.1 26.3-3.3 8.8-3 18.3-1.9 27.5.6 4.1 1.2 8.8 3.3 12.6-6.7-2.1-3.2 12.4-2.3 14.9 1.1 3.6 2.1 16.2 8.4 14.6.5 5.6 1.2 11.4 2.8 16.9 1.1 3.7 3.2 6.9 5.6 9.6 1.2 1.4 1.9 1.5 1.8 3.3-.1 5.4.1 11.3-1.4 16.5s-13.1 7.6-17.6 8.5c-12.5 2.6-24.1 3.7-34.5 11.6-12.2 8.9-18.6 23-18.6 38.1h193.3c.2-20.9-12.1-38.9-31.7-45.7z"/>    <path d="M205.7 245.9l1.1-.5c-.3.1-.4.3-.6.3s-.2.1-.5.2zm212.9-7.4c-5.6-1.8-16.5-2.3-20.5-7.3-2.1-2.5-1-8.7-.7-11.6 3 .3 6.5-.3 9.5-.7 2.9-.4 5.6-1 8.4-1.9 1.2-.6 2.5-1 3.7-1.6 2.8-1.6 1.5-1.9.1-4.3-7.6-12.8-4.1-28.9-4.5-42.9-.3-11.6-3.3-24.3-13.9-30.9-9.5-5.9-23.7-6.2-33.8-1.9-29.4 11.8-12.1 50.9-22.1 73.3-1.8 3.7-4.3 5.1.1 7.3 2.5 1.2 5.1 2.1 7.7 2.8 4 1 8.2 1.5 12.4 1.6.7 0 .3 8.8 0 9.6-.8 3.4-8.2 4.4-11 5.1-2.9.8-7.6 1-8.9 4-2.1 4.4 6.9 3.3 9.1 3.7 7.1 1.4 13.5 5.2 19.1 9.8 4.1 3.4 9.8 8 11.3 13.6H440c-.1-13.7-9.2-23.7-21.4-27.7zM147 141c-1-1.8-4.3-5.4-6.3-6.1-2.8-.4-1.1 2.1-1.1 3-.7.6-1.8 1.1-2.3 1.8-.4.3.8 2.8 2.9 1.9s1 .8 2.3 4 4.3 3.3 5.6 2.3c1.6-1.1-.3-5.2-1.1-6.9zm34.9 32.3c.1 0-.8-.1 0 0z"/>    <path d="M101.2 98.8C45.4 98.8 0 144.2 0 200c0 56 45.4 101.2 101.2 101.2 56 0 101.2-45.2 101.2-101.2 0-55.8-45.4-101.2-101.2-101.2zM63.8 278.2c-2.5-1.4-4.3-3.4-5-7.1-1.8-9.4-.1-14.4 8.1-19.9 3.9-2.6 4.5-5.6 7.7-8.8.8-1 2.8-4.7 4.1-4.8 1.6-.4 6.2-1.1 7.1-2.9 1.8-2.3 5.5-12.4 7.1-13.3 2.8-1.8 6.6-7.3 3.7-10.4-3.2-3.9-7.6-4-11.7-5.9-3.6-1.8-5.2-10-8-12.9-5.4-5.5-13.6-8.7-20.4-12-3.7-1.5-3.3-1.9-6.2 1-3.7 3.7-9.1-1-9.6-4.7-.1-1.2-1.5-8.2-.7-8.8 8.1-5.1-3.7-3.9-4.7-6.3-2.5-6.7 5.8-12.1 11.4-12.8 6.3-.8 7.6 9.9 10 8.9 1.2-.6 1.2-5.6 1.4-6.7.5-3.6 1.6-4.1 5.1-5.5 4.1-1.5 7.3-3.4 11.5-4.1 5-1.5 9.2-.7 13.1-3.9 1.8-1.4 3 .7 4.7 1.1 3.6.7 4.4-4.9 4.4-7.1 0-2.1.5-3.9-2.2-6.2-3.6-2.8-8.7-.4-11.4 2.5-3.4 3.2-7.4 3-6.3-2.5.3-2.1 4.5-4.3 6.3-5.4 1.6-1 2.6 1.1 4.7.7 3-.7 4.1 2.2 7.6 2.2 1.5-.4 6.7-3.2 3.9-8.8h1.2c.8 0 1.6 0 2.5.1 1.2 4-2.8 7.4-.7 12.5 4 9.6 7.3 1.4 11.1-3.2 1.4-1.4 2.1-1 4.1-1.4 1.4-.3 3.2-4.1 3.8-5.4 9.1 2.2 17.6 5.9 25.6 11-3.3.4-4.3-.7-4.1 3.3 0 1.5.1 6 2.3 6.5 3.7.4 3 3 6.6 3.6 3.3.4 1.2 3.4 2.6 6.3 1.5 4.5-8.9 5.9-11 6.7-6.2 2.1 2.9 11 6.9 10 1.2-.4 5.5-.8 5.8-2.3 0-.1-.8-4.9-.4-5.5.7-1 2.3-1.4 4.8.1 6 3.4 9.1 11.6 16.2 13.2 1 .3 2.6-.1 3.9 1 1 1.4 3.6 3.9.5 3.9-4.1-1-6.3.4-9.6-2.2-3.4-2.8-5.6-4.9-10.3-4.9-4-.1-7.6-1.8-11.5-1.1-2.3.4-4.5 1.2-6.7 1.9-2.1.7-2.5 4.4-4.5 4.8-8.8 2.1-6.9 10.4-8.5 17.1-.7 2.6-2.7 9.5-.4 11.7 4.1 4 8.9 9.5 15 10.3 3.3.6 10.3-2.1 12.6 1.2 1 1.9 3.3-1.4 4 .3 1.6 4.9-1.9 8.2-1.9 12.9-.1 6.9 4.1 9.4-1.5 15.4-6.2 6.2-1.9 13.9-5.4 21.2-1.8 3.7-2.2 8.9-5 10.7-6 3.9-12.5 7-19.2 9.2-12 4-24.9 5.2-37.5 3.9-6.6-.8-13.2-2.3-19.4-4.5-1.6-.7-3.3-1.1-4.7-1.6-.7-1.2-1.8-1.7-2.9-2.3zM45 266c-.3-.3-.4-.4-.7-.5-1.5-1.4-3-2.8-4.5-4.3s-3-3.2-4.4-4.7c0 0 0-.1-.1-.1l-.8-1.1C11 227.1 7.6 185.7 27.2 154.2c2.8 2.8-1.9 8.1 3.4 11.7 2.3 1.6 4.5 1 4 4-.4 2.9 2.5 2.9 2.9 5.4 1.2 5.6 8.7 8.4 4.4 14.7-4.1 5.6-7.7 12.1-4.5 19.4 1.1 2.6 3.6 5.4 5.5 7.4 3.6 3.6 3.3 1.5 3.3 5.9-.1 1.9 2.3 4 2.2 5.2-.5 3.6-1.4 7.1-1.8 10.7-.8 12.9-.1 25.6 9.6 35.2-3.6-2.2-7.1-4.7-10.3-7.4-.2.3-.5 0-.9-.4z"/></svg>',
    "scout-external-person": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M440.7 317.2s0-16.1-1.4-24.6c-1.1-6.6-10.3-15.4-49.5-29.8-38.6-14.2-36.2-7.3-36.2-33.3 0-16.9 8.7-7.2 14.2-39.2 2.2-12.6 3.8-4.3 8.5-24.5 2.5-10.6-1.7-11.4-1.1-16.5.6-5.1 1-9.6 1.9-19.9 1.1-12.8-10.9-46.6-53.5-46.6s-54.9 33.8-53.6 46.6c1 10.3 1.4 14.9 1.9 19.9.5 5.1-3.6 5.9-1.1 16.5 4.7 20.2 6.3 11.8 8.5 24.5 5.5 32.2 14.2 22.3 14.2 39.2 0 26.1 2.3 19.2-36.2 33.3-39.2 14.3-48.5 23.2-49.5 29.8-1.4 8.4-1.4 24.5-1.4 24.5h234.2v.1h.1zm-302-163.5c-1-1.6-4-4.9-5.9-5.6-2.5-.4-1.1 1.9-1.1 2.8-.7.6-1.7 1.1-2.2 1.6-.3.3.7 2.6 2.8 1.8 1.9-.7.8.7 2.2 3.7s4.1 3 5.4 2.2c1.4-1-.4-5-1.2-6.5zm32.9 30.4c.1 0-.9-.3 0 0z"/>    <path d="M95.7 114c-52.5 0-95 42.6-95 95s42.6 95 95 95 95-42.6 95-95-42.5-95-95-95zm-35 168.7c-2.3-1.4-4-3.2-4.7-6.7-1.6-8.8-.1-13.6 7.7-18.7 3.7-2.5 4.3-5.4 7.1-8.3.7-1 2.6-4.4 3.9-4.5 1.6-.4 5.8-1.1 6.6-2.8 1.6-2.2 5.2-11.7 6.7-12.5 2.5-1.6 6-6.7 3.6-9.8-3-3.7-7.1-3.7-11-5.6-3.4-1.6-5-9.5-7.6-12.1-5.1-5.2-12.8-8.1-19.1-11.4-3.4-1.4-3.2-1.8-5.8 1-3.4 3.4-8.5-.8-9.1-4.4 0-1.2-1.4-7.7-.6-8.2 7.7-4.8-3.6-3.7-4.4-5.9-2.2-6.3 5.5-11.4 10.7-12 5.9-.7 7.1 9.2 9.4 8.4 1.1-.6 1.1-5.2 1.2-6.3.5-3.4 1.5-4 5-5.2 3.9-1.4 6.9-3.3 10.9-3.8 4.7-1.4 8.7-.7 12.2-3.7 1.7-1.2 2.8.7 4.4 1.1 3.4.7 4.1-4.7 4.1-6.7 0-1.9.5-3.7-1.9-5.8-3.3-2.6-8.1-.4-10.7 2.2-3.3 3-7 2.8-5.9-2.3.3-1.9 4.4-4 5.9-5.1 1.7-1 2.5 1.1 4.4.6 2.8-.6 3.8 2.1 7.1 2.1 1.4-.3 6.3-2.9 3.7-8.2h3.4c1.2 3.7-2.5 7-.7 11.7 3.7 9.1 6.7 1.2 10.5-3 1.2-1.2 1.9-1 4-1.4 1.2-.1 3-4 3.6-5.1 8.5 2.2 16.6 5.5 24.1 10.3-3.2.4-4-.6-3.9 3.2 0 1.4.1 5.6 2.2 6.1 3.4.4 2.9 2.9 6.2 3.3 3.2.4 1.2 3.2 2.5 6.1 1.4 4.4-8.4 5.6-10.3 6.3-5.8 1.9 2.8 10.3 6.5 9.5 1.2-.3 5.2-.8 5.5-2.2 0-.1-.7-4.7-.4-5.2.7-.8 2.2-1.2 4.5.1 5.6 3.3 8.5 10.9 15.3 12.5 1 .1 2.5 0 3.6.8 1 1.2 3.3 3.6.4 3.6-3.9-.8-5.9.4-8.9-2.1-3.3-2.5-5.4-4.5-9.6-4.7-3.7 0-7.1-1.6-10.9-1.1-2.2.4-4.3 1.2-6.3 1.8-1.9.7-2.3 4.1-4.4 4.5-8.2 1.9-6.5 9.8-8 16.1-.5 2.3-2.6 8.9-.4 11 3.9 3.7 8.4 8.9 14 9.8 3 .4 9.8-1.9 11.8 1.1.8 1.6 3.2-1.2 3.9.3 1.6 4.7-1.8 7.7-1.8 12.1 0 6.5 3.9 8.8-1.4 14.4-5.8 5.8-1.8 13.1-5.1 19.9-1.6 3.6-2.1 8.4-4.5 10-5.6 3.7-11.7 6.6-18.1 8.7-11.3 3.7-23.5 5-35.2 3.6-6.2-.7-12.4-2.2-18.1-4.3-1.6-.5-3.2-1.1-4.4-1.6-1.4-.5-2.4-1.1-3.4-1.5zM43 271.2l-.6-.6c-1.5-1.2-2.9-2.6-4.3-4s-2.8-2.9-4.1-4.4c-.3-.3-.6-.5-.8-1-22-26.5-25.2-65.3-6.7-95 2.6 2.6-1.6 7.7 3.2 11 2.2 1.5 4.3 1 3.9 3.7-.4 2.8 2.2 2.8 2.8 5.1 1.2 5.2 8.1 7.8 4.3 13.8-3.9 5.4-7.1 11.4-4.3 18.2 1 2.5 3.3 5 5.2 6.9 3.3 3.4 3.2 1.4 3.2 5.6 0 1.9 2.2 3.9 1.9 5-.4 3.4-1.2 6.7-1.6 10.2-.7 12.1 0 24.1 9.1 33.1-3.4-2.1-6.6-4.4-9.8-7-.7-.1-1.1-.4-1.4-.6z"/></svg>',
    "search": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M413.5 308.9l-70.7-71.6c11.5-20.1 17.5-42.4 17.5-64.9C360.3 99.4 301 40 228.2 40S96 99.4 96 172.4s59.3 132.4 132.2 132.4c23.2 0 46.2-6.4 66.8-18.7l70.3 71.3c1.6 1.6 3.8 2.6 6.1 2.6 2.2 0 4.5-.9 6.1-2.6l36.1-36.5c3.2-3.3 3.2-8.6-.1-12zM228.2 91.6c44.5 0 80.7 36.2 80.7 80.8s-36.2 80.8-80.7 80.8-80.7-36.2-80.7-80.8 36.2-80.8 80.7-80.8z"/></svg>',
    "share": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M336 274.9H128V125.2h47.9s11.8-16.4 35.6-31.8H112c-8.8 0-16 7.1-16 15.9v181.6c0 8.8 7.2 15.9 16 15.9h240c8.8 0 16-7.1 16-15.9V200l-32 26.2v48.7zm-26.7-128.2v53.2L416 120.3 309.3 40v49.8c-129 0-133.3 136.9-133.3 136.9 36.5-59.6 63.3-80 133.3-80z"/></svg>',
    "social-facebook": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M284.3 143.3v-33.7c0-15.2 3.3-22.9 27-22.9H341V30h-49.5c-60.6 0-80.6 27.8-80.6 75.5v37.8H171V200h39.8v170h73.5V200h49.9l6.7-56.7h-56.6z"/></svg>',
    "social-google-outline": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M312.1 46.1c10.4 8.5 32.2 26.3 32.2 60.2 0 33-19.1 48.6-38.1 63.3-6 5.8-12.8 12-12.8 21.9s6.8 15.2 11.8 19.2l16.4 12.5c20 16.5 38.2 31.7 38.2 62.5 0 41.9-41.4 84.3-119.5 84.3-65.9 0-97.7-30.7-97.7-63.8 0-16.1 8.2-38.8 35-54.4 28.1-16.9 66.4-19.2 86.8-20.5-6.4-8-13.6-16.5-13.6-30.3 0-7.6 2.3-12 4.5-17.4-5 .4-10 .9-14.5.9-48.2 0-75.5-35.2-75.5-70 0-20.5 9.6-43.3 29.1-59.8 25.9-21 56.7-24.6 81.3-24.6h93.6l-29 16.1h-28.2zm-32.2 198c-3.7-.4-6-.4-10.4-.4-4.1 0-28.6.9-47.7 7.2-10 3.6-39.1 14.2-39.1 46 0 31.7 31.3 54.4 80 54.4 43.6 0 66.8-20.5 66.8-48.2-.1-22.9-15.1-34.8-49.6-59m13.2-84.7c10.5-10.3 11.3-24.5 11.3-32.6 0-32.1-19.6-82.1-57.2-82.1-11.8 0-24.5 5.8-31.8 14.7-7.7 9.4-10 21.4-10 33 0 29.9 17.7 79.4 56.8 79.4 11.3.1 23.6-5.3 30.9-12.4"/></svg>',
    "social-google": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M314.5 217.3l-16.1-12.1-.1-.1c-5.2-4.1-8.8-7.3-8.8-13 0-6.2 4.5-10.4 9.6-15.5l.4-.4c17.8-13.5 39.6-30.4 39.6-66 0-23.8-10.5-39.6-20.6-51.1h11.6L383.5 30H265.3c-22.4 0-55.4 2.9-83.7 25.3l-.1.2c-19.3 16-30.8 39.4-30.8 62.5 0 18.8 7.7 37.3 21.1 50.8 19 19.1 42.8 23.1 59.3 23.1 1.3 0 2.6 0 4-.1-.6 2.6-1.1 5.6-1.1 9.2 0 9.6 3.2 17 7.2 23.2-21.2 1.7-51.5 5.7-75.1 19.8-34.8 19.9-37.5 49.4-37.5 58 0 33.9 31.6 68 102.2 68 81.1 0 123.5-44.1 123.5-87.6 0-32.9-20.2-49.3-39.8-65.1zm-111-120.1c0-11.8 2.7-20.8 8.2-27.3 5.7-6.9 16.1-11.6 25.7-11.6 17.6 0 29.2 13.3 35.8 24.5 8.1 13.8 13.2 31.9 13.2 47.5 0 4.4 0 17.7-9 26.4-6.1 5.9-16.6 10-25.3 10-18.2 0-29.6-13-36-23.9-9.3-15.9-12.6-33.9-12.6-45.6zm107.2 201.9c0 24.3-22.3 39.4-58.2 39.4-42.5 0-71.1-18.2-71.1-45.4 0-23.1 19-32.6 33.5-37.6 16.7-5.3 39.2-6.5 44.3-6.5 3.4 0 5.4 0 7.6.2 32.5 22.3 43.9 32 43.9 49.9z"/></svg>',
    "social-googleplus-outline": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M229.9 60.3c9.4 7.8 29.2 23.9 29.2 54.7 0 29.9-17.3 44.1-34.7 57.5-5.4 5.3-11.6 10.9-11.6 19.8s6.2 13.8 10.7 17.4l14.9 11.4c18.1 15 34.6 28.8 34.6 56.7 0 38.1-37.6 76.5-108.4 76.5-59.7.1-88.7-27.9-88.7-57.8 0-14.5 7.4-35.2 31.7-49.4 25.5-15.3 60.3-17.4 78.8-18.7-5.7-7.3-12.4-15.1-12.4-27.6 0-6.9 2.1-10.9 4.1-15.9-4.5.4-9.1.8-13.2.8-43.8 0-68.5-31.9-68.5-63.6 0-18.7 8.7-39.3 26.4-54.2 23.6-18.9 51.6-22.2 73.9-22.2h84.9l-26.3 14.5-25.4.1zm-29.4 179.9c-3.3-.4-5.4-.4-9.4-.4-3.7 0-26 .8-43.3 6.4-9.1 3.3-35.4 12.9-35.4 41.7s28.5 49.4 72.6 49.4c39.6 0 60.6-18.7 60.6-43.8-.2-20.6-13.7-31.5-45.1-53.3m12.1-77c9.4-9.3 10.2-22.3 10.2-29.6 0-29.1-17.8-74.5-52-74.5-10.7 0-22.3 5.2-28.8 13.4-7 8.5-9.1 19.5-9.1 29.9 0 27.1 16.1 72.1 51.6 72.1 10.3.1 21.3-4.9 28.1-11.3M436 108.6h-62.9V45.9h-14.2v62.9h-64V123h64v65h14.2v-65H436v-14.4z"/></svg>',
    "social-googleplus": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M244.9 215.7l-14.6-11-.1-.1c-4.6-3.7-8-6.6-8-11.8 0-5.6 4-9.4 8.8-13.9l.4-.3c16.1-12.3 35.9-27.5 35.9-59.9 0-21.6-9.6-35.9-18.7-46.3H259L307.3 46H200.1c-20.3 0-50.4 2.6-76 22.9l-.1.1c-17.5 14.5-28 35.8-28 56.7 0 17 7 33.8 19.2 46.1 17.2 17.3 38.8 20.9 53.9 20.9 1.2 0 2.4 0 3.6-.1-.7 2.4-1 5.1-1 8.3 0 8.8 2.9 15.5 6.5 21-19.2 1.6-46.7 5.2-68.1 17.9-31.6 18.2-34.2 45-34.2 52.7 0 30.7 28.7 61.7 92.8 61.7 73.5 0 112-40 112-79.5.2-29.8-18.1-44.6-35.8-59zm-100.8-109c0-10.8 2.4-18.9 7.4-24.8 5.2-6.3 14.6-10.6 23.3-10.6 16 0 26.4 12 32.5 22.1 7.4 12.5 11.9 29 11.9 43.1 0 3.9 0 16.1-8.2 23.9-5.6 5.4-15.1 9.1-22.9 9.1-16.4 0-26.9-11.8-32.7-21.7-8.3-14.1-11.3-30.5-11.3-41.1zm97.3 183.2c0 22-20.2 35.8-52.8 35.8-38.7 0-64.5-16.5-64.5-41.1 0-20.9 17.3-29.6 30.4-34.2 15.2-4.9 35.5-5.8 40.2-5.8 3.1 0 4.9 0 7 .1 29.4 20.2 39.7 28.9 39.7 45.2z"/>    <path d="M373.3 108.4V45.8H346v62.6h-64.2v27.3H346v65.1h27.3v-65.1h62.6v-27.3h-62.6z"/></svg>',
    "social-linkedin": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M390.4 40H123.3C108.8 40 96 50.5 96 64.9v267.7c0 14.5 12.8 27.4 27.3 27.4h267c14.7 0 25.7-13 25.7-27.4V64.9c.1-14.4-11-24.9-25.6-24.9zM195.2 306.7h-45.8V164.2h45.8v142.5zm-21.3-164.2h-.3c-14.7 0-24.2-10.9-24.2-24.6 0-13.9 9.8-24.6 24.8-24.6s24.2 10.6 24.5 24.6c-.1 13.7-9.6 24.6-24.8 24.6zm188.8 164.2h-45.8v-77.9c0-18.7-6.7-31.4-23.3-31.4-12.7 0-20.2 8.6-23.5 16.9-1.3 3-1.6 7.1-1.6 11.3v81.2h-45.8V164.2h45.8V184c6.7-9.5 17.1-23.2 41.3-23.2 30.1 0 52.8 19.8 52.8 62.6v83.3z"/></svg>',
    "social-twitter": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M426 94.5c-12.5 5.5-25.9 9.2-40.1 11.1A69.43 69.43 0 0 0 416.6 67c-13.5 8-28.4 13.8-44.3 16.9-12.8-13.7-30.9-22.2-51-22.2-38.6 0-69.7 31.2-69.7 69.8 0 5.5.5 10.8 1.8 15.9-58-2.9-109.4-30.7-143.9-73-5.9 10.3-9.5 22.3-9.5 35.1 0 24.2 12.4 45.6 31.1 58.1-11.5-.3-22.3-3.5-31.7-8.7v.8c0 33.9 24 62.1 56 68.4-5.8 1.6-12 2.4-18.4 2.4-4.5 0-8.8-.4-13.1-1.3 8.8 27.7 34.6 47.9 65.2 48.5-23.8 18.7-54 29.9-86.7 29.9-5.6 0-11.2-.3-16.7-1 30.8 20.1 67.5 31.6 106.8 31.6 128.5 0 198.7-106.5 198.7-198.7 0-3-.1-6.1-.2-9 13.9-9.7 25.6-21.9 35-36z"/></svg>',
    "social-windows": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M416 206.4H238.9v127.9L416 360V206.4zm-188.6 0H96v107.1l131.4 19.1V206.4zM416 40L238.9 65.3V195H416V40zM227.4 66.9L96 85.7V195h131.4V66.9z"/></svg>',
    "social-yahoo": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M369.9 33.9c-10 0-19.9-.7-28.9-3.9l-85 141.7L171 30c-8.9 3.2-18.3 3.9-28.3 3.9-9.8 0-19.6-.8-28.3-3.9l113.3 188.3V370c8.9-3.1 18.4-3.9 28.3-3.9 9.9 0 19.5.8 28.3 3.9V218.6L397.7 30c-8.8 3-18 3.9-27.8 3.9z"/></svg>',
    "speakerphone": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M123.8 146.8c0-29.3 17.9-54.6 43.3-65.4h-5.5c-29.4 0-53.6 23.4-57.9 53.7-4.3.7-7.6 5.6-7.6 11.5 0 6.1 3.6 11 8.3 11.4 5.1 26 25.1 47 49.8 49.1h.1c1 0 2 .4 3 .6.8.1 1.6.3 2.4.5-21.6-12.1-35.9-35.1-35.9-61.4z"/>    <path d="M405.4 82.1c-.8-2.1-1.6-4-2.5-5.9-4.6-10.3-10.3-18.6-16.7-24.7C378.2 44 369 40 359.5 40c-5.9 0-11.7 1.6-17.2 4.6h-.1c-.9.5-1.7.9-2.6 1.4-35 20.7-74.4 33-116.1 35.3-4.6.3-9.3.1-13.9.1h-30.2c-24.3 10.7-42.1 36.1-42.1 65.4 0 26.3 13.7 49.4 34.1 61.5 9.3 7.8 29.8 8.4 28.6 17.1-1.4 9.4-3.9 15.6-5.6 21.9-.9 3.4-16.9 52.1-18.1 103.4 0 1.4 0 2.6.1 4.7s1.6 4.6 6.1 4.6h54.9c4.7 0 6.9-2.4 6.6-6.6-.1-1.4-.4-3.1-.6-4.6-1.7-16.5-3.3-35.6-2.4-58.3.9-24.3 3.7-37.1 5-43.8 1.5-7.4 5.4-16 8.6-21.6 22 .6 66.4 13.8 82.2 20.6 0 0 5.1 2.4 7.2 3.7 5 2.4 10.1 3.6 15.4 3.6.6 0 1.3 0 1.9-.1 8.8-.5 17.3-6.9 24.8-13.9 6.5-6.1 12.1-14.4 16.7-24.7.9-2 1.7-4 2.5-6.1 6.9-17.9 10.6-39.9 10.6-62.9s-3.6-45.3-10.5-63.2zm-16.5 126.1c-5.6 13.2-13 23.8-21.1 23.8s-15.4-10.5-21-23.8c-6.5-15.4-10.6-37.9-10.6-62.9 0-25.1 4.1-47.7 10.7-63.1 5.6-13.1 12.9-21.1 20.9-21.1 8.1 0 15.4 8 21 21.1 6.6 15.4 10.7 38 10.7 63.1 0 25-4.1 47.5-10.6 62.9z"/></svg>',
    "star-outline": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 65.8l29.1 93.3 2.9 9.6h106.9L316 227.9l-7.8 5.7 2.9 9.2 30.8 98.6-77.6-62.1-8.6-6.9-8.6 6.9-77.6 62.1 30.8-98.6 2.9-9.2-7.8-5.7-78.9-59.2h106.9l2.9-9.6L256 65.8m0-45.8l-42.2 135H76l111.6 83.7L143.5 380 256 290l112.5 90-44.1-141.3L436 155H298.2L256 20z"/></svg>',
    "star": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M416 160H293.5L256 40l-37.5 120H96l99.2 74.4L156 360l100-80 100 80-39.2-125.6L416 160z"/></svg>',
    "stats-bars": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M183.3 40h58.2v290.9h-58.2V40zM96 243.6h58.2v87.3H96v-87.3zm174.5-58.1h58.2V331h-58.2V185.5zm87.3-58.2H416v203.6h-58.2V127.3z"/></svg>',
    "status-active": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 40c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160S344.4 40 256 40"/></svg>',
    "status-disconnected": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 20c-99.4 0-180 80.5-180 180s80.6 180 180 180 180-80.6 180-180S355.4 20 256 20zm0 335c-85.5 0-155-69.5-155-155S170.5 45 256 45s155 69.5 155 155-69.5 155-155 155z"/></svg>',
    "status-inactive": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M328.7 254l-60.5-56.5-13.5-117-15 129.5h.4l-.4 1 89 43z"/>    <path d="M256 20c-99.4 0-180 80.5-180 180s80.6 180 180 180 180-80.6 180-180S355.4 20 256 20zm0 335c-85.5 0-155-69.5-155-155S170.5 45 256 45s155 69.5 155 155-69.5 155-155 155z"/></svg>',
    "stop": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M407.2 40H104.8c-4.9 0-8.8 3.9-8.8 8.8v302.3c0 4.9 3.9 8.8 8.8 8.8h302.3c4.8 0 8.8-3.9 8.8-8.8V48.8c.1-4.9-3.9-8.8-8.7-8.8z"/></svg>',
    "survey": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M416 357.3c0 21.5-17.4 39-39 39H137c-20.5 0-35.9-12.3-40-32.8-1-5.1-1-10.3-1-16.4V90.6c0-20.5 14.4-37.9 34.9-41 10.3-1 20.5 0 31.8 0v40H136v265.6h239V89.6h-25.6v-40h8.2c8.2 0 17.4 0 25.6 1 18.5 3.1 31.8 19.5 31.8 39v171.3c1 32.8 1 64.6 1 96.4z"/>    <path d="M332.9 49.6c-4.1-1-9.2-3.1-13.3-4.1-11.3-2.1-18.5-9.2-24.6-19.5-18.5-29.7-59.5-29.7-79 0-2.1 4.1-4.1 7.2-7.2 11.3-1 2.1-3.1 3.1-5.1 4.1-8.2 3.1-16.4 5.1-24.6 8.2-2.1 1-3.1 2.1-3.1 4.1V105c0 8.2 4.1 12.3 12.3 12.3h135.4c7.2 0 11.3-4.1 11.3-11.3V53.7c1-2.1 0-3.1-2.1-4.1zM256 73.2c-13.3 0-22.6-9.2-22.6-22.6 0-12.3 10.3-22.6 22.6-22.6s21.5 10.3 21.5 22.6-9.2 22.6-21.5 22.6zM176 145v79h79v-79h-79zm66.7 65.6h-52.3v-52.3h52.3v52.3zm-66.7 120h79v-35.9c-6.2 7.2-16.4 11.3-12.3 22.6h-53.3V264h34.9c1 0 3.1 0 4.1-1l12.3-12.3H176v79.9z"/>    <path d="M263.2 241.4l-42.1 42.1c-4.1-5.1-9.2-9.2-13.3-14.4l-14.4 14.4 27.7 27.7 55.4-55.4c-3.1-4.2-7.2-9.3-13.3-14.4zm19.5-57.4v13.3H335V184h-52.3zm0 120H335v-12.3h-52.3V304z"/></svg>',
    "thumbsup": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M414.9 192.9c12.2-4 21-15.5 21-29 0-16.8-13.6-30.6-30.6-30.6h-90.8c1.8-22.1 8.8-47.5 1-77.3-6.6-25.2-34.8-44-46.4-32.6-4.5 4.4-3.1 13.5-3.1 30 0 37.9-15.7 76.3-35.3 96.2-8.3 8.6-22.3 11.5-35.6 12v-14H96V360h99.1v-28.4c18.3-.4 46.5 4.6 67.1 5.8 46 2.8 90.3-2.1 111.7-7.2 21.5-5.1 31-11.5 31-27.1 0-5.6-1.7-10.8-4.6-15.3 10.4-4.1 17.8-14.3 17.8-26.3 0-6.4-2.1-12.2-5.6-17 10.5-4 18.1-14.3 18.1-26.3 0-11-6.5-20.7-15.7-25.3zM138.5 331.3c-7.8 0-14.1-6.3-14.1-14.1s6.4-14.1 14.1-14.1 14.1 6.3 14.1 14.1c0 7.7-6.4 14.1-14.1 14.1z"/></svg>',
    "toggle-default": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M114.3 314.3h171.4c63.1 0 114.3-51.1 114.3-114.3S349 85.7 285.8 85.7H114.3C51.1 85.7 0 136.8 0 199.9s51.1 114.4 114.3 114.4zm0-185.8c39.5 0 71.5 32 71.5 71.5s-32 71.5-71.5 71.5-71.5-32-71.5-71.5 32.1-71.5 71.5-71.5z"/></svg>',
    "toggle-toggled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M285.8 85.7H114.3C51.1 85.7 0 136.9 0 200s51.1 114.3 114.3 114.3h171.4c63.1 0 114.3-51.1 114.3-114.3S348.9 85.7 285.8 85.7zm0 185.8c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.4 32 71.4 71.5-32 71.5-71.4 71.5z"/></svg>',
    "trash-a": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M333.3 98.2V71.8c0-17.4-13.2-31.8-31.4-31.8H210c-18.1 0-31.3 14.5-31.3 31.8v26.4H96v29.1h8.4s4.9.5 7.5 3.1c2.5 2.5 3.5 8.2 3.5 8.2l17.3 219.7c1.4 26.7 1.4 30.8 32.7 30.8h181.3c31.4 0 31.4-4 32.7-30.7l17.3-219.6s1-5.7 3.5-8.3 7.5-3.1 7.5-3.1h8.4V98.3l-82.8-.1zM197.8 71.8c0-8.7 7.1-13.6 16.1-13.6h83.4c9 0 16.9 5 16.9 13.6v26.4H197.8V71.8zm-7.7 259.1l-9.4-174.5h18.5l9.5 174.5h-18.6zm76 0h-20V156.4h20v174.5zm56 0h-18.5l9.5-174.5h18.5l-9.5 174.5z"/></svg>',
    "trash-b-open": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M386.9 40.4c-4.4-6.9-7.2-10.7-7.2-10.7-4.7-7.2-10.2-5.4-18.9-4.1l-46.5 8.7c-5.8.8-5.8.8-9.6-3.3-12.7-14.1-17.9-23.1-26-20.6l-86.9 27.8c-8 2.5-7.2 12.9-9.1 31.9-.7 5.4-.7 5.4-5.9 8.2l-43.1 20c-7.8 4-13.4 6.6-13.1 15.1 0 0 .1 3.8.3 11.9.5 10.9-1 10.2 8.3 7.2l255-81.5c9.3-2.8 8.7-1.5 2.7-10.6zm-25.8 108.7H142.7c-14.7 0-15.4 1.9-14.6 13l16.6 214.8c1.4 10.9 2.5 13.1 15.5 13.1h183.4c13 0 14-2.2 15.5-13.1l16.6-214.8c.8-11.2.2-13-14.6-13z"/></svg>',
    "trash-b": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M403.8 85c-2.2-8.4-3.7-13.1-3.7-13.1-2.4-8.7-8.6-8.7-17.8-10.2l-49.8-6.3c-6.2-1-6.2-1-8.6-6.4-8.2-18.3-10.7-29-19.6-29h-96.5c-8.9 0-11.3 10.7-19.5 29.1-2.4 5.2-2.4 5.2-8.6 6.4l-49.9 6.3c-9.1 1.5-15.7 2.3-18.1 11.1 0 0-1.1 3.8-3.5 12.2-3 11.2-4.2 9.9 6.1 9.9h283.4c10.3.1 9.2 1.2 6.1-10zm-32.1 40H140.3c-15.6 0-16.3 2.1-15.4 13.8l17.5 227.4c1.5 11.5 2.6 13.9 16.4 13.9H353c13.8 0 14.9-2.3 16.4-13.9L387 138.8c1-11.9.2-13.8-15.3-13.8z"/></svg>',
    "university": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 40L69.3 133.6 96 151.2v168.9l26.7 13.3V168.3L256 253.5l110.2-71.2 76.7-49.8L256 40z"/>    <path d="M367.8 200L256 273.2 143 200l-7.1 67.9c13.3 10.4 93.4 65.5 120.1 92.1 26.7-26.7 106.7-81.7 120.1-92.1l-8.3-67.9z"/></svg>',
    "upload-circled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 20c-99.4 0-180 80.5-180 180s80.6 180 180 180 180-80.6 180-180S355.4 20 256 20zm73 241.8h-56.7v-41.1h24.8L256 177.8l-41.2 43h24.8v41.1h-52.7c-25.4 0-46-20.9-46-46.8 0-20.5 12.9-37.8 31.2-44.1 2.4-14.7 15.1-26 30.3-26 4.9 0 9.7 1.2 13.7 3.4 9.6-20.4 29.8-34.4 53.6-34.4 32.7 0 59.4 27 59.4 60.4 0 .7-.1 1.2-.1 1.8 23.2.1 42.1 19.2 42.1 42.8s-18.8 42.8-42.1 42.8z"/></svg>',
    "upload": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M376.5 180.7c0-1.1.1-2 .1-3.1 0-55.1-43.9-99.7-98.1-99.7-39.1 0-72.7 23.3-88.4 56.9-6.9-3.4-14.6-5.5-22.7-5.5-25 0-45.8 18.5-49.9 42.9C87.5 182.4 66 211.1 66 245c0 42.6 34 77.2 75.9 77.2h86.9v-67.8H188l68-71 68 70.9h-40.8V322h93.5c38.3 0 69.3-31.8 69.3-70.8s-31.2-70.5-69.5-70.5z"/></svg>',
    "volume-high": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M237 315.3V84.9l-72 66.5H86v97.1h79l72 66.8zm42.6-39.5c15.5-21.1 24.9-47.3 24.9-75.6s-9.4-54.5-24.9-75.7L264.1 136c13.2 18 21.1 39.9 21.1 64.1 0 24-7.9 46.1-21.1 64l15.5 11.7zm50.6 34.8c22.7-30.9 36.4-69.2 36.4-110.6s-13.7-79.6-36.4-110.6l-15.5 11.7c20.4 27.6 32.6 61.8 32.6 98.9s-12.2 71.3-32.6 98.9l15.5 11.7z"/>    <path d="M362.8 66c27.6 37.4 44 83.8 44 134s-16.4 96.6-44 134l15.5 11.7c30-40.6 47.7-91 47.7-145.7S408.3 95 378.3 54.3L362.8 66z"/></svg>',
    "volume-mute": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M263.2 168.6H211v62.7h52.2l37.8 41.2V127.3l-37.8 41.3z"/>    <path d="M343.2 42.6c-.3-.1-.6-.3-.9-.5C316.6 28 287.3 20 256 20c-99.4 0-180 80.5-180 180 0 67.7 37.5 126.7 92.7 157.4.3.1.6.5.9.6 25.8 14 55.1 22.1 86.4 22.1 99.4 0 180-80.6 180-180 0-67.8-37.5-126.8-92.8-157.5zm23.6 237.3l-46.6-46.8v61.6l15.8 16C313.5 327 285.9 337 256 337c-17.3 0-34-3.4-49.3-9.2-5.2-2-10.3-4.3-15.3-6.9-43.1-23.1-72.5-68.5-72.5-120.8 0-29.9 10-57.4 26.3-79.9l28.3 28.5h61.7L176 89.4c22.5-16.2 49.9-26.2 79.9-26.2 17.3 0 33.9 3.4 49.3 9.2 4.9 1.9 9.8 4.1 14.4 6.4 43.5 23 73.4 68.5 73.4 121.2 0 29.9-9.9 57.4-26.2 79.9z"/></svg>',
    "waterdrop": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M268.7 15.6l-.8-.8-.1-.1c-3.1-2.9-7.2-4.7-11.8-4.7-4.7 0-8.8 1.8-11.8 4.7l-.1.1-.8.8c-5.2 5.3-11.7 12.2-19 20.4-14.8 16.7-32.7 39-49.6 65.1-28.3 43.9-53.3 98.5-54.4 155.4 0 1.1-.1 2.3-.1 3.4 0 16.7 3.3 32.6 9.2 47.3 3.5 8.5 7.8 16.5 12.9 23.9 24.2 35.4 66 58.9 113.5 58.9 75 0 135.8-58.3 135.8-130.1.1-108.4-89.1-209.9-122.9-244.3zm-12.8 326.9c-13.4 0-26-3.1-37.2-8.6 55.9-12.2 100.4-54.9 115.2-109.8 4.4 10.3 7 21.6 7 33.6-.1 46.8-38.1 84.8-85 84.8z"/></svg>',
    "webcam-hide": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M86.6 129.9c-.9 3.7-.6 7.7-.6 11.6v142.1c0 14.8 9.5 24.4 24.2 24.5 30.5.1 61 0 91.5 0 30.8.1 59.2.1 90 0 9.9 0-174.1-195.9-174.1-195.9-10.1 0-4 .1-8.4.1-11.4.2-20.3 7.2-22.6 17.6zm205-17.7h-87.1l113.6 121.1v-95.1c0-16.9-9.5-26-26.5-26zm134.3 97.9V135c0-7.8-5.2-11.3-11.7-7.7-23.5 13.3-47 26.7-70.6 39.8-3.8 2.1-5.4 5-5.4 9.4.1 22.5.1 45.1 0 67.5 0 4 1.6 6.7 5.1 8.6 23.4 13.2 46.8 26.5 70.1 39.6 7.2 4 12.4 1.1 12.4-7.2.2-24.7.2-49.8.1-74.9m-69 133L109.3 73.6l16.8-16.7 247.6 269.5-16.8 16.7z"/></svg>',
    "webcam": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M425.9 200.1V125c0-7.8-5.2-11.3-11.7-7.7-23.5 13.3-47 26.7-70.6 39.8-3.8 2.1-5.4 5-5.4 9.4.1 22.5.1 45.1 0 67.5 0 4 1.6 6.7 5.1 8.6 23.4 13.2 46.8 26.5 70.1 39.6 7.2 4 12.4 1.1 12.4-7.2.2-24.9.2-50 .1-74.9M291.6 102c-37.6.1-159.3-.1-182.4.2-11.3.1-20.2 7.2-22.4 17.6-.9 3.6-.7 7.7-.7 11.5v142.1c0 14.8 9.5 24.4 24.2 24.5 30.5.1 61 0 91.5 0v.1H294c14.3 0 24-10 24-24.3V128c.1-16.9-9.4-26-26.4-26"/></svg>',
    "webhooks-incoming": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M151.8 53.4c-25.2 1.8-49.4 15.8-62.8 39.3-19 32.9-11.1 74.1 16.2 98.3l-26.5 45.6c-11.1 0-21.5 6-27.1 15.7-8.7 15-3.7 34 11.3 42.8 15 8.7 34.1 3.7 42.8-11.3 5.6-9.8 5.6-21.7 0-31.5l41.8-71.8-13.8-7.8c-22.5-13.1-30.2-41.8-17.2-64.4s41.8-30.2 64.4-17.2 30.2 41.8 17.2 64.4l27.5 15.7c21.7-37.5 8.5-85.9-29-107.7-13.6-7.5-29.1-11.2-44.8-10.1zm1.5 47.1c-4 .6-8.1 1.8-11.8 4-15 8.7-19.9 28.2-11.3 43.2 5.5 9.8 15.8 15.7 27.1 15.7l41.2 71.8 13.8-7.8c22.5-13.1 51.3-5.4 64.3 17.2s5.4 51.3-17.2 64.4-51.3 5.4-64.3-17.2l-27.5 15.7c21.7 37.5 70.1 50.7 107.7 29s50.7-70.1 29-107.7c-19-32.9-58.7-47-93.4-35.3L184.2 148c5.6-9.8 5.6-21.7 0-31.5-6.4-11.4-18.7-17.5-30.9-16zm-74.7 89C35.3 189.5 0 224.7 0 268.1c0 43.3 35.2 78.7 78.6 78.7 38 0 69.9-27.1 77.1-62.8h53.1c5.5 9.4 15.4 15.7 27.1 15.7 17.3 0 31.5-14 31.5-31.4s-14-31.5-31.3-31.5c-11.6 0-21.6 6.3-27.1 15.7h-83v15.7c0 26-21.2 47.2-47.2 47.2s-47.2-21.2-47.2-47.2S52.8 221 78.8 221c-.2 0-.2-31.5-.2-31.5zm347.6-80.9l-1.2 1-87.5 75.9c-3 2.8-4.8 6.6-4.8 10.7 0 4.3 1.9 8.1 4.8 10.7l87.3 75.9 1.5 1.2c1.4 1 3 1.5 4.8 1.5 4.8 0 8.8-4.1 8.8-9.2v-160c0-5.1-4-9.2-8.8-9.2-1.8 0-3.5.6-4.9 1.5z"/></svg>',
    "webhooks-outgoing": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M151.8 53.4c-25.2 1.8-49.3 15.8-62.8 39.3-19 32.9-11.1 74.1 16.2 98.3l-26.5 45.6c-11.1 0-21.4 6-27.1 15.7-8.7 15-3.7 34 11.3 42.7 15 8.7 34.1 3.7 42.7-11.3 5.6-9.8 5.6-21.7 0-31.5l41.8-71.8-13.7-7.8c-22.5-13.1-30.2-41.8-17.2-64.3s41.8-30.2 64.3-17.2 30.2 41.8 17.2 64.3l27.5 15.7c21.7-37.5 8.5-85.9-29-107.6-13.5-7.5-29.1-11.2-44.7-10.1zm1.5 47.2c-4 .5-8.1 1.8-11.8 4-15 8.7-19.9 28.2-11.3 43.2 5.5 9.8 15.8 15.7 27.1 15.7l41.2 71.8 13.7-7.8c22.5-13.1 51.3-5.4 64.3 17.2s5.4 51.3-17.2 64.3-51.3 5.4-64.3-17.2l-27.5 15.7c21.7 37.5 70.1 50.7 107.6 29 37.5-21.7 50.7-70.1 29-107.6-19-32.9-58.7-47-93.3-35.3l-26.7-45.5c5.6-9.8 5.6-21.7 0-31.5-6.4-11.5-18.6-17.6-30.8-16zm-74.7 88.9C35.3 189.5 0 224.7 0 268.1c0 43.3 35.2 78.6 78.6 78.6 37.9 0 69.8-27.1 77.1-62.8h53.1c5.5 9.3 15.4 15.7 27.1 15.7 17.3 0 31.5-14 31.5-31.3s-14-31.5-31.3-31.5c-11.5 0-21.6 6.3-27.1 15.7h-83v15.7c0 26-21.2 47.1-47.1 47.1s-47.1-21.2-47.1-47.1 21-47.2 47-47.2c-.2 0-.2-31.5-.2-31.5zm267.9-80.8l1.2 1 87.4 75.9c3 2.7 4.8 6.6 4.8 10.7 0 4.3-1.9 8.1-4.8 10.7l-87.3 75.9-1.5 1.2c-1.4 1-3.2 1.5-4.8 1.5-4.8 0-8.8-4.1-8.8-9.2v-160c0-5.1 4-9.2 8.8-9.2 1.9 0 3.7.5 5 1.5z"/></svg>',
    "workstorm": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <style>        .st0{fill:#231f20}    </style>    <path d="M287.2 89.4c58.2 14.1 99 67.4 99.2 127.2.2 71.2-59.5 125.3-120.1 127.5l-20.5 46.8c98.8-.3 170.6-76.4 170.3-157.8-.2-72.4-59-137.8-126.4-148.7l-2.5 5zm-62.4 252.1c-58.2-14.1-99-67.4-99.2-127.2-.2-71.2 59.5-125.3 120.1-127.5L266.3 40C163.8 40.3 95.8 116.4 96 197.8c.2 72.4 59 137.8 126.4 148.7l2.4-5z" class="st0"/>    <circle cx="255.9" cy="215.4" r="76.7" class="st0"/></svg>'
};

/***/ }),

/***/ "./src/moongoose.vue":
/*!***************************!*\
  !*** ./src/moongoose.vue ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moongoose_vue_vue_type_template_id_1c506f2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moongoose.vue?vue&type=template&id=1c506f2f& */ "./src/moongoose.vue?vue&type=template&id=1c506f2f&");
/* harmony import */ var _moongoose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moongoose.vue?vue&type=script&lang=js& */ "./src/moongoose.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _moongoose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _moongoose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _moongoose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moongoose.vue?vue&type=style&index=0&lang=scss& */ "./src/moongoose.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _moongoose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _moongoose_vue_vue_type_template_id_1c506f2f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _moongoose_vue_vue_type_template_id_1c506f2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/moongoose.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/moongoose.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/moongoose.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./moongoose.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/moongoose.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/moongoose.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************!*\
  !*** ./src/moongoose.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib??vue-loader-options!./moongoose.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/moongoose.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/moongoose.vue?vue&type=template&id=1c506f2f&":
/*!**********************************************************!*\
  !*** ./src/moongoose.vue?vue&type=template&id=1c506f2f& ***!
  \**********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_template_id_1c506f2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./moongoose.vue?vue&type=template&id=1c506f2f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/moongoose.vue?vue&type=template&id=1c506f2f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_template_id_1c506f2f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_template_id_1c506f2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });
});
//# sourceMappingURL=moongoose.js.map