"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/baerekraftig-mat",{

/***/ "./components/2_Big/ArticleCard.js":
/*!*****************************************!*\
  !*** ./components/2_Big/ArticleCard.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArticleCard\": function() { return /* binding */ ArticleCard; }\n/* harmony export */ });\n/* harmony import */ var _1_Small_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../1_Small/Base */ \"./components/1_Small/Base.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/ragnsanvalla/github/client_renate-rue-matblogg/components/2_Big/ArticleCard.js\",\n    _this = undefined;\n\n\n\n\n\nvar loader = function loader(_ref) {\n  var src = _ref.src;\n  return \"https://images.ctfassets.net/gz5doxqqp280/\".concat(src);\n};\n\nvar ArticleCard = function ArticleCard(_ref2) {\n  var articleTitle = _ref2.articleTitle,\n      articleCategory = _ref2.articleCategory,\n      imgSrc = _ref2.imgSrc,\n      imgAlt = _ref2.imgAlt;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"article\", {\n    className: \"hover cursor-pointer mb-32 lg:mb-56 group\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"shadow-shadow rounded-rund relative h-240\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        src: imgSrc,\n        alt: imgAlt,\n        loader: loader,\n        layout: \"fill\",\n        className: \"object-cover rounded-rund\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"flex justify-end mr-16 pt-16\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_1_Small_Base__WEBPACK_IMPORTED_MODULE_0__.Box, {\n          c: \"bg-white relative text-center font-semibold w-120\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            className: \"text-body_small text-neutral_700 no-underline\",\n            children: articleCategory\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n      className: \"mt-24 text-neutral_900 group-hover:underline group-focus:underline\",\n      children: articleTitle\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n_c = ArticleCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"ArticleCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzLzJfQmlnL0FydGljbGVDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFhO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQzFCLDZEQUFvREEsR0FBcEQ7QUFDRCxDQUZEOztBQUlPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLFFBS3JCO0FBQUEsTUFKSkMsWUFJSSxTQUpKQSxZQUlJO0FBQUEsTUFISkMsZUFHSSxTQUhKQSxlQUdJO0FBQUEsTUFGSkMsTUFFSSxTQUZKQSxNQUVJO0FBQUEsTUFESkMsTUFDSSxTQURKQSxNQUNJO0FBQ0osc0JBQ0U7QUFBUyxhQUFTLEVBQUMsMkNBQW5CO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsMkNBQWY7QUFBQSw4QkFDRSw4REFBQyxtREFBRDtBQUNFLFdBQUcsRUFBRUQsTUFEUDtBQUVFLFdBQUcsRUFBRUMsTUFGUDtBQUdFLGNBQU0sRUFBRU4sTUFIVjtBQUlFLGNBQU0sRUFBQyxNQUpUO0FBS0UsaUJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVFFO0FBQUssaUJBQVMsRUFBQyw4QkFBZjtBQUFBLCtCQUNFLDhEQUFDLDhDQUFEO0FBQUssV0FBQyxFQUFDLG1EQUFQO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFDLCtDQUFiO0FBQUEsc0JBQ0dJO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFpQkU7QUFBSSxlQUFTLEVBQUMsb0VBQWQ7QUFBQSxnQkFDR0Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBN0JNO0tBQU1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvMl9CaWcvQXJ0aWNsZUNhcmQuanM/YTVjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIExheW91dCB9IGZyb20gXCIuLi8xX1NtYWxsL0Jhc2VcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCBsb2FkZXIgPSAoeyBzcmMgfSkgPT4ge1xuICByZXR1cm4gYGh0dHBzOi8vaW1hZ2VzLmN0ZmFzc2V0cy5uZXQvZ3o1ZG94cXFwMjgwLyR7c3JjfWA7XG59O1xuXG5leHBvcnQgY29uc3QgQXJ0aWNsZUNhcmQgPSAoe1xuICBhcnRpY2xlVGl0bGUsXG4gIGFydGljbGVDYXRlZ29yeSxcbiAgaW1nU3JjLFxuICBpbWdBbHQsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiaG92ZXIgY3Vyc29yLXBvaW50ZXIgbWItMzIgbGc6bWItNTYgZ3JvdXBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXNoYWRvdyByb3VuZGVkLXJ1bmQgcmVsYXRpdmUgaC0yNDBcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtpbWdTcmN9XG4gICAgICAgICAgYWx0PXtpbWdBbHR9XG4gICAgICAgICAgbG9hZGVyPXtsb2FkZXJ9XG4gICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHJvdW5kZWQtcnVuZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBtci0xNiBwdC0xNlwiPlxuICAgICAgICAgIDxCb3ggYz1cImJnLXdoaXRlIHJlbGF0aXZlIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgdy0xMjBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYm9keV9zbWFsbCB0ZXh0LW5ldXRyYWxfNzAwIG5vLXVuZGVybGluZVwiPlxuICAgICAgICAgICAgICB7YXJ0aWNsZUNhdGVnb3J5fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm10LTI0IHRleHQtbmV1dHJhbF85MDAgZ3JvdXAtaG92ZXI6dW5kZXJsaW5lIGdyb3VwLWZvY3VzOnVuZGVybGluZVwiPlxuICAgICAgICB7YXJ0aWNsZVRpdGxlfVxuICAgICAgPC9oMz5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkJveCIsIkxheW91dCIsIkltYWdlIiwibG9hZGVyIiwic3JjIiwiQXJ0aWNsZUNhcmQiLCJhcnRpY2xlVGl0bGUiLCJhcnRpY2xlQ2F0ZWdvcnkiLCJpbWdTcmMiLCJpbWdBbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/2_Big/ArticleCard.js\n");

/***/ })

});