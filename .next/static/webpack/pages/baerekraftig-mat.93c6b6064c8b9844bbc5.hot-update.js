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

/***/ "./components/3_Pages/0_Home/1_PopularArticles.js":
/*!********************************************************!*\
  !*** ./components/3_Pages/0_Home/1_PopularArticles.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PopularArticles\": function() { return /* binding */ PopularArticles; }\n/* harmony export */ });\n/* harmony import */ var _1_Small_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../1_Small/Base */ \"./components/1_Small/Base.js\");\n/* harmony import */ var _2_Big_ArticleCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../2_Big/ArticleCard */ \"./components/2_Big/ArticleCard.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/ragnsanvalla/github/client_renate-rue-matblogg/components/3_Pages/0_Home/1_PopularArticles.js\",\n    _this = undefined;\n\n\n\n\nvar data = [{\n  articleTitle: \"Sunne matretter for hele familie (Selv for dere som er kresne)\",\n  articleCategory: \"Bærekraftig\",\n  imgSrc: \"hvit3_bpacx2.jpg\",\n  imgAlt: \"Dette er en alt\"\n}, {\n  articleTitle: \"Hverdagslunsjer som funker for alle\",\n  articleCategory: \"Hverdagsmat\",\n  imgSrc: \"hvit3_bpacx2.jpg\",\n  imgAlt: \"Dette er en alt\"\n}, {\n  articleTitle: \"Sunne matretter for hele familie (Selv for dere som er kresne)\",\n  articleCategory: \"For barn\",\n  imgSrc: \"hvit3_bpacx2.jpg\",\n  imgAlt: \"Dette er en alt\"\n}, {\n  articleTitle: \"Sunne matretter for hele familie (Selv for dere som er kresne)\",\n  articleCategory: \"Bærekraftig\",\n  imgSrc: \"hvit3_bpacx2.jpg\",\n  imgAlt: \"Dette er en alt\"\n}];\nvar PopularArticles = function PopularArticles(_ref) {\n  var blog = _ref.blog,\n      sectionHeading = _ref.sectionHeading;\n  console.log(blog);\n\n  var MapData = function MapData() {\n    return blog.map(function () {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_1_Small_Base__WEBPACK_IMPORTED_MODULE_0__.FourFourFour, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_2_Big_ArticleCard__WEBPACK_IMPORTED_MODULE_1__.ArticleCard, {\n          articleTitle: blog.overskrift,\n          articleCategory: \"Bærekraftig mat\",\n          imgSrc: blog.hovedbilde.fields.file.url.slice(36),\n          imgAlt: blog.hovedbilde.fields.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n    id: \"popul\\xE6re artikler\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n      className: \"mb-56 text-h2 lg:text-h1\",\n      children: sectionHeading\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_1_Small_Base__WEBPACK_IMPORTED_MODULE_0__.Grid, {\n      c: \"mb-56\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MapData, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n};\n_c = PopularArticles;\n\nvar _c;\n\n$RefreshReg$(_c, \"PopularArticles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzLzNfUGFnZXMvMF9Ib21lLzFfUG9wdWxhckFydGljbGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUcsSUFBSSxHQUFHLENBQ1g7QUFDRUMsRUFBQUEsWUFBWSxFQUNWLGdFQUZKO0FBR0VDLEVBQUFBLGVBQWUsRUFBRSxhQUhuQjtBQUlFQyxFQUFBQSxNQUFNLEVBQUUsa0JBSlY7QUFLRUMsRUFBQUEsTUFBTSxFQUFFO0FBTFYsQ0FEVyxFQVFYO0FBQ0VILEVBQUFBLFlBQVksRUFBRSxxQ0FEaEI7QUFFRUMsRUFBQUEsZUFBZSxFQUFFLGFBRm5CO0FBR0VDLEVBQUFBLE1BQU0sRUFBRSxrQkFIVjtBQUlFQyxFQUFBQSxNQUFNLEVBQUU7QUFKVixDQVJXLEVBY1g7QUFDRUgsRUFBQUEsWUFBWSxFQUNWLGdFQUZKO0FBR0VDLEVBQUFBLGVBQWUsRUFBRSxVQUhuQjtBQUlFQyxFQUFBQSxNQUFNLEVBQUUsa0JBSlY7QUFLRUMsRUFBQUEsTUFBTSxFQUFFO0FBTFYsQ0FkVyxFQXFCWDtBQUNFSCxFQUFBQSxZQUFZLEVBQ1YsZ0VBRko7QUFHRUMsRUFBQUEsZUFBZSxFQUFFLGFBSG5CO0FBSUVDLEVBQUFBLE1BQU0sRUFBRSxrQkFKVjtBQUtFQyxFQUFBQSxNQUFNLEVBQUU7QUFMVixDQXJCVyxDQUFiO0FBOEJPLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBOEI7QUFBQSxNQUEzQkMsSUFBMkIsUUFBM0JBLElBQTJCO0FBQUEsTUFBckJDLGNBQXFCLFFBQXJCQSxjQUFxQjtBQUMzREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7O0FBQ0EsTUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixXQUFPSixJQUFJLENBQUNLLEdBQUwsQ0FBUyxZQUFNO0FBQ3BCLDBCQUNFLDhEQUFDLHVEQUFEO0FBQUEsK0JBQ0UsOERBQUMsMkRBQUQ7QUFDRSxzQkFBWSxFQUFFTCxJQUFJLENBQUNNLFVBRHJCO0FBRUUseUJBQWUsRUFBRSxpQkFGbkI7QUFHRSxnQkFBTSxFQUFFTixJQUFJLENBQUNPLFVBQUwsQ0FBZ0JDLE1BQWhCLENBQXVCQyxJQUF2QixDQUE0QkMsR0FBNUIsQ0FBZ0NDLEtBQWhDLENBQXNDLEVBQXRDLENBSFY7QUFJRSxnQkFBTSxFQUFFWCxJQUFJLENBQUNPLFVBQUwsQ0FBZ0JDLE1BQWhCLENBQXVCSTtBQUpqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUQsS0FYTSxDQUFQO0FBWUQsR0FiRDs7QUFjQSxzQkFDRTtBQUFTLE1BQUUsRUFBQyxzQkFBWjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLDBCQUFkO0FBQUEsZ0JBQTBDWDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQywrQ0FBRDtBQUFNLE9BQUMsRUFBQyxPQUFSO0FBQUEsNkJBQ0UsOERBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0F4Qk07S0FBTUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy8zX1BhZ2VzLzBfSG9tZS8xX1BvcHVsYXJBcnRpY2xlcy5qcz81MDAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvdXJGb3VyRm91ciwgR3JpZCB9IGZyb20gXCIuLi8uLi8xX1NtYWxsL0Jhc2VcIjtcbmltcG9ydCB7IEFydGljbGVDYXJkIH0gZnJvbSBcIi4uLy4uLzJfQmlnL0FydGljbGVDYXJkXCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBhcnRpY2xlVGl0bGU6XG4gICAgICBcIlN1bm5lIG1hdHJldHRlciBmb3IgaGVsZSBmYW1pbGllIChTZWx2IGZvciBkZXJlIHNvbSBlciBrcmVzbmUpXCIsXG4gICAgYXJ0aWNsZUNhdGVnb3J5OiBcIkLDpnJla3JhZnRpZ1wiLFxuICAgIGltZ1NyYzogXCJodml0M19icGFjeDIuanBnXCIsXG4gICAgaW1nQWx0OiBcIkRldHRlIGVyIGVuIGFsdFwiLFxuICB9LFxuICB7XG4gICAgYXJ0aWNsZVRpdGxlOiBcIkh2ZXJkYWdzbHVuc2plciBzb20gZnVua2VyIGZvciBhbGxlXCIsXG4gICAgYXJ0aWNsZUNhdGVnb3J5OiBcIkh2ZXJkYWdzbWF0XCIsXG4gICAgaW1nU3JjOiBcImh2aXQzX2JwYWN4Mi5qcGdcIixcbiAgICBpbWdBbHQ6IFwiRGV0dGUgZXIgZW4gYWx0XCIsXG4gIH0sXG4gIHtcbiAgICBhcnRpY2xlVGl0bGU6XG4gICAgICBcIlN1bm5lIG1hdHJldHRlciBmb3IgaGVsZSBmYW1pbGllIChTZWx2IGZvciBkZXJlIHNvbSBlciBrcmVzbmUpXCIsXG4gICAgYXJ0aWNsZUNhdGVnb3J5OiBcIkZvciBiYXJuXCIsXG4gICAgaW1nU3JjOiBcImh2aXQzX2JwYWN4Mi5qcGdcIixcbiAgICBpbWdBbHQ6IFwiRGV0dGUgZXIgZW4gYWx0XCIsXG4gIH0sXG4gIHtcbiAgICBhcnRpY2xlVGl0bGU6XG4gICAgICBcIlN1bm5lIG1hdHJldHRlciBmb3IgaGVsZSBmYW1pbGllIChTZWx2IGZvciBkZXJlIHNvbSBlciBrcmVzbmUpXCIsXG4gICAgYXJ0aWNsZUNhdGVnb3J5OiBcIkLDpnJla3JhZnRpZ1wiLFxuICAgIGltZ1NyYzogXCJodml0M19icGFjeDIuanBnXCIsXG4gICAgaW1nQWx0OiBcIkRldHRlIGVyIGVuIGFsdFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFBvcHVsYXJBcnRpY2xlcyA9ICh7IGJsb2csIHNlY3Rpb25IZWFkaW5nIH0pID0+IHtcbiAgY29uc29sZS5sb2coYmxvZyk7XG4gIGNvbnN0IE1hcERhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJsb2cubWFwKCgpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGb3VyRm91ckZvdXI+XG4gICAgICAgICAgPEFydGljbGVDYXJkXG4gICAgICAgICAgICBhcnRpY2xlVGl0bGU9e2Jsb2cub3ZlcnNrcmlmdH1cbiAgICAgICAgICAgIGFydGljbGVDYXRlZ29yeT17XCJCw6ZyZWtyYWZ0aWcgbWF0XCJ9XG4gICAgICAgICAgICBpbWdTcmM9e2Jsb2cuaG92ZWRiaWxkZS5maWVsZHMuZmlsZS51cmwuc2xpY2UoMzYpfVxuICAgICAgICAgICAgaW1nQWx0PXtibG9nLmhvdmVkYmlsZGUuZmllbGRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm91ckZvdXJGb3VyPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInBvcHVsw6ZyZSBhcnRpa2xlclwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTU2IHRleHQtaDIgbGc6dGV4dC1oMVwiPntzZWN0aW9uSGVhZGluZ308L2gyPlxuICAgICAgPEdyaWQgYz1cIm1iLTU2XCI+XG4gICAgICAgIDxNYXBEYXRhIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJGb3VyRm91ckZvdXIiLCJHcmlkIiwiQXJ0aWNsZUNhcmQiLCJkYXRhIiwiYXJ0aWNsZVRpdGxlIiwiYXJ0aWNsZUNhdGVnb3J5IiwiaW1nU3JjIiwiaW1nQWx0IiwiUG9wdWxhckFydGljbGVzIiwiYmxvZyIsInNlY3Rpb25IZWFkaW5nIiwiY29uc29sZSIsImxvZyIsIk1hcERhdGEiLCJtYXAiLCJvdmVyc2tyaWZ0IiwiaG92ZWRiaWxkZSIsImZpZWxkcyIsImZpbGUiLCJ1cmwiLCJzbGljZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/3_Pages/0_Home/1_PopularArticles.js\n");

/***/ })

});