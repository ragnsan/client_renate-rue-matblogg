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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PopularArticles\": function() { return /* binding */ PopularArticles; }\n/* harmony export */ });\n/* harmony import */ var _1_Small_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../1_Small/Base */ \"./components/1_Small/Base.js\");\n/* harmony import */ var _2_Big_ArticleCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../2_Big/ArticleCard */ \"./components/2_Big/ArticleCard.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/ragnsanvalla/github/client_projects/client_renate-rue-matblogg/components/3_Pages/0_Home/1_PopularArticles.js\",\n    _this = undefined;\n\n\n\n\n\nvar PopularArticles = function PopularArticles(_ref) {\n  var brekraftigMat = _ref.brekraftigMat,\n      hverdagsmat = _ref.hverdagsmat,\n      matForBarn = _ref.matForBarn,\n      sectionHeading = _ref.sectionHeading;\n\n  var MapBrekraftigMat = function MapBrekraftigMat() {\n    return brekraftigMat.map(function (brekraftigMat) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_1_Small_Base__WEBPACK_IMPORTED_MODULE_0__.FourFourFour, {\n        c: \"\",\n        id: brekraftigMat.sys.id,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_2_Big_ArticleCard__WEBPACK_IMPORTED_MODULE_1__.ArticleCard, {\n          aricleHref: \"baerekraftig-mat/\".concat(brekraftigMat.fields.slug),\n          articleTitle: brekraftigMat.fields.overskrift,\n          articleCategory: \"Bærekraftig mat\",\n          imgSrc: brekraftigMat.fields.hovedbilde.fields.file.url.slice(36),\n          imgAlt: brekraftigMat.fields.hovedbilde.fields.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this);\n    });\n  };\n\n  var MapHverdagsmat = function MapHverdagsmat() {\n    return hverdagsmat.map(function (hverdagsmat) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_1_Small_Base__WEBPACK_IMPORTED_MODULE_0__.FourFourFour, {\n        c: \"\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_2_Big_ArticleCard__WEBPACK_IMPORTED_MODULE_1__.ArticleCard, {\n          aricleHref: \"hverdagsmat/\".concat(hverdagsmat.fields.slug),\n          articleTitle: hverdagsmat.fields.overskrift,\n          articleCategory: \"Hverdagsmat\",\n          imgSrc: hverdagsmat.fields.hovedbilde.fields.file.url.slice(36),\n          imgAlt: hverdagsmat.fields.hovedbilde.fields.description\n        }, hverdagsmat.sys.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this);\n    });\n  };\n\n  var MapMatForBarn = function MapMatForBarn() {\n    return matForBarn.map(function (matForBarn) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_1_Small_Base__WEBPACK_IMPORTED_MODULE_0__.FourFourFour, {\n        c: \"\",\n        id: matForBarn.sys.id,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_2_Big_ArticleCard__WEBPACK_IMPORTED_MODULE_1__.ArticleCard, {\n          aricleHref: \"mat-for-barn/\".concat(matForBarn.fields.slug),\n          articleTitle: matForBarn.fields.overskrift,\n          articleCategory: \"Mat for barn\",\n          imgSrc: matForBarn.fields.hovedbilde.fields.file.url.slice(36),\n          imgAlt: matForBarn.fields.hovedbilde.fields.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n    id: \"popul\\xE6re artikler\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n      className: \"pb-56 pt-56 lg:pt-80 text-h2 lg:text-h1\",\n      children: sectionHeading\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_1_Small_Base__WEBPACK_IMPORTED_MODULE_0__.Grid, {\n      c: \"pb-56\",\n      children: [brekraftigMat != null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MapBrekraftigMat, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 34\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {}, void 0, false), hverdagsmat != null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MapHverdagsmat, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 32\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {}, void 0, false), matForBarn != null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MapMatForBarn, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 31\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {}, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n};\n_c = PopularArticles;\n\nvar _c;\n\n$RefreshReg$(_c, \"PopularArticles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzLzNfUGFnZXMvMF9Ib21lLzFfUG9wdWxhckFydGljbGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVPLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FLekI7QUFBQSxNQUpKQyxhQUlJLFFBSkpBLGFBSUk7QUFBQSxNQUhKQyxXQUdJLFFBSEpBLFdBR0k7QUFBQSxNQUZKQyxVQUVJLFFBRkpBLFVBRUk7QUFBQSxNQURKQyxjQUNJLFFBREpBLGNBQ0k7O0FBQ0osTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFdBQU9KLGFBQWEsQ0FBQ0ssR0FBZCxDQUFrQixVQUFDTCxhQUFELEVBQW1CO0FBQzFDLDBCQUNFLDhEQUFDLHVEQUFEO0FBQWMsU0FBQyxFQUFDLEVBQWhCO0FBQW1CLFVBQUUsRUFBRUEsYUFBYSxDQUFDTSxHQUFkLENBQWtCQyxFQUF6QztBQUFBLCtCQUNFLDhEQUFDLDJEQUFEO0FBQ0Usb0JBQVUsNkJBQXNCUCxhQUFhLENBQUNRLE1BQWQsQ0FBcUJDLElBQTNDLENBRFo7QUFFRSxzQkFBWSxFQUFFVCxhQUFhLENBQUNRLE1BQWQsQ0FBcUJFLFVBRnJDO0FBR0UseUJBQWUsRUFBRSxpQkFIbkI7QUFJRSxnQkFBTSxFQUFFVixhQUFhLENBQUNRLE1BQWQsQ0FBcUJHLFVBQXJCLENBQWdDSCxNQUFoQyxDQUF1Q0ksSUFBdkMsQ0FBNENDLEdBQTVDLENBQWdEQyxLQUFoRCxDQUFzRCxFQUF0RCxDQUpWO0FBS0UsZ0JBQU0sRUFBRWQsYUFBYSxDQUFDUSxNQUFkLENBQXFCRyxVQUFyQixDQUFnQ0gsTUFBaEMsQ0FBdUNPO0FBTGpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxLQVpNLENBQVA7QUFhRCxHQWREOztBQWVBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixXQUFPZixXQUFXLENBQUNJLEdBQVosQ0FBZ0IsVUFBQ0osV0FBRCxFQUFpQjtBQUN0QywwQkFDRSw4REFBQyx1REFBRDtBQUFjLFNBQUMsRUFBQyxFQUFoQjtBQUFBLCtCQUNFLDhEQUFDLDJEQUFEO0FBRUUsb0JBQVUsd0JBQWlCQSxXQUFXLENBQUNPLE1BQVosQ0FBbUJDLElBQXBDLENBRlo7QUFHRSxzQkFBWSxFQUFFUixXQUFXLENBQUNPLE1BQVosQ0FBbUJFLFVBSG5DO0FBSUUseUJBQWUsRUFBRSxhQUpuQjtBQUtFLGdCQUFNLEVBQUVULFdBQVcsQ0FBQ08sTUFBWixDQUFtQkcsVUFBbkIsQ0FBOEJILE1BQTlCLENBQXFDSSxJQUFyQyxDQUEwQ0MsR0FBMUMsQ0FBOENDLEtBQTlDLENBQW9ELEVBQXBELENBTFY7QUFNRSxnQkFBTSxFQUFFYixXQUFXLENBQUNPLE1BQVosQ0FBbUJHLFVBQW5CLENBQThCSCxNQUE5QixDQUFxQ087QUFOL0MsV0FDT2QsV0FBVyxDQUFDSyxHQUFaLENBQWdCQyxFQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBWUQsS0FiTSxDQUFQO0FBY0QsR0FmRDs7QUFnQkEsTUFBTVUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFdBQU9mLFVBQVUsQ0FBQ0csR0FBWCxDQUFlLFVBQUNILFVBQUQsRUFBZ0I7QUFDcEMsMEJBQ0UsOERBQUMsdURBQUQ7QUFBYyxTQUFDLEVBQUMsRUFBaEI7QUFBbUIsVUFBRSxFQUFFQSxVQUFVLENBQUNJLEdBQVgsQ0FBZUMsRUFBdEM7QUFBQSwrQkFDRSw4REFBQywyREFBRDtBQUNFLG9CQUFVLHlCQUFrQkwsVUFBVSxDQUFDTSxNQUFYLENBQWtCQyxJQUFwQyxDQURaO0FBRUUsc0JBQVksRUFBRVAsVUFBVSxDQUFDTSxNQUFYLENBQWtCRSxVQUZsQztBQUdFLHlCQUFlLEVBQUUsY0FIbkI7QUFJRSxnQkFBTSxFQUFFUixVQUFVLENBQUNNLE1BQVgsQ0FBa0JHLFVBQWxCLENBQTZCSCxNQUE3QixDQUFvQ0ksSUFBcEMsQ0FBeUNDLEdBQXpDLENBQTZDQyxLQUE3QyxDQUFtRCxFQUFuRCxDQUpWO0FBS0UsZ0JBQU0sRUFBRVosVUFBVSxDQUFDTSxNQUFYLENBQWtCRyxVQUFsQixDQUE2QkgsTUFBN0IsQ0FBb0NPO0FBTDlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxLQVpNLENBQVA7QUFhRCxHQWREOztBQWVBLHNCQUNFO0FBQVMsTUFBRSxFQUFDLHNCQUFaO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMseUNBQWQ7QUFBQSxnQkFDR1o7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSw4REFBQywrQ0FBRDtBQUFNLE9BQUMsRUFBQyxPQUFSO0FBQUEsaUJBQ0dILGFBQWEsSUFBSSxJQUFqQixnQkFBd0IsOERBQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF4QixnQkFBK0MsNklBRGxELEVBRUdDLFdBQVcsSUFBSSxJQUFmLGdCQUFzQiw4REFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBdEIsZ0JBQTJDLDZJQUY5QyxFQUdHQyxVQUFVLElBQUksSUFBZCxnQkFBcUIsOERBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXJCLGdCQUF5Qyw2SUFINUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQWhFTTtLQUFNSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzLzNfUGFnZXMvMF9Ib21lLzFfUG9wdWxhckFydGljbGVzLmpzPzUwMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm91ckZvdXJGb3VyLCBHcmlkIH0gZnJvbSBcIi4uLy4uLzFfU21hbGwvQmFzZVwiO1xuaW1wb3J0IHsgQXJ0aWNsZUNhcmQgfSBmcm9tIFwiLi4vLi4vMl9CaWcvQXJ0aWNsZUNhcmRcIjtcblxuZXhwb3J0IGNvbnN0IFBvcHVsYXJBcnRpY2xlcyA9ICh7XG4gIGJyZWtyYWZ0aWdNYXQsXG4gIGh2ZXJkYWdzbWF0LFxuICBtYXRGb3JCYXJuLFxuICBzZWN0aW9uSGVhZGluZyxcbn0pID0+IHtcbiAgY29uc3QgTWFwQnJla3JhZnRpZ01hdCA9ICgpID0+IHtcbiAgICByZXR1cm4gYnJla3JhZnRpZ01hdC5tYXAoKGJyZWtyYWZ0aWdNYXQpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGb3VyRm91ckZvdXIgYz1cIlwiIGlkPXticmVrcmFmdGlnTWF0LnN5cy5pZH0+XG4gICAgICAgICAgPEFydGljbGVDYXJkXG4gICAgICAgICAgICBhcmljbGVIcmVmPXtgYmFlcmVrcmFmdGlnLW1hdC8ke2JyZWtyYWZ0aWdNYXQuZmllbGRzLnNsdWd9YH1cbiAgICAgICAgICAgIGFydGljbGVUaXRsZT17YnJla3JhZnRpZ01hdC5maWVsZHMub3ZlcnNrcmlmdH1cbiAgICAgICAgICAgIGFydGljbGVDYXRlZ29yeT17XCJCw6ZyZWtyYWZ0aWcgbWF0XCJ9XG4gICAgICAgICAgICBpbWdTcmM9e2JyZWtyYWZ0aWdNYXQuZmllbGRzLmhvdmVkYmlsZGUuZmllbGRzLmZpbGUudXJsLnNsaWNlKDM2KX1cbiAgICAgICAgICAgIGltZ0FsdD17YnJla3JhZnRpZ01hdC5maWVsZHMuaG92ZWRiaWxkZS5maWVsZHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3VyRm91ckZvdXI+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBNYXBIdmVyZGFnc21hdCA9ICgpID0+IHtcbiAgICByZXR1cm4gaHZlcmRhZ3NtYXQubWFwKChodmVyZGFnc21hdCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvdXJGb3VyRm91ciBjPVwiXCI+XG4gICAgICAgICAgPEFydGljbGVDYXJkXG4gICAgICAgICAgICBrZXk9e2h2ZXJkYWdzbWF0LnN5cy5pZH1cbiAgICAgICAgICAgIGFyaWNsZUhyZWY9e2BodmVyZGFnc21hdC8ke2h2ZXJkYWdzbWF0LmZpZWxkcy5zbHVnfWB9XG4gICAgICAgICAgICBhcnRpY2xlVGl0bGU9e2h2ZXJkYWdzbWF0LmZpZWxkcy5vdmVyc2tyaWZ0fVxuICAgICAgICAgICAgYXJ0aWNsZUNhdGVnb3J5PXtcIkh2ZXJkYWdzbWF0XCJ9XG4gICAgICAgICAgICBpbWdTcmM9e2h2ZXJkYWdzbWF0LmZpZWxkcy5ob3ZlZGJpbGRlLmZpZWxkcy5maWxlLnVybC5zbGljZSgzNil9XG4gICAgICAgICAgICBpbWdBbHQ9e2h2ZXJkYWdzbWF0LmZpZWxkcy5ob3ZlZGJpbGRlLmZpZWxkcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZvdXJGb3VyRm91cj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IE1hcE1hdEZvckJhcm4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG1hdEZvckJhcm4ubWFwKChtYXRGb3JCYXJuKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Rm91ckZvdXJGb3VyIGM9XCJcIiBpZD17bWF0Rm9yQmFybi5zeXMuaWR9PlxuICAgICAgICAgIDxBcnRpY2xlQ2FyZFxuICAgICAgICAgICAgYXJpY2xlSHJlZj17YG1hdC1mb3ItYmFybi8ke21hdEZvckJhcm4uZmllbGRzLnNsdWd9YH1cbiAgICAgICAgICAgIGFydGljbGVUaXRsZT17bWF0Rm9yQmFybi5maWVsZHMub3ZlcnNrcmlmdH1cbiAgICAgICAgICAgIGFydGljbGVDYXRlZ29yeT17XCJNYXQgZm9yIGJhcm5cIn1cbiAgICAgICAgICAgIGltZ1NyYz17bWF0Rm9yQmFybi5maWVsZHMuaG92ZWRiaWxkZS5maWVsZHMuZmlsZS51cmwuc2xpY2UoMzYpfVxuICAgICAgICAgICAgaW1nQWx0PXttYXRGb3JCYXJuLmZpZWxkcy5ob3ZlZGJpbGRlLmZpZWxkcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZvdXJGb3VyRm91cj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJwb3B1bMOmcmUgYXJ0aWtsZXJcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi01NiBwdC01NiBsZzpwdC04MCB0ZXh0LWgyIGxnOnRleHQtaDFcIj5cbiAgICAgICAge3NlY3Rpb25IZWFkaW5nfVxuICAgICAgPC9oMj5cbiAgICAgIDxHcmlkIGM9XCJwYi01NlwiPlxuICAgICAgICB7YnJla3JhZnRpZ01hdCAhPSBudWxsID8gPE1hcEJyZWtyYWZ0aWdNYXQgLz4gOiA8PjwvPn1cbiAgICAgICAge2h2ZXJkYWdzbWF0ICE9IG51bGwgPyA8TWFwSHZlcmRhZ3NtYXQgLz4gOiA8PjwvPn1cbiAgICAgICAge21hdEZvckJhcm4gIT0gbnVsbCA/IDxNYXBNYXRGb3JCYXJuIC8+IDogPD48Lz59XG4gICAgICA8L0dyaWQ+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJGb3VyRm91ckZvdXIiLCJHcmlkIiwiQXJ0aWNsZUNhcmQiLCJQb3B1bGFyQXJ0aWNsZXMiLCJicmVrcmFmdGlnTWF0IiwiaHZlcmRhZ3NtYXQiLCJtYXRGb3JCYXJuIiwic2VjdGlvbkhlYWRpbmciLCJNYXBCcmVrcmFmdGlnTWF0IiwibWFwIiwic3lzIiwiaWQiLCJmaWVsZHMiLCJzbHVnIiwib3ZlcnNrcmlmdCIsImhvdmVkYmlsZGUiLCJmaWxlIiwidXJsIiwic2xpY2UiLCJkZXNjcmlwdGlvbiIsIk1hcEh2ZXJkYWdzbWF0IiwiTWFwTWF0Rm9yQmFybiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/3_Pages/0_Home/1_PopularArticles.js\n");

/***/ })

});