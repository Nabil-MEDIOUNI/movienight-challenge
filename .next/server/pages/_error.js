"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./src/pages/_error.tsx":
/*!******************************!*\
  !*** ./src/pages/_error.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Error = ({\n  statusCode\n}) => {\n  return /*#__PURE__*/React.createElement(\"p\", null, statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client');\n};\n\nError.getInitialProps = ({\n  res,\n  err\n}) => {\n  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;\n  return {\n    statusCode\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2Vycm9yLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTUEsS0FBb0IsR0FBRyxDQUFDO0VBQUVDO0FBQUYsQ0FBRCxLQUFvQjtFQUMvQyxvQkFDRSwrQkFDR0EsVUFBVSxHQUNOLFlBQVdBLFVBQVcscUJBRGhCLEdBRVAsNkJBSE4sQ0FERjtBQU9ELENBUkQ7O0FBVUFELEtBQUssQ0FBQ0UsZUFBTixHQUF3QixDQUFDO0VBQUVDLEdBQUY7RUFBT0M7QUFBUCxDQUFELEtBQWtCO0VBQ3hDLE1BQU1ILFVBQVUsR0FBR0UsR0FBRyxHQUFHQSxHQUFHLENBQUNGLFVBQVAsR0FBb0JHLEdBQUcsR0FBR0EsR0FBRyxDQUFDSCxVQUFQLEdBQW9CLEdBQWpFO0VBQ0EsT0FBTztJQUFFQTtFQUFGLENBQVA7QUFDRCxDQUhEOztBQUtBLGlFQUFlRCxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aWVuaWdodC1jaGFsbGVuZ2UvLi9zcmMvcGFnZXMvX2Vycm9yLnRzeD8wMDQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuXHJcbmNvbnN0IEVycm9yOiBOZXh0UGFnZTxhbnk+ID0gKHsgc3RhdHVzQ29kZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxwPlxyXG4gICAgICB7c3RhdHVzQ29kZVxyXG4gICAgICAgID8gYEFuIGVycm9yICR7c3RhdHVzQ29kZX0gb2NjdXJyZWQgb24gc2VydmVyYFxyXG4gICAgICAgIDogJ0FuIGVycm9yIG9jY3VycmVkIG9uIGNsaWVudCd9XHJcbiAgICA8L3A+XHJcbiAgKTtcclxufTtcclxuXHJcbkVycm9yLmdldEluaXRpYWxQcm9wcyA9ICh7IHJlcywgZXJyIH0pID0+IHtcclxuICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcclxuICByZXR1cm4geyBzdGF0dXNDb2RlIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvcjtcclxuIl0sIm5hbWVzIjpbIkVycm9yIiwic3RhdHVzQ29kZSIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_error.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_error.tsx"));
module.exports = __webpack_exports__;

})();