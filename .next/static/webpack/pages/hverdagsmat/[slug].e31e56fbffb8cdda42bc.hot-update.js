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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BlogSocialSharing\": function() { return /* binding */ BlogSocialSharing; }\n/* harmony export */ });\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-share */ \"./node_modules/react-share/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/ragnsanvalla/github/client_renate-rue-matblogg/components/1_Small/BlogSocialSharing.js\",\n    _this = undefined;\n\n// const openFacebook = () => {\n//   window.open(\n//     'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 'facebook-share-dialog', 'width=626,height=436'\n // }\n\n\nvar BlogSocialSharing = function BlogSocialSharing(category, _ref) {\n  var blog = _ref.blog;\n  console.log(category);\n  var categoryName = category;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col md:flex-row mb-56\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"py-16 px-24 flex bg-red rounded-rund items-center mr-24 mb-24 md:mb-0 w-100 md:w-auto justify-center cursor-pointer\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: \"mr-8 font-semibold text-white noUnderline \",\n        children: \"Del p\\xE5 Instagram\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_1__.FacebookShareButton, {\n        url: \"https://renaterue.no/\".concat(blog.fields.category),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_1__.FacebookIcon, {\n          size: 32,\n          round: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this), instagram]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n_c = BlogSocialSharing;\n\nvar instagram = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  width: \"24\",\n  height: \"24\",\n  viewBox: \"0 0 24 24\",\n  fill: \"none\",\n  stroke: \"white\",\n  strokeWidth: \"2\",\n  strokeLineCap: \"round\",\n  strokeLinejoin: \"round\",\n  className: \"feather feather-instagram\",\n  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n    x: \"2\",\n    y: \"2\",\n    width: \"20\",\n    height: \"20\",\n    rx: \"5\",\n    ry: \"5\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n    d: \"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n    x1: \"17.5\",\n    y1: \"6.5\",\n    x2: \"17.51\",\n    y2: \"6.5\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 30,\n  columnNumber: 3\n}, undefined);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogSocialSharing\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzLzFfU21hbGwvQmxvZ1NvY2lhbFNoYXJpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FJQTs7O0FBRU8sSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxRQUFELFFBQXdCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3ZEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsUUFBWjtBQUNBLE1BQU1JLFlBQVksR0FBR0osUUFBckI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxpQ0FBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLHFIQUFmO0FBQUEsOEJBQ0U7QUFBRyxpQkFBUyxFQUFDLDRDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFHTyxHQUhQLGVBSUUsOERBQUMsNERBQUQ7QUFDRSxXQUFHLGlDQUEwQkMsSUFBSSxDQUFDSSxNQUFMLENBQVlMLFFBQXRDLENBREw7QUFBQSwrQkFHRSw4REFBQyxxREFBRDtBQUFjLGNBQUksRUFBRSxFQUFwQjtBQUF3QixlQUFLLEVBQUU7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixFQVNHTSxTQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBbEJNO0tBQU1QOztBQW9CYixJQUFNTyxTQUFTLGdCQUNiO0FBQ0UsT0FBSyxFQUFDLDRCQURSO0FBRUUsT0FBSyxFQUFDLElBRlI7QUFHRSxRQUFNLEVBQUMsSUFIVDtBQUlFLFNBQU8sRUFBQyxXQUpWO0FBS0UsTUFBSSxFQUFDLE1BTFA7QUFNRSxRQUFNLEVBQUMsT0FOVDtBQU9FLGFBQVcsRUFBQyxHQVBkO0FBUUUsZUFBYSxFQUFDLE9BUmhCO0FBU0UsZ0JBQWMsRUFBQyxPQVRqQjtBQVVFLFdBQVMsRUFBQywyQkFWWjtBQUFBLDBCQVlFO0FBQU0sS0FBQyxFQUFDLEdBQVI7QUFBWSxLQUFDLEVBQUMsR0FBZDtBQUFrQixTQUFLLEVBQUMsSUFBeEI7QUFBNkIsVUFBTSxFQUFDLElBQXBDO0FBQXlDLE1BQUUsRUFBQyxHQUE1QztBQUFnRCxNQUFFLEVBQUM7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGLGVBYUU7QUFBTSxLQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkYsZUFjRTtBQUFNLE1BQUUsRUFBQyxNQUFUO0FBQWdCLE1BQUUsRUFBQyxLQUFuQjtBQUF5QixNQUFFLEVBQUMsT0FBNUI7QUFBb0MsTUFBRSxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzLzFfU21hbGwvQmxvZ1NvY2lhbFNoYXJpbmcuanM/MmY4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBvcGVuRmFjZWJvb2sgPSAoKSA9PiB7XG4vLyAgIHdpbmRvdy5vcGVuKFxuLy8gICAgICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0nK2VuY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5ocmVmKSwgJ2ZhY2Vib29rLXNoYXJlLWRpYWxvZycsICd3aWR0aD02MjYsaGVpZ2h0PTQzNidcblxuaW1wb3J0IHsgRmFjZWJvb2tJY29uLCBGYWNlYm9va1NoYXJlQnV0dG9uIH0gZnJvbSBcInJlYWN0LXNoYXJlXCI7XG5cbi8vIH1cblxuZXhwb3J0IGNvbnN0IEJsb2dTb2NpYWxTaGFyaW5nID0gKGNhdGVnb3J5LCB7IGJsb2cgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhjYXRlZ29yeSk7XG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGNhdGVnb3J5O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtYi01NlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xNiBweC0yNCBmbGV4IGJnLXJlZCByb3VuZGVkLXJ1bmQgaXRlbXMtY2VudGVyIG1yLTI0IG1iLTI0IG1kOm1iLTAgdy0xMDAgbWQ6dy1hdXRvIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTggZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIG5vVW5kZXJsaW5lIFwiPlxuICAgICAgICAgIERlbCBww6UgSW5zdGFncmFtXG4gICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uXG4gICAgICAgICAgdXJsPXtgaHR0cHM6Ly9yZW5hdGVydWUubm8vJHtibG9nLmZpZWxkcy5jYXRlZ29yeX1gfVxuICAgICAgICA+XG4gICAgICAgICAgPEZhY2Vib29rSWNvbiBzaXplPXszMn0gcm91bmQ9e3RydWV9IC8+XG4gICAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cbiAgICAgICAge2luc3RhZ3JhbX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgaW5zdGFncmFtID0gKFxuICA8c3ZnXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgd2lkdGg9XCIyNFwiXG4gICAgaGVpZ2h0PVwiMjRcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICBzdHJva2VMaW5lQ2FwPVwicm91bmRcIlxuICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgIGNsYXNzTmFtZT1cImZlYXRoZXIgZmVhdGhlci1pbnN0YWdyYW1cIlxuICA+XG4gICAgPHJlY3QgeD1cIjJcIiB5PVwiMlwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHJ4PVwiNVwiIHJ5PVwiNVwiPjwvcmVjdD5cbiAgICA8cGF0aCBkPVwiTTE2IDExLjM3QTQgNCAwIDEgMSAxMi42MyA4IDQgNCAwIDAgMSAxNiAxMS4zN3pcIj48L3BhdGg+XG4gICAgPGxpbmUgeDE9XCIxNy41XCIgeTE9XCI2LjVcIiB4Mj1cIjE3LjUxXCIgeTI9XCI2LjVcIj48L2xpbmU+XG4gIDwvc3ZnPlxuKTtcbiJdLCJuYW1lcyI6WyJGYWNlYm9va0ljb24iLCJGYWNlYm9va1NoYXJlQnV0dG9uIiwiQmxvZ1NvY2lhbFNoYXJpbmciLCJjYXRlZ29yeSIsImJsb2ciLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcnlOYW1lIiwiZmllbGRzIiwiaW5zdGFncmFtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/1_Small/BlogSocialSharing.js\n");

/***/ })

});