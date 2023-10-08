/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/classGlobal.js":
/*!***************************************!*\
  !*** ./assets/scripts/classGlobal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Global: () => (/* binding */ Global)\n/* harmony export */ });\n/**\n * Global scripts\n */\n\nclass Global {\n    constructor() {\n        this.config = {\n            \"debug\": true,\n            \"env\": this.env(),\n        }\n    }\n\n    init() {\n        console.log('Global.init', this.config);\n    }\n\n    env() {\n        return \"development\";\n    }\n}\n\n//# sourceURL=webpack://webpack-demo/./assets/scripts/classGlobal.js?");

/***/ }),

/***/ "./assets/scripts/utils/createElement.js":
/*!***********************************************!*\
  !*** ./assets/scripts/utils/createElement.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _e)\n/* harmony export */ });\n/**\n * Create element\n * \n * @param {string} tag\n * @param {array} attributes\n * @param {array} appendChild\n * @param {string} innerHTML\n * @returns {object}\n * @example _e('div', [['class', 'container']], [_e('h1', [], [], 'Hello World!')]);\n * @example _e('div', [['class', 'container']], [], 'Hello World!');\n * @example _e('div', [['class', 'container']]);\n * @example _e('div');\n */\n\nfunction _e(tag, attributes = [], appendChild = [], innerHTML) {\n    let element = document.createElement(tag);\n\n    if (attributes.length > 0) {\n        attributes.forEach(attribute => {\n            element.setAttribute(attribute[0], attribute[1]);\n        });\n    }\n\n    if (appendChild.length > 0) {\n        appendChild.forEach(child => {\n            element.appendChild(child);\n        });\n    }\n\n    if (innerHTML) {\n        element.innerHTML = innerHTML;\n    }\n\n    return element;\n}\n\n//# sourceURL=webpack://webpack-demo/./assets/scripts/utils/createElement.js?");

/***/ }),

/***/ "./src/example.com/index.js":
/*!**********************************!*\
  !*** ./src/example.com/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scripts_classGlobal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/scripts/classGlobal */ \"./assets/scripts/classGlobal.js\");\n/* harmony import */ var _scripts_custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/custom */ \"./src/example.com/scripts/custom.js\");\n/* harmony import */ var _assets_scripts_utils_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/scripts/utils/createElement */ \"./assets/scripts/utils/createElement.js\");\n/**\n * Index file for demo-project\n * @function component\n * @returns {HTMLElement} - The newly created div element containing the text \"Hello World!\"\n */\n\n\n\n\n\n\nclass Index {\n    constructor(global = new _assets_scripts_classGlobal__WEBPACK_IMPORTED_MODULE_0__.Global, custom = new _scripts_custom__WEBPACK_IMPORTED_MODULE_1__.Custom) {\n        console.log(\"Index\");\n        this.global = global;\n        this.custom = custom;\n        this.init();\n    }\n\n    init() {\n        console.log(\"Index.init\");\n        this.header();\n        this.main();\n        this.footer();\n    }\n\n    header() {\n        console.log(\"Index.header\");\n        const header = (0,_assets_scripts_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"header\", {\n            class: \"header\"\n        }, [\n            (0,_assets_scripts_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"h1\", { class: \"header__title\" }, [], \"Index\"),\n            (0,_assets_scripts_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"p\", { class: \"header__subtitle\" }, [], \"Index file for demo-project\")\n        ]);\n        document.body.appendChild(header);\n    }\n\n    main() {\n        console.log(\"Index.main\");\n        const main = (0,_assets_scripts_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"main\", {\n            class: \"main\"\n        }, [\n            (0,_assets_scripts_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"p\", { class: \"main__text\" }, [], \"Index\")\n        ]);\n        document.body.appendChild(main);\n    }\n\n    footer() {\n        console.log(\"Index.footer\");\n        const footer = (0,_assets_scripts_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"footer\", {\n            class: \"footer\"\n        }, [\n            (0,_assets_scripts_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"p\", { class: \"footer__text\" }, [], \"Footer\")\n        ]);\n        document.body.appendChild(footer);\n    }\n}\n\n// new Index(new Global, new Custom);\nnew Index;\n\n//# sourceURL=webpack://webpack-demo/./src/example.com/index.js?");

/***/ }),

/***/ "./src/example.com/scripts/custom.js":
/*!*******************************************!*\
  !*** ./src/example.com/scripts/custom.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Custom: () => (/* binding */ Custom)\n/* harmony export */ });\n/**\n * Custom scripts\n * \n * @package Demo project\n * @since 1.0.0\n */\n\nclass Custom {\n    constructor() {\n        console.log('Custom scripts loaded');\n    }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/example.com/scripts/custom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/example.com/index.js");
/******/ 	
/******/ })()
;