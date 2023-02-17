module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@americanexpress/one-app-bundler/webpack/loaders/ssr-css-loader/css-base.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@americanexpress/one-app-bundler/webpack/loaders/ssr-css-loader/css-base.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Copyright 2019 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable prefer-arrow-callback, object-shorthand --
uglifyjs expects ES5, disable newer syntax/features */

const styleList = [];

// css-loader gets an array of [module.id, style string]
function push(s) {
  styleList.push(s);
}
function getFullSheet() {
  return styleList.map(function stylesEntry(s) {
    return s[1];
  }).join('\n');
}
module.exports = function getCssBase( /* useSourceMap */
) {
  return {
    push: push,
    getFullSheet: getFullSheet
  };
};

/* eslint-enable prefer-arrow-callback, object-shorthand -- disables require enables */

/***/ }),

/***/ "./node_modules/content-security-policy-builder/dist/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/content-security-policy-builder/dist/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (_a) {
  var directives = _a.directives;
  var namesSeen = new Set();
  var result = [];
  Object.keys(directives).forEach(function (originalName) {
    var name = originalName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    if (namesSeen.has(name)) {
      throw new Error("".concat(originalName, " is specified more than once"));
    }
    namesSeen.add(name);
    var value = directives[originalName];
    if (Array.isArray(value)) {
      value = value.join(" ");
    } else if (value === true) {
      value = "";
    }
    if (value) {
      result.push("".concat(name, " ").concat(value));
    } else if (value !== false) {
      result.push(name);
    }
  });
  return result.join("; ");
};

/***/ }),

/***/ "./src/appConfig.js":
/*!**************************!*\
  !*** ./src/appConfig.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _csp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csp */ "./src/csp.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  csp: _csp__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/childRoutes.jsx":
/*!*****************************!*\
  !*** ./src/childRoutes.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _americanexpress_one_app_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @americanexpress/one-app-router */ "@americanexpress/one-app-router");
/* harmony import */ var _americanexpress_one_app_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_americanexpress_one_app_router__WEBPACK_IMPORTED_MODULE_1__);


const childRoutes = () => [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_americanexpress_one_app_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/"
})];
/* harmony default export */ __webpack_exports__["default"] = (childRoutes);

/***/ }),

/***/ "./src/components/HelloOneapp.jsx":
/*!****************************************!*\
  !*** ./src/components/HelloOneapp.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _childRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../childRoutes */ "./src/childRoutes.jsx");


const HelloOneapp = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to One App!"));

// Read about childRoutes:
// https://github.com/americanexpress/one-app/blob/main/docs/api/modules/Routing.md#childroutes
HelloOneapp.childRoutes = _childRoutes__WEBPACK_IMPORTED_MODULE_1__["default"];

// Read about appConfig:
// https://github.com/americanexpress/one-app/blob/main/docs/api/modules/App-Configuration.md
/* istanbul ignore next */
if (true) {
  // eslint-disable-next-line global-require
  HelloOneapp.appConfig = __webpack_require__(/*! ../appConfig */ "./src/appConfig.js").default;
}
/* harmony default export */ __webpack_exports__["default"] = (HelloOneapp);

/***/ }),

/***/ "./src/csp.js":
/*!********************!*\
  !*** ./src/csp.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var content_security_policy_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! content-security-policy-builder */ "./node_modules/content-security-policy-builder/dist/index.js");
/* harmony import */ var content_security_policy_builder__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(content_security_policy_builder__WEBPACK_IMPORTED_MODULE_0__);


// Read about csp:
// https://github.com/americanexpress/one-app/blob/main/docs/api/modules/App-Configuration.md#csp
/* harmony default export */ __webpack_exports__["default"] = (content_security_policy_builder__WEBPACK_IMPORTED_MODULE_0___default()({
  directives: {
    reportUri: process.env.ONE_CLIENT_CSP_REPORTING_URL,
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    imgSrc: ["'self'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    connectSrc: ["'self'"]
  }
}));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_HelloOneapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HelloOneapp */ "./src/components/HelloOneapp.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_components_HelloOneapp__WEBPACK_IMPORTED_MODULE_0__["default"]);
;
if (true) {
  _components_HelloOneapp__WEBPACK_IMPORTED_MODULE_0__["default"].appConfig = Object.assign({}, _components_HelloOneapp__WEBPACK_IMPORTED_MODULE_0__["default"].appConfig, {
    appCompatibility: "^5.0.0"
  });
}
;
_components_HelloOneapp__WEBPACK_IMPORTED_MODULE_0__["default"].__holocron_module_meta_data__ = {
  version: '1.0.0'
};
__webpack_exports__.default.ssrStyles = __webpack_require__(/*! ./node_modules/@americanexpress/one-app-bundler/webpack/loaders/ssr-css-loader/css-base.js */ "./node_modules/@americanexpress/one-app-bundler/webpack/loaders/ssr-css-loader/css-base.js")();

/***/ }),

/***/ "@americanexpress/one-app-router":
/*!*************************************************************************************!*\
  !*** external {"var":"OneAppRouter","commonjs2":"@americanexpress/one-app-router"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@americanexpress/one-app-router");

/***/ }),

/***/ "react":
/*!****************************************************!*\
  !*** external {"var":"React","commonjs2":"react"} ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ })["default"];
//# sourceMappingURL=hello-oneapp.node.js.map