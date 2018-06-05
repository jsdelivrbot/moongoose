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

/***/ "./node_modules/babel-loader/lib/index.js??ref--0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/moongoose.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/moongoose.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************/
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
    mounted: function mounted() {
        this.rawHtml = _icons_all2.default[this.name];
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

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/moongoose.vue?vue&type=style&index=0&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/moongoose.vue?vue&type=style&index=0&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.svg-icon svg {\n  width: 1em;\n  height: 1em;\n  fill: currentColor;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/moongoose.vue?vue&type=style&index=0&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/moongoose.vue?vue&type=style&index=0&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib??vue-loader-options!./moongoose.vue?vue&type=style&index=0&lang=scss */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/moongoose.vue?vue&type=style&index=0&lang=scss");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/moongoose.vue?vue&type=template&id=1c506f2f":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/moongoose.vue?vue&type=template&id=1c506f2f ***!
  \***************************************************************************************************************************************************************************************/
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
  return _c("span", {
    staticClass: "svg-icon",
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
    "1x1": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M24 24h236v236H24z"/></svg>',
    "1x2": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M24 24h106v236H24zm130 0h106v236H154z"/></svg>',
    "1x3": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M24 24h63v236H24zm87 0h63v236h-63zm86 0h63v236h-63z"/></svg>',
    "1x4": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M216 24h44v236h-44zm-64 0h44v236h-44zm-64 0h44v236H88zm-64 0h44v236H24z"/></svg>',
    "1x5": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M228.8 24H260v236h-31.2zm-51.2 0h31.2v236h-31.2zm-51.2 0h31.2v236h-31.2zm-51.2 0h31.2v236H75.2zM24 24h31.2v236H24z"/></svg>',
    "2x1": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M24 152h236v108H24zm0-128h236v108H24z"/></svg>',
    "2x2": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M152 152h108v108H152zm-128 0h108v108H24zM152 24h108v108H152zM24 24h108v108H24z"/></svg>',
    "2x3": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M194.667 152H260v108h-65.333zm-85.334 0h65.333v108h-65.333zM24 152h65.333v108H24zM194.667 24H260v108h-65.333zm-85.334 0h65.333v108h-65.333zM24 24h65.333v108H24z"/></svg>',
    "2x4": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M216 152h44v108h-44zm-64 0h44v108h-44zm-64 0h44v108H88zm-64 0h44v108H24zM216 24h44v108h-44zm-64 0h44v108h-44zm-64 0h44v108H88zm-64 0h44v108H24z"/></svg>',
    "2x5": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M228.8 152H260v108h-31.2zm-51.2 0h31.2v108h-31.2zm-51.2 0h31.2v108h-31.2zm-51.2 0h31.2v108H75.2zM24 152h31.2v108H24zM228.8 24H260v108h-31.2zm-51.2 0h31.2v108h-31.2zm-51.2 0h31.2v108h-31.2zm-51.2 0h31.2v108H75.2zM24 24h31.2v108H24z"/></svg>',
    "3x1": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M24 194.667h236V260H24zm0-85.334h236v65.333H24zM24 24h236v65.333H24z"/></svg>',
    "3x2": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M152 194.667h108V260H152zm-128 0h108V260H24zm128-85.334h108v65.333H152zm-128 0h108v65.333H24zM152 24h108v65.333H152zM24 24h108v65.333H24z"/></svg>',
    "3x3": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M194.667 194.667H260V260h-65.333zm-85.334 0h65.333V260h-65.333zm-85.333 0h65.333V260H24zm170.667-85.334H260v65.333h-65.333zm-85.334 0h65.333v65.333h-65.333zm-85.333 0h65.333v65.333H24zM194.667 24H260v65.333h-65.333zm-85.334 0h65.333v65.333h-65.333zM24 24h65.333v65.333H24z"/></svg>',
    "3x4": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M216 194.667h44V260h-44zm-64 0h44V260h-44zm-64 0h44V260H88zm-64 0h44V260H24zm192-85.334h44v65.333h-44zm-64 0h44v65.333h-44zm-64 0h44v65.333H88zm-64 0h44v65.333H24zM216 24h44v65.333h-44zm-64 0h44v65.333h-44zm-64 0h44v65.333H88zm-64 0h44v65.333H24z"/></svg>',
    "3x5": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M228.8 194.667H260V260h-31.2zm-51.2 0h31.2V260h-31.2zm-51.2 0h31.2V260h-31.2zm-51.2 0h31.2V260H75.2zm-51.2 0h31.2V260H24zm204.8-85.334H260v65.333h-31.2zm-51.2 0h31.2v65.333h-31.2zm-51.2 0h31.2v65.333h-31.2zm-51.2 0h31.2v65.333H75.2zm-51.2 0h31.2v65.333H24zM228.8 24H260v65.333h-31.2zm-51.2 0h31.2v65.333h-31.2zm-51.2 0h31.2v65.333h-31.2zm-51.2 0h31.2v65.333H75.2zM24 24h31.2v65.333H24z"/></svg>',
    "4x1": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M24 216h236v44H24zm0-64h236v44H24zm0-64h236v44H24zm0-64h236v44H24z"/></svg>',
    "4x2": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M152 216h108v44H152zm-128 0h108v44H24zm128-64h108v44H152zm-128 0h108v44H24zm128-64h108v44H152zM24 88h108v44H24zm128-64h108v44H152zM24 24h108v44H24z"/></svg>',
    "4x3": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M194.667 216H260v44h-65.333zm-85.334 0h65.333v44h-65.333zM24 216h65.333v44H24zm170.667-64H260v44h-65.333zm-85.334 0h65.333v44h-65.333zM24 152h65.333v44H24zm170.667-64H260v44h-65.333zm-85.334 0h65.333v44h-65.333zM24 88h65.333v44H24zm170.667-64H260v44h-65.333zm-85.334 0h65.333v44h-65.333zM24 24h65.333v44H24z"/></svg>',
    "4x4": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M216 216h44v44h-44zm-64 0h44v44h-44zm-64 0h44v44H88zm-64 0h44v44H24zm192-64h44v44h-44zm-64 0h44v44h-44zm-64 0h44v44H88zm-64 0h44v44H24zm192-64h44v44h-44zm-64 0h44v44h-44zm-64 0h44v44H88zm-64 0h44v44H24zm192-64h44v44h-44zm-64 0h44v44h-44zm-64 0h44v44H88zm-64 0h44v44H24z"/></svg>',
    "4x5": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M228.8 216H260v44h-31.2zm-51.2 0h31.2v44h-31.2zm-51.2 0h31.2v44h-31.2zm-51.2 0h31.2v44H75.2zM24 216h31.2v44H24zm204.8-64H260v44h-31.2zm-51.2 0h31.2v44h-31.2zm-51.2 0h31.2v44h-31.2zm-51.2 0h31.2v44H75.2zM24 152h31.2v44H24zm204.8-64H260v44h-31.2zm-51.2 0h31.2v44h-31.2zm-51.2 0h31.2v44h-31.2zm-51.2 0h31.2v44H75.2zM24 88h31.2v44H24zm204.8-64H260v44h-31.2zm-51.2 0h31.2v44h-31.2zm-51.2 0h31.2v44h-31.2zm-51.2 0h31.2v44H75.2zM24 24h31.2v44H24z"/></svg>',
    "5x1": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M24 228.8h236V260H24zm0-51.2h236v31.2H24zm0-51.2h236v31.2H24zm0-51.2h236v31.2H24zM24 24h236v31.2H24z"/></svg>',
    "5x2": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M152 228.8h108V260H152zm-128 0h108V260H24zm128-51.2h108v31.2H152zm-128 0h108v31.2H24zm128-51.2h108v31.2H152zm-128 0h108v31.2H24zm128-51.2h108v31.2H152zm-128 0h108v31.2H24zM152 24h108v31.2H152zM24 24h108v31.2H24z"/></svg>',
    "5x3": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M194.667 228.8H260V260h-65.333zm-85.334 0h65.333V260h-65.333zM24 228.8h65.333V260H24zm170.667-51.2H260v31.2h-65.333zm-85.334 0h65.333v31.2h-65.333zM24 177.6h65.333v31.2H24zm170.667-51.2H260v31.2h-65.333zm-85.334 0h65.333v31.2h-65.333zM24 126.4h65.333v31.2H24zm170.667-51.2H260v31.2h-65.333zm-85.334 0h65.333v31.2h-65.333zM24 75.2h65.333v31.2H24zM194.667 24H260v31.2h-65.333zm-85.334 0h65.333v31.2h-65.333zM24 24h65.333v31.2H24z"/></svg>',
    "5x4": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M216 228.8h44V260h-44zm-64 0h44V260h-44zm-64 0h44V260H88zm-64 0h44V260H24zm192-51.2h44v31.2h-44zm-64 0h44v31.2h-44zm-64 0h44v31.2H88zm-64 0h44v31.2H24zm192-51.2h44v31.2h-44zm-64 0h44v31.2h-44zm-64 0h44v31.2H88zm-64 0h44v31.2H24zm192-51.2h44v31.2h-44zm-64 0h44v31.2h-44zm-64 0h44v31.2H88zm-64 0h44v31.2H24zM216 24h44v31.2h-44zm-64 0h44v31.2h-44zm-64 0h44v31.2H88zm-64 0h44v31.2H24z"/></svg>',
    "5x5": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M228.8 228.8H260V260h-31.2zm-51.2 0h31.2V260h-31.2zm-51.2 0h31.2V260h-31.2zm-51.2 0h31.2V260H75.2zm-51.2 0h31.2V260H24zm204.8-51.2H260v31.2h-31.2zm-51.2 0h31.2v31.2h-31.2zm-51.2 0h31.2v31.2h-31.2zm-51.2 0h31.2v31.2H75.2zm-51.2 0h31.2v31.2H24zm204.8-51.2H260v31.2h-31.2zm-51.2 0h31.2v31.2h-31.2zm-51.2 0h31.2v31.2h-31.2zm-51.2 0h31.2v31.2H75.2zm-51.2 0h31.2v31.2H24zm204.8-51.2H260v31.2h-31.2zm-51.2 0h31.2v31.2h-31.2zm-51.2 0h31.2v31.2h-31.2zm-51.2 0h31.2v31.2H75.2zm-51.2 0h31.2v31.2H24zM228.8 24H260v31.2h-31.2zm-51.2 0h31.2v31.2h-31.2zm-51.2 0h31.2v31.2h-31.2zm-51.2 0h31.2v31.2H75.2zM24 24h31.2v31.2H24z"/></svg>',
    "add-chatbubbles": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M73.3 422c1.8 3 2.8 6.4 2.8 10.2L64 495l56.2-22.1c2.7-1.1 5.6-1.7 8.7-1.7 2.8 0 5.5.5 8 1.4h.2c.4.2.8.3 1.2.5 17.8 7.3 37.4 11.4 57.9 11.4 46.3 0 87.6-20.5 114.8-52.6-14.1 3.6-28.9 5.7-44.1 5.7-95.9 0-173.7-75-173.7-167.5 0-11.8 1.3-23.2 3.7-34.3-30 26.1-48.9 63.8-48.9 105.8 0 28.4 8.6 55.2 23.5 77.5.6.8 1.2 1.9 1.8 2.9z"/>    <path d="M290.3 79c-83.7 0-153.6 57.2-170 133.2-2.4 11.1-3.7 22.5-3.7 34.3 0 92.5 77.7 167.5 173.7 167.5 15.3 0 30-2.1 44.1-5.7 8.1-2.1 16.1-4.5 23.8-7.6.5-.2.9-.4 1.4-.6.1 0 .2 0 .2-.1 2.9-1.1 6.1-1.7 9.3-1.7 3.6 0 7 .7 10.1 2l68.6 25.8-17-73.8c0-4.4 1.2-8.6 3.3-12.2.6-1.1 1.4-2.1 2.1-3.1 17.4-26.1 27.5-57.2 27.5-90.5C464 154 386.3 79 290.3 79zM54.9 10h52.5v160.1H54.9z"/>    <path d="M1.139 116.334v-52.5h160.1v52.5z"/></svg>',
    "address-book": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M341.9 331v-53.2c0-4.8-2.4-8.9-7.3-12.1l-66.5-31.4c16.9-10.5 25.4-27.4 25.4-50.8 0-16.1-4.8-29.8-14.5-41.1s-21.4-16.9-35.1-16.9-25.4 5.6-35.1 16.9c-9.7 11.3-14.5 25-14.5 41.1 0 22.6 8.9 39.5 26.6 50.8l-67.7 31.4c-4 2.4-6 6.4-6 12.1V331c0 8.9 3.6 13.3 10.9 13.3h171.7c8.1 0 12.1-4.4 12.1-13.3zm116-199.5h-29v36.3h29c8.1 0 12.1 4 12.1 12.1v36.3c0 8.1-4 12.1-12.1 12.1h-29v35.1h29c8.1 0 12.1 4.4 12.1 13.3V313c0 8.1-4 12.1-12.1 12.1h-29V360h29c8.1 0 12.1 4.4 12.1 13.3v36.3c0 8.1-4 12.1-12.1 12.1h-29v10.9c0 12.9-6.4 19.3-19.3 19.3H78.3c-12.9 0-19.3-6.4-19.3-19.3V60.2c0-12.9 6.4-19.3 19.3-19.3h331.2c12.9 0 19.3 6.4 19.3 19.3v10.9h29c8.1 0 12.1 4 12.1 12.1v36.3c.1 8-3.9 12-12 12z"/></svg>',
    "alert-circled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M476.7 422.2L270.1 72.7c-2.9-5-8.3-8.7-14.1-8.7-5.9 0-11.3 3.7-14.1 8.7L35.3 422.2c-2.8 5-4.8 13-1.9 17.9 2.9 4.9 8.2 7.9 14 7.9h417.1c5.8 0 11.1-3 14-7.9 3-4.9 1-13-1.8-17.9zM288 400h-64v-48h64v48zm0-80h-64V176h64v144z"/></svg>',
    "alert-send": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M238.4 269.7H267v64.5h-28.6zm0 78.9H267v21.5h-28.6z"/>    <path d="M374.2 212.9c-28.6-30-66.6-48.2-107.6-51.5V65.1l83.9 75.4c2.6 2.3 5.9 3.6 9.3 3.6 3.9 0 7.7-1.7 10.4-4.6 5.1-5.7 4.7-14.5-1-19.7l-107-96.2-.6-.6-.2-.1c-.1-.1-.2-.2-.4-.3 0 0-.1 0-.1-.1l-.3-.3-.6-.3c-.1-.1-.2-.1-.3-.2l-1.1-1.1h-1.1c-.3-.1-.6-.2-1-.3-.4-.1-.8-.2-1.2-.2-.3-.1-.8-.1-1.3-.1h-2.6c-.6 0-1 .1-1.3.1-.2 0-.3 0-.4.1h-.7l-.6.3h-.5l-1.8.9c-.3.1-.5.3-.7.4l-.2.1h-.4L136 119.5c-2.8 2.5-4.4 5.9-4.6 9.6-.2 3.7 1.1 7.3 3.6 10.1 2.7 2.9 6.4 4.6 10.4 4.6 3.4 0 6.7-1.3 9.3-3.6l83.9-75.4V161C152.1 168.5 85 241.1 85 328.5c0 92.5 75.3 167.8 167.8 167.8 92.5 0 167.8-75.3 167.8-167.8-.1-43.2-16.6-84.2-46.4-115.6zm-28.1 178.7H159.4c-2.6 0-4.9-1.4-6.2-3.5-1.3-2.3-.4-5.8.9-8l92.5-156.4c1.3-2.3 3.6-3.9 6.3-3.9 2.6 0 5 1.6 6.3 3.9L351.6 380c1.3 2.3 2.1 5.9.8 8-1.3 2.2-3.7 3.6-6.3 3.6z"/></svg>',
    "alert": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M320 480H192v-96h128v96zm-16-160h-96L192 32h128l-16 288z"/></svg>',
    "android-arrow-back": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"/></svg>',
    "android-close": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"/></svg>',
    "android-download": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999zM224 268v-76h64v76h68L256 368 156 268h68z"/></svg>',
    "android-favorite-outline": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z"/></svg>',
    "android-favorite": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"/></svg>',
    "android-folder": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M213.338 96H74.666C51.197 96 32 115.198 32 138.667v234.666C32 396.802 51.197 416 74.666 416h362.668C460.803 416 480 396.802 480 373.333V186.667C480 163.198 460.803 144 437.334 144H256.006l-42.668-48z"/></svg>',
    "android-happy": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 48C140.563 48 48 141.6 48 256s92.563 208 208 208 208-93.6 208-208S370.401 48 256 48zm0 374.4c-91.518 0-166.404-74.883-166.404-166.4 0-91.518 74.887-166.4 166.404-166.4S422.404 164.482 422.404 256 347.518 422.4 256 422.4zm72.8-187.2c17.683 0 31.201-13.518 31.201-31.2s-13.519-31.2-31.201-31.2c-17.682 0-31.2 13.518-31.2 31.2s13.518 31.2 31.2 31.2zm-145.6 0c17.682 0 31.2-13.518 31.2-31.2s-13.519-31.2-31.2-31.2c-17.683 0-31.201 13.518-31.201 31.2s13.519 31.2 31.201 31.2zM256 370.4c48.883 0 89.436-30.164 106.081-72.801H149.919C166.564 340.236 207.117 370.4 256 370.4z"/></svg>',
    "android-microphone-off": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M367.951 354.654l-26.616-26.562-9.568-9.548-4.698-4.706L187 174.041v.346L76.112 63.531 51.921 87.572 187 222.47v28.816c0 37.79 31.121 68.714 68.91 68.714a68.6 68.6 0 0 0 24.565-4.545l32.389 32.274c-17.333 8.793-36.812 13.86-56.782 13.86-62.986 0-121.365-48.59-121.365-116.59H95.773C95.773 322 158 387.701 233 398.013V480h46v-81.987c22-3.352 43.066-11.222 61.627-22.622l95.278 95.078 24.033-24-33.847-33.785-58.216-57.959 58.224 57.959-58.148-58.03zM325 251.286V100.714C325 62.924 293.791 32 256 32s-69 30.924-69 68.714v25.244l137.109 136.968c.67-3.791.891-7.679.891-11.64zM416.439 245h-38.941c0 20.496-5.498 39.676-14.931 56.197l27.572 27.516c16.523-24.11 26.3-52.787 26.3-83.713zm43.56 201.427l-33.897-33.743 33.855 33.785z"/></svg>',
    "android-microphone": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 320c37.712 0 68.571-30.924 68.571-68.714V100.714C324.571 62.924 293.712 32 256 32s-68.571 30.924-68.571 68.714v150.572c0 37.79 30.859 68.714 68.571 68.714zm121.139-75.452c0 68.714-58.282 116.815-121.139 116.815s-121.139-48.102-121.139-116.815H96c0 77.873 61.719 143.153 137.144 153.465V480h45.713v-81.987C354.281 386.561 416 322.421 416 244.548h-38.861z"/></svg>',
    "android-person-add": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M304 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96zm-192-80v-64H80v64H16v32h64v64h32v-64h64v-32h-64z"/></svg>',
    "android-person": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z"/></svg>',
    "android-share-alt": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M383.822 344.427c-16.045 0-31.024 5.326-41.721 15.979l-152.957-88.42c1.071-5.328 2.142-9.593 2.142-14.919 0-5.328-1.071-9.593-2.142-14.919l150.826-87.35c11.762 10.653 26.741 17.041 43.852 17.041 35.295 0 64.178-28.766 64.178-63.92C448 72.767 419.117 44 383.822 44c-35.297 0-64.179 28.767-64.179 63.92 0 5.327 1.065 9.593 2.142 14.919l-150.821 87.35c-11.767-10.654-26.741-17.041-43.856-17.041-35.296 0-63.108 28.766-63.108 63.92 0 35.153 28.877 63.92 64.178 63.92 17.115 0 32.089-6.389 43.856-17.042l151.891 88.421c-1.076 4.255-2.141 8.521-2.141 13.847 0 34.094 27.806 61.787 62.037 61.787 34.229 0 62.036-27.693 62.036-61.787.001-34.094-27.805-61.787-62.035-61.787z"/></svg>',
    "android-share": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z"/></svg>',
    "announcement": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M290.7 408.2c3.7 7.3 2.6 13.5-3.3 18.6v1.1l-28.5 15.3-2.2 2.2c-7.3 5.1-13.9 3.3-19.7-5.5l-1.1-1.1-53.7-93.1v-1.1c-.7 0-1.1-.4-1.1-1.1-5.1-8.8-3.3-15.7 5.5-20.8 2.9-1.5 5.1-2.2 6.6-2.2h40.5c3.7 0 6.9 2.2 9.9 6.6l47.1 80v1.1zM467 54.4v312.2c0 10.2-5.1 15.3-15.3 15.3-3.7 0-6.9-1.5-9.9-4.4L295 293.2H187.7c-8.8 0-13.9-4.7-15.3-14.2V134.4c0-10.2 5.1-15.3 15.3-15.3h120.5l134.7-76.7c2.2-2.2 5.1-3.3 8.8-3.3 10.2 0 15.3 5.1 15.3 15.3zm-338.4 68c10.2 0 15.3 5.1 15.3 15.3v139.1c-1.5 8.8-6.6 13.1-15.3 13.1-22.6 0-42.2-8.2-58.6-24.6-16.4-16.4-24.6-36.3-24.6-59.7s8-43.1 24.1-59.1 35.7-24.1 59.1-24.1z"/></svg>',
    "aol": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M237.779 142.187c-54.631 0-95.965 42.468-95.965 95.012 0 55.43 43.06 95.011 95.965 95.011s95.836-39.607 95.836-95.011c0-52.544-41.18-95.012-95.836-95.012zm0 50.225c23.605-.18 42.931 19.945 42.931 44.838 0 24.713-19.326 44.839-42.931 44.839s-42.932-20.126-42.932-44.839c0-24.893 19.353-44.838 42.932-44.838zM511.242 299.02c0 18.373-14.868 33.267-33.268 33.267s-33.268-14.868-33.268-33.268 14.869-33.268 33.268-33.268c18.348 0 33.268 14.869 33.268 33.268zm-96.841 26.928h-52.285V89.928h52.26v235.994h.025zM46.932 89.927h-49.09L-97.17 325.922h66.536l11.107-33.268H62.83l11.107 33.268h66.485L46.932 89.927zM-2.158 243.59l24.557-79.19 24.558 79.19H-2.159z"/></svg>',
    "arrow-down-b": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M98.9 184.7l1.8 2.1 136 156.5c4.6 5.3 11.5 8.6 19.2 8.6 7.7 0 14.6-3.4 19.2-8.6L411 187.1l2.3-2.6c1.7-2.5 2.7-5.5 2.7-8.7 0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2 0-16.6 7.1-16.6 15.8 0 3.3 1.1 6.4 2.9 8.9z"/></svg>',
    "arrow-down-c": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M383.6 322.7L278.6 423c-5.8 6-13.7 9-22.4 9s-16.5-3-22.4-9L128.4 322.7c-12.5-11.9-12.5-31.3 0-43.2 12.5-11.9 32.7-11.9 45.2 0l50.4 48.2v-217c0-16.9 14.3-30.6 32-30.6s32 13.7 32 30.6v217l50.4-48.2c12.5-11.9 32.7-11.9 45.2 0s12.5 31.2 0 43.2z"/></svg>',
    "arrow-left-b": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M327.3 98.9l-2.1 1.8-156.5 136c-5.3 4.6-8.6 11.5-8.6 19.2 0 7.7 3.4 14.6 8.6 19.2L324.9 411l2.6 2.3c2.5 1.7 5.5 2.7 8.7 2.7 8.7 0 15.8-7.4 15.8-16.6V112.6c0-9.2-7.1-16.6-15.8-16.6-3.3 0-6.4 1.1-8.9 2.9z"/></svg>',
    "arrow-left-c": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M189.3 128.4L89 233.4c-6 5.8-9 13.7-9 22.4s3 16.5 9 22.4l100.3 105.4c11.9 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2L184.4 288h217c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32h-217l48.2-50.4c11.9-12.5 11.9-32.7 0-45.2-12-12.5-31.3-12.5-43.3 0z"/></svg>',
    "arrow-right-b": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M184.7 413.1l2.1-1.8 156.5-136c5.3-4.6 8.6-11.5 8.6-19.2 0-7.7-3.4-14.6-8.6-19.2L187.1 101l-2.6-2.3C182 97 179 96 175.8 96c-8.7 0-15.8 7.4-15.8 16.6v286.8c0 9.2 7.1 16.6 15.8 16.6 3.3 0 6.4-1.1 8.9-2.9z"/></svg>',
    "arrow-right-c": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M322.7 128.4l100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z"/></svg>',
    "arrow-swap": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M64 328v48c0 4.4 3.6 8 8 8h248v64l128-96-128-96v64H72c-4.4 0-8 3.6-8 8zm384-144v-48c0-4.4-3.6-8-8-8H192V64L64 160l128 96v-64h248c4.4 0 8-3.6 8-8z"/></svg>',
    "arrow-up-b": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M413.1 327.3l-1.8-2.1-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6-7.7 0-14.6 3.4-19.2 8.6L101 324.9l-2.3 2.6C97 330 96 333 96 336.2c0 8.7 7.4 15.8 16.6 15.8h286.8c9.2 0 16.6-7.1 16.6-15.8 0-3.3-1.1-6.4-2.9-8.9z"/></svg>',
    "arrow-up-c": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M128.4 189.3L233.4 89c5.8-6 13.7-9 22.4-9s16.5 3 22.4 9l105.4 100.3c12.5 11.9 12.5 31.3 0 43.2-12.5 11.9-32.7 11.9-45.2 0L288 184.4v217c0 16.9-14.3 30.6-32 30.6s-32-13.7-32-30.6v-217l-50.4 48.2c-12.5 11.9-32.7 11.9-45.2 0-12.5-12-12.5-31.3 0-43.3z"/></svg>',
    "beaker": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M143.5 192.5V416c0 8.836 7.851 16.5 16.688 16.5h208c8.836 0 15.312-7.664 15.312-16.5V192.5h-240zm216 151.5a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0v48zm-7.312-72c-4.418 0-8-3.581-8-8s3.582-8 8-8a8 8 0 1 1 0 16z"/>    <path d="M445.078 32.5h-316.64c-54.345 0-64.594 27.426-64.594 39.75C94.094 76.5 95.5 77 95.5 109v307c0 35.346 29.341 64.5 64.688 64.5h207.75c35.346 0 63.562-29.154 63.562-64.5V80.5c0-20.349 12.298-38.276 13.516-40.183 1.219-1.906 3-3.798 3-4.958 0-1.171-.416-2.859-2.938-2.859zm-45.578 48V416c0 17.92-12.443 32.5-29.812 32.5h-209.5c-17.617 0-32.688-14.883-32.688-32.5V109c0-11.812 1.094-37.25-3.828-43.957.921-.793 3.114-.543 4.516-.543h272.66c-.736 0-1.348 10.799-1.348 16z"/></svg>',
    "bookmark": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M344 64H168c-4.4 0-8 3.6-8 8v56h192V72c0-4.4-3.6-8-8-8zM160 448l96-96 96 96V144H160z"/></svg>',
    "bug": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M374.64 127.327C345.365 88.512 303.062 64 256 64s-89.365 24.512-118.64 63.327c6.354 15.64 15.833 30 28.13 42.297 24.176 24.176 56.319 37.49 90.51 37.49s66.334-13.314 90.51-37.49c12.297-12.297 21.776-26.658 28.13-42.297z"/>    <path d="M126.836 142.824a196.881 196.881 0 0 0-4.992 8.644c-2.926-1.84-5.319-3.74-7.745-5.773-1.171-.981-2.954-3.949-4.546-7.35 5.41-11.314 1.181-25.037-9.914-31.261-11.561-6.484-26.188-2.372-32.674 9.189-6.485 11.56-2.371 26.188 9.187 32.673a24.067 24.067 0 0 0 3.847 1.729c2.816 6.269 7.32 14.331 13.548 19.547 4.184 3.507 8.792 7.117 15.204 10.674-7.195 20.259-11.576 42.303-12.545 65.427-11.026.207-18.619 2.1-25.474 4.122-4.16 1.227-8.192 3.395-11.823 5.852a24.268 24.268 0 0 0-2.908-.182c-13.255 0-24 10.745-24 24s10.745 24 24 24c12.93 0 23.467-10.227 23.976-23.032 5.046-1.482 9.888-2.659 17.095-2.774 3.167 33.015 13.304 63.483 28.613 89.224-14.166 11.006-22.882 23.016-26.605 36.317 0 0-.75.438-1.873 1.366-.982.794-1.932 1.65-2.804 2.619-8.865 9.855-8.062 25.031 1.793 33.895 9.854 8.865 25.028 8.062 33.893-1.793 8.087-8.988 8.095-22.381.558-31.395 3.074-5.562 6.236-9.014 13.67-14.961C171.368 425.235 207.723 445.619 248 448V222.872c-53.236-2.918-98.771-34.734-121.164-80.048zM456 256.114c-.985 0-1.954.066-2.908.182-3.631-2.457-7.663-4.625-11.823-5.852-6.854-2.021-14.447-3.915-25.474-4.122-.969-23.125-5.35-45.168-12.545-65.427 6.412-3.557 11.021-7.167 15.204-10.674 6.228-5.216 10.731-13.278 13.548-19.547a24.246 24.246 0 0 0 3.847-1.729c11.558-6.485 15.672-21.114 9.187-32.673-6.485-11.561-21.113-15.673-32.674-9.189-11.095 6.225-15.324 19.947-9.914 31.261-1.592 3.401-3.375 6.369-4.546 7.35-2.426 2.033-4.819 3.933-7.745 5.773a197.896 197.896 0 0 0-4.992-8.644c-22.393 45.314-67.928 77.13-121.164 80.048V448c40.277-2.381 76.632-22.765 103.686-54.42 7.434 5.947 10.596 9.399 13.67 14.961-7.537 9.014-7.529 22.406.558 31.395 8.864 9.855 24.038 10.658 33.893 1.793 9.854-8.863 10.658-24.039 1.793-33.895-.872-.969-1.821-1.825-2.804-2.619-1.123-.929-1.873-1.366-1.873-1.366-3.724-13.302-12.439-25.312-26.605-36.317 15.31-25.74 25.446-56.209 28.613-89.224 7.207.115 12.049 1.292 17.095 2.774.509 12.806 11.046 23.032 23.976 23.032 13.255 0 24-10.745 24-24s-10.748-24-24.003-24z"/></svg>',
    "camera": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M430.4 147h-67.5l-40.4-40.8s-.2-.2-.3-.2l-.2-.2c-6-6-14.1-9.8-23.3-9.8h-84c-9.8 0-18.5 4.2-24.6 10.9v.1l-39.5 40h-69C63 147 48 161.6 48 180.2v202.1c0 18.6 15 33.7 33.6 33.7h348.8c18.5 0 33.6-15.1 33.6-33.7V180.2c0-18.6-15.1-33.2-33.6-33.2zM256 365.5c-50.9 0-92.4-41.6-92.4-92.6 0-51.1 41.5-92.6 92.4-92.6 51 0 92.4 41.5 92.4 92.6 0 51-41.4 92.6-92.4 92.6zm168.1-165c-7.7 0-14-6.3-14-14.1s6.3-14.1 14-14.1 14 6.3 14 14.1-6.3 14.1-14 14.1z"/>    <path d="M256 202.9c-38.6 0-69.8 31.3-69.8 70 0 38.6 31.2 70 69.8 70 38.5 0 69.8-31.3 69.8-70s-31.3-70-69.8-70z"/></svg>',
    "chatbubbles": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M73.3 391c1.8 3 2.8 6.4 2.8 10.2L64 464l56.2-22.1c2.7-1.1 5.6-1.7 8.7-1.7 2.8 0 5.5.5 8 1.4h.2c.4.2.8.3 1.2.5 17.8 7.3 37.4 11.4 57.9 11.4 46.3 0 87.6-20.5 114.8-52.6-14.1 3.6-28.9 5.7-44.1 5.7-95.9 0-173.7-75-173.7-167.5 0-11.8 1.3-23.2 3.7-34.3-30 26.1-48.9 63.8-48.9 105.8 0 28.4 8.6 55.2 23.5 77.5.6.8 1.2 1.9 1.8 2.9z"/>    <path d="M290.3 48c-83.7 0-153.6 57.2-170 133.2-2.4 11.1-3.7 22.5-3.7 34.3 0 92.5 77.7 167.5 173.7 167.5 15.3 0 30-2.1 44.1-5.7 8.1-2.1 16.1-4.5 23.8-7.6.5-.2.9-.4 1.4-.6.1 0 .2 0 .2-.1 2.9-1.1 6.1-1.7 9.3-1.7 3.6 0 7 .7 10.1 2l68.6 25.8-17-73.8c0-4.4 1.2-8.6 3.3-12.2.6-1.1 1.4-2.1 2.1-3.1 17.4-26.1 27.5-57.2 27.5-90.5C464 123 386.3 48 290.3 48z"/></svg>',
    "checkmark-box-checked": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M347.2 396.6H76c-10 0-18.2-8.1-18.2-18.2V117.2C57.9 107.1 66 99 76 99h271.2c10 0 18.2 8.1 18.2 18.2v261.3c-.1 10-8.2 18.1-18.2 18.1zm-24.7-224.1l-29.2-23c-.9-.8-2.1-1.2-3.3-1.2-1.2 0-2.5.5-3.3 1.3L180.6 285.9s-41.7-40.1-42.9-41.3-2.7-3.2-5-3.2-3.4 1.7-4.7 2.9c-.9 1-15.7 16.6-23.1 24.4-.4.4-.7.8-1.1 1.1-.7.9-1.1 1.9-1.1 3s.4 2.2 1.1 3.1l1.5 1.4s74 71.1 75.3 72.3c1.2 1.1 2.7 2.7 4.9 2.7s3.9-2.3 4.9-3.3l132.3-170c.7-.9 1.1-1.9 1.1-3.1-.1-1.2-.5-2.5-1.3-3.4z"/></svg>',
    "checkmark-box": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M347.2 396.6H76c-10 0-18.2-8.1-18.2-18.2V117.2C57.9 107.1 66 99 76 99h271.2c10 0 18.2 8.1 18.2 18.2v261.3c-.1 10-8.2 18.1-18.2 18.1zm-11.4-29.2V127.2H86.2v240.3h249.6z"/></svg>',
    "checkmark-circled-outlined": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 49C141.7 49 49 141.7 49 256s92.7 207 207 207 207-92.7 207-207S370.3 49 256 49zm106.2 137.8l-128.5 165c-1 1-2.7 3.2-4.7 3.2-2.1 0-3.5-1.5-4.7-2.7-1.2-1.2-72.9-70.1-72.9-70.1l-1.4-1.4c-.6-.8-1-1.8-1-3s.5-2.1 1-3c.4-.4.6-.6 1-1.1 7.1-7.5 21.5-22.6 22.5-23.6 1.2-1.2 2.2-2.8 4.4-2.8 2.3 0 3.8 1.9 4.9 3 1.1 1.1 41.6 40 41.6 40l102.9-132.1c.9-.7 2-1.3 3.2-1.3s2.3.5 3.2 1.2l28.3 22.3c.7.9 1.2 2 1.2 3.2 0 1.3-.5 2.4-1 3.2z"/>    <path d="M256 28c125.9 0 228 102.1 228 228S381.9 484 256 484 28 381.9 28 256 130.1 28 256 28m0-25c-34.2 0-67.3 6.7-98.5 19.9-30.1 12.7-57.2 31-80.4 54.2s-41.5 50.3-54.2 80.4C9.7 188.7 3 221.8 3 256s6.7 67.3 19.9 98.5c12.7 30.1 31 57.2 54.2 80.4s50.3 41.5 80.4 54.2c31.2 13.2 64.3 19.9 98.5 19.9s67.3-6.7 98.5-19.9c30.1-12.7 57.2-31 80.4-54.2s41.5-50.3 54.2-80.4c13.2-31.2 19.9-64.3 19.9-98.5s-6.7-67.3-19.9-98.5c-12.7-30.1-31-57.2-54.2-80.4s-50.3-41.5-80.4-54.2C323.3 9.7 290.2 3 256 3z"/></svg>',
    "checkmark-circled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm114.9 149.1L231.8 359.6c-1.1 1.1-2.9 3.5-5.1 3.5-2.3 0-3.8-1.6-5.1-2.9-1.3-1.3-78.9-75.9-78.9-75.9l-1.5-1.5c-.6-.9-1.1-2-1.1-3.2 0-1.2.5-2.3 1.1-3.2.4-.4.7-.7 1.1-1.2 7.7-8.1 23.3-24.5 24.3-25.5 1.3-1.3 2.4-3 4.8-3 2.5 0 4.1 2.1 5.3 3.3 1.2 1.2 45 43.3 45 43.3l111.3-143c1-.8 2.2-1.4 3.5-1.4 1.3 0 2.5.5 3.5 1.3l30.6 24.1c.8 1 1.3 2.2 1.3 3.5.1 1.3-.4 2.4-1 3.3z"/></svg>',
    "checkmark": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M461.6 109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4-2.4 0-4.6 1-6.3 2.5L194.5 323s-78.5-75.5-80.7-77.7c-2.2-2.2-5.1-5.9-9.5-5.9s-6.4 3.1-8.7 5.4c-1.7 1.8-29.7 31.2-43.5 45.8-.8.9-1.3 1.4-2 2.1-1.2 1.7-2 3.6-2 5.7 0 2.2.8 4 2 5.7l2.8 2.6s139.3 133.8 141.6 136.1c2.3 2.3 5.1 5.2 9.2 5.2 4 0 7.3-4.3 9.2-6.2l249.1-320c1.2-1.7 2-3.6 2-5.8 0-2.5-1-4.6-2.4-6.4z"/></svg>',
    "chevron-down": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 298.3l174.2-167.2c4.3-4.2 11.4-4.1 15.8.2l30.6 29.9c4.4 4.3 4.5 11.3.2 15.5L264.1 380.9c-2.2 2.2-5.2 3.2-8.1 3-3 .1-5.9-.9-8.1-3L35.2 176.7c-4.3-4.2-4.2-11.2.2-15.5L66 131.3c4.4-4.3 11.5-4.4 15.8-.2L256 298.3z"/></svg>',
    "chevron-left-double": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M488.2 430.2c4.2 4.3 4.1 11.4-.2 15.8l-29.9 30.6c-4.3 4.4-11.3 4.5-15.5.2L238.4 264.1c-2.1-2.2-3.1-5.1-3-8.1-.2-2.9.8-5.9 3-8.1L442.6 35.2c4.2-4.3 11.2-4.2 15.5.2L488 66c4.3 4.4 4.4 11.5.2 15.8L321 255.9l167.2 174.3z"/>    <path d="M296.2 430.2c4.2 4.3 4.1 11.4-.2 15.8l-29.9 30.6c-4.3 4.4-11.3 4.5-15.5.2L46.4 264.1c-2.1-2.2-3.1-5.1-3-8.1-.2-2.9.8-5.9 3-8.1L250.6 35.2c4.2-4.3 11.2-4.2 15.5.2L296 66c4.3 4.4 4.4 11.5.2 15.8L129 255.9l167.2 174.3z"/></svg>',
    "chevron-left": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M213.7 256L380.9 81.9c4.2-4.3 4.1-11.4-.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-.2L131.1 247.9c-2.2 2.2-3.2 5.2-3 8.1-.1 3 .9 5.9 3 8.1l204.2 212.7c4.2 4.3 11.2 4.2 15.5-.2l29.9-30.6c4.3-4.4 4.4-11.5.2-15.8L213.7 256z"/></svg>',
    "chevron-right-double": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M153.7 396.6L-13.5 222.5c-4.2-4.3-4.1-11.4.2-15.8l29.9-30.6c4.3-4.4 11.3-4.5 15.5-.2l204.2 212.7c2.2 2.2 3.2 5.2 3 8.1.1 3-.9 5.9-3 8.1L32.1 617.4c-4.2 4.3-11.2 4.2-15.5-.2l-29.9-30.6c-4.3-4.4-4.4-11.5-.2-15.8l167.2-174.2z"/>    <path d="M345.7 396.6L178.5 222.5c-4.2-4.3-4.1-11.4.2-15.8l29.9-30.6c4.3-4.4 11.3-4.5 15.5-.2l204.2 212.7c2.2 2.2 3.2 5.2 3 8.1.1 3-.9 5.9-3 8.1L224.1 617.4c-4.2 4.3-11.2 4.2-15.5-.2l-29.9-30.6c-4.3-4.4-4.4-11.5-.2-15.8l167.2-174.2z"/></svg>',
    "chevron-right": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M298.3 256L131.1 81.9c-4.2-4.3-4.1-11.4.2-15.8l29.9-30.6c4.3-4.4 11.3-4.5 15.5-.2L380.9 248c2.2 2.2 3.2 5.2 3 8.1.1 3-.9 5.9-3 8.1L176.7 476.8c-4.2 4.3-11.2 4.2-15.5-.2L131.3 446c-4.3-4.4-4.4-11.5-.2-15.8L298.3 256z"/></svg>',
    "chevron-up": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 213.7l174.2 167.2c4.3 4.2 11.4 4.1 15.8-.2l30.6-29.9c4.4-4.3 4.5-11.3.2-15.5L264.1 131.1c-2.2-2.2-5.2-3.2-8.1-3-3-.1-5.9.9-8.1 3L35.2 335.3c-4.3 4.2-4.2 11.2.2 15.5L66 380.7c4.4 4.3 11.5 4.4 15.8.2L256 213.7z"/></svg>',
    "clipboard": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M161 160.5h192c-1.688-20-9.729-35.45-27.921-40.356-.446-.119-1.12-.424-1.567-.541-12.004-3.424-21.012-7.653-21.012-20.781V78.227C302.5 52.691 281.976 32 256.49 32c-25.466 0-45.99 20.691-45.99 46.227v20.595c0 13.128-8.592 17.169-20.597 20.593-.447.117-.8.61-1.266.729C170.446 125.05 162.927 140.5 161 160.5zm95.99-96.105c7.615 0 13.791 6.195 13.791 13.832 0 7.654-6.176 13.85-13.791 13.85-7.614 0-13.772-6.195-13.772-13.85 0-7.637 6.158-13.832 13.772-13.832z"/>    <path d="M405.611 63.5H331.5v13.988c0 10.583 9.193 19.012 19.507 19.012h37.212c6.667 0 12.099 5.435 12.44 12.195l.085 327.1c-.322 6.432-5.303 11.546-11.514 12.017l-264.418.031c-6.211-.471-11.149-5.695-11.472-12.126l-.085-327.014c.322-6.761 5.858-12.203 12.506-12.203h37.231c10.313 0 18.507-8.429 18.507-19.012V63.5h-73.131C93.25 63.5 80.5 76.058 80.5 91.575v360.38c0 15.502 12.75 28.545 27.869 28.545h297.242c15.138 0 26.889-13.043 26.889-28.545V91.575c0-15.517-11.751-28.075-26.889-28.075z"/>    <path d="M144.5 192.5h112v32h-112zm0 192h160v32h-160zm0-64h129v32h-129zm0-64h208v32h-208z"/></svg>',
    "close": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M443.6 387.1L312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z"/></svg>',
    "cloud": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M398.1 233.2c0-1.2.2-2.4.2-3.6 0-65-51.8-117.6-115.7-117.6-46.1 0-85.7 27.4-104.3 67-8.1-4.1-17.2-6.5-26.8-6.5-29.5 0-54.1 21.9-58.8 50.5C57.3 235.2 32 269.1 32 309c0 50.2 40.1 90.9 89.5 91h276.7c45.2-.2 81.7-37.5 81.7-83.4.1-46-36.6-83.3-81.8-83.4z"/></svg>',
    "company": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M104.9 382.5h79.6v-55h47.8v55h79.5V88.7H104.9v293.8zm143.3-263h34.5V154h-34.5v-34.5zm0 69.5h34.5v34.5h-34.5V189zm0 69.5h34.5V293h-34.5v-34.5zm-57.1-139h34.5V154h-34.5v-34.5zm0 69.5h34.5v34.5h-34.5V189zm0 69.5h34.5V293h-34.5v-34.5zm-57-139h34.5V154h-34.5v-34.5zm0 69.5h34.5v34.5h-34.5V189zm0 69.5h34.5V293h-34.5v-34.5zm-146 124h93.2V161.9h-93.2v220.6zM17.5 189H52v34.5H17.5V189zm0 69.5H52V293H17.5v-34.5zm318.6-96.6v220.6h93.2V161.9h-93.2zM399.9 293h-34.5v-34.5h34.5V293zm0-69.5h-34.5V189h34.5v34.5zM134 52.6h148.6v23.7H134zm31.2-36.1h86.2v23.7h-86.2z"/></svg>',
    "disconnected": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M22.9 364.8c1.3-5.5 2.4-11.1 4.1-16.6 4-12.8 11.1-23.8 20.6-33.2l97.3-97.3c.5-.5 1.1-1 1.4-1.2l25.4 25.4c-.8.8-1.9 2.1-3.2 3.4l-94 94c-11.6 11.6-17.2 25.2-14.4 41.7 2.8 16.6 12.3 28.5 27.7 34.6 15.7 6.3 31 4.3 44.7-6.2 2.9-2.2 5.7-4.8 8.3-7.4 36.3-36.2 72.5-72.5 108.8-108.8 1.8-1.9 3.6-3.8 6-6.3-13.2-4-24.7-9.8-34.7-18.7-10-8.9-16.6-20.3-23.1-32.4 10.4-5.8 20.7-11.6 31.5-17.7 7.7 15.4 16.9 29.1 35.5 33.4-3.3-16.8-12.4-28.5-27.8-35-15.5-6.5-30.3-2.8-45.2 3.8-4.1-11.5-8.1-22.5-12-33.5 43.6-23.5 108.8-3.8 121 58.4 1.3-.6 2.5-1.2 3.7-1.8 44.5-25 89.1-49.9 133.6-75 16.1-9.1 24.8-23 24.7-41.7-.2-32.4-35.3-54.6-64.3-40-21 10.5-41.2 22.7-61.7 34.2-30.3 16.9-60.5 33.9-90.7 50.9-1.3.7-2.7 1.5-4.5 2.4-5.8-10.3-11.6-20.6-17.5-31.1 1.2-.8 2.2-1.6 3.4-2.2 49.4-27.7 98.7-55.7 148.2-83.1 30.6-16.9 61.1-16.1 89.6 4.4 25.2 18.1 36.5 43.6 33.1 74.7-3.1 28.4-17.9 49.3-42.6 63.2-46.1 26-92.3 51.9-138.5 77.6-5.5 3.1-11.6 5-17.3 7.7-1.7.8-3.7 2.4-4.4 4.1-4.8 11.3-11.9 20.9-20.5 29.6-37 36.9-73.9 73.8-110.8 110.7-17.4 17.5-38.3 26.1-63.1 25.3-37.9-1.2-71.7-31.4-76.9-69-.2-1.5-.7-3-1-4.5-.4-5.6-.4-11.2-.4-16.8zM66 202.7c-4.7 0-8.2-2.8-8.8-7-.7-4.7 1.7-8.4 6.8-9.5 11.2-2.3 22.5-4.3 33.7-6.3l60.3-10.8c5.6-1 9.8 1.5 10.8 6.2 1 4.9-1.7 9-7.2 10-31.5 5.8-63 11.5-94.5 17.1-.4.3-.9.3-1.1.3zM170.3 49.3c0-4.9 2.9-8.3 7.1-8.9 4.3-.6 8.2 1.8 9.2 6.6 1.9 9.1 3.4 18.2 5.1 27.4 4 22.4 8.1 44.7 12.1 67.1 1 5.5-1.7 9.8-6.4 10.6-4.9.9-8.9-1.8-9.9-7.4-5.7-31.2-11.3-62.4-16.9-93.6-.2-.7-.3-1.5-.3-1.8z"/></svg>',
    "division": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M409.6 424.1c-8.2 0-15.2-3-21.2-8.9-5.9-5.9-8.9-13-8.9-21.2 0-8.5 3-15.6 8.9-21.4 5.9-5.8 13-8.7 21.2-8.7 8.5 0 15.6 2.9 21.4 8.7 5.8 5.8 8.7 12.9 8.7 21.4 0 8.2-2.9 15.2-8.7 21.2-5.8 6-12.9 8.9-21.4 8.9zm-151.5 0c-8.2 0-15.2-3-21.2-8.9-5.9-5.9-8.9-13-8.9-21.2 0-8.5 3-15.6 8.9-21.4 5.9-5.8 13-8.7 21.2-8.7s15.2 2.9 21.2 8.7c5.9 5.8 8.9 12.9 8.9 21.4 0 8.2-3 15.2-8.9 21.2-6 6-13 8.9-21.2 8.9zm-151.5 0c-8.5 0-15.6-3-21.4-8.9s-8.7-13-8.7-21.2c0-8.5 2.9-15.6 8.7-21.4 5.8-5.8 12.9-8.7 21.4-8.7 8.2 0 15.2 2.9 21 8.7 5.8 5.8 8.7 12.9 8.7 21.4 0 8.2-2.9 15.2-8.7 21.2-5.9 6-12.8 8.9-21 8.9zM258.1 60.5c8.2 0 15.2 2.9 21.2 8.7 5.9 5.8 8.9 12.9 8.9 21.4 0 8.2-3 15.2-8.9 21.2-5.9 5.9-13 8.9-21.2 8.9s-15.2-3-21.2-8.9c-5.9-5.9-8.9-13-8.9-21.2 0-8.5 3-15.6 8.9-21.4 6-5.8 13-8.7 21.2-8.7zm173.6 286.2v-50.4c0-20.9-7.4-38.7-22.2-53.5s-32.8-22.2-54-22.2h-43.2c-9 0-16.7-3.2-23.1-9.5-6.3-6.3-9.5-14-9.5-23.1v-50.4c9-4 16.4-10.2 22-18.6s8.5-17.9 8.5-28.4c0-14.4-5.1-26.7-15.2-36.8-10.2-10.2-22.4-15.2-36.8-15.2-14.4 0-26.7 5.1-36.8 15.2C211.1 63.9 206 76.2 206 90.6c0 10.4 2.8 19.9 8.5 28.4s13 14.7 22 18.6V188c0 9-3.2 16.7-9.5 23.1-6.3 6.3-14 9.5-23.1 9.5h-43.2c-21.2 0-39.2 7.4-54 22.2-14.8 14.8-22.2 32.7-22.2 53.5v50.4c-8.7 4.2-15.9 10.5-21.6 18.8-5.6 8.3-8.5 17.8-8.5 28.6 0 14.4 5.1 26.6 15.2 36.6s22.4 15 36.8 15c14.4 0 26.6-5.1 36.6-15.2 10-10.2 15-22.3 15-36.4 0-10.7-2.8-20.2-8.5-28.6-5.6-8.3-12.8-14.6-21.6-18.8v-50.4c0-9 3.2-16.7 9.5-23.1 6.3-6.3 14-9.5 23.1-9.5h43.2c5.9 0 11.6-.6 16.9-1.9 5.4-1.3 10.6-3.2 15.7-5.7v90.6c-9 4.2-16.4 10.5-22 18.8-5.6 8.3-8.5 17.8-8.5 28.6 0 14.4 5.1 26.6 15.2 36.6 10.2 10 22.4 15 36.8 15 14.4 0 26.7-5.1 36.8-15.2 10.2-10.2 15.2-22.3 15.2-36.4 0-10.7-2.8-20.2-8.5-28.6-5.6-8.3-13-14.6-22-18.8v-90.6c5.1 2.5 10.3 4.4 15.7 5.7 5.4 1.3 11 1.9 16.9 1.9h43.2c9 0 16.7 3.2 23.1 9.5 6.3 6.3 9.5 14 9.5 23.1v50.4c-8.7 4.2-15.9 10.5-21.6 18.8-5.6 8.3-8.5 17.8-8.5 28.6 0 14.4 5 26.6 15 36.6s22.2 15 36.6 15c14.4 0 26.7-5.1 36.8-15.2s15.2-22.3 15.2-36.4c0-10.7-2.8-20.2-8.5-28.6-5.1-8.3-12.3-14.6-21-18.8z"/></svg>',
    "document": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M399.3 168.9c-.7-2.9-2-5-3.5-6.8l-83.7-91.7c-1.9-2.1-4.1-3.1-6.6-4.4-2.9-1.5-6.1-1.6-9.4-1.6H136.2c-12.4 0-23.7 9.6-23.7 22.9v335.2c0 13.4 11.3 25.9 23.7 25.9h243.1c12.4 0 21.2-12.5 21.2-25.9V178.4c0-3.6-.4-6.2-1.2-9.5zM305.5 111l58 63.5h-58V111zm-161 305.5v-320h129v81.7c0 14.8 13.4 28.3 28.1 28.3h66.9v210h-224z"/></svg>',
    "drag": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M0 144h512v32H0zm0 96h512v32H0zm0 96h512v32H0zm200.7 107.5l.6.8 48.7 56.1c1.6 1.9 4.1 3.1 6.9 3.1s5.2-1.2 6.9-3.1l48.7-56 .8-.9c.6-.9 1-2 1-3.1 0-3.1-2.7-5.7-5.9-5.7H205.6c-3.3 0-5.9 2.5-5.9 5.7 0 1.1.4 2.2 1 3.1zM313.3 70.1l-.6-.8L264 13.2c-1.6-1.9-4.1-3.1-6.9-3.1-2.8 0-5.2 1.2-6.9 3.1l-48.7 56-.8.9c-.6.9-1 2-1 3.1 0 3.1 2.7 5.7 5.9 5.7h102.8c3.3 0 5.9-2.5 5.9-5.7 0-1.1-.4-2.2-1-3.1z"/></svg>',
    "earth": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M357.275 125.525c-2.209-3.986-9.498-11.837-13.977-13.325-5.979-.921-2.398 4.413-2.398 6.7-1.543 1.157-3.941 2.454-5.102 4-.699.6 1.704 6.103 6.337 4.335s1.964 1.799 5.164 8.865 9.607 7.207 12.49 5.067c3.655-2.712-.503-12.012-2.514-15.642zM375.8 170.6l-.005.017c0 .012.002.012.005-.017zm58.8 26.5c.4 0-1.8-.4 0 0z"/>    <path d="M256 32C132.3 32 32 132.3 32 256c0 123.701 100.3 224 224 224 123.701 0 224-100.299 224-224 0-123.7-100.299-224-224-224zm-82.601 397.424c-5.515-3.133-9.374-7.56-10.961-15.929-3.947-20.808-.303-32.067 17.962-44.245 8.604-5.736 10.022-12.672 16.9-19.55 1.685-2.14 6.211-10.374 9.2-10.8 3.637-.779 13.709-2.527 15.7-6.5 3.79-5.146 12.127-27.398 15.8-29.602 5.997-3.925 14.419-15.96 8.3-23.1-7.021-8.643-16.799-8.766-25.9-13.301-8.015-4.008-11.574-22.281-17.7-28.601-11.912-12.136-29.999-19.199-45-26.7-8.116-3.25-7.344-4.256-13.7 2.1-8.162 8.162-20.093-2.067-21.3-10.5-.09-2.802-3.296-18.216-1.4-19.4 17.956-11.225-8.328-8.64-10.5-13.8-5.355-14.993 13.008-26.86 25.4-28.1 13.885-1.738 16.784 21.895 22.1 19.9 2.556-1.276 2.566-12.394 2.9-14.8 1.267-8.029 3.588-9.273 11.4-12.175 9.098-3.379 16.063-7.617 25.7-9.225 11.006-3.195 20.317-1.533 28.8-8.6 3.888-2.915 6.704 1.58 10.4 2.4 7.999 1.599 9.7-11.1 9.7-15.9-.034-4.665 1.265-8.63-4.7-13.6-7.806-6.069-19.029-.869-25.3 5.4-7.574 7.035-16.357 6.55-13.8-5.6.634-4.433 10.209-9.587 14-12 3.7-2.222 5.904 2.522 10.4 1.4 6.579-1.463 9.034 4.735 16.8 4.8 3.233-.731 14.796-6.881 8.614-19.366.929-.009 1.856-.03 2.786-.03 1.855 0 3.707.034 5.555.086C264.36 72.967 255.59 80.529 260 91.7c8.79 21.475 15.992 3.014 24.7-7 2.849-2.849 4.633-2.211 9.3-3.1 2.896-.483 7.055-9.27 8.393-11.982a189.668 189.668 0 0 1 56.567 24.255c-7.447.792-9.348-1.396-9.234 7.377.042 3.317.297 13.319 5.274 14.15 8.277.975 6.781 6.832 14.551 7.85 7.443.976 2.816 7.553 5.851 14.05 3.393 10.227-19.806 13.302-24.302 14.8-13.64 4.554 6.34 24.41 15.2 22.3 2.817-.704 12.215-1.902 12.867-5.067-.011-.323-1.836-11.012-.867-12.233 1.533-1.934 5.123-2.946 10.776.255 13.374 7.573 20.146 25.7 35.897 29.295 2.146.489 5.86-.15 8.494 2.033 2.231 3.015 7.92 8.416 1.131 8.416-9.017-2.003-13.78.859-21.198-4.874-7.733-5.977-12.543-10.891-22.75-11.076-8.79-.159-16.68-3.819-25.738-2.35-5.05.819-10.038 2.811-14.912 4.3-4.617 1.538-5.51 9.765-10.2 10.7-19.467 4.581-15.261 23.169-18.773 37.913-1.351 5.662-6.025 21.003-.926 26.087 9.12 8.854 19.783 21.035 33.176 22.963 7.206 1.037 22.954-4.576 27.823 2.737 2.062 4.104 7.447-3.03 8.9.601 3.663 10.988-4.263 18.186-4.337 28.551-.11 15.203 9.178 20.57-3.263 34.148-13.642 13.607-4.333 30.788-11.9 47-4.042 8.337-4.808 19.894-10.872 23.777a190.712 190.712 0 0 1-42.714 20.384c-26.627 8.838-55.155 11.672-83.017 8.456a190.256 190.256 0 0 1-42.88-10.065c-3.769-1.363-7.28-2.505-10.472-3.704a192.177 192.177 0 0 1-7.146-3.223zm-41.7-27.095c-.468-.397-.935-.796-1.399-1.198a196.087 196.087 0 0 1-10.06-9.371 195.58 195.58 0 0 1-9.734-10.471l-.105-.123c-.637-.738-1.257-1.486-1.882-2.234C56.834 316.471 49.259 225.004 92.6 155.1c6.078 6.078-4.101 18.024 7.5 26 5.124 3.606 10.021 2.159 9 8.8-.993 6.449 5.355 6.335 6.3 12 2.842 12.429 19.207 18.642 9.9 32.6-9.118 12.625-16.992 26.729-10.1 42.8 2.254 5.86 7.919 11.858 12.222 16.244 7.813 7.966 7.377 3.188 7.377 13.256-.156 4.373 5.261 8.897 4.7 11.7-1.001 8.011-2.904 15.93-3.9 23.9-1.792 28.638-.129 56.662 21.3 78.1-7.969-4.806-15.636-10.249-22.968-16.29a196.52 196.52 0 0 1-2.232-1.881z"/></svg>',
    "easel": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M80 144h352v192H80z"/>    <path d="M464 96H48c-8.837 0-16 7.163-16 16v256c0 8.837 6.932 16 15.768 16H464c8.837 0 16-7.163 16-16V112c0-8.837-7.163-16-16-16zm-16 256H64V128h384v224zM80 480h32l28.147-80h-31.312zM270.83 32h-29.358l-17.301 48h63.928zm101.023 368L400 480h32l-28.78-80zM240 400h32v48h-32z"/></svg>',
    "edit": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M163 439.573l-90.569-90.569L322.78 98.656l90.57 90.569zm308.723-351.18l-48.115-48.114c-11.723-11.724-31.558-10.896-44.304 1.85l-45.202 45.203 90.569 90.568 45.202-45.202c12.743-12.746 13.572-32.582 1.85-44.305zM64.021 363.252L32 480l116.737-32.021z"/></svg>',
    "ellipsis": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M113.7 304C86.2 304 64 282.6 64 256c0-26.5 22.2-48 49.7-48 27.6 0 49.8 21.5 49.8 48 0 26.6-22.2 48-49.8 48zm142.3 0c-27.5 0-49.8-21.4-49.8-48 0-26.5 22.3-48 49.8-48 27.5 0 49.7 21.5 49.7 48 0 26.6-22.2 48-49.7 48zm142.2 0c-27.5 0-49.8-21.4-49.8-48 0-26.5 22.2-48 49.8-48 27.5 0 49.8 21.5 49.8 48 0 26.6-22.2 48-49.8 48z"/></svg>',
    "email": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M67 148.7c11 5.8 163.8 89.1 169.5 92.1 5.7 3 11.5 4.4 20.5 4.4s14.8-1.4 20.5-4.4c5.7-3 158.5-86.3 169.5-92.1 4.1-2.1 11-5.9 12.5-10.2 2.6-7.6-.2-10.5-11.3-10.5H65.8c-11.1 0-13.9 3-11.3 10.5 1.5 4.4 8.4 8.1 12.5 10.2z"/>    <path d="M455.7 153.2c-8.2 4.2-81.8 56.6-130.5 88.1l82.2 92.5c2 2 2.9 4.4 1.8 5.6-1.2 1.1-3.8.5-5.9-1.4l-98.6-83.2c-14.9 9.6-25.4 16.2-27.2 17.2-7.7 3.9-13.1 4.4-20.5 4.4s-12.8-.5-20.5-4.4c-1.9-1-12.3-7.6-27.2-17.2L110.7 338c-2 2-4.7 2.6-5.9 1.4-1.2-1.1-.3-3.6 1.7-5.6l82.1-92.5c-48.7-31.5-123.1-83.9-131.3-88.1-8.8-4.5-9.3.8-9.3 4.9v205c0 9.3 13.7 20.9 23.5 20.9h371c9.8 0 21.5-11.7 21.5-20.9v-205c0-4.2.6-9.4-8.3-4.9z"/></svg>',
    "eye-disabled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M376.4 158.3L448 86.6 425.4 64l-77.6 77.6C320 127.7 289.5 119 256 119c-81.9 0-145.7 52.2-224 137 34.8 37.4 66.8 72.7 103.3 98.1L64 425.4 86.6 448l76.9-76.9c27 13.7 57 21.9 92.5 21.9 99.9 0 173.4-81.8 224-135.5-28-34.1-62.4-71.8-103.6-99.2zm-210 97.7c0-50.4 40.2-91.3 89.6-91.3 19.3 0 37.2 6.2 51.8 16.9l-50.7 50.7c-.7-2.6-1.1-5.4-1.1-8.3 0-7.9 2.9-15.1 7.6-20.7-2.5-.4-5-.6-7.6-.6-28.8 0-52.3 23.9-52.3 53.3 0 8.6 2 16.8 5.6 24L182 307.4c-9.8-14.7-15.6-32.4-15.6-51.4zm89.6 91.3c-19.3 0-37.2-6.2-51.8-16.9l27.4-27.4c7.3 4 15.6 6.2 24.4 6.2 28.8 0 52.3-23.9 52.3-53.3 0-2.3-.2-4.6-.4-6.9-5.5 4.3-12.3 6.9-19.8 6.9-2.9 0-5.6-.4-8.3-1.1l50.3-50.3c9.8 14.6 15.6 32.3 15.6 51.4-.1 50.5-40.3 91.4-89.7 91.4z"/></svg>',
    "eye": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 128c-81.9 0-145.7 48.8-224 128 67.4 67.7 124 128 224 128 99.9 0 173.4-76.4 224-126.6C428.2 198.6 354.8 128 256 128zm0 219.3c-49.4 0-89.6-41-89.6-91.3 0-50.4 40.2-91.3 89.6-91.3s89.6 41 89.6 91.3c0 50.4-40.2 91.3-89.6 91.3z"/>    <path d="M256 224c0-7.9 2.9-15.1 7.6-20.7-2.5-.4-5-.6-7.6-.6-28.8 0-52.3 23.9-52.3 53.3s23.5 53.3 52.3 53.3 52.3-23.9 52.3-53.3c0-2.3-.2-4.6-.4-6.9-5.5 4.3-12.3 6.9-19.8 6.9-17.8 0-32.1-14.3-32.1-32z"/></svg>',
    "face-hide": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M36.39 36.86c-.017-.03-.45-.795-1.082-3.643l-.05-.228-.073-.219c-.182-.545-.108-.782-.08-.869.551-1.769.737-2.647.737-3.48v-.28l-.033-.278c-.285-2.27-.567-4.607-.836-6.883-.18-2.041.917-4.502 3.252-7.317 2.258-2.716 5.88-4.038 11.074-4.038 5.193 0 8.817 1.322 11.072 4.038 1.085 1.31 1.876 2.53 2.422 3.666l3.3-3.3a24.28 24.28 0 0 0-2.263-3.238c-3.133-3.774-7.977-5.663-14.53-5.663-6.557 0-11.399 1.889-14.534 5.663-3.136 3.777-4.56 7.302-4.275 10.579.284 2.422.57 4.772.854 7.05 0 .288-.177.999-.534 2.138-.356 1.142-.32 2.353.108 3.633.57 2.566 1.14 4.275 1.71 5.13.569.854.997 1.996 1.282 3.42.18 1.037.375 1.996.59 2.878l3.805-3.804c-.405-2.003-1.037-3.637-1.915-4.956m53.941 50.333l-.429-8.55c-.57-2.848-6.337-6.337-17.31-10.471a8.202 8.202 0 0 1-1.067-.426c-6.697-2.422-10.19-3.777-10.474-4.062-.855-.57-1.28-2.991-1.28-7.266 0-1.709.641-3.382 1.921-5.022 1.283-1.636 2.281-4.523 2.992-8.654.285-1.424.713-2.566 1.283-3.42.378-.567.759-1.55 1.136-2.875L59.94 43.61c-.71 3.343-1.466 4.605-1.786 5.016-1.91 2.44-2.878 5.063-2.878 7.79 0 5.127.485 8.742 2.827 10.67.758.707 1.9 1.27 11.685 4.811.387.18.816.348 1.295.51 10.916 4.119 13.716 6.538 14.372 7.287l.15 3.001H20.853l-4.497 4.497h73.976zm-7.097-74.483L7.107 88.834 3 84.727 79.128 8.602z"/></svg>',
    "face-show": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M41.427.232c-6.554 0-11.398 1.888-14.534 5.662-3.133 3.778-4.557 7.303-4.272 10.58.285 2.422.57 4.772.854 7.053 0 .285-.18.996-.536 2.135-.354 1.142-.318 2.353.108 3.633.57 2.566 1.139 4.275 1.708 5.13.573.853.999 1.996 1.284 3.42.713 4.13 1.711 7.017 2.991 8.654 1.284 1.64 1.925 3.313 1.925 5.021v1.283c0 3.136-.285 5.022-.854 5.663-.57.642-2.495 1.532-5.771 2.671a351.306 351.306 0 0 1-6.2 2.137C7.16 67.408 1.39 70.898.82 73.746c-.285 1.996-.428 4.844-.428 8.55h82.07l-.429-8.55c-.57-2.848-6.34-6.338-17.31-10.472a8.262 8.262 0 0 1-1.07-.425c-6.697-2.422-10.187-3.777-10.472-4.062-.854-.57-1.283-2.992-1.283-7.267 0-1.708.642-3.381 1.925-5.021 1.28-1.637 2.278-4.524 2.992-8.654.285-1.424.71-2.567 1.283-3.42.57-.855 1.14-2.564 1.709-5.13.426-1.28.461-2.491.105-3.633-.354-1.14-.534-1.85-.534-2.135.285-2.281.57-4.631.855-7.053.284-3.277-1.14-6.802-4.272-10.58C52.825 2.12 47.98.232 41.427.232m0 4.496c5.195 0 8.817 1.322 11.074 4.038 2.335 2.815 3.43 5.276 3.268 7.183-.285 2.41-.57 4.751-.852 7.018l-.036.278v.282c0 .83.186 1.709.74 3.478.028.087.103.323-.08.869l-.075.219-.048.228c-.633 2.848-1.064 3.609-1.064 3.609-.906 1.36-1.544 3.007-1.97 5.15-.791 4.587-1.736 6.178-2.102 6.65-1.912 2.44-2.88 5.062-2.88 7.79 0 5.126.488 8.742 2.827 10.67.758.704 1.9 1.27 11.685 4.81.387.18.816.348 1.298.51 10.913 4.12 13.713 6.538 14.372 7.288l.15 3H4.981c.054-1.13.13-2.11.228-2.928.53-.65 3.133-3.097 14.426-7.357a391.299 391.299 0 0 0 6.173-2.128c5.012-1.745 6.646-2.797 7.653-3.93 1.433-1.613 1.99-4.038 1.99-8.652V51.52c0-2.728-.967-5.35-2.88-7.79-.366-.472-1.31-2.063-2.123-6.767-.404-2.026-1.043-3.672-1.93-5-.018-.03-.447-.794-1.082-3.642l-.048-.228-.075-.219c-.183-.546-.108-.782-.081-.87.554-1.768.74-2.646.74-3.477v-.282l-.036-.278c-.282-2.267-.566-4.608-.836-6.883-.177-2.042.917-4.503 3.252-7.318 2.258-2.716 5.88-4.038 11.075-4.038" mask="url(#b)" transform="translate(7.872 4.896)"/></svg>',
    "film-marker": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M448.4 208h-344l341.2-68c8.5-1.6 14-9.7 12.4-18.1l-8.9-45.4c-1.6-8.4-9.8-13.8-18.3-12.2L60.7 137.9c-8.5 1.6-14 9.7-12.4 18l8.9 45.4c.6 2.8 2.1 5.2 3.9 7.2-7.4 1.2-13.1 7.2-13.1 14.9v209.2c0 8.5 7 15.4 15.6 15.4h384.8c8.6 0 15.6-6.9 15.6-15.4V223.4c0-8.5-7-15.4-15.6-15.4zM305 402.4l-50.7-36.3-50.7 36.3 19.5-58.4-50.8-36H235l19.2-58.4 19.3 58.4h62.7l-50.8 36 19.6 58.4z"/></svg>',
    "flag": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M426.4 182.5c-35.8 5.9-94.2 7.5-133-66.1-41.6-79.1-108.8-81.5-148.1-74.3-19.1 3.5-33.4 19.5-33.4 35v196.6c11.3 4.3 23.4-.2 26.5-.8.8-.2 1.5-.3 2.4-.5 25-5.5 51.4-8.1 116.8 23.3 82 39.3 153.8-33.1 181.6-83.5 2-3.5 8.7-20.2 8.7-36.2-9.7 4-21.5 6.5-21.5 6.5zM88 32H72c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V40c0-4.4-3.6-8-8-8z"/></svg>',
    "forward": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M288 298.1v92.3L448 256 288 112v80C100.8 192 64 400 64 400c53-93 122.4-101.9 224-101.9z"/></svg>',
    "gear-a": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M411.1 256c0-23.9 14.8-42.8 36.9-55.8-4-13.3-9.3-26.2-15.8-38.2-24.9 6.5-45-3.2-62-20.2-16.9-16.9-22.1-37.1-15.6-62-12-6.5-24.8-11.8-38.2-15.8-13 22.2-36.4 36.9-60.4 36.9-23.9 0-47.4-14.7-60.4-36.9-13.4 4-26.2 9.3-38.2 15.8 6.5 24.9 1.3 45-15.6 62-16.9 16.9-37.1 26.7-61.9 20.2-6.6 12-11.9 24.8-15.9 38.2 22.2 13 37 31.9 37 55.8s-14.8 47.4-37 60.4c4 13.4 9.3 26.2 15.8 38.2 24.9-6.5 45-1.3 61.9 15.6 17 16.9 22.1 37.1 15.6 62 12.1 6.5 24.8 11.8 38.2 15.8 13-22.2 36.5-36.9 60.4-36.9s47.4 14.7 60.4 36.9c13.4-4 26.2-9.3 38.2-15.8-6.5-24.9-1.3-45 15.6-62 16.9-16.9 37.1-26.7 62-20.2 6.5-12.1 11.8-24.9 15.8-38.2-22.1-13-36.8-31.9-36.8-55.8zM256 354.3c-54.2 0-98.3-44-98.3-98.3s44-98.3 98.3-98.3 98.3 44 98.3 98.3-44 98.3-98.3 98.3z"/></svg>',
    "grid-layout": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M0 73h102v102H0zm115 53h61v49h-61zm0-53h61v40h-61zM73 0h103v60H73zM0 0h60v60H0z"/></svg>',
    "grid": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M160 153.3c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zm128 0c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zm128 0c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zm-256 128c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zm128 0c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zm128 0c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zm-256 128c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zm128 0c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5zm128 0c0 3.7-3 6.7-6.7 6.7h-50.5c-3.7 0-6.7-3-6.7-6.7v-50.5c0-3.7 3-6.7 6.7-6.7h50.5c3.7 0 6.7 3 6.7 6.7v50.5z"/></svg>',
    "hammer": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M410 32h-52c-3.3 0-6 2.7-6 6v5.6c-4 4-10.9 9.8-17.8 9.8-10.5 0-14.8-16.4-26.1-18.4s-27.2-3-37.9-3-52 .7-102 21.5-71.7 64.9-72.3 81.4c-.3 8.7 2.7 21.1 10 11.1 7.3-10 35.3-42.3 57.7-44.7 22.3-2.3 45.7.8 63.7 17.2 17.3 15.7 21.3 30.8 21.3 73.5l-6.6 2c-4.3 1.3-7 5.7-7 9 0 0-.2 6.5-.2 70.4C234.8 368 224 474 224 474c0 3.3 2.7 6 6 6h84c3.3 0 6-2.7 6-6 0 0-10.8-106-10.8-200.6 0-63.9-.2-70.4-.2-70.4 0-3.3-2.3-7.8-7-9l-8-2c0-38.2-.4-54 6.3-65.9 7-12.4 22.3-22.9 29.7-25.1 5.9-1.8 16 1.3 22 6.5V122c0 3.3 2.7 6 6 6h52c3.3 0 6-2.7 6-6V38c0-3.3-2.7-6-6-6z"/></svg>',
    "heart": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M429.9 95.6c-40.4-42.1-106-42.1-146.4 0L256 124.1l-27.5-28.6c-40.5-42.1-106-42.1-146.4 0-45.5 47.3-45.5 124.1 0 171.4L256 448l173.9-181c45.5-47.3 45.5-124.1 0-171.4z"/></svg>',
    "help-circled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm20.2 326.7c-.5 17.8-13.7 28.8-30.8 28.3-16.4-.5-29.3-12.2-28.8-30.1.5-17.8 14.1-29.1 30.5-28.6 17.2.5 29.7 12.6 29.1 30.4zm48.7-127.3c-4.2 5.9-13.6 13.5-25.4 22.7l-13.1 9c-6.4 4.9-10.4 10.7-12.5 17.3-1.1 3.5-1.9 12.6-2.1 18.7-.1 1.2-.8 3.9-4.5 3.9h-39.1c-4.1 0-4.6-2.4-4.5-3.6.6-16.6 3-30.3 9.9-41.3 9.3-14.8 35.5-30.4 35.5-30.4 4-3 7.1-6.2 9.5-9.7 4.4-6 8-12.7 8-19.9 0-8.3-2-16.2-7.3-22.8-6.2-7.7-12.9-11.4-25.8-11.4-12.7 0-20.1 6.4-25.4 14.8-5.3 8.4-4.4 18.3-4.4 27.3H175c0-34 8.9-55.7 27.7-68.5 12.7-8.7 28.9-12.5 47.8-12.5 24.8 0 44.5 4.6 61.9 17.8 16.1 12.2 24.6 29.4 24.6 52.6 0 14.3-5 26.3-12.1 36z"/></svg>',
    "help": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M345.1 77.1C317.6 56.2 286.6 49 247.3 49c-29.8 0-55.3 6.1-75.5 19.7C142 89 128 123.1 128 177h76.8c0-14.4-1.4-29.9 7-43.2 8.4-13.3 20.1-23.5 40.2-23.5 20.4 0 30.9 5.9 40.8 18.1 8.4 10.4 11.6 22.8 11.6 36 0 11.4-5.8 21.9-12.7 31.4-3.8 5.6-8.8 10.6-15.1 15.4 0 0-41.5 24.7-56.1 48.1-10.9 17.4-14.8 39.2-15.7 65.3-.1 1.9.6 5.8 7.2 5.8h61.8c5.8 0 7-4.4 7.1-6.2.4-9.5 1.6-24.1 3.3-29.6 3.3-10.4 9.7-19.5 19.7-27.3l20.7-14.3c18.7-14.6 33.6-26.5 40.2-35.9 11.3-15.4 19.2-34.4 19.2-56.9 0-36.7-13.5-63.8-38.9-83.1zM242 370.2c-25.9-.8-47.3 17.2-48.2 45.3-.8 28.2 19.5 46.7 45.5 47.5 27 .8 47.9-16.6 48.7-44.7.8-28.1-19-47.3-46-48.1z"/></svg>',
    "home": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M448 288L256 64 64 288h48v160h96V320h96v128h96V288z"/></svg>',
    "icecream": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M128 256l128 224 128-224zm274.5-83.4c-.8-.4-1.5-.8-2.3-1.3-4.4-2.8-8.4-8.5-8.7-12.7l.1-.7c3.2-9 5-19.2 5-29.8 0-53.1-43-96.1-96.1-96.1-31.4 0-59.2 15-76.8 38.3 0 0-9.1 14-10.8 29 0 0 1.1-19.4 4.2-31.5-7.4-2.5-15.4-3.8-23.6-3.8-41.7 0-75.6 33.8-75.6 75.6 0 6.4.8 12.6 2.3 18.5 0 .4-.1.7-.2 1-.9 5.1-4 9.5-8.4 12.3-.7.5-1.5.9-2.2 1.3-8.2 5-13.5 13.6-13.5 23.4 0 15.4 13.5 28 29.9 28H386c16.4 0 29.8-12.5 29.8-28 .2-9.8-5.2-18.5-13.3-23.5z"/></svg>',
    "images": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M457.6 140.2l-82.5-4-4.8-53.8c-1-11.3-11.1-19.2-22.9-18.3l-296 24.3c-11.8 1-20.3 10.5-19.4 21.7l21.2 235.8c1 11.3 11.2 19.2 22.9 18.3l15-1.2-2.4 45.8c-.6 12.6 9.2 22.8 22.4 23.5L441.3 448c13.2.6 24.1-8.6 24.8-21.2L480 163.5c.6-12.5-9.3-22.7-22.4-23.3zm-355 5.3l-7.1 134.8L78.1 305l-16-178v-1c.5-5 4.3-9 9.5-9.4l261-21.4c5.2-.4 9.7 3 10.5 7.9 0 .2.3.2.3.4 0 .1.3.2.3.4l2.7 30.8-219-10.5c-13.2-.4-24.2 8.8-24.8 21.3zm334.1 236.9L390 327.1l-27.5-32.7c-2.4-2.9-6.3-5.3-10.6-5.5-4.3-.2-7.5 1.5-11.1 4.1l-16.4 11.9c-3.5 2.1-6.2 3.5-9.9 3.3-3.6-.2-6.8-1.6-9.1-3.8-.8-.8-2.3-2.2-3.5-3.4l-42.8-48.9c-3.1-3.9-8.2-6.4-13.8-6.7-5.7-.3-11.2 2.1-14.8 5.6L129.4 359.8l-6.8 7.4.3-6.8 6.8-128.9 3.3-62.9v-1c1.4-5.4 6.2-9.3 11.9-9l204.2 9.8 28.7 1.4 58.3 2.8c5.8.3 10.3 4.7 10.4 10.2 0 .2.3.3.3.5s.3.3.3.5l-10.4 198.6z"/>    <path d="M373.2 262.3c19.4 0 35.2-15.8 35.2-35.2s-15.7-35.2-35.2-35.2c-19.4 0-35.2 15.7-35.2 35.2s15.7 35.2 35.2 35.2z"/></svg>',
    "information-circled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M480 253C478.3 129.3 376.7 30.4 253 32S30.4 135.3 32 259c1.7 123.7 103.3 222.6 227 221 123.7-1.7 222.7-103.3 221-227zM256 111.9c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM300 395h-88v-11h22V224h-22v-12h66v172h22v11z"/></svg>',
    "ios-book": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M164.466 64C109.266 64 64 89.98 64 143v283h22.141c12.86-26.334 44.238-42 78.325-42 40.224 0 73.877 27.528 81.616 64H248V95.346C230.76 73.951 198.981 64 164.466 64zm183.155 0c-34.332 0-66.713 9.851-83.621 31.011V448h1.797c7.739-36.472 41.495-64 81.722-64 34.085 0 61.149 11.666 78.429 42H448V143c0-53.02-45.177-79-100.379-79z"/></svg>',
    "ios-briefcase": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 112h32v16H96zm-48 96h416v240H48zm336-96h32v16h-32z"/>    <path d="M416 128v32h-32v-32h-48V96c-.5-18.2-13.6-32-32.2-32h-99.1C186.1 64 176 77.7 176 96v32h-48v32H96v-32H48v64h416v-64h-48zm-96-.5v.5H192V98.1c0-10.2 2.9-18.1 13.7-18.1h97.1c10.4 0 17.2 7.7 17.2 18.1v29.4z"/></svg>',
    "ios-circle-filled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 83C141.1 83 48 176.1 48 291s93.1 208 208 208 208-93.1 208-208S370.9 83 256 83zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"/>    <path d="M256 131c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160z"/></svg>',
    "ios-circle-outline": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 83C141.1 83 48 176.1 48 291s93.1 208 208 208 208-93.1 208-208S370.9 83 256 83zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"/></svg>',
    "ios-close-empty": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M340.2 160l-84.4 84.3-84-83.9-11.8 11.8 84 83.8-84 83.9 11.8 11.7 84-83.8 84.4 84.2 11.8-11.7-84.4-84.3 84.4-84.2z"/></svg>',
    "ios-copy": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M144 416V112h-32v336h240v-32H160z"/>    <path d="M325.3 64H160v336h240V139l-74.7-75zM368 176h-80V96h16v64h64v16z"/></svg>',
    "ios-lightbulb-outline": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M400 172.9C400 95.1 333.9 32 256 32S112 95.1 112 173c0 31 13.2 59 30.2 83h-.3c10.9 15 21.4 27.7 31.5 45 22 37.8 18.6 74.3 18.7 81.6v1.4h128v-1.4c0-8.9-3.6-43.8 18.4-81.6 10.1-17.3 20.6-30 31.5-45h-.1c16.9-24 30.1-52 30.1-83.1zm-49 81.5c-.6.8-1.1 1.5-1.7 2.3-8.1 10.9-16.5 22.2-24.7 36.1-17.3 29.7-20.4 57.9-20.8 75.1H288V256l32-64h-16.6L272 256v112h-32V256l-31.4-64H192l32 64v112h-15.9c-.5-17.2-3.9-45.7-20.9-75-4.5-7.7-9.1-15-13.7-21h.2l-18.6-25.6c-15.8-21.6-27.1-47.1-27.1-73.6 0-33.4 16-64.8 39.6-88.4s55-36.7 88.4-36.7c33.4 0 64.8 13.1 88.4 36.7 23.6 23.6 39.6 55 39.6 88.4 0 26.5-11.3 51.9-27.1 73.5l-5.9 8.1zM224 464h64v16h-64zm-16-32h96v16h-96zm0-32h96v16h-96z"/></svg>',
    "ios-list-outline": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M432 80v352H80V80h352m16-16H64v384h384V64z"/>    <path d="M192 152h192v16H192zm0 96h192v16H192zm0 96h192v16H192z"/>    <circle cx="144" cy="160" r="16"/>    <circle cx="144" cy="256" r="16"/>    <circle cx="144" cy="352" r="16"/></svg>',
    "ios-people": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M349.2 334.8c11.3 3.9-11.2-3.9 0 0z"/>    <path d="M349.2 334.8c-13.5-4.7-28.1-5-41.6-9.7-4.1-1.4-12.2-3.1-13.9-7.8-1.6-4.6-1.6-10-1.9-14.8-.2-3.8-.3-7.6-.3-11.4 0-2.5 6.4-7.8 7.8-10.1 5.4-9 5.9-21.1 6.9-31.3 8.7 2.4 9.8-13.7 11.3-18.6 1.1-3.4 7.8-26.8-2.6-23.6 2.5-4.4 3.5-9.8 4.2-14.7 2-12.8 2.8-26.8-1.1-39.3-8.1-26-33-40.6-59.3-41.4-26.7-.9-53.5 11.9-63.5 37.8-4.8 12.6-4.4 26.3-2.8 39.5.7 6 1.7 12.7 4.7 18.1-9.7-2.9-4.5 17.7-3.4 21.3 1.6 5.1 3 23.4 12.1 20.9.8 8.1 1.7 16.4 3.9 24.3 1.5 5.3 4.6 9.8 8.2 13.9 1.8 2 2.7 2.2 2.6 4.8-.1 7.8.1 16.2-1.9 23.8-2 7.6-18.7 10.8-25.4 12.2-18 3.7-34.6 5.4-49.6 16.6-17.5 12.9-26.6 33-26.6 54.7h278c0-29.5-17.8-55.5-45.8-65.2z"/>    <path d="M143.3 322.5l1.6-.8c-.3.1-.6.3-.8.4-.3.1-.5.2-.8.4z"/>    <path d="M143.3 322.5c-3.4 1.7-7.5 3.8.8-.4l.8-.4c6.8-3.2 14.1-4 21.4-4.7 2.8-.3 4.1-2.2 2-4.9-4-5.1-17.8-6.1-23.6-8.4-3.6-1.4-4.6-2.7-4.9-6.7-.1-1.8-1.1-9.8.3-11.1 1-1 7.3-.6 8.7-.8 5.7-.7 11.5-1.9 16.9-4 2.3-.9 4.5-2 6.5-3.4 2.4-1.8-1.8-6.2-2.9-8.6-3.4-7.5-4.9-15.7-5.4-23.9-1-16.1 1.5-32.3-1.5-48.3-4.5-24.5-23.4-36.8-47.5-36.8-14.9 0-29.6 5.1-37.9 18.1-9.2 14.3-8.7 32.1-8.2 48.4.3 9.3.7 18.7-.6 28-.6 4-1.5 7.9-2.9 11.7-1.1 2.9-6.7 10.1-4.5 11.6 8.3 5.9 22.3 7.9 32.3 7.1.3 4.9 1.2 11.2-.6 15.8-2.8 7.2-23.7 9.1-30 11.2C45 317.8 32 332 32 352h79.5c1.3 0 6.3-9.3 7.7-10.8 6.8-7.5 15.1-14 24.1-18.7zm306-10.6c-8.1-2.6-23.7-3.4-29.5-10.4-2.9-3.5-1.3-12.4-1-16.6 4.4.4 9.2-.3 13.7-.9 4.1-.6 8.1-1.4 12-2.8 1.8-.7 3.6-1.4 5.3-2.4 3.9-2.3 2.1-2.7.1-6.1-10.9-18.3-6-41.5-6.5-61.6-.4-16.7-4.8-35-20-44.4-13.7-8.5-34-8.8-48.7-2.8-42.4 17-17.4 73.2-31.9 105.4-2.5 5.4-6.1 7.3.2 10.5 3.5 1.8 7.3 3 11.1 3.9 5.8 1.4 11.8 2.2 17.8 2.4 1 0 .3 12.6 0 13.9-1.1 4.9-11.8 6.3-15.8 7.4-4.1 1.1-10.9 1.4-12.9 5.7-3 6.4 9.9 4.8 13.1 5.4 10.3 1.9 19.4 7.6 27.4 14.1 6 4.9 14.1 11.5 16.3 19.5h80.2c-.2-20.1-13.3-34.4-30.9-40.2z"/></svg>',
    "ios-personadd": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M416 153h-25v-25h-14v25h-25v14h25v25h14v-25h25zm-52.7 210.9c-12.9-4.6-31.4-6.2-43.2-8.8-6.8-1.5-16.7-5.3-20-9.2-3.3-4-1.3-40.9-1.3-40.9s6.1-9.6 9.4-18c3.3-8.4 6.9-31.4 6.9-31.4s6.8 0 9.2-11.9c2.6-13 6.6-18.4 6.1-28.1-.5-9-5.2-9.5-5.7-9.5s4.9-13.6 5.6-42.4C331.1 129.6 305 96 256 96s-75 33.5-74.3 67.6c.6 28.7 5.6 42.4 5.6 42.4-.5 0-5.2.5-5.7 9.5-.5 9.7 3.6 14.9 6.1 27.9 2.4 11.9 9.2 12 9.2 12s3.6 23.1 6.9 31.5c3.3 8.5 9.4 18 9.4 18s2 36.9-1.3 40.9-13.2 7.7-20 9.2c-11.9 2.6-30.3 4.3-43.2 8.9C135.8 368.5 96 384 96 416h320c0-32-39.8-47.5-52.7-52.1z"/></svg>',
    "ios-telephone-hang-up": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M86.7 313.1c20.9.3 70.1-9.2 89.4-28.4 4.5-4.5 7.4-9.3 8.5-14.6 3.4-15.4 6.2-27.6 9.8-31.2 2-2 5.9-2.3 14.6-3l1.5-.1c24.2-1.7 29.8-1.6 40.1-1.3l2.6.1c1.8 0 3.5.1 5 .1 8.9.1 15.3.2 39.3 1.7l1.1.1c11.5.7 19 1.1 22.1 3.8 3 2.6 5.2 9.7 7.4 24.5 2.7 18 15.1 31 36.9 38.7 17.3 6.1 37.5 8.1 55.4 9.9l1.6.1c15.4 1.6 27.7-2.3 36.7-11.2 10-10 12.9-23.6 14.4-30.8.1-.6.2-1.2.4-1.8 3.6-16.1 2.2-31.7-3.8-43.1-9.1-17.1-23.3-36.8-77.9-52.8-47.2-13.9-82.9-19.2-131.6-19.9-45.8-.6-63.4 2-102.1 8.2-43.1 6.9-77.6 20.6-94.4 37.4-15.6 15.6-27.9 27.9-24.3 66.6 3.7 40.7 24.9 46.6 47.3 47z"/></svg>',
    "ios-telephone": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M415.9 335.5c-14.6-15-56.1-43.1-83.3-43.1-6.3 0-11.8 1.4-16.3 4.3-13.3 8.5-23.9 15.1-29 15.1-2.8 0-5.8-2.5-12.4-8.2l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6-6.2-6.4-10.7-11-26.6-29l-.7-.8c-7.6-8.6-12.6-14.2-12.9-18.3-.3-4 3.2-10.5 12.1-22.6 10.8-14.6 11.2-32.6 1.3-53.5-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2c-9.8-12-21.2-18-33.9-18-14.1 0-25.8 7.6-32 11.6-.5.3-1 .7-1.5 1-13.9 8.8-24 20.9-27.8 33.2-5.7 18.5-9.5 42.5 17.8 92.4 23.6 43.2 45 72.2 79 107.1 32 32.8 46.2 43.4 78 66.4 35.4 25.6 69.4 40.3 93.2 40.3 22.1 0 39.5 0 64.3-29.9 26-31.4 15.2-50.6-.4-66.7z"/></svg>',
    "link": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256.5 208h-.5.5zm112-48H320s26 17 31.6 48h16.9c17.6 0 31.5 13.9 31.5 31.5v32c0 17.6-13.9 32.5-31.5 32.5h-112c-17.6 0-32.5-14.9-32.5-32.5V240h-48v31.5c0 11.5 2.5 22.5 6.9 32.5 12.6 28.2 40.9 48 73.6 48h112c44.2 0 79.5-36.3 79.5-80.5v-32c0-44.2-35.3-79.5-79.5-79.5z"/>    <path d="M329.6 208c-12.1-28.3-40.1-48-73.1-48h-112c-44.2 0-80.5 35.3-80.5 79.5v32c0 44.2 36.3 80.5 80.5 80.5H192s-25.8-17-32.1-48h-15.4c-17.6 0-32.5-14.9-32.5-32.5v-32c0-17.6 14.9-31.5 32.5-31.5h112c17.6 0 31.5 13.9 31.5 31.5V272h48v-32.5c0-11.2-2.3-21.9-6.4-31.5z"/></svg>',
    "load-d": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M432 240h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-256 16c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80c8.8 0 16-7.2 16-16zm80 80c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-8.8-7.2-16-16-16zm0-272c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16zm69.3 152c4.4 7.7 14.2 10.3 21.9 5.9l69.3-40c7.7-4.4 10.3-14.2 5.9-21.9s-14.2-10.3-21.9-5.9l-69.3 40c-7.7 4.5-10.3 14.2-5.9 21.9zm-138.6 80c-4.4-7.7-14.2-10.3-21.9-5.9l-69.3 40c-7.7 4.4-10.3 14.2-5.9 21.9s14.2 10.3 21.9 5.9l69.3-40c7.7-4.5 10.3-14.2 5.9-21.9zm131.2 35.1c-4.4-7.7-14.2-10.3-21.9-5.9s-10.3 14.2-5.9 21.9l40 69.3c4.4 7.7 14.2 10.3 21.9 5.9 7.7-4.4 10.3-14.2 5.9-21.9l-40-69.3zm-136-235.5c-4.4-7.7-14.2-10.3-21.9-5.9-7.7 4.4-10.3 14.2-5.9 21.9l40 69.3c4.4 7.7 14.2 10.3 21.9 5.9s10.3-14.2 5.9-21.9l-40-69.3zM296 186.7c7.7 4.4 17.4 1.8 21.9-5.9l40-69.3c4.4-7.7 1.8-17.4-5.9-21.9-7.7-4.4-17.4-1.8-21.9 5.9l-40 69.3c-4.4 7.7-1.8 17.5 5.9 21.9zm-80 138.6c-7.7-4.4-17.4-1.8-21.9 5.9l-40 69.3c-4.4 7.7-1.8 17.4 5.9 21.9 7.7 4.4 17.4 1.8 21.9-5.9l40-69.3c4.4-7.7 1.8-17.5-5.9-21.9zm200.4 4.8l-69.3-40c-7.7-4.4-17.4-1.8-21.9 5.9-4.4 7.7-1.8 17.4 5.9 21.9l69.3 40c7.7 4.4 17.4 1.8 21.9-5.9 4.4-7.7 1.8-17.4-5.9-21.9zM95.6 181.9l69.3 40c7.7 4.4 17.4 1.8 21.9-5.9s1.8-17.4-5.9-21.9l-69.3-40c-7.7-4.4-17.4-1.8-21.9 5.9-4.4 7.7-1.8 17.4 5.9 21.9z"/></svg>',
    "locked": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M86.4 480h339.2c12.3 0 22.4-9.9 22.4-22.1V246c0-12.2-10-22-22.4-22H404v-30.9c0-41.5-16.2-87.6-42.6-115.4-26.3-27.8-64-45.7-105.3-45.7h-.2c-41.3 0-79 17.9-105.3 45.6C124.2 105.4 108 151.5 108 193v31H86.4C74 224 64 233.9 64 246v211.9c0 12.2 10 22.1 22.4 22.1zM161 193.1c0-27.3 9.9-61.1 28.1-80.3v-.3C206.7 93.9 231 83 255.9 83h.2c24.9 0 49.2 10.9 66.8 29.5v.2l-.1.1c18.3 19.2 28.1 53 28.1 80.3V224H161v-30.9z"/></svg>',
    "log-in": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M255.988 32C160.473 32 78.934 91.804 46.727 176h34.639c9.396-20.484 22.457-39.35 38.868-55.762C156.497 83.973 204.709 64 255.988 64c51.286 0 99.504 19.973 135.771 56.239C428.027 156.505 448 204.719 448 256c0 51.285-19.973 99.501-56.239 135.765C355.494 428.029 307.275 448 255.988 448c-51.281 0-99.493-19.971-135.755-56.234-16.412-16.412-29.473-35.28-38.871-55.766H46.725c32.206 84.201 113.746 144 209.264 144C379.703 480 480 379.715 480 256c0-123.702-100.297-224-224.012-224z"/>    <path d="M206.863 323.883l22.627 22.627L320 256l-90.51-90.51-22.628 22.628L258.745 240H32v32h226.745z"/></svg>',
    "log-out": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M366.863 323.883l22.627 22.627L480 256l-90.51-90.51-22.628 22.628L418.745 240H192v32h226.745z"/>    <path d="M391.491 391.766C355.229 428.029 307.018 448 255.736 448c-51.287 0-99.506-19.971-135.772-56.235C83.697 355.501 64 307.285 64 256c0-51.281 19.697-99.495 55.965-135.761C156.232 83.973 204.45 64 255.736 64c51.279 0 99.491 19.973 135.755 56.238a196.044 196.044 0 0 1 7.333 7.762h40.731c-40.474-58.028-107.709-96-183.819-96C132.021 32 32 132.298 32 256c0 123.715 100.021 224 223.736 224 76.112 0 143.35-37.97 183.822-96h-40.73a194.792 194.792 0 0 1-7.337 7.766z"/></svg>',
    "media-excel": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M0 0v500h500V0H0zm303.334 380l-56.667-85-60 85h-83.333l105-136.667-85-120h85l40 65 41.667-65h86.667l-88.333 120 100 136.667h-85.001z"/></svg>',
    "media-image": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M0 0v500h500V0H0zm136.683 125c26.634 0 48.366 21.65 48.366 48.366s-21.65 48.366-48.366 48.366-48.366-21.65-48.366-48.366c0-28.35 21.65-48.366 48.366-48.366zm281.618 243.301H73.366l71.65-56.699 36.683 28.35 145.016-113.317 53.35 41.667 36.683-28.35v128.35h1.553v-.001z"/></svg>',
    "media-pdf": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M100 391.667v1.667c5-1.667 13.333-5 20-11.667 6.667-5 16.667-15 30-31.667-21.666 10-33.333 21.666-38.333 26.667-10 6.666-11.667 11.666-11.667 15zm143.333-158.334c-10 25-23.333 50-33.333 68.333h3.334c23.333-6.667 40-10 55-13.333 5-1.667 10-1.667 15-3.334-3.334-5-8.333-10-11.667-13.333C260 260 250 246.666 243.333 233.333zM240 166.667c5-20 8.333-36.667 8.333-48.333v-6.667c0-5 1.667-8.333 1.667-11.667-1.667-1.667-3.334-1.667-5-3.334h-3.334s-1.667 1.667-3.334 1.667c0 1.667-1.667 5-3.334 13.333s-1.667 16.667 0 26.667c.002 8.333 1.669 18.334 5.002 28.334z"/>    <path d="M0 0v500h500V0H0zm431.667 353.334c-3.334 5-8.333 13.333-21.666 16.667-10 3.334-18.333 3.334-28.334 0-8.333-3.334-20-8.333-31.667-16.667-11.667-8.333-23.333-18.333-35-30-5-5-10-10-15-16.667-8.333 1.667-18.333 1.667-30 5-13.333 1.667-30 6.667-51.667 11.667-10 3.334-20 6.667-28.334 10-1.667 1.667-1.667 3.334-3.334 5C168.333 365 149.999 386.667 135 400c-11.667 10-23.333 15-33.333 16.667h-5c-8.333 0-13.333-3.334-16.667-10-3.334-5-3.334-13.333-1.667-21.666C80 375 85 366.667 95 358.334c11.667-11.667 28.334-21.666 46.666-31.667 10-5 21.666-10 33.333-13.333 15-21.666 35-56.667 48.333-95 1.667-5 3.334-8.333 5-13.333-5-10-6.667-20-10-26.667-3.334-13.333-6.667-26.667-8.333-36.667-1.667-10 0-21.666 0-31.667 1.667-10 3.334-16.667 6.667-21.666 5-6.667 10-10 15-11.667C235 75 236.666 75 238.333 75c3.334 0 6.667-1.667 11.667 0 3.334 1.667 5 1.667 8.333 5 15 6.667 13.333 18.333 11.667 35v6.667c-1.667 20-8.333 50-18.333 83.333 0 1.667 1.667 3.334 3.334 5 8.333 15 18.333 31.667 33.333 48.333 6.667 8.333 13.333 16.667 21.666 25h35c11.667 1.667 25 3.334 35 5 13.333 3.334 21.666 6.667 30 11.667 10 6.667 16.667 15 21.666 23.333 3.334 10 5.001 21.667.001 30.001z"/>    <path d="M396.666 320c-5-3.334-11.667-6.667-21.666-8.333-10-1.667-20-5-31.667-5h-11.667l1.667 1.667c11.667 11.667 21.666 20 33.333 28.334 10 6.667 18.333 11.667 25 13.333 5 1.667 10 1.667 15 0 1.667 0 5-1.667 6.667-5 1.667-1.667 1.667-6.667 0-10-5-6.667-9.999-11.668-16.667-15.001z"/></svg>',
    "media-powerpoint": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M0 0v500h500V0H0zm331.667 276.667c-13.333 16.667-33.333 26.667-63.333 26.667H230v80h-58.333V150h95c26.667 0 48.333 8.333 61.667 23.333 11.667 13.333 18.333 30 18.333 51.667-.001 20-5 36.667-15 51.667z"/>    <path d="M251.667 195H230v61.667h21.666c15 0 23.333-3.334 30-10 5-5 6.667-13.333 6.667-21.666 0-10-3.334-16.667-8.333-21.666-5-6.669-15-8.335-28.333-8.335z"/></svg>',
    "media-text": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M0 0v500h500V0H0zm274.247 381.667H76.923V330h197.324v51.667zm147.158-103.333H76.923v-51.667h344.482v51.667zm0-101.667H76.923V125h344.482v51.667z"/></svg>',
    "media-word": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M0 0v500h500V0H0zm348.333 381.667h-60l-41.667-135-43.333 135h-60L74.999 150h61.667l40 150 48.333-150h46.666l45 150L360 150h61.667l-73.334 231.667z"/></svg>',
    "minus-circled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm128 240H128v-32h256v32z"/></svg>',
    "minus": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M64 224h384v64H64z"/></svg>',
    "monitor": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M468.7 64H43.3c-6 0-11.3 5-11.3 11.1v265.7c0 6.2 5.2 11.1 11.3 11.1h425.4c6 0 11.3-5 11.3-11.1V75.1c0-6.1-5.2-11.1-11.3-11.1zM448 320H64V96h384v224zM302.5 448c28-.5 41.5-3.9 29-12.5-12.5-8.7-28.5-15.3-29-22.5-.3-3.7-1.7-45-1.7-45h-89.6s-1.5 41.3-1.7 45c-.5 7.1-16.5 13.8-29 22.5s1 12 29 12.5h93z"/></svg>',
    "navicon": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M96 241h320v32H96zm0-96h320v32H96zm0 192h320v32H96z"/></svg>',
    "notification-off": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M476.2 82.4c1.2 1.5 1.7 3.2 1.6 5.1-.1 2-.8 3.6-2.3 4.9l-407.4 353c-1.5 1.2-3.2 1.7-5.1 1.5-2-.1-3.5-.9-4.7-2.4L40 423.6c-1.2-1.5-1.7-3.2-1.6-5.1.1-2 .8-3.5 2.3-4.7l40.5-35c-2.8-4.6-4.1-9.4-4.1-14.4 7.3-6.1 13.9-12.5 19.8-19.2 5.9-6.7 12.1-15.3 18.5-26s11.8-22.2 16.2-34.5c4.4-12.3 8.1-27.3 10.9-44.8 2.8-17.6 4.2-36.4 4.2-56.6 0-22.1 8.5-42.5 25.5-61.5s39.2-30.4 66.8-34.5c-1.2-2.8-1.7-5.6-1.7-8.5 0-5.8 2-10.7 6.1-14.8s9-6.1 14.8-6.1c5.8 0 10.7 2 14.8 6.1s6.1 9 6.1 14.8c0 2.9-.6 5.7-1.7 8.5 18 2.6 33.9 8.6 47.7 18 13.8 9.4 24.5 20.8 32.2 34.3l91-79c1.5-1.2 3.2-1.7 5.1-1.5 2 .1 3.5.9 4.7 2.4l18.1 20.9zM258.1 430.6c2.3 0 3.5-1.2 3.5-3.5s-1.2-3.5-3.5-3.5c-8.6 0-15.9-3.1-22.1-9.2-6.2-6.2-9.2-13.5-9.2-22.1 0-2.3-1.2-3.5-3.5-3.5s-3.5 1.2-3.5 3.5c0 10.6 3.7 19.6 11.2 27.1s16.5 11.2 27.1 11.2zm116.3-187.2c8.9 51.7 30.5 92 64.9 121 0 7.5-2.8 14.1-8.3 19.6s-12 8.3-19.6 8.3h-97.5c0 15.4-5.4 28.5-16.3 39.4-10.9 10.9-24 16.3-39.4 16.3-15.4 0-28.5-5.4-39.3-16.2-10.8-10.8-16.3-23.9-16.4-39.3l171.9-149.1z"/></svg>',
    "notification": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M439.2 364.4c0 7.5-2.8 14.1-8.3 19.6-5.5 5.5-12 8.3-19.6 8.3h-97.5c0 15.4-5.4 28.5-16.3 39.4-10.9 10.9-24 16.3-39.4 16.3-15.4 0-28.5-5.4-39.4-16.3s-16.3-24-16.3-39.4h-97.5c-7.5 0-14.1-2.8-19.6-8.3S77 372 77 364.4c7.3-6.1 13.9-12.5 19.8-19.2 5.9-6.7 12.1-15.3 18.5-26s11.8-22.2 16.2-34.5c4.4-12.3 8.1-27.3 10.9-44.8s4.2-36.4 4.2-56.6c0-22.1 8.5-42.5 25.5-61.5s39.2-30.4 66.8-34.5c-1.2-2.8-1.7-5.6-1.7-8.5 0-5.8 2-10.7 6.1-14.8 4.1-4.1 9-6.1 14.8-6.1 5.8 0 10.7 2 14.8 6.1s6.1 9 6.1 14.8c0 2.9-.6 5.7-1.7 8.5 27.6 4.1 49.8 15.6 66.8 34.5s25.5 39.4 25.5 61.5c0 20.2 1.4 39 4.2 56.6s6.5 32.5 10.9 44.8c4.4 12.3 9.8 23.8 16.2 34.5 6.4 10.7 12.6 19.3 18.5 26 6 6.8 12.6 13.1 19.8 19.2zm-177.6 62.7c0-2.3-1.2-3.5-3.5-3.5-8.6 0-15.9-3.1-22.1-9.2-6.2-6.2-9.2-13.5-9.2-22.1 0-2.3-1.2-3.5-3.5-3.5s-3.5 1.2-3.5 3.5c0 10.6 3.7 19.6 11.2 27.1 7.5 7.5 16.5 11.2 27.1 11.2 2.4 0 3.5-1.2 3.5-3.5z"/></svg>',
    "nuclear": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <circle cx="256" cy="272" r="48"/>    <circle cx="256" cy="272" r="48"/>    <path d="M480 272H320c0 23.9-13.1 44.7-32.6 55.7L365.6 464C433.1 425.4 480 355.3 480 272zm-224-64c11.7 0 22.7 3.2 32.1 8.7l80.6-138.3C335.6 59.1 297.1 48 256 48c-41.2 0-79.9 11.2-113.1 30.6l79.8 138.8c9.7-6 21.1-9.4 33.3-9.4zm-64 64H32c0 83.3 46.9 153.4 114.4 192l78.2-136.3c-19.5-11-32.6-31.8-32.6-55.7z"/></svg>',
    "outlet": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M369.541 32H142.359C81.521 32 32 82.574 32 144.604v222.79C32 429.426 81.521 480 142.359 480h227.182C430.479 480 480 429.426 480 367.395v-222.79C480 82.574 430.479 32 369.541 32zM175 250.954v.67c0 10.882-9.09 20.376-19.875 20.376h-23.27C121.073 272 112 262.506 112 251.624V148.161c1-10.768 9.193-20.161 19.855-20.161h23.27c10.886 0 19.875 9.847 19.875 20.831v102.123zM297 395.74v2.68c0 11.439-8.872 17.58-20.1 17.58h-41.798c-11.23 0-20.102-8.141-20.102-19.58v-29.317c0-23.33 18.118-42.287 40.999-42.287 22.883 0 41.001 18.957 41.001 42.287v28.637zm103-144.786v.67c0 10.882-9.071 20.376-19.855 20.376h-24.27C345.093 272 336 262.506 336 251.624V148.161c1-10.768 9.215-20.161 19.875-20.161h24.27c10.784 0 19.855 9.847 19.855 20.831v102.123z"/></svg>',
    "outlook": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <script/>    <path d="M64.567 22.116v20.405l7.13 4.49c.188.054.596.058.784 0l30.688-20.69c0-2.45-2.284-4.205-3.573-4.205h-35.03z"/>    <path d="M64.567 50.133l6.507 4.47c.917.674 2.022 0 2.022 0-1.101.674 30.077-20.036 30.077-20.036V72.07c0 4.083-2.613 5.795-5.551 5.795h-33.06v-27.73zm-33.694-9.406c-2.217 0-3.984 1.042-5.289 3.122-1.305 2.08-1.959 4.835-1.959 8.263 0 3.48.654 6.23 1.96 8.251 1.304 2.026 3.016 3.033 5.131 3.033 2.183 0 3.914-.984 5.192-2.95 1.277-1.967 1.92-4.698 1.92-8.189 0-3.64-.62-6.472-1.862-8.498-1.242-2.021-2.938-3.032-5.093-3.032z"/>    <path d="M0 11.754v79.827l60.727 12.733V0L0 11.754zm40.637 53.408c-2.567 3.378-5.913 5.07-10.042 5.07-4.024 0-7.299-1.637-9.834-4.909-2.53-3.275-3.8-7.538-3.8-12.796 0-5.551 1.285-10.041 3.859-13.47s5.983-5.143 10.226-5.143c4.008 0 7.252 1.637 9.724 4.92 2.476 3.284 3.714 7.609 3.714 12.98.004 5.52-1.281 9.971-3.847 13.348z"/></svg>',
    "paper-airplane": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M32 272l128 48 16 160 80-112 112 112L480 32 32 272zm318.7 145.4L256 320l128-176-192 153.8-82.6-31 322-172.5-80.7 323.1z"/></svg>',
    "paperclip": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M324.6 154.9c-6.3-.1-11.4 5.1-11.4 11.6l-.2 194.8c-.1 43.8-29.7 63.4-57.2 63.2-27.5-.3-57.1-20.4-57-64.1 0-33.5.2-167.7.3-234.8 0-15.4 6-27.4 16.8-33.7 10.6-6.2 24.4-6.1 35 .3 10.8 6.5 16.7 18.6 16.7 34l-.3 224.5c0 7.3-1.7 13.3-4.7 17.1-1.9 2.4-4.4 3.8-6.9 3.8-5.6-.1-11.4-7.3-11.3-20.8 0 0 .2-166.3.3-172.7 0-6.5-5.1-11.8-11.4-11.8-6.3 0-11.4 5.2-11.4 11.7l-.3 172.7c0 29 17.2 44.3 34.2 44.5 9.4.1 18.3-4.4 24.6-12.4 6.3-8 9.7-19 9.7-31.8l.3-224.5c0-23.8-10.2-43.6-28.1-54.3-17.5-10.6-40.3-10.8-57.9-.5-17.9 10.5-28.2 30.1-28.3 53.9-.1 67-.2 201.2-.3 234.8-.1 57.2 40.1 87.4 79.8 87.8 20.5.2 41.1-7.7 56.3-23.1 14.2-14.5 23.7-35.7 23.7-63.4l.1-194.9c.3-6.6-4.8-11.9-11.1-11.9z"/></svg>',
    "person-add": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M429 328v-51h51v-42h-51v-51h-42v51h-51v42h51v51z"/>    <path d="M416 448s0-26.4-2.2-40.2c-1.8-10.9-16.9-25.3-81.1-48.9-63.2-23.2-59.3-11.9-59.3-54.6 0-27.7 14.1-11.6 23.1-64.2 3.5-20.7 6.3-6.9 13.9-40.1 4-17.4-2.7-18.7-1.9-27 .8-8.3 1.6-15.7 3.1-32.7 1.8-21-17.7-76.3-87.6-76.3-69.9 0-89.4 55.3-87.5 76.4 1.5 16.9 2.3 24.4 3.1 32.7.8 8.3-5.9 9.6-1.9 27 7.6 33.1 10.4 19.3 13.9 40.1 9 52.6 23.1 36.5 23.1 64.2 0 42.8 3.9 31.5-59.3 54.6-64.2 23.5-79.4 38-81.1 48.9C32 421.6 32 448 32 448h384z"/></svg>',
    "person-blocked": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M192.2 182.6c.6 6.2-4.4 7.2-1.4 20.3 5.7 24.9 7.8 14.5 10.4 30.1 2.6 15.2 5.8 22.8 8.7 27.5l110-72.7c-.6-1.6-1-3.1-.8-5.3.6-6.2 1.2-11.8 2.3-24.6 1.4-15.8-13.3-57.3-65.8-57.3s-67.2 41.5-65.7 57.4c1.1 12.7 1.7 18.4 2.3 24.6z"/>    <path d="M492.9 246c-.5-37-9.4-72.6-26-104.5-11.3-21.8-26.2-41.9-44.3-59.6-1.4-1.3-2.8-2.7-4.2-4-.4-.4-.9-.8-1.4-1.2-1-.9-1.9-1.8-2.9-2.6-.6-.5-1.1-1-1.7-1.5-.9-.8-1.8-1.5-2.6-2.3-.6-.5-1.3-1-1.9-1.6-.8-.7-1.7-1.4-2.5-2.1-.7-.5-1.3-1.1-2-1.6-.8-.6-1.7-1.3-2.5-1.9-.7-.5-1.4-1-2.1-1.6-.8-.6-1.6-1.2-2.5-1.8-.7-.5-1.4-1-2.2-1.5-.8-.6-1.6-1.2-2.5-1.7-.7-.5-1.5-1-2.2-1.5-.8-.6-1.6-1.1-2.5-1.7-.8-.5-1.5-1-2.3-1.5s-1.6-1.1-2.5-1.6c-.8-.5-1.6-.9-2.4-1.4s-1.7-1-2.5-1.5-1.6-.9-2.4-1.4-1.7-1-2.5-1.4-1.6-.9-2.4-1.3c-.8-.5-1.7-.9-2.5-1.4-.8-.4-1.6-.8-2.5-1.3-.8-.4-1.7-.9-2.6-1.3-.8-.4-1.7-.8-2.5-1.2-.9-.4-1.7-.8-2.6-1.2-.8-.4-1.7-.8-2.5-1.1-.9-.4-1.7-.8-2.6-1.2s-1.7-.7-2.6-1.1c-.9-.4-1.7-.7-2.6-1.1-.9-.3-1.7-.7-2.6-1s-1.8-.7-2.6-1c-.9-.3-1.7-.6-2.6-1-.9-.3-1.8-.6-2.7-1-.9-.3-1.8-.6-2.6-.9l-2.7-.9c-.9-.3-1.8-.6-2.7-.8-.9-.3-1.8-.6-2.7-.8-.9-.3-1.8-.5-2.7-.8-.9-.3-1.8-.5-2.7-.8-.9-.2-1.8-.5-2.7-.7-.9-.2-1.8-.5-2.8-.7l-2.7-.6c-.9-.2-1.9-.4-2.8-.6l-2.7-.6c-.9-.2-1.9-.4-2.8-.6s-1.8-.3-2.7-.5c-.9-.2-1.9-.3-2.8-.5s-1.8-.3-2.8-.4c-.9-.1-1.9-.3-2.9-.4-.9-.1-1.8-.3-2.8-.4s-1.9-.2-2.9-.4c-.9-.1-1.9-.2-2.8-.3-1-.1-1.9-.2-2.9-.3-.9-.1-1.9-.2-2.8-.2-1-.1-1.9-.1-2.9-.2-.9-.1-1.9-.1-2.8-.2-1-.1-2-.1-2.9-.1s-1.9-.1-2.8-.1c-1 0-2-.1-2.9-.1h-7.2c-9.7.1-19.4.8-28.9 2.1-13.3 1.8-26.3 4.7-39 8.7-3.6 1.1-7.2 2.4-10.7 3.7-21.3 7.9-41.3 18.9-59.6 32.8-9.1 7-17.8 14.6-26 23-9.5 9.8-18.1 20.2-25.6 31.2-2.2 3.1-4.2 6.3-6.2 9.6-5 8.1-9.5 16.5-13.4 25-.8 1.7-1.6 3.4-2.3 5.2-2.2 5.2-4.3 10.5-6.1 15.9s-3.5 10.8-4.9 16.3c-1 3.7-1.8 7.4-2.6 11.1-.8 3.7-1.5 7.5-2.1 11.2-.3 1.9-.6 3.8-.8 5.7-.5 3.8-.9 7.6-1.3 11.4-.7 7.7-.9 15.4-.8 23.2.1 9.7.8 19.4 2.1 28.9 1.5 11.4 3.9 22.6 7.1 33.5 1.1 3.6 2.2 7.3 3.4 10.8 2.5 7.2 5.3 14.2 8.4 21.1 3.1 6.9 6.6 13.6 10.5 20.1 2.9 4.9 5.9 9.7 9.2 14.4 2.2 3.1 4.4 6.2 6.7 9.3 2.3 3 4.7 6 7.2 9 1.2 1.5 2.5 2.9 3.8 4.4 2.6 2.9 5.2 5.7 7.9 8.5 1.4 1.4 2.7 2.8 4.1 4.1 1.4 1.3 2.8 2.7 4.2 4 .5.4 1 .9 1.5 1.3.9.9 1.9 1.7 2.8 2.5l1.8 1.5c.9.7 1.7 1.5 2.6 2.2.6.5 1.3 1.1 1.9 1.6.8.7 1.7 1.4 2.5 2 .7.5 1.4 1.1 2 1.6.8.6 1.6 1.3 2.5 1.9.7.5 1.4 1 2.1 1.6.8.6 1.6 1.2 2.5 1.8.7.5 1.5 1 2.2 1.5.8.6 1.6 1.2 2.5 1.7.7.5 1.5 1 2.2 1.5.8.6 1.6 1.1 2.5 1.7.8.5 1.5 1 2.3 1.5s1.6 1.1 2.5 1.6c.8.5 1.6 1 2.4 1.4.8.5 1.7 1 2.5 1.5s1.6.9 2.4 1.4c.8.5 1.7 1 2.5 1.4s1.6.9 2.4 1.3c.8.5 1.7.9 2.5 1.4.8.4 1.6.8 2.5 1.3.8.4 1.7.9 2.6 1.3.8.4 1.7.8 2.5 1.2.9.4 1.7.8 2.6 1.2.8.4 1.7.8 2.5 1.1.9.4 1.7.8 2.6 1.2.9.4 1.7.7 2.6 1.1.9.4 1.7.7 2.6 1.1.9.3 1.7.7 2.6 1 .9.3 1.8.7 2.6 1 .9.3 1.7.6 2.6 1 .9.3 1.8.6 2.7 1 .9.3 1.8.6 2.6.9l2.7.9c.9.3 1.8.6 2.7.8.9.3 1.8.6 2.7.8.9.3 1.8.5 2.7.8s1.8.5 2.7.8c.9.2 1.8.5 2.7.7s1.8.5 2.8.7l2.7.6c.9.2 1.9.4 2.8.6l2.7.6c.9.2 1.9.4 2.8.6.9.2 1.8.3 2.7.5s1.9.3 2.8.5c.9.2 1.8.3 2.8.4.9.1 1.9.3 2.9.4.9.1 1.8.3 2.8.4s1.9.2 2.9.4c.9.1 1.9.2 2.8.3 1 .1 1.9.2 2.9.3.9.1 1.9.2 2.8.2 1 .1 1.9.1 2.9.2.9.1 1.9.1 2.8.2 1 .1 2 .1 2.9.1s1.9.1 2.8.1c1 0 2 .1 2.9.1h7.2c9.7-.1 19.4-.8 28.9-2.1 13.3-1.8 26.3-4.7 39-8.7 3.6-1.1 7.2-2.4 10.7-3.7 5.3-2 10.6-4.1 15.7-6.5 3.4-1.6 6.8-3.2 10.2-5 13.4-7 26.2-15.3 38.2-24.9 3-2.4 5.9-4.9 8.8-7.4 4.3-3.8 8.5-7.8 12.6-12 2.7-2.8 5.4-5.6 7.9-8.5 2.6-2.9 5-5.8 7.4-8.8s4.7-6 7-9.1 4.4-6.2 6.5-9.4c5.2-8 9.9-16.2 14-24.7 10-20.4 16.9-42.2 20.5-64.8.3-1.9.6-3.8.8-5.7.5-3.9 1-7.9 1.3-11.9.3-3.6.5-7.2.7-10.8.1-2 .1-4.1.2-6.1-.3-1.9-.3-3.8-.3-5.8zm-408 85.5c-.5-1-1-2-1.4-3.1-.9-2-1.8-4.1-2.7-6.2-1.3-3.1-2.5-6.3-3.6-9.5-1.5-4.3-2.9-8.6-4.1-13-.9-3.3-1.7-6.7-2.4-10-1.9-9-3.3-18.3-3.9-27.7-.2-3.5-.4-7.1-.4-10.7-.1-11.7.8-23.1 2.6-34.2.3-1.6.5-3.2.9-4.7.9-4.7 2-9.4 3.2-14 .8-3.1 1.7-6.1 2.7-9.1 2.4-7.5 5.3-14.8 8.6-21.9.7-1.4 1.3-2.8 2-4.2 2.8-5.6 5.8-11 9.1-16.3 1.6-2.6 3.4-5.2 5.1-7.8.9-1.3 1.8-2.5 2.7-3.8 2.7-3.8 5.6-7.4 8.6-11 2-2.4 4.1-4.7 6.2-6.9 2.1-2.3 4.3-4.5 6.5-6.6 4.4-4.3 9.1-8.4 13.9-12.3 2.4-1.9 4.9-3.8 7.4-5.7 10-7.3 20.8-13.7 32.1-19 5.7-2.7 11.5-5 17.5-7.1l4.5-1.5c7.5-2.4 15.3-4.4 23.2-6 6.3-1.2 12.8-2.1 19.3-2.7 4.9-.4 9.8-.7 14.8-.7h7.5c1.1 0 2.2.1 3.2.1s2 .1 3 .1c1.1.1 2.2.1 3.2.2s2 .1 2.9.2l3.3.3c1 .1 1.9.2 2.9.3 1.1.1 2.2.3 3.3.4.9.1 1.9.3 2.8.4 1.1.2 2.2.4 3.3.5.9.2 1.8.3 2.7.5 1.1.2 2.2.4 3.3.7l2.7.6c1.1.2 2.2.5 3.3.8.9.2 1.8.4 2.6.6l3.3.9c.9.2 1.7.5 2.6.7 1.1.3 2.2.6 3.2 1 .8.3 1.7.5 2.5.8 1.1.3 2.1.7 3.2 1.1.8.3 1.6.6 2.5.8 1.1.4 2.1.8 3.2 1.2l2.4.9c1.1.4 2.1.9 3.2 1.3.8.3 1.6.6 2.3 1 1.1.5 2.1.9 3.1 1.4.8.3 1.5.7 2.3 1 1 .5 2.1 1 3.1 1.5.7.4 1.5.7 2.2 1.1 1 .5 2 1.1 3.1 1.6.7.4 1.5.8 2.2 1.2 1 .6 2 1.1 3 1.7l2.1 1.2 3 1.8c.7.4 1.4.8 2.1 1.3 1 .6 1.9 1.2 2.9 1.9.7.4 1.4.9 2 1.3 1 .6 1.9 1.3 2.9 2 .7.5 1.3.9 2 1.4.9.7 1.9 1.4 2.8 2 .7.5 1.3 1 2 1.4l2.7 2.1c.6.5 1.3 1 1.9 1.5.9.7 1.8 1.5 2.7 2.2.6.5 1.2 1 1.9 1.5.9.8 1.7 1.5 2.6 2.3.6.5 1.2 1.1 1.8 1.6.8.8 1.7 1.6 2.5 2.4.6.6 1.2 1.1 1.8 1.7l2.4 2.4c.6.6 1.2 1.1 1.7 1.7.8.8 1.6 1.7 2.4 2.5.6.6 1.1 1.2 1.7 1.8.8.9 1.5 1.7 2.3 2.6.5.6 1.1 1.2 1.6 1.8.8.9 1.5 1.8 2.3 2.7l1.5 1.8c.8.9 1.5 1.9 2.2 2.8.5.6.9 1.2 1.4 1.8.8 1 1.6 2.1 2.3 3.2.4.5.8 1 1.2 1.6 1.1 1.5 2.2 3.1 3.2 4.6 0 .1.1.1.2.2L329 202.5l-9.6 6.3-100.9 66.7-120.4 79.4c-2.1-3.2-4.1-6.4-6-9.8l-1.5-2.7c-.9-1.6-1.8-3.2-2.6-4.9-1.1-2-2.1-4-3.1-6zm367.2-65.3c-.3 3.2-.7 6.5-1.1 9.7-1.4 9.6-3.4 19-6.1 28.1-.9 3-1.9 6-2.9 9-1.6 4.5-3.3 8.8-5.2 13.1-3.1 7.2-6.7 14.1-10.7 20.8-1.6 2.7-3.2 5.3-4.9 7.9-4.5 6.8-9.4 13.4-14.7 19.6-5.8 6.7-12 13.1-18.6 18.9-4.6 4.1-9.5 8-14.5 11.7s-10.2 7.1-15.6 10.3C329.7 432 297 441.7 262 442.1h-6.1c-.9 0-1.7 0-2.6-.1-.8 0-1.6-.1-2.4-.1-.8 0-1.7-.1-2.5-.1s-1.6-.1-2.4-.2c-.8-.1-1.7-.1-2.5-.2s-1.6-.1-2.4-.2c-.8-.1-1.7-.2-2.5-.3-.8-.1-1.6-.2-2.3-.3-.8-.1-1.7-.2-2.5-.3-.8-.1-1.5-.2-2.3-.3-.8-.1-1.7-.3-2.5-.4s-1.5-.2-2.3-.4c-.8-.1-1.7-.3-2.5-.5-.7-.1-1.5-.3-2.2-.4-.8-.2-1.7-.3-2.5-.5-.7-.2-1.5-.3-2.2-.5-.8-.2-1.7-.4-2.5-.6-.7-.2-1.4-.3-2.1-.5-.8-.2-1.7-.4-2.5-.7l-2.1-.6c-.8-.2-1.7-.5-2.5-.7l-2.1-.6c-.8-.3-1.7-.5-2.5-.8-.7-.2-1.4-.4-2-.7-.8-.3-1.7-.6-2.5-.9-.7-.2-1.3-.5-2-.7-.8-.3-1.6-.6-2.5-.9-.7-.2-1.3-.5-2-.7-.8-.3-1.6-.7-2.5-1-.6-.3-1.3-.5-1.9-.8-.8-.3-1.6-.7-2.4-1-.6-.3-1.3-.5-1.9-.8-.8-.4-1.6-.7-2.4-1.1-.6-.3-1.2-.6-1.9-.9l-2.4-1.2-1.8-.9-2.4-1.2-1.8-.9c-.8-.4-1.6-.9-2.3-1.3-.6-.3-1.2-.6-1.8-1-.8-.4-1.5-.9-2.3-1.4-.6-.3-1.2-.7-1.7-1-.8-.5-1.5-.9-2.3-1.4-.6-.4-1.1-.7-1.7-1.1-.8-.5-1.5-1-2.2-1.5-.6-.4-1.1-.7-1.7-1.1-.7-.5-1.5-1-2.2-1.5-.5-.4-1.1-.7-1.6-1.1-.7-.5-1.5-1-2.2-1.6-.5-.4-1.1-.8-1.6-1.2-.7-.5-1.4-1.1-2.2-1.6-.5-.4-1-.8-1.6-1.2-.7-.6-1.4-1.1-2.1-1.7l-1.5-1.2-2.1-1.8c-.5-.4-1-.8-1.4-1.2-.7-.6-1.4-1.3-2.2-1.9-.4-.4-.9-.8-1.3-1.2-.8-.7-1.5-1.4-2.3-2.1-.4-.3-.7-.7-1.1-1-1.1-1-2.1-2-3.2-3.1l-.2-.2 16.5-10.9 153.3-101.4 145.7-96.3c.5 1.3 1.1 2.7 1.6 4 1.5 4.1 2.9 8.2 4.2 12.4l1.2 4.2c.8 2.8 1.5 5.7 2.1 8.5 2.9 12.9 4.5 26.3 4.7 40-.2 7-.4 13.6-1 20z"/>    <path d="M261.8 425.1c47-.6 91-19.5 123.9-53.2 1-1 2-2.1 3-3.1 3.3-3.5 6.4-7.2 9.3-10.9-2.1-8.1-14.4-18.7-60.7-35.7-39.3-14.4-44.1-11.1-44.5-27.7L173 373.7 151.4 388c30.8 24.1 68.5 37.2 108.2 37.2.7-.1 1.5-.1 2.2-.1z"/></svg>',
    "person-permissions": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <circle cx="423" cy="283.6" r="23.8"/>    <path d="M399.1 227.7c-44.6 0-80.8 36.2-80.8 80.8 0 10.1 1.9 19.7 5.2 28.6L199.7 455.2l10 24.2 59.3-3.2 12.5-22.7 21.6-4 17.6-42.6 34.6-4.5 7.3-21.9c11 5.6 23.4 8.8 36.6 8.8 44.6 0 80.8-36.2 80.8-80.8s-36.3-80.8-80.9-80.8zm23.9 79.8c-13.2 0-23.8-10.7-23.8-23.8 0-13.2 10.7-23.8 23.8-23.8 13.2 0 23.8 10.7 23.8 23.8 0 13.1-10.7 23.8-23.8 23.8z"/>    <path d="M273.4 304.3c0-27.7 14.1-11.6 23.1-64.2 3.5-20.7 6.3-6.9 13.9-40.1 4-17.4-2.7-18.7-1.9-27s1.6-15.7 3.1-32.7c1.8-21-17.7-76.3-87.6-76.3s-89.4 55.3-87.5 76.4c1.5 16.9 2.3 24.4 3.1 32.7.8 8.3-5.9 9.6-1.9 27 7.6 33.1 10.4 19.3 13.9 40.1 9 52.6 23.1 36.5 23.1 64.2 0 42.8 3.9 31.5-59.3 54.6-64.2 23.5-79.4 38-81.1 48.9C32 421.6 32 448 32 448h128l123-111.7-7-2.3c-1.6-5.5-2.6-15.8-2.6-29.7z"/></svg>',
    "person-stalker": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M425.3 324.8c-41.4-15.7-38.9-9.4-38.9-38.5 0-18.8 9.3-11.9 15.2-47.7 2.3-14.1 4.2-4.7 9.1-27.3 2.6-11.8-1.8-12.7-1.2-18.3.5-5.6 1-10.7 2-22.2 1.2-14.4-11.6-52-57.4-52s-58.6 37.6-57.4 52c.9 11.6 1.5 16.6 2 22.2.5 5.6-3.8 6.5-1.2 18.3 4.9 22.6 6.8 13.1 9.1 27.3 5.9 35.8 15.1 29 15.1 47.7 0 13.4 3.1 19-14.9 27.5 5.4 1.9 11.7 4.2 19.3 7.1 54.4 20.7 53.1 40.8 54.5 50.3 1 6.5 1.5 58.3 1.7 76.8H480s0-80.5-1.5-89.9c-1.1-7.4-11-17.2-53.2-33.3z"/>    <path d="M357 448s0-14.1-.2-30.4c-.2-18.6-.7-40-1.7-46.4-1.5-9.5-14.3-22.2-68.6-42.9-7.5-2.8-13.8-5.1-19.3-7.1-33.3-11.8-30.9-15.7-30.9-48 0-24.3 12-8.5 19.6-54.6 3-18.2 5.4-6.1 11.7-35.2 3.4-15.2-2.3-16.4-1.6-23.7.7-7.3 1.4-13.8 2.6-28.7 1.6-18.5-14.9-67.1-74.1-67.1-59.2 0-75.6 48.5-74.1 67.1 1.2 14.9 1.9 21.4 2.7 28.7.7 7.3-5 8.4-1.6 23.7 6.4 29.1 8.8 17 11.8 35.2 7.6 46.1 19.5 30.3 19.5 54.6 0 37.6 3.3 34.8-50.2 55.1C48.3 349 35.5 361.7 34 371.2c-2 12.1-2 76.8-2 76.8h325z"/></svg>',
    "person": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M448 448s0-26.4-2.2-40.2c-1.8-10.9-16.9-25.3-81.1-48.9-63.2-23.2-59.3-11.9-59.3-54.6 0-27.7 14.1-11.6 23.1-64.2 3.5-20.7 6.3-6.9 13.9-40.1 4-17.4-2.7-18.7-1.9-27 .8-8.3 1.6-15.7 3.1-32.7 1.8-21-17.7-76.3-87.6-76.3-69.9 0-89.4 55.3-87.5 76.4 1.5 16.9 2.3 24.4 3.1 32.7.8 8.3-5.9 9.6-1.9 27 7.6 33.1 10.4 19.3 13.9 40.1 9 52.6 23.1 36.5 23.1 64.2 0 42.8 3.9 31.5-59.3 54.6-64.2 23.5-79.4 38-81.1 48.9C64 421.6 64 448 64 448h384z"/></svg>',
    "pie-graph": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M32.6 256H256V32.6c-5-.4-10.6-.6-16-.6-114.9 0-208 93.1-208 208 0 5.4.2 11 .6 16z"/>    <path d="M109.8 402.2C147.9 449.6 206.4 480 272 480c114.9 0 208-93.1 208-208 0-65.6-30.4-124.1-77.8-162.2C370.5 84.3 331 67.9 288 64.6V288H64.6c3.3 43 19.7 82.5 45.2 114.2z"/></svg>',
    "pin": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M331.8 228c-1.2-.5-2.4-1-3.5-1.7-7-4-12.2-10.9-13.9-19.2L295.9 89.4l-.2-5.8c0-7.1 4.1-10.2 10-13l2.1-.9c7.2-3.4 12.1-7.8 12.1-16.3 0-20.1-6.5-21.4-18.2-21.4h-91.3c-11.7 0-18.2 1.2-18.2 21.4 0 8.5 4.9 12.9 12.1 16.3.7.3 1.4.5 2.1.9 5.9 2.9 10 6 10 13l-.2 5.8-18.5 117.7c-1.7 8.3-6.9 15.2-13.9 19.2-1.1.7-2.3 1.2-3.5 1.7-19.7 10.2-36.2 30.8-36.2 54.7 0 15.9 3.5 21.3 15.2 21.3H240l12 176h8l12-176h80.8c11.7 0 15.2-4.7 15.2-21.3 0-23.9-16.5-44.5-36.2-54.7z"/></svg>',
    "pizza": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M394.619 130.445c-42.658-18.924-89.266-28.472-138.649-28.425-49.373-.047-99.27 10.262-138.641 27.979-7.396 3.312-14.004 8.957-9.296 19.479L255.941 480l147.621-329.874c2.89-6.876.756-15.378-8.943-19.681zm-202.636 61.57c-17.67 0-31.995-14.323-31.995-31.993 0-17.669 14.325-31.992 31.995-31.992 17.671 0 31.996 14.323 31.996 31.992s-14.325 31.993-31.996 31.993zm63.992 146.966c-17.671 0-31.995-14.323-31.995-31.993s14.324-31.992 31.995-31.992c17.67 0 31.995 14.322 31.995 31.992s-14.325 31.993-31.995 31.993zm63.99-114.974c-17.67 0-31.995-14.322-31.995-31.992s14.325-31.993 31.995-31.993c17.671 0 31.996 14.323 31.996 31.993s-14.325 31.992-31.996 31.992z"/>    <path d="M421.79 66c-47.808-20.603-106.867-33.977-165.811-34-58.931 0-116.944 12.136-165.82 33.446C85.83 67.334 80 71.016 80 79.227c0 2.523.907 4.922.907 4.922l7.98 19.194c2.531 4.865 7.944 8.18 13.798 8.18 1.645 0 3.936-.331 6.65-1.476 44.9-18.929 94.471-29.588 146.644-29.564 52.175-.023 105.63 11.64 146.634 29.561 3.296 1.44 5.173 1.472 6.663 1.472 6.009 0 11.158-3.274 13.727-8.053l8.04-19.342c.577-1.558.957-3.287.957-4.768C432 72 427.614 68.51 421.79 66z"/></svg>',
    "play": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M405.2 232.9L126.8 67.2c-3.4-2-6.9-3.2-10.9-3.2-10.9 0-19.8 9-19.8 20H96v344h.1c0 11 8.9 20 19.8 20 4.1 0 7.5-1.4 11.2-3.4l278.1-165.5c6.6-5.5 10.8-13.8 10.8-23.1s-4.2-17.5-10.8-23.1z"/></svg>',
    "plus-circled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm128 240H272v112h-32V272H128v-32h112V128h32v112h112v32z"/></svg>',
    "plus": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z"/></svg>',
    "quote": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M192 64c-40.646 0-72.483 11.229-94.627 33.373C75.229 119.517 64 151.354 64 192v256h160V192h-96c0-23.056 4.922-39.666 14.627-49.373C152.334 132.922 168.944 128 192 128m224-64c-40.646 0-72.483 11.229-94.627 33.373C299.229 119.517 288 151.354 288 192v256h160V192h-96c0-23.056 4.922-39.666 14.627-49.373C376.334 132.922 392.944 128 416 128"/></svg>',
    "recent": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M105.9 244h43.2c-21.6 28.8-42.6 56.9-64.1 85.5C63.7 301 42.7 273 21.1 244.2h42.1c.6-8.3 1-16.1 1.8-23.8 5.4-49.7 26.1-92.1 61.3-127.4 29.8-29.9 65.3-50.2 106.9-57.7C320 19.4 392 46 446.9 115.3c31.7 40 45 86.6 43.2 137.5-3.5 98.9-76.4 182.3-171 200.1-73.6 13.8-138-5.6-192.4-57.4-6.4-6.1-8.3-13.5-5.9-21.9 2.5-8.7 8.7-13.6 17.5-15 7.3-1.2 13.4 1.5 18.5 6.6 17.9 17.5 38.4 30.6 62 39.2 98.8 36 207.8-26.5 226-129.6 16-90.7-41.5-177.3-131-197.2-93.9-21.1-187.2 40.6-204.5 135.4-1.8 9.9-2.3 20.1-3.4 31z"/>    <path d="M277 234.2v-96.5c0-12.2-8.9-21.5-20.7-21.8-12.1-.3-22.1 8.8-22.1 21-.2 42.8-.1 85.6 0 128.4 0 11.8 9.1 21.2 20.8 21.3 28.8.3 57.6.3 86.5 0 11.9-.1 21.2-10.2 20.9-21.8-.3-12.1-9.6-21-22-21H277v-9.6z"/></svg>',
    "record-outlined": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208z"/>    <path d="M256 28c125.9 0 228 102.1 228 228S381.9 484 256 484 28 381.9 28 256 130.1 28 256 28m0-25c-34.2 0-67.3 6.7-98.5 19.9-30.1 12.7-57.2 31-80.4 54.2s-41.5 50.3-54.2 80.4C9.7 188.7 3 221.8 3 256s6.7 67.3 19.9 98.5c12.7 30.1 31 57.2 54.2 80.4s50.3 41.5 80.4 54.2c31.2 13.2 64.3 19.9 98.5 19.9s67.3-6.7 98.5-19.9c30.1-12.7 57.2-31 80.4-54.2s41.5-50.3 54.2-80.4c13.2-31.2 19.9-64.3 19.9-98.5s-6.7-67.3-19.9-98.5c-12.7-30.1-31-57.2-54.2-80.4s-50.3-41.5-80.4-54.2C323.3 9.7 290.2 3 256 3z"/></svg>',
    "record": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208z"/></svg>',
    "refresh": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M416 352l96-111.9h-64.7c-2.3-27.9-10.5-54-23.5-77.3-27.4-49.2-75.8-85.1-133-95.6-.7-.1-1.5-.3-2.2-.4-.5-.1-.9-.2-1.4-.2-10.1-1.7-20.6-2.6-31.2-2.6h-.4c-90.9.2-167 63.6-186.7 148.6v.1c-.3 1.1-.5 2.2-.7 3.3-.1.5-.2.9-.3 1.4-.1.7-.3 1.4-.4 2.1-.2.9-.3 1.7-.5 2.6-.1.4-.1.7-.2 1.1l-.6 3.6v.2c-1 6.3-1.6 12.7-1.9 19.1v.8c-.1 1.4-.1 2.7-.2 4.1 0 1.6-.1 3.3-.1 5 0 1.7 0 3.3.1 5 0 1.4.1 2.7.2 4.1v.9c.3 6.5 1 12.9 1.9 19.1v.2l.6 3.6c.1.4.1.7.2 1.1.2.9.3 1.8.5 2.6.1.7.3 1.4.4 2.1.1.5.2 1 .3 1.4.2 1.1.5 2.2.7 3.2v.1C88.6 384.4 165 447.8 256 448c42.9-.1 83.1-14.2 116.9-40.7l7.5-5.9-43.2-46.2-6.2 4.6c-22.1 16.3-47.5 24.2-75 24.2-70.6 0-128-57-128-128s57.4-128 128-128c66.4 0 122.8 46.6 129.5 112H312l104 112z"/></svg>',
    "reply-all": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M304.5 192v-80L152.7 255.8 304.5 390v-91.9c68 0 107.9 8.9 159.1 101.9 0 0-6.1-208-159.1-208z"/>    <path d="M47.5 256l144 126.5V324l-82.2-68 82.2-78.6v-57z"/></svg>',
    "reply": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M448 400s-36.8-208-224-208v-80L64 256l160 134.4v-92.3c101.6 0 171 8.9 224 101.9z"/></svg>',
    "save": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M341.2 95h-56.3v112h56.3V95zm27.9 112c0 7.7-2.7 14.2-8.2 19.7s-12 8.2-19.7 8.2H172.9c-7.7 0-14.2-2.7-19.7-8.2-5.5-5.5-8.2-12-8.2-19.7V67.1h224V207h.1zm32.7-167.8H89.3c-15.3 0-28.5 5.5-39.6 16.4C38.5 66.6 33 79.7 33 95v335.5c0 15.7 5.6 29 16.7 39.9s24.3 16.4 39.6 16.4h335.5c15.3 0 28.5-5.5 39.6-16.4s16.7-24.2 16.7-39.9V126.7l-79.3-87.5z"/></svg>',
    "scout-external-email": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M555.1 334.8c11.3 3.9-11.2-3.9 0 0zm-205.9-12.3l1.6-.8c-.3.1-.6.3-.8.4-.3.1-.5.2-.8.4zm-84.5-150.8c-1.4-2.6-6.2-7.7-9.1-8.7-3.9-.6-1.6 2.9-1.6 4.4-1 .8-2.6 1.6-3.3 2.6-.5.4 1.1 4 4.1 2.8 3-1.1 1.3 1.2 3.4 5.8s6.2 4.7 8.1 3.3c2.4-1.8-.3-7.8-1.6-10.2zm12 29.3zm38.2 17.2c.3 0-1.2-.2 0 0z"/>    <path d="M198.9 111c-80.3 0-145.5 65.2-145.5 145.5 0 80.4 65.2 145.5 145.5 145.5 80.4 0 145.5-65.1 145.5-145.5 0-80.3-65.2-145.5-145.5-145.5zm-53.7 258.1c-3.6-2-6.1-4.9-7.1-10.3-2.6-13.5-.2-20.8 11.7-28.7 5.6-3.7 6.5-8.2 11-12.7 1.1-1.4 4-6.7 6-7 2.4-.5 8.9-1.6 10.2-4.2 2.5-3.3 7.9-17.8 10.3-19.2 3.9-2.5 9.4-10.4 5.4-15-4.6-5.6-10.9-5.7-16.8-8.6-5.2-2.6-7.5-14.5-11.5-18.6-7.7-7.9-19.5-12.5-29.2-17.3-5.3-2.1-4.8-2.8-8.9 1.4-5.3 5.3-13.1-1.3-13.8-6.8-.1-1.8-2.1-11.8-.9-12.6 11.7-7.3-5.4-5.6-6.8-9-3.5-9.7 8.4-17.4 16.5-18.3 9-1.1 10.9 14.2 14.4 12.9 1.7-.8 1.7-8.1 1.9-9.6.8-5.2 2.3-6 7.4-7.9 5.9-2.2 10.4-4.9 16.7-6 7.1-2.1 13.2-1 18.7-5.6 2.5-1.9 4.4 1 6.8 1.6 5.2 1 6.3-7.2 6.3-10.3 0-3 .8-5.6-3.1-8.8-5.1-3.9-12.4-.6-16.4 3.5-4.9 4.6-10.6 4.3-9-3.6.4-2.9 6.6-6.2 9.1-7.8 2.4-1.4 3.8 1.6 6.8.9 4.3-1 5.9 3.1 10.9 3.1 2.1-.5 9.6-4.5 5.6-12.6h1.8c1.2 0 2.4 0 3.6.1 1.8 5.8-3.9 10.7-1 17.9 5.7 13.9 10.4 2 16-4.5 1.9-1.9 3-1.4 6-2 1.9-.3 4.6-6 5.5-7.8 13 3.2 25.4 8.5 36.7 15.8-4.8.5-6.1-.9-6 4.8 0 2.2.2 8.7 3.4 9.2 5.4.6 4.4 4.4 9.5 5.1 4.8.6 1.8 4.9 3.8 9.1 2.2 6.6-12.9 8.6-15.8 9.6-8.9 3 4.1 15.9 9.9 14.5 1.8-.5 7.9-1.2 8.4-3.3 0-.2-1.2-7.2-.6-7.9 1-1.3 3.3-1.9 7 .2 8.7 4.9 13.1 16.7 23.3 19 1.4.3 3.8-.1 5.5 1.3 1.4 2 5.1 5.5.7 5.5-5.9-1.3-9 .6-13.8-3.2-5-3.9-8.1-7.1-14.8-7.2-5.7-.1-10.8-2.5-16.7-1.5-3.3.5-6.5 1.8-9.7 2.8-3 1-3.6 6.3-6.6 7-12.6 3-9.9 15-12.2 24.6-.9 3.7-3.9 13.6-.6 16.9 5.9 5.8 12.9 13.7 21.5 14.9 4.7.7 14.9-3 18.1 1.8 1.3 2.7 4.8-2 5.8.4 2.4 7.1-2.8 11.8-2.8 18.5-.1 9.9 6 13.4-2.1 22.2-8.9 8.8-2.8 20-7.7 30.5-2.6 5.4-3.1 12.9-7.1 15.4-8.7 5.5-18 10-27.7 13.2-17.3 5.7-35.8 7.6-53.9 5.5-9.5-1.1-18.9-3.3-27.9-6.5-2.4-.9-4.7-1.6-6.8-2.4-1.8-.9-3.3-1.6-4.9-2.4zm-27.1-17.6c-.3-.3-.6-.5-.9-.8-2.2-1.9-4.4-4-6.5-6.1-2.2-2.2-4.3-4.5-6.3-6.8 0 0 0-.1-.1-.1l-1.2-1.5c-33.6-40.6-38.5-100-10.3-145.4 3.9 3.9-2.7 11.7 4.9 16.9 3.3 2.3 6.5 1.4 5.8 5.7-.6 4.2 3.5 4.1 4.1 7.8 1.8 8.1 12.5 12.1 6.4 21.2-5.9 8.2-11 17.4-6.6 27.8 1.5 3.8 5.1 7.7 7.9 10.6 5.1 5.2 4.8 2.1 4.8 8.6-.1 2.8 3.4 5.8 3.1 7.6-.7 5.2-1.9 10.3-2.5 15.5-1.2 18.6-.1 36.8 13.8 50.7-5.2-3.1-10.2-6.7-14.9-10.6-.5-.2-1-.6-1.5-1.1zM386 172.1c8.1 4.3 120.5 65.5 124.7 67.7 4.2 2.2 8.5 3.2 15.1 3.2s10.9-1 15.1-3.2c4.2-2.2 116.6-63.5 124.7-67.7 3-1.5 8.1-4.3 9.2-7.5 1.9-5.6-.1-7.7-8.3-7.7H385.1c-8.2 0-10.2 2.2-8.3 7.7 1.1 3.2 6.2 5.9 9.2 7.5z"/>    <path d="M671.9 175.4c-6 3.1-60.2 41.6-96 64.8l60.5 68c1.5 1.5 2.1 3.2 1.3 4.1-.9.8-2.8.4-4.3-1l-72.5-61.2c-11 7.1-18.7 11.9-20 12.7-5.7 2.9-9.6 3.2-15.1 3.2s-9.4-.4-15.1-3.2c-1.4-.7-9-5.6-20-12.7l-72.5 61.2c-1.5 1.5-3.5 1.9-4.3 1-.9-.8-.2-2.6 1.3-4.1l60.4-68C439.8 217 385 178.5 379 175.4c-6.5-3.3-6.8.6-6.8 3.6v150.8c0 6.8 10.1 15.4 17.3 15.4h273c7.2 0 15.8-8.6 15.8-15.4V179c-.3-3.1.1-6.9-6.4-3.6z"/></svg>',
    "scout-external-people": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M555.1 334.8c11.3 3.9-11.2-3.9 0 0z"/>    <path d="M555.1 334.8c-13.5-4.7-28.1-5-41.6-9.7-4.1-1.4-12.2-3.1-13.9-7.8-1.6-4.6-1.6-10-1.9-14.8-.2-3.8-.3-7.6-.3-11.4 0-2.5 6.4-7.8 7.8-10.1 5.4-9 5.9-21.1 6.9-31.3 8.7 2.4 9.8-13.7 11.3-18.6 1.1-3.4 7.8-26.8-2.6-23.6 2.5-4.4 3.5-9.8 4.2-14.7 2-12.8 2.8-26.8-1.1-39.3-8.1-26-33-40.6-59.3-41.4-26.7-.9-53.5 11.9-63.5 37.8-4.8 12.6-4.4 26.3-2.8 39.5.7 6 1.7 12.7 4.7 18.1-9.7-2.9-4.5 17.7-3.4 21.3 1.6 5.1 3 23.4 12.1 20.9.8 8.1 1.7 16.4 3.9 24.3 1.5 5.3 4.6 9.8 8.2 13.9 1.8 2 2.7 2.2 2.6 4.8-.1 7.8.1 16.2-1.9 23.8-2 7.6-18.7 10.8-25.4 12.2-18 3.7-34.6 5.4-49.6 16.6-17.5 12.9-26.6 33-26.6 54.7h278c0-29.5-17.8-55.5-45.8-65.2z"/>    <path d="M349.2 322.5l1.6-.8c-.3.1-.6.3-.8.4-.3.1-.5.2-.8.4zm306-10.6c-8.1-2.6-23.7-3.4-29.5-10.4-2.9-3.5-1.3-12.4-1-16.6 4.4.4 9.2-.3 13.7-.9 4.1-.6 8.1-1.4 12-2.8 1.8-.7 3.6-1.4 5.3-2.4 3.9-2.3 2.1-2.7.1-6.1-10.9-18.3-6-41.5-6.5-61.6-.4-16.7-4.8-35-20-44.4-13.7-8.5-34-8.8-48.7-2.8-42.4 17-17.4 73.2-31.9 105.4-2.5 5.4-6.1 7.3.2 10.5 3.5 1.8 7.3 3 11.1 3.9 5.8 1.4 11.8 2.2 17.8 2.4 1 0 .3 12.6 0 13.9-1.1 4.9-11.8 6.3-15.8 7.4-4.1 1.1-10.9 1.4-12.9 5.7-3 6.4 9.9 4.8 13.1 5.4 10.3 1.9 19.4 7.6 27.4 14.1 6 4.9 14.1 11.5 16.3 19.5h80.2c-.2-20.1-13.3-34.4-30.9-40.2zM264.7 171.7c-1.4-2.6-6.2-7.7-9.1-8.7-3.9-.6-1.6 2.9-1.6 4.4-1 .8-2.6 1.6-3.3 2.6-.5.4 1.1 4 4.1 2.8 3-1.1 1.3 1.2 3.4 5.8s6.2 4.7 8.1 3.3c2.4-1.8-.3-7.8-1.6-10.2zm12 29.3zm38.2 17.2c.3 0-1.2-.2 0 0z"/>    <path d="M198.9 111c-80.3 0-145.5 65.2-145.5 145.5 0 80.4 65.2 145.5 145.5 145.5 80.4 0 145.5-65.1 145.5-145.5 0-80.3-65.2-145.5-145.5-145.5zm-53.7 258.1c-3.6-2-6.1-4.9-7.1-10.3-2.6-13.5-.2-20.8 11.7-28.7 5.6-3.7 6.5-8.2 11-12.7 1.1-1.4 4-6.7 6-7 2.4-.5 8.9-1.6 10.2-4.2 2.5-3.3 7.9-17.8 10.3-19.2 3.9-2.5 9.4-10.4 5.4-15-4.6-5.6-10.9-5.7-16.8-8.6-5.2-2.6-7.5-14.5-11.5-18.6-7.7-7.9-19.5-12.5-29.2-17.3-5.3-2.1-4.8-2.8-8.9 1.4-5.3 5.3-13.1-1.3-13.8-6.8-.1-1.8-2.1-11.8-.9-12.6 11.7-7.3-5.4-5.6-6.8-9-3.5-9.7 8.4-17.4 16.5-18.3 9-1.1 10.9 14.2 14.4 12.9 1.7-.8 1.7-8.1 1.9-9.6.8-5.2 2.3-6 7.4-7.9 5.9-2.2 10.4-4.9 16.7-6 7.1-2.1 13.2-1 18.7-5.6 2.5-1.9 4.4 1 6.8 1.6 5.2 1 6.3-7.2 6.3-10.3 0-3 .8-5.6-3.1-8.8-5.1-3.9-12.4-.6-16.4 3.5-4.9 4.6-10.6 4.3-9-3.6.4-2.9 6.6-6.2 9.1-7.8 2.4-1.4 3.8 1.6 6.8.9 4.3-1 5.9 3.1 10.9 3.1 2.1-.5 9.6-4.5 5.6-12.6h1.8c1.2 0 2.4 0 3.6.1 1.8 5.8-3.9 10.7-1 17.9 5.7 13.9 10.4 2 16-4.5 1.9-1.9 3-1.4 6-2 1.9-.3 4.6-6 5.5-7.8 13 3.2 25.4 8.5 36.7 15.8-4.8.5-6.1-.9-6 4.8 0 2.2.2 8.7 3.4 9.2 5.4.6 4.4 4.4 9.5 5.1 4.8.6 1.8 4.9 3.8 9.1 2.2 6.6-12.9 8.6-15.8 9.6-8.9 3 4.1 15.9 9.9 14.5 1.8-.5 7.9-1.2 8.4-3.3 0-.2-1.2-7.2-.6-7.9 1-1.3 3.3-1.9 7 .2 8.7 4.9 13.1 16.7 23.3 19 1.4.3 3.8-.1 5.5 1.3 1.4 2 5.1 5.5.7 5.5-5.9-1.3-9 .6-13.8-3.2-5-3.9-8.1-7.1-14.8-7.2-5.7-.1-10.8-2.5-16.7-1.5-3.3.5-6.5 1.8-9.7 2.8-3 1-3.6 6.3-6.6 7-12.6 3-9.9 15-12.2 24.6-.9 3.7-3.9 13.6-.6 16.9 5.9 5.8 12.9 13.7 21.5 14.9 4.7.7 14.9-3 18.1 1.8 1.3 2.7 4.8-2 5.8.4 2.4 7.1-2.8 11.8-2.8 18.5-.1 9.9 6 13.4-2.1 22.2-8.9 8.8-2.8 20-7.7 30.5-2.6 5.4-3.1 12.9-7.1 15.4-8.7 5.5-18 10-27.7 13.2-17.3 5.7-35.8 7.6-53.9 5.5-9.5-1.1-18.9-3.3-27.9-6.5-2.4-.9-4.7-1.6-6.8-2.4-1.8-.9-3.3-1.6-4.9-2.4zm-27.1-17.6c-.3-.3-.6-.5-.9-.8-2.2-1.9-4.4-4-6.5-6.1-2.2-2.2-4.3-4.5-6.3-6.8 0 0 0-.1-.1-.1l-1.2-1.5c-33.6-40.6-38.5-100-10.3-145.4 3.9 3.9-2.7 11.7 4.9 16.9 3.3 2.3 6.5 1.4 5.8 5.7-.6 4.2 3.5 4.1 4.1 7.8 1.8 8.1 12.5 12.1 6.4 21.2-5.9 8.2-11 17.4-6.6 27.8 1.5 3.8 5.1 7.7 7.9 10.6 5.1 5.2 4.8 2.1 4.8 8.6-.1 2.8 3.4 5.8 3.1 7.6-.7 5.2-1.9 10.3-2.5 15.5-1.2 18.6-.1 36.8 13.8 50.7-5.2-3.1-10.2-6.7-14.9-10.6-.5-.2-1-.6-1.5-1.1z"/></svg>',
    "scout-external-person": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M765.9 448s0-26.4-2.2-40.2c-1.8-10.9-16.9-25.3-81.1-48.9-63.2-23.2-59.3-11.9-59.3-54.6 0-27.7 14.1-11.6 23.1-64.2 3.5-20.7 6.3-6.9 13.9-40.1 4-17.4-2.7-18.7-1.9-27s1.6-15.7 3.1-32.7c1.8-21-17.7-76.3-87.6-76.3s-89.4 55.3-87.5 76.4c1.5 16.9 2.3 24.4 3.1 32.7.8 8.3-5.9 9.6-1.9 27 7.6 33.1 10.4 19.3 13.9 40.1 9 52.6 23.1 36.5 23.1 64.2 0 42.8 3.9 31.5-59.3 54.6-64.2 23.5-79.4 38-81.1 48.9-2.3 13.7-2.3 40.1-2.3 40.1h384zM271.4 180.1c-1.6-2.7-6.6-8.2-9.7-9.3-4.1-.7-1.7 3.1-1.7 4.6-1.1.8-2.7 1.7-3.6 2.8-.5.4 1.2 4.2 4.4 3s1.3 1.2 3.6 6.1c2.2 4.9 6.7 5 8.7 3.6 2.6-1.8-.3-8.3-1.7-10.8zm12.9 31.4zm40.8 18.4c.3 0-1.2-.3 0 0z"/>    <path d="M201 115.1c-86 0-155.7 69.7-155.7 155.7S115 426.5 201 426.5s155.7-69.7 155.7-155.7S287 115.1 201 115.1zm-57.4 276.3c-3.8-2.2-6.5-5.2-7.6-11.1-2.7-14.5-.2-22.3 12.5-30.7 6-4 7-8.8 11.8-13.6 1.2-1.5 4.3-7.2 6.4-7.5 2.6-.6 9.5-1.7 10.9-4.6 2.7-3.6 8.5-19.1 11-20.6 4.1-2.7 10-11.1 5.8-16.1-4.9-6-11.7-6.1-18-9.3-5.6-2.8-8-15.5-12.3-19.9-8.3-8.5-20.9-13.3-31.2-18.6-5.6-2.2-5.1-3-9.5 1.5-5.6 5.6-14-1.4-14.8-7.3-.1-2-2.3-12.7-1-13.5 12.5-7.8-5.8-6-7.3-9.6-3.7-10.4 9-18.6 17.6-19.6 9.6-1.2 11.7 15.2 15.3 13.8 1.7-.9 1.8-8.6 2-10.3.9-5.6 2.5-6.5 8-8.5 6.3-2.3 11.2-5.3 17.9-6.4 7.6-2.2 14.1-1.1 20.1-6 2.7-2 4.6 1.1 7.2 1.7 5.6 1.1 6.7-7.7 6.7-11 0-3.2.9-6-3.2-9.4-5.4-4.2-13.3-.6-17.6 3.7-5.3 4.9-11.4 4.6-9.6-3.9.4-3.1 7.1-6.6 9.7-8.4 2.6-1.6 4.1 1.7 7.2 1 4.6-1 6.3 3.3 11.7 3.3 2.2-.5 10.3-4.8 6-13.4h1.9c1.3 0 2.6 0 3.9.1 2 6.1-4.1 11.4-1.1 19.2 6.1 14.9 11.1 2.1 17.2-4.9 2-2 3.2-1.6 6.5-2.2 2-.3 4.9-6.5 5.8-8.4 13.9 3.5 27.2 9.1 39.4 16.8-5.1.6-6.5-1-6.4 5.1 0 2.3.2 9.3 3.6 9.9 5.7.7 4.7 4.7 10.1 5.5 5.1.7 2 5.2 4.1 9.8 2.3 7.1-13.8 9.3-16.9 10.3-9.4 3.1 4.4 17 10.6 15.5 2-.5 8.5-1.3 8.9-3.6 0-.2-1.2-7.6-.6-8.5 1.1-1.3 3.6-2.1 7.5.2 9.3 5.3 14 17.9 24.9 20.4 1.5.3 4.1-.1 5.9 1.4 1.6 2.1 5.5 5.9.7 5.9-6.3-1.4-9.6.6-14.7-3.4-5.4-4.1-8.7-7.5-15.8-7.7-6.1-.1-11.6-2.7-17.9-1.7-3.5.6-7 2-10.4 3-3.2 1.1-3.8 6.8-7.1 7.5-13.5 3.1-10.6 16.1-13 26.4-.9 3.9-4.2 14.6-.7 18.1 6.4 6.1 13.8 14.6 23 16 5 .7 16-3.1 19.3 1.9 1.4 2.8 5.1-2.1 6.2.4 2.6 7.6-3 12.7-3 19.8-.1 10.6 6.4 14.3-2.2 23.7-9.4 9.4-3 21.4-8.3 32.6-2.8 5.8-3.3 13.8-7.5 16.5-9.3 6-19.2 10.7-29.7 14.2-18.5 6.1-38.4 8.1-57.7 5.9-10.2-1.2-20.2-3.5-29.8-7-2.7-.9-5.1-1.7-7.3-2.6-1.8-.3-3.5-1.1-5.1-1.8zm-29-18.9c-.3-.2-.7-.6-1-.8-2.4-2.1-4.7-4.2-7-6.5s-4.6-4.8-6.8-7.3l-.1-.1c-.4-.5-.9-1-1.3-1.6-36-43.4-41.2-107-11.1-155.6 4.2 4.2-2.8 12.5 5.2 18.1 3.6 2.5 7 1.5 6.2 6.1-.7 4.5 3.7 4.4 4.4 8.4 2 8.6 13.3 12.9 6.9 22.6-6.3 8.8-11.8 18.6-7 29.7 1.6 4.1 5.5 8.2 8.5 11.3 5.5 5.6 5.1 2.2 5.1 9.2-.1 3.1 3.6 6.2 3.2 8.1-.7 5.6-2 11.1-2.7 16.6-1.2 19.9-.1 39.4 14.8 54.3-5.6-3.3-10.9-7.1-16-11.4-.2-.2-.8-.6-1.3-1.1z"/></svg>',
    "search": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M445 386.7l-84.8-85.9c13.8-24.1 21-50.9 21-77.9C381.2 135.3 310 64 222.6 64 135.2 64 64 135.3 64 222.9c0 87.6 71.2 158.9 158.6 158.9 27.9 0 55.5-7.7 80.1-22.4l84.4 85.6c1.9 1.9 4.6 3.1 7.3 3.1s5.4-1.1 7.3-3.1l43.3-43.8c4-4.1 4-10.5 0-14.5zM222.6 125.9c53.4 0 96.8 43.5 96.8 97s-43.4 97-96.8 97-96.8-43.5-96.8-97 43.4-97 96.8-97z"/></svg>',
    "share": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M352 377.9H102.4V198.2h57.5s14.1-19.7 42.7-38.2H83.2c-10.6 0-19.2 8.5-19.2 19.1V397c0 10.5 8.6 19.1 19.2 19.1h288c10.6 0 19.2-8.5 19.2-19.1V288L352 319.4v58.5zM320 224v63.9l128-95.5L320 96v59.7C165.2 155.7 160 320 160 320c43.8-71.5 76-96 160-96z"/></svg>',
    "social-facebook": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z"/></svg>',
    "social-google-outline": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M319.408 82.141c11.779 9.576 36.43 29.718 36.43 68.043 0 37.295-21.547 54.934-43.094 71.545-6.695 6.561-14.385 13.608-14.385 24.701 0 11.092 7.689 17.153 13.336 21.671l18.473 14.108c22.598 18.641 43.125 35.795 43.125 70.559 0 47.373-46.721 95.232-135.003 95.232-74.428 0-110.343-34.766-110.343-72.061 0-18.139 9.245-43.827 39.525-61.48 31.798-19.142 74.952-21.657 98.023-23.172-7.178-9.078-15.382-18.67-15.382-34.265 0-8.577 2.557-13.609 5.12-19.655-5.648.5-11.283 1-16.42 1-54.408 0-85.214-39.811-85.214-79.107 0-23.186 10.802-48.902 32.856-67.543C215.724 68.031 250.637 64 278.328 64h105.725l-32.846 18.141h-31.799zm-36.453 223.755c-4.137-.501-6.684-.501-11.793-.501-4.629 0-32.348 1.002-53.895 8.049-11.3 4.046-44.146 16.125-44.146 51.918 0 35.78 35.393 61.467 90.339 61.467 49.283 0 75.432-23.156 75.432-54.404.001-25.718-16.921-39.312-55.937-66.529m14.879-95.748c11.824-11.592 12.844-27.73 12.844-36.793 0-36.281-22.086-92.73-64.671-92.73-13.339 0-27.724 6.547-35.948 16.639-8.722 10.593-11.284 24.188-11.284 37.281 0 33.764 20.005 89.727 64.163 89.727 12.826-.001 26.656-6.06 34.896-14.124"/></svg>',
    "social-google": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M325.862 275.558l-18.187-13.653-.063-.051c-5.827-4.579-9.952-8.313-9.952-14.685 0-6.979 5.049-11.824 10.896-17.436l.466-.449c20.025-15.171 44.726-34.286 44.726-74.556 0-26.934-11.916-44.729-23.28-57.729h12.969l60.322-33H270.308c-25.324 0-62.68 3.225-94.561 28.576l-.128.25c-21.809 18.111-34.828 44.584-34.828 70.691 0 21.197 8.706 42.159 23.885 57.447 21.428 21.579 48.302 26.127 67.074 26.127 1.462 0 2.956-.028 4.47-.093-.759 2.969-1.25 6.321-1.25 10.321 0 10.926 3.628 19.301 8.083 26.195-23.963 1.932-58.148 6.477-84.897 22.278-39.335 22.562-42.396 55.875-42.396 65.551 0 38.207 35.707 76.762 115.479 76.762 91.611 0 139.543-49.792 139.543-98.979-.001-37.159-22.837-55.668-44.92-73.567zM200.485 139.894c0-13.359 3.02-23.457 9.255-30.9 6.514-7.852 18.18-13.129 29.028-13.129 19.881 0 32.938 15.008 40.388 27.598 9.199 15.539 14.913 36.095 14.913 53.643 0 4.942 0 19.983-10.188 29.796-6.951 6.686-18.707 11.353-28.59 11.353-20.503 0-33.453-14.705-40.707-27.041-10.395-17.684-14.099-38.105-14.099-51.32zM321.6 367.974c0 27.444-25.212 44.493-65.799 44.493-48.058 0-80.347-20.603-80.347-51.265 0-26.14 21.54-36.789 37.8-42.521 18.944-6.064 44.297-7.305 50.062-7.305 3.907 0 6.087 0 8.683.229 36.701 25.211 49.601 36.128 49.601 56.369z"/></svg>',
    "social-googleplus-outline": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M223.5 82.1c11.8 9.6 36.4 29.7 36.4 68 0 37.3-21.5 54.9-43.1 71.5-6.7 6.6-14.4 13.6-14.4 24.7s7.7 17.2 13.3 21.7l18.5 14.1c22.6 18.6 43.1 35.8 43.1 70.6 0 47.4-46.7 95.2-135 95.2-74.4.1-110.3-34.7-110.3-72 0-18.1 9.2-43.8 39.5-61.5 31.8-19.1 75-21.7 98-23.2-7.2-9.1-15.4-18.7-15.4-34.3 0-8.6 2.6-13.6 5.1-19.7-5.6.5-11.3 1-16.4 1-54.4 0-85.2-39.8-85.2-79.1 0-23.2 10.8-48.9 32.9-67.5C119.8 68 154.7 64 182.4 64h105.7l-32.8 18.1h-31.8zM187 305.9c-4.1-.5-6.7-.5-11.8-.5-4.6 0-32.3 1-53.9 8-11.3 4-44.1 16.1-44.1 51.9s35.4 61.5 90.3 61.5c49.3 0 75.4-23.2 75.4-54.4 0-25.7-16.9-39.3-55.9-66.5m14.9-95.8c11.8-11.6 12.8-27.7 12.8-36.8 0-36.3-22.1-92.7-64.7-92.7-13.3 0-27.7 6.5-35.9 16.6-8.7 10.6-11.3 24.2-11.3 37.3 0 33.8 20 89.7 64.2 89.7 12.8.1 26.6-6 34.9-14.1M480 142.3h-78.3V64.1H384v78.2h-79.7v17.8H384V241h17.7v-80.9H480z"/></svg>',
    "social-googleplus": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M242.1 275.6l-18.2-13.7-.1-.1c-5.8-4.6-10-8.3-10-14.7 0-7 5-11.8 10.9-17.4l.5-.4c20-15.2 44.7-34.3 44.7-74.6 0-26.9-11.9-44.7-23.3-57.7h13L320 64H186.5c-25.3 0-62.7 3.2-94.6 28.6l-.1.3C70 110.9 57 137.4 57 163.5c0 21.2 8.7 42.2 23.9 57.4 21.4 21.6 48.3 26.1 67.1 26.1 1.5 0 3 0 4.5-.1-.8 3-1.2 6.3-1.2 10.3 0 10.9 3.6 19.3 8.1 26.2-24 1.9-58.1 6.5-84.9 22.3-39.4 22.7-42.5 56-42.5 65.6 0 38.2 35.7 76.8 115.5 76.8 91.6 0 139.5-49.8 139.5-99 0-37.1-22.8-55.6-44.9-73.5zM116.7 139.9c0-13.4 3-23.5 9.3-30.9 6.5-7.9 18.2-13.1 29-13.1 19.9 0 32.9 15 40.4 27.6 9.2 15.5 14.9 36.1 14.9 53.6 0 4.9 0 20-10.2 29.8-7 6.7-18.7 11.4-28.6 11.4-20.5 0-33.5-14.7-40.7-27-10.4-17.8-14.1-38.2-14.1-51.4zM237.8 368c0 27.4-25.2 44.5-65.8 44.5-48.1 0-80.3-20.6-80.3-51.3 0-26.1 21.5-36.8 37.8-42.5 18.9-6.1 44.3-7.3 50.1-7.3 3.9 0 6.1 0 8.7.2 36.6 25.2 49.5 36.1 49.5 56.4z"/>    <path d="M402 142V64h-34v78h-80v34h80v81h34v-81h78v-34z"/></svg>',
    "social-linkedin": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"/></svg>',
    "social-twitter": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"/></svg>',
    "social-windows": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M480 265H232v179l248 36V265zm-264 0H32v150l184 26.7V265zM480 32L232 67.4V249h248V32zM216 69.7L32 96v153h184V69.7z"/></svg>',
    "social-yahoo": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M384.6 68.4c-11.3 0-22.5-.8-32.6-4.4l-96 160-96-160c-10.1 3.6-20.7 4.4-32 4.4-11.1 0-22.1-.9-32-4.4l128 212.7V448c10-3.5 20.8-4.4 32-4.4s22 .9 32 4.4V277L416 64c-9.9 3.4-20.3 4.4-31.4 4.4z"/></svg>',
    "speakerphone": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M70.9 181.5c0-41 25-76.5 60.6-91.5h-7.7c-41.1 0-75.1 32.8-81.1 75.2-6 1-10.7 7.9-10.7 16.1 0 8.6 5.1 15.4 11.6 15.9 7.2 36.4 35.1 65.8 69.7 68.8h.1c1.4 0 2.8.6 4.2.9 1.1.2 2.2.4 3.3.7-29.9-17.1-50-49.2-50-86.1z"/>    <path d="M465.1 91c-1.1-2.9-2.3-5.6-3.5-8.3-6.5-14.4-14.4-26-23.4-34.6C427 37.6 414.1 32 400.8 32c-8.3 0-16.4 2.2-24.1 6.4h-.1c-1.2.7-2.4 1.3-3.6 2-49 29-104.1 46.2-162.6 49.4-6.5.4-13 .2-19.5.2h-42.3c-34 15-59 50.5-59 91.5 0 36.8 19.2 69.1 47.8 86.1 13 10.9 41.7 11.7 40 23.9-1.9 13.2-5.5 21.9-7.8 30.7-1.3 4.8-23.6 72.9-25.3 144.7 0 2 0 3.7.2 6.6.2 2.9 2.2 6.4 8.5 6.4h76.8c6.6 0 9.7-3.3 9.3-9.3-.2-1.9-.6-4.3-.8-6.5-2.4-23.1-4.6-49.8-3.3-81.6 1.3-34 5.2-51.9 7-61.3 2.1-10.4 7.6-22.4 12.1-30.3 30.8.9 92.9 19.3 115.1 28.9 0 0 7.2 3.4 10.1 5.2 7 3.4 14.2 5.1 21.6 5.1.9 0 1.8 0 2.7-.1 12.3-.7 24.2-9.7 34.7-19.5 9.1-8.5 16.9-20.2 23.4-34.6 1.2-2.8 2.4-5.6 3.5-8.6 9.6-25 14.8-55.9 14.8-88.1 0-32.2-5.2-63.2-14.9-88.2zM442 267.5c-7.8 18.5-18.2 33.3-29.5 33.3s-21.6-14.7-29.4-33.3c-9.1-21.6-14.9-53.1-14.9-88.1 0-35.2 5.8-66.8 15-88.4 7.8-18.4 18.1-29.5 29.3-29.5 11.3 0 21.5 11.2 29.4 29.5 9.2 21.6 15 53.2 15 88.4 0 35-5.8 66.5-14.9 88.1z"/></svg>',
    "star-outline": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 89l36.3 116.1L296 217h133l-98.1 73.6-9.6 7.2 3.6 11.5L363.2 432l-96.6-77.3-10.6-8.5-10.6 8.5-96.6 77.3 38.3-122.7 3.6-11.5-9.6-7.2L83 217h133l3.7-11.9L256 89m0-57l-52.5 168H32l138.9 104.2L116 480l140-112 140 112-54.9-175.8L480 200H308.5L256 32z"/></svg>',
    "star": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M480 200H308.519l-52.49-168-52.51 168H32l138.946 104.209L116 480l140-112 140 112-54.927-175.805z"/></svg>',
    "stats-bars": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M176 96h64v320h-64zM80 320h64v96H80zm192-64h64v160h-64zm96-64h64v224h-64z"/></svg>',
    "status-active": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M48 12c-19.887 0-36 16.113-36 36s16.113 36 36 36 36-16.113 36-36-16.113-36-36-36"/></svg>',
    "status-disconnected": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M48.1 12c-19.9 0-36 16.1-36 36s16.1 36 36 36 36-16.1 36-36-16.1-36-36-36zm0 67c-17.1 0-31-13.9-31-31s13.9-31 31-31 31 13.9 31 31-13.9 31-31 31z"/></svg>',
    "status-inactive": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M61.8 58.8L49.7 47.5 47 24.1 44 50h.1l-.1.2z"/>    <path d="M48.1 12c-19.9 0-36 16.1-36 36s16.1 36 36 36 36-16.1 36-36-16.1-36-36-36zm0 67c-17.1 0-31-13.9-31-31s13.9-31 31-31 31 13.9 31 31-13.9 31-31 31z"/></svg>',
    "stop": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M437.4 64H74.6C68.7 64 64 68.7 64 74.6v362.8c0 5.9 4.7 10.6 10.6 10.6h362.8c5.8 0 10.6-4.7 10.6-10.6V74.6c0-5.9-4.8-10.6-10.6-10.6z"/></svg>',
    "survey": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M39.5 39.3c0 2.1-1.7 3.8-3.8 3.8H12.3c-2 0-3.5-1.2-3.9-3.2-.1-.5-.1-1-.1-1.6v-25c0-2 1.4-3.7 3.4-4 1-.1 2 0 3.1 0v3.9h-2.6v25.9h23.3V13.2H33V9.3h.8c.8 0 1.7 0 2.5.1 1.8.3 3.1 1.9 3.1 3.8v16.7c.1 3.2.1 6.3.1 9.4z"/>    <path d="M31.4 9.3c-.4-.1-.9-.3-1.3-.4C29 8.7 28.3 8 27.7 7c-1.8-2.9-5.8-2.9-7.7 0-.2.4-.4.7-.7 1.1-.1.2-.3.3-.5.4-.8.3-1.6.5-2.4.8-.2.1-.3.2-.3.4v5c0 .8.4 1.2 1.2 1.2h13.2c.7 0 1.1-.4 1.1-1.1V9.7c.1-.2 0-.3-.2-.4zm-7.5 2.3c-1.3 0-2.2-.9-2.2-2.2 0-1.2 1-2.2 2.2-2.2 1.2 0 2.1 1 2.1 2.2 0 1.2-.9 2.2-2.1 2.2zm-7.8 7v7.7h7.7v-7.7h-7.7zm6.5 6.4h-5.1v-5.1h5.1V25zm-6.5 11.7h7.7v-3.5c-.6.7-1.6 1.1-1.2 2.2h-5.2v-5.2h3.4c.1 0 .3 0 .4-.1l1.2-1.2h-6.3v7.8z"/>    <path d="M24.6 28l-4.1 4.1c-.4-.5-.9-.9-1.3-1.4l-1.4 1.4 2.7 2.7 5.4-5.4c-.3-.4-.7-.9-1.3-1.4zm1.9-5.6v1.3h5.1v-1.3h-5.1zm0 11.7h5.1v-1.2h-5.1v1.2z"/></svg>',
    "thumbsup": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M424.2 259.3c13.8-4.5 23.8-17.5 23.8-32.8 0-19-15.4-34.5-34.5-34.5H310.9c2-25 10-53.6 1.1-87.3-7.5-28.4-39.4-49.7-52.4-36.8-5 4.9-3.5 15.2-3.5 33.8 0 42.8-17.8 86.1-39.8 108.7-9.4 9.7-25.2 13-40.2 13.6v-16H64v240h112v-32c20.6-.5 52.6 5.2 75.8 6.6 52 3.1 102-2.4 126.3-8.1 24.3-5.7 35-13 35-30.6 0-6.4-1.9-12.3-5.1-17.3 11.8-4.7 20.1-16.2 20.1-29.7 0-7.2-2.4-13.8-6.4-19.2 11.9-4.6 20.4-16.2 20.4-29.8-.1-12.5-7.4-23.4-17.9-28.6zM112 415.7c-8.8 0-16-7.1-16-16 0-8.8 7.2-16 16-16s16 7.1 16 16c0 8.8-7.2 16-16 16z"/></svg>',
    "toggle-default": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M243.9 491.1h352.5c129.8 0 235-105.2 235-235s-105.2-235-235-235H243.9c-129.8 0-235 105.2-235 235s105.2 235 235 235zm0-381.9c81.1 0 146.9 65.8 146.9 146.9 0 81.1-65.8 146.9-146.9 146.9C162.8 403 97 337.2 97 256.1c0-81.1 65.8-146.9 146.9-146.9z"/></svg>',
    "toggle-toggled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M596.4 21.1H243.9c-129.8 0-235 105.2-235 235s105.2 235 235 235h352.5c129.8 0 235-105.2 235-235s-105.3-235-235-235zm0 381.9c-81.1 0-146.9-65.8-146.9-146.9s65.8-146.9 146.9-146.9S743.2 175 743.2 256.1c0 81.1-65.7 146.9-146.8 146.9z"/></svg>',
    "trash-a": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M341 128V99c0-19.1-14.5-35-34.5-35H205.4C185.5 64 171 79.9 171 99v29H80v32h9.2s5.4.6 8.2 3.4c2.8 2.8 3.9 9 3.9 9l19 241.7c1.5 29.4 1.5 33.9 36 33.9h199.4c34.5 0 34.5-4.4 36-33.8l19-241.6s1.1-6.3 3.9-9.1 8.2-3.4 8.2-3.4h9.2v-32h-91v-.1zM192 99c0-9.6 7.8-15 17.7-15h91.7c9.9 0 18.6 5.5 18.6 15v29H192V99zm-8.5 285l-10.3-192h20.3L204 384h-20.5zm83.6 0h-22V192h22v192zm61.6 0h-20.4l10.5-192h20.3l-10.4 192z"/></svg>',
    "trash-b-open": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M408.5 53.2c-5-7.8-8.1-12.1-8.1-12.1-5.3-8.1-11.6-6.1-21.4-4.6l-52.6 9.8c-6.6 1-6.6 1-10.8-3.7-14.3-16-20.3-26.1-29.4-23.2l-98.1 31.4c-9 2.9-8.1 14.5-10.3 36-.8 6.1-.8 6.1-6.7 9.3l-48.6 22.6c-8.8 4.5-15.1 7.5-14.8 17.1 0 0 .1 4.3.4 13.5.6 12.3-1.1 11.5 9.4 8.1l288-92.1c10.5-3.3 9.7-1.8 3-12.1zM379.4 176H132.6c-16.6 0-17.4 2.2-16.4 14.7l18.7 242.6c1.6 12.3 2.8 14.8 17.5 14.8h207.2c14.7 0 15.9-2.5 17.5-14.8l18.7-242.6c1-12.6.2-14.7-16.4-14.7z"/></svg>',
    "trash-b": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M413.7 133.4c-2.4-9-4-14-4-14-2.6-9.3-9.2-9.3-19-10.9l-53.1-6.7c-6.6-1.1-6.6-1.1-9.2-6.8-8.7-19.6-11.4-31-20.9-31h-103c-9.5 0-12.1 11.4-20.8 31.1-2.6 5.6-2.6 5.6-9.2 6.8l-53.2 6.7c-9.7 1.6-16.7 2.5-19.3 11.8 0 0-1.2 4.1-3.7 13-3.2 11.9-4.5 10.6 6.5 10.6h302.4c11 .1 9.8 1.3 6.5-10.6zM379.4 176H132.6c-16.6 0-17.4 2.2-16.4 14.7l18.7 242.6c1.6 12.3 2.8 14.8 17.5 14.8h207.2c14.7 0 15.9-2.5 17.5-14.8l18.7-242.6c1-12.6.2-14.7-16.4-14.7z"/></svg>',
    "university": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 64L32 176.295l32 21.072V400l32 16V217.849L255.852 320l132.144-85.451L480 174.727z"/>    <path d="M390.13 256L256 343.768 120.531 256 112 337.529C128 349.984 224 416 256.002 448 288 416 384 350.031 400 337.561L390.13 256z"/></svg>',
    "upload-circled": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm90.9 300.9h-70.5v-51.1h30.8L256 228.4l-51.2 53.5h30.8V333h-65.5c-31.6 0-57.2-26-57.2-58.2 0-25.5 16.1-47.1 38.8-54.9 3-18.3 18.7-32.3 37.6-32.3 6.2 0 12 1.6 17.1 4.2 11.9-25.3 37.1-42.8 66.7-42.8 40.8 0 73.9 33.6 73.9 75.2 0 .8-.1 1.6-.1 2.3 28.9.1 52.3 23.9 52.3 53.2s-23.4 53.2-52.3 53.2z"/></svg>',
    "upload": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M398.1 233.2c0-1.2.2-2.4.2-3.6 0-65-51.8-117.6-115.7-117.6-46.1 0-85.7 27.4-104.3 67-8.1-4.1-17.2-6.5-26.8-6.5-29.5 0-54.1 21.9-58.8 50.5C57.3 235.2 32 269.1 32 309c0 50.2 40.1 91 89.5 91H224v-80h-48.2l80.2-83.7 80.2 83.6H288v80h110.3c45.2 0 81.7-37.5 81.7-83.4 0-45.9-36.7-83.2-81.9-83.3z"/></svg>',
    "volume-high": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M231 407.8V104.3L136.1 192H32v128h104.1zm56.1-52.1c20.5-27.9 32.8-62.3 32.8-99.7 0-37.4-12.3-71.8-32.8-99.7l-20.4 15.3c17.4 23.6 27.8 52.7 27.8 84.4 0 31.6-10.4 60.8-27.8 84.3l20.4 15.4zm66.6 46c30-40.7 48-91.1 48-145.7s-18-104.9-48-145.7l-20.4 15.3c26.9 36.4 43 81.5 43 130.4 0 48.9-16.1 93.9-43 130.3l20.4 15.4z"/>    <path d="M396.7 79.4c36.4 49.3 57.9 110.5 57.9 176.6s-21.5 127.2-57.9 176.6l20.5 15.4c39.4-53.6 62.8-120 62.8-192s-23.4-138.4-62.8-192l-20.5 15.4z"/></svg>',
    "volume-mute": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M255.9 217H191v78h64.9l47.1 51.3V165.7z"/>    <path d="M364.5 60.1c-.4-.2-.7-.4-1.1-.6C331.5 42 294.9 32 256 32 132.3 32 32 132.3 32 256c0 84.3 46.6 157.6 115.4 195.9.4.2.7.5 1.1.7C180.5 470 217.1 480 256 480c123.7 0 224-100.3 224-224 0-84.3-46.6-157.7-115.5-195.9zm29.4 295.3L336 297.1v76.7l19.6 19.9c-28 20.3-62.3 32.7-99.5 32.7-21.6 0-42.3-4.2-61.3-11.5-6.5-2.5-12.9-5.3-19-8.6-53.6-28.7-90.1-85.2-90.1-150.3 0-37.2 12.4-71.4 32.7-99.4l35.3 35.4h76.7l-73.6-73.8c28-20.2 62.1-32.6 99.4-32.6 21.6 0 42.2 4.2 61.3 11.5 6.1 2.4 12.2 5 17.9 8 54.2 28.5 91.3 85.3 91.3 150.8-.2 37.4-12.5 71.5-32.8 99.5z"/></svg>',
    "waterdrop": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M271 38.6c-.3-.4-.7-.7-.9-1l-.1-.1c-3.6-3.4-8.5-5.5-13.9-5.5-5.5 0-10.4 2.1-13.9 5.5l-.1.1c-.3.3-.6.6-.9 1-6.1 6.3-13.8 14.4-22.4 24.1-17.4 19.7-38.6 46-58.5 76.8-33.4 51.8-62.9 116.1-64.1 183.1 0 1.3-.1 2.7-.1 4 0 19.7 3.9 38.5 10.9 55.8 4.1 10 9.2 19.4 15.2 28.2C150.7 452.4 200 480 256 480c88.4 0 160-68.7 160-153.4 0-127.9-105.2-247.4-145-288zM256 424c-15.8 0-30.7-3.7-43.9-10.1 65.9-14.4 118.4-64.7 135.8-129.5 5.2 12.1 8.2 25.5 8.2 39.6-.1 55.2-44.9 100-100.1 100z"/></svg>',
    "webcam-hide": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M6.165 30.044c-.202.92-.157 1.904-.157 2.859-.01 11.708-.01 23.416-.006 35.126.003 3.652 2.346 6.05 5.99 6.058 7.533.024 15.065.01 22.6.01 7.607.014 14.636.026 22.246.008 2.446-.006-43.04-48.437-43.04-48.437-2.487.006-1.005.015-2.079.027-2.796.03-5 1.786-5.554 4.35zm50.648-4.392c-4.416.008-12.592.005-21.54.005l28.079 29.936-.003-23.514c0-4.172-2.337-6.433-6.536-6.427zm33.213 24.231c0-6.188.003-12.376-.003-18.561 0-1.925-1.293-2.773-2.882-1.878-5.813 3.28-11.616 6.579-17.435 9.846-.943.529-1.352 1.233-1.346 2.32.033 5.562.03 11.123.006 16.684-.003 1.002.394 1.656 1.257 2.14 5.783 3.259 11.551 6.544 17.334 9.802 1.782 1.005 3.075.25 3.078-1.792.012-6.188.006-12.373.006-18.561h-.015M72.959 82.726L11.752 16.127 15.902 12l61.206 66.596z"/></svg>',
    "webcam": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path fill-rule="evenodd" d="M90.026 49.883c0-6.188.003-12.376-.003-18.561 0-1.925-1.293-2.773-2.882-1.878-5.813 3.28-11.616 6.579-17.435 9.846-.943.529-1.352 1.233-1.346 2.32.033 5.562.03 11.123.006 16.684-.003 1.002.394 1.656 1.257 2.14 5.783 3.259 11.551 6.544 17.334 9.802 1.782 1.005 3.075.25 3.078-1.792.012-6.188.006-12.373.006-18.561h-.015M56.813 25.652c-9.306.018-39.37-.02-45.094.042-2.793.032-5 1.785-5.554 4.349-.202.922-.157 1.904-.157 2.859-.01 11.707-.01 23.418-.006 35.126.003 3.651 2.346 6.049 5.99 6.06 7.533.022 15.068.007 22.6.007v.017c7.607 0 15.213.012 22.823-.005 3.538-.01 5.94-2.478 5.94-6.017-.006-12.003-.003-24.007-.006-36.01 0-4.172-2.337-6.437-6.536-6.428"/></svg>',
    "webhooks-incoming": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M31.025.039c-5.146.364-10.09 3.238-12.852 8.032-3.878 6.714-2.284 15.136 3.313 20.08l-5.421 9.338a6.38 6.38 0 0 0-5.523 3.213c-1.77 3.075-.765 6.953 2.31 8.735 3.075 1.77 6.965.766 8.735-2.309a6.453 6.453 0 0 0 0-6.426l8.534-14.659-2.811-1.606c-4.606-2.66-6.175-8.547-3.514-13.153 2.66-4.606 8.547-6.175 13.153-3.514 4.606 2.66 6.174 8.547 3.514 13.153l5.622 3.213c4.43-7.669 1.745-17.559-5.924-21.989A16.018 16.018 0 0 0 31.025.04zm.301 9.638c-.828.1-1.644.364-2.41.804-3.075 1.77-4.079 5.76-2.309 8.835a6.38 6.38 0 0 0 5.522 3.213l8.434 14.659 2.811-1.606c4.606-2.661 10.493-1.092 13.153 3.514 2.661 4.606 1.092 10.492-3.514 13.153-4.606 2.66-10.492 1.091-13.153-3.515l-5.622 3.213c4.43 7.669 14.32 10.355 21.988 5.924 7.668-4.43 10.354-14.32 5.924-21.988-3.878-6.715-11.986-9.601-19.077-7.23l-5.422-9.337a6.453 6.453 0 0 0 0-6.426c-1.33-2.309-3.84-3.526-6.325-3.213zM16.065 27.85C7.204 27.85 0 35.054 0 43.915c0 8.86 7.204 16.065 16.065 16.065 7.756 0 14.27-5.535 15.763-12.852h10.844c1.117 1.908 3.15 3.213 5.522 3.213a6.422 6.422 0 0 0 6.426-6.426 6.422 6.422 0 0 0-6.426-6.426c-2.372 0-4.405 1.305-5.522 3.213H25.703v3.213c0 5.309-4.33 9.639-9.638 9.639-5.31 0-9.64-4.33-9.64-9.639 0-5.309 4.33-9.639 9.64-9.639V27.85zm71.016-16.519l-.24.205-17.86 15.521A2.887 2.887 0 0 0 68 29.248c0 .879.388 1.666.981 2.191l17.826 15.51.297.262c.285.194.628.308.993.308.993 0 1.803-.844 1.803-1.894v-32.73c0-1.05-.81-1.895-1.803-1.895-.377 0-.73.126-1.016.331z"/></svg>',
    "webhooks-outgoing": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <path d="M31.025.039c-5.146.364-10.09 3.238-12.852 8.032-3.878 6.714-2.284 15.136 3.313 20.08l-5.421 9.338a6.38 6.38 0 0 0-5.523 3.213c-1.77 3.075-.765 6.953 2.31 8.735 3.075 1.77 6.965.766 8.735-2.309a6.453 6.453 0 0 0 0-6.426l8.534-14.659-2.811-1.606c-4.606-2.66-6.175-8.547-3.514-13.153 2.66-4.606 8.547-6.175 13.153-3.514 4.606 2.66 6.174 8.547 3.514 13.153l5.622 3.213c4.43-7.669 1.745-17.559-5.924-21.989A16.018 16.018 0 0 0 31.025.04zm.301 9.638c-.828.1-1.644.364-2.41.804-3.075 1.77-4.079 5.76-2.309 8.835a6.38 6.38 0 0 0 5.522 3.213l8.434 14.659 2.811-1.606c4.606-2.661 10.493-1.092 13.153 3.514 2.661 4.606 1.092 10.492-3.514 13.153-4.606 2.66-10.492 1.091-13.153-3.515l-5.622 3.213c4.43 7.669 14.32 10.355 21.988 5.924 7.668-4.43 10.354-14.32 5.924-21.988-3.878-6.715-11.986-9.601-19.077-7.23l-5.422-9.337a6.453 6.453 0 0 0 0-6.426c-1.33-2.309-3.84-3.526-6.325-3.213zM16.065 27.85C7.204 27.85 0 35.054 0 43.915c0 8.86 7.204 16.065 16.065 16.065 7.756 0 14.27-5.535 15.763-12.852h10.844c1.117 1.908 3.15 3.213 5.522 3.213a6.422 6.422 0 0 0 6.426-6.426 6.422 6.422 0 0 0-6.426-6.426c-2.372 0-4.405 1.305-5.522 3.213H25.703v3.213c0 5.309-4.33 9.639-9.638 9.639-5.31 0-9.64-4.33-9.64-9.639 0-5.309 4.33-9.639 9.64-9.639V27.85zm54.754-16.519l.24.205 17.86 15.521a2.89 2.89 0 0 1 .981 2.191c0 .879-.388 1.666-.981 2.191L71.093 46.95l-.297.262a1.763 1.763 0 0 1-.993.308c-.993 0-1.803-.844-1.803-1.894v-32.73c0-1.05.81-1.895 1.803-1.895.377 0 .73.126 1.016.331z"/></svg>',
    "workstorm": '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">    <defs>        <style>            .cls-1{fill:#231f20}        </style>    </defs>    <path d="M63.41 16.39C82.7 21.06 96.24 38.73 96.3 58.56c.07 23.6-19.72 41.56-39.84 42.29l-6.81 15.53c32.78-.1 56.56-25.32 56.47-52.33-.07-24-19.56-45.7-41.91-49.31zM42.72 100C23.43 95.33 9.88 77.66 9.82 57.83c-.07-23.6 19.72-41.56 39.84-42.29L56.48 0C22.48.1-.08 25.32 0 52.33c.07 24 19.57 45.7 41.92 49.31z" class="cls-1"/>    <circle cx="639.94" cy="512.13" r="25.43" class="cls-1" transform="rotate(-8.67 -2647.715 4156.369)"/></svg>'
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
/* harmony import */ var _moongoose_vue_vue_type_template_id_1c506f2f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moongoose.vue?vue&type=template&id=1c506f2f */ "./src/moongoose.vue?vue&type=template&id=1c506f2f");
/* harmony import */ var _moongoose_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moongoose.vue?vue&type=script&lang=js */ "./src/moongoose.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _moongoose_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _moongoose_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _moongoose_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moongoose.vue?vue&type=style&index=0&lang=scss */ "./src/moongoose.vue?vue&type=style&index=0&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _moongoose_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _moongoose_vue_vue_type_template_id_1c506f2f__WEBPACK_IMPORTED_MODULE_0__["render"],
  _moongoose_vue_vue_type_template_id_1c506f2f__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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

/***/ "./src/moongoose.vue?vue&type=script&lang=js":
/*!***************************************************!*\
  !*** ./src/moongoose.vue?vue&type=script&lang=js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./moongoose.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??ref--0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/moongoose.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/moongoose.vue?vue&type=style&index=0&lang=scss":
/*!************************************************************!*\
  !*** ./src/moongoose.vue?vue&type=style&index=0&lang=scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib??vue-loader-options!./moongoose.vue?vue&type=style&index=0&lang=scss */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/moongoose.vue?vue&type=style&index=0&lang=scss");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/moongoose.vue?vue&type=template&id=1c506f2f":
/*!*********************************************************!*\
  !*** ./src/moongoose.vue?vue&type=template&id=1c506f2f ***!
  \*********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_template_id_1c506f2f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./moongoose.vue?vue&type=template&id=1c506f2f */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/moongoose.vue?vue&type=template&id=1c506f2f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_template_id_1c506f2f__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moongoose_vue_vue_type_template_id_1c506f2f__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });
});
//# sourceMappingURL=moongoose.js.map