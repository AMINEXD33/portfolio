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

/***/ "(app-pages-browser)/./src/app/aboutMePage/page.js":
/*!*************************************!*\
  !*** ./src/app/aboutMePage/page.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AboutMePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./src/app/aboutMePage/page.css\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./src/app/utils.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst GMAIL = \"aminemeftahlinkedin@gmail.com\";\n\nfunction gotoUrl(url) {\n    window.open(url).focus();\n}\nfunction copyIntoClipBoard(setStatus) {\n    setStatus(\"copied !!\");\n    navigator.clipboard.writeText(GMAIL);\n    setTimeout(()=>{\n        setStatus(\"copie email\");\n    }, 2000);\n}\nfunction triggerAnimation(section1, section2, section3) {\n    for (let section of [\n        section1,\n        section2,\n        section3\n    ]){\n        section.classList.add(\"animateWhenReady\");\n    }\n}\nfunction cleanCLasses(section1, section2, section) {}\nfunction AboutMePage() {\n    _s();\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"copie email\");\n    const section1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const section2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const section3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        if (_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n            triggerAnimation(section1.current, section2.current, section3.current);\n        } else {\n            cleanCLasses(section1.current, section2.current, section3.current);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"aboutMeMater\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"aboutSection1\",\n                ref: section1,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"aboutPhoto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"./\",\n                            width: 150,\n                            height: 150\n                        }, void 0, false, {\n                            fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"aboutName\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dash\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dash\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dash\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"nameship\",\n                                children: \"Amine Meftah\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"aboutSection2\",\n                ref: section2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"abouttitle\",\n                        children: \"quick introduction\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"intro\",\n                        children: \"Hello! I'm Amine Meftah, a 21-year-old full-stack developer passionate about building seamless, efficient, and user-friendly applications. With experience across both front-end and back-end technologies, I bring a well-rounded approach to web development, tackling each project with a commitment to quality and a deep attention to detail. I’m always eager to expand my skill set and dive into new challenges, whether it’s creating dynamic interfaces or ensuring robust server-side performance. Welcome to my portfolio, where you can explore my projects and see my dedication to crafting exceptional digital experiences!\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"aboutSection3\",\n                ref: section3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"abouttitle\",\n                        children: \"Contact me \"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"copysection\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"gmailicon\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                onClick: ()=>{\n                                    copyIntoClipBoard(setStatus);\n                                },\n                                children: status\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>{\n                            gotoUrl(\"https://www.facebook.com\");\n                        },\n                        className: \"facebookicon\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>{\n                            gotoUrl(\"https://www.youtube.com\");\n                        },\n                        className: \"linkedinicon\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_s(AboutMePage, \"VeCjmXBTjgGSCEnxcLes1zxVdEI=\");\n_c = AboutMePage;\nvar _c;\n$RefreshReg$(_c, \"AboutMePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWJvdXRNZVBhZ2UvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN5QztBQUNyQjtBQUNwQixNQUFNRSxRQUFRO0FBQ29DO0FBQ2xELFNBQVNFLFFBQVFDLEdBQUc7SUFDaEJDLE9BQU9DLElBQUksQ0FBQ0YsS0FBS0csS0FBSztBQUMxQjtBQUVBLFNBQVNDLGtCQUFrQkMsU0FBUztJQUNoQ0EsVUFBVTtJQUNWQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ1g7SUFDOUJZLFdBQVc7UUFDUEosVUFBVTtJQUNkLEdBQUc7QUFDUDtBQUVBLFNBQVNLLGlCQUFpQkMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFFBQVE7SUFDbEQsS0FBSyxJQUFJQyxXQUFXO1FBQUNIO1FBQVVDO1FBQVVDO0tBQVMsQ0FBQztRQUMvQ0MsUUFBUUMsU0FBUyxDQUFDQyxHQUFHLENBQUM7SUFDMUI7QUFDSjtBQUVBLFNBQVNDLGFBQWFOLFFBQVEsRUFBRUMsUUFBUSxFQUFFRSxPQUFPLEdBRWpEO0FBQ2UsU0FBU0k7O0lBQ3BCLE1BQU0sQ0FBQ0MsUUFBUWQsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNZSxXQUFXaEIsNkNBQU1BLENBQUM7SUFDeEIsTUFBTWlCLFdBQVdqQiw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNa0IsV0FBV2xCLDZDQUFNQSxDQUFDO0lBR3hCQywrQ0FBUUEsQ0FBQztRQUNMLElBQUlFLDhDQUEwQkEsRUFBQztZQUMzQlksaUJBQWlCQyxTQUFTUyxPQUFPLEVBQUVSLFNBQVNRLE9BQU8sRUFBRVAsU0FBU08sT0FBTztRQUN6RSxPQUNJO1lBQ0FILGFBQWFOLFNBQVNTLE9BQU8sRUFBRVIsU0FBU1EsT0FBTyxFQUFFUCxTQUFTTyxPQUFPO1FBQ3JFO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVO2dCQUFnQkMsS0FBS1o7O2tDQUNoQyw4REFBQ1U7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNFOzRCQUFJQyxLQUFLOzRCQUFNQyxPQUFPOzRCQUFLQyxRQUFROzs7Ozs7Ozs7OztrQ0FFeEMsOERBQUNOO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7Ozs7OzswQ0FDZiw4REFBQ0Q7Z0NBQUlDLFdBQVU7Ozs7OzswQ0FDZiw4REFBQ0Q7Z0NBQUlDLFdBQVU7Ozs7OzswQ0FDZiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHbEMsOERBQUNEO2dCQUFJQyxXQUFVO2dCQUFnQkMsS0FBS1g7O2tDQUNoQyw4REFBQ2dCO3dCQUFHTixXQUFVO2tDQUFhOzs7Ozs7a0NBQzNCLDhEQUFDTzt3QkFBRVAsV0FBVTtrQ0FBUTs7Ozs7Ozs7Ozs7OzBCQUV6Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7Z0JBQWdCQyxLQUFLVjs7a0NBQ2hDLDhEQUFDZTt3QkFBR04sV0FBVTtrQ0FBYTs7Ozs7O2tDQUMzQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTtnQ0FBR1EsU0FBUztvQ0FBSzFCLGtCQUFrQkM7Z0NBQVU7MENBQUljOzs7Ozs7Ozs7Ozs7a0NBRXBFLDhEQUFDRTt3QkFDR1MsU0FBUzs0QkFBSy9CLFFBQVE7d0JBQTJCO3dCQUNqRHVCLFdBQVU7Ozs7OztrQ0FFZCw4REFBQ0Q7d0JBQ0dTLFNBQVM7NEJBQUsvQixRQUFRO3dCQUEwQjt3QkFDaER1QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUI7R0FqRHdCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYWJvdXRNZVBhZ2UvcGFnZS5qcz8wZDFmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9wYWdlLmNzc1wiO1xuY29uc3QgR01BSUwgPSBcImFtaW5lbWVmdGFobGlua2VkaW5AZ21haWwuY29tXCJcbmltcG9ydCBlbGVtZW50SXNWaXNpYmxlSW5WaWV3cG9ydCBmcm9tIFwiLi4vdXRpbHNcIjtcbmZ1bmN0aW9uIGdvdG9VcmwodXJsKXtcbiAgICB3aW5kb3cub3Blbih1cmwpLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGNvcHlJbnRvQ2xpcEJvYXJkKHNldFN0YXR1cyl7XG4gICAgc2V0U3RhdHVzKFwiY29waWVkICEhXCIpO1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KEdNQUlMKTtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIHNldFN0YXR1cyhcImNvcGllIGVtYWlsXCIpO1xuICAgIH0sIDIwMDApO1xufVxuXG5mdW5jdGlvbiB0cmlnZ2VyQW5pbWF0aW9uKHNlY3Rpb24xLCBzZWN0aW9uMiwgc2VjdGlvbjMpe1xuICAgIGZvciAobGV0IHNlY3Rpb24gb2YgW3NlY3Rpb24xLCBzZWN0aW9uMiwgc2VjdGlvbjNdKXtcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZVdoZW5SZWFkeVwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFuQ0xhc3NlcyhzZWN0aW9uMSwgc2VjdGlvbjIsIHNlY3Rpb24pe1xuXG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dE1lUGFnZSgpe1xuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcImNvcGllIGVtYWlsXCIpO1xuICAgIGNvbnN0IHNlY3Rpb24xID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHNlY3Rpb24yID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHNlY3Rpb24zID0gdXNlUmVmKG51bGwpO1xuXG5cbiAgICB1c2VTdGF0ZSgoKT0+e1xuICAgICAgICBpZiAoZWxlbWVudElzVmlzaWJsZUluVmlld3BvcnQpe1xuICAgICAgICAgICAgdHJpZ2dlckFuaW1hdGlvbihzZWN0aW9uMS5jdXJyZW50LCBzZWN0aW9uMi5jdXJyZW50LCBzZWN0aW9uMy5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY2xlYW5DTGFzc2VzKHNlY3Rpb24xLmN1cnJlbnQsIHNlY3Rpb24yLmN1cnJlbnQsIHNlY3Rpb24zLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0TWVNYXRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFNlY3Rpb24xXCIgcmVmPXtzZWN0aW9uMX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFBob3RvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi4vXCJ9IHdpZHRoPXsxNTB9IGhlaWdodD17MTUwfT48L2ltZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVzaGlwXCI+QW1pbmUgTWVmdGFoPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRTZWN0aW9uMlwiIHJlZj17c2VjdGlvbjJ9PlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJhYm91dHRpdGxlXCI+cXVpY2sgaW50cm9kdWN0aW9uPC9oNT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbnRyb1wiPkhlbGxvISBJJ20gQW1pbmUgTWVmdGFoLCBhIDIxLXllYXItb2xkIGZ1bGwtc3RhY2sgZGV2ZWxvcGVyIHBhc3Npb25hdGUgYWJvdXQgYnVpbGRpbmcgc2VhbWxlc3MsIGVmZmljaWVudCwgYW5kIHVzZXItZnJpZW5kbHkgYXBwbGljYXRpb25zLiBXaXRoIGV4cGVyaWVuY2UgYWNyb3NzIGJvdGggZnJvbnQtZW5kIGFuZCBiYWNrLWVuZCB0ZWNobm9sb2dpZXMsIEkgYnJpbmcgYSB3ZWxsLXJvdW5kZWQgYXBwcm9hY2ggdG8gd2ViIGRldmVsb3BtZW50LCB0YWNrbGluZyBlYWNoIHByb2plY3Qgd2l0aCBhIGNvbW1pdG1lbnQgdG8gcXVhbGl0eSBhbmQgYSBkZWVwIGF0dGVudGlvbiB0byBkZXRhaWwuIEnigJltIGFsd2F5cyBlYWdlciB0byBleHBhbmQgbXkgc2tpbGwgc2V0IGFuZCBkaXZlIGludG8gbmV3IGNoYWxsZW5nZXMsIHdoZXRoZXIgaXTigJlzIGNyZWF0aW5nIGR5bmFtaWMgaW50ZXJmYWNlcyBvciBlbnN1cmluZyByb2J1c3Qgc2VydmVyLXNpZGUgcGVyZm9ybWFuY2UuIFdlbGNvbWUgdG8gbXkgcG9ydGZvbGlvLCB3aGVyZSB5b3UgY2FuIGV4cGxvcmUgbXkgcHJvamVjdHMgYW5kIHNlZSBteSBkZWRpY2F0aW9uIHRvIGNyYWZ0aW5nIGV4Y2VwdGlvbmFsIGRpZ2l0YWwgZXhwZXJpZW5jZXMhPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0U2VjdGlvbjNcIiByZWY9e3NlY3Rpb24zfT5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiYWJvdXR0aXRsZVwiPkNvbnRhY3QgbWUgPC9oNT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ21haWxpY29uXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgb25DbGljaz17KCk9Pntjb3B5SW50b0NsaXBCb2FyZChzZXRTdGF0dXMpfX0+e3N0YXR1c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57Z290b1VybChcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbVwiKX19IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYWNlYm9va2ljb25cIiBcbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9Pntnb3RvVXJsKFwiaHR0cHM6Ly93d3cueW91dHViZS5jb21cIil9fSBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlua2VkaW5pY29uXCIgXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJHTUFJTCIsImVsZW1lbnRJc1Zpc2libGVJblZpZXdwb3J0IiwiZ290b1VybCIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJmb2N1cyIsImNvcHlJbnRvQ2xpcEJvYXJkIiwic2V0U3RhdHVzIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0VGltZW91dCIsInRyaWdnZXJBbmltYXRpb24iLCJzZWN0aW9uMSIsInNlY3Rpb24yIiwic2VjdGlvbjMiLCJzZWN0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xlYW5DTGFzc2VzIiwiQWJvdXRNZVBhZ2UiLCJzdGF0dXMiLCJjdXJyZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwiaW1nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJoNSIsInAiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/aboutMePage/page.js\n"));

/***/ })

});