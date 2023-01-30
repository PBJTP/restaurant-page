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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction aboutPage() {\n    const modal = document.createElement('div');\n    const torch = document.createElement('p');\n    const toss = document.createElement('p');\n    const roll = document.createElement('p');\n    const torchimg = document.createElement('img');\n    const tossimg = document.createElement('img');\n    const rollimg = document.createElement('img');\n\n    modal.classList.add('aboutModal');\n    torchimg.src = \"img/torch.jpeg\";\n    tossimg.src = \"img/toss.jpeg\";\n    rollimg.src = \"img/roll.jpeg\";\n\n    modal.appendChild(torch);\n    modal.appendChild(torchimg);\n    modal.appendChild(tossimg);\n    modal.appendChild(toss);\n    modal.appendChild(roll);\n    modal.appendChild(rollimg);\n\n    return modal;\n};\n\nfunction showAbout() {\n    const hero = document.querySelector('.hero');\n    while (hero.firstChild) {\n        hero.removeChild(hero.firstChild);\n    }\n\n    hero.appendChild(aboutPage());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showAbout);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/fullsite.js":
/*!*************************!*\
  !*** ./src/fullsite.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n// generate background image. assign classes. append to div.\n\n// generate header with nav elements. assign classes. append to div\n\n// generate footer. assign classes. append to div.\n\n// run exported home page function to fill content\n\n// add event listeners to nav buttons with functionality to change content\n\n\n\n\nfunction header() {\n    const header = document.createElement('div');\n    const name = document.createElement('h1');\n\n\n    header.classList.add('header');\n    name.classList.add('name');\n    name.textContent = \"SUSHI RO\";\n \n\n    header.appendChild(name);\n    header.appendChild(nav());\n\n\n    return header;\n}\n\nfunction nav() {\n    const nav = document.createElement('ul');\n    const home = document.createElement('li');\n    const menu = document.createElement('li');\n    const about = document.createElement('li');\n\n    nav.classList.add('nav');\n    home.classList.add('navButton', 'home');\n    home.textContent = \"HOME\";\n    menu.classList.add('navButton', 'menu');\n    menu.textContent = \"MENU\";\n    about.classList.add('navButton', 'about');\n    about.textContent = \"ABOUT\";\n\n    nav.appendChild(home);\n    nav.appendChild(menu);\n    nav.appendChild(about);\n\n    return nav;\n}\n\nfunction hero() {\n    const hero = document.createElement('div');\n\n    hero.classList.add('hero');\n\n    return hero;\n}\n\nfunction footer() {\n    const footer = document.createElement('div');\n    const sign = document.createElement('h3');\n\n    footer.classList.add('footer');\n    sign.textContent = \"Made by PBJTP\";\n\n    footer.appendChild(sign);\n\n    return footer;\n\n}\n\nfunction buildWebsite() {\n    const content = document.getElementById('content');\n\n    content.appendChild(header());\n    content.appendChild(hero());\n    content.appendChild(footer());\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/fullsite.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homePage() {\n    const modal = document.createElement('div');\n    const copy = document.createElement('div');\n\n    modal.classList.add('homeModal');\n    copy.classList.add('copy');\n    copy.textContent = \"It's really good sushi. Super good. Divine raw fish. Grade A rice. Best fish. Do you have too many fish? Now offering discount on giving me the fish for sushi. So good. Please come and eat the sushi. Everything else is not great, honestly. The sushi though. It's good.\";\n\n    modal.appendChild(copy);\n\n    return modal;\n};\n\nfunction showHome() {\n    const hero = document.querySelector('.hero');\n    while (hero.firstChild) {\n        hero.removeChild(hero.firstChild);\n    }\n\n    hero.appendChild(homePage());\n\n    // return hero;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fullsite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullsite */ \"./src/fullsite.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\n(0,_fullsite__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nfunction eventListeners() {\n    const home = document.querySelector('.home');\n    home.addEventListener('click', () => {\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n    const menu = document.querySelector('.menu');\n    menu.addEventListener('click', () => {\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n    const about = document.querySelector('.about');\n    about.addEventListener('click', () => {\n        (0,_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    });\n}\n\n\neventListeners();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeMenu() {\n    const menu = document.createElement('div');\n    const h2 = document.createElement('h2');\n    h2.textContent = \"MENU\";\n\n    menu.classList.add('menuModal');\n    menu.appendChild(h2);\n\n    menu.appendChild(makeMenuItem('Crunchy', 'Fish, Rice, Flavor'));\n    menu.appendChild(makeMenuItem('Saucy', 'Fish, Rice, Flavor'));\n    menu.appendChild(makeMenuItem('Plain', 'Fish, Rice, Flavor'));\n    menu.appendChild(makeMenuItem('Normal', 'Fish, Rice, Flavor'));\n    menu.appendChild(makeMenuItem('Best', 'Fish, Rice, Flavor'));\n    menu.appendChild(makeMenuItem('One', 'Fish, Rice, Flavor'));\n    menu.appendChild(makeMenuItem('Veggie', 'Fish, Rice, Flavor'));\n    menu.appendChild(makeMenuItem('Fried', 'Fish, Rice, Flavor'));\n\n    return menu;\n};\n\nfunction makeMenuItem(name, description) {\n    const item = document.createElement('div');\n    const img = document.createElement('img');\n    const food = document.createElement('p');\n    const desc = document.createElement('p');\n\n    item.classList.add('menuItem');\n    img.src = `img/${name.toLowerCase()}.jpeg`\n    food.textContent = name;\n    desc.textContent = description;\n\n    item.appendChild(img);\n    item.appendChild(food);\n    item.appendChild(desc);\n\n    return item;\n};\n\nfunction showMenu() {\n    const hero = document.querySelector('.hero');\n    while (hero.firstChild) {\n        hero.removeChild(hero.firstChild);\n    }\n\n    hero.appendChild(makeMenu());\n\n    return hero;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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