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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TitlePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./src/app/utils.js\");\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./src/app/titlePage/page.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction switchToActive(thisElement) {\n    thisElement.classList.remove(\"normalBigTitle\");\n    thisElement.classList.add(\"activeBigTitle\");\n}\nfunction switchToUnactive(thisElement) {\n    thisElement.classList.remove(\"activeBigTitle\");\n    thisElement.classList.add(\"normalBigTitle\");\n}\nfunction mouseEnterLetterAnimation(e) {\n    e.target.classList.add(\"titlePageLetterActive\");\n    e.target.classList.remove(\"titlePageLetterUnactive\");\n}\nfunction mouseLeaveLetterAnimation(e) {\n    e.target.classList.add(\"titlePageLetterUnactive\");\n    e.target.classList.remove(\"titlePageLetterActive\");\n}\nfunction addSpaces(words) {\n    let newList = [];\n    for(let x = 0; x < words.length; x++){\n        newList.push(words[x]);\n        newList.push(\" \");\n    }\n    return newList;\n}\nfunction TitlePage(param) {\n    let { title } = param;\n    _s();\n    let thisElement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let spaceCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    let titleList = title.split(\" \");\n    titleList = addSpaces(titleList);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(thisElement.current, false)) {\n            switchToActive(thisElement.current);\n        } else {\n            switchToUnactive(thisElement.current);\n        }\n        // in case this is a touch device\n        if (\"ontouchstart\" in document.documentElement) {\n            switchToActive(thisElement.current);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dev\", {\n        ref: thisElement,\n        className: \"Bigtitle normal\",\n        children: titleList.map((val, index)=>{\n            if (val === \" \") {\n                spaceCount.current += 1;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"titlePageLetter\",\n                onMouseEnter: (e)=>{\n                    mouseEnterLetterAnimation(e);\n                },\n                onMouseLeave: (e)=>{\n                    mouseLeaveLetterAnimation(e);\n                },\n                children: val == \" \" ? \"\\u00A0\" : val\n            }, index, false, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/titlePage/page.js\",\n                lineNumber: 58,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/thedeath/Desktop/portfolio/src/app/titlePage/page.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_s(TitlePage, \"CIsdh17+6PxGSxmLPz700LgU81M=\");\n_c = TitlePage;\nvar _c;\n$RefreshReg$(_c, \"TitlePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGl0bGVQYWdlL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDUTtBQUM5QjtBQUdwQixTQUFTRyxlQUFlQyxXQUFXO0lBQy9CQSxZQUFZQyxTQUFTLENBQUNDLE1BQU0sQ0FBQztJQUM3QkYsWUFBWUMsU0FBUyxDQUFDRSxHQUFHLENBQUM7QUFDOUI7QUFDQSxTQUFTQyxpQkFBaUJKLFdBQVc7SUFDakNBLFlBQVlDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO0lBQzdCRixZQUFZQyxTQUFTLENBQUNFLEdBQUcsQ0FBQztBQUM5QjtBQUVBLFNBQVNFLDBCQUEwQkMsQ0FBQztJQUNoQ0EsRUFBRUMsTUFBTSxDQUFDTixTQUFTLENBQUNFLEdBQUcsQ0FBQztJQUN2QkcsRUFBRUMsTUFBTSxDQUFDTixTQUFTLENBQUNDLE1BQU0sQ0FBQztBQUU5QjtBQUNBLFNBQVNNLDBCQUEwQkYsQ0FBQztJQUNoQ0EsRUFBRUMsTUFBTSxDQUFDTixTQUFTLENBQUNFLEdBQUcsQ0FBQztJQUN2QkcsRUFBRUMsTUFBTSxDQUFDTixTQUFTLENBQUNDLE1BQU0sQ0FBQztBQUU5QjtBQUNBLFNBQVNPLFVBQVVDLEtBQUs7SUFDcEIsSUFBSUMsVUFBVSxFQUFFO0lBQ2hCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRixNQUFNRyxNQUFNLEVBQUVELElBQUk7UUFDbENELFFBQVFHLElBQUksQ0FBQ0osS0FBSyxDQUFDRSxFQUFFO1FBQ3JCRCxRQUFRRyxJQUFJLENBQUM7SUFDakI7SUFDQSxPQUFPSDtBQUNYO0FBQ2UsU0FBU0ksVUFBVSxLQUFPO1FBQVAsRUFBQ0MsS0FBSyxFQUFDLEdBQVA7O0lBQzlCLElBQUloQixjQUFjSCw2Q0FBTUEsQ0FBQztJQUN6QixJQUFJb0IsYUFBYXBCLDZDQUFNQSxDQUFDO0lBQ3hCLElBQUlxQixZQUFZRixNQUFNRyxLQUFLLENBQUM7SUFDNUJELFlBQVlULFVBQVVTO0lBRXRCdEIsZ0RBQVNBLENBQUM7UUFDTixJQUFJRSxrREFBMEJBLENBQUNFLFlBQVlvQixPQUFPLEVBQUMsUUFBTztZQUN0RHJCLGVBQWVDLFlBQVlvQixPQUFPO1FBQ3RDLE9BQ0k7WUFDQWhCLGlCQUFpQkosWUFBWW9CLE9BQU87UUFDeEM7UUFDQSxpQ0FBaUM7UUFDakMsSUFBSSxrQkFBa0JDLFNBQVNDLGVBQWUsRUFBRTtZQUM1Q3ZCLGVBQWVDLFlBQVlvQixPQUFPO1FBQ3RDO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ0c7UUFBSUMsS0FBS3hCO1FBQWF5QixXQUFVO2tCQUM1QlAsVUFBVVEsR0FBRyxDQUFDLENBQUNDLEtBQUtDO1lBQ2pCLElBQUlELFFBQVEsS0FBSztnQkFDYlYsV0FBV0csT0FBTyxJQUFJO1lBQzFCO1lBQ0EscUJBQ0ksOERBQUNTO2dCQUNVSixXQUFVO2dCQUNyQkssY0FBYyxDQUFDeEI7b0JBQUtELDBCQUEwQkM7Z0JBQUU7Z0JBQ2hEeUIsY0FBYyxDQUFDekI7b0JBQUtFLDBCQUEwQkY7Z0JBQUU7MEJBRTNDcUIsT0FBTyxNQUFLLFdBQVVBO2VBSnRCQzs7Ozs7UUFRYjs7Ozs7O0FBSVo7R0F0Q3dCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvdGl0bGVQYWdlL3BhZ2UuanM/YzEzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGVsZW1lbnRJc1Zpc2libGVJblZpZXdwb3J0IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IFwiLi9wYWdlLmNzc1wiO1xuXG5cbmZ1bmN0aW9uIHN3aXRjaFRvQWN0aXZlKHRoaXNFbGVtZW50KXtcbiAgICB0aGlzRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibm9ybWFsQmlnVGl0bGVcIik7XG4gICAgdGhpc0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZUJpZ1RpdGxlXCIpO1xufVxuZnVuY3Rpb24gc3dpdGNoVG9VbmFjdGl2ZSh0aGlzRWxlbWVudCl7XG4gICAgdGhpc0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZUJpZ1RpdGxlXCIpO1xuICAgIHRoaXNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJub3JtYWxCaWdUaXRsZVwiKTtcbn1cblxuZnVuY3Rpb24gbW91c2VFbnRlckxldHRlckFuaW1hdGlvbihlKXtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwidGl0bGVQYWdlTGV0dGVyQWN0aXZlXCIpO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZVBhZ2VMZXR0ZXJVbmFjdGl2ZVwiKTtcblxufVxuZnVuY3Rpb24gbW91c2VMZWF2ZUxldHRlckFuaW1hdGlvbihlKXtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwidGl0bGVQYWdlTGV0dGVyVW5hY3RpdmVcIik7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInRpdGxlUGFnZUxldHRlckFjdGl2ZVwiKTtcblxufVxuZnVuY3Rpb24gYWRkU3BhY2VzKHdvcmRzKXtcbiAgICBsZXQgbmV3TGlzdCA9IFtdO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgd29yZHMubGVuZ3RoOyB4Kyspe1xuICAgICAgICBuZXdMaXN0LnB1c2god29yZHNbeF0pO1xuICAgICAgICBuZXdMaXN0LnB1c2goXCIgXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3TGlzdDtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpdGxlUGFnZSh7dGl0bGV9KXtcbiAgICBsZXQgdGhpc0VsZW1lbnQgPSB1c2VSZWYobnVsbCk7XG4gICAgbGV0IHNwYWNlQ291bnQgPSB1c2VSZWYoMCk7XG4gICAgbGV0IHRpdGxlTGlzdCA9IHRpdGxlLnNwbGl0KFwiIFwiKTtcbiAgICB0aXRsZUxpc3QgPSBhZGRTcGFjZXModGl0bGVMaXN0KTtcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoZWxlbWVudElzVmlzaWJsZUluVmlld3BvcnQodGhpc0VsZW1lbnQuY3VycmVudCxmYWxzZSkpe1xuICAgICAgICAgICAgc3dpdGNoVG9BY3RpdmUodGhpc0VsZW1lbnQuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHN3aXRjaFRvVW5hY3RpdmUodGhpc0VsZW1lbnQuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW4gY2FzZSB0aGlzIGlzIGEgdG91Y2ggZGV2aWNlXG4gICAgICAgIGlmIChcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICAgc3dpdGNoVG9BY3RpdmUodGhpc0VsZW1lbnQuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybihcbiAgICAgICAgPGRldiByZWY9e3RoaXNFbGVtZW50fSBjbGFzc05hbWU9XCJCaWd0aXRsZSBub3JtYWxcIj5cbiAgICAgICAgICAgIHt0aXRsZUxpc3QubWFwKCh2YWwsIGluZGV4KT0+e1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQ291bnQuY3VycmVudCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1jbGFzc05hbWU9XCJ0aXRsZVBhZ2VMZXR0ZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSk9Pnttb3VzZUVudGVyTGV0dGVyQW5pbWF0aW9uKGUpfX0gXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpPT57bW91c2VMZWF2ZUxldHRlckFuaW1hdGlvbihlKX19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWwgPT0gXCIgXCI/IFwiXFx1MDBBMFwiOiB2YWx9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGV2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiZWxlbWVudElzVmlzaWJsZUluVmlld3BvcnQiLCJzd2l0Y2hUb0FjdGl2ZSIsInRoaXNFbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic3dpdGNoVG9VbmFjdGl2ZSIsIm1vdXNlRW50ZXJMZXR0ZXJBbmltYXRpb24iLCJlIiwidGFyZ2V0IiwibW91c2VMZWF2ZUxldHRlckFuaW1hdGlvbiIsImFkZFNwYWNlcyIsIndvcmRzIiwibmV3TGlzdCIsIngiLCJsZW5ndGgiLCJwdXNoIiwiVGl0bGVQYWdlIiwidGl0bGUiLCJzcGFjZUNvdW50IiwidGl0bGVMaXN0Iiwic3BsaXQiLCJjdXJyZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJkZXYiLCJyZWYiLCJjbGFzc05hbWUiLCJtYXAiLCJ2YWwiLCJpbmRleCIsInNwYW4iLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/titlePage/page.js\n"));

/***/ })

});