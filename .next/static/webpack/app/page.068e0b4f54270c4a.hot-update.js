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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AboutMePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./src/app/aboutMePage/page.css\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./src/app/utils.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst GMAIL = \"aminemeftahlinkedin@gmail.com\";\n\nfunction gotoUrl(url) {\n    window.open(url).focus();\n}\nfunction copyIntoClipBoard(setStatus) {\n    setStatus(\"copied !!\");\n    navigator.clipboard.writeText(GMAIL);\n    setTimeout(()=>{\n        setStatus(\"copie email\");\n    }, 2000);\n}\nfunction triggerAnimation(section1, section2, section3) {\n    for (let section of [\n        section1,\n        section2,\n        section3\n    ]){\n        if (section) {\n            section.classList.add(\"animateWhenReady\");\n        }\n    }\n}\nfunction cleanCLasses(section1, section2, section) {}\nfunction AboutMePage() {\n    _s();\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"copie email\");\n    const section1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const section2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const section3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        if (_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n            triggerAnimation(section1.current, section2.current, section3.current);\n        } else {\n            cleanCLasses(section1.current, section2.current, section3.current);\n        }\n    }, [\n        section1,\n        section2,\n        section3\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"aboutMeMater\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"aboutSection1\",\n                ref: section1,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"aboutPhoto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"./\",\n                            width: 150,\n                            height: 150\n                        }, void 0, false, {\n                            fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"aboutName\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dash\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dash\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dash\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"nameship\",\n                                children: \"Amine Meftah\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"aboutSection2\",\n                ref: section2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"abouttitle\",\n                        children: \"quick introduction\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"intro\",\n                        children: \"Hello! I'm Amine Meftah, a 21-year-old full-stack developer passionate about building seamless, efficient, and user-friendly applications. With experience across both front-end and back-end technologies, I bring a well-rounded approach to web development, tackling each project with a commitment to quality and a deep attention to detail. I’m always eager to expand my skill set and dive into new challenges, whether it’s creating dynamic interfaces or ensuring robust server-side performance. Welcome to my portfolio, where you can explore my projects and see my dedication to crafting exceptional digital experiences!\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"aboutSection3\",\n                ref: section3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"abouttitle\",\n                        children: \"Contact me \"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"copysection\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"gmailicon\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                onClick: ()=>{\n                                    copyIntoClipBoard(setStatus);\n                                },\n                                children: status\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>{\n                            gotoUrl(\"https://www.facebook.com\");\n                        },\n                        className: \"facebookicon\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>{\n                            gotoUrl(\"https://www.youtube.com\");\n                        },\n                        className: \"linkedinicon\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_s(AboutMePage, \"VeCjmXBTjgGSCEnxcLes1zxVdEI=\");\n_c = AboutMePage;\nvar _c;\n$RefreshReg$(_c, \"AboutMePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWJvdXRNZVBhZ2UvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN5QztBQUNyQjtBQUNwQixNQUFNRSxRQUFRO0FBQ29DO0FBQ2xELFNBQVNFLFFBQVFDLEdBQUc7SUFDaEJDLE9BQU9DLElBQUksQ0FBQ0YsS0FBS0csS0FBSztBQUMxQjtBQUVBLFNBQVNDLGtCQUFrQkMsU0FBUztJQUNoQ0EsVUFBVTtJQUNWQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ1g7SUFDOUJZLFdBQVc7UUFDUEosVUFBVTtJQUNkLEdBQUc7QUFDUDtBQUVBLFNBQVNLLGlCQUFpQkMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFFBQVE7SUFDbEQsS0FBSyxJQUFJQyxXQUFXO1FBQUNIO1FBQVVDO1FBQVVDO0tBQVMsQ0FBQztRQUMvQyxJQUFJQyxTQUFRO1lBQ1JBLFFBQVFDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1FBQzFCO0lBRUo7QUFDSjtBQUVBLFNBQVNDLGFBQWFOLFFBQVEsRUFBRUMsUUFBUSxFQUFFRSxPQUFPLEdBRWpEO0FBQ2UsU0FBU0k7O0lBQ3BCLE1BQU0sQ0FBQ0MsUUFBUWQsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNZSxXQUFXaEIsNkNBQU1BLENBQUM7SUFDeEIsTUFBTWlCLFdBQVdqQiw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNa0IsV0FBV2xCLDZDQUFNQSxDQUFDO0lBR3hCQywrQ0FBUUEsQ0FBQztRQUNMLElBQUlFLDhDQUEwQkEsRUFBQztZQUMzQlksaUJBQWlCQyxTQUFTUyxPQUFPLEVBQUVSLFNBQVNRLE9BQU8sRUFBRVAsU0FBU08sT0FBTztRQUN6RSxPQUNJO1lBQ0FILGFBQWFOLFNBQVNTLE9BQU8sRUFBRVIsU0FBU1EsT0FBTyxFQUFFUCxTQUFTTyxPQUFPO1FBQ3JFO0lBQ0osR0FBRztRQUFDVDtRQUFVQztRQUFVQztLQUFTO0lBQ2pDLHFCQUNJLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7Z0JBQWdCQyxLQUFLWjs7a0NBQ2hDLDhEQUFDVTt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0U7NEJBQUlDLEtBQUs7NEJBQU1DLE9BQU87NEJBQUtDLFFBQVE7Ozs7Ozs7Ozs7O2tDQUV4Qyw4REFBQ047d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdsQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7Z0JBQWdCQyxLQUFLWDs7a0NBQ2hDLDhEQUFDZ0I7d0JBQUdOLFdBQVU7a0NBQWE7Ozs7OztrQ0FDM0IsOERBQUNPO3dCQUFFUCxXQUFVO2tDQUFROzs7Ozs7Ozs7Ozs7MEJBRXpCLDhEQUFDRDtnQkFBSUMsV0FBVTtnQkFBZ0JDLEtBQUtWOztrQ0FDaEMsOERBQUNlO3dCQUFHTixXQUFVO2tDQUFhOzs7Ozs7a0NBQzNCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOzs7Ozs7MENBQ2YsOERBQUNEO2dDQUFJQyxXQUFVO2dDQUFHUSxTQUFTO29DQUFLMUIsa0JBQWtCQztnQ0FBVTswQ0FBSWM7Ozs7Ozs7Ozs7OztrQ0FFcEUsOERBQUNFO3dCQUNHUyxTQUFTOzRCQUFLL0IsUUFBUTt3QkFBMkI7d0JBQ2pEdUIsV0FBVTs7Ozs7O2tDQUVkLDhEQUFDRDt3QkFDR1MsU0FBUzs0QkFBSy9CLFFBQVE7d0JBQTBCO3dCQUNoRHVCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QjtHQWpEd0JKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hYm91dE1lUGFnZS9wYWdlLmpzPzBkMWYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL3BhZ2UuY3NzXCI7XG5jb25zdCBHTUFJTCA9IFwiYW1pbmVtZWZ0YWhsaW5rZWRpbkBnbWFpbC5jb21cIlxuaW1wb3J0IGVsZW1lbnRJc1Zpc2libGVJblZpZXdwb3J0IGZyb20gXCIuLi91dGlsc1wiO1xuZnVuY3Rpb24gZ290b1VybCh1cmwpe1xuICAgIHdpbmRvdy5vcGVuKHVybCkuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gY29weUludG9DbGlwQm9hcmQoc2V0U3RhdHVzKXtcbiAgICBzZXRTdGF0dXMoXCJjb3BpZWQgISFcIik7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoR01BSUwpO1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgc2V0U3RhdHVzKFwiY29waWUgZW1haWxcIik7XG4gICAgfSwgMjAwMCk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXJBbmltYXRpb24oc2VjdGlvbjEsIHNlY3Rpb24yLCBzZWN0aW9uMyl7XG4gICAgZm9yIChsZXQgc2VjdGlvbiBvZiBbc2VjdGlvbjEsIHNlY3Rpb24yLCBzZWN0aW9uM10pe1xuICAgICAgICBpZiAoc2VjdGlvbil7XG4gICAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlV2hlblJlYWR5XCIpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFuQ0xhc3NlcyhzZWN0aW9uMSwgc2VjdGlvbjIsIHNlY3Rpb24pe1xuXG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dE1lUGFnZSgpe1xuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcImNvcGllIGVtYWlsXCIpO1xuICAgIGNvbnN0IHNlY3Rpb24xID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHNlY3Rpb24yID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHNlY3Rpb24zID0gdXNlUmVmKG51bGwpO1xuXG5cbiAgICB1c2VTdGF0ZSgoKT0+e1xuICAgICAgICBpZiAoZWxlbWVudElzVmlzaWJsZUluVmlld3BvcnQpe1xuICAgICAgICAgICAgdHJpZ2dlckFuaW1hdGlvbihzZWN0aW9uMS5jdXJyZW50LCBzZWN0aW9uMi5jdXJyZW50LCBzZWN0aW9uMy5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY2xlYW5DTGFzc2VzKHNlY3Rpb24xLmN1cnJlbnQsIHNlY3Rpb24yLmN1cnJlbnQsIHNlY3Rpb24zLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfSwgW3NlY3Rpb24xLCBzZWN0aW9uMiwgc2VjdGlvbjNdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRNZU1hdGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0U2VjdGlvbjFcIiByZWY9e3NlY3Rpb24xfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0UGhvdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiLi9cIn0gd2lkdGg9ezE1MH0gaGVpZ2h0PXsxNTB9PjwvaW1nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXROYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZXNoaXBcIj5BbWluZSBNZWZ0YWg8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFNlY3Rpb24yXCIgcmVmPXtzZWN0aW9uMn0+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImFib3V0dGl0bGVcIj5xdWljayBpbnRyb2R1Y3Rpb248L2g1PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImludHJvXCI+SGVsbG8hIEknbSBBbWluZSBNZWZ0YWgsIGEgMjEteWVhci1vbGQgZnVsbC1zdGFjayBkZXZlbG9wZXIgcGFzc2lvbmF0ZSBhYm91dCBidWlsZGluZyBzZWFtbGVzcywgZWZmaWNpZW50LCBhbmQgdXNlci1mcmllbmRseSBhcHBsaWNhdGlvbnMuIFdpdGggZXhwZXJpZW5jZSBhY3Jvc3MgYm90aCBmcm9udC1lbmQgYW5kIGJhY2stZW5kIHRlY2hub2xvZ2llcywgSSBicmluZyBhIHdlbGwtcm91bmRlZCBhcHByb2FjaCB0byB3ZWIgZGV2ZWxvcG1lbnQsIHRhY2tsaW5nIGVhY2ggcHJvamVjdCB3aXRoIGEgY29tbWl0bWVudCB0byBxdWFsaXR5IGFuZCBhIGRlZXAgYXR0ZW50aW9uIHRvIGRldGFpbC4gSeKAmW0gYWx3YXlzIGVhZ2VyIHRvIGV4cGFuZCBteSBza2lsbCBzZXQgYW5kIGRpdmUgaW50byBuZXcgY2hhbGxlbmdlcywgd2hldGhlciBpdOKAmXMgY3JlYXRpbmcgZHluYW1pYyBpbnRlcmZhY2VzIG9yIGVuc3VyaW5nIHJvYnVzdCBzZXJ2ZXItc2lkZSBwZXJmb3JtYW5jZS4gV2VsY29tZSB0byBteSBwb3J0Zm9saW8sIHdoZXJlIHlvdSBjYW4gZXhwbG9yZSBteSBwcm9qZWN0cyBhbmQgc2VlIG15IGRlZGljYXRpb24gdG8gY3JhZnRpbmcgZXhjZXB0aW9uYWwgZGlnaXRhbCBleHBlcmllbmNlcyE8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRTZWN0aW9uM1wiIHJlZj17c2VjdGlvbjN9PlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJhYm91dHRpdGxlXCI+Q29udGFjdCBtZSA8L2g1PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbWFpbGljb25cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXsoKT0+e2NvcHlJbnRvQ2xpcEJvYXJkKHNldFN0YXR1cyl9fT57c3RhdHVzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9Pntnb3RvVXJsKFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCIpfX0gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhY2Vib29raWNvblwiIFxuICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e2dvdG9VcmwoXCJodHRwczovL3d3dy55b3V0dWJlLmNvbVwiKX19IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rZWRpbmljb25cIiBcbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkdNQUlMIiwiZWxlbWVudElzVmlzaWJsZUluVmlld3BvcnQiLCJnb3RvVXJsIiwidXJsIiwid2luZG93Iiwib3BlbiIsImZvY3VzIiwiY29weUludG9DbGlwQm9hcmQiLCJzZXRTdGF0dXMiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzZXRUaW1lb3V0IiwidHJpZ2dlckFuaW1hdGlvbiIsInNlY3Rpb24xIiwic2VjdGlvbjIiLCJzZWN0aW9uMyIsInNlY3Rpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJjbGVhbkNMYXNzZXMiLCJBYm91dE1lUGFnZSIsInN0YXR1cyIsImN1cnJlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImg1IiwicCIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/aboutMePage/page.js\n"));

/***/ })

});