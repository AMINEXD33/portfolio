"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page/page.js":
/*!******************************!*\
  !*** ./src/app/page/page.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PageIntety)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./src/app/page/page.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction handleScrollEvent(pageElement) {\n    console.log(\"scrolled\");\n}\n/**\r\n *\r\n * @param {*} param0\r\n * @returns\r\n */ function PageIntety(param) {\n    let { children, rotation, ElementAnimationCallBack } = param;\n    _s();\n    const page = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"rejusting \", rotation);\n        ElementAnimationCallBack(page.current, rotation);\n    }, [\n        rotation\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        ref: page,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/thedeath/Desktop/portfolio/src/app/page/page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(PageIntety, \"iaX0qz1SdWFh5tVQbDGR/gsNpYQ=\");\n_c = PageIntety;\nvar _c;\n$RefreshReg$(_c, \"PageIntety\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMEM7QUFDdEI7QUFFcEIsU0FBU0Usa0JBQWtCQyxXQUFXO0lBQ3BDQyxRQUFRQyxHQUFHLENBQUM7QUFDZDtBQUNBOzs7O0NBSUMsR0FDYyxTQUFTQyxXQUFXLEtBSWxDO1FBSmtDLEVBQ2pDQyxRQUFRLEVBQ1JDLFFBQVEsRUFDUkMsd0JBQXdCLEVBQ3pCLEdBSmtDOztJQUtqQyxNQUFNQyxPQUFPVCw2Q0FBTUEsQ0FBQztJQUVwQkQsZ0RBQVNBLENBQUM7UUFDUkksUUFBUUMsR0FBRyxDQUFDLGNBQWNHO1FBQzFCQyx5QkFBeUJDLEtBQUtDLE9BQU8sRUFBRUg7SUFDekMsR0FBRztRQUFDQTtLQUFTO0lBQ2IscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7UUFBT0MsS0FBS0o7a0JBQ3hCSDs7Ozs7O0FBR1A7R0FoQndCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZS9wYWdlLmpzPzI2MDYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vcGFnZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVNjcm9sbEV2ZW50KHBhZ2VFbGVtZW50KSB7XHJcbiAgY29uc29sZS5sb2coXCJzY3JvbGxlZFwiKTtcclxufVxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXJhbTBcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VJbnRldHkoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHJvdGF0aW9uLFxyXG4gIEVsZW1lbnRBbmltYXRpb25DYWxsQmFjayxcclxufSkge1xyXG4gIGNvbnN0IHBhZ2UgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlanVzdGluZyBcIiwgcm90YXRpb24pO1xyXG4gICAgRWxlbWVudEFuaW1hdGlvbkNhbGxCYWNrKHBhZ2UuY3VycmVudCwgcm90YXRpb24pO1xyXG4gIH0sIFtyb3RhdGlvbl0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIiByZWY9e3BhZ2V9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJoYW5kbGVTY3JvbGxFdmVudCIsInBhZ2VFbGVtZW50IiwiY29uc29sZSIsImxvZyIsIlBhZ2VJbnRldHkiLCJjaGlsZHJlbiIsInJvdGF0aW9uIiwiRWxlbWVudEFuaW1hdGlvbkNhbGxCYWNrIiwicGFnZSIsImN1cnJlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page/page.js\n"));

/***/ })

});