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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/wishlist.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\nconsole.log(\"Hello World\");\r\n// TODO\r\n\r\n// Select the form\r\nlet form = document.querySelector(\"#submitForm\");\r\n// Select the input for car make\r\nlet makeInput = document.querySelector(\"#makeInput\");\r\n// Select the input for car model\r\nlet modelInput = document.querySelector(\"#modelInput\");\r\n// Select the input for car year\r\nlet yearInput = document.querySelector(\"#yearInput\");\r\n// Select the paragraph element for car make\r\nlet carMake = document.querySelector(\"#car-make\");\r\n// Select the paragraph element for car model\r\nlet carModel = document.querySelector(\"#car-model\");\r\n// Select the paragraph element for car year\r\nlet carYear = document.querySelector(\"#car-year\");\r\n// Select the remove button\r\nlet removeButton = document.querySelector(\".btn btn-warning removeBtn\");\r\n// Select the wishlist unordered list element\r\nlet wishlistUl = document.querySelector(\"#wishListContainer > ul\");\r\n// Call the WishList constructor to create an instance from the WishList class\r\nlet wishlist = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/wishlist.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\n\r\nform.addEventListener(\"submit\", addCar);\r\nremoveButton.addEventListener(\"click\", removeCar);\r\n\r\nfunction showCarDetails(car) {\r\n  // update car display txt\r\n  carMake.textContent = car.make;\r\n  carModel.textContent = car.model;\r\n  carYear.textContent = car.year;\r\n  // enable the remove button\r\n  removeButton.disabled = false;\r\n  // set current car's id to the data-carId attribute of removeButton\r\n  removeButton.setAttribute(\"data-cae.id\", car.id);\r\n}\r\n\r\nfunction updateDOMList() {\r\n  // clear the ul contents\r\n  listUl.innerHTML = \"\";\r\n\r\n  //iterate through the list of cars\r\n  wishlist.list.forEach((car) => {\r\n    let li = document.createElement(\"li\");\r\n    li.textContent = car.model;\r\n    li.addEventListener(\"click\", () => showCarDetails(car));\r\n    listUl.appendChild(li);\r\n  });\r\n}\r\n\r\nfunction addCar(event) {\r\n  event.preventDefault();\r\n  wishlist.add(make, model, year);\r\n  updateDOMList();\r\n\r\n  // reset display values\r\n  carMake.value = \"\";\r\n  carModel.value = \"\";\r\n  carYear.value = \"\";\r\n}\r\n\r\nfunction removeCar() {\r\n  let carId = removeButton.getAttribute(\"data-carId\");\r\n  wishlist.remove(carId);\r\n  updateDOMList();\r\n\r\n  carMake.textContent = \"\";\r\n  carModel.textContent = \"\";\r\n  carYear.textContent = \"\";\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;