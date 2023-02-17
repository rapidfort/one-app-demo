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

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/262.js":
/*!************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/262.js ***!
  \************************************************************/
/*! exports provided: ToString, ToNumber, TimeClip, ToObject, SameValue, ArrayCreate, HasOwnProperty, Type, Day, WeekDay, DayFromYear, TimeFromYear, YearFromTime, DaysInYear, DayWithinYear, InLeapYear, MonthFromTime, DateFromTime, HourFromTime, MinFromTime, SecFromTime, OrdinaryHasInstance, msFromTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToString", function() { return ToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToNumber", function() { return ToNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeClip", function() { return TimeClip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToObject", function() { return ToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SameValue", function() { return SameValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayCreate", function() { return ArrayCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasOwnProperty", function() { return HasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day", function() { return Day; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekDay", function() { return WeekDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayFromYear", function() { return DayFromYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFromYear", function() { return TimeFromYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearFromTime", function() { return YearFromTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaysInYear", function() { return DaysInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayWithinYear", function() { return DayWithinYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InLeapYear", function() { return InLeapYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthFromTime", function() { return MonthFromTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFromTime", function() { return DateFromTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HourFromTime", function() { return HourFromTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinFromTime", function() { return MinFromTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecFromTime", function() { return SecFromTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdinaryHasInstance", function() { return OrdinaryHasInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msFromTime", function() { return msFromTime; });
/**
 * https://tc39.es/ecma262/#sec-tostring
 */
function ToString(o) {
  // Only symbol is irregular...
  if (typeof o === 'symbol') {
    throw TypeError('Cannot convert a Symbol value to a string');
  }
  return String(o);
}
/**
 * https://tc39.es/ecma262/#sec-tonumber
 * @param val
 */
function ToNumber(val) {
  if (val === undefined) {
    return NaN;
  }
  if (val === null) {
    return +0;
  }
  if (typeof val === 'boolean') {
    return val ? 1 : +0;
  }
  if (typeof val === 'number') {
    return val;
  }
  if (typeof val === 'symbol' || typeof val === 'bigint') {
    throw new TypeError('Cannot convert symbol/bigint to number');
  }
  return Number(val);
}
/**
 * https://tc39.es/ecma262/#sec-tointeger
 * @param n
 */
function ToInteger(n) {
  var number = ToNumber(n);
  if (isNaN(number) || SameValue(number, -0)) {
    return 0;
  }
  if (isFinite(number)) {
    return number;
  }
  var integer = Math.floor(Math.abs(number));
  if (number < 0) {
    integer = -integer;
  }
  if (SameValue(integer, -0)) {
    return 0;
  }
  return integer;
}
/**
 * https://tc39.es/ecma262/#sec-timeclip
 * @param time
 */
function TimeClip(time) {
  if (!isFinite(time)) {
    return NaN;
  }
  if (Math.abs(time) > 8.64 * 1e15) {
    return NaN;
  }
  return ToInteger(time);
}
/**
 * https://tc39.es/ecma262/#sec-toobject
 * @param arg
 */
function ToObject(arg) {
  if (arg == null) {
    throw new TypeError('undefined/null cannot be converted to object');
  }
  return Object(arg);
}
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#sec-samevalue
 * @param x
 * @param y
 */
function SameValue(x, y) {
  if (Object.is) {
    return Object.is(x, y);
  }
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  }
  // Step 6.a: NaN == NaN
  return x !== x && y !== y;
}
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#sec-arraycreate
 * @param len
 */
function ArrayCreate(len) {
  return new Array(len);
}
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#sec-hasownproperty
 * @param o
 * @param prop
 */
function HasOwnProperty(o, prop) {
  return Object.prototype.hasOwnProperty.call(o, prop);
}
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#sec-type
 * @param x
 */
function Type(x) {
  if (x === null) {
    return 'Null';
  }
  if (typeof x === 'undefined') {
    return 'Undefined';
  }
  if (typeof x === 'function' || typeof x === 'object') {
    return 'Object';
  }
  if (typeof x === 'number') {
    return 'Number';
  }
  if (typeof x === 'boolean') {
    return 'Boolean';
  }
  if (typeof x === 'string') {
    return 'String';
  }
  if (typeof x === 'symbol') {
    return 'Symbol';
  }
  if (typeof x === 'bigint') {
    return 'BigInt';
  }
}
var MS_PER_DAY = 86400000;
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#eqn-modulo
 * @param x
 * @param y
 * @return k of the same sign as y
 */
function mod(x, y) {
  return x - Math.floor(x / y) * y;
}
/**
 * https://tc39.es/ecma262/#eqn-Day
 * @param t
 */
function Day(t) {
  return Math.floor(t / MS_PER_DAY);
}
/**
 * https://tc39.es/ecma262/#sec-week-day
 * @param t
 */
function WeekDay(t) {
  return mod(Day(t) + 4, 7);
}
/**
 * https://tc39.es/ecma262/#sec-year-number
 * @param y
 */
function DayFromYear(y) {
  return Date.UTC(y, 0) / MS_PER_DAY;
}
/**
 * https://tc39.es/ecma262/#sec-year-number
 * @param y
 */
function TimeFromYear(y) {
  return Date.UTC(y, 0);
}
/**
 * https://tc39.es/ecma262/#sec-year-number
 * @param t
 */
function YearFromTime(t) {
  return new Date(t).getUTCFullYear();
}
function DaysInYear(y) {
  if (y % 4 !== 0) {
    return 365;
  }
  if (y % 100 !== 0) {
    return 366;
  }
  if (y % 400 !== 0) {
    return 365;
  }
  return 366;
}
function DayWithinYear(t) {
  return Day(t) - DayFromYear(YearFromTime(t));
}
function InLeapYear(t) {
  return DaysInYear(YearFromTime(t)) === 365 ? 0 : 1;
}
/**
 * https://tc39.es/ecma262/#sec-month-number
 * @param t
 */
function MonthFromTime(t) {
  var dwy = DayWithinYear(t);
  var leap = InLeapYear(t);
  if (dwy >= 0 && dwy < 31) {
    return 0;
  }
  if (dwy < 59 + leap) {
    return 1;
  }
  if (dwy < 90 + leap) {
    return 2;
  }
  if (dwy < 120 + leap) {
    return 3;
  }
  if (dwy < 151 + leap) {
    return 4;
  }
  if (dwy < 181 + leap) {
    return 5;
  }
  if (dwy < 212 + leap) {
    return 6;
  }
  if (dwy < 243 + leap) {
    return 7;
  }
  if (dwy < 273 + leap) {
    return 8;
  }
  if (dwy < 304 + leap) {
    return 9;
  }
  if (dwy < 334 + leap) {
    return 10;
  }
  if (dwy < 365 + leap) {
    return 11;
  }
  throw new Error('Invalid time');
}
function DateFromTime(t) {
  var dwy = DayWithinYear(t);
  var mft = MonthFromTime(t);
  var leap = InLeapYear(t);
  if (mft === 0) {
    return dwy + 1;
  }
  if (mft === 1) {
    return dwy - 30;
  }
  if (mft === 2) {
    return dwy - 58 - leap;
  }
  if (mft === 3) {
    return dwy - 89 - leap;
  }
  if (mft === 4) {
    return dwy - 119 - leap;
  }
  if (mft === 5) {
    return dwy - 150 - leap;
  }
  if (mft === 6) {
    return dwy - 180 - leap;
  }
  if (mft === 7) {
    return dwy - 211 - leap;
  }
  if (mft === 8) {
    return dwy - 242 - leap;
  }
  if (mft === 9) {
    return dwy - 272 - leap;
  }
  if (mft === 10) {
    return dwy - 303 - leap;
  }
  if (mft === 11) {
    return dwy - 333 - leap;
  }
  throw new Error('Invalid time');
}
var HOURS_PER_DAY = 24;
var MINUTES_PER_HOUR = 60;
var SECONDS_PER_MINUTE = 60;
var MS_PER_SECOND = 1e3;
var MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE;
var MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;
function HourFromTime(t) {
  return mod(Math.floor(t / MS_PER_HOUR), HOURS_PER_DAY);
}
function MinFromTime(t) {
  return mod(Math.floor(t / MS_PER_MINUTE), MINUTES_PER_HOUR);
}
function SecFromTime(t) {
  return mod(Math.floor(t / MS_PER_SECOND), SECONDS_PER_MINUTE);
}
function IsCallable(fn) {
  return typeof fn === 'function';
}
/**
 * The abstract operation OrdinaryHasInstance implements
 * the default algorithm for determining if an object O
 * inherits from the instance object inheritance path
 * provided by constructor C.
 * @param C class
 * @param O object
 * @param internalSlots internalSlots
 */
function OrdinaryHasInstance(C, O, internalSlots) {
  if (!IsCallable(C)) {
    return false;
  }
  if (internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction) {
    var BC = internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction;
    return O instanceof BC;
  }
  if (typeof O !== 'object') {
    return false;
  }
  var P = C.prototype;
  if (typeof P !== 'object') {
    throw new TypeError('OrdinaryHasInstance called on an object with an invalid prototype property.');
  }
  return Object.prototype.isPrototypeOf.call(P, O);
}
function msFromTime(t) {
  return mod(t, MS_PER_SECOND);
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeLocaleList.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeLocaleList.js ***!
  \*******************************************************************************/
/*! exports provided: CanonicalizeLocaleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanonicalizeLocaleList", function() { return CanonicalizeLocaleList; });
/**
 * http://ecma-international.org/ecma-402/7.0/index.html#sec-canonicalizelocalelist
 * @param locales
 */
function CanonicalizeLocaleList(locales) {
  // TODO
  return Intl.getCanonicalLocales(locales);
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeTimeZoneName.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeTimeZoneName.js ***!
  \*********************************************************************************/
/*! exports provided: CanonicalizeTimeZoneName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanonicalizeTimeZoneName", function() { return CanonicalizeTimeZoneName; });
/**
 * https://tc39.es/ecma402/#sec-canonicalizetimezonename
 * @param tz
 */
function CanonicalizeTimeZoneName(tz, _a) {
  var tzData = _a.tzData,
    uppercaseLinks = _a.uppercaseLinks;
  var uppercasedTz = tz.toUpperCase();
  var uppercasedZones = Object.keys(tzData).reduce(function (all, z) {
    all[z.toUpperCase()] = z;
    return all;
  }, {});
  var ianaTimeZone = uppercaseLinks[uppercasedTz] || uppercasedZones[uppercasedTz];
  if (ianaTimeZone === 'Etc/UTC' || ianaTimeZone === 'Etc/GMT') {
    return 'UTC';
  }
  return ianaTimeZone;
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/CoerceOptionsToObject.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/CoerceOptionsToObject.js ***!
  \******************************************************************************/
/*! exports provided: CoerceOptionsToObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoerceOptionsToObject", function() { return CoerceOptionsToObject; });
/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");

/**
 * https://tc39.es/ecma402/#sec-coerceoptionstoobject
 * @param options
 * @returns
 */
function CoerceOptionsToObject(options) {
  if (typeof options === 'undefined') {
    return Object.create(null);
  }
  return Object(_262__WEBPACK_IMPORTED_MODULE_0__["ToObject"])(options);
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/DefaultNumberOption.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/DefaultNumberOption.js ***!
  \****************************************************************************/
/*! exports provided: DefaultNumberOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultNumberOption", function() { return DefaultNumberOption; });
function DefaultNumberOption(val, min, max, fallback) {
  if (val !== undefined) {
    val = Number(val);
    if (isNaN(val) || val < min || val > max) {
      throw new RangeError("".concat(val, " is outside of range [").concat(min, ", ").concat(max, "]"));
    }
    return Math.floor(val);
  }
  return fallback;
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/GetNumberOption.js":
/*!************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/GetNumberOption.js ***!
  \************************************************************************/
/*! exports provided: GetNumberOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNumberOption", function() { return GetNumberOption; });
/* harmony import */ var _DefaultNumberOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultNumberOption */ "./node_modules/@formatjs/ecma402-abstract/lib/DefaultNumberOption.js");
/**
 * https://tc39.es/ecma402/#sec-getnumberoption
 * @param options
 * @param property
 * @param min
 * @param max
 * @param fallback
 */

function GetNumberOption(options, property, minimum, maximum, fallback) {
  var val = options[property];
  // @ts-expect-error
  return Object(_DefaultNumberOption__WEBPACK_IMPORTED_MODULE_0__["DefaultNumberOption"])(val, minimum, maximum, fallback);
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/GetOption.js":
/*!******************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/GetOption.js ***!
  \******************************************************************/
/*! exports provided: GetOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOption", function() { return GetOption; });
/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");

/**
 * https://tc39.es/ecma402/#sec-getoption
 * @param opts
 * @param prop
 * @param type
 * @param values
 * @param fallback
 */
function GetOption(opts, prop, type, values, fallback) {
  if (typeof opts !== 'object') {
    throw new TypeError('Options must be an object');
  }
  var value = opts[prop];
  if (value !== undefined) {
    if (type !== 'boolean' && type !== 'string') {
      throw new TypeError('invalid type');
    }
    if (type === 'boolean') {
      value = Boolean(value);
    }
    if (type === 'string') {
      value = Object(_262__WEBPACK_IMPORTED_MODULE_0__["ToString"])(value);
    }
    if (values !== undefined && !values.filter(function (val) {
      return val == value;
    }).length) {
      throw new RangeError("".concat(value, " is not within ").concat(values.join(', ')));
    }
    return value;
  }
  return fallback;
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/GetOptionsObject.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/GetOptionsObject.js ***!
  \*************************************************************************/
/*! exports provided: GetOptionsObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOptionsObject", function() { return GetOptionsObject; });
/**
 * https://tc39.es/ecma402/#sec-getoptionsobject
 * @param options
 * @returns
 */
function GetOptionsObject(options) {
  if (typeof options === 'undefined') {
    return Object.create(null);
  }
  if (typeof options === 'object') {
    return options;
  }
  throw new TypeError('Options must be an object');
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js ***!
  \*****************************************************************************************/
/*! exports provided: SANCTIONED_UNITS, removeUnitNamespace, SIMPLE_UNITS, IsSanctionedSimpleUnitIdentifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANCTIONED_UNITS", function() { return SANCTIONED_UNITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUnitNamespace", function() { return removeUnitNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMPLE_UNITS", function() { return SIMPLE_UNITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsSanctionedSimpleUnitIdentifier", function() { return IsSanctionedSimpleUnitIdentifier; });
/**
 * https://tc39.es/ecma402/#table-sanctioned-simple-unit-identifiers
 */
var SANCTIONED_UNITS = ['angle-degree', 'area-acre', 'area-hectare', 'concentr-percent', 'digital-bit', 'digital-byte', 'digital-gigabit', 'digital-gigabyte', 'digital-kilobit', 'digital-kilobyte', 'digital-megabit', 'digital-megabyte', 'digital-petabyte', 'digital-terabit', 'digital-terabyte', 'duration-day', 'duration-hour', 'duration-millisecond', 'duration-minute', 'duration-month', 'duration-second', 'duration-week', 'duration-year', 'length-centimeter', 'length-foot', 'length-inch', 'length-kilometer', 'length-meter', 'length-mile-scandinavian', 'length-mile', 'length-millimeter', 'length-yard', 'mass-gram', 'mass-kilogram', 'mass-ounce', 'mass-pound', 'mass-stone', 'temperature-celsius', 'temperature-fahrenheit', 'volume-fluid-ounce', 'volume-gallon', 'volume-liter', 'volume-milliliter'];
// In CLDR, the unit name always follows the form `namespace-unit` pattern.
// For example: `digital-bit` instead of `bit`. This function removes the namespace prefix.
function removeUnitNamespace(unit) {
  return unit.slice(unit.indexOf('-') + 1);
}
/**
 * https://tc39.es/ecma402/#table-sanctioned-simple-unit-identifiers
 */
var SIMPLE_UNITS = SANCTIONED_UNITS.map(removeUnitNamespace);
/**
 * https://tc39.es/ecma402/#sec-issanctionedsimpleunitidentifier
 */
function IsSanctionedSimpleUnitIdentifier(unitIdentifier) {
  return SIMPLE_UNITS.indexOf(unitIdentifier) > -1;
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/IsValidTimeZoneName.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/IsValidTimeZoneName.js ***!
  \****************************************************************************/
/*! exports provided: IsValidTimeZoneName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsValidTimeZoneName", function() { return IsValidTimeZoneName; });
/**
 * https://tc39.es/ecma402/#sec-isvalidtimezonename
 * @param tz
 * @param implDetails implementation details
 */
function IsValidTimeZoneName(tz, _a) {
  var tzData = _a.tzData,
    uppercaseLinks = _a.uppercaseLinks;
  var uppercasedTz = tz.toUpperCase();
  var zoneNames = new Set();
  var linkNames = new Set();
  Object.keys(tzData).map(function (z) {
    return z.toUpperCase();
  }).forEach(function (z) {
    return zoneNames.add(z);
  });
  Object.keys(uppercaseLinks).forEach(function (linkName) {
    linkNames.add(linkName.toUpperCase());
    zoneNames.add(uppercaseLinks[linkName].toUpperCase());
  });
  return zoneNames.has(uppercasedTz) || linkNames.has(uppercasedTz);
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedCurrencyCode.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedCurrencyCode.js ***!
  \*********************************************************************************/
/*! exports provided: IsWellFormedCurrencyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsWellFormedCurrencyCode", function() { return IsWellFormedCurrencyCode; });
/**
 * This follows https://tc39.es/ecma402/#sec-case-sensitivity-and-case-mapping
 * @param str string to convert
 */
function toUpperCase(str) {
  return str.replace(/([a-z])/g, function (_, c) {
    return c.toUpperCase();
  });
}
var NOT_A_Z_REGEX = /[^A-Z]/;
/**
 * https://tc39.es/ecma402/#sec-iswellformedcurrencycode
 */
function IsWellFormedCurrencyCode(currency) {
  currency = toUpperCase(currency);
  if (currency.length !== 3) {
    return false;
  }
  if (NOT_A_Z_REGEX.test(currency)) {
    return false;
  }
  return true;
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedUnitIdentifier.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedUnitIdentifier.js ***!
  \***********************************************************************************/
/*! exports provided: IsWellFormedUnitIdentifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsWellFormedUnitIdentifier", function() { return IsWellFormedUnitIdentifier; });
/* harmony import */ var _IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IsSanctionedSimpleUnitIdentifier */ "./node_modules/@formatjs/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js");

/**
 * This follows https://tc39.es/ecma402/#sec-case-sensitivity-and-case-mapping
 * @param str string to convert
 */
function toLowerCase(str) {
  return str.replace(/([A-Z])/g, function (_, c) {
    return c.toLowerCase();
  });
}
/**
 * https://tc39.es/ecma402/#sec-iswellformedunitidentifier
 * @param unit
 */
function IsWellFormedUnitIdentifier(unit) {
  unit = toLowerCase(unit);
  if (Object(_IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_0__["IsSanctionedSimpleUnitIdentifier"])(unit)) {
    return true;
  }
  var units = unit.split('-per-');
  if (units.length !== 2) {
    return false;
  }
  var numerator = units[0],
    denominator = units[1];
  if (!Object(_IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_0__["IsSanctionedSimpleUnitIdentifier"])(numerator) || !Object(_IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_0__["IsSanctionedSimpleUnitIdentifier"])(denominator)) {
    return false;
  }
  return true;
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponent.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponent.js ***!
  \*************************************************************************************/
/*! exports provided: ComputeExponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputeExponent", function() { return ComputeExponent; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");
/* harmony import */ var _ComputeExponentForMagnitude__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputeExponentForMagnitude */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponentForMagnitude.js");
/* harmony import */ var _FormatNumericToString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormatNumericToString */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToString.js");



/**
 * The abstract operation ComputeExponent computes an exponent (power of ten) by which to scale x
 * according to the number formatting settings. It handles cases such as 999 rounding up to 1000,
 * requiring a different exponent.
 *
 * NOT IN SPEC: it returns [exponent, magnitude].
 */
function ComputeExponent(numberFormat, x, _a) {
  var getInternalSlots = _a.getInternalSlots;
  if (x === 0) {
    return [0, 0];
  }
  if (x < 0) {
    x = -x;
  }
  var magnitude = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getMagnitude"])(x);
  var exponent = Object(_ComputeExponentForMagnitude__WEBPACK_IMPORTED_MODULE_1__["ComputeExponentForMagnitude"])(numberFormat, magnitude, {
    getInternalSlots: getInternalSlots
  });
  // Preserve more precision by doing multiplication when exponent is negative.
  x = exponent < 0 ? x * Math.pow(10, -exponent) : x / Math.pow(10, exponent);
  var formatNumberResult = Object(_FormatNumericToString__WEBPACK_IMPORTED_MODULE_2__["FormatNumericToString"])(getInternalSlots(numberFormat), x);
  if (formatNumberResult.roundedNumber === 0) {
    return [exponent, magnitude];
  }
  var newMagnitude = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getMagnitude"])(formatNumberResult.roundedNumber);
  if (newMagnitude === magnitude - exponent) {
    return [exponent, magnitude];
  }
  return [Object(_ComputeExponentForMagnitude__WEBPACK_IMPORTED_MODULE_1__["ComputeExponentForMagnitude"])(numberFormat, magnitude + 1, {
    getInternalSlots: getInternalSlots
  }), magnitude + 1];
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponentForMagnitude.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponentForMagnitude.js ***!
  \*************************************************************************************************/
/*! exports provided: ComputeExponentForMagnitude */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputeExponentForMagnitude", function() { return ComputeExponentForMagnitude; });
/**
 * The abstract operation ComputeExponentForMagnitude computes an exponent by which to scale a
 * number of the given magnitude (power of ten of the most significant digit) according to the
 * locale and the desired notation (scientific, engineering, or compact).
 */
function ComputeExponentForMagnitude(numberFormat, magnitude, _a) {
  var getInternalSlots = _a.getInternalSlots;
  var internalSlots = getInternalSlots(numberFormat);
  var notation = internalSlots.notation,
    dataLocaleData = internalSlots.dataLocaleData,
    numberingSystem = internalSlots.numberingSystem;
  switch (notation) {
    case 'standard':
      return 0;
    case 'scientific':
      return magnitude;
    case 'engineering':
      return Math.floor(magnitude / 3) * 3;
    default:
      {
        // Let exponent be an implementation- and locale-dependent (ILD) integer by which to scale a
        // number of the given magnitude in compact notation for the current locale.
        var compactDisplay = internalSlots.compactDisplay,
          style = internalSlots.style,
          currencyDisplay = internalSlots.currencyDisplay;
        var thresholdMap = void 0;
        if (style === 'currency' && currencyDisplay !== 'name') {
          var currency = dataLocaleData.numbers.currency[numberingSystem] || dataLocaleData.numbers.currency[dataLocaleData.numbers.nu[0]];
          thresholdMap = currency.short;
        } else {
          var decimal = dataLocaleData.numbers.decimal[numberingSystem] || dataLocaleData.numbers.decimal[dataLocaleData.numbers.nu[0]];
          thresholdMap = compactDisplay === 'long' ? decimal.long : decimal.short;
        }
        if (!thresholdMap) {
          return 0;
        }
        var num = String(Math.pow(10, magnitude));
        var thresholds = Object.keys(thresholdMap); // TODO: this can be pre-processed
        if (num < thresholds[0]) {
          return 0;
        }
        if (num > thresholds[thresholds.length - 1]) {
          return thresholds[thresholds.length - 1].length - 1;
        }
        var i = thresholds.indexOf(num);
        if (i === -1) {
          return 0;
        }
        // See https://unicode.org/reports/tr35/tr35-numbers.html#Compact_Number_Formats
        // Special handling if the pattern is precisely `0`.
        var magnitudeKey = thresholds[i];
        // TODO: do we need to handle plural here?
        var compactPattern = thresholdMap[magnitudeKey].other;
        if (compactPattern === '0') {
          return 0;
        }
        // Example: in zh-TW, `10000000` maps to `0000萬`. So we need to return 8 - 4 = 4 here.
        return magnitudeKey.length - thresholdMap[magnitudeKey].other.match(/0+/)[0].length;
      }
  }
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/CurrencyDigits.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/CurrencyDigits.js ***!
  \************************************************************************************/
/*! exports provided: CurrencyDigits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyDigits", function() { return CurrencyDigits; });
/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");

/**
 * https://tc39.es/ecma402/#sec-currencydigits
 */
function CurrencyDigits(c, _a) {
  var currencyDigitsData = _a.currencyDigitsData;
  return Object(_262__WEBPACK_IMPORTED_MODULE_0__["HasOwnProperty"])(currencyDigitsData, c) ? currencyDigitsData[c] : 2;
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToParts.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToParts.js ***!
  \******************************************************************************************/
/*! exports provided: FormatNumericToParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatNumericToParts", function() { return FormatNumericToParts; });
/* harmony import */ var _PartitionNumberPattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartitionNumberPattern */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/PartitionNumberPattern.js");
/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");


function FormatNumericToParts(nf, x, implDetails) {
  var parts = Object(_PartitionNumberPattern__WEBPACK_IMPORTED_MODULE_0__["PartitionNumberPattern"])(nf, x, implDetails);
  var result = Object(_262__WEBPACK_IMPORTED_MODULE_1__["ArrayCreate"])(0);
  for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
    var part = parts_1[_i];
    result.push({
      type: part.type,
      value: part.value
    });
  }
  return result;
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToString.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToString.js ***!
  \*******************************************************************************************/
/*! exports provided: FormatNumericToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatNumericToString", function() { return FormatNumericToString; });
/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");
/* harmony import */ var _ToRawPrecision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToRawPrecision */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawPrecision.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");
/* harmony import */ var _ToRawFixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToRawFixed */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawFixed.js");




/**
 * https://tc39.es/ecma402/#sec-formatnumberstring
 */
function FormatNumericToString(intlObject, x) {
  var isNegative = x < 0 || Object(_262__WEBPACK_IMPORTED_MODULE_0__["SameValue"])(x, -0);
  if (isNegative) {
    x = -x;
  }
  var result;
  var rourndingType = intlObject.roundingType;
  switch (rourndingType) {
    case 'significantDigits':
      result = Object(_ToRawPrecision__WEBPACK_IMPORTED_MODULE_1__["ToRawPrecision"])(x, intlObject.minimumSignificantDigits, intlObject.maximumSignificantDigits);
      break;
    case 'fractionDigits':
      result = Object(_ToRawFixed__WEBPACK_IMPORTED_MODULE_3__["ToRawFixed"])(x, intlObject.minimumFractionDigits, intlObject.maximumFractionDigits);
      break;
    default:
      result = Object(_ToRawPrecision__WEBPACK_IMPORTED_MODULE_1__["ToRawPrecision"])(x, 1, 2);
      if (result.integerDigitsCount > 1) {
        result = Object(_ToRawFixed__WEBPACK_IMPORTED_MODULE_3__["ToRawFixed"])(x, 0, 0);
      }
      break;
  }
  x = result.roundedNumber;
  var string = result.formattedString;
  var int = result.integerDigitsCount;
  var minInteger = intlObject.minimumIntegerDigits;
  if (int < minInteger) {
    var forwardZeros = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["repeat"])('0', minInteger - int);
    string = forwardZeros + string;
  }
  if (isNegative) {
    x = -x;
  }
  return {
    roundedNumber: x,
    formattedString: string
  };
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/InitializeNumberFormat.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/InitializeNumberFormat.js ***!
  \********************************************************************************************/
/*! exports provided: InitializeNumberFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializeNumberFormat", function() { return InitializeNumberFormat; });
/* harmony import */ var _CanonicalizeLocaleList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CanonicalizeLocaleList */ "./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeLocaleList.js");
/* harmony import */ var _GetOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GetOption */ "./node_modules/@formatjs/ecma402-abstract/lib/GetOption.js");
/* harmony import */ var _formatjs_intl_localematcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @formatjs/intl-localematcher */ "./node_modules/@formatjs/intl-localematcher/lib/index.js");
/* harmony import */ var _SetNumberFormatUnitOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SetNumberFormatUnitOptions */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatUnitOptions.js");
/* harmony import */ var _CurrencyDigits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CurrencyDigits */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/CurrencyDigits.js");
/* harmony import */ var _SetNumberFormatDigitOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SetNumberFormatDigitOptions */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatDigitOptions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");
/* harmony import */ var _CoerceOptionsToObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CoerceOptionsToObject */ "./node_modules/@formatjs/ecma402-abstract/lib/CoerceOptionsToObject.js");








/**
 * https://tc39.es/ecma402/#sec-initializenumberformat
 */
function InitializeNumberFormat(nf, locales, opts, _a) {
  var getInternalSlots = _a.getInternalSlots,
    localeData = _a.localeData,
    availableLocales = _a.availableLocales,
    numberingSystemNames = _a.numberingSystemNames,
    getDefaultLocale = _a.getDefaultLocale,
    currencyDigitsData = _a.currencyDigitsData;
  // @ts-ignore
  var requestedLocales = Object(_CanonicalizeLocaleList__WEBPACK_IMPORTED_MODULE_0__["CanonicalizeLocaleList"])(locales);
  var options = Object(_CoerceOptionsToObject__WEBPACK_IMPORTED_MODULE_7__["CoerceOptionsToObject"])(opts);
  var opt = Object.create(null);
  var matcher = Object(_GetOption__WEBPACK_IMPORTED_MODULE_1__["GetOption"])(options, 'localeMatcher', 'string', ['lookup', 'best fit'], 'best fit');
  opt.localeMatcher = matcher;
  var numberingSystem = Object(_GetOption__WEBPACK_IMPORTED_MODULE_1__["GetOption"])(options, 'numberingSystem', 'string', undefined, undefined);
  if (numberingSystem !== undefined && numberingSystemNames.indexOf(numberingSystem) < 0) {
    // 8.a. If numberingSystem does not match the Unicode Locale Identifier type nonterminal,
    // throw a RangeError exception.
    throw RangeError("Invalid numberingSystems: ".concat(numberingSystem));
  }
  opt.nu = numberingSystem;
  var r = Object(_formatjs_intl_localematcher__WEBPACK_IMPORTED_MODULE_2__["ResolveLocale"])(availableLocales, requestedLocales, opt,
  // [[RelevantExtensionKeys]] slot, which is a constant
  ['nu'], localeData, getDefaultLocale);
  var dataLocaleData = localeData[r.dataLocale];
  Object(_utils__WEBPACK_IMPORTED_MODULE_6__["invariant"])(!!dataLocaleData, "Missing locale data for ".concat(r.dataLocale));
  var internalSlots = getInternalSlots(nf);
  internalSlots.locale = r.locale;
  internalSlots.dataLocale = r.dataLocale;
  internalSlots.numberingSystem = r.nu;
  internalSlots.dataLocaleData = dataLocaleData;
  Object(_SetNumberFormatUnitOptions__WEBPACK_IMPORTED_MODULE_3__["SetNumberFormatUnitOptions"])(nf, options, {
    getInternalSlots: getInternalSlots
  });
  var style = internalSlots.style;
  var mnfdDefault;
  var mxfdDefault;
  if (style === 'currency') {
    var currency = internalSlots.currency;
    var cDigits = Object(_CurrencyDigits__WEBPACK_IMPORTED_MODULE_4__["CurrencyDigits"])(currency, {
      currencyDigitsData: currencyDigitsData
    });
    mnfdDefault = cDigits;
    mxfdDefault = cDigits;
  } else {
    mnfdDefault = 0;
    mxfdDefault = style === 'percent' ? 0 : 3;
  }
  var notation = Object(_GetOption__WEBPACK_IMPORTED_MODULE_1__["GetOption"])(options, 'notation', 'string', ['standard', 'scientific', 'engineering', 'compact'], 'standard');
  internalSlots.notation = notation;
  Object(_SetNumberFormatDigitOptions__WEBPACK_IMPORTED_MODULE_5__["SetNumberFormatDigitOptions"])(internalSlots, options, mnfdDefault, mxfdDefault, notation);
  var compactDisplay = Object(_GetOption__WEBPACK_IMPORTED_MODULE_1__["GetOption"])(options, 'compactDisplay', 'string', ['short', 'long'], 'short');
  if (notation === 'compact') {
    internalSlots.compactDisplay = compactDisplay;
  }
  var useGrouping = Object(_GetOption__WEBPACK_IMPORTED_MODULE_1__["GetOption"])(options, 'useGrouping', 'boolean', undefined, true);
  internalSlots.useGrouping = useGrouping;
  var signDisplay = Object(_GetOption__WEBPACK_IMPORTED_MODULE_1__["GetOption"])(options, 'signDisplay', 'string', ['auto', 'never', 'always', 'exceptZero'], 'auto');
  internalSlots.signDisplay = signDisplay;
  return nf;
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/PartitionNumberPattern.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/PartitionNumberPattern.js ***!
  \********************************************************************************************/
/*! exports provided: PartitionNumberPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartitionNumberPattern", function() { return PartitionNumberPattern; });
/* harmony import */ var _FormatNumericToString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatNumericToString */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToString.js");
/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");
/* harmony import */ var _ComputeExponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputeExponent */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponent.js");
/* harmony import */ var _format_to_parts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./format_to_parts */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/format_to_parts.js");




/**
 * https://tc39.es/ecma402/#sec-formatnumberstring
 */
function PartitionNumberPattern(numberFormat, x, _a) {
  var _b;
  var getInternalSlots = _a.getInternalSlots;
  var internalSlots = getInternalSlots(numberFormat);
  var pl = internalSlots.pl,
    dataLocaleData = internalSlots.dataLocaleData,
    numberingSystem = internalSlots.numberingSystem;
  var symbols = dataLocaleData.numbers.symbols[numberingSystem] || dataLocaleData.numbers.symbols[dataLocaleData.numbers.nu[0]];
  var magnitude = 0;
  var exponent = 0;
  var n;
  if (isNaN(x)) {
    n = symbols.nan;
  } else if (!isFinite(x)) {
    n = symbols.infinity;
  } else {
    if (internalSlots.style === 'percent') {
      x *= 100;
    }
    ;
    _b = Object(_ComputeExponent__WEBPACK_IMPORTED_MODULE_2__["ComputeExponent"])(numberFormat, x, {
      getInternalSlots: getInternalSlots
    }), exponent = _b[0], magnitude = _b[1];
    // Preserve more precision by doing multiplication when exponent is negative.
    x = exponent < 0 ? x * Math.pow(10, -exponent) : x / Math.pow(10, exponent);
    var formatNumberResult = Object(_FormatNumericToString__WEBPACK_IMPORTED_MODULE_0__["FormatNumericToString"])(internalSlots, x);
    n = formatNumberResult.formattedString;
    x = formatNumberResult.roundedNumber;
  }
  // Based on https://tc39.es/ecma402/#sec-getnumberformatpattern
  // We need to do this before `x` is rounded.
  var sign;
  var signDisplay = internalSlots.signDisplay;
  switch (signDisplay) {
    case 'never':
      sign = 0;
      break;
    case 'auto':
      if (Object(_262__WEBPACK_IMPORTED_MODULE_1__["SameValue"])(x, 0) || x > 0 || isNaN(x)) {
        sign = 0;
      } else {
        sign = -1;
      }
      break;
    case 'always':
      if (Object(_262__WEBPACK_IMPORTED_MODULE_1__["SameValue"])(x, 0) || x > 0 || isNaN(x)) {
        sign = 1;
      } else {
        sign = -1;
      }
      break;
    default:
      // x === 0 -> x is 0 or x is -0
      if (x === 0 || isNaN(x)) {
        sign = 0;
      } else if (x > 0) {
        sign = 1;
      } else {
        sign = -1;
      }
  }
  return Object(_format_to_parts__WEBPACK_IMPORTED_MODULE_3__["default"])({
    roundedNumber: x,
    formattedString: n,
    exponent: exponent,
    magnitude: magnitude,
    sign: sign
  }, internalSlots.dataLocaleData, pl, internalSlots);
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatDigitOptions.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatDigitOptions.js ***!
  \*************************************************************************************************/
/*! exports provided: SetNumberFormatDigitOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetNumberFormatDigitOptions", function() { return SetNumberFormatDigitOptions; });
/* harmony import */ var _GetNumberOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GetNumberOption */ "./node_modules/@formatjs/ecma402-abstract/lib/GetNumberOption.js");
/* harmony import */ var _DefaultNumberOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DefaultNumberOption */ "./node_modules/@formatjs/ecma402-abstract/lib/DefaultNumberOption.js");


/**
 * https://tc39.es/ecma402/#sec-setnfdigitoptions
 */
function SetNumberFormatDigitOptions(internalSlots, opts, mnfdDefault, mxfdDefault, notation) {
  var mnid = Object(_GetNumberOption__WEBPACK_IMPORTED_MODULE_0__["GetNumberOption"])(opts, 'minimumIntegerDigits', 1, 21, 1);
  var mnfd = opts.minimumFractionDigits;
  var mxfd = opts.maximumFractionDigits;
  var mnsd = opts.minimumSignificantDigits;
  var mxsd = opts.maximumSignificantDigits;
  internalSlots.minimumIntegerDigits = mnid;
  if (mnsd !== undefined || mxsd !== undefined) {
    internalSlots.roundingType = 'significantDigits';
    mnsd = Object(_DefaultNumberOption__WEBPACK_IMPORTED_MODULE_1__["DefaultNumberOption"])(mnsd, 1, 21, 1);
    mxsd = Object(_DefaultNumberOption__WEBPACK_IMPORTED_MODULE_1__["DefaultNumberOption"])(mxsd, mnsd, 21, 21);
    internalSlots.minimumSignificantDigits = mnsd;
    internalSlots.maximumSignificantDigits = mxsd;
  } else if (mnfd !== undefined || mxfd !== undefined) {
    internalSlots.roundingType = 'fractionDigits';
    mnfd = Object(_DefaultNumberOption__WEBPACK_IMPORTED_MODULE_1__["DefaultNumberOption"])(mnfd, 0, 20, mnfdDefault);
    var mxfdActualDefault = Math.max(mnfd, mxfdDefault);
    mxfd = Object(_DefaultNumberOption__WEBPACK_IMPORTED_MODULE_1__["DefaultNumberOption"])(mxfd, mnfd, 20, mxfdActualDefault);
    internalSlots.minimumFractionDigits = mnfd;
    internalSlots.maximumFractionDigits = mxfd;
  } else if (notation === 'compact') {
    internalSlots.roundingType = 'compactRounding';
  } else {
    internalSlots.roundingType = 'fractionDigits';
    internalSlots.minimumFractionDigits = mnfdDefault;
    internalSlots.maximumFractionDigits = mxfdDefault;
  }
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatUnitOptions.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatUnitOptions.js ***!
  \************************************************************************************************/
/*! exports provided: SetNumberFormatUnitOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetNumberFormatUnitOptions", function() { return SetNumberFormatUnitOptions; });
/* harmony import */ var _GetOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GetOption */ "./node_modules/@formatjs/ecma402-abstract/lib/GetOption.js");
/* harmony import */ var _IsWellFormedCurrencyCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../IsWellFormedCurrencyCode */ "./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedCurrencyCode.js");
/* harmony import */ var _IsWellFormedUnitIdentifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../IsWellFormedUnitIdentifier */ "./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedUnitIdentifier.js");



/**
 * https://tc39.es/ecma402/#sec-setnumberformatunitoptions
 */
function SetNumberFormatUnitOptions(nf, options, _a) {
  if (options === void 0) {
    options = Object.create(null);
  }
  var getInternalSlots = _a.getInternalSlots;
  var internalSlots = getInternalSlots(nf);
  var style = Object(_GetOption__WEBPACK_IMPORTED_MODULE_0__["GetOption"])(options, 'style', 'string', ['decimal', 'percent', 'currency', 'unit'], 'decimal');
  internalSlots.style = style;
  var currency = Object(_GetOption__WEBPACK_IMPORTED_MODULE_0__["GetOption"])(options, 'currency', 'string', undefined, undefined);
  if (currency !== undefined && !Object(_IsWellFormedCurrencyCode__WEBPACK_IMPORTED_MODULE_1__["IsWellFormedCurrencyCode"])(currency)) {
    throw RangeError('Malformed currency code');
  }
  if (style === 'currency' && currency === undefined) {
    throw TypeError('currency cannot be undefined');
  }
  var currencyDisplay = Object(_GetOption__WEBPACK_IMPORTED_MODULE_0__["GetOption"])(options, 'currencyDisplay', 'string', ['code', 'symbol', 'narrowSymbol', 'name'], 'symbol');
  var currencySign = Object(_GetOption__WEBPACK_IMPORTED_MODULE_0__["GetOption"])(options, 'currencySign', 'string', ['standard', 'accounting'], 'standard');
  var unit = Object(_GetOption__WEBPACK_IMPORTED_MODULE_0__["GetOption"])(options, 'unit', 'string', undefined, undefined);
  if (unit !== undefined && !Object(_IsWellFormedUnitIdentifier__WEBPACK_IMPORTED_MODULE_2__["IsWellFormedUnitIdentifier"])(unit)) {
    throw RangeError('Invalid unit argument for Intl.NumberFormat()');
  }
  if (style === 'unit' && unit === undefined) {
    throw TypeError('unit cannot be undefined');
  }
  var unitDisplay = Object(_GetOption__WEBPACK_IMPORTED_MODULE_0__["GetOption"])(options, 'unitDisplay', 'string', ['short', 'narrow', 'long'], 'short');
  if (style === 'currency') {
    internalSlots.currency = currency.toUpperCase();
    internalSlots.currencyDisplay = currencyDisplay;
    internalSlots.currencySign = currencySign;
  }
  if (style === 'unit') {
    internalSlots.unit = unit;
    internalSlots.unitDisplay = unitDisplay;
  }
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawFixed.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawFixed.js ***!
  \********************************************************************************/
/*! exports provided: ToRawFixed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToRawFixed", function() { return ToRawFixed; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");

/**
 * TODO: dedup with intl-pluralrules and support BigInt
 * https://tc39.es/ecma402/#sec-torawfixed
 * @param x a finite non-negative Number or BigInt
 * @param minFraction and integer between 0 and 20
 * @param maxFraction and integer between 0 and 20
 */
function ToRawFixed(x, minFraction, maxFraction) {
  var f = maxFraction;
  var n = Math.round(x * Math.pow(10, f));
  var xFinal = n / Math.pow(10, f);
  // n is a positive integer, but it is possible to be greater than 1e21.
  // In such case we will go the slow path.
  // See also: https://tc39.es/ecma262/#sec-numeric-types-number-tostring
  var m;
  if (n < 1e21) {
    m = n.toString();
  } else {
    m = n.toString();
    var _a = m.split('e'),
      mantissa = _a[0],
      exponent = _a[1];
    m = mantissa.replace('.', '');
    m = m + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["repeat"])('0', Math.max(+exponent - m.length + 1, 0));
  }
  var int;
  if (f !== 0) {
    var k = m.length;
    if (k <= f) {
      var z = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["repeat"])('0', f + 1 - k);
      m = z + m;
      k = f + 1;
    }
    var a = m.slice(0, k - f);
    var b = m.slice(k - f);
    m = "".concat(a, ".").concat(b);
    int = a.length;
  } else {
    int = m.length;
  }
  var cut = maxFraction - minFraction;
  while (cut > 0 && m[m.length - 1] === '0') {
    m = m.slice(0, -1);
    cut--;
  }
  if (m[m.length - 1] === '.') {
    m = m.slice(0, -1);
  }
  return {
    formattedString: m,
    roundedNumber: xFinal,
    integerDigitsCount: int
  };
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawPrecision.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawPrecision.js ***!
  \************************************************************************************/
/*! exports provided: ToRawPrecision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToRawPrecision", function() { return ToRawPrecision; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");

function ToRawPrecision(x, minPrecision, maxPrecision) {
  var p = maxPrecision;
  var m;
  var e;
  var xFinal;
  if (x === 0) {
    m = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["repeat"])('0', p);
    e = 0;
    xFinal = 0;
  } else {
    var xToString = x.toString();
    // If xToString is formatted as scientific notation, the number is either very small or very
    // large. If the precision of the formatted string is lower that requested max precision, we
    // should still infer them from the formatted string, otherwise the formatted result might have
    // precision loss (e.g. 1e41 will not have 0 in every trailing digits).
    var xToStringExponentIndex = xToString.indexOf('e');
    var _a = xToString.split('e'),
      xToStringMantissa = _a[0],
      xToStringExponent = _a[1];
    var xToStringMantissaWithoutDecimalPoint = xToStringMantissa.replace('.', '');
    if (xToStringExponentIndex >= 0 && xToStringMantissaWithoutDecimalPoint.length <= p) {
      e = +xToStringExponent;
      m = xToStringMantissaWithoutDecimalPoint + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["repeat"])('0', p - xToStringMantissaWithoutDecimalPoint.length);
      xFinal = x;
    } else {
      e = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getMagnitude"])(x);
      var decimalPlaceOffset = e - p + 1;
      // n is the integer containing the required precision digits. To derive the formatted string,
      // we will adjust its decimal place in the logic below.
      var n = Math.round(adjustDecimalPlace(x, decimalPlaceOffset));
      // The rounding caused the change of magnitude, so we should increment `e` by 1.
      if (adjustDecimalPlace(n, p - 1) >= 10) {
        e = e + 1;
        // Divide n by 10 to swallow one precision.
        n = Math.floor(n / 10);
      }
      m = n.toString();
      // Equivalent of n * 10 ** (e - p + 1)
      xFinal = adjustDecimalPlace(n, p - 1 - e);
    }
  }
  var int;
  if (e >= p - 1) {
    m = m + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["repeat"])('0', e - p + 1);
    int = e + 1;
  } else if (e >= 0) {
    m = "".concat(m.slice(0, e + 1), ".").concat(m.slice(e + 1));
    int = e + 1;
  } else {
    m = "0.".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["repeat"])('0', -e - 1)).concat(m);
    int = 1;
  }
  if (m.indexOf('.') >= 0 && maxPrecision > minPrecision) {
    var cut = maxPrecision - minPrecision;
    while (cut > 0 && m[m.length - 1] === '0') {
      m = m.slice(0, -1);
      cut--;
    }
    if (m[m.length - 1] === '.') {
      m = m.slice(0, -1);
    }
  }
  return {
    formattedString: m,
    roundedNumber: xFinal,
    integerDigitsCount: int
  };
  // x / (10 ** magnitude), but try to preserve as much floating point precision as possible.
  function adjustDecimalPlace(x, magnitude) {
    return magnitude < 0 ? x * Math.pow(10, -magnitude) : x / Math.pow(10, magnitude);
  }
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/digit-mapping.generated.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/digit-mapping.generated.js ***!
  \*********************************************************************************************/
/*! exports provided: digitMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digitMapping", function() { return digitMapping; });
var digitMapping = {
  "adlm": ["𞥐", "𞥑", "𞥒", "𞥓", "𞥔", "𞥕", "𞥖", "𞥗", "𞥘", "𞥙"],
  "ahom": ["𑜰", "𑜱", "𑜲", "𑜳", "𑜴", "𑜵", "𑜶", "𑜷", "𑜸", "𑜹"],
  "arab": ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
  "arabext": ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
  "bali": ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
  "beng": ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
  "bhks": ["𑱐", "𑱑", "𑱒", "𑱓", "𑱔", "𑱕", "𑱖", "𑱗", "𑱘", "𑱙"],
  "brah": ["𑁦", "𑁧", "𑁨", "𑁩", "𑁪", "𑁫", "𑁬", "𑁭", "𑁮", "𑁯"],
  "cakm": ["𑄶", "𑄷", "𑄸", "𑄹", "𑄺", "𑄻", "𑄼", "𑄽", "𑄾", "𑄿"],
  "cham": ["꩐", "꩑", "꩒", "꩓", "꩔", "꩕", "꩖", "꩗", "꩘", "꩙"],
  "deva": ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
  "diak": ["𑥐", "𑥑", "𑥒", "𑥓", "𑥔", "𑥕", "𑥖", "𑥗", "𑥘", "𑥙"],
  "fullwide": ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
  "gong": ["𑶠", "𑶡", "𑶢", "𑶣", "𑶤", "𑶥", "𑶦", "𑶧", "𑶨", "𑶩"],
  "gonm": ["𑵐", "𑵑", "𑵒", "𑵓", "𑵔", "𑵕", "𑵖", "𑵗", "𑵘", "𑵙"],
  "gujr": ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
  "guru": ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
  "hanidec": ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
  "hmng": ["𖭐", "𖭑", "𖭒", "𖭓", "𖭔", "𖭕", "𖭖", "𖭗", "𖭘", "𖭙"],
  "hmnp": ["𞅀", "𞅁", "𞅂", "𞅃", "𞅄", "𞅅", "𞅆", "𞅇", "𞅈", "𞅉"],
  "java": ["꧐", "꧑", "꧒", "꧓", "꧔", "꧕", "꧖", "꧗", "꧘", "꧙"],
  "kali": ["꤀", "꤁", "꤂", "꤃", "꤄", "꤅", "꤆", "꤇", "꤈", "꤉"],
  "khmr": ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
  "knda": ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
  "lana": ["᪀", "᪁", "᪂", "᪃", "᪄", "᪅", "᪆", "᪇", "᪈", "᪉"],
  "lanatham": ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"],
  "laoo": ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
  "lepc": ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"],
  "limb": ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
  "mathbold": ["𝟎", "𝟏", "𝟐", "𝟑", "𝟒", "𝟓", "𝟔", "𝟕", "𝟖", "𝟗"],
  "mathdbl": ["𝟘", "𝟙", "𝟚", "𝟛", "𝟜", "𝟝", "𝟞", "𝟟", "𝟠", "𝟡"],
  "mathmono": ["𝟶", "𝟷", "𝟸", "𝟹", "𝟺", "𝟻", "𝟼", "𝟽", "𝟾", "𝟿"],
  "mathsanb": ["𝟬", "𝟭", "𝟮", "𝟯", "𝟰", "𝟱", "𝟲", "𝟳", "𝟴", "𝟵"],
  "mathsans": ["𝟢", "𝟣", "𝟤", "𝟥", "𝟦", "𝟧", "𝟨", "𝟩", "𝟪", "𝟫"],
  "mlym": ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
  "modi": ["𑙐", "𑙑", "𑙒", "𑙓", "𑙔", "𑙕", "𑙖", "𑙗", "𑙘", "𑙙"],
  "mong": ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
  "mroo": ["𖩠", "𖩡", "𖩢", "𖩣", "𖩤", "𖩥", "𖩦", "𖩧", "𖩨", "𖩩"],
  "mtei": ["꯰", "꯱", "꯲", "꯳", "꯴", "꯵", "꯶", "꯷", "꯸", "꯹"],
  "mymr": ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
  "mymrshan": ["႐", "႑", "႒", "႓", "႔", "႕", "႖", "႗", "႘", "႙"],
  "mymrtlng": ["꧰", "꧱", "꧲", "꧳", "꧴", "꧵", "꧶", "꧷", "꧸", "꧹"],
  "newa": ["𑑐", "𑑑", "𑑒", "𑑓", "𑑔", "𑑕", "𑑖", "𑑗", "𑑘", "𑑙"],
  "nkoo": ["߀", "߁", "߂", "߃", "߄", "߅", "߆", "߇", "߈", "߉"],
  "olck": ["᱐", "᱑", "᱒", "᱓", "᱔", "᱕", "᱖", "᱗", "᱘", "᱙"],
  "orya": ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
  "osma": ["𐒠", "𐒡", "𐒢", "𐒣", "𐒤", "𐒥", "𐒦", "𐒧", "𐒨", "𐒩"],
  "rohg": ["𐴰", "𐴱", "𐴲", "𐴳", "𐴴", "𐴵", "𐴶", "𐴷", "𐴸", "𐴹"],
  "saur": ["꣐", "꣑", "꣒", "꣓", "꣔", "꣕", "꣖", "꣗", "꣘", "꣙"],
  "segment": ["🯰", "🯱", "🯲", "🯳", "🯴", "🯵", "🯶", "🯷", "🯸", "🯹"],
  "shrd": ["𑇐", "𑇑", "𑇒", "𑇓", "𑇔", "𑇕", "𑇖", "𑇗", "𑇘", "𑇙"],
  "sind": ["𑋰", "𑋱", "𑋲", "𑋳", "𑋴", "𑋵", "𑋶", "𑋷", "𑋸", "𑋹"],
  "sinh": ["෦", "෧", "෨", "෩", "෪", "෫", "෬", "෭", "෮", "෯"],
  "sora": ["𑃰", "𑃱", "𑃲", "𑃳", "𑃴", "𑃵", "𑃶", "𑃷", "𑃸", "𑃹"],
  "sund": ["᮰", "᮱", "᮲", "᮳", "᮴", "᮵", "᮶", "᮷", "᮸", "᮹"],
  "takr": ["𑛀", "𑛁", "𑛂", "𑛃", "𑛄", "𑛅", "𑛆", "𑛇", "𑛈", "𑛉"],
  "talu": ["᧐", "᧑", "᧒", "᧓", "᧔", "᧕", "᧖", "᧗", "᧘", "᧙"],
  "tamldec": ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
  "telu": ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
  "thai": ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
  "tibt": ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"],
  "tirh": ["𑓐", "𑓑", "𑓒", "𑓓", "𑓔", "𑓕", "𑓖", "𑓗", "𑓘", "𑓙"],
  "vaii": ["ᘠ", "ᘡ", "ᘢ", "ᘣ", "ᘤ", "ᘥ", "ᘦ", "ᘧ", "ᘨ", "ᘩ"],
  "wara": ["𑣠", "𑣡", "𑣢", "𑣣", "𑣤", "𑣥", "𑣦", "𑣧", "𑣨", "𑣩"],
  "wcho": ["𞋰", "𞋱", "𞋲", "𞋳", "𞋴", "𞋵", "𞋶", "𞋷", "𞋸", "𞋹"]
};

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/format_to_parts.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/format_to_parts.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatToParts; });
/* harmony import */ var _ToRawFixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToRawFixed */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawFixed.js");
/* harmony import */ var _digit_mapping_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./digit-mapping.generated */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/digit-mapping.generated.js");
/* harmony import */ var _regex_generated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../regex.generated */ "./node_modules/@formatjs/ecma402-abstract/lib/regex.generated.js");



// This is from: unicode-12.1.0/General_Category/Symbol/regex.js
// IE11 does not support unicode flag, otherwise this is just /\p{S}/u.
// /^\p{S}/u
var CARET_S_UNICODE_REGEX = new RegExp("^".concat(_regex_generated__WEBPACK_IMPORTED_MODULE_2__["S_UNICODE_REGEX"].source));
// /\p{S}$/u
var S_DOLLAR_UNICODE_REGEX = new RegExp("".concat(_regex_generated__WEBPACK_IMPORTED_MODULE_2__["S_UNICODE_REGEX"].source, "$"));
var CLDR_NUMBER_PATTERN = /[#0](?:[\.,][#0]+)*/g;
function formatToParts(numberResult, data, pl, options) {
  var sign = numberResult.sign,
    exponent = numberResult.exponent,
    magnitude = numberResult.magnitude;
  var notation = options.notation,
    style = options.style,
    numberingSystem = options.numberingSystem;
  var defaultNumberingSystem = data.numbers.nu[0];
  // #region Part 1: partition and interpolate the CLDR number pattern.
  // ----------------------------------------------------------
  var compactNumberPattern = null;
  if (notation === 'compact' && magnitude) {
    compactNumberPattern = getCompactDisplayPattern(numberResult, pl, data, style, options.compactDisplay, options.currencyDisplay, numberingSystem);
  }
  // This is used multiple times
  var nonNameCurrencyPart;
  if (style === 'currency' && options.currencyDisplay !== 'name') {
    var byCurrencyDisplay = data.currencies[options.currency];
    if (byCurrencyDisplay) {
      switch (options.currencyDisplay) {
        case 'code':
          nonNameCurrencyPart = options.currency;
          break;
        case 'symbol':
          nonNameCurrencyPart = byCurrencyDisplay.symbol;
          break;
        default:
          nonNameCurrencyPart = byCurrencyDisplay.narrow;
          break;
      }
    } else {
      // Fallback for unknown currency
      nonNameCurrencyPart = options.currency;
    }
  }
  var numberPattern;
  if (!compactNumberPattern) {
    // Note: if the style is unit, or is currency and the currency display is name,
    // its unit parts will be interpolated in part 2. So here we can fallback to decimal.
    if (style === 'decimal' || style === 'unit' || style === 'currency' && options.currencyDisplay === 'name') {
      // Shortcut for decimal
      var decimalData = data.numbers.decimal[numberingSystem] || data.numbers.decimal[defaultNumberingSystem];
      numberPattern = getPatternForSign(decimalData.standard, sign);
    } else if (style === 'currency') {
      var currencyData = data.numbers.currency[numberingSystem] || data.numbers.currency[defaultNumberingSystem];
      // We replace number pattern part with `0` for easier postprocessing.
      numberPattern = getPatternForSign(currencyData[options.currencySign], sign);
    } else {
      // percent
      var percentPattern = data.numbers.percent[numberingSystem] || data.numbers.percent[defaultNumberingSystem];
      numberPattern = getPatternForSign(percentPattern, sign);
    }
  } else {
    numberPattern = compactNumberPattern;
  }
  // Extract the decimal number pattern string. It looks like "#,##0,00", which will later be
  // used to infer decimal group sizes.
  var decimalNumberPattern = CLDR_NUMBER_PATTERN.exec(numberPattern)[0];
  // Now we start to substitute patterns
  // 1. replace strings like `0` and `#,##0.00` with `{0}`
  // 2. unquote characters (invariant: the quoted characters does not contain the special tokens)
  numberPattern = numberPattern.replace(CLDR_NUMBER_PATTERN, '{0}').replace(/'(.)'/g, '$1');
  // Handle currency spacing (both compact and non-compact).
  if (style === 'currency' && options.currencyDisplay !== 'name') {
    var currencyData = data.numbers.currency[numberingSystem] || data.numbers.currency[defaultNumberingSystem];
    // See `currencySpacing` substitution rule in TR-35.
    // Here we always assume the currencyMatch is "[:^S:]" and surroundingMatch is "[:digit:]".
    //
    // Example 1: for pattern "#,##0.00¤" with symbol "US$", we replace "¤" with the symbol,
    // but insert an extra non-break space before the symbol, because "[:^S:]" matches "U" in
    // "US$" and "[:digit:]" matches the latn numbering system digits.
    //
    // Example 2: for pattern "¤#,##0.00" with symbol "US$", there is no spacing between symbol
    // and number, because `$` does not match "[:^S:]".
    //
    // Implementation note: here we do the best effort to infer the insertion.
    // We also assume that `beforeInsertBetween` and `afterInsertBetween` will never be `;`.
    var afterCurrency = currencyData.currencySpacing.afterInsertBetween;
    if (afterCurrency && !S_DOLLAR_UNICODE_REGEX.test(nonNameCurrencyPart)) {
      numberPattern = numberPattern.replace('¤{0}', "\u00A4".concat(afterCurrency, "{0}"));
    }
    var beforeCurrency = currencyData.currencySpacing.beforeInsertBetween;
    if (beforeCurrency && !CARET_S_UNICODE_REGEX.test(nonNameCurrencyPart)) {
      numberPattern = numberPattern.replace('{0}¤', "{0}".concat(beforeCurrency, "\u00A4"));
    }
  }
  // The following tokens are special: `{0}`, `¤`, `%`, `-`, `+`, `{c:...}.
  var numberPatternParts = numberPattern.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g);
  var numberParts = [];
  var symbols = data.numbers.symbols[numberingSystem] || data.numbers.symbols[defaultNumberingSystem];
  for (var _i = 0, numberPatternParts_1 = numberPatternParts; _i < numberPatternParts_1.length; _i++) {
    var part = numberPatternParts_1[_i];
    if (!part) {
      continue;
    }
    switch (part) {
      case '{0}':
        {
          // We only need to handle scientific and engineering notation here.
          numberParts.push.apply(numberParts, paritionNumberIntoParts(symbols, numberResult, notation, exponent, numberingSystem,
          // If compact number pattern exists, do not insert group separators.
          !compactNumberPattern && options.useGrouping, decimalNumberPattern));
          break;
        }
      case '-':
        numberParts.push({
          type: 'minusSign',
          value: symbols.minusSign
        });
        break;
      case '+':
        numberParts.push({
          type: 'plusSign',
          value: symbols.plusSign
        });
        break;
      case '%':
        numberParts.push({
          type: 'percentSign',
          value: symbols.percentSign
        });
        break;
      case '¤':
        // Computed above when handling currency spacing.
        numberParts.push({
          type: 'currency',
          value: nonNameCurrencyPart
        });
        break;
      default:
        if (/^\{c:/.test(part)) {
          numberParts.push({
            type: 'compact',
            value: part.substring(3, part.length - 1)
          });
        } else {
          // literal
          numberParts.push({
            type: 'literal',
            value: part
          });
        }
        break;
    }
  }
  // #endregion
  // #region Part 2: interpolate unit pattern if necessary.
  // ----------------------------------------------
  switch (style) {
    case 'currency':
      {
        // `currencyDisplay: 'name'` has similar pattern handling as units.
        if (options.currencyDisplay === 'name') {
          var unitPattern = (data.numbers.currency[numberingSystem] || data.numbers.currency[defaultNumberingSystem]).unitPattern;
          // Select plural
          var unitName = void 0;
          var currencyNameData = data.currencies[options.currency];
          if (currencyNameData) {
            unitName = selectPlural(pl, numberResult.roundedNumber * Math.pow(10, exponent), currencyNameData.displayName);
          } else {
            // Fallback for unknown currency
            unitName = options.currency;
          }
          // Do {0} and {1} substitution
          var unitPatternParts = unitPattern.split(/(\{[01]\})/g);
          var result = [];
          for (var _a = 0, unitPatternParts_1 = unitPatternParts; _a < unitPatternParts_1.length; _a++) {
            var part = unitPatternParts_1[_a];
            switch (part) {
              case '{0}':
                result.push.apply(result, numberParts);
                break;
              case '{1}':
                result.push({
                  type: 'currency',
                  value: unitName
                });
                break;
              default:
                if (part) {
                  result.push({
                    type: 'literal',
                    value: part
                  });
                }
                break;
            }
          }
          return result;
        } else {
          return numberParts;
        }
      }
    case 'unit':
      {
        var unit = options.unit,
          unitDisplay = options.unitDisplay;
        var unitData = data.units.simple[unit];
        var unitPattern = void 0;
        if (unitData) {
          // Simple unit pattern
          unitPattern = selectPlural(pl, numberResult.roundedNumber * Math.pow(10, exponent), data.units.simple[unit][unitDisplay]);
        } else {
          // See: http://unicode.org/reports/tr35/tr35-general.html#perUnitPatterns
          // If cannot find unit in the simple pattern, it must be "per" compound pattern.
          // Implementation note: we are not following TR-35 here because we need to format to parts!
          var _b = unit.split('-per-'),
            numeratorUnit = _b[0],
            denominatorUnit = _b[1];
          unitData = data.units.simple[numeratorUnit];
          var numeratorUnitPattern = selectPlural(pl, numberResult.roundedNumber * Math.pow(10, exponent), data.units.simple[numeratorUnit][unitDisplay]);
          var perUnitPattern = data.units.simple[denominatorUnit].perUnit[unitDisplay];
          if (perUnitPattern) {
            // perUnitPattern exists, combine it with numeratorUnitPattern
            unitPattern = perUnitPattern.replace('{0}', numeratorUnitPattern);
          } else {
            // get compoundUnit pattern (e.g. "{0} per {1}"), repalce {0} with numerator pattern and {1} with
            // the denominator pattern in singular form.
            var perPattern = data.units.compound.per[unitDisplay];
            var denominatorPattern = selectPlural(pl, 1, data.units.simple[denominatorUnit][unitDisplay]);
            unitPattern = unitPattern = perPattern.replace('{0}', numeratorUnitPattern).replace('{1}', denominatorPattern.replace('{0}', ''));
          }
        }
        var result = [];
        // We need spacing around "{0}" because they are not treated as "unit" parts, but "literal".
        for (var _c = 0, _d = unitPattern.split(/(\s*\{0\}\s*)/); _c < _d.length; _c++) {
          var part = _d[_c];
          var interpolateMatch = /^(\s*)\{0\}(\s*)$/.exec(part);
          if (interpolateMatch) {
            // Space before "{0}"
            if (interpolateMatch[1]) {
              result.push({
                type: 'literal',
                value: interpolateMatch[1]
              });
            }
            // "{0}" itself
            result.push.apply(result, numberParts);
            // Space after "{0}"
            if (interpolateMatch[2]) {
              result.push({
                type: 'literal',
                value: interpolateMatch[2]
              });
            }
          } else if (part) {
            result.push({
              type: 'unit',
              value: part
            });
          }
        }
        return result;
      }
    default:
      return numberParts;
  }
  // #endregion
}
// A subset of https://tc39.es/ecma402/#sec-partitionnotationsubpattern
// Plus the exponent parts handling.
function paritionNumberIntoParts(symbols, numberResult, notation, exponent, numberingSystem, useGrouping,
/**
 * This is the decimal number pattern without signs or symbols.
 * It is used to infer the group size when `useGrouping` is true.
 *
 * A typical value looks like "#,##0.00" (primary group size is 3).
 * Some locales like Hindi has secondary group size of 2 (e.g. "#,##,##0.00").
 */
decimalNumberPattern) {
  var result = [];
  // eslint-disable-next-line prefer-const
  var n = numberResult.formattedString,
    x = numberResult.roundedNumber;
  if (isNaN(x)) {
    return [{
      type: 'nan',
      value: n
    }];
  } else if (!isFinite(x)) {
    return [{
      type: 'infinity',
      value: n
    }];
  }
  var digitReplacementTable = _digit_mapping_generated__WEBPACK_IMPORTED_MODULE_1__["digitMapping"][numberingSystem];
  if (digitReplacementTable) {
    n = n.replace(/\d/g, function (digit) {
      return digitReplacementTable[+digit] || digit;
    });
  }
  // TODO: Else use an implementation dependent algorithm to map n to the appropriate
  // representation of n in the given numbering system.
  var decimalSepIndex = n.indexOf('.');
  var integer;
  var fraction;
  if (decimalSepIndex > 0) {
    integer = n.slice(0, decimalSepIndex);
    fraction = n.slice(decimalSepIndex + 1);
  } else {
    integer = n;
  }
  // #region Grouping integer digits
  // The weird compact and x >= 10000 check is to ensure consistency with Node.js and Chrome.
  // Note that `de` does not have compact form for thousands, but Node.js does not insert grouping separator
  // unless the rounded number is greater than 10000:
  //   NumberFormat('de', {notation: 'compact', compactDisplay: 'short'}).format(1234) //=> "1234"
  //   NumberFormat('de').format(1234) //=> "1.234"
  if (useGrouping && (notation !== 'compact' || x >= 10000)) {
    var groupSepSymbol = symbols.group;
    var groups = [];
    // > There may be two different grouping sizes: The primary grouping size used for the least
    // > significant integer group, and the secondary grouping size used for more significant groups.
    // > If a pattern contains multiple grouping separators, the interval between the last one and the
    // > end of the integer defines the primary grouping size, and the interval between the last two
    // > defines the secondary grouping size. All others are ignored.
    var integerNumberPattern = decimalNumberPattern.split('.')[0];
    var patternGroups = integerNumberPattern.split(',');
    var primaryGroupingSize = 3;
    var secondaryGroupingSize = 3;
    if (patternGroups.length > 1) {
      primaryGroupingSize = patternGroups[patternGroups.length - 1].length;
    }
    if (patternGroups.length > 2) {
      secondaryGroupingSize = patternGroups[patternGroups.length - 2].length;
    }
    var i = integer.length - primaryGroupingSize;
    if (i > 0) {
      // Slice the least significant integer group
      groups.push(integer.slice(i, i + primaryGroupingSize));
      // Then iteratively push the more signicant groups
      // TODO: handle surrogate pairs in some numbering system digits
      for (i -= secondaryGroupingSize; i > 0; i -= secondaryGroupingSize) {
        groups.push(integer.slice(i, i + secondaryGroupingSize));
      }
      groups.push(integer.slice(0, i + secondaryGroupingSize));
    } else {
      groups.push(integer);
    }
    while (groups.length > 0) {
      var integerGroup = groups.pop();
      result.push({
        type: 'integer',
        value: integerGroup
      });
      if (groups.length > 0) {
        result.push({
          type: 'group',
          value: groupSepSymbol
        });
      }
    }
  } else {
    result.push({
      type: 'integer',
      value: integer
    });
  }
  // #endregion
  if (fraction !== undefined) {
    result.push({
      type: 'decimal',
      value: symbols.decimal
    }, {
      type: 'fraction',
      value: fraction
    });
  }
  if ((notation === 'scientific' || notation === 'engineering') && isFinite(x)) {
    result.push({
      type: 'exponentSeparator',
      value: symbols.exponential
    });
    if (exponent < 0) {
      result.push({
        type: 'exponentMinusSign',
        value: symbols.minusSign
      });
      exponent = -exponent;
    }
    var exponentResult = Object(_ToRawFixed__WEBPACK_IMPORTED_MODULE_0__["ToRawFixed"])(exponent, 0, 0);
    result.push({
      type: 'exponentInteger',
      value: exponentResult.formattedString
    });
  }
  return result;
}
function getPatternForSign(pattern, sign) {
  if (pattern.indexOf(';') < 0) {
    pattern = "".concat(pattern, ";-").concat(pattern);
  }
  var _a = pattern.split(';'),
    zeroPattern = _a[0],
    negativePattern = _a[1];
  switch (sign) {
    case 0:
      return zeroPattern;
    case -1:
      return negativePattern;
    default:
      return negativePattern.indexOf('-') >= 0 ? negativePattern.replace(/-/g, '+') : "+".concat(zeroPattern);
  }
}
// Find the CLDR pattern for compact notation based on the magnitude of data and style.
//
// Example return value: "¤ {c:laki}000;¤{c:laki} -0" (`sw` locale):
// - Notice the `{c:...}` token that wraps the compact literal.
// - The consecutive zeros are normalized to single zero to match CLDR_NUMBER_PATTERN.
//
// Returning null means the compact display pattern cannot be found.
function getCompactDisplayPattern(numberResult, pl, data, style, compactDisplay, currencyDisplay, numberingSystem) {
  var _a;
  var roundedNumber = numberResult.roundedNumber,
    sign = numberResult.sign,
    magnitude = numberResult.magnitude;
  var magnitudeKey = String(Math.pow(10, magnitude));
  var defaultNumberingSystem = data.numbers.nu[0];
  var pattern;
  if (style === 'currency' && currencyDisplay !== 'name') {
    var byNumberingSystem = data.numbers.currency;
    var currencyData = byNumberingSystem[numberingSystem] || byNumberingSystem[defaultNumberingSystem];
    // NOTE: compact notation ignores currencySign!
    var compactPluralRules = (_a = currencyData.short) === null || _a === void 0 ? void 0 : _a[magnitudeKey];
    if (!compactPluralRules) {
      return null;
    }
    pattern = selectPlural(pl, roundedNumber, compactPluralRules);
  } else {
    var byNumberingSystem = data.numbers.decimal;
    var byCompactDisplay = byNumberingSystem[numberingSystem] || byNumberingSystem[defaultNumberingSystem];
    var compactPlaralRule = byCompactDisplay[compactDisplay][magnitudeKey];
    if (!compactPlaralRule) {
      return null;
    }
    pattern = selectPlural(pl, roundedNumber, compactPlaralRule);
  }
  // See https://unicode.org/reports/tr35/tr35-numbers.html#Compact_Number_Formats
  // > If the value is precisely “0”, either explicit or defaulted, then the normal number format
  // > pattern for that sort of object is supplied.
  if (pattern === '0') {
    return null;
  }
  pattern = getPatternForSign(pattern, sign)
  // Extract compact literal from the pattern
  .replace(/([^\s;\-\+\d¤]+)/g, '{c:$1}')
  // We replace one or more zeros with a single zero so it matches `CLDR_NUMBER_PATTERN`.
  .replace(/0+/, '0');
  return pattern;
}
function selectPlural(pl, x, rules) {
  return rules[pl.select(x)] || rules.other;
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/PartitionPattern.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/PartitionPattern.js ***!
  \*************************************************************************/
/*! exports provided: PartitionPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartitionPattern", function() { return PartitionPattern; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");

/**
 * https://tc39.es/ecma402/#sec-partitionpattern
 * @param pattern
 */
function PartitionPattern(pattern) {
  var result = [];
  var beginIndex = pattern.indexOf('{');
  var endIndex = 0;
  var nextIndex = 0;
  var length = pattern.length;
  while (beginIndex < pattern.length && beginIndex > -1) {
    endIndex = pattern.indexOf('}', beginIndex);
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["invariant"])(endIndex > beginIndex, "Invalid pattern ".concat(pattern));
    if (beginIndex > nextIndex) {
      result.push({
        type: 'literal',
        value: pattern.substring(nextIndex, beginIndex)
      });
    }
    result.push({
      type: pattern.substring(beginIndex + 1, endIndex),
      value: undefined
    });
    nextIndex = endIndex + 1;
    beginIndex = pattern.indexOf('{', nextIndex);
  }
  if (nextIndex < length) {
    result.push({
      type: 'literal',
      value: pattern.substring(nextIndex, length)
    });
  }
  return result;
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/SupportedLocales.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/SupportedLocales.js ***!
  \*************************************************************************/
/*! exports provided: SupportedLocales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportedLocales", function() { return SupportedLocales; });
/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");
/* harmony import */ var _GetOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetOption */ "./node_modules/@formatjs/ecma402-abstract/lib/GetOption.js");
/* harmony import */ var _formatjs_intl_localematcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @formatjs/intl-localematcher */ "./node_modules/@formatjs/intl-localematcher/lib/index.js");



/**
 * https://tc39.es/ecma402/#sec-supportedlocales
 * @param availableLocales
 * @param requestedLocales
 * @param options
 */
function SupportedLocales(availableLocales, requestedLocales, options) {
  var matcher = 'best fit';
  if (options !== undefined) {
    options = Object(_262__WEBPACK_IMPORTED_MODULE_0__["ToObject"])(options);
    matcher = Object(_GetOption__WEBPACK_IMPORTED_MODULE_1__["GetOption"])(options, 'localeMatcher', 'string', ['lookup', 'best fit'], 'best fit');
  }
  if (matcher === 'best fit') {
    return Object(_formatjs_intl_localematcher__WEBPACK_IMPORTED_MODULE_2__["LookupSupportedLocales"])(availableLocales, requestedLocales);
  }
  return Object(_formatjs_intl_localematcher__WEBPACK_IMPORTED_MODULE_2__["LookupSupportedLocales"])(availableLocales, requestedLocales);
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/data.js":
/*!*************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/data.js ***!
  \*************************************************************/
/*! exports provided: isMissingLocaleDataError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMissingLocaleDataError", function() { return isMissingLocaleDataError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var MissingLocaleDataError = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MissingLocaleDataError, _super);
  function MissingLocaleDataError() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = 'MISSING_LOCALE_DATA';
    return _this;
  }
  return MissingLocaleDataError;
}(Error);
function isMissingLocaleDataError(e) {
  return e.type === 'MISSING_LOCALE_DATA';
}

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/index.js ***!
  \**************************************************************/
/*! exports provided: CanonicalizeLocaleList, CanonicalizeTimeZoneName, CoerceOptionsToObject, GetNumberOption, GetOption, GetOptionsObject, SANCTIONED_UNITS, removeUnitNamespace, SIMPLE_UNITS, IsSanctionedSimpleUnitIdentifier, IsValidTimeZoneName, IsWellFormedCurrencyCode, IsWellFormedUnitIdentifier, ComputeExponent, ComputeExponentForMagnitude, CurrencyDigits, FormatNumericToParts, FormatNumericToString, InitializeNumberFormat, PartitionNumberPattern, SetNumberFormatDigitOptions, SetNumberFormatUnitOptions, ToRawFixed, ToRawPrecision, _formatToParts, PartitionPattern, SupportedLocales, getInternalSlot, getMultiInternalSlots, isLiteralPart, setInternalSlot, setMultiInternalSlots, getMagnitude, defineProperty, isMissingLocaleDataError, RangePatternType, invariant, ToString, ToNumber, TimeClip, ToObject, SameValue, ArrayCreate, HasOwnProperty, Type, Day, WeekDay, DayFromYear, TimeFromYear, YearFromTime, DaysInYear, DayWithinYear, InLeapYear, MonthFromTime, DateFromTime, HourFromTime, MinFromTime, SecFromTime, OrdinaryHasInstance, msFromTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanonicalizeLocaleList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanonicalizeLocaleList */ "./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeLocaleList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanonicalizeLocaleList", function() { return _CanonicalizeLocaleList__WEBPACK_IMPORTED_MODULE_0__["CanonicalizeLocaleList"]; });

/* harmony import */ var _CanonicalizeTimeZoneName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanonicalizeTimeZoneName */ "./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeTimeZoneName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanonicalizeTimeZoneName", function() { return _CanonicalizeTimeZoneName__WEBPACK_IMPORTED_MODULE_1__["CanonicalizeTimeZoneName"]; });

/* harmony import */ var _CoerceOptionsToObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoerceOptionsToObject */ "./node_modules/@formatjs/ecma402-abstract/lib/CoerceOptionsToObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoerceOptionsToObject", function() { return _CoerceOptionsToObject__WEBPACK_IMPORTED_MODULE_2__["CoerceOptionsToObject"]; });

/* harmony import */ var _GetNumberOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetNumberOption */ "./node_modules/@formatjs/ecma402-abstract/lib/GetNumberOption.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNumberOption", function() { return _GetNumberOption__WEBPACK_IMPORTED_MODULE_3__["GetNumberOption"]; });

/* harmony import */ var _GetOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GetOption */ "./node_modules/@formatjs/ecma402-abstract/lib/GetOption.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetOption", function() { return _GetOption__WEBPACK_IMPORTED_MODULE_4__["GetOption"]; });

/* harmony import */ var _GetOptionsObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GetOptionsObject */ "./node_modules/@formatjs/ecma402-abstract/lib/GetOptionsObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetOptionsObject", function() { return _GetOptionsObject__WEBPACK_IMPORTED_MODULE_5__["GetOptionsObject"]; });

/* harmony import */ var _IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IsSanctionedSimpleUnitIdentifier */ "./node_modules/@formatjs/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SANCTIONED_UNITS", function() { return _IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_6__["SANCTIONED_UNITS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeUnitNamespace", function() { return _IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_6__["removeUnitNamespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMPLE_UNITS", function() { return _IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_6__["SIMPLE_UNITS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsSanctionedSimpleUnitIdentifier", function() { return _IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_6__["IsSanctionedSimpleUnitIdentifier"]; });

/* harmony import */ var _IsValidTimeZoneName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IsValidTimeZoneName */ "./node_modules/@formatjs/ecma402-abstract/lib/IsValidTimeZoneName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsValidTimeZoneName", function() { return _IsValidTimeZoneName__WEBPACK_IMPORTED_MODULE_7__["IsValidTimeZoneName"]; });

/* harmony import */ var _IsWellFormedCurrencyCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IsWellFormedCurrencyCode */ "./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedCurrencyCode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsWellFormedCurrencyCode", function() { return _IsWellFormedCurrencyCode__WEBPACK_IMPORTED_MODULE_8__["IsWellFormedCurrencyCode"]; });

/* harmony import */ var _IsWellFormedUnitIdentifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IsWellFormedUnitIdentifier */ "./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedUnitIdentifier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsWellFormedUnitIdentifier", function() { return _IsWellFormedUnitIdentifier__WEBPACK_IMPORTED_MODULE_9__["IsWellFormedUnitIdentifier"]; });

/* harmony import */ var _NumberFormat_ComputeExponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NumberFormat/ComputeExponent */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComputeExponent", function() { return _NumberFormat_ComputeExponent__WEBPACK_IMPORTED_MODULE_10__["ComputeExponent"]; });

/* harmony import */ var _NumberFormat_ComputeExponentForMagnitude__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NumberFormat/ComputeExponentForMagnitude */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponentForMagnitude.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComputeExponentForMagnitude", function() { return _NumberFormat_ComputeExponentForMagnitude__WEBPACK_IMPORTED_MODULE_11__["ComputeExponentForMagnitude"]; });

/* harmony import */ var _NumberFormat_CurrencyDigits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NumberFormat/CurrencyDigits */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/CurrencyDigits.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyDigits", function() { return _NumberFormat_CurrencyDigits__WEBPACK_IMPORTED_MODULE_12__["CurrencyDigits"]; });

/* harmony import */ var _NumberFormat_FormatNumericToParts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./NumberFormat/FormatNumericToParts */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToParts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatNumericToParts", function() { return _NumberFormat_FormatNumericToParts__WEBPACK_IMPORTED_MODULE_13__["FormatNumericToParts"]; });

/* harmony import */ var _NumberFormat_FormatNumericToString__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NumberFormat/FormatNumericToString */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatNumericToString", function() { return _NumberFormat_FormatNumericToString__WEBPACK_IMPORTED_MODULE_14__["FormatNumericToString"]; });

/* harmony import */ var _NumberFormat_InitializeNumberFormat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./NumberFormat/InitializeNumberFormat */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/InitializeNumberFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InitializeNumberFormat", function() { return _NumberFormat_InitializeNumberFormat__WEBPACK_IMPORTED_MODULE_15__["InitializeNumberFormat"]; });

/* harmony import */ var _NumberFormat_PartitionNumberPattern__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./NumberFormat/PartitionNumberPattern */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/PartitionNumberPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PartitionNumberPattern", function() { return _NumberFormat_PartitionNumberPattern__WEBPACK_IMPORTED_MODULE_16__["PartitionNumberPattern"]; });

/* harmony import */ var _NumberFormat_SetNumberFormatDigitOptions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./NumberFormat/SetNumberFormatDigitOptions */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatDigitOptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetNumberFormatDigitOptions", function() { return _NumberFormat_SetNumberFormatDigitOptions__WEBPACK_IMPORTED_MODULE_17__["SetNumberFormatDigitOptions"]; });

/* harmony import */ var _NumberFormat_SetNumberFormatUnitOptions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./NumberFormat/SetNumberFormatUnitOptions */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatUnitOptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetNumberFormatUnitOptions", function() { return _NumberFormat_SetNumberFormatUnitOptions__WEBPACK_IMPORTED_MODULE_18__["SetNumberFormatUnitOptions"]; });

/* harmony import */ var _NumberFormat_ToRawFixed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./NumberFormat/ToRawFixed */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawFixed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToRawFixed", function() { return _NumberFormat_ToRawFixed__WEBPACK_IMPORTED_MODULE_19__["ToRawFixed"]; });

/* harmony import */ var _NumberFormat_ToRawPrecision__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./NumberFormat/ToRawPrecision */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawPrecision.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToRawPrecision", function() { return _NumberFormat_ToRawPrecision__WEBPACK_IMPORTED_MODULE_20__["ToRawPrecision"]; });

/* harmony import */ var _NumberFormat_format_to_parts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./NumberFormat/format_to_parts */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/format_to_parts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_formatToParts", function() { return _NumberFormat_format_to_parts__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _PartitionPattern__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./PartitionPattern */ "./node_modules/@formatjs/ecma402-abstract/lib/PartitionPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PartitionPattern", function() { return _PartitionPattern__WEBPACK_IMPORTED_MODULE_22__["PartitionPattern"]; });

/* harmony import */ var _SupportedLocales__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SupportedLocales */ "./node_modules/@formatjs/ecma402-abstract/lib/SupportedLocales.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SupportedLocales", function() { return _SupportedLocales__WEBPACK_IMPORTED_MODULE_23__["SupportedLocales"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInternalSlot", function() { return _utils__WEBPACK_IMPORTED_MODULE_24__["getInternalSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMultiInternalSlots", function() { return _utils__WEBPACK_IMPORTED_MODULE_24__["getMultiInternalSlots"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLiteralPart", function() { return _utils__WEBPACK_IMPORTED_MODULE_24__["isLiteralPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInternalSlot", function() { return _utils__WEBPACK_IMPORTED_MODULE_24__["setInternalSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMultiInternalSlots", function() { return _utils__WEBPACK_IMPORTED_MODULE_24__["setMultiInternalSlots"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMagnitude", function() { return _utils__WEBPACK_IMPORTED_MODULE_24__["getMagnitude"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_24__["defineProperty"]; });

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./data */ "./node_modules/@formatjs/ecma402-abstract/lib/data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMissingLocaleDataError", function() { return _data__WEBPACK_IMPORTED_MODULE_25__["isMissingLocaleDataError"]; });

/* harmony import */ var _types_relative_time__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./types/relative-time */ "./node_modules/@formatjs/ecma402-abstract/lib/types/relative-time.js");
/* empty/unused harmony star reexport *//* harmony import */ var _types_date_time__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./types/date-time */ "./node_modules/@formatjs/ecma402-abstract/lib/types/date-time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangePatternType", function() { return _types_date_time__WEBPACK_IMPORTED_MODULE_27__["RangePatternType"]; });

/* harmony import */ var _types_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./types/list */ "./node_modules/@formatjs/ecma402-abstract/lib/types/list.js");
/* empty/unused harmony star reexport *//* harmony import */ var _types_plural_rules__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./types/plural-rules */ "./node_modules/@formatjs/ecma402-abstract/lib/types/plural-rules.js");
/* empty/unused harmony star reexport *//* harmony import */ var _types_number__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./types/number */ "./node_modules/@formatjs/ecma402-abstract/lib/types/number.js");
/* empty/unused harmony star reexport *//* harmony import */ var _types_displaynames__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./types/displaynames */ "./node_modules/@formatjs/ecma402-abstract/lib/types/displaynames.js");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return _utils__WEBPACK_IMPORTED_MODULE_24__["invariant"]; });

/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToString", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["ToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToNumber", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["ToNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeClip", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["TimeClip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToObject", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["ToObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SameValue", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["SameValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayCreate", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["ArrayCreate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HasOwnProperty", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["HasOwnProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Day", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["Day"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeekDay", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["WeekDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayFromYear", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["DayFromYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeFromYear", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["TimeFromYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YearFromTime", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["YearFromTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DaysInYear", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["DaysInYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayWithinYear", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["DayWithinYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InLeapYear", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["InLeapYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthFromTime", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["MonthFromTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFromTime", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["DateFromTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HourFromTime", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["HourFromTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MinFromTime", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["MinFromTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecFromTime", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["SecFromTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrdinaryHasInstance", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["OrdinaryHasInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "msFromTime", function() { return _262__WEBPACK_IMPORTED_MODULE_32__["msFromTime"]; });




































/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/regex.generated.js":
/*!************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/regex.generated.js ***!
  \************************************************************************/
/*! exports provided: S_UNICODE_REGEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_UNICODE_REGEX", function() { return S_UNICODE_REGEX; });
// @generated from regex-gen.ts
var S_UNICODE_REGEX = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/;

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/types/date-time.js":
/*!************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/types/date-time.js ***!
  \************************************************************************/
/*! exports provided: RangePatternType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePatternType", function() { return RangePatternType; });
var RangePatternType;
(function (RangePatternType) {
  RangePatternType["startRange"] = "startRange";
  RangePatternType["shared"] = "shared";
  RangePatternType["endRange"] = "endRange";
})(RangePatternType || (RangePatternType = {}));

/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/types/displaynames.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/types/displaynames.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/types/list.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/types/list.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/types/number.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/types/number.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/types/plural-rules.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/types/plural-rules.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/types/relative-time.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/types/relative-time.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/utils.js ***!
  \**************************************************************/
/*! exports provided: getMagnitude, repeat, setInternalSlot, setMultiInternalSlots, getInternalSlot, getMultiInternalSlots, isLiteralPart, defineProperty, UNICODE_EXTENSION_SEQUENCE_REGEX, invariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMagnitude", function() { return getMagnitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInternalSlot", function() { return setInternalSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMultiInternalSlots", function() { return setMultiInternalSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInternalSlot", function() { return getInternalSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultiInternalSlots", function() { return getMultiInternalSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLiteralPart", function() { return isLiteralPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineProperty", function() { return defineProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNICODE_EXTENSION_SEQUENCE_REGEX", function() { return UNICODE_EXTENSION_SEQUENCE_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/**
 * Cannot do Math.log(x) / Math.log(10) bc if IEEE floating point issue
 * @param x number
 */
function getMagnitude(x) {
  // Cannot count string length via Number.toString because it may use scientific notation
  // for very small or very large numbers.
  return Math.floor(Math.log(x) * Math.LOG10E);
}
function repeat(s, times) {
  if (typeof s.repeat === 'function') {
    return s.repeat(times);
  }
  var arr = new Array(times);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = s;
  }
  return arr.join('');
}
function setInternalSlot(map, pl, field, value) {
  if (!map.get(pl)) {
    map.set(pl, Object.create(null));
  }
  var slots = map.get(pl);
  slots[field] = value;
}
function setMultiInternalSlots(map, pl, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var k = _a[_i];
    setInternalSlot(map, pl, k, props[k]);
  }
}
function getInternalSlot(map, pl, field) {
  return getMultiInternalSlots(map, pl, field)[field];
}
function getMultiInternalSlots(map, pl) {
  var fields = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    fields[_i - 2] = arguments[_i];
  }
  var slots = map.get(pl);
  if (!slots) {
    throw new TypeError("".concat(pl, " InternalSlot has not been initialized"));
  }
  return fields.reduce(function (all, f) {
    all[f] = slots[f];
    return all;
  }, Object.create(null));
}
function isLiteralPart(patternPart) {
  return patternPart.type === 'literal';
}
/*
  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
*/
function defineProperty(target, name, _a) {
  var value = _a.value;
  Object.defineProperty(target, name, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: value
  });
}
var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
function invariant(condition, message, Err) {
  if (Err === void 0) {
    Err = Error;
  }
  if (!condition) {
    throw new Err(message);
  }
}

/***/ }),

/***/ "./node_modules/@formatjs/fast-memoize/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@formatjs/fast-memoize/lib/index.js ***!
  \**********************************************************/
/*! exports provided: default, strategies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strategies", function() { return strategies; });
//
// Main
//
function memoize(fn, options) {
  var cache = options && options.cache ? options.cache : cacheDefault;
  var serializer = options && options.serializer ? options.serializer : serializerDefault;
  var strategy = options && options.strategy ? options.strategy : strategyDefault;
  return strategy(fn, {
    cache: cache,
    serializer: serializer
  });
}
//
// Strategy
//
function isPrimitive(value) {
  return value == null || typeof value === 'number' || typeof value === 'boolean'; // || typeof value === "string" 'unsafe' primitive for our needs
}

function monadic(fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === 'undefined') {
    computedValue = fn.call(this, arg);
    cache.set(cacheKey, computedValue);
  }
  return computedValue;
}
function variadic(fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3);
  var cacheKey = serializer(args);
  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === 'undefined') {
    computedValue = fn.apply(this, args);
    cache.set(cacheKey, computedValue);
  }
  return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
  return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic;
  return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
  return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
  return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
var serializerDefault = function () {
  return JSON.stringify(arguments);
};
//
// Cache
//
function ObjectWithoutPrototypeCache() {
  this.cache = Object.create(null);
}
ObjectWithoutPrototypeCache.prototype.get = function (key) {
  return this.cache[key];
};
ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
  this.cache[key] = value;
};
var cacheDefault = {
  create: function create() {
    // @ts-ignore
    return new ObjectWithoutPrototypeCache();
  }
};
var strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
};

/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/date-time-pattern-generator.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/date-time-pattern-generator.js ***!
  \********************************************************************************************/
/*! exports provided: getBestPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBestPattern", function() { return getBestPattern; });
/* harmony import */ var _time_data_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-data.generated */ "./node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js");

/**
 * Returns the best matching date time pattern if a date time skeleton
 * pattern is provided with a locale. Follows the Unicode specification:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#table-mapping-requested-time-skeletons-to-patterns
 * @param skeleton date time skeleton pattern that possibly includes j, J or C
 * @param locale
 */
function getBestPattern(skeleton, locale) {
  var skeletonCopy = '';
  for (var patternPos = 0; patternPos < skeleton.length; patternPos++) {
    var patternChar = skeleton.charAt(patternPos);
    if (patternChar === 'j') {
      var extraLength = 0;
      while (patternPos + 1 < skeleton.length && skeleton.charAt(patternPos + 1) === patternChar) {
        extraLength++;
        patternPos++;
      }
      var hourLen = 1 + (extraLength & 1);
      var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
      var dayPeriodChar = 'a';
      var hourChar = getDefaultHourSymbolFromLocale(locale);
      if (hourChar == 'H' || hourChar == 'k') {
        dayPeriodLen = 0;
      }
      while (dayPeriodLen-- > 0) {
        skeletonCopy += dayPeriodChar;
      }
      while (hourLen-- > 0) {
        skeletonCopy = hourChar + skeletonCopy;
      }
    } else if (patternChar === 'J') {
      skeletonCopy += 'H';
    } else {
      skeletonCopy += patternChar;
    }
  }
  return skeletonCopy;
}
/**
 * Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
 * of the given `locale` to the corresponding time pattern.
 * @param locale
 */
function getDefaultHourSymbolFromLocale(locale) {
  var hourCycle = locale.hourCycle;
  if (hourCycle === undefined &&
  // @ts-ignore hourCycle(s) is not identified yet
  locale.hourCycles &&
  // @ts-ignore
  locale.hourCycles.length) {
    // @ts-ignore
    hourCycle = locale.hourCycles[0];
  }
  if (hourCycle) {
    switch (hourCycle) {
      case 'h24':
        return 'k';
      case 'h23':
        return 'H';
      case 'h12':
        return 'h';
      case 'h11':
        return 'K';
      default:
        throw new Error('Invalid hourCycle');
    }
  }
  // TODO: Once hourCycle is fully supported remove the following with data generation
  var languageTag = locale.language;
  var regionTag;
  if (languageTag !== 'root') {
    regionTag = locale.maximize().region;
  }
  var hourCycles = _time_data_generated__WEBPACK_IMPORTED_MODULE_0__["timeData"][regionTag || ''] || _time_data_generated__WEBPACK_IMPORTED_MODULE_0__["timeData"][languageTag || ''] || _time_data_generated__WEBPACK_IMPORTED_MODULE_0__["timeData"]["".concat(languageTag, "-001")] || _time_data_generated__WEBPACK_IMPORTED_MODULE_0__["timeData"]['001'];
  return hourCycles[0];
}

/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/error.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/error.js ***!
  \**********************************************************************/
/*! exports provided: ErrorKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorKind", function() { return ErrorKind; });
var ErrorKind;
(function (ErrorKind) {
  /** Argument is unclosed (e.g. `{0`) */
  ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
  /** Argument is empty (e.g. `{}`). */
  ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
  /** Argument is malformed (e.g. `{foo!}``) */
  ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
  /** Expect an argument type (e.g. `{foo,}`) */
  ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
  /** Unsupported argument type (e.g. `{foo,foo}`) */
  ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
  /** Expect an argument style (e.g. `{foo, number, }`) */
  ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
  /** The number skeleton is invalid. */
  ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
  /** The date time skeleton is invalid. */
  ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
  /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
  ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
  /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
  ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
  /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
  ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
  /** Missing select argument options (e.g. `{foo, select}`) */
  ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
  /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
  ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
  /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
  ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
  /** Expecting a selector in `select` argument (e.g `{foo, select}`) */
  ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
  /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
  ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
  /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
  ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
  /**
   * Expecting a message fragment after the `plural` or `selectordinal` selector
   * (e.g. `{foo, plural, one}`)
   */
  ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
  /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
  ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
  /**
   * Duplicate selectors in `plural` or `selectordinal` argument.
   * (e.g. {foo, plural, one {#} one {#}})
   */
  ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
  /** Duplicate selectors in `select` argument.
   * (e.g. {foo, select, apple {apple} apple {apple}})
   */
  ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
  /** Plural or select argument option must have `other` clause. */
  ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
  /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
  ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
  /** The tag name is invalid. (e.g. `<123>foo</123>`) */
  ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
  /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
  ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
  /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
  ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})(ErrorKind || (ErrorKind = {}));

/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/index.js ***!
  \**********************************************************************/
/*! exports provided: parse, TYPE, SKELETON_TYPE, isLiteralElement, isArgumentElement, isNumberElement, isDateElement, isTimeElement, isSelectElement, isPluralElement, isPoundElement, isTagElement, isNumberSkeleton, isDateTimeSkeleton, createLiteralElement, createNumberElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/icu-messageformat-parser/lib/error.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser */ "./node_modules/@formatjs/icu-messageformat-parser/lib/parser.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./node_modules/@formatjs/icu-messageformat-parser/lib/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SKELETON_TYPE", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["SKELETON_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLiteralElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isLiteralElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArgumentElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isArgumentElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumberElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isNumberElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDateElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isDateElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTimeElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isTimeElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSelectElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isSelectElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPluralElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isPluralElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPoundElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isPoundElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTagElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isTagElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumberSkeleton", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isNumberSkeleton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDateTimeSkeleton", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isDateTimeSkeleton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLiteralElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["createLiteralElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNumberElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["createNumberElement"]; });





function pruneLocation(els) {
  els.forEach(function (el) {
    delete el.location;
    if (Object(_types__WEBPACK_IMPORTED_MODULE_3__["isSelectElement"])(el) || Object(_types__WEBPACK_IMPORTED_MODULE_3__["isPluralElement"])(el)) {
      for (var k in el.options) {
        delete el.options[k].location;
        pruneLocation(el.options[k].value);
      }
    } else if (Object(_types__WEBPACK_IMPORTED_MODULE_3__["isNumberElement"])(el) && Object(_types__WEBPACK_IMPORTED_MODULE_3__["isNumberSkeleton"])(el.style)) {
      delete el.style.location;
    } else if ((Object(_types__WEBPACK_IMPORTED_MODULE_3__["isDateElement"])(el) || Object(_types__WEBPACK_IMPORTED_MODULE_3__["isTimeElement"])(el)) && Object(_types__WEBPACK_IMPORTED_MODULE_3__["isDateTimeSkeleton"])(el.style)) {
      delete el.style.location;
    } else if (Object(_types__WEBPACK_IMPORTED_MODULE_3__["isTagElement"])(el)) {
      pruneLocation(el.children);
    }
  });
}
function parse(message, opts) {
  if (opts === void 0) {
    opts = {};
  }
  opts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    shouldParseSkeletons: true,
    requiresOtherClause: true
  }, opts);
  var result = new _parser__WEBPACK_IMPORTED_MODULE_2__["Parser"](message, opts).parse();
  if (result.err) {
    var error = SyntaxError(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"][result.err.kind]);
    // @ts-expect-error Assign to error object
    error.location = result.err.location;
    // @ts-expect-error Assign to error object
    error.originalMessage = result.err.message;
    throw error;
  }
  if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
    pruneLocation(result.val);
  }
  return result.val;
}


/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/parser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/parser.js ***!
  \***********************************************************************/
/*! exports provided: Parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/icu-messageformat-parser/lib/error.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/@formatjs/icu-messageformat-parser/lib/types.js");
/* harmony import */ var _regex_generated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./regex.generated */ "./node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js");
/* harmony import */ var _formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @formatjs/icu-skeleton-parser */ "./node_modules/@formatjs/icu-skeleton-parser/lib/index.js");
/* harmony import */ var _date_time_pattern_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-time-pattern-generator */ "./node_modules/@formatjs/icu-messageformat-parser/lib/date-time-pattern-generator.js");
var _a;






var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(_regex_generated__WEBPACK_IMPORTED_MODULE_3__["SPACE_SEPARATOR_REGEX"].source, "*"));
var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(_regex_generated__WEBPACK_IMPORTED_MODULE_3__["SPACE_SEPARATOR_REGEX"].source, "*$"));
function createLocation(start, end) {
  return {
    start: start,
    end: end
  };
}
// #region Ponyfills
// Consolidate these variables up top for easier toggling during debugging
var hasNativeStartsWith = !!String.prototype.startsWith;
var hasNativeFromCodePoint = !!String.fromCodePoint;
var hasNativeFromEntries = !!Object.fromEntries;
var hasNativeCodePointAt = !!String.prototype.codePointAt;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var hasNativeIsSafeInteger = !!Number.isSafeInteger;
var isSafeInteger = hasNativeIsSafeInteger ? Number.isSafeInteger : function (n) {
  return typeof n === 'number' && isFinite(n) && Math.floor(n) === n && Math.abs(n) <= 0x1fffffffffffff;
};
// IE11 does not support y and u.
var REGEX_SUPPORTS_U_AND_Y = true;
try {
  var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
  /**
   * legacy Edge or Xbox One browser
   * Unicode flag support: supported
   * Pattern_Syntax support: not supported
   * See https://github.com/formatjs/formatjs/issues/2822
   */
  REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec('a')) === null || _a === void 0 ? void 0 : _a[0]) === 'a';
} catch (_) {
  REGEX_SUPPORTS_U_AND_Y = false;
}
var startsWith = hasNativeStartsWith ?
// Native
function startsWith(s, search, position) {
  return s.startsWith(search, position);
} :
// For IE11
function startsWith(s, search, position) {
  return s.slice(position, position + search.length) === search;
};
var fromCodePoint = hasNativeFromCodePoint ? String.fromCodePoint :
// IE11
function fromCodePoint() {
  var codePoints = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    codePoints[_i] = arguments[_i];
  }
  var elements = '';
  var length = codePoints.length;
  var i = 0;
  var code;
  while (length > i) {
    code = codePoints[i++];
    if (code > 0x10ffff) throw RangeError(code + ' is not a valid code point');
    elements += code < 0x10000 ? String.fromCharCode(code) : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00);
  }
  return elements;
};
var fromEntries =
// native
hasNativeFromEntries ? Object.fromEntries :
// Ponyfill
function fromEntries(entries) {
  var obj = {};
  for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
    var _a = entries_1[_i],
      k = _a[0],
      v = _a[1];
    obj[k] = v;
  }
  return obj;
};
var codePointAt = hasNativeCodePointAt ?
// Native
function codePointAt(s, index) {
  return s.codePointAt(index);
} :
// IE 11
function codePointAt(s, index) {
  var size = s.length;
  if (index < 0 || index >= size) {
    return undefined;
  }
  var first = s.charCodeAt(index);
  var second;
  return first < 0xd800 || first > 0xdbff || index + 1 === size || (second = s.charCodeAt(index + 1)) < 0xdc00 || second > 0xdfff ? first : (first - 0xd800 << 10) + (second - 0xdc00) + 0x10000;
};
var trimStart = hasTrimStart ?
// Native
function trimStart(s) {
  return s.trimStart();
} :
// Ponyfill
function trimStart(s) {
  return s.replace(SPACE_SEPARATOR_START_REGEX, '');
};
var trimEnd = hasTrimEnd ?
// Native
function trimEnd(s) {
  return s.trimEnd();
} :
// Ponyfill
function trimEnd(s) {
  return s.replace(SPACE_SEPARATOR_END_REGEX, '');
};
// Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
function RE(s, flag) {
  return new RegExp(s, flag);
}
// #endregion
var matchIdentifierAtIndex;
if (REGEX_SUPPORTS_U_AND_Y) {
  // Native
  var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
  matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
    var _a;
    IDENTIFIER_PREFIX_RE_1.lastIndex = index;
    var match = IDENTIFIER_PREFIX_RE_1.exec(s);
    return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
  };
} else {
  // IE11
  matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
    var match = [];
    while (true) {
      var c = codePointAt(s, index);
      if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
        break;
      }
      match.push(c);
      index += c >= 0x10000 ? 2 : 1;
    }
    return fromCodePoint.apply(void 0, match);
  };
}
var Parser = /** @class */function () {
  function Parser(message, options) {
    if (options === void 0) {
      options = {};
    }
    this.message = message;
    this.position = {
      offset: 0,
      line: 1,
      column: 1
    };
    this.ignoreTag = !!options.ignoreTag;
    this.locale = options.locale;
    this.requiresOtherClause = !!options.requiresOtherClause;
    this.shouldParseSkeletons = !!options.shouldParseSkeletons;
  }
  Parser.prototype.parse = function () {
    if (this.offset() !== 0) {
      throw Error('parser can only be used once');
    }
    return this.parseMessage(0, '', false);
  };
  Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
    var elements = [];
    while (!this.isEOF()) {
      var char = this.char();
      if (char === 123 /* `{` */) {
        var result = this.parseArgument(nestingLevel, expectingCloseTag);
        if (result.err) {
          return result;
        }
        elements.push(result.val);
      } else if (char === 125 /* `}` */ && nestingLevel > 0) {
        break;
      } else if (char === 35 /* `#` */ && (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
        var position = this.clonePosition();
        this.bump();
        elements.push({
          type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].pound,
          location: createLocation(position, this.clonePosition())
        });
      } else if (char === 60 /* `<` */ && !this.ignoreTag && this.peek() === 47 // char code for '/'
      ) {
        if (expectingCloseTag) {
          break;
        } else {
          return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
        }
      } else if (char === 60 /* `<` */ && !this.ignoreTag && _isAlpha(this.peek() || 0)) {
        var result = this.parseTag(nestingLevel, parentArgType);
        if (result.err) {
          return result;
        }
        elements.push(result.val);
      } else {
        var result = this.parseLiteral(nestingLevel, parentArgType);
        if (result.err) {
          return result;
        }
        elements.push(result.val);
      }
    }
    return {
      val: elements,
      err: null
    };
  };
  /**
   * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
   * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
   * are accepted:
   *
   * ```
   * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
   * tagName ::= [a-z] (PENChar)*
   * PENChar ::=
   *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
   *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
   *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
   * ```
   *
   * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
   * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
   * since other tag-based engines like React allow it
   */
  Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
    var startPosition = this.clonePosition();
    this.bump(); // `<`
    var tagName = this.parseTagName();
    this.bumpSpace();
    if (this.bumpIf('/>')) {
      // Self closing tag
      return {
        val: {
          type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].literal,
          value: "<".concat(tagName, "/>"),
          location: createLocation(startPosition, this.clonePosition())
        },
        err: null
      };
    } else if (this.bumpIf('>')) {
      var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
      if (childrenResult.err) {
        return childrenResult;
      }
      var children = childrenResult.val;
      // Expecting a close tag
      var endTagStartPosition = this.clonePosition();
      if (this.bumpIf('</')) {
        if (this.isEOF() || !_isAlpha(this.char())) {
          return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
        }
        var closingTagNameStartPosition = this.clonePosition();
        var closingTagName = this.parseTagName();
        if (tagName !== closingTagName) {
          return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
        }
        this.bumpSpace();
        if (!this.bumpIf('>')) {
          return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
        }
        return {
          val: {
            type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].tag,
            value: tagName,
            children: children,
            location: createLocation(startPosition, this.clonePosition())
          },
          err: null
        };
      } else {
        return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
      }
    } else {
      return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].INVALID_TAG, createLocation(startPosition, this.clonePosition()));
    }
  };
  /**
   * This method assumes that the caller has peeked ahead for the first tag character.
   */
  Parser.prototype.parseTagName = function () {
    var startOffset = this.offset();
    this.bump(); // the first tag name character
    while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
      this.bump();
    }
    return this.message.slice(startOffset, this.offset());
  };
  Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
    var start = this.clonePosition();
    var value = '';
    while (true) {
      var parseQuoteResult = this.tryParseQuote(parentArgType);
      if (parseQuoteResult) {
        value += parseQuoteResult;
        continue;
      }
      var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
      if (parseUnquotedResult) {
        value += parseUnquotedResult;
        continue;
      }
      var parseLeftAngleResult = this.tryParseLeftAngleBracket();
      if (parseLeftAngleResult) {
        value += parseLeftAngleResult;
        continue;
      }
      break;
    }
    var location = createLocation(start, this.clonePosition());
    return {
      val: {
        type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].literal,
        value: value,
        location: location
      },
      err: null
    };
  };
  Parser.prototype.tryParseLeftAngleBracket = function () {
    if (!this.isEOF() && this.char() === 60 /* `<` */ && (this.ignoreTag ||
    // If at the opening tag or closing tag position, bail.
    !_isAlphaOrSlash(this.peek() || 0))) {
      this.bump(); // `<`
      return '<';
    }
    return null;
  };
  /**
   * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
   * a character that requires quoting (that is, "only where needed"), and works the same in
   * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
   */
  Parser.prototype.tryParseQuote = function (parentArgType) {
    if (this.isEOF() || this.char() !== 39 /* `'` */) {
      return null;
    }
    // Parse escaped char following the apostrophe, or early return if there is no escaped char.
    // Check if is valid escaped character
    switch (this.peek()) {
      case 39 /* `'` */:
        // double quote, should return as a single quote.
        this.bump();
        this.bump();
        return "'";
      // '{', '<', '>', '}'
      case 123:
      case 60:
      case 62:
      case 125:
        break;
      case 35:
        // '#'
        if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
          break;
        }
        return null;
      default:
        return null;
    }
    this.bump(); // apostrophe
    var codePoints = [this.char()]; // escaped char
    this.bump();
    // read chars until the optional closing apostrophe is found
    while (!this.isEOF()) {
      var ch = this.char();
      if (ch === 39 /* `'` */) {
        if (this.peek() === 39 /* `'` */) {
          codePoints.push(39);
          // Bump one more time because we need to skip 2 characters.
          this.bump();
        } else {
          // Optional closing apostrophe.
          this.bump();
          break;
        }
      } else {
        codePoints.push(ch);
      }
      this.bump();
    }
    return fromCodePoint.apply(void 0, codePoints);
  };
  Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
    if (this.isEOF()) {
      return null;
    }
    var ch = this.char();
    if (ch === 60 /* `<` */ || ch === 123 /* `{` */ || ch === 35 /* `#` */ && (parentArgType === 'plural' || parentArgType === 'selectordinal') || ch === 125 /* `}` */ && nestingLevel > 0) {
      return null;
    } else {
      this.bump();
      return fromCodePoint(ch);
    }
  };
  Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
    var openingBracePosition = this.clonePosition();
    this.bump(); // `{`
    this.bumpSpace();
    if (this.isEOF()) {
      return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
    }
    if (this.char() === 125 /* `}` */) {
      this.bump();
      return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
    }
    // argument name
    var value = this.parseIdentifierIfPossible().value;
    if (!value) {
      return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
    }
    this.bumpSpace();
    if (this.isEOF()) {
      return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
    }
    switch (this.char()) {
      // Simple argument: `{name}`
      case 125 /* `}` */:
        {
          this.bump(); // `}`
          return {
            val: {
              type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].argument,
              // value does not include the opening and closing braces.
              value: value,
              location: createLocation(openingBracePosition, this.clonePosition())
            },
            err: null
          };
        }
      // Argument with options: `{name, format, ...}`
      case 44 /* `,` */:
        {
          this.bump(); // `,`
          this.bumpSpace();
          if (this.isEOF()) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
          }
          return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
        }
      default:
        return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
    }
  };
  /**
   * Advance the parser until the end of the identifier, if it is currently on
   * an identifier character. Return an empty string otherwise.
   */
  Parser.prototype.parseIdentifierIfPossible = function () {
    var startingPosition = this.clonePosition();
    var startOffset = this.offset();
    var value = matchIdentifierAtIndex(this.message, startOffset);
    var endOffset = startOffset + value.length;
    this.bumpTo(endOffset);
    var endPosition = this.clonePosition();
    var location = createLocation(startingPosition, endPosition);
    return {
      value: value,
      location: location
    };
  };
  Parser.prototype.parseArgumentOptions = function (nestingLevel, expectingCloseTag, value, openingBracePosition) {
    var _a;
    // Parse this range:
    // {name, type, style}
    //        ^---^
    var typeStartPosition = this.clonePosition();
    var argType = this.parseIdentifierIfPossible().value;
    var typeEndPosition = this.clonePosition();
    switch (argType) {
      case '':
        // Expecting a style string number, date, time, plural, selectordinal, or select.
        return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
      case 'number':
      case 'date':
      case 'time':
        {
          // Parse this range:
          // {name, number, style}
          //              ^-------^
          this.bumpSpace();
          var styleAndLocation = null;
          if (this.bumpIf(',')) {
            this.bumpSpace();
            var styleStartPosition = this.clonePosition();
            var result = this.parseSimpleArgStyleIfPossible();
            if (result.err) {
              return result;
            }
            var style = trimEnd(result.val);
            if (style.length === 0) {
              return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
            }
            var styleLocation = createLocation(styleStartPosition, this.clonePosition());
            styleAndLocation = {
              style: style,
              styleLocation: styleLocation
            };
          }
          var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
          if (argCloseResult.err) {
            return argCloseResult;
          }
          var location_1 = createLocation(openingBracePosition, this.clonePosition());
          // Extract style or skeleton
          if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
            // Skeleton starts with `::`.
            var skeleton = trimStart(styleAndLocation.style.slice(2));
            if (argType === 'number') {
              var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
              if (result.err) {
                return result;
              }
              return {
                val: {
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].number,
                  value: value,
                  location: location_1,
                  style: result.val
                },
                err: null
              };
            } else {
              if (skeleton.length === 0) {
                return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_DATE_TIME_SKELETON, location_1);
              }
              var dateTimePattern = skeleton;
              // Get "best match" pattern only if locale is passed, if not, let it
              // pass as-is where `parseDateTimeSkeleton()` will throw an error
              // for unsupported patterns.
              if (this.locale) {
                dateTimePattern = Object(_date_time_pattern_generator__WEBPACK_IMPORTED_MODULE_5__["getBestPattern"])(skeleton, this.locale);
              }
              var style = {
                type: _types__WEBPACK_IMPORTED_MODULE_2__["SKELETON_TYPE"].dateTime,
                pattern: dateTimePattern,
                location: styleAndLocation.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Object(_formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_4__["parseDateTimeSkeleton"])(dateTimePattern) : {}
              };
              var type = argType === 'date' ? _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].date : _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].time;
              return {
                val: {
                  type: type,
                  value: value,
                  location: location_1,
                  style: style
                },
                err: null
              };
            }
          }
          // Regular style or no style.
          return {
            val: {
              type: argType === 'number' ? _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].number : argType === 'date' ? _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].date : _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].time,
              value: value,
              location: location_1,
              style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null
            },
            err: null
          };
        }
      case 'plural':
      case 'selectordinal':
      case 'select':
        {
          // Parse this range:
          // {name, plural, options}
          //              ^---------^
          var typeEndPosition_1 = this.clonePosition();
          this.bumpSpace();
          if (!this.bumpIf(',')) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, typeEndPosition_1)));
          }
          this.bumpSpace();
          // Parse offset:
          // {name, plural, offset:1, options}
          //                ^-----^
          //
          // or the first option:
          //
          // {name, plural, one {...} other {...}}
          //                ^--^
          var identifierAndLocation = this.parseIdentifierIfPossible();
          var pluralOffset = 0;
          if (argType !== 'select' && identifierAndLocation.value === 'offset') {
            if (!this.bumpIf(':')) {
              return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
            }
            this.bumpSpace();
            var result = this.tryParseDecimalInteger(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (result.err) {
              return result;
            }
            // Parse another identifier for option parsing
            this.bumpSpace();
            identifierAndLocation = this.parseIdentifierIfPossible();
            pluralOffset = result.val;
          }
          var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
          if (optionsResult.err) {
            return optionsResult;
          }
          var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
          if (argCloseResult.err) {
            return argCloseResult;
          }
          var location_2 = createLocation(openingBracePosition, this.clonePosition());
          if (argType === 'select') {
            return {
              val: {
                type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].select,
                value: value,
                options: fromEntries(optionsResult.val),
                location: location_2
              },
              err: null
            };
          } else {
            return {
              val: {
                type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].plural,
                value: value,
                options: fromEntries(optionsResult.val),
                offset: pluralOffset,
                pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                location: location_2
              },
              err: null
            };
          }
        }
      default:
        return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
    }
  };
  Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
    // Parse: {value, number, ::currency/GBP }
    //
    if (this.isEOF() || this.char() !== 125 /* `}` */) {
      return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
    }
    this.bump(); // `}`
    return {
      val: true,
      err: null
    };
  };
  /**
   * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
   */
  Parser.prototype.parseSimpleArgStyleIfPossible = function () {
    var nestedBraces = 0;
    var startPosition = this.clonePosition();
    while (!this.isEOF()) {
      var ch = this.char();
      switch (ch) {
        case 39 /* `'` */:
          {
            // Treat apostrophe as quoting but include it in the style part.
            // Find the end of the quoted literal text.
            this.bump();
            var apostrophePosition = this.clonePosition();
            if (!this.bumpUntil("'")) {
              return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
            }
            this.bump();
            break;
          }
        case 123 /* `{` */:
          {
            nestedBraces += 1;
            this.bump();
            break;
          }
        case 125 /* `}` */:
          {
            if (nestedBraces > 0) {
              nestedBraces -= 1;
            } else {
              return {
                val: this.message.slice(startPosition.offset, this.offset()),
                err: null
              };
            }
            break;
          }
        default:
          this.bump();
          break;
      }
    }
    return {
      val: this.message.slice(startPosition.offset, this.offset()),
      err: null
    };
  };
  Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
    var tokens = [];
    try {
      tokens = Object(_formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_4__["parseNumberSkeletonFromString"])(skeleton);
    } catch (e) {
      return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].INVALID_NUMBER_SKELETON, location);
    }
    return {
      val: {
        type: _types__WEBPACK_IMPORTED_MODULE_2__["SKELETON_TYPE"].number,
        tokens: tokens,
        location: location,
        parsedOptions: this.shouldParseSkeletons ? Object(_formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_4__["parseNumberSkeleton"])(tokens) : {}
      },
      err: null
    };
  };
  /**
   * @param nesting_level The current nesting level of messages.
   *     This can be positive when parsing message fragment in select or plural argument options.
   * @param parent_arg_type The parent argument's type.
   * @param parsed_first_identifier If provided, this is the first identifier-like selector of
   *     the argument. It is a by-product of a previous parsing attempt.
   * @param expecting_close_tag If true, this message is directly or indirectly nested inside
   *     between a pair of opening and closing tags. The nested message will not parse beyond
   *     the closing tag boundary.
   */
  Parser.prototype.tryParsePluralOrSelectOptions = function (nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
    var _a;
    var hasOtherClause = false;
    var options = [];
    var parsedSelectors = new Set();
    var selector = parsedFirstIdentifier.value,
      selectorLocation = parsedFirstIdentifier.location;
    // Parse:
    // one {one apple}
    // ^--^
    while (true) {
      if (selector.length === 0) {
        var startPosition = this.clonePosition();
        if (parentArgType !== 'select' && this.bumpIf('=')) {
          // Try parse `={number}` selector
          var result = this.tryParseDecimalInteger(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_PLURAL_ARGUMENT_SELECTOR, _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].INVALID_PLURAL_ARGUMENT_SELECTOR);
          if (result.err) {
            return result;
          }
          selectorLocation = createLocation(startPosition, this.clonePosition());
          selector = this.message.slice(startPosition.offset, this.offset());
        } else {
          break;
        }
      }
      // Duplicate selector clauses
      if (parsedSelectors.has(selector)) {
        return this.error(parentArgType === 'select' ? _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].DUPLICATE_SELECT_ARGUMENT_SELECTOR : _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
      }
      if (selector === 'other') {
        hasOtherClause = true;
      }
      // Parse:
      // one {one apple}
      //     ^----------^
      this.bumpSpace();
      var openingBracePosition = this.clonePosition();
      if (!this.bumpIf('{')) {
        return this.error(parentArgType === 'select' ? _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
      }
      var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
      if (fragmentResult.err) {
        return fragmentResult;
      }
      var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
      if (argCloseResult.err) {
        return argCloseResult;
      }
      options.push([selector, {
        value: fragmentResult.val,
        location: createLocation(openingBracePosition, this.clonePosition())
      }]);
      // Keep track of the existing selectors
      parsedSelectors.add(selector);
      // Prep next selector clause.
      this.bumpSpace();
      _a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location;
    }
    if (options.length === 0) {
      return this.error(parentArgType === 'select' ? _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_SELECT_ARGUMENT_SELECTOR : _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
    }
    if (this.requiresOtherClause && !hasOtherClause) {
      return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
    }
    return {
      val: options,
      err: null
    };
  };
  Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
    var sign = 1;
    var startingPosition = this.clonePosition();
    if (this.bumpIf('+')) {} else if (this.bumpIf('-')) {
      sign = -1;
    }
    var hasDigits = false;
    var decimal = 0;
    while (!this.isEOF()) {
      var ch = this.char();
      if (ch >= 48 /* `0` */ && ch <= 57 /* `9` */) {
        hasDigits = true;
        decimal = decimal * 10 + (ch - 48);
        this.bump();
      } else {
        break;
      }
    }
    var location = createLocation(startingPosition, this.clonePosition());
    if (!hasDigits) {
      return this.error(expectNumberError, location);
    }
    decimal *= sign;
    if (!isSafeInteger(decimal)) {
      return this.error(invalidNumberError, location);
    }
    return {
      val: decimal,
      err: null
    };
  };
  Parser.prototype.offset = function () {
    return this.position.offset;
  };
  Parser.prototype.isEOF = function () {
    return this.offset() === this.message.length;
  };
  Parser.prototype.clonePosition = function () {
    // This is much faster than `Object.assign` or spread.
    return {
      offset: this.position.offset,
      line: this.position.line,
      column: this.position.column
    };
  };
  /**
   * Return the code point at the current position of the parser.
   * Throws if the index is out of bound.
   */
  Parser.prototype.char = function () {
    var offset = this.position.offset;
    if (offset >= this.message.length) {
      throw Error('out of bound');
    }
    var code = codePointAt(this.message, offset);
    if (code === undefined) {
      throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
    }
    return code;
  };
  Parser.prototype.error = function (kind, location) {
    return {
      val: null,
      err: {
        kind: kind,
        message: this.message,
        location: location
      }
    };
  };
  /** Bump the parser to the next UTF-16 code unit. */
  Parser.prototype.bump = function () {
    if (this.isEOF()) {
      return;
    }
    var code = this.char();
    if (code === 10 /* '\n' */) {
      this.position.line += 1;
      this.position.column = 1;
      this.position.offset += 1;
    } else {
      this.position.column += 1;
      // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
      this.position.offset += code < 0x10000 ? 1 : 2;
    }
  };
  /**
   * If the substring starting at the current position of the parser has
   * the given prefix, then bump the parser to the character immediately
   * following the prefix and return true. Otherwise, don't bump the parser
   * and return false.
   */
  Parser.prototype.bumpIf = function (prefix) {
    if (startsWith(this.message, prefix, this.offset())) {
      for (var i = 0; i < prefix.length; i++) {
        this.bump();
      }
      return true;
    }
    return false;
  };
  /**
   * Bump the parser until the pattern character is found and return `true`.
   * Otherwise bump to the end of the file and return `false`.
   */
  Parser.prototype.bumpUntil = function (pattern) {
    var currentOffset = this.offset();
    var index = this.message.indexOf(pattern, currentOffset);
    if (index >= 0) {
      this.bumpTo(index);
      return true;
    } else {
      this.bumpTo(this.message.length);
      return false;
    }
  };
  /**
   * Bump the parser to the target offset.
   * If target offset is beyond the end of the input, bump the parser to the end of the input.
   */
  Parser.prototype.bumpTo = function (targetOffset) {
    if (this.offset() > targetOffset) {
      throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
    }
    targetOffset = Math.min(targetOffset, this.message.length);
    while (true) {
      var offset = this.offset();
      if (offset === targetOffset) {
        break;
      }
      if (offset > targetOffset) {
        throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
      }
      this.bump();
      if (this.isEOF()) {
        break;
      }
    }
  };
  /** advance the parser through all whitespace to the next non-whitespace code unit. */
  Parser.prototype.bumpSpace = function () {
    while (!this.isEOF() && _isWhiteSpace(this.char())) {
      this.bump();
    }
  };
  /**
   * Peek at the *next* Unicode codepoint in the input without advancing the parser.
   * If the input has been exhausted, then this returns null.
   */
  Parser.prototype.peek = function () {
    if (this.isEOF()) {
      return null;
    }
    var code = this.char();
    var offset = this.offset();
    var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
    return nextCode !== null && nextCode !== void 0 ? nextCode : null;
  };
  return Parser;
}();

/**
 * This check if codepoint is alphabet (lower & uppercase)
 * @param codepoint
 * @returns
 */
function _isAlpha(codepoint) {
  return codepoint >= 97 && codepoint <= 122 || codepoint >= 65 && codepoint <= 90;
}
function _isAlphaOrSlash(codepoint) {
  return _isAlpha(codepoint) || codepoint === 47; /* '/' */
}
/** See `parseTag` function docs. */
function _isPotentialElementNameChar(c) {
  return c === 45 /* '-' */ || c === 46 /* '.' */ || c >= 48 && c <= 57 /* 0..9 */ || c === 95 /* '_' */ || c >= 97 && c <= 122 /** a..z */ || c >= 65 && c <= 90 /* A..Z */ || c == 0xb7 || c >= 0xc0 && c <= 0xd6 || c >= 0xd8 && c <= 0xf6 || c >= 0xf8 && c <= 0x37d || c >= 0x37f && c <= 0x1fff || c >= 0x200c && c <= 0x200d || c >= 0x203f && c <= 0x2040 || c >= 0x2070 && c <= 0x218f || c >= 0x2c00 && c <= 0x2fef || c >= 0x3001 && c <= 0xd7ff || c >= 0xf900 && c <= 0xfdcf || c >= 0xfdf0 && c <= 0xfffd || c >= 0x10000 && c <= 0xeffff;
}
/**
 * Code point equivalent of regex `\p{White_Space}`.
 * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isWhiteSpace(c) {
  return c >= 0x0009 && c <= 0x000d || c === 0x0020 || c === 0x0085 || c >= 0x200e && c <= 0x200f || c === 0x2028 || c === 0x2029;
}
/**
 * Code point equivalent of regex `\p{Pattern_Syntax}`.
 * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isPatternSyntax(c) {
  return c >= 0x0021 && c <= 0x0023 || c === 0x0024 || c >= 0x0025 && c <= 0x0027 || c === 0x0028 || c === 0x0029 || c === 0x002a || c === 0x002b || c === 0x002c || c === 0x002d || c >= 0x002e && c <= 0x002f || c >= 0x003a && c <= 0x003b || c >= 0x003c && c <= 0x003e || c >= 0x003f && c <= 0x0040 || c === 0x005b || c === 0x005c || c === 0x005d || c === 0x005e || c === 0x0060 || c === 0x007b || c === 0x007c || c === 0x007d || c === 0x007e || c === 0x00a1 || c >= 0x00a2 && c <= 0x00a5 || c === 0x00a6 || c === 0x00a7 || c === 0x00a9 || c === 0x00ab || c === 0x00ac || c === 0x00ae || c === 0x00b0 || c === 0x00b1 || c === 0x00b6 || c === 0x00bb || c === 0x00bf || c === 0x00d7 || c === 0x00f7 || c >= 0x2010 && c <= 0x2015 || c >= 0x2016 && c <= 0x2017 || c === 0x2018 || c === 0x2019 || c === 0x201a || c >= 0x201b && c <= 0x201c || c === 0x201d || c === 0x201e || c === 0x201f || c >= 0x2020 && c <= 0x2027 || c >= 0x2030 && c <= 0x2038 || c === 0x2039 || c === 0x203a || c >= 0x203b && c <= 0x203e || c >= 0x2041 && c <= 0x2043 || c === 0x2044 || c === 0x2045 || c === 0x2046 || c >= 0x2047 && c <= 0x2051 || c === 0x2052 || c === 0x2053 || c >= 0x2055 && c <= 0x205e || c >= 0x2190 && c <= 0x2194 || c >= 0x2195 && c <= 0x2199 || c >= 0x219a && c <= 0x219b || c >= 0x219c && c <= 0x219f || c === 0x21a0 || c >= 0x21a1 && c <= 0x21a2 || c === 0x21a3 || c >= 0x21a4 && c <= 0x21a5 || c === 0x21a6 || c >= 0x21a7 && c <= 0x21ad || c === 0x21ae || c >= 0x21af && c <= 0x21cd || c >= 0x21ce && c <= 0x21cf || c >= 0x21d0 && c <= 0x21d1 || c === 0x21d2 || c === 0x21d3 || c === 0x21d4 || c >= 0x21d5 && c <= 0x21f3 || c >= 0x21f4 && c <= 0x22ff || c >= 0x2300 && c <= 0x2307 || c === 0x2308 || c === 0x2309 || c === 0x230a || c === 0x230b || c >= 0x230c && c <= 0x231f || c >= 0x2320 && c <= 0x2321 || c >= 0x2322 && c <= 0x2328 || c === 0x2329 || c === 0x232a || c >= 0x232b && c <= 0x237b || c === 0x237c || c >= 0x237d && c <= 0x239a || c >= 0x239b && c <= 0x23b3 || c >= 0x23b4 && c <= 0x23db || c >= 0x23dc && c <= 0x23e1 || c >= 0x23e2 && c <= 0x2426 || c >= 0x2427 && c <= 0x243f || c >= 0x2440 && c <= 0x244a || c >= 0x244b && c <= 0x245f || c >= 0x2500 && c <= 0x25b6 || c === 0x25b7 || c >= 0x25b8 && c <= 0x25c0 || c === 0x25c1 || c >= 0x25c2 && c <= 0x25f7 || c >= 0x25f8 && c <= 0x25ff || c >= 0x2600 && c <= 0x266e || c === 0x266f || c >= 0x2670 && c <= 0x2767 || c === 0x2768 || c === 0x2769 || c === 0x276a || c === 0x276b || c === 0x276c || c === 0x276d || c === 0x276e || c === 0x276f || c === 0x2770 || c === 0x2771 || c === 0x2772 || c === 0x2773 || c === 0x2774 || c === 0x2775 || c >= 0x2794 && c <= 0x27bf || c >= 0x27c0 && c <= 0x27c4 || c === 0x27c5 || c === 0x27c6 || c >= 0x27c7 && c <= 0x27e5 || c === 0x27e6 || c === 0x27e7 || c === 0x27e8 || c === 0x27e9 || c === 0x27ea || c === 0x27eb || c === 0x27ec || c === 0x27ed || c === 0x27ee || c === 0x27ef || c >= 0x27f0 && c <= 0x27ff || c >= 0x2800 && c <= 0x28ff || c >= 0x2900 && c <= 0x2982 || c === 0x2983 || c === 0x2984 || c === 0x2985 || c === 0x2986 || c === 0x2987 || c === 0x2988 || c === 0x2989 || c === 0x298a || c === 0x298b || c === 0x298c || c === 0x298d || c === 0x298e || c === 0x298f || c === 0x2990 || c === 0x2991 || c === 0x2992 || c === 0x2993 || c === 0x2994 || c === 0x2995 || c === 0x2996 || c === 0x2997 || c === 0x2998 || c >= 0x2999 && c <= 0x29d7 || c === 0x29d8 || c === 0x29d9 || c === 0x29da || c === 0x29db || c >= 0x29dc && c <= 0x29fb || c === 0x29fc || c === 0x29fd || c >= 0x29fe && c <= 0x2aff || c >= 0x2b00 && c <= 0x2b2f || c >= 0x2b30 && c <= 0x2b44 || c >= 0x2b45 && c <= 0x2b46 || c >= 0x2b47 && c <= 0x2b4c || c >= 0x2b4d && c <= 0x2b73 || c >= 0x2b74 && c <= 0x2b75 || c >= 0x2b76 && c <= 0x2b95 || c === 0x2b96 || c >= 0x2b97 && c <= 0x2bff || c >= 0x2e00 && c <= 0x2e01 || c === 0x2e02 || c === 0x2e03 || c === 0x2e04 || c === 0x2e05 || c >= 0x2e06 && c <= 0x2e08 || c === 0x2e09 || c === 0x2e0a || c === 0x2e0b || c === 0x2e0c || c === 0x2e0d || c >= 0x2e0e && c <= 0x2e16 || c === 0x2e17 || c >= 0x2e18 && c <= 0x2e19 || c === 0x2e1a || c === 0x2e1b || c === 0x2e1c || c === 0x2e1d || c >= 0x2e1e && c <= 0x2e1f || c === 0x2e20 || c === 0x2e21 || c === 0x2e22 || c === 0x2e23 || c === 0x2e24 || c === 0x2e25 || c === 0x2e26 || c === 0x2e27 || c === 0x2e28 || c === 0x2e29 || c >= 0x2e2a && c <= 0x2e2e || c === 0x2e2f || c >= 0x2e30 && c <= 0x2e39 || c >= 0x2e3a && c <= 0x2e3b || c >= 0x2e3c && c <= 0x2e3f || c === 0x2e40 || c === 0x2e41 || c === 0x2e42 || c >= 0x2e43 && c <= 0x2e4f || c >= 0x2e50 && c <= 0x2e51 || c === 0x2e52 || c >= 0x2e53 && c <= 0x2e7f || c >= 0x3001 && c <= 0x3003 || c === 0x3008 || c === 0x3009 || c === 0x300a || c === 0x300b || c === 0x300c || c === 0x300d || c === 0x300e || c === 0x300f || c === 0x3010 || c === 0x3011 || c >= 0x3012 && c <= 0x3013 || c === 0x3014 || c === 0x3015 || c === 0x3016 || c === 0x3017 || c === 0x3018 || c === 0x3019 || c === 0x301a || c === 0x301b || c === 0x301c || c === 0x301d || c >= 0x301e && c <= 0x301f || c === 0x3020 || c === 0x3030 || c === 0xfd3e || c === 0xfd3f || c >= 0xfe45 && c <= 0xfe46;
}

/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js ***!
  \********************************************************************************/
/*! exports provided: SPACE_SEPARATOR_REGEX, WHITE_SPACE_REGEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE_SEPARATOR_REGEX", function() { return SPACE_SEPARATOR_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHITE_SPACE_REGEX", function() { return WHITE_SPACE_REGEX; });
// @generated from regex-gen.ts
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/;

/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js ***!
  \************************************************************************************/
/*! exports provided: timeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeData", function() { return timeData; });
// @generated from time-data-gen.ts
// prettier-ignore  
var timeData = {
  "AX": ["H"],
  "BQ": ["H"],
  "CP": ["H"],
  "CZ": ["H"],
  "DK": ["H"],
  "FI": ["H"],
  "ID": ["H"],
  "IS": ["H"],
  "ML": ["H"],
  "NE": ["H"],
  "RU": ["H"],
  "SE": ["H"],
  "SJ": ["H"],
  "SK": ["H"],
  "AS": ["h", "H"],
  "BT": ["h", "H"],
  "DJ": ["h", "H"],
  "ER": ["h", "H"],
  "GH": ["h", "H"],
  "IN": ["h", "H"],
  "LS": ["h", "H"],
  "PG": ["h", "H"],
  "PW": ["h", "H"],
  "SO": ["h", "H"],
  "TO": ["h", "H"],
  "VU": ["h", "H"],
  "WS": ["h", "H"],
  "001": ["H", "h"],
  "AL": ["h", "H", "hB"],
  "TD": ["h", "H", "hB"],
  "ca-ES": ["H", "h", "hB"],
  "CF": ["H", "h", "hB"],
  "CM": ["H", "h", "hB"],
  "fr-CA": ["H", "h", "hB"],
  "gl-ES": ["H", "h", "hB"],
  "it-CH": ["H", "h", "hB"],
  "it-IT": ["H", "h", "hB"],
  "LU": ["H", "h", "hB"],
  "NP": ["H", "h", "hB"],
  "PF": ["H", "h", "hB"],
  "SC": ["H", "h", "hB"],
  "SM": ["H", "h", "hB"],
  "SN": ["H", "h", "hB"],
  "TF": ["H", "h", "hB"],
  "VA": ["H", "h", "hB"],
  "CY": ["h", "H", "hb", "hB"],
  "GR": ["h", "H", "hb", "hB"],
  "CO": ["h", "H", "hB", "hb"],
  "DO": ["h", "H", "hB", "hb"],
  "KP": ["h", "H", "hB", "hb"],
  "KR": ["h", "H", "hB", "hb"],
  "NA": ["h", "H", "hB", "hb"],
  "PA": ["h", "H", "hB", "hb"],
  "PR": ["h", "H", "hB", "hb"],
  "VE": ["h", "H", "hB", "hb"],
  "AC": ["H", "h", "hb", "hB"],
  "AI": ["H", "h", "hb", "hB"],
  "BW": ["H", "h", "hb", "hB"],
  "BZ": ["H", "h", "hb", "hB"],
  "CC": ["H", "h", "hb", "hB"],
  "CK": ["H", "h", "hb", "hB"],
  "CX": ["H", "h", "hb", "hB"],
  "DG": ["H", "h", "hb", "hB"],
  "FK": ["H", "h", "hb", "hB"],
  "GB": ["H", "h", "hb", "hB"],
  "GG": ["H", "h", "hb", "hB"],
  "GI": ["H", "h", "hb", "hB"],
  "IE": ["H", "h", "hb", "hB"],
  "IM": ["H", "h", "hb", "hB"],
  "IO": ["H", "h", "hb", "hB"],
  "JE": ["H", "h", "hb", "hB"],
  "LT": ["H", "h", "hb", "hB"],
  "MK": ["H", "h", "hb", "hB"],
  "MN": ["H", "h", "hb", "hB"],
  "MS": ["H", "h", "hb", "hB"],
  "NF": ["H", "h", "hb", "hB"],
  "NG": ["H", "h", "hb", "hB"],
  "NR": ["H", "h", "hb", "hB"],
  "NU": ["H", "h", "hb", "hB"],
  "PN": ["H", "h", "hb", "hB"],
  "SH": ["H", "h", "hb", "hB"],
  "SX": ["H", "h", "hb", "hB"],
  "TA": ["H", "h", "hb", "hB"],
  "ZA": ["H", "h", "hb", "hB"],
  "af-ZA": ["H", "h", "hB", "hb"],
  "AR": ["H", "h", "hB", "hb"],
  "CL": ["H", "h", "hB", "hb"],
  "CR": ["H", "h", "hB", "hb"],
  "CU": ["H", "h", "hB", "hb"],
  "EA": ["H", "h", "hB", "hb"],
  "es-BO": ["H", "h", "hB", "hb"],
  "es-BR": ["H", "h", "hB", "hb"],
  "es-EC": ["H", "h", "hB", "hb"],
  "es-ES": ["H", "h", "hB", "hb"],
  "es-GQ": ["H", "h", "hB", "hb"],
  "es-PE": ["H", "h", "hB", "hb"],
  "GT": ["H", "h", "hB", "hb"],
  "HN": ["H", "h", "hB", "hb"],
  "IC": ["H", "h", "hB", "hb"],
  "KG": ["H", "h", "hB", "hb"],
  "KM": ["H", "h", "hB", "hb"],
  "LK": ["H", "h", "hB", "hb"],
  "MA": ["H", "h", "hB", "hb"],
  "MX": ["H", "h", "hB", "hb"],
  "NI": ["H", "h", "hB", "hb"],
  "PY": ["H", "h", "hB", "hb"],
  "SV": ["H", "h", "hB", "hb"],
  "UY": ["H", "h", "hB", "hb"],
  "JP": ["H", "h", "K"],
  "AD": ["H", "hB"],
  "AM": ["H", "hB"],
  "AO": ["H", "hB"],
  "AT": ["H", "hB"],
  "AW": ["H", "hB"],
  "BE": ["H", "hB"],
  "BF": ["H", "hB"],
  "BJ": ["H", "hB"],
  "BL": ["H", "hB"],
  "BR": ["H", "hB"],
  "CG": ["H", "hB"],
  "CI": ["H", "hB"],
  "CV": ["H", "hB"],
  "DE": ["H", "hB"],
  "EE": ["H", "hB"],
  "FR": ["H", "hB"],
  "GA": ["H", "hB"],
  "GF": ["H", "hB"],
  "GN": ["H", "hB"],
  "GP": ["H", "hB"],
  "GW": ["H", "hB"],
  "HR": ["H", "hB"],
  "IL": ["H", "hB"],
  "IT": ["H", "hB"],
  "KZ": ["H", "hB"],
  "MC": ["H", "hB"],
  "MD": ["H", "hB"],
  "MF": ["H", "hB"],
  "MQ": ["H", "hB"],
  "MZ": ["H", "hB"],
  "NC": ["H", "hB"],
  "NL": ["H", "hB"],
  "PM": ["H", "hB"],
  "PT": ["H", "hB"],
  "RE": ["H", "hB"],
  "RO": ["H", "hB"],
  "SI": ["H", "hB"],
  "SR": ["H", "hB"],
  "ST": ["H", "hB"],
  "TG": ["H", "hB"],
  "TR": ["H", "hB"],
  "WF": ["H", "hB"],
  "YT": ["H", "hB"],
  "BD": ["h", "hB", "H"],
  "PK": ["h", "hB", "H"],
  "AZ": ["H", "hB", "h"],
  "BA": ["H", "hB", "h"],
  "BG": ["H", "hB", "h"],
  "CH": ["H", "hB", "h"],
  "GE": ["H", "hB", "h"],
  "LI": ["H", "hB", "h"],
  "ME": ["H", "hB", "h"],
  "RS": ["H", "hB", "h"],
  "UA": ["H", "hB", "h"],
  "UZ": ["H", "hB", "h"],
  "XK": ["H", "hB", "h"],
  "AG": ["h", "hb", "H", "hB"],
  "AU": ["h", "hb", "H", "hB"],
  "BB": ["h", "hb", "H", "hB"],
  "BM": ["h", "hb", "H", "hB"],
  "BS": ["h", "hb", "H", "hB"],
  "CA": ["h", "hb", "H", "hB"],
  "DM": ["h", "hb", "H", "hB"],
  "en-001": ["h", "hb", "H", "hB"],
  "FJ": ["h", "hb", "H", "hB"],
  "FM": ["h", "hb", "H", "hB"],
  "GD": ["h", "hb", "H", "hB"],
  "GM": ["h", "hb", "H", "hB"],
  "GU": ["h", "hb", "H", "hB"],
  "GY": ["h", "hb", "H", "hB"],
  "JM": ["h", "hb", "H", "hB"],
  "KI": ["h", "hb", "H", "hB"],
  "KN": ["h", "hb", "H", "hB"],
  "KY": ["h", "hb", "H", "hB"],
  "LC": ["h", "hb", "H", "hB"],
  "LR": ["h", "hb", "H", "hB"],
  "MH": ["h", "hb", "H", "hB"],
  "MP": ["h", "hb", "H", "hB"],
  "MW": ["h", "hb", "H", "hB"],
  "NZ": ["h", "hb", "H", "hB"],
  "SB": ["h", "hb", "H", "hB"],
  "SG": ["h", "hb", "H", "hB"],
  "SL": ["h", "hb", "H", "hB"],
  "SS": ["h", "hb", "H", "hB"],
  "SZ": ["h", "hb", "H", "hB"],
  "TC": ["h", "hb", "H", "hB"],
  "TT": ["h", "hb", "H", "hB"],
  "UM": ["h", "hb", "H", "hB"],
  "US": ["h", "hb", "H", "hB"],
  "VC": ["h", "hb", "H", "hB"],
  "VG": ["h", "hb", "H", "hB"],
  "VI": ["h", "hb", "H", "hB"],
  "ZM": ["h", "hb", "H", "hB"],
  "BO": ["H", "hB", "h", "hb"],
  "EC": ["H", "hB", "h", "hb"],
  "ES": ["H", "hB", "h", "hb"],
  "GQ": ["H", "hB", "h", "hb"],
  "PE": ["H", "hB", "h", "hb"],
  "AE": ["h", "hB", "hb", "H"],
  "ar-001": ["h", "hB", "hb", "H"],
  "BH": ["h", "hB", "hb", "H"],
  "DZ": ["h", "hB", "hb", "H"],
  "EG": ["h", "hB", "hb", "H"],
  "EH": ["h", "hB", "hb", "H"],
  "HK": ["h", "hB", "hb", "H"],
  "IQ": ["h", "hB", "hb", "H"],
  "JO": ["h", "hB", "hb", "H"],
  "KW": ["h", "hB", "hb", "H"],
  "LB": ["h", "hB", "hb", "H"],
  "LY": ["h", "hB", "hb", "H"],
  "MO": ["h", "hB", "hb", "H"],
  "MR": ["h", "hB", "hb", "H"],
  "OM": ["h", "hB", "hb", "H"],
  "PH": ["h", "hB", "hb", "H"],
  "PS": ["h", "hB", "hb", "H"],
  "QA": ["h", "hB", "hb", "H"],
  "SA": ["h", "hB", "hb", "H"],
  "SD": ["h", "hB", "hb", "H"],
  "SY": ["h", "hB", "hb", "H"],
  "TN": ["h", "hB", "hb", "H"],
  "YE": ["h", "hB", "hb", "H"],
  "AF": ["H", "hb", "hB", "h"],
  "LA": ["H", "hb", "hB", "h"],
  "CN": ["H", "hB", "hb", "h"],
  "LV": ["H", "hB", "hb", "h"],
  "TL": ["H", "hB", "hb", "h"],
  "zu-ZA": ["H", "hB", "hb", "h"],
  "CD": ["hB", "H"],
  "IR": ["hB", "H"],
  "hi-IN": ["hB", "h", "H"],
  "kn-IN": ["hB", "h", "H"],
  "ml-IN": ["hB", "h", "H"],
  "te-IN": ["hB", "h", "H"],
  "KH": ["hB", "h", "H", "hb"],
  "ta-IN": ["hB", "h", "hb", "H"],
  "BN": ["hb", "hB", "h", "H"],
  "MY": ["hb", "hB", "h", "H"],
  "ET": ["hB", "hb", "h", "H"],
  "gu-IN": ["hB", "hb", "h", "H"],
  "mr-IN": ["hB", "hb", "h", "H"],
  "pa-IN": ["hB", "hb", "h", "H"],
  "TW": ["hB", "hb", "h", "H"],
  "KE": ["hB", "hb", "H", "h"],
  "MM": ["hB", "hb", "H", "h"],
  "TZ": ["hB", "hb", "H", "h"],
  "UG": ["hB", "hb", "H", "h"]
};

/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/types.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/types.js ***!
  \**********************************************************************/
/*! exports provided: TYPE, SKELETON_TYPE, isLiteralElement, isArgumentElement, isNumberElement, isDateElement, isTimeElement, isSelectElement, isPluralElement, isPoundElement, isTagElement, isNumberSkeleton, isDateTimeSkeleton, createLiteralElement, createNumberElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKELETON_TYPE", function() { return SKELETON_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLiteralElement", function() { return isLiteralElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArgumentElement", function() { return isArgumentElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberElement", function() { return isNumberElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateElement", function() { return isDateElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTimeElement", function() { return isTimeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelectElement", function() { return isSelectElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPluralElement", function() { return isPluralElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoundElement", function() { return isPoundElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTagElement", function() { return isTagElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberSkeleton", function() { return isNumberSkeleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateTimeSkeleton", function() { return isDateTimeSkeleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLiteralElement", function() { return createLiteralElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNumberElement", function() { return createNumberElement; });
var TYPE;
(function (TYPE) {
  /**
   * Raw text
   */
  TYPE[TYPE["literal"] = 0] = "literal";
  /**
   * Variable w/o any format, e.g `var` in `this is a {var}`
   */
  TYPE[TYPE["argument"] = 1] = "argument";
  /**
   * Variable w/ number format
   */
  TYPE[TYPE["number"] = 2] = "number";
  /**
   * Variable w/ date format
   */
  TYPE[TYPE["date"] = 3] = "date";
  /**
   * Variable w/ time format
   */
  TYPE[TYPE["time"] = 4] = "time";
  /**
   * Variable w/ select format
   */
  TYPE[TYPE["select"] = 5] = "select";
  /**
   * Variable w/ plural format
   */
  TYPE[TYPE["plural"] = 6] = "plural";
  /**
   * Only possible within plural argument.
   * This is the `#` symbol that will be substituted with the count.
   */
  TYPE[TYPE["pound"] = 7] = "pound";
  /**
   * XML-like tag
   */
  TYPE[TYPE["tag"] = 8] = "tag";
})(TYPE || (TYPE = {}));
var SKELETON_TYPE;
(function (SKELETON_TYPE) {
  SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
  SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
})(SKELETON_TYPE || (SKELETON_TYPE = {}));
/**
 * Type Guards
 */
function isLiteralElement(el) {
  return el.type === TYPE.literal;
}
function isArgumentElement(el) {
  return el.type === TYPE.argument;
}
function isNumberElement(el) {
  return el.type === TYPE.number;
}
function isDateElement(el) {
  return el.type === TYPE.date;
}
function isTimeElement(el) {
  return el.type === TYPE.time;
}
function isSelectElement(el) {
  return el.type === TYPE.select;
}
function isPluralElement(el) {
  return el.type === TYPE.plural;
}
function isPoundElement(el) {
  return el.type === TYPE.pound;
}
function isTagElement(el) {
  return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
  return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
  return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
}
function createLiteralElement(value) {
  return {
    type: TYPE.literal,
    value: value
  };
}
function createNumberElement(value, style) {
  return {
    type: TYPE.number,
    value: value,
    style: style
  };
}

/***/ }),

/***/ "./node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js ***!
  \*********************************************************************/
/*! exports provided: parseDateTimeSkeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDateTimeSkeleton", function() { return parseDateTimeSkeleton; });
/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
 * Parse Date time skeleton into Intl.DateTimeFormatOptions
 * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * @public
 * @param skeleton skeleton string
 */
function parseDateTimeSkeleton(skeleton) {
  var result = {};
  skeleton.replace(DATE_TIME_REGEX, function (match) {
    var len = match.length;
    switch (match[0]) {
      // Era
      case 'G':
        result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
        break;
      // Year
      case 'y':
        result.year = len === 2 ? '2-digit' : 'numeric';
        break;
      case 'Y':
      case 'u':
      case 'U':
      case 'r':
        throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
      // Quarter
      case 'q':
      case 'Q':
        throw new RangeError('`q/Q` (quarter) patterns are not supported');
      // Month
      case 'M':
      case 'L':
        result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
        break;
      // Week
      case 'w':
      case 'W':
        throw new RangeError('`w/W` (week) patterns are not supported');
      case 'd':
        result.day = ['numeric', '2-digit'][len - 1];
        break;
      case 'D':
      case 'F':
      case 'g':
        throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
      // Weekday
      case 'E':
        result.weekday = len === 4 ? 'short' : len === 5 ? 'narrow' : 'short';
        break;
      case 'e':
        if (len < 4) {
          throw new RangeError('`e..eee` (weekday) patterns are not supported');
        }
        result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
        break;
      case 'c':
        if (len < 4) {
          throw new RangeError('`c..ccc` (weekday) patterns are not supported');
        }
        result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
        break;
      // Period
      case 'a':
        // AM, PM
        result.hour12 = true;
        break;
      case 'b': // am, pm, noon, midnight
      case 'B':
        // flexible day periods
        throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
      // Hour
      case 'h':
        result.hourCycle = 'h12';
        result.hour = ['numeric', '2-digit'][len - 1];
        break;
      case 'H':
        result.hourCycle = 'h23';
        result.hour = ['numeric', '2-digit'][len - 1];
        break;
      case 'K':
        result.hourCycle = 'h11';
        result.hour = ['numeric', '2-digit'][len - 1];
        break;
      case 'k':
        result.hourCycle = 'h24';
        result.hour = ['numeric', '2-digit'][len - 1];
        break;
      case 'j':
      case 'J':
      case 'C':
        throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
      // Minute
      case 'm':
        result.minute = ['numeric', '2-digit'][len - 1];
        break;
      // Second
      case 's':
        result.second = ['numeric', '2-digit'][len - 1];
        break;
      case 'S':
      case 'A':
        throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
      // Zone
      case 'z':
        // 1..3, 4: specific non-location format
        result.timeZoneName = len < 4 ? 'short' : 'long';
        break;
      case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
      case 'O': // 1, 4: miliseconds in day short, long
      case 'v': // 1, 4: generic non-location format
      case 'V': // 1, 2, 3, 4: time zone ID or city
      case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
      case 'x':
        // 1, 2, 3, 4: The ISO8601 varios formats
        throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
    }
    return '';
  });
  return result;
}

/***/ }),

/***/ "./node_modules/@formatjs/icu-skeleton-parser/lib/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@formatjs/icu-skeleton-parser/lib/index.js ***!
  \*****************************************************************/
/*! exports provided: parseDateTimeSkeleton, parseNumberSkeletonFromString, parseNumberSkeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-time */ "./node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDateTimeSkeleton", function() { return _date_time__WEBPACK_IMPORTED_MODULE_0__["parseDateTimeSkeleton"]; });

/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ "./node_modules/@formatjs/icu-skeleton-parser/lib/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseNumberSkeletonFromString", function() { return _number__WEBPACK_IMPORTED_MODULE_1__["parseNumberSkeletonFromString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseNumberSkeleton", function() { return _number__WEBPACK_IMPORTED_MODULE_1__["parseNumberSkeleton"]; });




/***/ }),

/***/ "./node_modules/@formatjs/icu-skeleton-parser/lib/number.js":
/*!******************************************************************!*\
  !*** ./node_modules/@formatjs/icu-skeleton-parser/lib/number.js ***!
  \******************************************************************/
/*! exports provided: parseNumberSkeletonFromString, parseNumberSkeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseNumberSkeletonFromString", function() { return parseNumberSkeletonFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseNumberSkeleton", function() { return parseNumberSkeleton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _regex_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regex.generated */ "./node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js");


function parseNumberSkeletonFromString(skeleton) {
  if (skeleton.length === 0) {
    throw new Error('Number skeleton cannot be empty');
  }
  // Parse the skeleton
  var stringTokens = skeleton.split(_regex_generated__WEBPACK_IMPORTED_MODULE_1__["WHITE_SPACE_REGEX"]).filter(function (x) {
    return x.length > 0;
  });
  var tokens = [];
  for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
    var stringToken = stringTokens_1[_i];
    var stemAndOptions = stringToken.split('/');
    if (stemAndOptions.length === 0) {
      throw new Error('Invalid number skeleton');
    }
    var stem = stemAndOptions[0],
      options = stemAndOptions.slice(1);
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
      var option = options_1[_a];
      if (option.length === 0) {
        throw new Error('Invalid number skeleton');
      }
    }
    tokens.push({
      stem: stem,
      options: options
    });
  }
  return tokens;
}
function icuUnitToEcma(unit) {
  return unit.replace(/^(.*?)-/, '');
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
  var result = {};
  if (str[str.length - 1] === 'r') {
    result.roundingPriority = 'morePrecision';
  } else if (str[str.length - 1] === 's') {
    result.roundingPriority = 'lessPrecision';
  }
  str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
    // @@@ case
    if (typeof g2 !== 'string') {
      result.minimumSignificantDigits = g1.length;
      result.maximumSignificantDigits = g1.length;
    }
    // @@@+ case
    else if (g2 === '+') {
      result.minimumSignificantDigits = g1.length;
    }
    // .### case
    else if (g1[0] === '#') {
      result.maximumSignificantDigits = g1.length;
    }
    // .@@## or .@@@ case
    else {
      result.minimumSignificantDigits = g1.length;
      result.maximumSignificantDigits = g1.length + (typeof g2 === 'string' ? g2.length : 0);
    }
    return '';
  });
  return result;
}
function parseSign(str) {
  switch (str) {
    case 'sign-auto':
      return {
        signDisplay: 'auto'
      };
    case 'sign-accounting':
    case '()':
      return {
        currencySign: 'accounting'
      };
    case 'sign-always':
    case '+!':
      return {
        signDisplay: 'always'
      };
    case 'sign-accounting-always':
    case '()!':
      return {
        signDisplay: 'always',
        currencySign: 'accounting'
      };
    case 'sign-except-zero':
    case '+?':
      return {
        signDisplay: 'exceptZero'
      };
    case 'sign-accounting-except-zero':
    case '()?':
      return {
        signDisplay: 'exceptZero',
        currencySign: 'accounting'
      };
    case 'sign-never':
    case '+_':
      return {
        signDisplay: 'never'
      };
  }
}
function parseConciseScientificAndEngineeringStem(stem) {
  // Engineering
  var result;
  if (stem[0] === 'E' && stem[1] === 'E') {
    result = {
      notation: 'engineering'
    };
    stem = stem.slice(2);
  } else if (stem[0] === 'E') {
    result = {
      notation: 'scientific'
    };
    stem = stem.slice(1);
  }
  if (result) {
    var signDisplay = stem.slice(0, 2);
    if (signDisplay === '+!') {
      result.signDisplay = 'always';
      stem = stem.slice(2);
    } else if (signDisplay === '+?') {
      result.signDisplay = 'exceptZero';
      stem = stem.slice(2);
    }
    if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
      throw new Error('Malformed concise eng/scientific notation');
    }
    result.minimumIntegerDigits = stem.length;
  }
  return result;
}
function parseNotationOptions(opt) {
  var result = {};
  var signOpts = parseSign(opt);
  if (signOpts) {
    return signOpts;
  }
  return result;
}
/**
 * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
 */
function parseNumberSkeleton(tokens) {
  var result = {};
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    switch (token.stem) {
      case 'percent':
      case '%':
        result.style = 'percent';
        continue;
      case '%x100':
        result.style = 'percent';
        result.scale = 100;
        continue;
      case 'currency':
        result.style = 'currency';
        result.currency = token.options[0];
        continue;
      case 'group-off':
      case ',_':
        result.useGrouping = false;
        continue;
      case 'precision-integer':
      case '.':
        result.maximumFractionDigits = 0;
        continue;
      case 'measure-unit':
      case 'unit':
        result.style = 'unit';
        result.unit = icuUnitToEcma(token.options[0]);
        continue;
      case 'compact-short':
      case 'K':
        result.notation = 'compact';
        result.compactDisplay = 'short';
        continue;
      case 'compact-long':
      case 'KK':
        result.notation = 'compact';
        result.compactDisplay = 'long';
        continue;
      case 'scientific':
        result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), {
          notation: 'scientific'
        }), token.options.reduce(function (all, opt) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, all), parseNotationOptions(opt));
        }, {}));
        continue;
      case 'engineering':
        result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), {
          notation: 'engineering'
        }), token.options.reduce(function (all, opt) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, all), parseNotationOptions(opt));
        }, {}));
        continue;
      case 'notation-simple':
        result.notation = 'standard';
        continue;
      // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
      case 'unit-width-narrow':
        result.currencyDisplay = 'narrowSymbol';
        result.unitDisplay = 'narrow';
        continue;
      case 'unit-width-short':
        result.currencyDisplay = 'code';
        result.unitDisplay = 'short';
        continue;
      case 'unit-width-full-name':
        result.currencyDisplay = 'name';
        result.unitDisplay = 'long';
        continue;
      case 'unit-width-iso-code':
        result.currencyDisplay = 'symbol';
        continue;
      case 'scale':
        result.scale = parseFloat(token.options[0]);
        continue;
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
      case 'integer-width':
        if (token.options.length > 1) {
          throw new RangeError('integer-width stems only accept a single optional option');
        }
        token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
          if (g1) {
            result.minimumIntegerDigits = g2.length;
          } else if (g3 && g4) {
            throw new Error('We currently do not support maximum integer digits');
          } else if (g5) {
            throw new Error('We currently do not support exact integer digits');
          }
          return '';
        });
        continue;
    }
    // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
    if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
      result.minimumIntegerDigits = token.stem.length;
      continue;
    }
    if (FRACTION_PRECISION_REGEX.test(token.stem)) {
      // Precision
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
      // precision-integer case
      if (token.options.length > 1) {
        throw new RangeError('Fraction-precision stems only accept a single optional option');
      }
      token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
        // .000* case (before ICU67 it was .000+)
        if (g2 === '*') {
          result.minimumFractionDigits = g1.length;
        }
        // .### case
        else if (g3 && g3[0] === '#') {
          result.maximumFractionDigits = g3.length;
        }
        // .00## case
        else if (g4 && g5) {
          result.minimumFractionDigits = g4.length;
          result.maximumFractionDigits = g4.length + g5.length;
        } else {
          result.minimumFractionDigits = g1.length;
          result.maximumFractionDigits = g1.length;
        }
        return '';
      });
      var opt = token.options[0];
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
      if (opt === 'w') {
        result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), {
          trailingZeroDisplay: 'stripIfInteger'
        });
      } else if (opt) {
        result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), parseSignificantPrecision(opt));
      }
      continue;
    }
    // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
    if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
      result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), parseSignificantPrecision(token.stem));
      continue;
    }
    var signOpts = parseSign(token.stem);
    if (signOpts) {
      result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), signOpts);
    }
    var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
    if (conciseScientificAndEngineeringOpts) {
      result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), conciseScientificAndEngineeringOpts);
    }
  }
  return result;
}

/***/ }),

/***/ "./node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js ***!
  \***************************************************************************/
/*! exports provided: WHITE_SPACE_REGEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHITE_SPACE_REGEX", function() { return WHITE_SPACE_REGEX; });
// @generated from regex-gen.ts
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

/***/ }),

/***/ "./node_modules/@formatjs/intl-localematcher/lib/abstract/BestAvailableLocale.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@formatjs/intl-localematcher/lib/abstract/BestAvailableLocale.js ***!
  \***************************************************************************************/
/*! exports provided: BestAvailableLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestAvailableLocale", function() { return BestAvailableLocale; });
/**
 * https://tc39.es/ecma402/#sec-bestavailablelocale
 * @param availableLocales
 * @param locale
 */
function BestAvailableLocale(availableLocales, locale) {
  var candidate = locale;
  while (true) {
    if (availableLocales.has(candidate)) {
      return candidate;
    }
    var pos = candidate.lastIndexOf('-');
    if (!~pos) {
      return undefined;
    }
    if (pos >= 2 && candidate[pos - 2] === '-') {
      pos -= 2;
    }
    candidate = candidate.slice(0, pos);
  }
}

/***/ }),

/***/ "./node_modules/@formatjs/intl-localematcher/lib/abstract/BestFitMatcher.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@formatjs/intl-localematcher/lib/abstract/BestFitMatcher.js ***!
  \**********************************************************************************/
/*! exports provided: BestFitMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestFitMatcher", function() { return BestFitMatcher; });
/* harmony import */ var _BestAvailableLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BestAvailableLocale */ "./node_modules/@formatjs/intl-localematcher/lib/abstract/BestAvailableLocale.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js");


/**
 * https://tc39.es/ecma402/#sec-bestfitmatcher
 * @param availableLocales
 * @param requestedLocales
 * @param getDefaultLocale
 */
function BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale) {
  var minimizedAvailableLocaleMap = {};
  var availableLocaleMap = {};
  var canonicalizedLocaleMap = {};
  var minimizedAvailableLocales = new Set();
  availableLocales.forEach(function (locale) {
    var minimizedLocale = new Intl.Locale(locale).minimize().toString();
    var canonicalizedLocale = Intl.getCanonicalLocales(locale)[0] || locale;
    minimizedAvailableLocaleMap[minimizedLocale] = locale;
    availableLocaleMap[locale] = locale;
    canonicalizedLocaleMap[canonicalizedLocale] = locale;
    minimizedAvailableLocales.add(minimizedLocale);
    minimizedAvailableLocales.add(locale);
    minimizedAvailableLocales.add(canonicalizedLocale);
  });
  var foundLocale;
  for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
    var l = requestedLocales_1[_i];
    if (foundLocale) {
      break;
    }
    var noExtensionLocale = l.replace(_utils__WEBPACK_IMPORTED_MODULE_1__["UNICODE_EXTENSION_SEQUENCE_REGEX"], '');
    if (availableLocales.has(noExtensionLocale)) {
      foundLocale = noExtensionLocale;
      break;
    }
    if (minimizedAvailableLocales.has(noExtensionLocale)) {
      foundLocale = noExtensionLocale;
      break;
    }
    var locale = new Intl.Locale(noExtensionLocale);
    var maximizedRequestedLocale = locale.maximize().toString();
    var minimizedRequestedLocale = locale.minimize().toString();
    // Check minimized locale
    if (minimizedAvailableLocales.has(minimizedRequestedLocale)) {
      foundLocale = minimizedRequestedLocale;
      break;
    }
    // Lookup algo on maximized locale
    foundLocale = Object(_BestAvailableLocale__WEBPACK_IMPORTED_MODULE_0__["BestAvailableLocale"])(minimizedAvailableLocales, maximizedRequestedLocale);
  }
  if (!foundLocale) {
    return {
      locale: getDefaultLocale()
    };
  }
  return {
    locale: availableLocaleMap[foundLocale] || canonicalizedLocaleMap[foundLocale] || minimizedAvailableLocaleMap[foundLocale] || foundLocale
  };
}

/***/ }),

/***/ "./node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeLocaleList.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeLocaleList.js ***!
  \******************************************************************************************/
/*! exports provided: CanonicalizeLocaleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanonicalizeLocaleList", function() { return CanonicalizeLocaleList; });
/**
 * http://ecma-international.org/ecma-402/7.0/index.html#sec-canonicalizelocalelist
 * @param locales
 */
function CanonicalizeLocaleList(locales) {
  // TODO
  return Intl.getCanonicalLocales(locales);
}

/***/ }),

/***/ "./node_modules/@formatjs/intl-localematcher/lib/abstract/LookupMatcher.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@formatjs/intl-localematcher/lib/abstract/LookupMatcher.js ***!
  \*********************************************************************************/
/*! exports provided: LookupMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupMatcher", function() { return LookupMatcher; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js");
/* harmony import */ var _BestAvailableLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BestAvailableLocale */ "./node_modules/@formatjs/intl-localematcher/lib/abstract/BestAvailableLocale.js");


/**
 * https://tc39.es/ecma402/#sec-lookupmatcher
 * @param availableLocales
 * @param requestedLocales
 * @param getDefaultLocale
 */
function LookupMatcher(availableLocales, requestedLocales, getDefaultLocale) {
  var result = {
    locale: ''
  };
  for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
    var locale = requestedLocales_1[_i];
    var noExtensionLocale = locale.replace(_utils__WEBPACK_IMPORTED_MODULE_0__["UNICODE_EXTENSION_SEQUENCE_REGEX"], '');
    var availableLocale = Object(_BestAvailableLocale__WEBPACK_IMPORTED_MODULE_1__["BestAvailableLocale"])(availableLocales, noExtensionLocale);
    if (availableLocale) {
      result.locale = availableLocale;
      if (locale !== noExtensionLocale) {
        result.extension = locale.slice(noExtensionLocale.length + 1, locale.length);
      }
      return result;
    }
  }
  result.locale = getDefaultLocale();
  return result;
}

/***/ }),

/***/ "./node_modules/@formatjs/intl-localematcher/lib/abstract/LookupSupportedLocales.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@formatjs/intl-localematcher/lib/abstract/LookupSupportedLocales.js ***!
  \******************************************************************************************/
/*! exports provided: LookupSupportedLocales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupSupportedLocales", function() { return LookupSupportedLocales; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js");
/* harmony import */ var _BestAvailableLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BestAvailableLocale */ "./node_modules/@formatjs/intl-localematcher/lib/abstract/BestAvailableLocale.js");


/**
 * https://tc39.es/ecma402/#sec-lookupsupportedlocales
 * @param availableLocales
 * @param requestedLocales
 */
function LookupSupportedLocales(availableLocales, requestedLocales) {
  var subset = [];
  for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
    var locale = requestedLocales_1[_i];
    var noExtensionLocale = locale.replace(_utils__WEBPACK_IMPORTED_MODULE_0__["UNICODE_EXTENSION_SEQUENCE_REGEX"], '');
    var availableLocale = Object(_BestAvailableLocale__WEBPACK_IMPORTED_MODULE_1__["BestAvailableLocale"])(availableLocales, noExtensionLocale);
    if (availableLocale) {
      subset.push(availableLocale);
    }
  }
  return subset;
}

/***/ }),

/***/ "./node_modules/@formatjs/intl-localematcher/lib/abstract/ResolveLocale.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@formatjs/intl-localematcher/lib/abstract/ResolveLocale.js ***!
  \*********************************************************************************/
/*! exports provided: ResolveLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveLocale", function() { return ResolveLocale; });
/* harmony import */ var _LookupMatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LookupMatcher */ "./node_modules/@formatjs/intl-localematcher/lib/abstract/LookupMatcher.js");
/* harmony import */ var _BestFitMatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BestFitMatcher */ "./node_modules/@formatjs/intl-localematcher/lib/abstract/BestFitMatcher.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js");
/* harmony import */ var _UnicodeExtensionValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UnicodeExtensionValue */ "./node_modules/@formatjs/intl-localematcher/lib/abstract/UnicodeExtensionValue.js");




/**
 * https://tc39.es/ecma402/#sec-resolvelocale
 */
function ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
  var matcher = options.localeMatcher;
  var r;
  if (matcher === 'lookup') {
    r = Object(_LookupMatcher__WEBPACK_IMPORTED_MODULE_0__["LookupMatcher"])(availableLocales, requestedLocales, getDefaultLocale);
  } else {
    r = Object(_BestFitMatcher__WEBPACK_IMPORTED_MODULE_1__["BestFitMatcher"])(availableLocales, requestedLocales, getDefaultLocale);
  }
  var foundLocale = r.locale;
  var result = {
    locale: '',
    dataLocale: foundLocale
  };
  var supportedExtension = '-u';
  for (var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _i < relevantExtensionKeys_1.length; _i++) {
    var key = relevantExtensionKeys_1[_i];
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["invariant"])(foundLocale in localeData, "Missing locale data for ".concat(foundLocale));
    var foundLocaleData = localeData[foundLocale];
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["invariant"])(typeof foundLocaleData === 'object' && foundLocaleData !== null, "locale data ".concat(key, " must be an object"));
    var keyLocaleData = foundLocaleData[key];
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["invariant"])(Array.isArray(keyLocaleData), "keyLocaleData for ".concat(key, " must be an array"));
    var value = keyLocaleData[0];
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["invariant"])(typeof value === 'string' || value === null, "value must be string or null but got ".concat(typeof value, " in key ").concat(key));
    var supportedExtensionAddition = '';
    if (r.extension) {
      var requestedValue = Object(_UnicodeExtensionValue__WEBPACK_IMPORTED_MODULE_3__["UnicodeExtensionValue"])(r.extension, key);
      if (requestedValue !== undefined) {
        if (requestedValue !== '') {
          if (~keyLocaleData.indexOf(requestedValue)) {
            value = requestedValue;
            supportedExtensionAddition = "-".concat(key, "-").concat(value);
          }
        } else if (~requestedValue.indexOf('true')) {
          value = 'true';
          supportedExtensionAddition = "-".concat(key);
        }
      }
    }
    if (key in options) {
      var optionsValue = options[key];
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["invariant"])(typeof optionsValue === 'string' || typeof optionsValue === 'undefined' || optionsValue === null, 'optionsValue must be String, Undefined or Null');
      if (~keyLocaleData.indexOf(optionsValue)) {
        if (optionsValue !== value) {
          value = optionsValue;
          supportedExtensionAddition = '';
        }
      }
    }
    result[key] = value;
    supportedExtension += supportedExtensionAddition;
  }
  if (supportedExtension.length > 2) {
    var privateIndex = foundLocale.indexOf('-x-');
    if (privateIndex === -1) {
      foundLocale = foundLocale + supportedExtension;
    } else {
      var preExtension = foundLocale.slice(0, privateIndex);
      var postExtension = foundLocale.slice(privateIndex, foundLocale.length);
      foundLocale = preExtension + supportedExtension + postExtension;
    }
    foundLocale = Intl.getCanonicalLocales(foundLocale)[0];
  }
  result.locale = foundLocale;
  return result;
}

/***/ }),

/***/ "./node_modules/@formatjs/intl-localematcher/lib/abstract/UnicodeExtensionValue.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@formatjs/intl-localematcher/lib/abstract/UnicodeExtensionValue.js ***!
  \*****************************************************************************************/
/*! exports provided: UnicodeExtensionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnicodeExtensionValue", function() { return UnicodeExtensionValue; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js");

/**
 * https://tc39.es/ecma402/#sec-unicodeextensionvalue
 * @param extension
 * @param key
 */
function UnicodeExtensionValue(extension, key) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["invariant"])(key.length === 2, 'key must have 2 elements');
  var size = extension.length;
  var searchValue = "-".concat(key, "-");
  var pos = extension.indexOf(searchValue);
  if (pos !== -1) {
    var start = pos + 4;
    var end = start;
    var k = start;
    var done = false;
    while (!done) {
      var e = extension.indexOf('-', k);
      var len = void 0;
      if (e === -1) {
        len = size - k;
      } else {
        len = e - k;
      }
      if (len === 2) {
        done = true;
      } else if (e === -1) {
        end = size;
        done = true;
      } else {
        end = e;
        k = e + 1;
      }
    }
    return extension.slice(start, end);
  }
  searchValue = "-".concat(key);
  pos = extension.indexOf(searchValue);
  if (pos !== -1 && pos + 3 === size) {
    return '';
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js ***!
  \*************************************************************************/
/*! exports provided: UNICODE_EXTENSION_SEQUENCE_REGEX, invariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNICODE_EXTENSION_SEQUENCE_REGEX", function() { return UNICODE_EXTENSION_SEQUENCE_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
function invariant(condition, message, Err) {
  if (Err === void 0) {
    Err = Error;
  }
  if (!condition) {
    throw new Err(message);
  }
}

/***/ }),

/***/ "./node_modules/@formatjs/intl-localematcher/lib/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@formatjs/intl-localematcher/lib/index.js ***!
  \****************************************************************/
/*! exports provided: match, LookupSupportedLocales, ResolveLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony import */ var _abstract_CanonicalizeLocaleList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/CanonicalizeLocaleList */ "./node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeLocaleList.js");
/* harmony import */ var _abstract_ResolveLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/ResolveLocale */ "./node_modules/@formatjs/intl-localematcher/lib/abstract/ResolveLocale.js");
/* harmony import */ var _abstract_LookupSupportedLocales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract/LookupSupportedLocales */ "./node_modules/@formatjs/intl-localematcher/lib/abstract/LookupSupportedLocales.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LookupSupportedLocales", function() { return _abstract_LookupSupportedLocales__WEBPACK_IMPORTED_MODULE_2__["LookupSupportedLocales"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResolveLocale", function() { return _abstract_ResolveLocale__WEBPACK_IMPORTED_MODULE_1__["ResolveLocale"]; });



function match(requestedLocales, availableLocales, defaultLocale, opts) {
  var locales = availableLocales.reduce(function (all, l) {
    all.add(l);
    return all;
  }, new Set());
  return Object(_abstract_ResolveLocale__WEBPACK_IMPORTED_MODULE_1__["ResolveLocale"])(locales, Object(_abstract_CanonicalizeLocaleList__WEBPACK_IMPORTED_MODULE_0__["CanonicalizeLocaleList"])(requestedLocales), {
    localeMatcher: (opts === null || opts === void 0 ? void 0 : opts.algorithm) || 'best fit'
  }, [], {}, function () {
    return defaultLocale;
  }).locale;
}



/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/index.js ***!
  \**************************************************/
/*! exports provided: defineMessages, defineMessage, createIntlCache, filterProps, DEFAULT_INTL_CONFIG, createFormatters, getNamedFormat, IntlErrorCode, IntlError, UnsupportedFormatterError, InvalidConfigError, MissingDataError, IntlFormatError, MessageFormatError, MissingTranslationError, formatMessage, formatDate, formatDateToParts, formatTime, formatTimeToParts, formatDisplayName, formatList, formatPlural, formatRelativeTime, formatNumber, formatNumberToParts, createIntl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineMessages", function() { return defineMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineMessage", function() { return defineMessage; });
/* harmony import */ var _src_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/types */ "./node_modules/@formatjs/intl/lib/src/types.js");
/* empty/unused harmony star reexport *//* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntlCache", function() { return _src_utils__WEBPACK_IMPORTED_MODULE_1__["createIntlCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterProps", function() { return _src_utils__WEBPACK_IMPORTED_MODULE_1__["filterProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_INTL_CONFIG", function() { return _src_utils__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_INTL_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFormatters", function() { return _src_utils__WEBPACK_IMPORTED_MODULE_1__["createFormatters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNamedFormat", function() { return _src_utils__WEBPACK_IMPORTED_MODULE_1__["getNamedFormat"]; });

/* harmony import */ var _src_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/error */ "./node_modules/@formatjs/intl/lib/src/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntlErrorCode", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["IntlErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntlError", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["IntlError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsupportedFormatterError", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["UnsupportedFormatterError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvalidConfigError", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["InvalidConfigError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingDataError", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["MissingDataError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntlFormatError", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["IntlFormatError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageFormatError", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["MessageFormatError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingTranslationError", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["MissingTranslationError"]; });

/* harmony import */ var _src_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/message */ "./node_modules/@formatjs/intl/lib/src/message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatMessage", function() { return _src_message__WEBPACK_IMPORTED_MODULE_3__["formatMessage"]; });

/* harmony import */ var _src_dateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/dateTime */ "./node_modules/@formatjs/intl/lib/src/dateTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _src_dateTime__WEBPACK_IMPORTED_MODULE_4__["formatDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDateToParts", function() { return _src_dateTime__WEBPACK_IMPORTED_MODULE_4__["formatDateToParts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return _src_dateTime__WEBPACK_IMPORTED_MODULE_4__["formatTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatTimeToParts", function() { return _src_dateTime__WEBPACK_IMPORTED_MODULE_4__["formatTimeToParts"]; });

/* harmony import */ var _src_displayName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/displayName */ "./node_modules/@formatjs/intl/lib/src/displayName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDisplayName", function() { return _src_displayName__WEBPACK_IMPORTED_MODULE_5__["formatDisplayName"]; });

/* harmony import */ var _src_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/list */ "./node_modules/@formatjs/intl/lib/src/list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatList", function() { return _src_list__WEBPACK_IMPORTED_MODULE_6__["formatList"]; });

/* harmony import */ var _src_plural__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/plural */ "./node_modules/@formatjs/intl/lib/src/plural.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPlural", function() { return _src_plural__WEBPACK_IMPORTED_MODULE_7__["formatPlural"]; });

/* harmony import */ var _src_relativeTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/relativeTime */ "./node_modules/@formatjs/intl/lib/src/relativeTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatRelativeTime", function() { return _src_relativeTime__WEBPACK_IMPORTED_MODULE_8__["formatRelativeTime"]; });

/* harmony import */ var _src_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/number */ "./node_modules/@formatjs/intl/lib/src/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return _src_number__WEBPACK_IMPORTED_MODULE_9__["formatNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatNumberToParts", function() { return _src_number__WEBPACK_IMPORTED_MODULE_9__["formatNumberToParts"]; });

/* harmony import */ var _src_create_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/create-intl */ "./node_modules/@formatjs/intl/lib/src/create-intl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntl", function() { return _src_create_intl__WEBPACK_IMPORTED_MODULE_10__["createIntl"]; });


function defineMessages(msgs) {
  return msgs;
}
function defineMessage(msg) {
  return msg;
}











/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/create-intl.js":
/*!************************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/create-intl.js ***!
  \************************************************************/
/*! exports provided: createIntl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIntl", function() { return createIntl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number */ "./node_modules/@formatjs/intl/lib/src/number.js");
/* harmony import */ var _relativeTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relativeTime */ "./node_modules/@formatjs/intl/lib/src/relativeTime.js");
/* harmony import */ var _dateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dateTime */ "./node_modules/@formatjs/intl/lib/src/dateTime.js");
/* harmony import */ var _plural__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plural */ "./node_modules/@formatjs/intl/lib/src/plural.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message */ "./node_modules/@formatjs/intl/lib/src/message.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list */ "./node_modules/@formatjs/intl/lib/src/list.js");
/* harmony import */ var _displayName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./displayName */ "./node_modules/@formatjs/intl/lib/src/displayName.js");










function messagesContainString(messages) {
  var firstMessage = messages ? messages[Object.keys(messages)[0]] : undefined;
  return typeof firstMessage === 'string';
}
function verifyConfigMessages(config) {
  if (config.onWarn && config.defaultRichTextElements && messagesContainString(config.messages || {})) {
    config.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution");
  }
}
/**
 * Create intl object
 * @param config intl config
 * @param cache cache for formatter instances to prevent memory leak
 */
function createIntl(config, cache) {
  var formatters = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createFormatters"])(cache);
  var resolvedConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _utils__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_INTL_CONFIG"]), config);
  var locale = resolvedConfig.locale,
    defaultLocale = resolvedConfig.defaultLocale,
    onError = resolvedConfig.onError;
  if (!locale) {
    if (onError) {
      onError(new _error__WEBPACK_IMPORTED_MODULE_2__["InvalidConfigError"]("\"locale\" was not configured, using \"".concat(defaultLocale, "\" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details")));
    }
    // Since there's no registered locale data for `locale`, this will
    // fallback to the `defaultLocale` to make sure things can render.
    // The `messages` are overridden to the `defaultProps` empty object
    // to maintain referential equality across re-renders. It's assumed
    // each <FormattedMessage> contains a `defaultMessage` prop.
    resolvedConfig.locale = resolvedConfig.defaultLocale || 'en';
  } else if (!Intl.NumberFormat.supportedLocalesOf(locale).length && onError) {
    onError(new _error__WEBPACK_IMPORTED_MODULE_2__["MissingDataError"]("Missing locale data for locale: \"".concat(locale, "\" in Intl.NumberFormat. Using default locale: \"").concat(defaultLocale, "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details")));
  } else if (!Intl.DateTimeFormat.supportedLocalesOf(locale).length && onError) {
    onError(new _error__WEBPACK_IMPORTED_MODULE_2__["MissingDataError"]("Missing locale data for locale: \"".concat(locale, "\" in Intl.DateTimeFormat. Using default locale: \"").concat(defaultLocale, "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details")));
  }
  verifyConfigMessages(resolvedConfig);
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, resolvedConfig), {
    formatters: formatters,
    formatNumber: _number__WEBPACK_IMPORTED_MODULE_3__["formatNumber"].bind(null, resolvedConfig, formatters.getNumberFormat),
    formatNumberToParts: _number__WEBPACK_IMPORTED_MODULE_3__["formatNumberToParts"].bind(null, resolvedConfig, formatters.getNumberFormat),
    formatRelativeTime: _relativeTime__WEBPACK_IMPORTED_MODULE_4__["formatRelativeTime"].bind(null, resolvedConfig, formatters.getRelativeTimeFormat),
    formatDate: _dateTime__WEBPACK_IMPORTED_MODULE_5__["formatDate"].bind(null, resolvedConfig, formatters.getDateTimeFormat),
    formatDateToParts: _dateTime__WEBPACK_IMPORTED_MODULE_5__["formatDateToParts"].bind(null, resolvedConfig, formatters.getDateTimeFormat),
    formatTime: _dateTime__WEBPACK_IMPORTED_MODULE_5__["formatTime"].bind(null, resolvedConfig, formatters.getDateTimeFormat),
    formatDateTimeRange: _dateTime__WEBPACK_IMPORTED_MODULE_5__["formatDateTimeRange"].bind(null, resolvedConfig, formatters.getDateTimeFormat),
    formatTimeToParts: _dateTime__WEBPACK_IMPORTED_MODULE_5__["formatTimeToParts"].bind(null, resolvedConfig, formatters.getDateTimeFormat),
    formatPlural: _plural__WEBPACK_IMPORTED_MODULE_6__["formatPlural"].bind(null, resolvedConfig, formatters.getPluralRules),
    formatMessage: _message__WEBPACK_IMPORTED_MODULE_7__["formatMessage"].bind(null, resolvedConfig, formatters),
    $t: _message__WEBPACK_IMPORTED_MODULE_7__["formatMessage"].bind(null, resolvedConfig, formatters),
    formatList: _list__WEBPACK_IMPORTED_MODULE_8__["formatList"].bind(null, resolvedConfig, formatters.getListFormat),
    formatListToParts: _list__WEBPACK_IMPORTED_MODULE_8__["formatListToParts"].bind(null, resolvedConfig, formatters.getListFormat),
    formatDisplayName: _displayName__WEBPACK_IMPORTED_MODULE_9__["formatDisplayName"].bind(null, resolvedConfig, formatters.getDisplayNames)
  });
}

/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/dateTime.js":
/*!*********************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/dateTime.js ***!
  \*********************************************************/
/*! exports provided: getFormatter, formatDate, formatTime, formatDateTimeRange, formatDateToParts, formatTimeToParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormatter", function() { return getFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateTimeRange", function() { return formatDateTimeRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateToParts", function() { return formatDateToParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeToParts", function() { return formatTimeToParts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");



var DATE_TIME_FORMAT_OPTIONS = ['localeMatcher', 'formatMatcher', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName', 'hourCycle', 'dateStyle', 'timeStyle', 'calendar',
// 'dayPeriod',
'numberingSystem'];
function getFormatter(_a, type, getDateTimeFormat, options) {
  var locale = _a.locale,
    formats = _a.formats,
    onError = _a.onError,
    timeZone = _a.timeZone;
  if (options === void 0) {
    options = {};
  }
  var format = options.format;
  var defaults = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, timeZone && {
    timeZone: timeZone
  }), format && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getNamedFormat"])(formats, type, format, onError));
  var filteredOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["filterProps"])(options, DATE_TIME_FORMAT_OPTIONS, defaults);
  if (type === 'time' && !filteredOptions.hour && !filteredOptions.minute && !filteredOptions.second && !filteredOptions.timeStyle && !filteredOptions.dateStyle) {
    // Add default formatting options if hour, minute, or second isn't defined.
    filteredOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, filteredOptions), {
      hour: 'numeric',
      minute: 'numeric'
    });
  }
  return getDateTimeFormat(locale, filteredOptions);
}
function formatDate(config, getDateTimeFormat) {
  var _a = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    _a[_i - 2] = arguments[_i];
  }
  var value = _a[0],
    _b = _a[1],
    options = _b === void 0 ? {} : _b;
  var date = typeof value === 'string' ? new Date(value || 0) : value;
  try {
    return getFormatter(config, 'date', getDateTimeFormat, options).format(date);
  } catch (e) {
    config.onError(new _error__WEBPACK_IMPORTED_MODULE_2__["IntlError"](_error__WEBPACK_IMPORTED_MODULE_2__["IntlErrorCode"].FORMAT_ERROR, 'Error formatting date.', e));
  }
  return String(date);
}
function formatTime(config, getDateTimeFormat) {
  var _a = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    _a[_i - 2] = arguments[_i];
  }
  var value = _a[0],
    _b = _a[1],
    options = _b === void 0 ? {} : _b;
  var date = typeof value === 'string' ? new Date(value || 0) : value;
  try {
    return getFormatter(config, 'time', getDateTimeFormat, options).format(date);
  } catch (e) {
    config.onError(new _error__WEBPACK_IMPORTED_MODULE_2__["IntlError"](_error__WEBPACK_IMPORTED_MODULE_2__["IntlErrorCode"].FORMAT_ERROR, 'Error formatting time.', e));
  }
  return String(date);
}
function formatDateTimeRange(config, getDateTimeFormat) {
  var _a = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    _a[_i - 2] = arguments[_i];
  }
  var from = _a[0],
    to = _a[1],
    _b = _a[2],
    options = _b === void 0 ? {} : _b;
  var timeZone = config.timeZone,
    locale = config.locale,
    onError = config.onError;
  var filteredOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["filterProps"])(options, DATE_TIME_FORMAT_OPTIONS, timeZone ? {
    timeZone: timeZone
  } : {});
  try {
    return getDateTimeFormat(locale, filteredOptions).formatRange(from, to);
  } catch (e) {
    onError(new _error__WEBPACK_IMPORTED_MODULE_2__["IntlError"](_error__WEBPACK_IMPORTED_MODULE_2__["IntlErrorCode"].FORMAT_ERROR, 'Error formatting date time range.', e));
  }
  return String(from);
}
function formatDateToParts(config, getDateTimeFormat) {
  var _a = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    _a[_i - 2] = arguments[_i];
  }
  var value = _a[0],
    _b = _a[1],
    options = _b === void 0 ? {} : _b;
  var date = typeof value === 'string' ? new Date(value || 0) : value;
  try {
    return getFormatter(config, 'date', getDateTimeFormat, options).formatToParts(date);
  } catch (e) {
    config.onError(new _error__WEBPACK_IMPORTED_MODULE_2__["IntlError"](_error__WEBPACK_IMPORTED_MODULE_2__["IntlErrorCode"].FORMAT_ERROR, 'Error formatting date.', e));
  }
  return [];
}
function formatTimeToParts(config, getDateTimeFormat) {
  var _a = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    _a[_i - 2] = arguments[_i];
  }
  var value = _a[0],
    _b = _a[1],
    options = _b === void 0 ? {} : _b;
  var date = typeof value === 'string' ? new Date(value || 0) : value;
  try {
    return getFormatter(config, 'time', getDateTimeFormat, options).formatToParts(date);
  } catch (e) {
    config.onError(new _error__WEBPACK_IMPORTED_MODULE_2__["IntlError"](_error__WEBPACK_IMPORTED_MODULE_2__["IntlErrorCode"].FORMAT_ERROR, 'Error formatting time.', e));
  }
  return [];
}

/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/displayName.js":
/*!************************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/displayName.js ***!
  \************************************************************/
/*! exports provided: formatDisplayName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDisplayName", function() { return formatDisplayName; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/lib/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");



var DISPLAY_NAMES_OPTONS = ['localeMatcher', 'style', 'type', 'fallback'];
function formatDisplayName(_a, getDisplayNames, value, options) {
  var locale = _a.locale,
    onError = _a.onError;
  var DisplayNames = Intl.DisplayNames;
  if (!DisplayNames) {
    onError(new intl_messageformat__WEBPACK_IMPORTED_MODULE_1__["FormatError"]("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", intl_messageformat__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].MISSING_INTL_API));
  }
  var filteredOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["filterProps"])(options, DISPLAY_NAMES_OPTONS);
  try {
    return getDisplayNames(locale, filteredOptions).of(value);
  } catch (e) {
    onError(new _error__WEBPACK_IMPORTED_MODULE_2__["IntlError"](_error__WEBPACK_IMPORTED_MODULE_2__["IntlErrorCode"].FORMAT_ERROR, 'Error formatting display name.', e));
  }
}

/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/error.js":
/*!******************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/error.js ***!
  \******************************************************/
/*! exports provided: IntlErrorCode, IntlError, UnsupportedFormatterError, InvalidConfigError, MissingDataError, IntlFormatError, MessageFormatError, MissingTranslationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntlErrorCode", function() { return IntlErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntlError", function() { return IntlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsupportedFormatterError", function() { return UnsupportedFormatterError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidConfigError", function() { return InvalidConfigError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingDataError", function() { return MissingDataError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntlFormatError", function() { return IntlFormatError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageFormatError", function() { return MessageFormatError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingTranslationError", function() { return MissingTranslationError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var IntlErrorCode;
(function (IntlErrorCode) {
  IntlErrorCode["FORMAT_ERROR"] = "FORMAT_ERROR";
  IntlErrorCode["UNSUPPORTED_FORMATTER"] = "UNSUPPORTED_FORMATTER";
  IntlErrorCode["INVALID_CONFIG"] = "INVALID_CONFIG";
  IntlErrorCode["MISSING_DATA"] = "MISSING_DATA";
  IntlErrorCode["MISSING_TRANSLATION"] = "MISSING_TRANSLATION";
})(IntlErrorCode || (IntlErrorCode = {}));
var IntlError = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IntlError, _super);
  function IntlError(code, message, exception) {
    var _this = this;
    var err = exception ? exception instanceof Error ? exception : new Error(String(exception)) : undefined;
    _this = _super.call(this, "[@formatjs/intl Error ".concat(code, "] ").concat(message, " \n").concat(err ? "\n".concat(err.message, "\n").concat(err.stack) : '')) || this;
    _this.code = code;
    // @ts-ignore just so we don't need to declare dep on @types/node
    if (typeof Error.captureStackTrace === 'function') {
      // @ts-ignore just so we don't need to declare dep on @types/node
      Error.captureStackTrace(_this, IntlError);
    }
    return _this;
  }
  return IntlError;
}(Error);

var UnsupportedFormatterError = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UnsupportedFormatterError, _super);
  function UnsupportedFormatterError(message, exception) {
    return _super.call(this, IntlErrorCode.UNSUPPORTED_FORMATTER, message, exception) || this;
  }
  return UnsupportedFormatterError;
}(IntlError);

var InvalidConfigError = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvalidConfigError, _super);
  function InvalidConfigError(message, exception) {
    return _super.call(this, IntlErrorCode.INVALID_CONFIG, message, exception) || this;
  }
  return InvalidConfigError;
}(IntlError);

var MissingDataError = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MissingDataError, _super);
  function MissingDataError(message, exception) {
    return _super.call(this, IntlErrorCode.MISSING_DATA, message, exception) || this;
  }
  return MissingDataError;
}(IntlError);

var IntlFormatError = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IntlFormatError, _super);
  function IntlFormatError(message, locale, exception) {
    return _super.call(this, IntlErrorCode.FORMAT_ERROR, "".concat(message, " \nLocale: ").concat(locale, "\n"), exception) || this;
  }
  return IntlFormatError;
}(IntlError);

var MessageFormatError = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MessageFormatError, _super);
  function MessageFormatError(message, locale, descriptor, exception) {
    var _this = _super.call(this, "".concat(message, " \nMessageID: ").concat(descriptor === null || descriptor === void 0 ? void 0 : descriptor.id, "\nDefault Message: ").concat(descriptor === null || descriptor === void 0 ? void 0 : descriptor.defaultMessage, "\nDescription: ").concat(descriptor === null || descriptor === void 0 ? void 0 : descriptor.description, " \n"), locale, exception) || this;
    _this.descriptor = descriptor;
    return _this;
  }
  return MessageFormatError;
}(IntlFormatError);

var MissingTranslationError = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MissingTranslationError, _super);
  function MissingTranslationError(descriptor, locale) {
    var _this = _super.call(this, IntlErrorCode.MISSING_TRANSLATION, "Missing message: \"".concat(descriptor.id, "\" for locale \"").concat(locale, "\", using ").concat(descriptor.defaultMessage ? 'default message' : 'id', " as fallback.")) || this;
    _this.descriptor = descriptor;
    return _this;
  }
  return MissingTranslationError;
}(IntlError);


/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/list.js":
/*!*****************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/list.js ***!
  \*****************************************************/
/*! exports provided: formatList, formatListToParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatList", function() { return formatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatListToParts", function() { return formatListToParts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/lib/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");




var LIST_FORMAT_OPTIONS = ['localeMatcher', 'type', 'style'];
var now = Date.now();
function generateToken(i) {
  return "".concat(now, "_").concat(i, "_").concat(now);
}
function formatList(opts, getListFormat, values, options) {
  if (options === void 0) {
    options = {};
  }
  var results = formatListToParts(opts, getListFormat, values, options).reduce(function (all, el) {
    var val = el.value;
    if (typeof val !== 'string') {
      all.push(val);
    } else if (typeof all[all.length - 1] === 'string') {
      all[all.length - 1] += val;
    } else {
      all.push(val);
    }
    return all;
  }, []);
  return results.length === 1 ? results[0] : results;
}
function formatListToParts(_a, getListFormat, values, options) {
  var locale = _a.locale,
    onError = _a.onError;
  if (options === void 0) {
    options = {};
  }
  var ListFormat = Intl.ListFormat;
  if (!ListFormat) {
    onError(new intl_messageformat__WEBPACK_IMPORTED_MODULE_2__["FormatError"]("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", intl_messageformat__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"].MISSING_INTL_API));
  }
  var filteredOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["filterProps"])(options, LIST_FORMAT_OPTIONS);
  try {
    var richValues_1 = {};
    var serializedValues = values.map(function (v, i) {
      if (typeof v === 'object') {
        var id = generateToken(i);
        richValues_1[id] = v;
        return id;
      }
      return String(v);
    });
    return getListFormat(locale, filteredOptions).formatToParts(serializedValues).map(function (part) {
      return part.type === 'literal' ? part : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, part), {
        value: richValues_1[part.value] || part.value
      });
    });
  } catch (e) {
    onError(new _error__WEBPACK_IMPORTED_MODULE_3__["IntlError"](_error__WEBPACK_IMPORTED_MODULE_3__["IntlErrorCode"].FORMAT_ERROR, 'Error formatting list.', e));
  }
  // @ts-ignore
  return values;
}

/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/message.js":
/*!********************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/message.js ***!
  \********************************************************/
/*! exports provided: formatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMessage", function() { return formatMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @formatjs/ecma402-abstract */ "./node_modules/@formatjs/ecma402-abstract/lib/index.js");
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/lib/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");
/* harmony import */ var _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @formatjs/icu-messageformat-parser */ "./node_modules/@formatjs/icu-messageformat-parser/lib/index.js");





function setTimeZoneInOptions(opts, timeZone) {
  return Object.keys(opts).reduce(function (all, k) {
    all[k] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      timeZone: timeZone
    }, opts[k]);
    return all;
  }, {});
}
function deepMergeOptions(opts1, opts2) {
  var keys = Object.keys(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, opts1), opts2));
  return keys.reduce(function (all, k) {
    all[k] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, opts1[k] || {}), opts2[k] || {});
    return all;
  }, {});
}
function deepMergeFormatsAndSetTimeZone(f1, timeZone) {
  if (!timeZone) {
    return f1;
  }
  var mfFormats = intl_messageformat__WEBPACK_IMPORTED_MODULE_2__["IntlMessageFormat"].formats;
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, mfFormats), f1), {
    date: deepMergeOptions(setTimeZoneInOptions(mfFormats.date, timeZone), setTimeZoneInOptions(f1.date || {}, timeZone)),
    time: deepMergeOptions(setTimeZoneInOptions(mfFormats.time, timeZone), setTimeZoneInOptions(f1.time || {}, timeZone))
  });
}
function formatMessage(_a, state, messageDescriptor, values, opts) {
  var locale = _a.locale,
    formats = _a.formats,
    messages = _a.messages,
    defaultLocale = _a.defaultLocale,
    defaultFormats = _a.defaultFormats,
    fallbackOnEmptyString = _a.fallbackOnEmptyString,
    onError = _a.onError,
    timeZone = _a.timeZone,
    defaultRichTextElements = _a.defaultRichTextElements;
  if (messageDescriptor === void 0) {
    messageDescriptor = {
      id: ''
    };
  }
  var msgId = messageDescriptor.id,
    defaultMessage = messageDescriptor.defaultMessage;
  // `id` is a required field of a Message Descriptor.
  Object(_formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!msgId, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var id = String(msgId);
  var message =
  // In case messages is Object.create(null)
  // e.g import('foo.json') from webpack)
  // See https://github.com/formatjs/formatjs/issues/1914
  messages && Object.prototype.hasOwnProperty.call(messages, id) && messages[id];
  // IMPORTANT: Hot path if `message` is AST with a single literal node
  if (Array.isArray(message) && message.length === 1 && message[0].type === _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_4__["TYPE"].literal) {
    return message[0].value;
  }
  // IMPORTANT: Hot path straight lookup for performance
  if (!values && message && typeof message === 'string' && !defaultRichTextElements) {
    return message.replace(/'\{(.*?)\}'/gi, "{$1}");
  }
  values = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultRichTextElements), values || {});
  formats = deepMergeFormatsAndSetTimeZone(formats, timeZone);
  defaultFormats = deepMergeFormatsAndSetTimeZone(defaultFormats, timeZone);
  if (!message) {
    if (fallbackOnEmptyString === false && message === '') {
      return message;
    }
    if (!defaultMessage || locale && locale.toLowerCase() !== defaultLocale.toLowerCase()) {
      // This prevents warnings from littering the console in development
      // when no `messages` are passed into the <IntlProvider> for the
      // default locale.
      onError(new _error__WEBPACK_IMPORTED_MODULE_3__["MissingTranslationError"](messageDescriptor, locale));
    }
    if (defaultMessage) {
      try {
        var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
        return formatter.format(values);
      } catch (e) {
        onError(new _error__WEBPACK_IMPORTED_MODULE_3__["MessageFormatError"]("Error formatting default message for: \"".concat(id, "\", rendering default message verbatim"), locale, messageDescriptor, e));
        return typeof defaultMessage === 'string' ? defaultMessage : id;
      }
    }
    return id;
  }
  // We have the translated message
  try {
    var formatter = state.getMessageFormat(message, locale, formats, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      formatters: state
    }, opts || {}));
    return formatter.format(values);
  } catch (e) {
    onError(new _error__WEBPACK_IMPORTED_MODULE_3__["MessageFormatError"]("Error formatting message: \"".concat(id, "\", using ").concat(defaultMessage ? 'default message' : 'id', " as fallback."), locale, messageDescriptor, e));
  }
  if (defaultMessage) {
    try {
      var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
      return formatter.format(values);
    } catch (e) {
      onError(new _error__WEBPACK_IMPORTED_MODULE_3__["MessageFormatError"]("Error formatting the default message for: \"".concat(id, "\", rendering message verbatim"), locale, messageDescriptor, e));
    }
  }
  if (typeof message === 'string') {
    return message;
  }
  if (typeof defaultMessage === 'string') {
    return defaultMessage;
  }
  return id;
}

/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/number.js":
/*!*******************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/number.js ***!
  \*******************************************************/
/*! exports provided: getFormatter, formatNumber, formatNumberToParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormatter", function() { return getFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumberToParts", function() { return formatNumberToParts; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");


var NUMBER_FORMAT_OPTIONS = ['localeMatcher', 'style', 'currency', 'currencyDisplay', 'unit', 'unitDisplay', 'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits',
// ES2020 NumberFormat
'compactDisplay', 'currencyDisplay', 'currencySign', 'notation', 'signDisplay', 'unit', 'unitDisplay', 'numberingSystem'];
function getFormatter(_a, getNumberFormat, options) {
  var locale = _a.locale,
    formats = _a.formats,
    onError = _a.onError;
  if (options === void 0) {
    options = {};
  }
  var format = options.format;
  var defaults = format && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getNamedFormat"])(formats, 'number', format, onError) || {};
  var filteredOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["filterProps"])(options, NUMBER_FORMAT_OPTIONS, defaults);
  return getNumberFormat(locale, filteredOptions);
}
function formatNumber(config, getNumberFormat, value, options) {
  if (options === void 0) {
    options = {};
  }
  try {
    return getFormatter(config, getNumberFormat, options).format(value);
  } catch (e) {
    config.onError(new _error__WEBPACK_IMPORTED_MODULE_1__["IntlError"](_error__WEBPACK_IMPORTED_MODULE_1__["IntlErrorCode"].FORMAT_ERROR, 'Error formatting number.', e));
  }
  return String(value);
}
function formatNumberToParts(config, getNumberFormat, value, options) {
  if (options === void 0) {
    options = {};
  }
  try {
    return getFormatter(config, getNumberFormat, options).formatToParts(value);
  } catch (e) {
    config.onError(new _error__WEBPACK_IMPORTED_MODULE_1__["IntlError"](_error__WEBPACK_IMPORTED_MODULE_1__["IntlErrorCode"].FORMAT_ERROR, 'Error formatting number.', e));
  }
  return [];
}

/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/plural.js":
/*!*******************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/plural.js ***!
  \*******************************************************/
/*! exports provided: formatPlural */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPlural", function() { return formatPlural; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/lib/index.js");



var PLURAL_FORMAT_OPTIONS = ['localeMatcher', 'type'];
function formatPlural(_a, getPluralRules, value, options) {
  var locale = _a.locale,
    onError = _a.onError;
  if (options === void 0) {
    options = {};
  }
  if (!Intl.PluralRules) {
    onError(new intl_messageformat__WEBPACK_IMPORTED_MODULE_2__["FormatError"]("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", intl_messageformat__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"].MISSING_INTL_API));
  }
  var filteredOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["filterProps"])(options, PLURAL_FORMAT_OPTIONS);
  try {
    return getPluralRules(locale, filteredOptions).select(value);
  } catch (e) {
    onError(new _error__WEBPACK_IMPORTED_MODULE_1__["IntlFormatError"]('Error formatting plural.', locale, e));
  }
  return 'other';
}

/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/relativeTime.js":
/*!*************************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/relativeTime.js ***!
  \*************************************************************/
/*! exports provided: formatRelativeTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatRelativeTime", function() { return formatRelativeTime; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/lib/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");



var RELATIVE_TIME_FORMAT_OPTIONS = ['numeric', 'style'];
function getFormatter(_a, getRelativeTimeFormat, options) {
  var locale = _a.locale,
    formats = _a.formats,
    onError = _a.onError;
  if (options === void 0) {
    options = {};
  }
  var format = options.format;
  var defaults = !!format && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getNamedFormat"])(formats, 'relative', format, onError) || {};
  var filteredOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["filterProps"])(options, RELATIVE_TIME_FORMAT_OPTIONS, defaults);
  return getRelativeTimeFormat(locale, filteredOptions);
}
function formatRelativeTime(config, getRelativeTimeFormat, value, unit, options) {
  if (options === void 0) {
    options = {};
  }
  if (!unit) {
    unit = 'second';
  }
  var RelativeTimeFormat = Intl.RelativeTimeFormat;
  if (!RelativeTimeFormat) {
    config.onError(new intl_messageformat__WEBPACK_IMPORTED_MODULE_1__["FormatError"]("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", intl_messageformat__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].MISSING_INTL_API));
  }
  try {
    return getFormatter(config, getRelativeTimeFormat, options).format(value, unit);
  } catch (e) {
    config.onError(new _error__WEBPACK_IMPORTED_MODULE_2__["IntlFormatError"]('Error formatting relative time.', config.locale, e));
  }
  return String(value);
}

/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/types.js":
/*!******************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/types.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/utils.js ***!
  \******************************************************/
/*! exports provided: filterProps, DEFAULT_INTL_CONFIG, createIntlCache, createFormatters, getNamedFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterProps", function() { return filterProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_INTL_CONFIG", function() { return DEFAULT_INTL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIntlCache", function() { return createIntlCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormatters", function() { return createFormatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNamedFormat", function() { return getNamedFormat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/lib/index.js");
/* harmony import */ var _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @formatjs/fast-memoize */ "./node_modules/@formatjs/fast-memoize/lib/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");




function filterProps(props, allowlist, defaults) {
  if (defaults === void 0) {
    defaults = {};
  }
  return allowlist.reduce(function (filtered, name) {
    if (name in props) {
      filtered[name] = props[name];
    } else if (name in defaults) {
      filtered[name] = defaults[name];
    }
    return filtered;
  }, {});
}
var defaultErrorHandler = function (error) {
  // @ts-ignore just so we don't need to declare dep on @types/node
  if (true) {
    console.error(error);
  }
};
var defaultWarnHandler = function (warning) {
  // @ts-ignore just so we don't need to declare dep on @types/node
  if (true) {
    console.warn(warning);
  }
};
var DEFAULT_INTL_CONFIG = {
  formats: {},
  messages: {},
  timeZone: undefined,
  defaultLocale: 'en',
  defaultFormats: {},
  fallbackOnEmptyString: true,
  onError: defaultErrorHandler,
  onWarn: defaultWarnHandler
};
function createIntlCache() {
  return {
    dateTime: {},
    number: {},
    message: {},
    relativeTime: {},
    pluralRules: {},
    list: {},
    displayNames: {}
  };
}
function createFastMemoizeCache(store) {
  return {
    create: function () {
      return {
        get: function (key) {
          return store[key];
        },
        set: function (key, value) {
          store[key] = value;
        }
      };
    }
  };
}
/**
 * Create intl formatters and populate cache
 * @param cache explicit cache to prevent leaking memory
 */
function createFormatters(cache) {
  if (cache === void 0) {
    cache = createIntlCache();
  }
  var RelativeTimeFormat = Intl.RelativeTimeFormat;
  var ListFormat = Intl.ListFormat;
  var DisplayNames = Intl.DisplayNames;
  var getDateTimeFormat = Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return new ((_a = Intl.DateTimeFormat).bind.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([void 0], args, false)))();
  }, {
    cache: createFastMemoizeCache(cache.dateTime),
    strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["strategies"].variadic
  });
  var getNumberFormat = Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return new ((_a = Intl.NumberFormat).bind.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([void 0], args, false)))();
  }, {
    cache: createFastMemoizeCache(cache.number),
    strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["strategies"].variadic
  });
  var getPluralRules = Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return new ((_a = Intl.PluralRules).bind.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([void 0], args, false)))();
  }, {
    cache: createFastMemoizeCache(cache.pluralRules),
    strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["strategies"].variadic
  });
  return {
    getDateTimeFormat: getDateTimeFormat,
    getNumberFormat: getNumberFormat,
    getMessageFormat: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (message, locales, overrideFormats, opts) {
      return new intl_messageformat__WEBPACK_IMPORTED_MODULE_1__["IntlMessageFormat"](message, locales, overrideFormats, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        formatters: {
          getNumberFormat: getNumberFormat,
          getDateTimeFormat: getDateTimeFormat,
          getPluralRules: getPluralRules
        }
      }, opts || {}));
    }, {
      cache: createFastMemoizeCache(cache.message),
      strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["strategies"].variadic
    }),
    getRelativeTimeFormat: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return new (RelativeTimeFormat.bind.apply(RelativeTimeFormat, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache(cache.relativeTime),
      strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["strategies"].variadic
    }),
    getPluralRules: getPluralRules,
    getListFormat: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return new (ListFormat.bind.apply(ListFormat, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache(cache.list),
      strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["strategies"].variadic
    }),
    getDisplayNames: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return new (DisplayNames.bind.apply(DisplayNames, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache(cache.displayNames),
      strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["strategies"].variadic
    })
  };
}
function getNamedFormat(formats, type, name, onError) {
  var formatType = formats && formats[type];
  var format;
  if (formatType) {
    format = formatType[name];
  }
  if (format) {
    return format;
  }
  onError(new _error__WEBPACK_IMPORTED_MODULE_3__["UnsupportedFormatterError"]("No ".concat(type, " format named: ").concat(name)));
}

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

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above

  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }
  return targetComponent;
}
module.exports = hoistNonReactStatics;

/***/ }),

/***/ "./node_modules/intl-messageformat/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/index.js ***!
  \******************************************************/
/*! exports provided: PART_TYPE, isFormatXMLElementFn, formatToParts, IntlMessageFormat, ErrorCode, FormatError, InvalidValueError, InvalidValueTypeError, MissingValueError, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/core */ "./node_modules/intl-messageformat/lib/src/core.js");
/* harmony import */ var _src_formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/formatters */ "./node_modules/intl-messageformat/lib/src/formatters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PART_TYPE", function() { return _src_formatters__WEBPACK_IMPORTED_MODULE_1__["PART_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFormatXMLElementFn", function() { return _src_formatters__WEBPACK_IMPORTED_MODULE_1__["isFormatXMLElementFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatToParts", function() { return _src_formatters__WEBPACK_IMPORTED_MODULE_1__["formatToParts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntlMessageFormat", function() { return _src_core__WEBPACK_IMPORTED_MODULE_0__["IntlMessageFormat"]; });

/* harmony import */ var _src_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/error */ "./node_modules/intl-messageformat/lib/src/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatError", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["FormatError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvalidValueError", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["InvalidValueError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvalidValueTypeError", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["InvalidValueTypeError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingValueError", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["MissingValueError"]; });

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/




/* harmony default export */ __webpack_exports__["default"] = (_src_core__WEBPACK_IMPORTED_MODULE_0__["IntlMessageFormat"]);

/***/ }),

/***/ "./node_modules/intl-messageformat/lib/src/core.js":
/*!*********************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/src/core.js ***!
  \*********************************************************/
/*! exports provided: IntlMessageFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntlMessageFormat", function() { return IntlMessageFormat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @formatjs/icu-messageformat-parser */ "./node_modules/@formatjs/icu-messageformat-parser/lib/index.js");
/* harmony import */ var _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @formatjs/fast-memoize */ "./node_modules/@formatjs/fast-memoize/lib/index.js");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatters */ "./node_modules/intl-messageformat/lib/src/formatters.js");
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/




// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
  if (!c2) {
    return c1;
  }
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, c1 || {}), c2 || {}), Object.keys(c1).reduce(function (all, k) {
    all[k] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, c1[k]), c2[k] || {});
    return all;
  }, {}));
}
function mergeConfigs(defaultConfig, configs) {
  if (!configs) {
    return defaultConfig;
  }
  return Object.keys(defaultConfig).reduce(function (all, k) {
    all[k] = mergeConfig(defaultConfig[k], configs[k]);
    return all;
  }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultConfig));
}
function createFastMemoizeCache(store) {
  return {
    create: function () {
      return {
        get: function (key) {
          return store[key];
        },
        set: function (key, value) {
          store[key] = value;
        }
      };
    }
  };
}
function createDefaultFormatters(cache) {
  if (cache === void 0) {
    cache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    };
  }
  return {
    getNumberFormat: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return new ((_a = Intl.NumberFormat).bind.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache(cache.number),
      strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["strategies"].variadic
    }),
    getDateTimeFormat: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return new ((_a = Intl.DateTimeFormat).bind.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache(cache.dateTime),
      strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["strategies"].variadic
    }),
    getPluralRules: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return new ((_a = Intl.PluralRules).bind.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache(cache.pluralRules),
      strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["strategies"].variadic
    })
  };
}
var IntlMessageFormat = /** @class */function () {
  function IntlMessageFormat(message, locales, overrideFormats, opts) {
    var _this = this;
    if (locales === void 0) {
      locales = IntlMessageFormat.defaultLocale;
    }
    this.formatterCache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    };
    this.format = function (values) {
      var parts = _this.formatToParts(values);
      // Hot path for straight simple msg translations
      if (parts.length === 1) {
        return parts[0].value;
      }
      var result = parts.reduce(function (all, part) {
        if (!all.length || part.type !== _formatters__WEBPACK_IMPORTED_MODULE_3__["PART_TYPE"].literal || typeof all[all.length - 1] !== 'string') {
          all.push(part.value);
        } else {
          all[all.length - 1] += part.value;
        }
        return all;
      }, []);
      if (result.length <= 1) {
        return result[0] || '';
      }
      return result;
    };
    this.formatToParts = function (values) {
      return Object(_formatters__WEBPACK_IMPORTED_MODULE_3__["formatToParts"])(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
    };
    this.resolvedOptions = function () {
      return {
        locale: _this.resolvedLocale.toString()
      };
    };
    this.getAst = function () {
      return _this.ast;
    };
    // Defined first because it's used to build the format pattern.
    this.locales = locales;
    this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
    if (typeof message === 'string') {
      this.message = message;
      if (!IntlMessageFormat.__parse) {
        throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
      }
      // Parse string messages into an AST.
      this.ast = IntlMessageFormat.__parse(message, {
        ignoreTag: opts === null || opts === void 0 ? void 0 : opts.ignoreTag,
        locale: this.resolvedLocale
      });
    } else {
      this.ast = message;
    }
    if (!Array.isArray(this.ast)) {
      throw new TypeError('A message must be provided as a String or AST.');
    }
    // Creates a new object with the specified `formats` merged with the default
    // formats.
    this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
    this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
  }
  Object.defineProperty(IntlMessageFormat, "defaultLocale", {
    get: function () {
      if (!IntlMessageFormat.memoizedDefaultLocale) {
        IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
      }
      return IntlMessageFormat.memoizedDefaultLocale;
    },
    enumerable: false,
    configurable: true
  });
  IntlMessageFormat.memoizedDefaultLocale = null;
  IntlMessageFormat.resolveLocale = function (locales) {
    var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
    if (supportedLocales.length > 0) {
      return new Intl.Locale(supportedLocales[0]);
    }
    return new Intl.Locale(typeof locales === 'string' ? locales : locales[0]);
  };
  IntlMessageFormat.__parse = _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_1__["parse"];
  // Default format options used as the prototype of the `formats` provided to the
  // constructor. These are used when constructing the internal Intl.NumberFormat
  // and Intl.DateTimeFormat instances.
  IntlMessageFormat.formats = {
    number: {
      integer: {
        maximumFractionDigits: 0
      },
      currency: {
        style: 'currency'
      },
      percent: {
        style: 'percent'
      }
    },
    date: {
      short: {
        month: 'numeric',
        day: 'numeric',
        year: '2-digit'
      },
      medium: {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      },
      long: {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      },
      full: {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }
    },
    time: {
      short: {
        hour: 'numeric',
        minute: 'numeric'
      },
      medium: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      },
      long: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
      },
      full: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
      }
    }
  };
  return IntlMessageFormat;
}();


/***/ }),

/***/ "./node_modules/intl-messageformat/lib/src/error.js":
/*!**********************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/src/error.js ***!
  \**********************************************************/
/*! exports provided: ErrorCode, FormatError, InvalidValueError, InvalidValueTypeError, MissingValueError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return ErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatError", function() { return FormatError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidValueError", function() { return InvalidValueError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidValueTypeError", function() { return InvalidValueTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingValueError", function() { return MissingValueError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ErrorCode;
(function (ErrorCode) {
  // When we have a placeholder but no value to format
  ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
  // When value supplied is invalid
  ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
  // When we need specific Intl API but it's not available
  ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var FormatError = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormatError, _super);
  function FormatError(msg, code, originalMessage) {
    var _this = _super.call(this, msg) || this;
    _this.code = code;
    _this.originalMessage = originalMessage;
    return _this;
  }
  FormatError.prototype.toString = function () {
    return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
  };
  return FormatError;
}(Error);

var InvalidValueError = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvalidValueError, _super);
  function InvalidValueError(variableId, value, options, originalMessage) {
    return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
  }
  return InvalidValueError;
}(FormatError);

var InvalidValueTypeError = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvalidValueTypeError, _super);
  function InvalidValueTypeError(value, type, originalMessage) {
    return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
  }
  return InvalidValueTypeError;
}(FormatError);

var MissingValueError = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MissingValueError, _super);
  function MissingValueError(variableId, originalMessage) {
    return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
  }
  return MissingValueError;
}(FormatError);


/***/ }),

/***/ "./node_modules/intl-messageformat/lib/src/formatters.js":
/*!***************************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/src/formatters.js ***!
  \***************************************************************/
/*! exports provided: PART_TYPE, isFormatXMLElementFn, formatToParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PART_TYPE", function() { return PART_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFormatXMLElementFn", function() { return isFormatXMLElementFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatToParts", function() { return formatToParts; });
/* harmony import */ var _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formatjs/icu-messageformat-parser */ "./node_modules/@formatjs/icu-messageformat-parser/lib/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/intl-messageformat/lib/src/error.js");


var PART_TYPE;
(function (PART_TYPE) {
  PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
  PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
  if (parts.length < 2) {
    return parts;
  }
  return parts.reduce(function (all, part) {
    var lastPart = all[all.length - 1];
    if (!lastPart || lastPart.type !== PART_TYPE.literal || part.type !== PART_TYPE.literal) {
      all.push(part);
    } else {
      lastPart.value += part.value;
    }
    return all;
  }, []);
}
function isFormatXMLElementFn(el) {
  return typeof el === 'function';
}
// TODO(skeleton): add skeleton support
function formatToParts(els, locales, formatters, formats, values, currentPluralValue,
// For debugging
originalMessage) {
  // Hot path for straight simple msg translations
  if (els.length === 1 && Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isLiteralElement"])(els[0])) {
    return [{
      type: PART_TYPE.literal,
      value: els[0].value
    }];
  }
  var result = [];
  for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
    var el = els_1[_i];
    // Exit early for string parts.
    if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isLiteralElement"])(el)) {
      result.push({
        type: PART_TYPE.literal,
        value: el.value
      });
      continue;
    }
    // TODO: should this part be literal type?
    // Replace `#` in plural rules with the actual numeric value.
    if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isPoundElement"])(el)) {
      if (typeof currentPluralValue === 'number') {
        result.push({
          type: PART_TYPE.literal,
          value: formatters.getNumberFormat(locales).format(currentPluralValue)
        });
      }
      continue;
    }
    var varName = el.value;
    // Enforce that all required values are provided by the caller.
    if (!(values && varName in values)) {
      throw new _error__WEBPACK_IMPORTED_MODULE_1__["MissingValueError"](varName, originalMessage);
    }
    var value = values[varName];
    if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isArgumentElement"])(el)) {
      if (!value || typeof value === 'string' || typeof value === 'number') {
        value = typeof value === 'string' || typeof value === 'number' ? String(value) : '';
      }
      result.push({
        type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
        value: value
      });
      continue;
    }
    // Recursively format plural and select parts' option — which can be a
    // nested pattern structure. The choosing of the option to use is
    // abstracted-by and delegated-to the part helper object.
    if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isDateElement"])(el)) {
      var style = typeof el.style === 'string' ? formats.date[el.style] : Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isDateTimeSkeleton"])(el.style) ? el.style.parsedOptions : undefined;
      result.push({
        type: PART_TYPE.literal,
        value: formatters.getDateTimeFormat(locales, style).format(value)
      });
      continue;
    }
    if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isTimeElement"])(el)) {
      var style = typeof el.style === 'string' ? formats.time[el.style] : Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isDateTimeSkeleton"])(el.style) ? el.style.parsedOptions : formats.time.medium;
      result.push({
        type: PART_TYPE.literal,
        value: formatters.getDateTimeFormat(locales, style).format(value)
      });
      continue;
    }
    if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isNumberElement"])(el)) {
      var style = typeof el.style === 'string' ? formats.number[el.style] : Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isNumberSkeleton"])(el.style) ? el.style.parsedOptions : undefined;
      if (style && style.scale) {
        value = value * (style.scale || 1);
      }
      result.push({
        type: PART_TYPE.literal,
        value: formatters.getNumberFormat(locales, style).format(value)
      });
      continue;
    }
    if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isTagElement"])(el)) {
      var children = el.children,
        value_1 = el.value;
      var formatFn = values[value_1];
      if (!isFormatXMLElementFn(formatFn)) {
        throw new _error__WEBPACK_IMPORTED_MODULE_1__["InvalidValueTypeError"](value_1, 'function', originalMessage);
      }
      var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
      var chunks = formatFn(parts.map(function (p) {
        return p.value;
      }));
      if (!Array.isArray(chunks)) {
        chunks = [chunks];
      }
      result.push.apply(result, chunks.map(function (c) {
        return {
          type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
          value: c
        };
      }));
    }
    if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isSelectElement"])(el)) {
      var opt = el.options[value] || el.options.other;
      if (!opt) {
        throw new _error__WEBPACK_IMPORTED_MODULE_1__["InvalidValueError"](el.value, value, Object.keys(el.options), originalMessage);
      }
      result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
      continue;
    }
    if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isPluralElement"])(el)) {
      var opt = el.options["=".concat(value)];
      if (!opt) {
        if (!Intl.PluralRules) {
          throw new _error__WEBPACK_IMPORTED_MODULE_1__["FormatError"]("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", _error__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].MISSING_INTL_API, originalMessage);
        }
        var rule = formatters.getPluralRules(locales, {
          type: el.pluralType
        }).select(value - (el.offset || 0));
        opt = el.options[rule] || el.options.other;
      }
      if (!opt) {
        throw new _error__WEBPACK_IMPORTED_MODULE_1__["InvalidValueError"](el.value, value, Object.keys(el.options), originalMessage);
      }
      result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
      continue;
    }
  }
  return mergeLiteral(result);
}

/***/ }),

/***/ "./node_modules/react-intl/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-intl/lib/index.js ***!
  \**********************************************/
/*! exports provided: FormattedDateTimeRange, FormattedMessage, FormattedPlural, FormattedRelativeTime, IntlContext, IntlProvider, RawIntlProvider, createIntl, injectIntl, useIntl, createIntlCache, UnsupportedFormatterError, InvalidConfigError, MissingDataError, MessageFormatError, MissingTranslationError, ReactIntlErrorCode, ReactIntlError, defineMessages, defineMessage, FormattedDate, FormattedTime, FormattedNumber, FormattedList, FormattedDisplayName, FormattedDateParts, FormattedTimeParts, FormattedNumberParts, FormattedListParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineMessages", function() { return defineMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineMessage", function() { return defineMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedDate", function() { return FormattedDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedTime", function() { return FormattedTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedNumber", function() { return FormattedNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedList", function() { return FormattedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedDisplayName", function() { return FormattedDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedDateParts", function() { return FormattedDateParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedTimeParts", function() { return FormattedTimeParts; });
/* harmony import */ var _src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/components/createFormattedComponent */ "./node_modules/react-intl/lib/src/components/createFormattedComponent.js");
/* harmony import */ var _src_components_injectIntl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/injectIntl */ "./node_modules/react-intl/lib/src/components/injectIntl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntlContext", function() { return _src_components_injectIntl__WEBPACK_IMPORTED_MODULE_1__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RawIntlProvider", function() { return _src_components_injectIntl__WEBPACK_IMPORTED_MODULE_1__["Provider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injectIntl", function() { return _src_components_injectIntl__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_components_useIntl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/useIntl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIntl", function() { return _src_components_useIntl__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_components_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/components/provider */ "./node_modules/react-intl/lib/src/components/provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntlProvider", function() { return _src_components_provider__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntl", function() { return _src_components_provider__WEBPACK_IMPORTED_MODULE_3__["createIntl"]; });

/* harmony import */ var _src_components_relative__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/components/relative */ "./node_modules/react-intl/lib/src/components/relative.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormattedRelativeTime", function() { return _src_components_relative__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_components_plural__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/components/plural */ "./node_modules/react-intl/lib/src/components/plural.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormattedPlural", function() { return _src_components_plural__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_components_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/components/message */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormattedMessage", function() { return _src_components_message__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_components_dateTimeRange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/components/dateTimeRange */ "./node_modules/react-intl/lib/src/components/dateTimeRange.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormattedDateTimeRange", function() { return _src_components_dateTimeRange__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _formatjs_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @formatjs/intl */ "./node_modules/@formatjs/intl/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntlCache", function() { return _formatjs_intl__WEBPACK_IMPORTED_MODULE_8__["createIntlCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsupportedFormatterError", function() { return _formatjs_intl__WEBPACK_IMPORTED_MODULE_8__["UnsupportedFormatterError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvalidConfigError", function() { return _formatjs_intl__WEBPACK_IMPORTED_MODULE_8__["InvalidConfigError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingDataError", function() { return _formatjs_intl__WEBPACK_IMPORTED_MODULE_8__["MissingDataError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageFormatError", function() { return _formatjs_intl__WEBPACK_IMPORTED_MODULE_8__["MessageFormatError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingTranslationError", function() { return _formatjs_intl__WEBPACK_IMPORTED_MODULE_8__["MissingTranslationError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactIntlErrorCode", function() { return _formatjs_intl__WEBPACK_IMPORTED_MODULE_8__["IntlErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactIntlError", function() { return _formatjs_intl__WEBPACK_IMPORTED_MODULE_8__["IntlError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormattedNumberParts", function() { return _src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_0__["FormattedNumberParts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormattedListParts", function() { return _src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_0__["FormattedListParts"]; });











function defineMessages(msgs) {
  return msgs;
}
function defineMessage(msg) {
  return msg;
}
// IMPORTANT: Explicit here to prevent api-extractor from outputing `import('./src/types').CustomFormatConfig`
var FormattedDate = Object(_src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_0__["createFormattedComponent"])('formatDate');
var FormattedTime = Object(_src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_0__["createFormattedComponent"])('formatTime');
// @ts-ignore issue w/ TS Intl types
var FormattedNumber = Object(_src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_0__["createFormattedComponent"])('formatNumber');
var FormattedList = Object(_src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_0__["createFormattedComponent"])('formatList');
var FormattedDisplayName = Object(_src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_0__["createFormattedComponent"])('formatDisplayName');
var FormattedDateParts = Object(_src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_0__["createFormattedDateTimePartsComponent"])('formatDate');
var FormattedTimeParts = Object(_src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_0__["createFormattedDateTimePartsComponent"])('formatTime');


/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/createFormattedComponent.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/createFormattedComponent.js ***!
  \********************************************************************************/
/*! exports provided: FormattedNumberParts, FormattedListParts, createFormattedDateTimePartsComponent, createFormattedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedNumberParts", function() { return FormattedNumberParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedListParts", function() { return FormattedListParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormattedDateTimePartsComponent", function() { return createFormattedDateTimePartsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormattedComponent", function() { return createFormattedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useIntl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useIntl */ "./node_modules/react-intl/lib/src/components/useIntl.js");



var DisplayName;
(function (DisplayName) {
  DisplayName["formatDate"] = "FormattedDate";
  DisplayName["formatTime"] = "FormattedTime";
  DisplayName["formatNumber"] = "FormattedNumber";
  DisplayName["formatList"] = "FormattedList";
  // Note that this DisplayName is the locale display name, not to be confused with
  // the name of the enum, which is for React component display name in dev tools.
  DisplayName["formatDisplayName"] = "FormattedDisplayName";
})(DisplayName || (DisplayName = {}));
var DisplayNameParts;
(function (DisplayNameParts) {
  DisplayNameParts["formatDate"] = "FormattedDateParts";
  DisplayNameParts["formatTime"] = "FormattedTimeParts";
  DisplayNameParts["formatNumber"] = "FormattedNumberParts";
  DisplayNameParts["formatList"] = "FormattedListParts";
})(DisplayNameParts || (DisplayNameParts = {}));
var FormattedNumberParts = function (props) {
  var intl = Object(_useIntl__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var value = props.value,
    children = props.children,
    formatProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["value", "children"]);
  return children(intl.formatNumberToParts(value, formatProps));
};
FormattedNumberParts.displayName = 'FormattedNumberParts';
var FormattedListParts = function (props) {
  var intl = Object(_useIntl__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var value = props.value,
    children = props.children,
    formatProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["value", "children"]);
  return children(intl.formatListToParts(value, formatProps));
};
FormattedNumberParts.displayName = 'FormattedNumberParts';
function createFormattedDateTimePartsComponent(name) {
  var ComponentParts = function (props) {
    var intl = Object(_useIntl__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var value = props.value,
      children = props.children,
      formatProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["value", "children"]);
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    var formattedParts = name === 'formatDate' ? intl.formatDateToParts(date, formatProps) : intl.formatTimeToParts(date, formatProps);
    return children(formattedParts);
  };
  ComponentParts.displayName = DisplayNameParts[name];
  return ComponentParts;
}
function createFormattedComponent(name) {
  var Component = function (props) {
    var intl = Object(_useIntl__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var value = props.value,
      children = props.children,
      formatProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props
      // TODO: fix TS type definition for localeMatcher upstream
      , ["value", "children"]);
    // TODO: fix TS type definition for localeMatcher upstream
    var formattedValue = intl[name](value, formatProps);
    if (typeof children === 'function') {
      return children(formattedValue);
    }
    var Text = intl.textComponent || react__WEBPACK_IMPORTED_MODULE_1__["Fragment"];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Text, null, formattedValue);
  };
  Component.displayName = DisplayName[name];
  return Component;
}

/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/dateTimeRange.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/dateTimeRange.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useIntl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useIntl */ "./node_modules/react-intl/lib/src/components/useIntl.js");



var FormattedDateTimeRange = function (props) {
  var intl = Object(_useIntl__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var from = props.from,
    to = props.to,
    children = props.children,
    formatProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["from", "to", "children"]);
  var formattedValue = intl.formatDateTimeRange(from, to, formatProps);
  if (typeof children === 'function') {
    return children(formattedValue);
  }
  var Text = intl.textComponent || react__WEBPACK_IMPORTED_MODULE_1__["Fragment"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Text, null, formattedValue);
};
FormattedDateTimeRange.displayName = 'FormattedDateTimeRange';
/* harmony default export */ __webpack_exports__["default"] = (FormattedDateTimeRange);

/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/injectIntl.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/injectIntl.js ***!
  \******************************************************************/
/*! exports provided: Provider, Context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return injectIntl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/react-intl/lib/src/utils.js");




function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}
// TODO: We should provide initial value here
var IntlContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createContext"](null);
var IntlConsumer = IntlContext.Consumer,
  IntlProvider = IntlContext.Provider;
var Provider = IntlProvider;
var Context = IntlContext;
function injectIntl(WrappedComponent, options) {
  var _a = options || {},
    _b = _a.intlPropName,
    intlPropName = _b === void 0 ? 'intl' : _b,
    _c = _a.forwardRef,
    forwardRef = _c === void 0 ? false : _c,
    _d = _a.enforceContext,
    enforceContext = _d === void 0 ? true : _d;
  var WithIntl = function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IntlConsumer, null, function (intl) {
      var _a;
      if (enforceContext) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["invariantIntlContext"])(intl);
      }
      var intlProp = (_a = {}, _a[intlPropName] = intl, _a);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, intlProp, {
        ref: forwardRef ? props.forwardedRef : null
      }));
    });
  };
  WithIntl.displayName = "injectIntl(".concat(getDisplayName(WrappedComponent), ")");
  WithIntl.WrappedComponent = WrappedComponent;
  if (forwardRef) {
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WithIntl, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, {
        forwardedRef: ref
      }));
    }), WrappedComponent);
  }
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(WithIntl, WrappedComponent);
}

/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/message.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/message.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useIntl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useIntl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/react-intl/lib/src/utils.js");
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */




function areEqual(prevProps, nextProps) {
  var values = prevProps.values,
    otherProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(prevProps, ["values"]);
  var nextValues = nextProps.values,
    nextOtherProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(nextProps, ["values"]);
  return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"])(nextValues, values) && Object(_utils__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"])(otherProps, nextOtherProps);
}
function FormattedMessage(props) {
  var intl = Object(_useIntl__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var formatMessage = intl.formatMessage,
    _a = intl.textComponent,
    Text = _a === void 0 ? react__WEBPACK_IMPORTED_MODULE_1__["Fragment"] : _a;
  var id = props.id,
    description = props.description,
    defaultMessage = props.defaultMessage,
    values = props.values,
    children = props.children,
    _b = props.tagName,
    Component = _b === void 0 ? Text : _b,
    ignoreTag = props.ignoreTag;
  var descriptor = {
    id: id,
    description: description,
    defaultMessage: defaultMessage
  };
  var nodes = formatMessage(descriptor, values, {
    ignoreTag: ignoreTag
  });
  if (typeof children === 'function') {
    return children(Array.isArray(nodes) ? nodes : [nodes]);
  }
  if (Component) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, null, react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(nodes));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, nodes);
}
FormattedMessage.displayName = 'FormattedMessage';
var MemoizedFormattedMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["memo"](FormattedMessage, areEqual);
MemoizedFormattedMessage.displayName = 'MemoizedFormattedMessage';
/* harmony default export */ __webpack_exports__["default"] = (MemoizedFormattedMessage);

/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/plural.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/plural.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIntl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIntl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */


var FormattedPlural = function (props) {
  var _a = Object(_useIntl__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    formatPlural = _a.formatPlural,
    Text = _a.textComponent;
  var value = props.value,
    other = props.other,
    children = props.children;
  var pluralCategory = formatPlural(value, props);
  var formattedPlural = props[pluralCategory] || other;
  if (typeof children === 'function') {
    return children(formattedPlural);
  }
  if (Text) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Text, null, formattedPlural);
  }
  // Work around @types/react where React.FC cannot return string
  return formattedPlural;
};
FormattedPlural.defaultProps = {
  type: 'cardinal'
};
FormattedPlural.displayName = 'FormattedPlural';
/* harmony default export */ __webpack_exports__["default"] = (FormattedPlural);

/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/provider.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/provider.js ***!
  \****************************************************************/
/*! exports provided: createIntl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIntl", function() { return createIntl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _injectIntl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injectIntl */ "./node_modules/react-intl/lib/src/components/injectIntl.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/react-intl/lib/src/utils.js");
/* harmony import */ var _formatjs_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @formatjs/intl */ "./node_modules/@formatjs/intl/lib/index.js");
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/lib/index.js");
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */






function processIntlConfig(config) {
  return {
    locale: config.locale,
    timeZone: config.timeZone,
    fallbackOnEmptyString: config.fallbackOnEmptyString,
    formats: config.formats,
    textComponent: config.textComponent,
    messages: config.messages,
    defaultLocale: config.defaultLocale,
    defaultFormats: config.defaultFormats,
    onError: config.onError,
    onWarn: config.onWarn,
    wrapRichTextChunksInFragment: config.wrapRichTextChunksInFragment,
    defaultRichTextElements: config.defaultRichTextElements
  };
}
function assignUniqueKeysToFormatXMLElementFnArgument(values) {
  if (!values) {
    return values;
  }
  return Object.keys(values).reduce(function (acc, k) {
    var v = values[k];
    acc[k] = Object(intl_messageformat__WEBPACK_IMPORTED_MODULE_5__["isFormatXMLElementFn"])(v) ? Object(_utils__WEBPACK_IMPORTED_MODULE_3__["assignUniqueKeysToParts"])(v) : v;
    return acc;
  }, {});
}
var formatMessage = function (config, formatters, descriptor, rawValues) {
  var rest = [];
  for (var _i = 4; _i < arguments.length; _i++) {
    rest[_i - 4] = arguments[_i];
  }
  var values = assignUniqueKeysToFormatXMLElementFnArgument(rawValues);
  var chunks = _formatjs_intl__WEBPACK_IMPORTED_MODULE_4__["formatMessage"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([config, formatters, descriptor, values], rest, false));
  if (Array.isArray(chunks)) {
    return react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(chunks);
  }
  return chunks;
};
/**
 * Create intl object
 * @param config intl config
 * @param cache cache for formatter instances to prevent memory leak
 */
var createIntl = function (_a, cache) {
  var rawDefaultRichTextElements = _a.defaultRichTextElements,
    config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["defaultRichTextElements"]);
  var defaultRichTextElements = assignUniqueKeysToFormatXMLElementFnArgument(rawDefaultRichTextElements);
  var coreIntl = Object(_formatjs_intl__WEBPACK_IMPORTED_MODULE_4__["createIntl"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _utils__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_INTL_CONFIG"]), config), {
    defaultRichTextElements: defaultRichTextElements
  }), cache);
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, coreIntl), {
    formatMessage: formatMessage.bind(null, {
      locale: coreIntl.locale,
      timeZone: coreIntl.timeZone,
      fallbackOnEmptyString: coreIntl.fallbackOnEmptyString,
      formats: coreIntl.formats,
      defaultLocale: coreIntl.defaultLocale,
      defaultFormats: coreIntl.defaultFormats,
      messages: coreIntl.messages,
      onError: coreIntl.onError,
      defaultRichTextElements: defaultRichTextElements
    }, coreIntl.formatters)
  });
};
var IntlProvider = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IntlProvider, _super);
  function IntlProvider() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.cache = Object(_formatjs_intl__WEBPACK_IMPORTED_MODULE_4__["createIntlCache"])();
    _this.state = {
      cache: _this.cache,
      intl: createIntl(processIntlConfig(_this.props), _this.cache),
      prevConfig: processIntlConfig(_this.props)
    };
    return _this;
  }
  IntlProvider.getDerivedStateFromProps = function (props, _a) {
    var prevConfig = _a.prevConfig,
      cache = _a.cache;
    var config = processIntlConfig(props);
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"])(prevConfig, config)) {
      return {
        intl: createIntl(config, cache),
        prevConfig: config
      };
    }
    return null;
  };
  IntlProvider.prototype.render = function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["invariantIntlContext"])(this.state.intl);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_injectIntl__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      value: this.state.intl
    }, this.props.children);
  };
  IntlProvider.displayName = 'IntlProvider';
  IntlProvider.defaultProps = _utils__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_INTL_CONFIG"];
  return IntlProvider;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);
/* harmony default export */ __webpack_exports__["default"] = (IntlProvider);

/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/relative.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/relative.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @formatjs/ecma402-abstract */ "./node_modules/@formatjs/ecma402-abstract/lib/index.js");
/* harmony import */ var _useIntl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIntl */ "./node_modules/react-intl/lib/src/components/useIntl.js");

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */



var MINUTE = 60;
var HOUR = 60 * 60;
var DAY = 60 * 60 * 24;
function selectUnit(seconds) {
  var absValue = Math.abs(seconds);
  if (absValue < MINUTE) {
    return 'second';
  }
  if (absValue < HOUR) {
    return 'minute';
  }
  if (absValue < DAY) {
    return 'hour';
  }
  return 'day';
}
function getDurationInSeconds(unit) {
  switch (unit) {
    case 'second':
      return 1;
    case 'minute':
      return MINUTE;
    case 'hour':
      return HOUR;
    default:
      return DAY;
  }
}
function valueToSeconds(value, unit) {
  if (!value) {
    return 0;
  }
  switch (unit) {
    case 'second':
      return value;
    case 'minute':
      return value * MINUTE;
    default:
      return value * HOUR;
  }
}
var INCREMENTABLE_UNITS = ['second', 'minute', 'hour'];
function canIncrement(unit) {
  if (unit === void 0) {
    unit = 'second';
  }
  return INCREMENTABLE_UNITS.indexOf(unit) > -1;
}
var SimpleFormattedRelativeTime = function (props) {
  var _a = Object(_useIntl__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    formatRelativeTime = _a.formatRelativeTime,
    Text = _a.textComponent;
  var children = props.children,
    value = props.value,
    unit = props.unit,
    otherProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["children", "value", "unit"]);
  var formattedRelativeTime = formatRelativeTime(value || 0, unit, otherProps);
  if (typeof children === 'function') {
    return children(formattedRelativeTime);
  }
  if (Text) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Text, null, formattedRelativeTime);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, formattedRelativeTime);
};
var FormattedRelativeTime = function (_a) {
  var value = _a.value,
    unit = _a.unit,
    updateIntervalInSeconds = _a.updateIntervalInSeconds,
    otherProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["value", "unit", "updateIntervalInSeconds"]);
  Object(_formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_2__["invariant"])(!updateIntervalInSeconds || !!(updateIntervalInSeconds && canIncrement(unit)), 'Cannot schedule update with unit longer than hour');
  var _b = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
    prevUnit = _b[0],
    setPrevUnit = _b[1];
  var _c = react__WEBPACK_IMPORTED_MODULE_1__["useState"](0),
    prevValue = _c[0],
    setPrevValue = _c[1];
  var _d = react__WEBPACK_IMPORTED_MODULE_1__["useState"](0),
    currentValueInSeconds = _d[0],
    setCurrentValueInSeconds = _d[1];
  var updateTimer;
  if (unit !== prevUnit || value !== prevValue) {
    setPrevValue(value || 0);
    setPrevUnit(unit);
    setCurrentValueInSeconds(canIncrement(unit) ? valueToSeconds(value, unit) : 0);
  }
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    function clearUpdateTimer() {
      clearTimeout(updateTimer);
    }
    clearUpdateTimer();
    // If there's no interval and we cannot increment this unit, do nothing
    if (!updateIntervalInSeconds || !canIncrement(unit)) {
      return clearUpdateTimer;
    }
    // Figure out the next interesting time
    var nextValueInSeconds = currentValueInSeconds - updateIntervalInSeconds;
    var nextUnit = selectUnit(nextValueInSeconds);
    // We've reached the max auto incrementable unit, don't schedule another update
    if (nextUnit === 'day') {
      return clearUpdateTimer;
    }
    var unitDuration = getDurationInSeconds(nextUnit);
    var remainder = nextValueInSeconds % unitDuration;
    var prevInterestingValueInSeconds = nextValueInSeconds - remainder;
    var nextInterestingValueInSeconds = prevInterestingValueInSeconds >= currentValueInSeconds ? prevInterestingValueInSeconds - unitDuration : prevInterestingValueInSeconds;
    var delayInSeconds = Math.abs(nextInterestingValueInSeconds - currentValueInSeconds);
    if (currentValueInSeconds !== nextInterestingValueInSeconds) {
      updateTimer = setTimeout(function () {
        return setCurrentValueInSeconds(nextInterestingValueInSeconds);
      }, delayInSeconds * 1e3);
    }
    return clearUpdateTimer;
  }, [currentValueInSeconds, updateIntervalInSeconds, unit]);
  var currentValue = value || 0;
  var currentUnit = unit;
  if (canIncrement(unit) && typeof currentValueInSeconds === 'number' && updateIntervalInSeconds) {
    currentUnit = selectUnit(currentValueInSeconds);
    var unitDuration = getDurationInSeconds(currentUnit);
    currentValue = Math.round(currentValueInSeconds / unitDuration);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SimpleFormattedRelativeTime, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    value: currentValue,
    unit: currentUnit
  }, otherProps));
};
FormattedRelativeTime.displayName = 'FormattedRelativeTime';
FormattedRelativeTime.defaultProps = {
  value: 0,
  unit: 'second'
};
/* harmony default export */ __webpack_exports__["default"] = (FormattedRelativeTime);

/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/useIntl.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/useIntl.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useIntl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _injectIntl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injectIntl */ "./node_modules/react-intl/lib/src/components/injectIntl.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/react-intl/lib/src/utils.js");



function useIntl() {
  var intl = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_injectIntl__WEBPACK_IMPORTED_MODULE_1__["Context"]);
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__["invariantIntlContext"])(intl);
  return intl;
}

/***/ }),

/***/ "./node_modules/react-intl/lib/src/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/react-intl/lib/src/utils.js ***!
  \**************************************************/
/*! exports provided: invariantIntlContext, DEFAULT_INTL_CONFIG, assignUniqueKeysToParts, shallowEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariantIntlContext", function() { return invariantIntlContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_INTL_CONFIG", function() { return DEFAULT_INTL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignUniqueKeysToParts", function() { return assignUniqueKeysToParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return shallowEqual; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @formatjs/ecma402-abstract */ "./node_modules/@formatjs/ecma402-abstract/lib/index.js");
/* harmony import */ var _formatjs_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @formatjs/intl */ "./node_modules/@formatjs/intl/lib/index.js");




function invariantIntlContext(intl) {
  Object(_formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_2__["invariant"])(intl, '[React Intl] Could not find required `intl` object. ' + '<IntlProvider> needs to exist in the component ancestry.');
}
var DEFAULT_INTL_CONFIG = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _formatjs_intl__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_INTL_CONFIG"]), {
  textComponent: react__WEBPACK_IMPORTED_MODULE_1__["Fragment"]
});
/**
 * Takes a `formatXMLElementFn`, and composes it in function, which passes
 * argument `parts` through, assigning unique key to each part, to prevent
 * "Each child in a list should have a unique "key"" React error.
 * @param formatXMLElementFn
 */
function assignUniqueKeysToParts(formatXMLElementFn) {
  return function (parts) {
    // eslint-disable-next-line prefer-rest-params
    return formatXMLElementFn(react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(parts));
  };
}
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }
  if (!objA || !objB) {
    return false;
  }
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var len = aKeys.length;
  if (bKeys.length !== len) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    var key = aKeys[i];
    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }
  return true;
}

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function () {
    'use strict';

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' ||
      // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }
    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;
            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;
              default:
                var $$typeofType = type && type.$$typeof;
                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;
                  default:
                    return $$typeof;
                }
            }
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__esDecorate", function() { return __esDecorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__runInitializers", function() { return __runInitializers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__propKey", function() { return __propKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__setFunctionName", function() { return __setFunctionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldIn", function() { return __classPrivateFieldIn; });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind,
    key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _,
    done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function (f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? {
      get: descriptor.get,
      set: descriptor.set
    } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.push(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.push(_);else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
;
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", {
    configurable: true,
    value: prefix ? "".concat(prefix, " ", name) : name
  });
}
;
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: false
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
    i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
;
var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

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

/***/ "./src/components/RfOneappDemo.jsx":
/*!*****************************************!*\
  !*** ./src/components/RfOneappDemo.jsx ***!
  \*****************************************/
/*! exports provided: RfOneappDemo, mapDispatchToProps, mapStateToProps, loadModuleData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RfOneappDemo", function() { return RfOneappDemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModuleData", function() { return loadModuleData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _americanexpress_one_app_ducks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @americanexpress/one-app-ducks */ "@americanexpress/one-app-ducks");
/* harmony import */ var _americanexpress_one_app_ducks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_americanexpress_one_app_ducks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _childRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../childRoutes */ "./src/childRoutes.jsx");







const RfOneappDemo = _ref => {
  let {
    switchLanguage,
    languageData,
    localeName
  } = _ref;
  const locales = ['en-US', 'en-CA', 'es-MX'];
  // naive solution - up to user on how to load in data
  if (languageData.greeting) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["IntlProvider"], {
      locale: localeName,
      messages: languageData
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      id: "greeting-message"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "greeting"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "locale"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "locale-selector"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Choose a locale:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "locale",
      id: "locale-selector",
      onChange: switchLanguage
    }, locales.map(locale => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: locale,
      value: locale
    }, locale)))))));
  }
  return null;
};

// Read about childRoutes:
// https://github.com/americanexpress/one-app/blob/main/docs/api/modules/Routing.md#childroutes
RfOneappDemo.childRoutes = _childRoutes__WEBPACK_IMPORTED_MODULE_6__["default"];

// Read about appConfig:
// https://github.com/americanexpress/one-app/blob/main/docs/api/modules/App-Configuration.md
/* istanbul ignore next */
if (true) {
  // eslint-disable-next-line global-require
  RfOneappDemo.appConfig = __webpack_require__(/*! ../appConfig */ "./src/appConfig.js").default;
}
RfOneappDemo.propTypes = {
  switchLanguage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  languageData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    greeting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  localeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
const mapDispatchToProps = dispatch => ({
  switchLanguage: async _ref2 => {
    let {
      target
    } = _ref2;
    await dispatch(Object(_americanexpress_one_app_ducks__WEBPACK_IMPORTED_MODULE_2__["updateLocale"])(target.value));
    await dispatch(Object(_americanexpress_one_app_ducks__WEBPACK_IMPORTED_MODULE_2__["loadLanguagePack"])('rf-oneapp-demo', {
      fallbackLocale: 'en-US'
    }));
  }
});
const mapStateToProps = state => {
  const localeName = state.getIn(['intl', 'activeLocale']);
  const languagePack = state.getIn(['intl', 'languagePacks', localeName, 'rf-oneapp-demo'], Object(immutable__WEBPACK_IMPORTED_MODULE_5__["fromJS"])({})).toJS();
  return {
    languageData: languagePack && languagePack.data ? languagePack.data : {},
    localeName
  };
};
const loadModuleData = _ref3 => {
  let {
    store: {
      dispatch
    }
  } = _ref3;
  return dispatch(Object(_americanexpress_one_app_ducks__WEBPACK_IMPORTED_MODULE_2__["loadLanguagePack"])('rf-oneapp-demo', {
    fallbackLocale: 'en-US'
  }));
};
RfOneappDemo.holocron = {
  name: 'rf-oneapp-demo',
  loadModuleData
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(RfOneappDemo));

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
/* harmony import */ var _components_RfOneappDemo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/RfOneappDemo */ "./src/components/RfOneappDemo.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_components_RfOneappDemo__WEBPACK_IMPORTED_MODULE_0__["default"]);
;
if (true) {
  _components_RfOneappDemo__WEBPACK_IMPORTED_MODULE_0__["default"].appConfig = Object.assign({}, _components_RfOneappDemo__WEBPACK_IMPORTED_MODULE_0__["default"].appConfig, {
    appCompatibility: "^5.0.0"
  });
}
;
_components_RfOneappDemo__WEBPACK_IMPORTED_MODULE_0__["default"].appConfig = Object.assign({}, _components_RfOneappDemo__WEBPACK_IMPORTED_MODULE_0__["default"].appConfig, {
  providedExternals: {
    'react-intl': {
      version: '5.25.1',
      module: __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js")
    }
  }
});
if (global.getTenantRootModule === undefined || global.rootModuleName && global.rootModuleName === 'rf-oneapp-demo') {
  global.getTenantRootModule = () => _components_RfOneappDemo__WEBPACK_IMPORTED_MODULE_0__["default"];
  global.rootModuleName = 'rf-oneapp-demo';
}
;
_components_RfOneappDemo__WEBPACK_IMPORTED_MODULE_0__["default"].__holocron_module_meta_data__ = {
  version: '1.0.0'
};
__webpack_exports__.default.ssrStyles = __webpack_require__(/*! ./node_modules/@americanexpress/one-app-bundler/webpack/loaders/ssr-css-loader/css-base.js */ "./node_modules/@americanexpress/one-app-bundler/webpack/loaders/ssr-css-loader/css-base.js")();

/***/ }),

/***/ "@americanexpress/one-app-ducks":
/*!***********************************************************************************!*\
  !*** external {"var":"OneAppDucks","commonjs2":"@americanexpress/one-app-ducks"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@americanexpress/one-app-ducks");

/***/ }),

/***/ "@americanexpress/one-app-router":
/*!*************************************************************************************!*\
  !*** external {"var":"OneAppRouter","commonjs2":"@americanexpress/one-app-router"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@americanexpress/one-app-router");

/***/ }),

/***/ "immutable":
/*!************************************************************!*\
  !*** external {"var":"Immutable","commonjs2":"immutable"} ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "prop-types":
/*!*************************************************************!*\
  !*** external {"var":"PropTypes","commonjs2":"prop-types"} ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!****************************************************!*\
  !*** external {"var":"React","commonjs2":"react"} ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!***************************************************************!*\
  !*** external {"var":"ReactRedux","commonjs2":"react-redux"} ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ })["default"];
//# sourceMappingURL=rf-oneapp-demo.node.js.map