"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/baerekraftig-mat/[slug]",{

/***/ "./components/1_Small/BlogSocialSharing.js":
/*!*************************************************!*\
  !*** ./components/1_Small/BlogSocialSharing.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BlogSocialSharing\": function() { return /* binding */ BlogSocialSharing; }\n/* harmony export */ });\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-share */ \"./node_modules/react-share/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/ragnsanvalla/github/client_projects/client_renate-rue-matblogg/components/1_Small/BlogSocialSharing.js\",\n    _this = undefined;\n\n// const openFacebook = () => {\n//   window.open(\n//     'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 'facebook-share-dialog', 'width=626,height=436'\n // }\n\n\nvar BlogSocialSharing = function BlogSocialSharing(_ref) {\n  var category = _ref.category,\n      blog = _ref.blog;\n  console.log(blog);\n  var categoryName = category;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col md:flex-row mb-56\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_1__.FacebookShareButton, {\n      url: \"https://renaterue.no/\".concat(category, \"/\").concat(blog.slug),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-16 px-24 flex bg-white rounded-rund items-center mr-24 mb-24 md:mb-0 w-100 md:w-auto justify-center cursor-pointer shadow-shadow hover\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: \"mr-16 font-semibold text-neutral_700 noUnderline \",\n          children: \"Del p\\xE5 Facebook\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_1__.FacebookIcon, {\n          size: 32,\n          round: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n_c = BlogSocialSharing;\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogSocialSharing\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzLzFfU21hbGwvQmxvZ1NvY2lhbFNoYXJpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FJQTs7O0FBRU8sSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUF3QjtBQUFBLE1BQXJCQyxRQUFxQixRQUFyQkEsUUFBcUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDdkRDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsTUFBTUcsWUFBWSxHQUFHSixRQUFyQjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUEsMkJBQ0UsOERBQUMsNERBQUQ7QUFDRSxTQUFHLGlDQUEwQkEsUUFBMUIsY0FBc0NDLElBQUksQ0FBQ0ksSUFBM0MsQ0FETDtBQUFBLDZCQUdFO0FBQUssaUJBQVMsRUFBQywySUFBZjtBQUFBLGdDQUNFO0FBQUcsbUJBQVMsRUFBQyxtREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUdPLEdBSFAsZUFJRSw4REFBQyxxREFBRDtBQUFjLGNBQUksRUFBRSxFQUFwQjtBQUF3QixlQUFLLEVBQUU7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0FqQk07S0FBTU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy8xX1NtYWxsL0Jsb2dTb2NpYWxTaGFyaW5nLmpzPzJmODMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3Qgb3BlbkZhY2Vib29rID0gKCkgPT4ge1xuLy8gICB3aW5kb3cub3Blbihcbi8vICAgICAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JytlbmNvZGVVUklDb21wb25lbnQobG9jYXRpb24uaHJlZiksICdmYWNlYm9vay1zaGFyZS1kaWFsb2cnLCAnd2lkdGg9NjI2LGhlaWdodD00MzYnXG5cbmltcG9ydCB7IEZhY2Vib29rSWNvbiwgRmFjZWJvb2tTaGFyZUJ1dHRvbiB9IGZyb20gXCJyZWFjdC1zaGFyZVwiO1xuXG4vLyB9XG5cbmV4cG9ydCBjb25zdCBCbG9nU29jaWFsU2hhcmluZyA9ICh7IGNhdGVnb3J5LCBibG9nIH0pID0+IHtcbiAgY29uc29sZS5sb2coYmxvZyk7XG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGNhdGVnb3J5O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtYi01NlwiPlxuICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b25cbiAgICAgICAgdXJsPXtgaHR0cHM6Ly9yZW5hdGVydWUubm8vJHtjYXRlZ29yeX0vJHtibG9nLnNsdWd9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xNiBweC0yNCBmbGV4IGJnLXdoaXRlIHJvdW5kZWQtcnVuZCBpdGVtcy1jZW50ZXIgbXItMjQgbWItMjQgbWQ6bWItMCB3LTEwMCBtZDp3LWF1dG8ganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgc2hhZG93LXNoYWRvdyBob3ZlclwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTE2IGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsXzcwMCBub1VuZGVybGluZSBcIj5cbiAgICAgICAgICAgIERlbCBww6UgRmFjZWJvb2tcbiAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgIDxGYWNlYm9va0ljb24gc2l6ZT17MzJ9IHJvdW5kPXt0cnVlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiRmFjZWJvb2tJY29uIiwiRmFjZWJvb2tTaGFyZUJ1dHRvbiIsIkJsb2dTb2NpYWxTaGFyaW5nIiwiY2F0ZWdvcnkiLCJibG9nIiwiY29uc29sZSIsImxvZyIsImNhdGVnb3J5TmFtZSIsInNsdWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/1_Small/BlogSocialSharing.js\n");

/***/ })

});