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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AboutMePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./src/app/aboutMePage/page.css\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./src/app/utils.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst GMAIL = \"aminemeftahlinkedin@gmail.com\";\n\nfunction gotoUrl(url) {\n    window.open(url).focus();\n}\nfunction copyIntoClipBoard(setStatus) {\n    setStatus(\"copied !!\");\n    navigator.clipboard.writeText(GMAIL);\n    setTimeout(()=>{\n        setStatus(\"copie email\");\n    }, 2000);\n}\nfunction triggerAnimation(section1, section2, section3) {\n    for (let section of [\n        section1,\n        section2,\n        section3\n    ]){\n        section.classList.add(\"animateWhenReady\");\n    }\n}\nfunction cleanCLasses(section1, section2, section) {}\nfunction AboutMePage() {\n    _s();\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"copie email\");\n    const section1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const section2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const section3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const master = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(master.current, false)) {\n            triggerAnimation(section1.current, section2.current, section3.current);\n        } else {\n            cleanCLasses(section1.current, section2.current, section3.current);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"aboutMeMater\",\n        ref: master,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"aboutSection1\",\n                ref: section1,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"aboutPhoto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"./\",\n                            width: 150,\n                            height: 150\n                        }, void 0, false, {\n                            fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"aboutName\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dash\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dash\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dash\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"nameship\",\n                                children: \"Amine Meftah\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"aboutSection2\",\n                ref: section2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"abouttitle\",\n                        children: \"quick introduction\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"intro\",\n                        children: \"Hello! I'm Amine Meftah, a 21-year-old full-stack developer passionate about building seamless, efficient, and user-friendly applications. With experience across both front-end and back-end technologies, I bring a well-rounded approach to web development, tackling each project with a commitment to quality and a deep attention to detail. I’m always eager to expand my skill set and dive into new challenges, whether it’s creating dynamic interfaces or ensuring robust server-side performance. Welcome to my portfolio, where you can explore my projects and see my dedication to crafting exceptional digital experiences!\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"aboutSection3\",\n                ref: section3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"abouttitle\",\n                        children: \"Contact me \"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"copysection\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"gmailicon\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                onClick: ()=>{\n                                    copyIntoClipBoard(setStatus);\n                                },\n                                children: status\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>{\n                            gotoUrl(\"https://www.facebook.com\");\n                        },\n                        className: \"facebookicon\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>{\n                            gotoUrl(\"https://www.youtube.com\");\n                        },\n                        className: \"linkedinicon\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_s(AboutMePage, \"xjF0iOLDnMkeZjjs6iR6H9rS3cI=\");\n_c = AboutMePage;\nvar _c;\n$RefreshReg$(_c, \"AboutMePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWJvdXRNZVBhZ2UvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNvRDtBQUNoQztBQUNwQixNQUFNRyxRQUFRO0FBQ29DO0FBQ2xELFNBQVNFLFFBQVFDLEdBQUc7SUFDaEJDLE9BQU9DLElBQUksQ0FBQ0YsS0FBS0csS0FBSztBQUMxQjtBQUVBLFNBQVNDLGtCQUFrQkMsU0FBUztJQUNoQ0EsVUFBVTtJQUNWQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ1g7SUFDOUJZLFdBQVc7UUFDUEosVUFBVTtJQUNkLEdBQUc7QUFDUDtBQUVBLFNBQVNLLGlCQUFpQkMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFFBQVE7SUFDbEQsS0FBSyxJQUFJQyxXQUFXO1FBQUNIO1FBQVVDO1FBQVVDO0tBQVMsQ0FBQztRQUMvQ0MsUUFBUUMsU0FBUyxDQUFDQyxHQUFHLENBQUM7SUFDMUI7QUFDSjtBQUVBLFNBQVNDLGFBQWFOLFFBQVEsRUFBRUMsUUFBUSxFQUFFRSxPQUFPLEdBRWpEO0FBQ2UsU0FBU0k7O0lBQ3BCLE1BQU0sQ0FBQ0MsUUFBUWQsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNZSxXQUFXaEIsNkNBQU1BLENBQUM7SUFDeEIsTUFBTWlCLFdBQVdqQiw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNa0IsV0FBV2xCLDZDQUFNQSxDQUFDO0lBQ3hCLE1BQU15QixTQUFTekIsNkNBQU1BLENBQUM7SUFHdEJELGdEQUFTQSxDQUFDO1FBQ04sSUFBSUksa0RBQTBCQSxDQUFDc0IsT0FBT0MsT0FBTyxFQUFFLFFBQU87WUFDbERYLGlCQUFpQkMsU0FBU1UsT0FBTyxFQUFFVCxTQUFTUyxPQUFPLEVBQUVSLFNBQVNRLE9BQU87UUFDekUsT0FDSTtZQUNBSixhQUFhTixTQUFTVSxPQUFPLEVBQUVULFNBQVNTLE9BQU8sRUFBRVIsU0FBU1EsT0FBTztRQUNyRTtJQUNKO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7UUFBZUMsS0FBS0o7OzBCQUMvQiw4REFBQ0U7Z0JBQUlDLFdBQVU7Z0JBQWdCQyxLQUFLYjs7a0NBQ2hDLDhEQUFDVzt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0U7NEJBQUlDLEtBQUs7NEJBQU1DLE9BQU87NEJBQUtDLFFBQVE7Ozs7Ozs7Ozs7O2tDQUV4Qyw4REFBQ047d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdsQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7Z0JBQWdCQyxLQUFLWjs7a0NBQ2hDLDhEQUFDaUI7d0JBQUdOLFdBQVU7a0NBQWE7Ozs7OztrQ0FDM0IsOERBQUNPO3dCQUFFUCxXQUFVO2tDQUFROzs7Ozs7Ozs7Ozs7MEJBRXpCLDhEQUFDRDtnQkFBSUMsV0FBVTtnQkFBZ0JDLEtBQUtYOztrQ0FDaEMsOERBQUNnQjt3QkFBR04sV0FBVTtrQ0FBYTs7Ozs7O2tDQUMzQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTtnQ0FBR1EsU0FBUztvQ0FBSzNCLGtCQUFrQkM7Z0NBQVU7MENBQUljOzs7Ozs7Ozs7Ozs7a0NBRXBFLDhEQUFDRzt3QkFDR1MsU0FBUzs0QkFBS2hDLFFBQVE7d0JBQTJCO3dCQUNqRHdCLFdBQVU7Ozs7OztrQ0FFZCw4REFBQ0Q7d0JBQ0dTLFNBQVM7NEJBQUtoQyxRQUFRO3dCQUEwQjt3QkFDaER3QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUI7R0FuRHdCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYWJvdXRNZVBhZ2UvcGFnZS5qcz8wZDFmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL3BhZ2UuY3NzXCI7XG5jb25zdCBHTUFJTCA9IFwiYW1pbmVtZWZ0YWhsaW5rZWRpbkBnbWFpbC5jb21cIlxuaW1wb3J0IGVsZW1lbnRJc1Zpc2libGVJblZpZXdwb3J0IGZyb20gXCIuLi91dGlsc1wiO1xuZnVuY3Rpb24gZ290b1VybCh1cmwpe1xuICAgIHdpbmRvdy5vcGVuKHVybCkuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gY29weUludG9DbGlwQm9hcmQoc2V0U3RhdHVzKXtcbiAgICBzZXRTdGF0dXMoXCJjb3BpZWQgISFcIik7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoR01BSUwpO1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgc2V0U3RhdHVzKFwiY29waWUgZW1haWxcIik7XG4gICAgfSwgMjAwMCk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXJBbmltYXRpb24oc2VjdGlvbjEsIHNlY3Rpb24yLCBzZWN0aW9uMyl7XG4gICAgZm9yIChsZXQgc2VjdGlvbiBvZiBbc2VjdGlvbjEsIHNlY3Rpb24yLCBzZWN0aW9uM10pe1xuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlV2hlblJlYWR5XCIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5DTGFzc2VzKHNlY3Rpb24xLCBzZWN0aW9uMiwgc2VjdGlvbil7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0TWVQYWdlKCl7XG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiY29waWUgZW1haWxcIik7XG4gICAgY29uc3Qgc2VjdGlvbjEgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgc2VjdGlvbjIgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgc2VjdGlvbjMgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgbWFzdGVyID0gdXNlUmVmKG51bGwpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKGVsZW1lbnRJc1Zpc2libGVJblZpZXdwb3J0KG1hc3Rlci5jdXJyZW50LCBmYWxzZSkpe1xuICAgICAgICAgICAgdHJpZ2dlckFuaW1hdGlvbihzZWN0aW9uMS5jdXJyZW50LCBzZWN0aW9uMi5jdXJyZW50LCBzZWN0aW9uMy5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY2xlYW5DTGFzc2VzKHNlY3Rpb24xLmN1cnJlbnQsIHNlY3Rpb24yLmN1cnJlbnQsIHNlY3Rpb24zLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0TWVNYXRlclwiIHJlZj17bWFzdGVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRTZWN0aW9uMVwiIHJlZj17c2VjdGlvbjF9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRQaG90b1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIuL1wifSB3aWR0aD17MTUwfSBoZWlnaHQ9ezE1MH0+PC9pbWc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lc2hpcFwiPkFtaW5lIE1lZnRhaDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0U2VjdGlvbjJcIiByZWY9e3NlY3Rpb24yfT5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiYWJvdXR0aXRsZVwiPnF1aWNrIGludHJvZHVjdGlvbjwvaDU+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW50cm9cIj5IZWxsbyEgSSdtIEFtaW5lIE1lZnRhaCwgYSAyMS15ZWFyLW9sZCBmdWxsLXN0YWNrIGRldmVsb3BlciBwYXNzaW9uYXRlIGFib3V0IGJ1aWxkaW5nIHNlYW1sZXNzLCBlZmZpY2llbnQsIGFuZCB1c2VyLWZyaWVuZGx5IGFwcGxpY2F0aW9ucy4gV2l0aCBleHBlcmllbmNlIGFjcm9zcyBib3RoIGZyb250LWVuZCBhbmQgYmFjay1lbmQgdGVjaG5vbG9naWVzLCBJIGJyaW5nIGEgd2VsbC1yb3VuZGVkIGFwcHJvYWNoIHRvIHdlYiBkZXZlbG9wbWVudCwgdGFja2xpbmcgZWFjaCBwcm9qZWN0IHdpdGggYSBjb21taXRtZW50IHRvIHF1YWxpdHkgYW5kIGEgZGVlcCBhdHRlbnRpb24gdG8gZGV0YWlsLiBJ4oCZbSBhbHdheXMgZWFnZXIgdG8gZXhwYW5kIG15IHNraWxsIHNldCBhbmQgZGl2ZSBpbnRvIG5ldyBjaGFsbGVuZ2VzLCB3aGV0aGVyIGl04oCZcyBjcmVhdGluZyBkeW5hbWljIGludGVyZmFjZXMgb3IgZW5zdXJpbmcgcm9idXN0IHNlcnZlci1zaWRlIHBlcmZvcm1hbmNlLiBXZWxjb21lIHRvIG15IHBvcnRmb2xpbywgd2hlcmUgeW91IGNhbiBleHBsb3JlIG15IHByb2plY3RzIGFuZCBzZWUgbXkgZGVkaWNhdGlvbiB0byBjcmFmdGluZyBleGNlcHRpb25hbCBkaWdpdGFsIGV4cGVyaWVuY2VzITwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFNlY3Rpb24zXCIgcmVmPXtzZWN0aW9uM30+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImFib3V0dGl0bGVcIj5Db250YWN0IG1lIDwvaDU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5c2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdtYWlsaWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9eygpPT57Y29weUludG9DbGlwQm9hcmQoc2V0U3RhdHVzKX19PntzdGF0dXN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e2dvdG9VcmwoXCJodHRwczovL3d3dy5mYWNlYm9vay5jb21cIil9fSBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFjZWJvb2tpY29uXCIgXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57Z290b1VybChcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tXCIpfX0gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmtlZGluaWNvblwiIFxuICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiR01BSUwiLCJlbGVtZW50SXNWaXNpYmxlSW5WaWV3cG9ydCIsImdvdG9VcmwiLCJ1cmwiLCJ3aW5kb3ciLCJvcGVuIiwiZm9jdXMiLCJjb3B5SW50b0NsaXBCb2FyZCIsInNldFN0YXR1cyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyQW5pbWF0aW9uIiwic2VjdGlvbjEiLCJzZWN0aW9uMiIsInNlY3Rpb24zIiwic2VjdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsImNsZWFuQ0xhc3NlcyIsIkFib3V0TWVQYWdlIiwic3RhdHVzIiwibWFzdGVyIiwiY3VycmVudCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsImltZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiaDUiLCJwIiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/aboutMePage/page.js\n"));

/***/ })

});