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

/***/ "./components/2_Big/ArticleCard.js":
/*!*****************************************!*\
  !*** ./components/2_Big/ArticleCard.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArticleCard\": function() { return /* binding */ ArticleCard; }\n/* harmony export */ });\n/* harmony import */ var _1_Small_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../1_Small/Base */ \"./components/1_Small/Base.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/ragnsanvalla/github/client_projects/client_renate-rue-matblogg/components/2_Big/ArticleCard.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar loader = function loader(_ref) {\n  var src = _ref.src;\n  return \"https://images.ctfassets.net/gz5doxqqp280/\".concat(src, \"?w=750\");\n};\n\nvar ArticleCard = function ArticleCard(_ref2) {\n  var articleTitle = _ref2.articleTitle,\n      articleCategory = _ref2.articleCategory,\n      aricleHref = _ref2.aricleHref,\n      imgSrc = _ref2.imgSrc,\n      imgAlt = _ref2.imgAlt,\n      id = _ref2.id;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"article\", {\n    className: \"hover cursor-pointer mb-32 lg:mb-56 group\",\n    id: id,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"\".concat(aricleHref),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"shadow-shadow rounded-rund relative h-240\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: imgSrc,\n            alt: imgAlt,\n            loader: loader,\n            layout: \"fill\",\n            className: \"object-cover rounded-rund\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"flex justify-end mr-16 pt-16 \",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_1_Small_Base__WEBPACK_IMPORTED_MODULE_0__.Box, {\n              c: \"bg-white relative text-center font-semibold \",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n                className: \"text-body_small text-neutral_700 px-24 \",\n                children: articleCategory\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n          className: \"mt-24 text-neutral_900 group-hover:underline group-focus:underline \",\n          children: articleTitle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n_c = ArticleCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"ArticleCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzLzJfQmlnL0FydGljbGVDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBYTtBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTtBQUMxQiw2REFBb0RBLEdBQXBEO0FBQ0QsQ0FGRDs7QUFJTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxRQU9yQjtBQUFBLE1BTkpDLFlBTUksU0FOSkEsWUFNSTtBQUFBLE1BTEpDLGVBS0ksU0FMSkEsZUFLSTtBQUFBLE1BSkpDLFVBSUksU0FKSkEsVUFJSTtBQUFBLE1BSEpDLE1BR0ksU0FISkEsTUFHSTtBQUFBLE1BRkpDLE1BRUksU0FGSkEsTUFFSTtBQUFBLE1BREpDLEVBQ0ksU0FESkEsRUFDSTtBQUNKLHNCQUNFO0FBQVMsYUFBUyxFQUFDLDJDQUFuQjtBQUErRCxNQUFFLEVBQUVBLEVBQW5FO0FBQUEsMkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLFlBQUtILFVBQUwsQ0FBVjtBQUFBLDZCQUNFO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLDJDQUFmO0FBQUEsa0NBQ0UsOERBQUMsbURBQUQ7QUFDRSxlQUFHLEVBQUVDLE1BRFA7QUFFRSxlQUFHLEVBQUVDLE1BRlA7QUFHRSxrQkFBTSxFQUFFUCxNQUhWO0FBSUUsa0JBQU0sRUFBQyxNQUpUO0FBS0UscUJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFRRTtBQUFLLHFCQUFTLEVBQUMsK0JBQWY7QUFBQSxtQ0FDRSw4REFBQyw4Q0FBRDtBQUFLLGVBQUMsRUFBQyw4Q0FBUDtBQUFBLHFDQUNFO0FBQUcseUJBQVMsRUFBQyx5Q0FBYjtBQUFBLDBCQUNHSTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFpQkU7QUFBSSxtQkFBUyxFQUFDLHFFQUFkO0FBQUEsb0JBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQW5DTTtLQUFNRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzLzJfQmlnL0FydGljbGVDYXJkLmpzP2E1Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBMYXlvdXQgfSBmcm9tIFwiLi4vMV9TbWFsbC9CYXNlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgbG9hZGVyID0gKHsgc3JjIH0pID0+IHtcbiAgcmV0dXJuIGBodHRwczovL2ltYWdlcy5jdGZhc3NldHMubmV0L2d6NWRveHFxcDI4MC8ke3NyY30/dz03NTBgO1xufTtcblxuZXhwb3J0IGNvbnN0IEFydGljbGVDYXJkID0gKHtcbiAgYXJ0aWNsZVRpdGxlLFxuICBhcnRpY2xlQ2F0ZWdvcnksXG4gIGFyaWNsZUhyZWYsXG4gIGltZ1NyYyxcbiAgaW1nQWx0LFxuICBpZCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJob3ZlciBjdXJzb3ItcG9pbnRlciBtYi0zMiBsZzptYi01NiBncm91cFwiIGlkPXtpZH0+XG4gICAgICA8TGluayBocmVmPXtgJHthcmljbGVIcmVmfWB9PlxuICAgICAgICA8YT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1zaGFkb3cgcm91bmRlZC1ydW5kIHJlbGF0aXZlIGgtMjQwXCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtpbWdTcmN9XG4gICAgICAgICAgICAgIGFsdD17aW1nQWx0fVxuICAgICAgICAgICAgICBsb2FkZXI9e2xvYWRlcn1cbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciByb3VuZGVkLXJ1bmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBtci0xNiBwdC0xNiBcIj5cbiAgICAgICAgICAgICAgPEJveCBjPVwiYmctd2hpdGUgcmVsYXRpdmUgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCBcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJvZHlfc21hbGwgdGV4dC1uZXV0cmFsXzcwMCBweC0yNCBcIj5cbiAgICAgICAgICAgICAgICAgIHthcnRpY2xlQ2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC0yNCB0ZXh0LW5ldXRyYWxfOTAwIGdyb3VwLWhvdmVyOnVuZGVybGluZSBncm91cC1mb2N1czp1bmRlcmxpbmUgXCI+XG4gICAgICAgICAgICB7YXJ0aWNsZVRpdGxlfVxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkJveCIsIkxheW91dCIsIkltYWdlIiwiTGluayIsImxvYWRlciIsInNyYyIsIkFydGljbGVDYXJkIiwiYXJ0aWNsZVRpdGxlIiwiYXJ0aWNsZUNhdGVnb3J5IiwiYXJpY2xlSHJlZiIsImltZ1NyYyIsImltZ0FsdCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/2_Big/ArticleCard.js\n");

/***/ })

});