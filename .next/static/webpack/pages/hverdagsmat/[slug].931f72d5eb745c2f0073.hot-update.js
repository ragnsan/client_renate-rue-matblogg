"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/hverdagsmat/[slug]",{

/***/ "./components/1_Small/BlogSocialSharing.js":
/*!*************************************************!*\
  !*** ./components/1_Small/BlogSocialSharing.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BlogSocialSharing\": function() { return /* binding */ BlogSocialSharing; }\n/* harmony export */ });\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-share */ \"./node_modules/react-share/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/ragnsanvalla/github/client_renate-rue-matblogg/components/1_Small/BlogSocialSharing.js\",\n    _this = undefined;\n\n// const openFacebook = () => {\n//   window.open(\n//     'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 'facebook-share-dialog', 'width=626,height=436'\n // }\n\n\nvar BlogSocialSharing = function BlogSocialSharing(_ref, _ref2) {\n  var category = _ref.category;\n  var blog = _ref2.blog;\n  console.log(blog);\n  var categoryName = category;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col md:flex-row mb-56\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"py-16 px-24 flex bg-red rounded-rund items-center mr-24 mb-24 md:mb-0 w-100 md:w-auto justify-center cursor-pointer\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: \"mr-8 font-semibold text-white noUnderline \",\n        children: \"Del p\\xE5 Instagram\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_1__.FacebookShareButton, {\n        url: \"https://renaterue.no/\".concat(category, \"/\").concat(blog),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_1__.FacebookIcon, {\n          size: 32,\n          round: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this), instagram]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n_c = BlogSocialSharing;\n\nvar instagram = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  width: \"24\",\n  height: \"24\",\n  viewBox: \"0 0 24 24\",\n  fill: \"none\",\n  stroke: \"white\",\n  strokeWidth: \"2\",\n  strokeLineCap: \"round\",\n  strokeLinejoin: \"round\",\n  className: \"feather feather-instagram\",\n  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n    x: \"2\",\n    y: \"2\",\n    width: \"20\",\n    height: \"20\",\n    rx: \"5\",\n    ry: \"5\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n    d: \"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n    x1: \"17.5\",\n    y1: \"6.5\",\n    x2: \"17.51\",\n    y2: \"6.5\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 28,\n  columnNumber: 3\n}, undefined);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogSocialSharing\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzLzFfU21hbGwvQmxvZ1NvY2lhbFNoYXJpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FJQTs7O0FBRU8sSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixjQUE0QjtBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFYQyxJQUFXLFNBQVhBLElBQVc7QUFDM0RDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsTUFBTUcsWUFBWSxHQUFHSixRQUFyQjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMscUhBQWY7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUMsNENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUdPLEdBSFAsZUFJRSw4REFBQyw0REFBRDtBQUFxQixXQUFHLGlDQUEwQkEsUUFBMUIsY0FBc0NDLElBQXRDLENBQXhCO0FBQUEsK0JBQ0UsOERBQUMscURBQUQ7QUFBYyxjQUFJLEVBQUUsRUFBcEI7QUFBd0IsZUFBSyxFQUFFO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsRUFPR0ksU0FQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQWhCTTtLQUFNTjs7QUFrQmIsSUFBTU0sU0FBUyxnQkFDYjtBQUNFLE9BQUssRUFBQyw0QkFEUjtBQUVFLE9BQUssRUFBQyxJQUZSO0FBR0UsUUFBTSxFQUFDLElBSFQ7QUFJRSxTQUFPLEVBQUMsV0FKVjtBQUtFLE1BQUksRUFBQyxNQUxQO0FBTUUsUUFBTSxFQUFDLE9BTlQ7QUFPRSxhQUFXLEVBQUMsR0FQZDtBQVFFLGVBQWEsRUFBQyxPQVJoQjtBQVNFLGdCQUFjLEVBQUMsT0FUakI7QUFVRSxXQUFTLEVBQUMsMkJBVlo7QUFBQSwwQkFZRTtBQUFNLEtBQUMsRUFBQyxHQUFSO0FBQVksS0FBQyxFQUFDLEdBQWQ7QUFBa0IsU0FBSyxFQUFDLElBQXhCO0FBQTZCLFVBQU0sRUFBQyxJQUFwQztBQUF5QyxNQUFFLEVBQUMsR0FBNUM7QUFBZ0QsTUFBRSxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRixlQWFFO0FBQU0sS0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGLGVBY0U7QUFBTSxNQUFFLEVBQUMsTUFBVDtBQUFnQixNQUFFLEVBQUMsS0FBbkI7QUFBeUIsTUFBRSxFQUFDLE9BQTVCO0FBQW9DLE1BQUUsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy8xX1NtYWxsL0Jsb2dTb2NpYWxTaGFyaW5nLmpzPzJmODMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3Qgb3BlbkZhY2Vib29rID0gKCkgPT4ge1xuLy8gICB3aW5kb3cub3Blbihcbi8vICAgICAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JytlbmNvZGVVUklDb21wb25lbnQobG9jYXRpb24uaHJlZiksICdmYWNlYm9vay1zaGFyZS1kaWFsb2cnLCAnd2lkdGg9NjI2LGhlaWdodD00MzYnXG5cbmltcG9ydCB7IEZhY2Vib29rSWNvbiwgRmFjZWJvb2tTaGFyZUJ1dHRvbiB9IGZyb20gXCJyZWFjdC1zaGFyZVwiO1xuXG4vLyB9XG5cbmV4cG9ydCBjb25zdCBCbG9nU29jaWFsU2hhcmluZyA9ICh7IGNhdGVnb3J5IH0sIHsgYmxvZyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGJsb2cpO1xuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBjYXRlZ29yeTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWItNTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTYgcHgtMjQgZmxleCBiZy1yZWQgcm91bmRlZC1ydW5kIGl0ZW1zLWNlbnRlciBtci0yNCBtYi0yNCBtZDptYi0wIHctMTAwIG1kOnctYXV0byBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJtci04IGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBub1VuZGVybGluZSBcIj5cbiAgICAgICAgICBEZWwgcMOlIEluc3RhZ3JhbVxuICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvbiB1cmw9e2BodHRwczovL3JlbmF0ZXJ1ZS5uby8ke2NhdGVnb3J5fS8ke2Jsb2d9YH0+XG4gICAgICAgICAgPEZhY2Vib29rSWNvbiBzaXplPXszMn0gcm91bmQ9e3RydWV9IC8+XG4gICAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cbiAgICAgICAge2luc3RhZ3JhbX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgaW5zdGFncmFtID0gKFxuICA8c3ZnXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgd2lkdGg9XCIyNFwiXG4gICAgaGVpZ2h0PVwiMjRcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICBzdHJva2VMaW5lQ2FwPVwicm91bmRcIlxuICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgIGNsYXNzTmFtZT1cImZlYXRoZXIgZmVhdGhlci1pbnN0YWdyYW1cIlxuICA+XG4gICAgPHJlY3QgeD1cIjJcIiB5PVwiMlwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHJ4PVwiNVwiIHJ5PVwiNVwiPjwvcmVjdD5cbiAgICA8cGF0aCBkPVwiTTE2IDExLjM3QTQgNCAwIDEgMSAxMi42MyA4IDQgNCAwIDAgMSAxNiAxMS4zN3pcIj48L3BhdGg+XG4gICAgPGxpbmUgeDE9XCIxNy41XCIgeTE9XCI2LjVcIiB4Mj1cIjE3LjUxXCIgeTI9XCI2LjVcIj48L2xpbmU+XG4gIDwvc3ZnPlxuKTtcbiJdLCJuYW1lcyI6WyJGYWNlYm9va0ljb24iLCJGYWNlYm9va1NoYXJlQnV0dG9uIiwiQmxvZ1NvY2lhbFNoYXJpbmciLCJjYXRlZ29yeSIsImJsb2ciLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcnlOYW1lIiwiaW5zdGFncmFtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/1_Small/BlogSocialSharing.js\n");

/***/ })

});