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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\theight: 100vh;\\n\\tpadding: 0px;\\n\\tmargin: 0px;\\n}\\n\\n#content {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\tbackground-color: yellow;\\n\\twidth: 75vw;\\n\\tmin-height: 100vh;\\n}\\n\\n.header {\\n\\tposition: fixed;\\n\\ttop: 0;\\n\\tbackground-color: rgb(96, 195, 96);\\n\\twidth: 140%;\\n\\theight: 40px;\\n}\\n\\n.nav-bar {\\n\\tbackground-color: rgb(109, 109, 146);\\n\\tposition: fixed;\\n\\ttop: 40px;\\n}\\n\\n.nav-bar > button {\\n\\tpadding: 10px 20px;\\n\\tmargin: 0px 10px;\\n\\twidth: 120px;\\n}\\n\\n.main {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\tbackground-color: rgb(206, 117, 117);\\n\\twidth: 90%;\\n\\tmin-height: 100vh;\\n}\\n\\n.main > h1 {\\n\\tmargin-top: 200px;\\n}\\n\\n.footer {\\n\\tposition: fixed;\\n\\tbottom: 0px;\\n\\twidth: 140%;\\n\\theight: 40px;\\n\\tbackground-color: rgb(190, 112, 190);\\n}\\n\\n#opening-hours {\\n\\tfont-style: italic;\\n\\ttransform: scaleX(1.2);\\n\\ttext-align: center;\\n}\\n\\n#welcome {\\n\\ttext-align: center;\\n\\n\\tmax-width: 35vw;\\n}\\n\\n#dish-list {\\n\\ttext-align: center;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1fr 1fr;\\n\\tbackground-color: rgb(91, 91, 223);\\n\\twidth: 50vw;\\n}\\n\\n#menue {\\n\\tpadding-top: 450px;\\n}\\n\\n#meal {\\n\\tmargin: 20px;\\n\\tmargin-bottom: 40px;\\n\\tpadding: 10px;\\n\\tbackground-color: rgb(241, 185, 0);\\n}\\n\\n#meal > img {\\n\\twidth: 200px;\\n}\\n\\n#contact {\\n\\tmargin-top: 500px;\\n\\tpadding-top: 50px;\\n}\\n\\n#employee-list {\\n\\ttext-align: center;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1fr;\\n\\tbackground-color: white;\\n}\\n\\n#employee {\\n\\tpadding: 20px;\\n\\tmargin: 10px;\\n\\tmargin-bottom: 40px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-webpack/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-webpack/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _img_Nico_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/Nico.jpeg */ \"./src/img/Nico.jpeg\");\n/* harmony import */ var _img_Squirilla_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/Squirilla.jpeg */ \"./src/img/Squirilla.jpeg\");\n/* harmony import */ var _img_child_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/child.jpeg */ \"./src/img/child.jpeg\");\n/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee */ \"./src/employee.js\");\n\n\n\n\n\nconst contact = () => {\n\tconst content = document.getElementById(\"main\");\n\tcontent.innerHTML = \"\";\n\n\tconst header = document.createElement(\"h1\");\n\theader.textContent = \"Contact Us!\";\n\theader.id = \"contact\";\n\n\tconst employeeList = document.createElement(\"div\");\n\temployeeList.id = \"employee-list\";\n\n\temployees.forEach((emp) => {\n\t\tconst employ = document.createElement(\"div\");\n\t\temploy.id = \"employee\";\n\n\t\tconst empName = document.createElement(\"div\");\n\t\tempName.id = \"employee-name\";\n\t\tempName.textContent = emp.name;\n\n\t\tconst empAge = document.createElement(\"div\");\n\t\tempAge.id = \"employee-age\";\n\t\tempAge.textContent = emp.age;\n\n\t\tconst empAbout = document.createElement(\"div\");\n\t\tempAbout.id = \"employee-about\";\n\t\tempAbout.textContent = emp.about;\n\n\t\tconst empImg = document.createElement(\"img\");\n\t\tempImg.src = emp.img;\n\n\t\temploy.appendChild(empImg);\n\t\temploy.appendChild(empName);\n\t\temploy.appendChild(empAge);\n\t\temploy.appendChild(empAbout);\n\n\t\temployeeList.appendChild(employ);\n\t});\n\n\tcontent.appendChild(header);\n\tcontent.appendChild(employeeList);\n};\n\nconst employees = [];\n\nconst emp1 = new _employee__WEBPACK_IMPORTED_MODULE_3__.Employee(\"Nico\", \"13\", \"Is the leader and founder of the Nico Nuts Company\", _img_Nico_jpeg__WEBPACK_IMPORTED_MODULE_0__);\nconst emp2 = new _employee__WEBPACK_IMPORTED_MODULE_3__.Employee(\"Squirila\", \"11\", \"Wife and the better half. Helps where she can\", _img_Squirilla_jpeg__WEBPACK_IMPORTED_MODULE_1__);\nconst emp3 = new _employee__WEBPACK_IMPORTED_MODULE_3__.Employee(\"Maxisquirlian\", \"3\", \"More chaos than help\", _img_child_jpeg__WEBPACK_IMPORTED_MODULE_2__);\n\nemployees.push(emp1);\nemployees.push(emp2);\nemployees.push(emp3);\n\n\n//# sourceURL=webpack://odin-webpack/./src/contact.js?");

/***/ }),

/***/ "./src/dish.js":
/*!*********************!*\
  !*** ./src/dish.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dish\": () => (/* binding */ Dish)\n/* harmony export */ });\nclass Dish {\n\tconstructor(name, description, img, price) {\n\t\tthis.name = name;\n\t\tthis.description = description;\n\t\tthis.price = price;\n\t\tthis.img = img;\n\t}\n}\n\n\n//# sourceURL=webpack://odin-webpack/./src/dish.js?");

/***/ }),

/***/ "./src/employee.js":
/*!*************************!*\
  !*** ./src/employee.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Employee\": () => (/* binding */ Employee)\n/* harmony export */ });\nclass Employee {\n\tconstructor(name, age, about, img) {\n\t\tthis.name = name;\n\t\tthis.age = age;\n\t\tthis.about = about;\n\t\tthis.img = img;\n\t}\n}\n\n\n//# sourceURL=webpack://odin-webpack/./src/employee.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _openingHours__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openingHours */ \"./src/openingHours.js\");\n\n\nconst home = () => {\n\tconst content = document.getElementById(\"main\");\n\tcontent.innerHTML = \"\";\n\n\tconst header = document.createElement(\"h1\");\n\theader.textContent = \"Nico Nagger Nuts\";\n\theader.id = \"restaurantName\";\n\n\tconst welcomeText = document.createElement(\"p\");\n\twelcomeText.id = \"welcome\";\n\twelcomeText.textContent =\n\t\t\"Curabitur penatibus facilisi sed phasellus duis rhoncus finibus nibh taciti euismod, sollicitudin accumsan id odio tristique maecenas risus convallis class. Odio taciti habitant faucibus mattis fusce eros integer, malesuada etiam litora sodales fringilla et. Lectus ligula cursus lobortis dictum scelerisque per lacus,mauris magna et molestie elit.\";\n\n\tconst location = document.createElement(\"p\");\n\n\tcontent.appendChild(header);\n\tcontent.appendChild(welcomeText);\n\tcontent.appendChild((0,_openingHours__WEBPACK_IMPORTED_MODULE_0__.openingHours)());\n};\n\n\n//# sourceURL=webpack://odin-webpack/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./src/template.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\nconsole.log(\"Hi i`m working just fine\");\n(0,_template__WEBPACK_IMPORTED_MODULE_0__.template)();\n(0,_home__WEBPACK_IMPORTED_MODULE_2__.home)();\n\n\n//# sourceURL=webpack://odin-webpack/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _dish__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dish */ \"./src/dish.js\");\n/* harmony import */ var _img_almonds_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/almonds.jpeg */ \"./src/img/almonds.jpeg\");\n/* harmony import */ var _img_cashew_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/cashew.jpeg */ \"./src/img/cashew.jpeg\");\n/* harmony import */ var _img_hazelnut_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/hazelnut.jpeg */ \"./src/img/hazelnut.jpeg\");\n/* harmony import */ var _img_walnut_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/walnut.jpeg */ \"./src/img/walnut.jpeg\");\n\n\n\n\n\n\nconst menu = () => {\n\tconst content = document.getElementById(\"main\");\n\tcontent.innerHTML = \"\";\n\n\tconst header = document.createElement(\"h1\");\n\theader.textContent = \"menu\";\n\theader.id = \"menue\";\n\n\tconst dishList = document.createElement(\"div\");\n\tdishList.id = \"dish-list\";\n\n\tdishes.forEach((dish) => {\n\t\tconst meal = document.createElement(\"div\");\n\t\tmeal.id = \"meal\";\n\n\t\tconst mealImg = document.createElement(\"img\");\n\t\tmealImg.src = dish.img;\n\n\t\tconst mealName = document.createElement(\"div\");\n\t\tmealName.id = \"meal-name\";\n\t\tmealName.textContent = dish.name;\n\n\t\tconst mealDescription = document.createElement(\"div\");\n\t\tmealDescription.id = \"meal-description\";\n\t\tmealDescription.textContent = dish.description;\n\n\t\tconst mealPrice = document.createElement(\"div\");\n\t\tmealPrice.id = \"meal-price\";\n\t\tmealPrice.textContent = dish.price;\n\n\t\tmeal.appendChild(mealImg);\n\t\tmeal.appendChild(mealName);\n\t\tmeal.appendChild(mealDescription);\n\t\tmeal.appendChild(mealPrice);\n\n\t\tdishList.appendChild(meal);\n\t});\n\n\tcontent.appendChild(header);\n\tcontent.appendChild(dishList);\n};\n\nconst dishes = [];\n\nconst meal1 = new _dish__WEBPACK_IMPORTED_MODULE_0__.Dish(\"Walnut\", \"very waaaallliee\", _img_walnut_jpeg__WEBPACK_IMPORTED_MODULE_4__, \"3 $\");\nconst meal2 = new _dish__WEBPACK_IMPORTED_MODULE_0__.Dish(\"Hazelnut\", \"very waaaallliee\", _img_hazelnut_jpeg__WEBPACK_IMPORTED_MODULE_3__, \"4 $\");\nconst meal3 = new _dish__WEBPACK_IMPORTED_MODULE_0__.Dish(\"Cashew\", \"very waaaallliee\", _img_cashew_jpeg__WEBPACK_IMPORTED_MODULE_2__, \"7 $\");\nconst meal4 = new _dish__WEBPACK_IMPORTED_MODULE_0__.Dish(\"Almonds\", \"very waaaallliee\", _img_almonds_jpeg__WEBPACK_IMPORTED_MODULE_1__, \"6 $\");\nconst meal5 = new _dish__WEBPACK_IMPORTED_MODULE_0__.Dish(\"Walnut\", \"very waaaallliee\", _img_walnut_jpeg__WEBPACK_IMPORTED_MODULE_4__, \"3 $\");\nconst meal6 = new _dish__WEBPACK_IMPORTED_MODULE_0__.Dish(\"Hazelnut\", \"very waaaallliee\", _img_hazelnut_jpeg__WEBPACK_IMPORTED_MODULE_3__, \"4 $\");\nconst meal7 = new _dish__WEBPACK_IMPORTED_MODULE_0__.Dish(\"Cashew\", \"very waaaallliee\", _img_cashew_jpeg__WEBPACK_IMPORTED_MODULE_2__, \"7 $\");\nconst meal8 = new _dish__WEBPACK_IMPORTED_MODULE_0__.Dish(\"Almonds\", \"very waaaallliee\", _img_almonds_jpeg__WEBPACK_IMPORTED_MODULE_1__, \"6 $\");\n\ndishes.push(meal1);\ndishes.push(meal2);\ndishes.push(meal3);\ndishes.push(meal4);\ndishes.push(meal5);\ndishes.push(meal6);\ndishes.push(meal7);\ndishes.push(meal8);\n\n\n//# sourceURL=webpack://odin-webpack/./src/menu.js?");

/***/ }),

/***/ "./src/openingHours.js":
/*!*****************************!*\
  !*** ./src/openingHours.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openingHours\": () => (/* binding */ openingHours)\n/* harmony export */ });\nconst openingHours = () => {\n\tconst weekdays = \"8 - 22\";\n\tconst weekend = \"10 - 18\";\n\n\tconst lineBreak = document.createElement(\"br\");\n\tlet table = document.createElement(\"div\");\n\ttable.id = \"opening-hours\";\n\ttable.textContent = `Monday: ${weekdays}`;\n\ttable.appendChild(lineBreak);\n\ttable.innerHTML += `Tuesday: ${weekdays}`;\n\ttable.appendChild(lineBreak);\n\ttable.innerHTML += `Wednesday: ${weekdays}`;\n\ttable.appendChild(lineBreak);\n\ttable.innerHTML += `Thursday: ${weekdays}`;\n\ttable.appendChild(lineBreak);\n\ttable.innerHTML += `Friday: ${weekdays}`;\n\ttable.appendChild(lineBreak);\n\ttable.innerHTML += `Saturday: ${weekdays}`;\n\ttable.appendChild(lineBreak);\n\ttable.innerHTML += `Sunday: ${weekdays}`;\n\ttable.appendChild(lineBreak);\n\n\treturn table;\n};\n\n\n//# sourceURL=webpack://odin-webpack/./src/openingHours.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"template\": () => (/* binding */ template)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst template = () => {\n\tconst content = document.getElementById(\"content\");\n\n\tconst header = document.createElement(\"div\");\n\theader.classList = \"header\";\n\n\tconst navBar = document.createElement(\"div\");\n\tnavBar.classList = \"nav-bar\";\n\n\tconst main = document.createElement(\"div\");\n\tmain.classList = \"main\";\n\tmain.id = \"main\";\n\n\tconst footer = document.createElement(\"div\");\n\tfooter.classList = \"footer\";\n\n\tconst btnHome = document.createElement(\"button\");\n\tbtnHome.id = \"btn-home\";\n\tbtnHome.innerHTML = \"HOME\";\n\tbtnHome.addEventListener(\"click\", _home__WEBPACK_IMPORTED_MODULE_0__.home);\n\n\tconst btnMenu = document.createElement(\"button\");\n\tbtnMenu.id = \"btn-menu\";\n\tbtnMenu.innerHTML = \"MENU\";\n\tbtnMenu.addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_1__.menu);\n\n\tconst btnContact = document.createElement(\"button\");\n\tbtnContact.id = \"btn-contact\";\n\tbtnContact.innerHTML = \"CONTACT\";\n\tbtnContact.addEventListener(\"click\", _contact__WEBPACK_IMPORTED_MODULE_2__.contact);\n\n\tnavBar.appendChild(btnHome);\n\tnavBar.appendChild(btnMenu);\n\tnavBar.appendChild(btnContact);\n\n\tcontent.appendChild(header);\n\tcontent.appendChild(navBar);\n\tcontent.appendChild(main);\n\tcontent.appendChild(footer);\n};\n\n\n//# sourceURL=webpack://odin-webpack/./src/template.js?");

/***/ }),

/***/ "./src/img/Nico.jpeg":
/*!***************************!*\
  !*** ./src/img/Nico.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8a6ce5e0723ec8f7bf72.jpeg\";\n\n//# sourceURL=webpack://odin-webpack/./src/img/Nico.jpeg?");

/***/ }),

/***/ "./src/img/Squirilla.jpeg":
/*!********************************!*\
  !*** ./src/img/Squirilla.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a1026ae2f8c741f5173.jpeg\";\n\n//# sourceURL=webpack://odin-webpack/./src/img/Squirilla.jpeg?");

/***/ }),

/***/ "./src/img/almonds.jpeg":
/*!******************************!*\
  !*** ./src/img/almonds.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"792475608e4b29348a27.jpeg\";\n\n//# sourceURL=webpack://odin-webpack/./src/img/almonds.jpeg?");

/***/ }),

/***/ "./src/img/cashew.jpeg":
/*!*****************************!*\
  !*** ./src/img/cashew.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bbaffd79e2c386f2390f.jpeg\";\n\n//# sourceURL=webpack://odin-webpack/./src/img/cashew.jpeg?");

/***/ }),

/***/ "./src/img/child.jpeg":
/*!****************************!*\
  !*** ./src/img/child.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8c16580ed16663acc636.jpeg\";\n\n//# sourceURL=webpack://odin-webpack/./src/img/child.jpeg?");

/***/ }),

/***/ "./src/img/hazelnut.jpeg":
/*!*******************************!*\
  !*** ./src/img/hazelnut.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2000feef0f54082177a8.jpeg\";\n\n//# sourceURL=webpack://odin-webpack/./src/img/hazelnut.jpeg?");

/***/ }),

/***/ "./src/img/walnut.jpeg":
/*!*****************************!*\
  !*** ./src/img/walnut.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a084a203acd8d8acea25.jpeg\";\n\n//# sourceURL=webpack://odin-webpack/./src/img/walnut.jpeg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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