"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/3_Pages/0_Home/1_PopularArticles.js":
/*!********************************************************!*\
  !*** ./components/3_Pages/0_Home/1_PopularArticles.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PopularArticles\": function() { return /* binding */ PopularArticles; }\n/* harmony export */ });\n/* harmony import */ var _1_Small_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../1_Small/Base */ \"./components/1_Small/Base.js\");\n/* harmony import */ var _2_Big_ArticleCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../2_Big/ArticleCard */ \"./components/2_Big/ArticleCard.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/ragnsanvalla/github/client_renate-rue-matblogg/components/3_Pages/0_Home/1_PopularArticles.js\",\n    _this = undefined;\n\n\n\n\nvar PopularArticles = function PopularArticles(_ref) {\n  var blog = _ref.blog,\n      sectionHeading = _ref.sectionHeading;\n\n  var MapData = function MapData() {\n    return blog.map(function (blog) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_1_Small_Base__WEBPACK_IMPORTED_MODULE_0__.FourFourFour, {\n        c: \"\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_2_Big_ArticleCard__WEBPACK_IMPORTED_MODULE_1__.ArticleCard, {\n          aricleHref: \"/\".concat(blog.fields.slug),\n          articleTitle: blog.fields.overskrift,\n          articleCategory: \"Bærekraftig mat\",\n          imgSrc: blog.fields.hovedbilde.fields.file.url.slice(36),\n          imgAlt: blog.fields.hovedbilde.fields.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n    id: \"popul\\xE6re artikler\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n      className: \"pb-56 pt-56 lg:pt-80 text-h2 lg:text-h1\",\n      children: sectionHeading\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_1_Small_Base__WEBPACK_IMPORTED_MODULE_0__.Grid, {\n      c: \"pb-56\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MapData, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n_c = PopularArticles;\n\nvar _c;\n\n$RefreshReg$(_c, \"PopularArticles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzLzNfUGFnZXMvMF9Ib21lLzFfUG9wdWxhckFydGljbGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRU8sSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUE4QjtBQUFBLE1BQTNCQyxJQUEyQixRQUEzQkEsSUFBMkI7QUFBQSxNQUFyQkMsY0FBcUIsUUFBckJBLGNBQXFCOztBQUMzRCxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCLFdBQU9GLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNILElBQUQsRUFBVTtBQUN4QiwwQkFDRSw4REFBQyx1REFBRDtBQUFjLFNBQUMsRUFBQyxFQUFoQjtBQUFBLCtCQUNFLDhEQUFDLDJEQUFEO0FBQ0Usb0JBQVUsYUFBTUEsSUFBSSxDQUFDSSxNQUFMLENBQVlDLElBQWxCLENBRFo7QUFFRSxzQkFBWSxFQUFFTCxJQUFJLENBQUNJLE1BQUwsQ0FBWUUsVUFGNUI7QUFHRSx5QkFBZSxFQUFFLGlCQUhuQjtBQUlFLGdCQUFNLEVBQUVOLElBQUksQ0FBQ0ksTUFBTCxDQUFZRyxVQUFaLENBQXVCSCxNQUF2QixDQUE4QkksSUFBOUIsQ0FBbUNDLEdBQW5DLENBQXVDQyxLQUF2QyxDQUE2QyxFQUE3QyxDQUpWO0FBS0UsZ0JBQU0sRUFBRVYsSUFBSSxDQUFDSSxNQUFMLENBQVlHLFVBQVosQ0FBdUJILE1BQXZCLENBQThCTztBQUx4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBV0QsS0FaTSxDQUFQO0FBYUQsR0FkRDs7QUFlQSxzQkFDRTtBQUFTLE1BQUUsRUFBQyxzQkFBWjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLHlDQUFkO0FBQUEsZ0JBQ0dWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUsOERBQUMsK0NBQUQ7QUFBTSxPQUFDLEVBQUMsT0FBUjtBQUFBLDZCQUNFLDhEQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBMUJNO0tBQU1GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvM19QYWdlcy8wX0hvbWUvMV9Qb3B1bGFyQXJ0aWNsZXMuanM/NTAwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3VyRm91ckZvdXIsIEdyaWQgfSBmcm9tIFwiLi4vLi4vMV9TbWFsbC9CYXNlXCI7XG5pbXBvcnQgeyBBcnRpY2xlQ2FyZCB9IGZyb20gXCIuLi8uLi8yX0JpZy9BcnRpY2xlQ2FyZFwiO1xuXG5leHBvcnQgY29uc3QgUG9wdWxhckFydGljbGVzID0gKHsgYmxvZywgc2VjdGlvbkhlYWRpbmcgfSkgPT4ge1xuICBjb25zdCBNYXBEYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiBibG9nLm1hcCgoYmxvZykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvdXJGb3VyRm91ciBjPVwiXCI+XG4gICAgICAgICAgPEFydGljbGVDYXJkXG4gICAgICAgICAgICBhcmljbGVIcmVmPXtgLyR7YmxvZy5maWVsZHMuc2x1Z31gfVxuICAgICAgICAgICAgYXJ0aWNsZVRpdGxlPXtibG9nLmZpZWxkcy5vdmVyc2tyaWZ0fVxuICAgICAgICAgICAgYXJ0aWNsZUNhdGVnb3J5PXtcIkLDpnJla3JhZnRpZyBtYXRcIn1cbiAgICAgICAgICAgIGltZ1NyYz17YmxvZy5maWVsZHMuaG92ZWRiaWxkZS5maWVsZHMuZmlsZS51cmwuc2xpY2UoMzYpfVxuICAgICAgICAgICAgaW1nQWx0PXtibG9nLmZpZWxkcy5ob3ZlZGJpbGRlLmZpZWxkcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZvdXJGb3VyRm91cj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJwb3B1bMOmcmUgYXJ0aWtsZXJcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi01NiBwdC01NiBsZzpwdC04MCB0ZXh0LWgyIGxnOnRleHQtaDFcIj5cbiAgICAgICAge3NlY3Rpb25IZWFkaW5nfVxuICAgICAgPC9oMj5cbiAgICAgIDxHcmlkIGM9XCJwYi01NlwiPlxuICAgICAgICA8TWFwRGF0YSAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiRm91ckZvdXJGb3VyIiwiR3JpZCIsIkFydGljbGVDYXJkIiwiUG9wdWxhckFydGljbGVzIiwiYmxvZyIsInNlY3Rpb25IZWFkaW5nIiwiTWFwRGF0YSIsIm1hcCIsImZpZWxkcyIsInNsdWciLCJvdmVyc2tyaWZ0IiwiaG92ZWRiaWxkZSIsImZpbGUiLCJ1cmwiLCJzbGljZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/3_Pages/0_Home/1_PopularArticles.js\n");

/***/ })

});