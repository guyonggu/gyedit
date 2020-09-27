module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/3ze":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("bBV7");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YcSU");


/***/ }),

/***/ "1jmL":
/***/ (function(module, exports) {

module.exports = require("emotion");

/***/ }),

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


/***/ }),

/***/ "63Ad":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "9CGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("vdEC");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("a4i1");

var _router2 = __webpack_require__("bBV7");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "BCwt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "BukW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "I88V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllExamples", function() { return getAllExamples; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


const examplePath = Object(path__WEBPACK_IMPORTED_MODULE_1__["join"])(process.cwd(), 'examples');
function getAllExamples() {
  const slugs = Object(fs__WEBPACK_IMPORTED_MODULE_0__["readdirSync"])(examplePath);
  return slugs.filter(name => name.match(/.tsx$/)).map(n => n.replace(/.tsx$/, ''));
}

/***/ }),

/***/ "Jxiz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "KSsN":
/***/ (function(module, exports) {

module.exports = require("react-error-boundary");

/***/ }),

/***/ "LawV":
/***/ (function(module, exports) {

module.exports = require("is-hotkey");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Plc0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "PsvV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "Tv7R":
/***/ (function(module, exports) {

module.exports = require("slate");

/***/ }),

/***/ "VOyh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "Wecs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("PsvV"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "YcSU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "emotion"
var external_emotion_ = __webpack_require__("1jmL");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "react-error-boundary"
var external_react_error_boundary_ = __webpack_require__("KSsN");

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./components.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Button = /*#__PURE__*/external_react_default.a.forwardRef((_ref, ref) => {
  let {
    className,
    active,
    reversed
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "active", "reversed"]);

  return __jsx("span", _extends({}, props, {
    ref: ref,
    className: Object(external_emotion_["cx"])(className, external_emotion_["css"]`
          cursor: pointer;
          color: ${reversed ? active ? 'white' : '#aaa' : active ? 'black' : '#ccc'};
        `)
  }));
});
const EditorValue = /*#__PURE__*/external_react_default.a.forwardRef((_ref2, ref) => {
  let {
    className,
    value
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["className", "value"]);

  const textLines = value.document.nodes.map(node => node.text).toArray().join('\n');
  return __jsx("div", _extends({
    ref: ref
  }, props, {
    className: Object(external_emotion_["cx"])(className, external_emotion_["css"]`
            margin: 30px -20px 0;
          `)
  }), __jsx("div", {
    className: external_emotion_["css"]`
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `
  }, "Slate's value as text"), __jsx("div", {
    className: external_emotion_["css"]`
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `
  }, textLines));
});
const Icon = /*#__PURE__*/external_react_default.a.forwardRef((_ref3, ref) => {
  let {
    className
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["className"]);

  return __jsx("span", _extends({}, props, {
    ref: ref,
    className: Object(external_emotion_["cx"])('material-icons', className, external_emotion_["css"]`
          font-size: 18px;
          vertical-align: text-bottom;
        `)
  }));
});
const Instruction = /*#__PURE__*/external_react_default.a.forwardRef((_ref4, ref) => {
  let {
    className
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["className"]);

  return __jsx("div", _extends({}, props, {
    ref: ref,
    className: Object(external_emotion_["cx"])(className, external_emotion_["css"]`
          white-space: pre-wrap;
          margin: 0 -20px 10px;
          padding: 10px 20px;
          font-size: 14px;
          background: #f8f8e8;
        `)
  }));
});
const Menu = /*#__PURE__*/external_react_default.a.forwardRef((_ref5, ref) => {
  let {
    className
  } = _ref5,
      props = _objectWithoutProperties(_ref5, ["className"]);

  return __jsx("div", _extends({}, props, {
    ref: ref,
    className: Object(external_emotion_["cx"])(className, external_emotion_["css"]`
          & > * {
            display: inline-block;
          }

          & > * + * {
            margin-left: 15px;
          }
        `)
  }));
});
const Portal = ({
  children
}) => {
  return /*#__PURE__*/external_react_dom_default.a.createPortal(children, document.body);
};
const Toolbar = /*#__PURE__*/external_react_default.a.forwardRef((_ref6, ref) => {
  let {
    className
  } = _ref6,
      props = _objectWithoutProperties(_ref6, ["className"]);

  return __jsx(Menu, _extends({}, props, {
    ref: ref,
    className: Object(external_emotion_["cx"])(className, external_emotion_["css"]`
          position: relative;
          padding: 1px 18px 17px;
          margin: 0 -20px;
          border-bottom: 2px solid #eee;
          margin-bottom: 20px;
        `)
  }));
});
// EXTERNAL MODULE: external "is-hotkey"
var external_is_hotkey_ = __webpack_require__("LawV");
var external_is_hotkey_default = /*#__PURE__*/__webpack_require__.n(external_is_hotkey_);

// EXTERNAL MODULE: external "slate-react"
var external_slate_react_ = __webpack_require__("fZjU");

// EXTERNAL MODULE: external "slate"
var external_slate_ = __webpack_require__("Tv7R");

// EXTERNAL MODULE: external "slate-history"
var external_slate_history_ = __webpack_require__("eLVN");

// CONCATENATED MODULE: ../src/util.ts

const getListStart = (editor, path) => {
  let listStart = [];
  let [node] = external_slate_["Editor"].node(editor, path);

  if (!isListNode(node)) {
    return listStart;
  }

  let curPath = path;
  let options = {
    index: 0
  };

  while (isListNode(node) && options.index >= 0) {
    computeListStart(listStart, node, options);
    const pre = external_slate_["Editor"].previous(editor, {
      at: curPath
    });

    if (!pre) {
      break;
    }

    [node, curPath] = pre;
  }

  return listStart;
};
const isListNode = node => {
  if (!node || !node.type || !node.type.endsWith('-list')) {
    return false;
  }

  return true;
};

const computeListStart = (listStart, node, options = {
  index: 0
}) => {
  let indent = node.indent || 0;
  let start = node.start || 1;

  if (listStart.length && indent > options.index) {
    return;
  }

  if (!listStart.length) {
    for (let i = 0; i <= indent; i++) {
      listStart.push(1);
    }
  }

  if (node.type === 'numbered-list') {
    listStart[indent] = start + node.children.length;
  }

  options.index = indent - 1;
};

const fixList = (editor, path) => {
  let entry;

  if (!path) {
    entry = external_slate_["Editor"].above(editor, {
      match: n => external_slate_["Editor"].isBlock(editor, n)
    });
  } else {
    entry = external_slate_["Editor"].node(editor, path);
  }

  if (!entry) {
    return;
  }

  if (entry[0].type === 'list-item') {
    const [node, path] = external_slate_["Editor"].parent(editor, entry[1]);
    const [preNode, prePath] = external_slate_["Editor"].previous(editor, {
      at: path
    }) || [undefined, undefined];
    const ref = external_slate_["Editor"].pathRef(editor, path);
    console.log("fix:", node.type, "at:", path); // merge left

    if (isListNode(preNode) && preNode.type === node.type && preNode.indent === node.indent) {
      external_slate_["Transforms"].mergeNodes(editor, {
        at: path
      });
    } //merge right


    const [nextNode, nextPath] = external_slate_["Editor"].next(editor, {
      at: ref.current
    }) || [undefined, undefined];

    if (isListNode(nextNode) && nextNode.type === node.type && nextNode.indent === node.indent) {
      external_slate_["Transforms"].mergeNodes(editor, {
        at: nextPath
      });
    }

    let listStart = [];
    let updatePath;

    if (prePath && isListNode(preNode)) {
      listStart = getListStart(editor, prePath);
      updatePath = external_slate_["Path"].next(prePath);
    } else {
      updatePath = ref.unref();
    }

    console.log("updateListStart:", listStart, "at:", updatePath);
    updateListStart(editor, updatePath, listStart);
  } else {
    const next = external_slate_["Editor"].next(editor, {
      at: entry[1]
    });

    if (next && isListNode(next[0])) {
      console.log("updateListStart:", [], "at:", next[1]);
      updateListStart(editor, next[1], []);
    }
  }
};

const updateListStart = (editor, path, listStart) => {
  if (!external_slate_["Node"].has(editor, path)) {
    return;
  }

  let [node] = external_slate_["Editor"].node(editor, path);

  while (isListNode(node)) {
    const indent = node.indent || 0;
    const start = listStart[indent] || 1;

    if (node.type === 'numbered-list') {
      external_slate_["Transforms"].setNodes(editor, {
        start: listStart[indent]
      }, {
        at: path
      });
    }

    listStart.splice(indent + 1);

    if (node.type === 'numbered-list') {
      listStart[indent] = start + node.children.length;
    } else {
      listStart[indent] = 1;
    } // node.start = listStart[node.indent]


    const entry = external_slate_["Editor"].next(editor, {
      at: path
    });

    if (!entry) {
      break;
    }

    [node, path] = entry;
  }
};
// CONCATENATED MODULE: ../src/withMarkdown.ts


const SHORTCUTS = {
  '*': 'ul-item',
  '-': 'ul-item',
  '+': 'ul-item',
  '>': 'block-quote',
  '#': 'heading-one',
  '##': 'heading-two',
  '###': 'heading-three',
  '####': 'heading-four',
  '#####': 'heading-five',
  '######': 'heading-six'
};
const withMarkdown = editor => {
  const {
    deleteBackward,
    insertText,
    insertBreak,
    deleteFragment,
    normalizeNode
  } = editor;

  const insertBreak2 = () => {
    let handled = false;
    const {
      selection
    } = editor;

    if (!selection || external_slate_["Range"].isExpanded(selection)) {
      insertBreak();
      return;
    }

    const block = external_slate_["Editor"].above(editor, {
      match: n => external_slate_["Editor"].isBlock(editor, n)
    });

    if (!block || external_slate_["Editor"].isEditor(block[0])) {
      insertBreak();
      return;
    }

    const parent = external_slate_["Editor"].parent(editor, block[1]);

    if (!parent || external_slate_["Editor"].isEditor(parent[0])) {
      insertBreak();
      return;
    }

    const text = external_slate_["Editor"].string(editor, block[1]);

    if (text) {
      insertBreak();
      return;
    }

    const blockPath = block[1];
    let indent = 0;

    if (typeof parent[0].indent === "number") {
      indent = parent[0].indent > 1 ? parent[0].indent - 1 : 0;
    }

    external_slate_["Transforms"].setNodes(editor, {
      type: 'paragraph',
      indent
    }, {
      at: blockPath
    }); // if it is the last child

    if (blockPath[blockPath.length - 1] === parent[0].children.length - 1) {
      external_slate_["Transforms"].liftNodes(editor, {
        at: blockPath
      });
      return;
    }
  };

  editor.insertBreak = () => {
    external_slate_["Editor"].withoutNormalizing(editor, () => {
      insertBreak2();
      fixList(editor);
    });
  };

  editor.insertText = text => {
    const {
      selection
    } = editor;

    if (text !== ' ' || !selection || !external_slate_["Range"].isCollapsed(selection)) {
      insertText(text);
      return;
    }

    const {
      anchor
    } = selection;
    const block = external_slate_["Editor"].above(editor, {
      match: n => external_slate_["Editor"].isBlock(editor, n)
    });
    const path = block ? block[1] : [];
    const start = external_slate_["Editor"].start(editor, path);
    const range = {
      anchor,
      focus: start
    };
    let beforeText = external_slate_["Editor"].string(editor, range);
    let tabs = 0;

    for (let c of beforeText) {
      if (c === '\t') {
        tabs++;
      }
    }

    beforeText = beforeText.substr(tabs);
    const blockType = block[0].type;
    let inList = typeof blockType === 'string' ? blockType === 'list-item' : false;
    let type = SHORTCUTS[beforeText];

    if (!type && /^[1-9]\d*\./.test(beforeText)) {
      type = 'ol-item';
    }

    let list;

    switch (type) {
      case 'ul-item':
        if (inList) {
          insertText(text);
          break;
        }

        external_slate_["Transforms"].select(editor, range);
        external_slate_["Transforms"].delete(editor);
        external_slate_["Transforms"].setNodes(editor, {
          type: 'list-item'
        }, {
          match: n => external_slate_["Editor"].isBlock(editor, n)
        });
        list = {
          type: 'bulleted-list',
          indent: tabs,
          children: []
        };
        external_slate_["Transforms"].wrapNodes(editor, list, {
          match: n => n.type === 'list-item'
        });
        fixList(editor);
        break;

      case 'ol-item':
        if (inList) {
          insertText(text);
          break;
        }

        const found = beforeText.match(/^([\t]*)\d+\./);
        external_slate_["Transforms"].select(editor, range);
        external_slate_["Transforms"].delete(editor);
        external_slate_["Transforms"].setNodes(editor, {
          type: 'list-item'
        }, {
          match: n => external_slate_["Editor"].isBlock(editor, n)
        });
        list = {
          type: 'numbered-list',
          indent: tabs,
          children: []
        };
        external_slate_["Transforms"].wrapNodes(editor, list, {
          match: n => n.type === 'list-item'
        });
        fixList(editor);
        break;

      case 'block-quote':
        if (inList || blockType !== 'paragraph') {
          insertText(text);
          break;
        }

        let parent = external_slate_["Editor"].above(editor, {
          match: n => n.type === 'block-quote'
        });

        if (parent) {
          insertText(text);
          break;
        }

        external_slate_["Transforms"].select(editor, range);
        external_slate_["Transforms"].delete(editor);
        external_slate_["Transforms"].wrapNodes(editor, {
          type: 'block-quote',
          children: []
        }, {
          match: n => n.type === 'paragraph'
        });
        break;

      default:
        insertText(text);
    }

    return;
  };

  const deleteBackward2 = unit => {
    console.log("editor.deleteBackward:", unit);
    const {
      selection
    } = editor;

    if (!selection || external_slate_["Range"].isExpanded(selection)) {
      deleteBackward(unit);
      return;
    }

    const match = external_slate_["Editor"].above(editor, {
      match: n => external_slate_["Editor"].isBlock(editor, n)
    });

    if (!match || external_slate_["Editor"].isEditor(match[0])) {
      deleteBackward(unit);
      return;
    }

    const [block, path] = match;
    const start = external_slate_["Editor"].start(editor, path);

    if (external_slate_["Point"].equals(selection.anchor, start)) {
      if (block.type === 'list-item') {
        const [listNode] = external_slate_["Editor"].parent(editor, path);

        if (listNode && listNode.indent > 0) {
          external_slate_["Editor"].withoutNormalizing(editor, () => {
            external_slate_["Transforms"].wrapNodes(editor, {
              type: listNode.type,
              indent: listNode.indent - 1,
              children: []
            }, {
              at: path
            });
            external_slate_["Transforms"].liftNodes(editor, {
              at: path
            });
          });
        } else {
          external_slate_["Transforms"].setNodes(editor, {
            type: 'paragraph'
          });
          external_slate_["Transforms"].unwrapNodes(editor, {
            match: n => typeof n.type === 'string' && n.type.endsWith('-list'),
            split: true
          }); // deleteBackward(unit)
        }
      } else if (block.type === 'paragraph') {
        if (block.indent && block.indent > 0) {
          external_slate_["Transforms"].setNodes(editor, {
            indent: block.indent - 1
          }, {
            at: path
          });
          return;
        } else {
          deleteBackward(unit);
        }
      } else {
        external_slate_["Transforms"].setNodes(editor, {
          type: 'paragraph'
        });
      }

      return;
    } // end if at start


    deleteBackward(unit);
  };

  editor.deleteBackward = unit => {
    external_slate_["Editor"].withoutNormalizing(editor, () => {
      deleteBackward2(unit);
      fixList(editor);
    });
  };

  editor.deleteFragment = () => {
    // console.log("editor.deleteFragment:")
    deleteFragment();
  };

  editor.normalizeNode = entry => {
    if (external_slate_["Element"].isElement(entry[0]) && entry[0].type !== 'list-item') {
      const [pNode] = external_slate_["Editor"].parent(editor, entry[1]);

      if (isListNode(pNode)) {
        external_slate_["Transforms"].setNodes(editor, {
          type: 'list-item'
        }, {
          at: entry[1]
        });
      }
    }

    normalizeNode(entry);
  };

  return editor;
};

const beforeTextInBlock = editor => {
  const {
    selection
  } = editor;

  if (!selection) {
    return '';
  }

  const block = external_slate_["Editor"].above(editor, {
    match: n => external_slate_["Editor"].isBlock(editor, n)
  });
  const path = block ? block[1] : [];
  const start = external_slate_["Editor"].start(editor, path);
  const range = {
    anchor: external_slate_["Range"].start(editor.selection),
    focus: start
  };
  let beforeText = external_slate_["Editor"].string(editor, range);
  return beforeText;
}; //
// Transforms.delete =(
//     editor: Editor,
//     options: {
//     at?: Location
//     distance?: number
//     unit?: 'character' | 'word' | 'line' | 'block'
//     reverse?: boolean
//     hanging?: boolean
//     voids?: boolean
// } = {}
// ):void => {
//     Editor.withoutNormalizing(editor, () => {
//         const {
//             reverse = false,
//             unit = 'character',
//             distance = 1,
//             voids = false,
//         } = options
//         let { at = editor.selection, hanging = false } = options
//
//         if (!at) {
//             return
//         }
//
//         if (Range.isRange(at) && Range.isCollapsed(at)) {
//             at = at.anchor
//         }
//
//         if (Point.isPoint(at)) {
//             const furthestVoid = Editor.void(editor, { at, mode: 'highest' })
//
//             if (!voids && furthestVoid) {
//                 const [, voidPath] = furthestVoid
//                 at = voidPath
//             } else {
//                 const opts = { unit, distance }
//                 const target = reverse
//                     ? Editor.before(editor, at, opts) || Editor.start(editor, [])
//                     : Editor.after(editor, at, opts) || Editor.end(editor, [])
//                 at = { anchor: at, focus: target }
//                 hanging = true
//             }
//         }
//
//         if (Path.isPath(at)) {
//             Transforms.removeNodes(editor, { at, voids })
//             return
//         }
//
//         if (Range.isCollapsed(at)) {
//             return
//         }
//
//         if (!hanging) {
//             at = Editor.unhangRange(editor, at, { voids })
//         }
//
//         let [start, end] = Range.edges(at)
//         const startBlock = Editor.above(editor, {
//             match: n => Editor.isBlock(editor, n),
//             at: start,
//             voids,
//         })
//         const endBlock = Editor.above(editor, {
//             match: n => Editor.isBlock(editor, n),
//             at: end,
//             voids,
//         })
//         const isAcrossBlocks =
//             startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1])
//         const isSingleText = Path.equals(start.path, end.path)
//         const startVoid = voids
//             ? null
//             : Editor.void(editor, { at: start, mode: 'highest' })
//         const endVoid = voids
//             ? null
//             : Editor.void(editor, { at: end, mode: 'highest' })
//
//         // If the start or end points are inside an inline void, nudge them out.
//         if (startVoid) {
//             const before = Editor.before(editor, start)
//
//             if (
//                 before &&
//                 startBlock &&
//                 Path.isAncestor(startBlock[1], before.path)
//             ) {
//                 start = before
//             }
//         }
//
//         if (endVoid) {
//             const after = Editor.after(editor, end)
//
//             if (after && endBlock && Path.isAncestor(endBlock[1], after.path)) {
//                 end = after
//             }
//         }
//
//         // Get the highest nodes that are completely inside the range, as well as
//         // the start and end nodes.
//         const matches: NodeEntry[] = []
//         let lastPath: Path | undefined
//
//         for (const entry of Editor.nodes(editor, { at, voids })) {
//             const [node, path] = entry
//
//             if (lastPath && Path.compare(path, lastPath) === 0) {
//                 continue
//             }
//
//             if (
//                 (!voids && Editor.isVoid(editor, node)) ||
//                 (!Path.isCommon(path, start.path) && !Path.isCommon(path, end.path))
//             ) {
//                 matches.push(entry)
//                 lastPath = path
//             }
//         }
//
//         const pathRefs = Array.from(matches, ([, p]) => Editor.pathRef(editor, p))
//         const startRef = Editor.pointRef(editor, start)
//         const endRef = Editor.pointRef(editor, end)
//
//         if (!isSingleText && !startVoid) {
//             const point = startRef.current!
//             const [node] = Editor.leaf(editor, point)
//             const { path } = point
//             const { offset } = start
//             const text = node.text.slice(offset)
//             editor.apply({ type: 'remove_text', path, offset, text })
//         }
//
//         for (const pathRef of pathRefs) {
//             const path = pathRef.unref()!
//             console.log("remove not at:", path)
//             Transforms.removeNodes(editor, { at: path, voids })
//         }
//
//         if (!endVoid) {
//             const point = endRef.current!
//             const [node] = Editor.leaf(editor, point)
//             const { path } = point
//             const offset = isSingleText ? start.offset : 0
//             const text = node.text.slice(offset, end.offset)
//             editor.apply({ type: 'remove_text', path, offset, text })
//         }
//
//         if (
//             !isSingleText &&
//             isAcrossBlocks &&
//             endRef.current &&
//             startRef.current
//         ) {
//             console.log("merge node at:", endRef.current)
//             Transforms.mergeNodes(editor, {
//                 at: endRef.current,
//                 hanging: true,
//                 voids,
//             })
//         }
//
//         const point = endRef.unref() || startRef.unref()
//
//         if (options.at == null && point) {
//             Transforms.select(editor, point)
//         }
//     })
// }
//
// Transforms.mergeNodes = (
//     editor: Editor,
//     options: {
//     at?: Location
//     match?: (node: Node) => boolean
//     mode?: 'highest' | 'lowest'
//     hanging?: boolean
//     voids?: boolean
// } = {}
// ) => {
//     Editor.withoutNormalizing(editor, () => {
//         let { match, at = editor.selection } = options
//         const { hanging = false, voids = false, mode = 'lowest' } = options
//
//         if (!at) {
//             return
//         }
//
//         if (match == null) {
//             if (Path.isPath(at)) {
//                 const [parent] = Editor.parent(editor, at)
//                 match = n => parent.children.includes(n)
//             } else {
//                 match = n => Editor.isBlock(editor, n)
//             }
//         }
//
//         if (!hanging && Range.isRange(at)) {
//             at = Editor.unhangRange(editor, at)
//         }
//
//         if (Range.isRange(at)) {
//             if (Range.isCollapsed(at)) {
//                 at = at.anchor
//             } else {
//                 const [, end] = Range.edges(at)
//                 const pointRef = Editor.pointRef(editor, end)
//                 Transforms.delete(editor, { at })
//                 at = pointRef.unref()!
//
//                 if (options.at == null) {
//                     Transforms.select(editor, at)
//                 }
//             }
//         }
//
//         const [current] = Editor.nodes(editor, { at, match, voids, mode })
//         const prev = Editor.previous(editor, { at, match, voids, mode })
//
//         if (!current || !prev) {
//             return
//         }
//
//         const [node, path] = current
//         const [prevNode, prevPath] = prev
//
//         if (path.length === 0 || prevPath.length === 0) {
//             return
//         }
//
//         const newPath = Path.next(prevPath)
//         const commonPath = Path.common(path, prevPath)
//         const isPreviousSibling = Path.isSibling(path, prevPath)
//         const levels = Array.from(Editor.levels(editor, { at: path }), ([n]) => n)
//             .slice(commonPath.length)
//             .slice(0, -1)
//
//         // Determine if the merge will leave an ancestor of the path empty as a
//         // result, in which case we'll want to remove it after merging.
//         const emptyAncestor = Editor.above(editor, {
//             at: path,
//             mode: 'highest',
//             match: n =>
//                 levels.includes(n) && Element.isElement(n) && n.children.length === 1,
//         })
//
//         const emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1])
//         let properties
//         let position
//
//         // Ensure that the nodes are equivalent, and figure out what the position
//         // and extra properties of the merge will be.
//         if (Text.isText(node) && Text.isText(prevNode)) {
//             const { text, ...rest } = node
//             position = prevNode.text.length
//             properties = rest as Partial<Text>
//         } else if (Element.isElement(node) && Element.isElement(prevNode)) {
//             const { children, ...rest } = node
//             position = prevNode.children.length
//             properties = rest as Partial<Element>
//         } else {
//             throw new Error(
//                 `Cannot merge the node at path [${path}] with the previous sibling because it is not the same kind: ${JSON.stringify(
//                     node
//                 )} ${JSON.stringify(prevNode)}`
//             )
//         }
//
//         // If the node isn't already the next sibling of the previous node, move
//         // it so that it is before merging.
//         if (!isPreviousSibling) {
//             console.log("In merge, movNodes from ", path, "to", newPath)
//             Transforms.moveNodes(editor, { at: path, to: newPath, voids })
//         }
//
//         // If there was going to be an empty ancestor of the node that was merged,
//         // we remove it from the tree.
//         if (emptyRef) {
//             console.log("In merge, remove node at:", emptyRef.current)
//             Transforms.removeNodes(editor, { at: emptyRef.current!, voids })
//         }
//
//         // If the target node that we're merging with is empty, remove it instead
//         // of merging the two. This is a common rich text editor behavior to
//         // prevent losing formatting when deleting entire nodes when you have a
//         // hanging selection.
//         if (
//             (Element.isElement(prevNode) && Editor.isEmpty(editor, prevNode)) ||
//             (Text.isText(prevNode) && prevNode.text === '')
//         ) {
//             console.log("In merge, remove2", prevNode.type, "node at:", prevPath)
//             Transforms.removeNodes(editor, { at: prevPath, voids })
//         } else {
//             editor.apply({
//                 type: 'merge_node',
//                 path: newPath,
//                 position,
//                 properties,
//             })
//         }
//
//         if (emptyRef) {
//             emptyRef.unref()
//         }
//     })
// }
// CONCATENATED MODULE: ../src/renderer.tsx
var renderer_jsx = external_react_default.a.createElement;

function renderer_extends() { renderer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return renderer_extends.apply(this, arguments); }


const Element = ({
  attributes,
  children,
  element
}) => {
  switch (element.type) {
    case 'block-quote':
      return renderer_jsx("blockquote", attributes, children);

    case 'bulleted-list':
      attributes['data-indent'] = element.indent;
      return renderer_jsx("ul", renderer_extends({
        style: {
          paddingLeft: `calc(1em * ${element.indent})`
        }
      }, attributes), children);

    case 'heading-one':
      return renderer_jsx("h1", attributes, children);

    case 'heading-two':
      return renderer_jsx("h2", attributes, children);

    case 'list-item':
      return renderer_jsx("li", attributes, children);

    case 'numbered-list':
      attributes['data-indent'] = element.indent;
      attributes.start = element.start;
      return renderer_jsx("ol", renderer_extends({
        style: {
          paddingLeft: `calc(1em * ${element.indent})`
        }
      }, attributes), children);

    default:
      return renderer_jsx("p", renderer_extends({
        style: {
          paddingLeft: `calc(1em * ${element.indent})`
        }
      }, attributes), children);
  }
};
const Leaf = ({
  attributes,
  children,
  leaf
}) => {
  if (leaf.bold) {
    children = renderer_jsx("strong", null, children);
  }

  if (leaf.code) {
    children = renderer_jsx("code", null, children);
  }

  if (leaf.italic) {
    children = renderer_jsx("em", null, children);
  }

  if (leaf.underline) {
    children = renderer_jsx("u", null, children);
  }

  return renderer_jsx("span", attributes, children);
};
// CONCATENATED MODULE: ../src/onKeyDown.ts


const onKeyDown = () => (e, editor) => {
  let {
    selection
  } = editor;
  if (!selection) return;

  if (e.key === 'Tab') {
    e.preventDefault();
    onTab(editor); // Editor.insertText(editor,'\t')
  }
};
const onTab = editor => {
  external_slate_["Editor"].withoutNormalizing(editor, () => {
    const selection = editor.selection;
    const entry = external_slate_["Editor"].above(editor, {
      match: n => external_slate_["Editor"].isBlock(editor, n)
    });

    if (!entry) {
      return;
    }

    if (entry[0].type == 'list-item') {
      if (external_slate_["Range"].isCollapsed(selection)) {
        const path = entry[1];
        const start = external_slate_["Editor"].start(editor, path);
        const range = {
          anchor: selection.anchor,
          focus: start
        };
        let beforeText = external_slate_["Editor"].string(editor, range);

        if (beforeText.length) {
          external_slate_["Editor"].insertText(editor, '    ');
          return;
        }
      } // // move down with tab
      // const tab = !e.shiftKey;
      // if (tab) {


      moveListItemDown(editor, entry[1]);
      fixList(editor); // }
    } else {
      let p = selection.anchor;

      if (external_slate_["Range"].isExpanded(selection)) {
        p = external_slate_["Editor"].start(editor, p.path);
      }

      const ref = external_slate_["Editor"].rangeRef(editor, selection);
      external_slate_["Transforms"].select(editor, p);
      external_slate_["Editor"].insertText(editor, '    ');
      external_slate_["Transforms"].select(editor, ref.unref());
    }
  });
};

function moveListItemDown(editor, path) {
  let entry = external_slate_["Editor"].parent(editor, path);
  let node = entry[0];

  if (!node.type.endsWith('-list')) {
    throw new Error(`moveListItemDown, not a list at: ${entry[1]}`);
  }

  let ref = external_slate_["Editor"].pathRef(editor, path);
  let pre = external_slate_["Editor"].previous(editor, {
    at: path
  });
  let next = external_slate_["Editor"].next(editor, {
    at: path
  });

  if (pre) {
    external_slate_["Transforms"].splitNodes(editor, {
      at: path
    });
  }

  if (next) {
    external_slate_["Transforms"].splitNodes(editor, {
      at: external_slate_["Path"].next(ref.current)
    });
  }

  path = ref.unref();
  const indent = node.indent ? node.indent + 1 : 1;
  external_slate_["Transforms"].setNodes(editor, {
    indent
  }, {
    at: external_slate_["Path"].parent(path)
  });
}
// CONCATENATED MODULE: ../src/types.ts
let InlineType;

(function (InlineType) {
  InlineType[InlineType["link"] = 0] = "link";
})(InlineType || (InlineType = {}));
// CONCATENATED MODULE: ../src/index.ts




// CONCATENATED MODULE: ./examples/gyedit.tsx
var gyedit_jsx = external_react_default.a.createElement;






 // import '../pages/index.scss'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code'
};
const LIST_TYPES = ['numbered-list', 'bulleted-list'];

const GYEdit = () => {
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])(initialValue);
  const editor = Object(external_react_["useMemo"])(() => withMarkdown(Object(external_slate_history_["withHistory"])(Object(external_slate_react_["withReact"])(Object(external_slate_["createEditor"])()))), []);
  const renderElement = Object(external_react_["useCallback"])(props => gyedit_jsx(Element, props), []);
  const renderLeaf = Object(external_react_["useCallback"])(props => gyedit_jsx(Leaf, props), []);
  return gyedit_jsx(external_slate_react_["Slate"], {
    editor: editor,
    value: value,
    onChange: value => setValue(value)
  }, gyedit_jsx(Toolbar, null, gyedit_jsx(MarkButton, {
    format: "bold",
    icon: "format_bold"
  }), gyedit_jsx(MarkButton, {
    format: "italic",
    icon: "format_italic"
  }), gyedit_jsx(MarkButton, {
    format: "underline",
    icon: "format_underlined"
  }), gyedit_jsx(MarkButton, {
    format: "code",
    icon: "code"
  }), gyedit_jsx(BlockButton, {
    format: "heading-one",
    icon: "looks_one"
  }), gyedit_jsx(BlockButton, {
    format: "heading-two",
    icon: "looks_two"
  }), gyedit_jsx(BlockButton, {
    format: "block-quote",
    icon: "format_quote"
  }), gyedit_jsx(BlockButton, {
    format: "numbered-list",
    icon: "format_list_numbered"
  }), gyedit_jsx(BlockButton, {
    format: "bulleted-list",
    icon: "format_list_bulleted"
  })), gyedit_jsx(external_slate_react_["Editable"], {
    renderElement: renderElement,
    renderLeaf: renderLeaf,
    placeholder: "Enter some rich text\u2026",
    spellCheck: true,
    autoFocus: true,
    onKeyDown: event => {
      let done = false;

      for (const hotkey in HOTKEYS) {
        if (external_is_hotkey_default()(hotkey, event)) {
          event.preventDefault();
          const mark = HOTKEYS[hotkey];
          toggleMark(editor, mark);
          done = true;
        }
      }

      if (!done) {
        onKeyDown()(event, editor);
      }
    }
  }));
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);
  external_slate_["Transforms"].unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true
  });
  external_slate_["Transforms"].setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format
  });

  if (!isActive && isList) {
    const block = {
      type: format,
      children: []
    };
    external_slate_["Transforms"].wrapNodes(editor, block);
  }
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    external_slate_["Editor"].removeMark(editor, format);
  } else {
    external_slate_["Editor"].addMark(editor, format, true);
  }
};

const isBlockActive = (editor, format) => {
  const [match] = external_slate_["Editor"].nodes(editor, {
    match: n => n.type === format
  });
  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = external_slate_["Editor"].marks(editor);
  return marks ? marks[format] === true : false;
};

const BlockButton = ({
  format,
  icon
}) => {
  const editor = Object(external_slate_react_["useSlate"])();
  return gyedit_jsx(Button, {
    active: isBlockActive(editor, format),
    onMouseDown: event => {
      event.preventDefault();
      toggleBlock(editor, format);
    }
  }, gyedit_jsx(Icon, null, icon));
};

const MarkButton = ({
  format,
  icon
}) => {
  const editor = Object(external_slate_react_["useSlate"])();
  return gyedit_jsx(Button, {
    active: isMarkActive(editor, format),
    onMouseDown: event => {
      event.preventDefault();
      toggleMark(editor, format);
    }
  }, gyedit_jsx(Icon, null, icon));
};

const initialValue = [{
  type: 'numbered-list',
  children: [{
    type: 'list-item',
    children: [{
      text: "haha"
    }]
  }]
}, {
  type: 'bulleted-list',
  children: [{
    type: 'list-item',
    children: [{
      text: "hello"
    }]
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'This is editable '
  }, {
    text: 'rich',
    bold: true
  }, {
    text: ' text, '
  }, {
    text: 'much',
    italic: true
  }, {
    text: ' better than a '
  }, {
    text: '<textarea>',
    code: true
  }, {
    text: '!'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: "Since it's rich text, you can do things like turn a selection of text "
  }, {
    text: 'bold',
    bold: true
  }, {
    text: ', or add a semantically rendered block quote in the middle of the page, like this:'
  }]
}, {
  type: 'block-quote',
  children: [{
    type: 'paragraph',
    children: [{
      text: 'A wise quote.'
    }]
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'Try it out for yourself!'
  }]
}];
/* harmony default export */ var gyedit = (GYEdit);
// EXTERNAL MODULE: ./pages/api/index.ts
var api = __webpack_require__("I88V");

// CONCATENATED MODULE: ./pages/examples/[example].tsx
var _example_jsx = external_react_default.a.createElement;

function _example_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _example_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _example_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _example_extends() { _example_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _example_extends.apply(this, arguments); }







 // import CheckLists from '../../examples/check-lists'
// import EditableVoids from '../../examples/editable-voids'
// import Embeds from '../../examples/embeds'
// import ForcedLayout from '../../examples/forced-layout'
// import HoveringToolbar from '../../examples/hovering-toolbar'
// import HugeDocument from '../../examples/huge-document'
// import Images from '../../examples/images'
// import Links from '../../examples/links'
// import MarkdownPreview from '../../examples/markdown-preview'
// import MarkdownShortcuts from '../../examples/markdown-shortcuts'
// import Mentions from '../../examples/mentions'
// import PasteHtml from '../../examples/paste-html'
// import PlainText from '../../examples/plaintext'
// import ReadOnly from '../../examples/read-only'
// import RichText from '../../examples/richtext'
// import SearchHighlighting from '../../examples/search-highlighting'
// import CodeHighlighting from '../../examples/code-highlighting'
// import Tables from '../../examples/tables'

 // node


const EXAMPLES = [// ['Checklists', CheckLists, 'check-lists'],
// ['Editable Voids', EditableVoids, 'editable-voids'],
// ['Embeds', Embeds, 'embeds'],
// ['Forced Layout', ForcedLayout, 'forced-layout'],
['GYEdit', gyedit, 'gyedit'] // ['Hovering Toolbar', HoveringToolbar, 'hovering-toolbar'],
// ['Huge Document', HugeDocument, 'huge-document'],
// ['Images', Images, 'images'],
// ['Links', Links, 'links'],
// ['Markdown Preview', MarkdownPreview, 'markdown-preview'],
// ['Markdown Shortcuts', MarkdownShortcuts, 'markdown-shortcuts'],
// ['Mentions', Mentions, 'mentions'],
// ['Paste HTML', PasteHtml, 'paste-html'],
// ['Plain Text', PlainText, 'plaintext'],
// ['Read-only', ReadOnly, 'read-only'],
// ['Rich Text', RichText, 'richtext'],
// ['Search Highlighting', SearchHighlighting, 'search-highlighting'],
// ['Code Highlighting', CodeHighlighting, 'code-highlighting'],
// ['Tables', Tables, 'tables'],
];

const Header = props => _example_jsx("div", _example_extends({}, props, {
  className: external_emotion_["css"]`
      align-items: center;
      background: #000;
      color: #aaa;
      display: flex;
      height: 42px;
      position: relative;
      z-index: 1; /* To appear above the underlay */
    `
}));

const Title = props => _example_jsx("span", _example_extends({}, props, {
  className: external_emotion_["css"]`
      margin-left: 1em;
    `
}));

const LinkList = props => _example_jsx("div", _example_extends({}, props, {
  className: external_emotion_["css"]`
      margin-left: auto;
      margin-right: 1em;
    `
}));

const A = props => _example_jsx("a", _example_extends({}, props, {
  className: external_emotion_["css"]`
      margin-left: 1em;
      color: #aaa;
      text-decoration: none;

      &:hover {
        color: #fff;
        text-decoration: underline;
      }
    `
}));

const TabList = (_ref) => {
  let {
    isVisible
  } = _ref,
      props = _example_objectWithoutProperties(_ref, ["isVisible"]);

  return _example_jsx("div", _example_extends({}, props, {
    className: external_emotion_["css"]`
      background-color: #222;
      display: flex;
      flex-direction: column;
      overflow: auto;
      padding-top: 0.2em;
      position: absolute;
      transition: width 0.2s;
      width: ${isVisible ? '200px' : '0'};
      white-space: nowrap;
      max-height: 70vh;
      z-index: 1; /* To appear above the underlay */
    `
  }));
};

const TabListUnderlay = (_ref2) => {
  let {
    isVisible
  } = _ref2,
      props = _example_objectWithoutProperties(_ref2, ["isVisible"]);

  return _example_jsx("div", _example_extends({}, props, {
    className: external_emotion_["css"]`
      background-color: rgba(200, 200, 200, 0.8);
      display: ${isVisible ? 'block' : 'none'};
      height: 100%;
      top: 0;
      position: fixed;
      width: 100%;
    `
  }));
};

const TabButton = props => _example_jsx("span", _example_extends({}, props, {
  className: external_emotion_["css"]`
      margin-left: 0.8em;

      &:hover {
        cursor: pointer;
      }

      .material-icons {
        color: #aaa;
        font-size: 24px;
      }
    `
}));

const Tab = /*#__PURE__*/external_react_default.a.forwardRef((_ref3, ref) => {
  let {
    active,
    href
  } = _ref3,
      props = _example_objectWithoutProperties(_ref3, ["active", "href"]);

  return _example_jsx("a", _example_extends({
    ref: ref,
    href: href
  }, props, {
    className: external_emotion_["css"]`
        display: inline-block;
        margin-bottom: 0.2em;
        padding: 0.2em 1em;
        border-radius: 0.2em;
        text-decoration: none;
        color: ${active ? 'white' : '#777'};
        background: ${active ? '#333' : 'transparent'};

        &:hover {
          background: #333;
        }
      `
  }));
});

const Wrapper = (_ref4) => {
  let {
    className
  } = _ref4,
      props = _example_objectWithoutProperties(_ref4, ["className"]);

  return _example_jsx("div", _example_extends({}, props, {
    className: Object(external_emotion_["cx"])(className, external_emotion_["css"]`
        max-width: 42em;
        margin: 20px auto;
        padding: 20px;
      `)
  }));
};

const ExampleHeader = props => _example_jsx("div", _example_extends({}, props, {
  className: external_emotion_["css"]`
      align-items: center;
      background-color: #555;
      color: #ddd;
      display: flex;
      height: 42px;
      position: relative;
      z-index: 1; /* To appear above the underlay */
    `
}));

const ExampleTitle = props => _example_jsx("span", _example_extends({}, props, {
  className: external_emotion_["css"]`
      margin-left: 1em;
    `
}));

const ExampleContent = props => _example_jsx(Wrapper, _example_extends({}, props, {
  className: external_emotion_["css"]`
      background: #fff;
    ` + ' gy-content-editor'
}));

const Warning = props => _example_jsx(Wrapper, _example_extends({}, props, {
  className: external_emotion_["css"]`
      background: #fffae0;

      & > pre {
        background: #fbf1bd;
        white-space: pre;
        overflow-x: scroll;
        margin-bottom: 0;
      }
    `
}));

function ErrorFallback({
  error,
  resetErrorBoundary
}) {
  return _example_jsx("div", {
    role: "alert"
  }, _example_jsx("p", null, "Something went wrong:"), _example_jsx("pre", null, error.message), _example_jsx("button", {
    onClick: resetErrorBoundary
  }, "Try again"));
}

const ExamplePage = ({
  example
}) => {
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])();
  const {
    0: stacktrace,
    1: setStacktrace
  } = Object(external_react_["useState"])();
  const {
    0: showTabs,
    1: setShowTabs
  } = Object(external_react_["useState"])();
  const EXAMPLE = EXAMPLES.find(e => e[2] === example);
  const [name, Component, path] = EXAMPLE;
  return _example_jsx(external_react_error_boundary_["ErrorBoundary"], {
    FallbackComponent: ErrorFallback,
    onReset: () => {// reset the state of your app so the error doesn't happen again
    }
  }, _example_jsx("div", null, _example_jsx(head_default.a, null, _example_jsx("title", null, "GyEdit"), _example_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), _example_jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), _example_jsx("link", {
    rel: "stylesheet",
    href: "/index.css"
  }), _example_jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&subset=latin-ext"
  }), _example_jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  })), _example_jsx(Header, null, _example_jsx(Title, null, "Slate Examples"), _example_jsx(LinkList, null, _example_jsx(A, {
    href: "https://github.com/ianstormtaylor/slate"
  }, "GitHub"), _example_jsx(A, {
    href: "https://docs.slatejs.org/"
  }, "Docs"))), _example_jsx(ExampleHeader, null, _example_jsx(TabButton, {
    onClick: e => {
      e.stopPropagation();
      setShowTabs(!showTabs);
    }
  }, _example_jsx(Icon, null, "menu")), _example_jsx(ExampleTitle, null, name, _example_jsx(A, {
    href: `https://github.com/ianstormtaylor/slate/blob/master/site/examples/${path}.tsx`
  }, "(View Source)"))), _example_jsx(TabList, {
    isVisible: showTabs
  }, EXAMPLES.map(([n,, p]) => _example_jsx(link_default.a, {
    key: p,
    href: "/examples/[example]",
    as: `/examples/${p}`,
    passHref: true
  }, _example_jsx(Tab, {
    onClick: () => setShowTabs(false)
  }, n)))), error ? _example_jsx(Warning, null, _example_jsx("p", null, "An error was thrown by one of the example's React components!"), _example_jsx("pre", null, _example_jsx("code", null, error.stack, '\n', stacktrace))) : _example_jsx(ExampleContent, null, _example_jsx(Component, null)), _example_jsx(TabListUnderlay, {
    isVisible: showTabs,
    onClick: () => setShowTabs(false)
  })));
}; // Disable SSR because it results in a double rendering which makes debugging
// examples more challenging. No idea how any of this works.


const NoSsrExamplePage = dynamic_default()(() => Promise.resolve(ExamplePage), {
  ssr: false
});
async function getStaticPaths() {
  const paths = Object(api["getAllExamples"])();
  return {
    paths: paths.map(path => ({
      params: {
        example: path
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  return {
    props: {
      example: params.example
    }
  };
}
/* harmony default export */ var _example_ = __webpack_exports__["default"] = (NoSsrExamplePage);

/***/ }),

/***/ "a4i1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("Plc0");

var _denormalizePagePath = __webpack_require__("yExG");

var _mitt = _interopRequireDefault(__webpack_require__("Jxiz"));

var _utils = __webpack_require__("z4BS");

var _isDynamic = __webpack_require__("BCwt");

var _parseRelativeUrl = __webpack_require__("eU9b");

var _querystring = __webpack_require__("PsvV");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("lxQX"));

var _routeMatcher = __webpack_require__("VOyh");

var _routeRegex = __webpack_require__("BukW");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "bBV7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("a4i1"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("/3ze"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "e+GP":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "eLVN":
/***/ (function(module, exports) {

module.exports = require("slate-history");

/***/ }),

/***/ "eU9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("z4BS");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "fZjU":
/***/ (function(module, exports) {

module.exports = require("slate-react");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "lxQX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "vdEC":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yExG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "z4BS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("Wecs");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ })

/******/ });