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

/***/ "./styles/styles.sass":
/*!****************************!*\
  !*** ./styles/styles.sass ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/styles.sass?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.sass */ \"./styles/styles.sass\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ \"./styles/styles.css\");\n\r\n\r\n\r\nlet forms = document.querySelectorAll(\"form\")\r\nlet overlay = document.querySelector(\".overlay\")\r\nlet modal = document.querySelector(\".thanks\")\r\nlet inputs = document.querySelectorAll(\".form__telInput\")\r\nfunction validate(e){  \r\n\r\n    e.preventDefault()\r\n\r\n    let currForm = e.target \r\n    if(currForm.querySelector(\".form__error\")){\r\n        currForm.querySelector(\".form__error\").remove()\r\n    }  \r\n\r\n    let value = currForm.querySelector(\".form__telInput\").value\r\n\r\n    let checkSymbols = true;\r\n    let symbols = `!\"@#№$;%^:&&?*()_-=`\r\n\r\n    for(let symb of symbols){\r\n        if(value.includes(symb)){\r\n            checkSymbols = false\r\n            break;\r\n        }\r\n    }\r\n   \r\n    \r\n    let checkLetters = value.split(``).filter(item=> item!=+item).filter(item=> item != \"+\").length > 0 ? false : true\r\n\r\n    let checkSizeSmall = value.length < 7 ? false : true\r\n\r\n    let checkSizeBig = value.length > 12 ? false : true\r\n\r\n    let checkPlus = value.includes(\"+\") ? true : false\r\n\r\n  \r\n    if(!checkSymbols){\r\n        createError(\"Введены недопустимые символы\")\r\n        return;\r\n    }\r\n    if(!checkLetters){\r\n        createError(\"Допускаются только цифры\")\r\n        return;\r\n    }\r\n    if(!checkPlus){\r\n        createError(\"Номер должен начинаться с +\")\r\n        return;\r\n    }\r\n    if(!checkSizeSmall){\r\n        createError(\"Номер слишком короткий\")\r\n        return;\r\n    }\r\n    if(!checkSizeBig){\r\n        createError(\"Номер слишком длинный\")\r\n        return;\r\n    }\r\n    \r\n  \r\n\r\n    function createError(msg){\r\n        let error = document.createElement('div')\r\n        error.innerHTML = msg;\r\n        error.classList.add(\"form__error\")\r\n        currForm.prepend(error);\r\n    }\r\n\r\n    overlay.style.display = `block`\r\n    modal.style.display = \"block\"\r\n    currForm.querySelector(\".form__telInput\").value = \"\"\r\n\r\n    setTimeout(() => {\r\n        overlay.style.display = `none`\r\n        modal.style.display = \"none\"\r\n    }, 2000);\r\n}\r\n\r\nforms.forEach((item)=>{    \r\n    item.addEventListener('submit',validate)\r\n});\r\n\r\ninputs.forEach((item)=>{\r\n    item.addEventListener(`focus`,function(e){\r\n        item.value = \"+7\"\r\n    })\r\n    \r\n})\r\n\r\n\r\n\r\nlet burgers = document.querySelectorAll(\".burger\")\r\nlet logo = document.querySelector(\".nav__logoWrapper\")\r\nfunction onBurgerClick(e){ \r\n\r\n    e.preventDefault()   \r\n\r\n    let currBurger = window.innerWidth > 450 ? burgers[1]: burgers[0]\r\n\r\n    currBurger.removeEventListener(`click`,onBurgerClick)\r\n\r\n    let navAnchors = document.querySelector(\".nav__anchorsWrapper\") \r\n\r\n    if(currBurger.contains(e.target) || e.target.contains(currBurger)){ \r\n\r\n        let anchors = document.querySelectorAll(\".nav__anchor\")  \r\n        anchors.forEach((item)=>{\r\n            item.addEventListener(`click`,closeBurger)\r\n        })  \r\n\r\n        let spans = currBurger.querySelectorAll(\"span\")\r\n        spans[1].style.display = `none`\r\n        spans[0].style.transform = `rotate(45deg) translate(2px, 1px)` \r\n        spans[2].style.transform = `rotate(-45deg) translate(1px, 0px)`\r\n        spans[2].style.marginTop = '0'    \r\n    \r\n    \r\n        navAnchors.style.display = `flex`\r\n        function closeBurger(){\r\n            spans[0].style.transform = `none` \r\n            spans[2].style.transform = `none`\r\n            spans[2].style.marginTop = '5px'\r\n            spans[1].style.display = `block`\r\n            navAnchors.style.display = `none`\r\n            currBurger.removeEventListener(`click`,back)   \r\n            currBurger.addEventListener(`click`,onBurgerClick)\r\n        }\r\n\r\n        function back(e){     \r\n            e.preventDefault() \r\n            closeBurger() \r\n        }\r\n\r\n          currBurger.addEventListener(`click`,back)\r\n\r\n    }else{\r\n        return\r\n    }\r\n\r\n\r\n\r\n\r\n}\r\nburgers.forEach((item)=>{\r\n    item.addEventListener(`click`,onBurgerClick)\r\n})\r\n\r\n\r\nlet imgs = document.querySelectorAll(\"img\")\r\n\r\nfunction onScroll(e){\r\n    imgs.forEach((item)=>{\r\n        if(item.getAttribute(`src`) == `./assets/images/placeholder.png`){\r\n            if(item.getBoundingClientRect().top - window.innerHeight < 300){\r\n                item.setAttribute(`src`,item.dataset.src)\r\n            }\r\n        }\r\n    })\r\n}\r\ndocument.addEventListener(\"scroll\",onScroll)\r\n\r\n\r\nonScroll();\r\n\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;