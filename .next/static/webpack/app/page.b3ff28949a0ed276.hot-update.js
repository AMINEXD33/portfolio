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

/***/ "(app-pages-browser)/./src/app/titlePage/page.js":
/*!***********************************!*\
  !*** ./src/app/titlePage/page.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TitlePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./src/app/utils.js\");\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./src/app/titlePage/page.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction switchToActive(thisElement) {\n    thisElement.classList.remove(\"normalBigTitle\");\n    thisElement.classList.add(\"activeBigTitle\");\n}\nfunction switchToUnactive(thisElement) {\n    thisElement.classList.remove(\"activeBigTitle\");\n    thisElement.classList.add(\"normalBigTitle\");\n}\nfunction mouseEnterLetterAnimation(e) {\n    e.target.classList.add(\"titlePageLetterActive\");\n    e.target.classList.remove(\"titlePageLetterUnactive\");\n}\nfunction mouseLeaveLetterAnimation(e) {\n    e.target.classList.add(\"titlePageLetterUnactive\");\n    e.target.classList.remove(\"titlePageLetterActive\");\n}\nfunction addSpaces(words) {\n    let newList = [];\n    for(let x = 0; x < words.length; x++){\n        newList.push(words[x]);\n        newList.push(\" \");\n    }\n    return newList;\n}\nfunction TitlePage(param) {\n    let { title } = param;\n    _s();\n    let thisElement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let spaceCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    let titleList = title.split(\" \");\n    titleList = addSpaces(titleList);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(thisElement.current, false)) {\n            switchToActive(thisElement.current);\n        } else {\n            switchToUnactive(thisElement.current);\n        }\n        // in case this is a touch device\n        if (\"ontouchstart\" in document.documentElement) {\n            triggerAnimation(section1.current, section2.current, section3.current);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dev\", {\n        ref: thisElement,\n        className: \"Bigtitle normal\",\n        children: titleList.map((val, index)=>{\n            if (val === \" \") {\n                spaceCount.current += 1;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"titlePageLetter\",\n                onMouseEnter: (e)=>{\n                    mouseEnterLetterAnimation(e);\n                },\n                onMouseLeave: (e)=>{\n                    mouseLeaveLetterAnimation(e);\n                },\n                children: val == \" \" ? \"\\u00A0\" : val\n            }, index, false, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/titlePage/page.js\",\n                lineNumber: 58,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/thedeath/Desktop/portfolio/src/app/titlePage/page.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_s(TitlePage, \"CIsdh17+6PxGSxmLPz700LgU81M=\");\n_c = TitlePage;\nvar _c;\n$RefreshReg$(_c, \"TitlePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGl0bGVQYWdlL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDUTtBQUM5QjtBQUdwQixTQUFTRyxlQUFlQyxXQUFXO0lBQy9CQSxZQUFZQyxTQUFTLENBQUNDLE1BQU0sQ0FBQztJQUM3QkYsWUFBWUMsU0FBUyxDQUFDRSxHQUFHLENBQUM7QUFDOUI7QUFDQSxTQUFTQyxpQkFBaUJKLFdBQVc7SUFDakNBLFlBQVlDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO0lBQzdCRixZQUFZQyxTQUFTLENBQUNFLEdBQUcsQ0FBQztBQUM5QjtBQUVBLFNBQVNFLDBCQUEwQkMsQ0FBQztJQUNoQ0EsRUFBRUMsTUFBTSxDQUFDTixTQUFTLENBQUNFLEdBQUcsQ0FBQztJQUN2QkcsRUFBRUMsTUFBTSxDQUFDTixTQUFTLENBQUNDLE1BQU0sQ0FBQztBQUU5QjtBQUNBLFNBQVNNLDBCQUEwQkYsQ0FBQztJQUNoQ0EsRUFBRUMsTUFBTSxDQUFDTixTQUFTLENBQUNFLEdBQUcsQ0FBQztJQUN2QkcsRUFBRUMsTUFBTSxDQUFDTixTQUFTLENBQUNDLE1BQU0sQ0FBQztBQUU5QjtBQUNBLFNBQVNPLFVBQVVDLEtBQUs7SUFDcEIsSUFBSUMsVUFBVSxFQUFFO0lBQ2hCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRixNQUFNRyxNQUFNLEVBQUVELElBQUk7UUFDbENELFFBQVFHLElBQUksQ0FBQ0osS0FBSyxDQUFDRSxFQUFFO1FBQ3JCRCxRQUFRRyxJQUFJLENBQUM7SUFDakI7SUFDQSxPQUFPSDtBQUNYO0FBQ2UsU0FBU0ksVUFBVSxLQUFPO1FBQVAsRUFBQ0MsS0FBSyxFQUFDLEdBQVA7O0lBQzlCLElBQUloQixjQUFjSCw2Q0FBTUEsQ0FBQztJQUN6QixJQUFJb0IsYUFBYXBCLDZDQUFNQSxDQUFDO0lBQ3hCLElBQUlxQixZQUFZRixNQUFNRyxLQUFLLENBQUM7SUFDNUJELFlBQVlULFVBQVVTO0lBRXRCdEIsZ0RBQVNBLENBQUM7UUFDTixJQUFJRSxrREFBMEJBLENBQUNFLFlBQVlvQixPQUFPLEVBQUMsUUFBTztZQUN0RHJCLGVBQWVDLFlBQVlvQixPQUFPO1FBQ3RDLE9BQ0k7WUFDQWhCLGlCQUFpQkosWUFBWW9CLE9BQU87UUFDeEM7UUFDQSxpQ0FBaUM7UUFDakMsSUFBSSxrQkFBa0JDLFNBQVNDLGVBQWUsRUFBRTtZQUM1Q0MsaUJBQWlCQyxTQUFTSixPQUFPLEVBQUVLLFNBQVNMLE9BQU8sRUFBRU0sU0FBU04sT0FBTztRQUNyRTtJQUNSO0lBQ0EscUJBQ0ksOERBQUNPO1FBQUlDLEtBQUs1QjtRQUFhNkIsV0FBVTtrQkFDNUJYLFVBQVVZLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQztZQUNqQixJQUFJRCxRQUFRLEtBQUs7Z0JBQ2JkLFdBQVdHLE9BQU8sSUFBSTtZQUMxQjtZQUNBLHFCQUNJLDhEQUFDYTtnQkFDVUosV0FBVTtnQkFDckJLLGNBQWMsQ0FBQzVCO29CQUFLRCwwQkFBMEJDO2dCQUFFO2dCQUNoRDZCLGNBQWMsQ0FBQzdCO29CQUFLRSwwQkFBMEJGO2dCQUFFOzBCQUUzQ3lCLE9BQU8sTUFBSyxXQUFVQTtlQUp0QkM7Ozs7O1FBUWI7Ozs7OztBQUlaO0dBdEN3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90aXRsZVBhZ2UvcGFnZS5qcz9jMTMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZWxlbWVudElzVmlzaWJsZUluVmlld3BvcnQgZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgXCIuL3BhZ2UuY3NzXCI7XG5cblxuZnVuY3Rpb24gc3dpdGNoVG9BY3RpdmUodGhpc0VsZW1lbnQpe1xuICAgIHRoaXNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJub3JtYWxCaWdUaXRsZVwiKTtcbiAgICB0aGlzRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlQmlnVGl0bGVcIik7XG59XG5mdW5jdGlvbiBzd2l0Y2hUb1VuYWN0aXZlKHRoaXNFbGVtZW50KXtcbiAgICB0aGlzRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlQmlnVGl0bGVcIik7XG4gICAgdGhpc0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5vcm1hbEJpZ1RpdGxlXCIpO1xufVxuXG5mdW5jdGlvbiBtb3VzZUVudGVyTGV0dGVyQW5pbWF0aW9uKGUpe1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVBhZ2VMZXR0ZXJBY3RpdmVcIik7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInRpdGxlUGFnZUxldHRlclVuYWN0aXZlXCIpO1xuXG59XG5mdW5jdGlvbiBtb3VzZUxlYXZlTGV0dGVyQW5pbWF0aW9uKGUpe1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVBhZ2VMZXR0ZXJVbmFjdGl2ZVwiKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwidGl0bGVQYWdlTGV0dGVyQWN0aXZlXCIpO1xuXG59XG5mdW5jdGlvbiBhZGRTcGFjZXMod29yZHMpe1xuICAgIGxldCBuZXdMaXN0ID0gW107XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB3b3Jkcy5sZW5ndGg7IHgrKyl7XG4gICAgICAgIG5ld0xpc3QucHVzaCh3b3Jkc1t4XSk7XG4gICAgICAgIG5ld0xpc3QucHVzaChcIiBcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXdMaXN0O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGl0bGVQYWdlKHt0aXRsZX0pe1xuICAgIGxldCB0aGlzRWxlbWVudCA9IHVzZVJlZihudWxsKTtcbiAgICBsZXQgc3BhY2VDb3VudCA9IHVzZVJlZigwKTtcbiAgICBsZXQgdGl0bGVMaXN0ID0gdGl0bGUuc3BsaXQoXCIgXCIpO1xuICAgIHRpdGxlTGlzdCA9IGFkZFNwYWNlcyh0aXRsZUxpc3QpO1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmIChlbGVtZW50SXNWaXNpYmxlSW5WaWV3cG9ydCh0aGlzRWxlbWVudC5jdXJyZW50LGZhbHNlKSl7XG4gICAgICAgICAgICBzd2l0Y2hUb0FjdGl2ZSh0aGlzRWxlbWVudC5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgc3dpdGNoVG9VbmFjdGl2ZSh0aGlzRWxlbWVudC5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbiBjYXNlIHRoaXMgaXMgYSB0b3VjaCBkZXZpY2VcbiAgICAgICAgaWYgKFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgICB0cmlnZ2VyQW5pbWF0aW9uKHNlY3Rpb24xLmN1cnJlbnQsIHNlY3Rpb24yLmN1cnJlbnQsIHNlY3Rpb24zLmN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGV2IHJlZj17dGhpc0VsZW1lbnR9IGNsYXNzTmFtZT1cIkJpZ3RpdGxlIG5vcm1hbFwiPlxuICAgICAgICAgICAge3RpdGxlTGlzdC5tYXAoKHZhbCwgaW5kZXgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VDb3VudC5jdXJyZW50ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fWNsYXNzTmFtZT1cInRpdGxlUGFnZUxldHRlclwiIFxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKT0+e21vdXNlRW50ZXJMZXR0ZXJBbmltYXRpb24oZSl9fSBcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSk9Pnttb3VzZUxlYXZlTGV0dGVyQW5pbWF0aW9uKGUpfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbCA9PSBcIiBcIj8gXCJcXHUwMEEwXCI6IHZhbH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kZXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJlbGVtZW50SXNWaXNpYmxlSW5WaWV3cG9ydCIsInN3aXRjaFRvQWN0aXZlIiwidGhpc0VsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzd2l0Y2hUb1VuYWN0aXZlIiwibW91c2VFbnRlckxldHRlckFuaW1hdGlvbiIsImUiLCJ0YXJnZXQiLCJtb3VzZUxlYXZlTGV0dGVyQW5pbWF0aW9uIiwiYWRkU3BhY2VzIiwid29yZHMiLCJuZXdMaXN0IiwieCIsImxlbmd0aCIsInB1c2giLCJUaXRsZVBhZ2UiLCJ0aXRsZSIsInNwYWNlQ291bnQiLCJ0aXRsZUxpc3QiLCJzcGxpdCIsImN1cnJlbnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInRyaWdnZXJBbmltYXRpb24iLCJzZWN0aW9uMSIsInNlY3Rpb24yIiwic2VjdGlvbjMiLCJkZXYiLCJyZWYiLCJjbGFzc05hbWUiLCJtYXAiLCJ2YWwiLCJpbmRleCIsInNwYW4iLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/titlePage/page.js\n"));

/***/ })

});