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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PopularArticles\": function() { return /* binding */ PopularArticles; }\n/* harmony export */ });\n/* harmony import */ var _1_Small_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../1_Small/Base */ \"./components/1_Small/Base.js\");\n/* harmony import */ var _2_Big_ArticleCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../2_Big/ArticleCard */ \"./components/2_Big/ArticleCard.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/ragnsanvalla/github/client_projects/client_renate-rue-matblogg/components/3_Pages/0_Home/1_PopularArticles.js\",\n    _this = undefined;\n\n\n\n\n\nvar PopularArticles = function PopularArticles(_ref) {\n  var brekraftigMat = _ref.brekraftigMat,\n      hverdagsmat = _ref.hverdagsmat,\n      matForBarn = _ref.matForBarn,\n      sectionHeading = _ref.sectionHeading;\n\n  var MapBrekraftigMat = function MapBrekraftigMat() {\n    return brekraftigMat.map(function (brekraftigMat) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_1_Small_Base__WEBPACK_IMPORTED_MODULE_0__.FourFourFour, {\n        c: \"\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_2_Big_ArticleCard__WEBPACK_IMPORTED_MODULE_1__.ArticleCard, {\n          id: brekraftigMat.fields.slug,\n          aricleHref: \"/baerekraftig-mat/\".concat(brekraftigMat.fields.slug),\n          articleTitle: brekraftigMat.fields.overskrift,\n          articleCategory: \"Bærekraftig mat\",\n          imgSrc: brekraftigMat.fields.hovedbilde.fields.file.url.slice(36),\n          imgAlt: brekraftigMat.fields.hovedbilde.fields.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this);\n    });\n  };\n\n  var MapHverdagsmat = function MapHverdagsmat() {\n    return hverdagsmat.map(function (hverdagsmat) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_1_Small_Base__WEBPACK_IMPORTED_MODULE_0__.FourFourFour, {\n        c: \"\",\n        id: hverdagsmat.sys.id,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_2_Big_ArticleCard__WEBPACK_IMPORTED_MODULE_1__.ArticleCard, {\n          aricleHref: \"/hverdagsmat/\".concat(hverdagsmat.fields.slug),\n          articleTitle: hverdagsmat.fields.overskrift,\n          articleCategory: \"Hverdagsmat\",\n          imgSrc: hverdagsmat.fields.hovedbilde.fields.file.url.slice(36),\n          imgAlt: hverdagsmat.fields.hovedbilde.fields.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this);\n    });\n  };\n\n  var MapMatForBarn = function MapMatForBarn() {\n    return matForBarn.map(function (matForBarn) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_1_Small_Base__WEBPACK_IMPORTED_MODULE_0__.FourFourFour, {\n        c: \"\",\n        id: matForBarn.sys.id,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_2_Big_ArticleCard__WEBPACK_IMPORTED_MODULE_1__.ArticleCard, {\n          aricleHref: \"/mat-for-barn/\".concat(matForBarn.fields.slug),\n          articleTitle: matForBarn.fields.overskrift,\n          articleCategory: \"Mat for barn\",\n          imgSrc: matForBarn.fields.hovedbilde.fields.file.url.slice(36),\n          imgAlt: matForBarn.fields.hovedbilde.fields.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n    id: \"popul\\xE6re artikler\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n      className: \"pb-56 pt-56 lg:pt-80 text-h2 lg:text-h1\",\n      children: sectionHeading\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_1_Small_Base__WEBPACK_IMPORTED_MODULE_0__.Grid, {\n      c: \"pb-56\",\n      children: [brekraftigMat != null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MapBrekraftigMat, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 34\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {}, void 0, false), hverdagsmat != null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MapHverdagsmat, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 32\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {}, void 0, false), matForBarn != null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MapMatForBarn, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 31\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {}, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n};\n_c = PopularArticles;\n\nvar _c;\n\n$RefreshReg$(_c, \"PopularArticles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzLzNfUGFnZXMvMF9Ib21lLzFfUG9wdWxhckFydGljbGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVPLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FLekI7QUFBQSxNQUpKQyxhQUlJLFFBSkpBLGFBSUk7QUFBQSxNQUhKQyxXQUdJLFFBSEpBLFdBR0k7QUFBQSxNQUZKQyxVQUVJLFFBRkpBLFVBRUk7QUFBQSxNQURKQyxjQUNJLFFBREpBLGNBQ0k7O0FBQ0osTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFdBQU9KLGFBQWEsQ0FBQ0ssR0FBZCxDQUFrQixVQUFDTCxhQUFELEVBQW1CO0FBQzFDLDBCQUNFLDhEQUFDLHVEQUFEO0FBQWMsU0FBQyxFQUFDLEVBQWhCO0FBQUEsK0JBQ0UsOERBQUMsMkRBQUQ7QUFDRSxZQUFFLEVBQUVBLGFBQWEsQ0FBQ00sTUFBZCxDQUFxQkMsSUFEM0I7QUFFRSxvQkFBVSw4QkFBdUJQLGFBQWEsQ0FBQ00sTUFBZCxDQUFxQkMsSUFBNUMsQ0FGWjtBQUdFLHNCQUFZLEVBQUVQLGFBQWEsQ0FBQ00sTUFBZCxDQUFxQkUsVUFIckM7QUFJRSx5QkFBZSxFQUFFLGlCQUpuQjtBQUtFLGdCQUFNLEVBQUVSLGFBQWEsQ0FBQ00sTUFBZCxDQUFxQkcsVUFBckIsQ0FBZ0NILE1BQWhDLENBQXVDSSxJQUF2QyxDQUE0Q0MsR0FBNUMsQ0FBZ0RDLEtBQWhELENBQXNELEVBQXRELENBTFY7QUFNRSxnQkFBTSxFQUFFWixhQUFhLENBQUNNLE1BQWQsQ0FBcUJHLFVBQXJCLENBQWdDSCxNQUFoQyxDQUF1Q087QUFOakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVlELEtBYk0sQ0FBUDtBQWNELEdBZkQ7O0FBZ0JBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixXQUFPYixXQUFXLENBQUNJLEdBQVosQ0FBZ0IsVUFBQ0osV0FBRCxFQUFpQjtBQUN0QywwQkFDRSw4REFBQyx1REFBRDtBQUFjLFNBQUMsRUFBQyxFQUFoQjtBQUFtQixVQUFFLEVBQUVBLFdBQVcsQ0FBQ2MsR0FBWixDQUFnQkMsRUFBdkM7QUFBQSwrQkFDRSw4REFBQywyREFBRDtBQUNFLG9CQUFVLHlCQUFrQmYsV0FBVyxDQUFDSyxNQUFaLENBQW1CQyxJQUFyQyxDQURaO0FBRUUsc0JBQVksRUFBRU4sV0FBVyxDQUFDSyxNQUFaLENBQW1CRSxVQUZuQztBQUdFLHlCQUFlLEVBQUUsYUFIbkI7QUFJRSxnQkFBTSxFQUFFUCxXQUFXLENBQUNLLE1BQVosQ0FBbUJHLFVBQW5CLENBQThCSCxNQUE5QixDQUFxQ0ksSUFBckMsQ0FBMENDLEdBQTFDLENBQThDQyxLQUE5QyxDQUFvRCxFQUFwRCxDQUpWO0FBS0UsZ0JBQU0sRUFBRVgsV0FBVyxDQUFDSyxNQUFaLENBQW1CRyxVQUFuQixDQUE4QkgsTUFBOUIsQ0FBcUNPO0FBTC9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxLQVpNLENBQVA7QUFhRCxHQWREOztBQWVBLE1BQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixXQUFPZixVQUFVLENBQUNHLEdBQVgsQ0FBZSxVQUFDSCxVQUFELEVBQWdCO0FBQ3BDLDBCQUNFLDhEQUFDLHVEQUFEO0FBQWMsU0FBQyxFQUFDLEVBQWhCO0FBQW1CLFVBQUUsRUFBRUEsVUFBVSxDQUFDYSxHQUFYLENBQWVDLEVBQXRDO0FBQUEsK0JBQ0UsOERBQUMsMkRBQUQ7QUFDRSxvQkFBVSwwQkFBbUJkLFVBQVUsQ0FBQ0ksTUFBWCxDQUFrQkMsSUFBckMsQ0FEWjtBQUVFLHNCQUFZLEVBQUVMLFVBQVUsQ0FBQ0ksTUFBWCxDQUFrQkUsVUFGbEM7QUFHRSx5QkFBZSxFQUFFLGNBSG5CO0FBSUUsZ0JBQU0sRUFBRU4sVUFBVSxDQUFDSSxNQUFYLENBQWtCRyxVQUFsQixDQUE2QkgsTUFBN0IsQ0FBb0NJLElBQXBDLENBQXlDQyxHQUF6QyxDQUE2Q0MsS0FBN0MsQ0FBbUQsRUFBbkQsQ0FKVjtBQUtFLGdCQUFNLEVBQUVWLFVBQVUsQ0FBQ0ksTUFBWCxDQUFrQkcsVUFBbEIsQ0FBNkJILE1BQTdCLENBQW9DTztBQUw5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBV0QsS0FaTSxDQUFQO0FBYUQsR0FkRDs7QUFlQSxzQkFDRTtBQUFTLE1BQUUsRUFBQyxzQkFBWjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLHlDQUFkO0FBQUEsZ0JBQ0dWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUsOERBQUMsK0NBQUQ7QUFBTSxPQUFDLEVBQUMsT0FBUjtBQUFBLGlCQUNHSCxhQUFhLElBQUksSUFBakIsZ0JBQXdCLDhEQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBeEIsZ0JBQStDLDZJQURsRCxFQUVHQyxXQUFXLElBQUksSUFBZixnQkFBc0IsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXRCLGdCQUEyQyw2SUFGOUMsRUFHR0MsVUFBVSxJQUFJLElBQWQsZ0JBQXFCLDhEQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFyQixnQkFBeUMsNklBSDVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FoRU07S0FBTUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy8zX1BhZ2VzLzBfSG9tZS8xX1BvcHVsYXJBcnRpY2xlcy5qcz81MDAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvdXJGb3VyRm91ciwgR3JpZCB9IGZyb20gXCIuLi8uLi8xX1NtYWxsL0Jhc2VcIjtcbmltcG9ydCB7IEFydGljbGVDYXJkIH0gZnJvbSBcIi4uLy4uLzJfQmlnL0FydGljbGVDYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBQb3B1bGFyQXJ0aWNsZXMgPSAoe1xuICBicmVrcmFmdGlnTWF0LFxuICBodmVyZGFnc21hdCxcbiAgbWF0Rm9yQmFybixcbiAgc2VjdGlvbkhlYWRpbmcsXG59KSA9PiB7XG4gIGNvbnN0IE1hcEJyZWtyYWZ0aWdNYXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJyZWtyYWZ0aWdNYXQubWFwKChicmVrcmFmdGlnTWF0KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Rm91ckZvdXJGb3VyIGM9XCJcIj5cbiAgICAgICAgICA8QXJ0aWNsZUNhcmRcbiAgICAgICAgICAgIGlkPXticmVrcmFmdGlnTWF0LmZpZWxkcy5zbHVnfVxuICAgICAgICAgICAgYXJpY2xlSHJlZj17YC9iYWVyZWtyYWZ0aWctbWF0LyR7YnJla3JhZnRpZ01hdC5maWVsZHMuc2x1Z31gfVxuICAgICAgICAgICAgYXJ0aWNsZVRpdGxlPXticmVrcmFmdGlnTWF0LmZpZWxkcy5vdmVyc2tyaWZ0fVxuICAgICAgICAgICAgYXJ0aWNsZUNhdGVnb3J5PXtcIkLDpnJla3JhZnRpZyBtYXRcIn1cbiAgICAgICAgICAgIGltZ1NyYz17YnJla3JhZnRpZ01hdC5maWVsZHMuaG92ZWRiaWxkZS5maWVsZHMuZmlsZS51cmwuc2xpY2UoMzYpfVxuICAgICAgICAgICAgaW1nQWx0PXticmVrcmFmdGlnTWF0LmZpZWxkcy5ob3ZlZGJpbGRlLmZpZWxkcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZvdXJGb3VyRm91cj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IE1hcEh2ZXJkYWdzbWF0ID0gKCkgPT4ge1xuICAgIHJldHVybiBodmVyZGFnc21hdC5tYXAoKGh2ZXJkYWdzbWF0KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Rm91ckZvdXJGb3VyIGM9XCJcIiBpZD17aHZlcmRhZ3NtYXQuc3lzLmlkfT5cbiAgICAgICAgICA8QXJ0aWNsZUNhcmRcbiAgICAgICAgICAgIGFyaWNsZUhyZWY9e2AvaHZlcmRhZ3NtYXQvJHtodmVyZGFnc21hdC5maWVsZHMuc2x1Z31gfVxuICAgICAgICAgICAgYXJ0aWNsZVRpdGxlPXtodmVyZGFnc21hdC5maWVsZHMub3ZlcnNrcmlmdH1cbiAgICAgICAgICAgIGFydGljbGVDYXRlZ29yeT17XCJIdmVyZGFnc21hdFwifVxuICAgICAgICAgICAgaW1nU3JjPXtodmVyZGFnc21hdC5maWVsZHMuaG92ZWRiaWxkZS5maWVsZHMuZmlsZS51cmwuc2xpY2UoMzYpfVxuICAgICAgICAgICAgaW1nQWx0PXtodmVyZGFnc21hdC5maWVsZHMuaG92ZWRiaWxkZS5maWVsZHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3VyRm91ckZvdXI+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBNYXBNYXRGb3JCYXJuID0gKCkgPT4ge1xuICAgIHJldHVybiBtYXRGb3JCYXJuLm1hcCgobWF0Rm9yQmFybikgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvdXJGb3VyRm91ciBjPVwiXCIgaWQ9e21hdEZvckJhcm4uc3lzLmlkfT5cbiAgICAgICAgICA8QXJ0aWNsZUNhcmRcbiAgICAgICAgICAgIGFyaWNsZUhyZWY9e2AvbWF0LWZvci1iYXJuLyR7bWF0Rm9yQmFybi5maWVsZHMuc2x1Z31gfVxuICAgICAgICAgICAgYXJ0aWNsZVRpdGxlPXttYXRGb3JCYXJuLmZpZWxkcy5vdmVyc2tyaWZ0fVxuICAgICAgICAgICAgYXJ0aWNsZUNhdGVnb3J5PXtcIk1hdCBmb3IgYmFyblwifVxuICAgICAgICAgICAgaW1nU3JjPXttYXRGb3JCYXJuLmZpZWxkcy5ob3ZlZGJpbGRlLmZpZWxkcy5maWxlLnVybC5zbGljZSgzNil9XG4gICAgICAgICAgICBpbWdBbHQ9e21hdEZvckJhcm4uZmllbGRzLmhvdmVkYmlsZGUuZmllbGRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm91ckZvdXJGb3VyPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInBvcHVsw6ZyZSBhcnRpa2xlclwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInBiLTU2IHB0LTU2IGxnOnB0LTgwIHRleHQtaDIgbGc6dGV4dC1oMVwiPlxuICAgICAgICB7c2VjdGlvbkhlYWRpbmd9XG4gICAgICA8L2gyPlxuICAgICAgPEdyaWQgYz1cInBiLTU2XCI+XG4gICAgICAgIHticmVrcmFmdGlnTWF0ICE9IG51bGwgPyA8TWFwQnJla3JhZnRpZ01hdCAvPiA6IDw+PC8+fVxuICAgICAgICB7aHZlcmRhZ3NtYXQgIT0gbnVsbCA/IDxNYXBIdmVyZGFnc21hdCAvPiA6IDw+PC8+fVxuICAgICAgICB7bWF0Rm9yQmFybiAhPSBudWxsID8gPE1hcE1hdEZvckJhcm4gLz4gOiA8PjwvPn1cbiAgICAgIDwvR3JpZD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkZvdXJGb3VyRm91ciIsIkdyaWQiLCJBcnRpY2xlQ2FyZCIsIlBvcHVsYXJBcnRpY2xlcyIsImJyZWtyYWZ0aWdNYXQiLCJodmVyZGFnc21hdCIsIm1hdEZvckJhcm4iLCJzZWN0aW9uSGVhZGluZyIsIk1hcEJyZWtyYWZ0aWdNYXQiLCJtYXAiLCJmaWVsZHMiLCJzbHVnIiwib3ZlcnNrcmlmdCIsImhvdmVkYmlsZGUiLCJmaWxlIiwidXJsIiwic2xpY2UiLCJkZXNjcmlwdGlvbiIsIk1hcEh2ZXJkYWdzbWF0Iiwic3lzIiwiaWQiLCJNYXBNYXRGb3JCYXJuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/3_Pages/0_Home/1_PopularArticles.js\n");

/***/ })

});