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

/***/ "./src/fullsite.js":
/*!*************************!*\
  !*** ./src/fullsite.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n// generate background image. assign classes. append to div.\n\n// generate header with nav elements. assign classes. append to div\n\n// generate footer. assign classes. append to div.\n\n// run exported home page function to fill content\n\n// add event listeners to nav buttons with functionality to change content\n\n\n\nfunction header() {\n    const header = document.createElement('div');\n    const name = document.createElement('h1');\n\n\n    header.classList.add('header');\n    name.classList.add('name');\n    name.textContent = \"SUSHI RO\";\n \n\n    header.appendChild(name);\n    header.appendChild(nav());\n\n\n    return header;\n}\n\nfunction nav() {\n    const nav = document.createElement('ul');\n    const home = document.createElement('li');\n    const menu = document.createElement('li');\n    const about = document.createElement('li');\n\n    nav.classList.add('nav');\n    home.classList.add('navButton', 'home');\n    home.textContent = \"HOME\";\n    menu.classList.add('navButton', 'menu');\n    menu.textContent = \"MENU\";\n    about.classList.add('navButton', 'about');\n    about.textContent = \"ABOUT\";\n\n    nav.appendChild(home);\n    nav.appendChild(menu);\n    nav.appendChild(about);\n\n    return nav;\n}\n\nfunction footer() {\n    const footer = document.createElement('div');\n    const sign = document.createElement('h3');\n\n    footer.classList.add('footer');\n    sign.textContent = \"Made by PBJTP\";\n\n    footer.appendChild(sign);\n\n    return footer;\n\n}\n\nfunction buildWebsite() {\n    const content = document.getElementById('content');\n\n    content.appendChild(header());\n    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    content.appendChild(footer());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/fullsite.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homePage() {\n    const home = document.createElement('div');\n    const modal = document.createElement('div');\n    const copy = document.createElement('div');\n\n    home.classList.add('hero');\n    modal.classList.add('modal');\n    copy.classList.add('copy');\n    copy.textContent = \"It's really good sushi. Super good. Divine raw fish. Grade A rice. Best fish. Do you have too many fish? Now offering discount on giving me the fish for sushi. So good. Please come and eat the sushi. Everything else is not great, honestly. The sushi though. It's good.\";\n\n    modal.appendChild(copy);\n    home.appendChild(modal);\n\n    return home;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fullsite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullsite */ \"./src/fullsite.js\");\n\n\nconsole.log('howdy');\n\n(0,_fullsite__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;