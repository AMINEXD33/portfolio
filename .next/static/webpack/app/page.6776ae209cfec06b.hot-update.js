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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AboutMePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./src/app/aboutMePage/page.css\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./src/app/utils.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst GMAIL = \"aminemeftahlinkedin@gmail.com\";\n\nfunction gotoUrl(url) {\n    window.open(url).focus();\n}\nfunction copyIntoClipBoard(setStatus) {\n    setStatus(\"copied !!\");\n    navigator.clipboard.writeText(GMAIL);\n    setTimeout(()=>{\n        setStatus(\"copie email\");\n    }, 2000);\n}\nfunction triggerAnimation(section1, section2, section3) {\n    let timing = 50;\n    for (let section of [\n        section1,\n        section2,\n        section3\n    ]){\n        setTimeout(()=>{\n            section.classList.add(\"animateWhenReady\");\n        }, timing);\n        timing = timing + 50;\n    }\n}\nfunction cleanCLasses(section1, section2, section3) {\n    for (let section of [\n        section1,\n        section2,\n        section3\n    ]){\n        section.classList.remove(\"animateWhenReady\");\n    }\n}\nfunction AboutMePage() {\n    _s();\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"copie email\");\n    const section1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const section2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const section3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const master = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(section1.current, false)) {\n            triggerAnimation(section1.current, section2.current, section3.current);\n            console.warn(\"DAAAAAMN\");\n        } else {\n            cleanCLasses(section1.current, section2.current, section3.current);\n            console.warn(\"NOT VISIBLEEEEE\");\n        }\n        // in case this is a touch device\n        if (\"ontouchstart\" in document.documentElement) {\n            convertTotoutch(pageElement.current);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"aboutMeMater\",\n        ref: master,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"aboutSection1\",\n                ref: section1,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"aboutPhoto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"./\",\n                            width: 150,\n                            height: 150\n                        }, void 0, false, {\n                            fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"aboutName\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dash\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dash\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dash\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"nameship\",\n                                children: \"Amine Meftah\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"aboutSection2\",\n                ref: section2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"abouttitle\",\n                        children: \"quick introduction\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"intro\",\n                        children: \"Hello! I'm Amine Meftah, a 21-year-old full-stack developer passionate about building seamless, efficient, and user-friendly applications. With experience across both front-end and back-end technologies, I bring a well-rounded approach to web development, tackling each project with a commitment to quality and a deep attention to detail. I’m always eager to expand my skill set and dive into new challenges, whether it’s creating dynamic interfaces or ensuring robust server-side performance. Welcome to my portfolio, where you can explore my projects and see my dedication to crafting exceptional digital experiences!\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"aboutSection3\",\n                ref: section3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"abouttitle\",\n                        children: \"Contact me \"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"copysection\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"gmailicon\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 77,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                onClick: ()=>{\n                                    copyIntoClipBoard(setStatus);\n                                },\n                                children: status\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>{\n                            gotoUrl(\"https://www.facebook.com\");\n                        },\n                        className: \"facebookicon\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>{\n                            gotoUrl(\"https://www.youtube.com\");\n                        },\n                        className: \"linkedinicon\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/thedeath/Desktop/portfolio/src/app/aboutMePage/page.js\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n}\n_s(AboutMePage, \"xjF0iOLDnMkeZjjs6iR6H9rS3cI=\");\n_c = AboutMePage;\nvar _c;\n$RefreshReg$(_c, \"AboutMePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWJvdXRNZVBhZ2UvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNvRDtBQUNoQztBQUNwQixNQUFNRyxRQUFRO0FBQ29DO0FBQ2xELFNBQVNFLFFBQVFDLEdBQUc7SUFDaEJDLE9BQU9DLElBQUksQ0FBQ0YsS0FBS0csS0FBSztBQUMxQjtBQUVBLFNBQVNDLGtCQUFrQkMsU0FBUztJQUNoQ0EsVUFBVTtJQUNWQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ1g7SUFDOUJZLFdBQVc7UUFDUEosVUFBVTtJQUNkLEdBQUc7QUFDUDtBQUVBLFNBQVNLLGlCQUFpQkMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFFBQVE7SUFDbEQsSUFBSUMsU0FBUztJQUNiLEtBQUssSUFBSUMsV0FBVztRQUFDSjtRQUFVQztRQUFVQztLQUFTLENBQUM7UUFDL0NKLFdBQVc7WUFDUE0sUUFBUUMsU0FBUyxDQUFDQyxHQUFHLENBQUM7UUFDMUIsR0FBR0g7UUFDSEEsU0FBU0EsU0FBUztJQUN0QjtBQUNKO0FBRUEsU0FBU0ksYUFBYVAsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFFBQVE7SUFDOUMsS0FBSyxJQUFJRSxXQUFXO1FBQUNKO1FBQVVDO1FBQVVDO0tBQVMsQ0FBQztRQUMvQ0UsUUFBUUMsU0FBUyxDQUFDRyxNQUFNLENBQUM7SUFDN0I7QUFDSjtBQUNlLFNBQVNDOztJQUNwQixNQUFNLENBQUNDLFFBQVFoQixVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1lLFdBQVdoQiw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNaUIsV0FBV2pCLDZDQUFNQSxDQUFDO0lBQ3hCLE1BQU1rQixXQUFXbEIsNkNBQU1BLENBQUM7SUFDeEIsTUFBTTJCLFNBQVMzQiw2Q0FBTUEsQ0FBQztJQUd0QkQsZ0RBQVNBLENBQUM7UUFDTixJQUFJSSxrREFBMEJBLENBQUNhLFNBQVNZLE9BQU8sRUFBRSxRQUFPO1lBQ3BEYixpQkFBaUJDLFNBQVNZLE9BQU8sRUFBRVgsU0FBU1csT0FBTyxFQUFFVixTQUFTVSxPQUFPO1lBQ3JFQyxRQUFRQyxJQUFJLENBQUM7UUFDakIsT0FDSTtZQUNBUCxhQUFhUCxTQUFTWSxPQUFPLEVBQUVYLFNBQVNXLE9BQU8sRUFBRVYsU0FBU1UsT0FBTztZQUNqRUMsUUFBUUMsSUFBSSxDQUFDO1FBQ2pCO1FBRUEsaUNBQWlDO1FBQ2pDLElBQUksa0JBQWtCQyxTQUFTQyxlQUFlLEVBQUU7WUFDNUNDLGdCQUFnQkMsWUFBWU4sT0FBTztRQUNyQztJQUNOO0lBRUEscUJBQ0ksOERBQUNPO1FBQUlDLFdBQVU7UUFBZUMsS0FBS1Y7OzBCQUMvQiw4REFBQ1E7Z0JBQUlDLFdBQVU7Z0JBQWdCQyxLQUFLckI7O2tDQUNoQyw4REFBQ21CO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRTs0QkFBSUMsS0FBSzs0QkFBTUMsT0FBTzs0QkFBS0MsUUFBUTs7Ozs7Ozs7Ozs7a0NBRXhDLDhEQUFDTjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOzs7Ozs7MENBQ2YsOERBQUNEO2dDQUFJQyxXQUFVOzs7Ozs7MENBQ2YsOERBQUNEO2dDQUFJQyxXQUFVOzs7Ozs7MENBQ2YsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2xDLDhEQUFDRDtnQkFBSUMsV0FBVTtnQkFBZ0JDLEtBQUtwQjs7a0NBQ2hDLDhEQUFDeUI7d0JBQUdOLFdBQVU7a0NBQWE7Ozs7OztrQ0FDM0IsOERBQUNPO3dCQUFFUCxXQUFVO2tDQUFROzs7Ozs7Ozs7Ozs7MEJBRXpCLDhEQUFDRDtnQkFBSUMsV0FBVTtnQkFBZ0JDLEtBQUtuQjs7a0NBQ2hDLDhEQUFDd0I7d0JBQUdOLFdBQVU7a0NBQWE7Ozs7OztrQ0FDM0IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7Ozs7OzswQ0FDZiw4REFBQ0Q7Z0NBQUlDLFdBQVU7Z0NBQUdRLFNBQVM7b0NBQUtuQyxrQkFBa0JDO2dDQUFVOzBDQUFJZ0I7Ozs7Ozs7Ozs7OztrQ0FFcEUsOERBQUNTO3dCQUNHUyxTQUFTOzRCQUFLeEMsUUFBUTt3QkFBMkI7d0JBQ2pEZ0MsV0FBVTs7Ozs7O2tDQUVkLDhEQUFDRDt3QkFDR1MsU0FBUzs0QkFBS3hDLFFBQVE7d0JBQTBCO3dCQUNoRGdDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QjtHQTFEd0JYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hYm91dE1lUGFnZS9wYWdlLmpzPzBkMWYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vcGFnZS5jc3NcIjtcbmNvbnN0IEdNQUlMID0gXCJhbWluZW1lZnRhaGxpbmtlZGluQGdtYWlsLmNvbVwiXG5pbXBvcnQgZWxlbWVudElzVmlzaWJsZUluVmlld3BvcnQgZnJvbSBcIi4uL3V0aWxzXCI7XG5mdW5jdGlvbiBnb3RvVXJsKHVybCl7XG4gICAgd2luZG93Lm9wZW4odXJsKS5mb2N1cygpO1xufVxuXG5mdW5jdGlvbiBjb3B5SW50b0NsaXBCb2FyZChzZXRTdGF0dXMpe1xuICAgIHNldFN0YXR1cyhcImNvcGllZCAhIVwiKTtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChHTUFJTCk7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICBzZXRTdGF0dXMoXCJjb3BpZSBlbWFpbFwiKTtcbiAgICB9LCAyMDAwKTtcbn1cblxuZnVuY3Rpb24gdHJpZ2dlckFuaW1hdGlvbihzZWN0aW9uMSwgc2VjdGlvbjIsIHNlY3Rpb24zKXtcbiAgICBsZXQgdGltaW5nID0gNTA7XG4gICAgZm9yIChsZXQgc2VjdGlvbiBvZiBbc2VjdGlvbjEsIHNlY3Rpb24yLCBzZWN0aW9uM10pe1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlV2hlblJlYWR5XCIpO1xuICAgICAgICB9LCB0aW1pbmcpO1xuICAgICAgICB0aW1pbmcgPSB0aW1pbmcgKyA1MDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFuQ0xhc3NlcyhzZWN0aW9uMSwgc2VjdGlvbjIsIHNlY3Rpb24zKXtcbiAgICBmb3IgKGxldCBzZWN0aW9uIG9mIFtzZWN0aW9uMSwgc2VjdGlvbjIsIHNlY3Rpb24zXSl7XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVXaGVuUmVhZHlcIik7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRNZVBhZ2UoKXtcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJjb3BpZSBlbWFpbFwiKTtcbiAgICBjb25zdCBzZWN0aW9uMSA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBzZWN0aW9uMiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBzZWN0aW9uMyA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBtYXN0ZXIgPSB1c2VSZWYobnVsbCk7XG5cblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoZWxlbWVudElzVmlzaWJsZUluVmlld3BvcnQoc2VjdGlvbjEuY3VycmVudCwgZmFsc2UpKXtcbiAgICAgICAgICAgIHRyaWdnZXJBbmltYXRpb24oc2VjdGlvbjEuY3VycmVudCwgc2VjdGlvbjIuY3VycmVudCwgc2VjdGlvbjMuY3VycmVudCk7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJEQUFBQUFNTlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY2xlYW5DTGFzc2VzKHNlY3Rpb24xLmN1cnJlbnQsIHNlY3Rpb24yLmN1cnJlbnQsIHNlY3Rpb24zLmN1cnJlbnQpO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTk9UIFZJU0lCTEVFRUVFXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW4gY2FzZSB0aGlzIGlzIGEgdG91Y2ggZGV2aWNlXG4gICAgICAgIGlmIChcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICAgY29udmVydFRvdG91dGNoKHBhZ2VFbGVtZW50LmN1cnJlbnQpO1xuICAgICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRNZU1hdGVyXCIgcmVmPXttYXN0ZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFNlY3Rpb24xXCIgcmVmPXtzZWN0aW9uMX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFBob3RvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi4vXCJ9IHdpZHRoPXsxNTB9IGhlaWdodD17MTUwfT48L2ltZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVzaGlwXCI+QW1pbmUgTWVmdGFoPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRTZWN0aW9uMlwiIHJlZj17c2VjdGlvbjJ9PlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJhYm91dHRpdGxlXCI+cXVpY2sgaW50cm9kdWN0aW9uPC9oNT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbnRyb1wiPkhlbGxvISBJJ20gQW1pbmUgTWVmdGFoLCBhIDIxLXllYXItb2xkIGZ1bGwtc3RhY2sgZGV2ZWxvcGVyIHBhc3Npb25hdGUgYWJvdXQgYnVpbGRpbmcgc2VhbWxlc3MsIGVmZmljaWVudCwgYW5kIHVzZXItZnJpZW5kbHkgYXBwbGljYXRpb25zLiBXaXRoIGV4cGVyaWVuY2UgYWNyb3NzIGJvdGggZnJvbnQtZW5kIGFuZCBiYWNrLWVuZCB0ZWNobm9sb2dpZXMsIEkgYnJpbmcgYSB3ZWxsLXJvdW5kZWQgYXBwcm9hY2ggdG8gd2ViIGRldmVsb3BtZW50LCB0YWNrbGluZyBlYWNoIHByb2plY3Qgd2l0aCBhIGNvbW1pdG1lbnQgdG8gcXVhbGl0eSBhbmQgYSBkZWVwIGF0dGVudGlvbiB0byBkZXRhaWwuIEnigJltIGFsd2F5cyBlYWdlciB0byBleHBhbmQgbXkgc2tpbGwgc2V0IGFuZCBkaXZlIGludG8gbmV3IGNoYWxsZW5nZXMsIHdoZXRoZXIgaXTigJlzIGNyZWF0aW5nIGR5bmFtaWMgaW50ZXJmYWNlcyBvciBlbnN1cmluZyByb2J1c3Qgc2VydmVyLXNpZGUgcGVyZm9ybWFuY2UuIFdlbGNvbWUgdG8gbXkgcG9ydGZvbGlvLCB3aGVyZSB5b3UgY2FuIGV4cGxvcmUgbXkgcHJvamVjdHMgYW5kIHNlZSBteSBkZWRpY2F0aW9uIHRvIGNyYWZ0aW5nIGV4Y2VwdGlvbmFsIGRpZ2l0YWwgZXhwZXJpZW5jZXMhPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0U2VjdGlvbjNcIiByZWY9e3NlY3Rpb24zfT5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiYWJvdXR0aXRsZVwiPkNvbnRhY3QgbWUgPC9oNT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ21haWxpY29uXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgb25DbGljaz17KCk9Pntjb3B5SW50b0NsaXBCb2FyZChzZXRTdGF0dXMpfX0+e3N0YXR1c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57Z290b1VybChcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbVwiKX19IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYWNlYm9va2ljb25cIiBcbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9Pntnb3RvVXJsKFwiaHR0cHM6Ly93d3cueW91dHViZS5jb21cIil9fSBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlua2VkaW5pY29uXCIgXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJHTUFJTCIsImVsZW1lbnRJc1Zpc2libGVJblZpZXdwb3J0IiwiZ290b1VybCIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJmb2N1cyIsImNvcHlJbnRvQ2xpcEJvYXJkIiwic2V0U3RhdHVzIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0VGltZW91dCIsInRyaWdnZXJBbmltYXRpb24iLCJzZWN0aW9uMSIsInNlY3Rpb24yIiwic2VjdGlvbjMiLCJ0aW1pbmciLCJzZWN0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xlYW5DTGFzc2VzIiwicmVtb3ZlIiwiQWJvdXRNZVBhZ2UiLCJzdGF0dXMiLCJtYXN0ZXIiLCJjdXJyZW50IiwiY29uc29sZSIsIndhcm4iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNvbnZlcnRUb3RvdXRjaCIsInBhZ2VFbGVtZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwiaW1nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJoNSIsInAiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/aboutMePage/page.js\n"));

/***/ })

});