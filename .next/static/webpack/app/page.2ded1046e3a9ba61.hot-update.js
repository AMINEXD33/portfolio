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

/***/ "(app-pages-browser)/./src/app/technologies/page.js":
/*!**************************************!*\
  !*** ./src/app/technologies/page.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Technologies)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./src/app/technologies/page.css\");\n/* harmony import */ var _imgs_react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/react.svg */ \"(app-pages-browser)/./src/app/imgs/react.svg\");\n/* harmony import */ var _imgs_mysql_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/mysql.svg */ \"(app-pages-browser)/./src/app/imgs/mysql.svg\");\n/* harmony import */ var _imgs_python_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/python.svg */ \"(app-pages-browser)/./src/app/imgs/python.svg\");\n/* harmony import */ var _imgs_js_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/js.svg */ \"(app-pages-browser)/./src/app/imgs/js.svg\");\n/* harmony import */ var _imgs_php_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../imgs/php.svg */ \"(app-pages-browser)/./src/app/imgs/php.svg\");\n/* harmony import */ var _imgs_redis_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../imgs/redis.svg */ \"(app-pages-browser)/./src/app/imgs/redis.svg\");\n/* harmony import */ var _imgs_next_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../imgs/next.svg */ \"(app-pages-browser)/./src/app/imgs/next.svg\");\n/* harmony import */ var _imgs_django_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../imgs/django.svg */ \"(app-pages-browser)/./src/app/imgs/django.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./src/app/utils.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction activateAnimation(element) {\n    const allShips = element.getElementsByClassName(\"ship\");\n    console.warn(allShips);\n    let delay = 10;\n    for(let x = 0; x < allShips.length; x++){\n        setTimeout(()=>{\n            allShips[x].classList.add(\"ships_active\");\n            allShips[x].classList.add(\"shipONhover\");\n        }, delay + 20);\n    }\n}\nfunction desactivateAnimation(element) {\n    const allShips = element.getElementsByClassName(\"ship\");\n    for(let x = 0; x < allShips.length; x++){\n        allShips[x].classList.remove(\"ships_active\");\n    }\n}\nfunction Technologies() {\n    _s();\n    let shipsContainer = (0,react__WEBPACK_IMPORTED_MODULE_12__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{\n        console.warn(\"this\");\n        if ((0,_utils__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(shipsContainer.current, false)) {\n            activateAnimation(shipsContainer.current);\n        } else {\n            desactivateAnimation(shipsContainer.current);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"technomaster\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shipsContainer\",\n                ref: shipsContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ship\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            className: \"shipimg\",\n                            src: _imgs_react_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                            height: 70,\n                            alt: \"react\"\n                        }, void 0, false, {\n                            fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ship\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            className: \"shipimg\",\n                            src: _imgs_mysql_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            height: 70,\n                            alt: \"react\"\n                        }, void 0, false, {\n                            fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                            lineNumber: 52,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ship\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            className: \"shipimg\",\n                            src: _imgs_python_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            height: 70,\n                            alt: \"react\"\n                        }, void 0, false, {\n                            fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                            lineNumber: 55,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ship\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            className: \"shipimg\",\n                            src: _imgs_js_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            height: 70,\n                            alt: \"react\"\n                        }, void 0, false, {\n                            fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                            lineNumber: 58,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ship\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            className: \"shipimg\",\n                            src: _imgs_php_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            height: 70,\n                            alt: \"react\"\n                        }, void 0, false, {\n                            fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ship\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            className: \"shipimg\",\n                            src: _imgs_redis_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                            height: 70,\n                            alt: \"react\"\n                        }, void 0, false, {\n                            fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ship\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            className: \"shipimg\",\n                            src: _imgs_next_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                            height: 70,\n                            alt: \"react\"\n                        }, void 0, false, {\n                            fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ship\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            className: \"shipimg\",\n                            src: _imgs_django_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                            height: 70,\n                            alt: \"react\"\n                        }, void 0, false, {\n                            fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                            lineNumber: 70,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"concepts\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"coceptsTitle\",\n                        children: \"Acquired concepts\"\n                    }, void 0, false, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"conceptsList topbottom\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Algorithms\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"System design\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Data-structure\"\n                            }, void 0, false, {\n                                fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                                lineNumber: 79,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/thedeath/Desktop/portfolio/src/app/technologies/page.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Technologies, \"YBt/WKRrN75YETuVf+1F6pBSodo=\");\n_c = Technologies;\nvar _c;\n$RefreshReg$(_c, \"Technologies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGVjaG5vbG9naWVzL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0I7QUFDa0I7QUFDQTtBQUNFO0FBQ1I7QUFDRTtBQUNJO0FBQ0Y7QUFDSTtBQUNUO0FBQ21CO0FBQ1I7QUFFMUMsU0FBU1ksa0JBQWtCQyxPQUFPO0lBQ2hDLE1BQU1DLFdBQVdELFFBQVFFLHNCQUFzQixDQUFDO0lBQ2hEQyxRQUFRQyxJQUFJLENBQUNIO0lBQ2IsSUFBSUksUUFBUTtJQUNaLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJTCxTQUFTTSxNQUFNLEVBQUVELElBQUk7UUFDdkNFLFdBQVc7WUFDVFAsUUFBUSxDQUFDSyxFQUFFLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1lBQzFCVCxRQUFRLENBQUNLLEVBQUUsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUM7UUFDNUIsR0FBR0wsUUFBTTtJQUNYO0FBQ0Y7QUFDQSxTQUFTTSxxQkFBcUJYLE9BQU87SUFDbkMsTUFBTUMsV0FBV0QsUUFBUUUsc0JBQXNCLENBQUM7SUFDaEQsSUFBSyxJQUFJSSxJQUFJLEdBQUdBLElBQUlMLFNBQVNNLE1BQU0sRUFBRUQsSUFBSTtRQUN2Q0wsUUFBUSxDQUFDSyxFQUFFLENBQUNHLFNBQVMsQ0FBQ0csTUFBTSxDQUFDO0lBQy9CO0FBRUY7QUFDZSxTQUFTQzs7SUFDdEIsSUFBSUMsaUJBQWlCaEIsOENBQU1BLENBQUM7SUFHNUJELGlEQUFTQSxDQUFDO1FBQ1JNLFFBQVFDLElBQUksQ0FBQztRQUNiLElBQUlSLG1EQUEwQkEsQ0FBQ2tCLGVBQWVDLE9BQU8sRUFBRSxRQUFPO1lBQzVEaEIsa0JBQWtCZSxlQUFlQyxPQUFPO1FBQzFDLE9BQ0k7WUFDRkoscUJBQXFCRyxlQUFlQyxPQUFPO1FBQzdDO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVO2dCQUFpQkMsS0FBS0o7O2tDQUNuQyw4REFBQ0U7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUN0QixtREFBS0E7NEJBQUNzQixXQUFVOzRCQUFVRSxLQUFLaEMsdURBQUtBOzRCQUFFaUMsUUFBUTs0QkFBSUMsS0FBSTs7Ozs7Ozs7Ozs7a0NBRXpELDhEQUFDTDt3QkFBSUMsV0FBVTtrQ0FDZiw0RUFBQ3RCLG1EQUFLQTs0QkFBQ3NCLFdBQVU7NEJBQVVFLEtBQUsvQix1REFBS0E7NEJBQUVnQyxRQUFROzRCQUFJQyxLQUFJOzs7Ozs7Ozs7OztrQ0FFdkQsOERBQUNMO3dCQUFJQyxXQUFVO2tDQUNmLDRFQUFDdEIsbURBQUtBOzRCQUFDc0IsV0FBVTs0QkFBVUUsS0FBSzlCLHdEQUFNQTs0QkFBRStCLFFBQVE7NEJBQUlDLEtBQUk7Ozs7Ozs7Ozs7O2tDQUV4RCw4REFBQ0w7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUN0QixtREFBS0E7NEJBQUNzQixXQUFVOzRCQUFVRSxLQUFLN0Isb0RBQUVBOzRCQUFFOEIsUUFBUTs0QkFBSUMsS0FBSTs7Ozs7Ozs7Ozs7a0NBRXBELDhEQUFDTDt3QkFBSUMsV0FBVTtrQ0FDZiw0RUFBQ3RCLG1EQUFLQTs0QkFBQ3NCLFdBQVU7NEJBQVVFLEtBQUs1QixxREFBR0E7NEJBQUU2QixRQUFROzRCQUFJQyxLQUFJOzs7Ozs7Ozs7OztrQ0FFckQsOERBQUNMO3dCQUFJQyxXQUFVO2tDQUNmLDRFQUFDdEIsbURBQUtBOzRCQUFDc0IsV0FBVTs0QkFBVUUsS0FBSzNCLHVEQUFLQTs0QkFBRTRCLFFBQVE7NEJBQUlDLEtBQUk7Ozs7Ozs7Ozs7O2tDQUV2RCw4REFBQ0w7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUN0QixtREFBS0E7NEJBQUNzQixXQUFVOzRCQUFVRSxLQUFLMUIsc0RBQUlBOzRCQUFFMkIsUUFBUTs0QkFBSUMsS0FBSTs7Ozs7Ozs7Ozs7a0NBRXRELDhEQUFDTDt3QkFBSUMsV0FBVTtrQ0FDZiw0RUFBQ3RCLG1EQUFLQTs0QkFBQ3NCLFdBQVU7NEJBQVVFLEtBQUt6Qix3REFBTUE7NEJBQUUwQixRQUFROzRCQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJMUQsOERBQUNMO2dCQUFJQyxXQUFVOztrQ0FDVCw4REFBQ0s7d0JBQUdMLFdBQVU7a0NBQWdCOzs7Ozs7a0NBQzlCLDhEQUFDTTt3QkFBR04sV0FBVTs7MENBQ1YsOERBQUNPOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0FwRHdCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvdGVjaG5vbG9naWVzL3BhZ2UuanM/NTc3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3BhZ2UuY3NzXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIi4uL2ltZ3MvcmVhY3Quc3ZnXCI7XG5pbXBvcnQgbXlzcWwgZnJvbSBcIi4uL2ltZ3MvbXlzcWwuc3ZnXCI7XG5pbXBvcnQgcHl0aG9uIGZyb20gXCIuLi9pbWdzL3B5dGhvbi5zdmdcIjtcbmltcG9ydCBqcyBmcm9tIFwiLi4vaW1ncy9qcy5zdmdcIjtcbmltcG9ydCBwaHAgZnJvbSBcIi4uL2ltZ3MvcGhwLnN2Z1wiO1xuaW1wb3J0IHJlZGlzIGZyb20gXCIuLi9pbWdzL3JlZGlzLnN2Z1wiO1xuaW1wb3J0IG5leHQgZnJvbSBcIi4uL2ltZ3MvbmV4dC5zdmdcIjtcbmltcG9ydCBkamFuZ28gZnJvbSBcIi4uL2ltZ3MvZGphbmdvLnN2Z1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgZWxlbWVudElzVmlzaWJsZUluVmlld3BvcnQgZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBhY3RpdmF0ZUFuaW1hdGlvbihlbGVtZW50KXtcbiAgY29uc3QgYWxsU2hpcHMgPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzaGlwXCIpO1xuICBjb25zb2xlLndhcm4oYWxsU2hpcHMpO1xuICBsZXQgZGVsYXkgPSAxMDtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBhbGxTaGlwcy5sZW5ndGg7IHgrKyl7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgYWxsU2hpcHNbeF0uY2xhc3NMaXN0LmFkZChcInNoaXBzX2FjdGl2ZVwiKTtcbiAgICAgIGFsbFNoaXBzW3hdLmNsYXNzTGlzdC5hZGQoXCJzaGlwT05ob3ZlclwiKTtcbiAgICB9LCBkZWxheSsyMCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGRlc2FjdGl2YXRlQW5pbWF0aW9uKGVsZW1lbnQpe1xuICBjb25zdCBhbGxTaGlwcyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNoaXBcIik7XG4gIGZvciAobGV0IHggPSAwOyB4IDwgYWxsU2hpcHMubGVuZ3RoOyB4Kyspe1xuICAgIGFsbFNoaXBzW3hdLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwc19hY3RpdmVcIik7XG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVjaG5vbG9naWVzKCkge1xuICBsZXQgc2hpcHNDb250YWluZXIgPSB1c2VSZWYobnVsbCk7XG5cblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zb2xlLndhcm4oXCJ0aGlzXCIpXG4gICAgaWYgKGVsZW1lbnRJc1Zpc2libGVJblZpZXdwb3J0KHNoaXBzQ29udGFpbmVyLmN1cnJlbnQsIGZhbHNlKSl7XG4gICAgICBhY3RpdmF0ZUFuaW1hdGlvbihzaGlwc0NvbnRhaW5lci5jdXJyZW50KTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGRlc2FjdGl2YXRlQW5pbWF0aW9uKHNoaXBzQ29udGFpbmVyLmN1cnJlbnQpO1xuICAgIH1cbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2hub21hc3RlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwc0NvbnRhaW5lclwiIHJlZj17c2hpcHNDb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBcIj5cbiAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwic2hpcGltZ1wiIHNyYz17cmVhY3R9IGhlaWdodD17NzB9IGFsdD1cInJlYWN0XCI+PC9JbWFnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcFwiPlxuICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwic2hpcGltZ1wiIHNyYz17bXlzcWx9IGhlaWdodD17NzB9IGFsdD1cInJlYWN0XCI+PC9JbWFnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcFwiPlxuICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwic2hpcGltZ1wiIHNyYz17cHl0aG9ufSBoZWlnaHQ9ezcwfSBhbHQ9XCJyZWFjdFwiPjwvSW1hZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBcIj5cbiAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInNoaXBpbWdcIiBzcmM9e2pzfSBoZWlnaHQ9ezcwfSBhbHQ9XCJyZWFjdFwiPjwvSW1hZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBcIj5cbiAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInNoaXBpbWdcIiBzcmM9e3BocH0gaGVpZ2h0PXs3MH0gYWx0PVwicmVhY3RcIj48L0ltYWdlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwXCI+XG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJzaGlwaW1nXCIgc3JjPXtyZWRpc30gaGVpZ2h0PXs3MH0gYWx0PVwicmVhY3RcIj48L0ltYWdlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwXCI+XG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJzaGlwaW1nXCIgc3JjPXtuZXh0fSBoZWlnaHQ9ezcwfSBhbHQ9XCJyZWFjdFwiPjwvSW1hZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBcIj5cbiAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInNoaXBpbWdcIiBzcmM9e2RqYW5nb30gaGVpZ2h0PXs3MH0gYWx0PVwicmVhY3RcIj48L0ltYWdlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmNlcHRzXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY29jZXB0c1RpdGxlXCIgPkFjcXVpcmVkIGNvbmNlcHRzPC9oNT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb25jZXB0c0xpc3QgdG9wYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgPGxpPkFsZ29yaXRobXM8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5TeXN0ZW0gZGVzaWduPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+RGF0YS1zdHJ1Y3R1cmU8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsicmVhY3QiLCJteXNxbCIsInB5dGhvbiIsImpzIiwicGhwIiwicmVkaXMiLCJuZXh0IiwiZGphbmdvIiwiSW1hZ2UiLCJlbGVtZW50SXNWaXNpYmxlSW5WaWV3cG9ydCIsInVzZUVmZmVjdCIsInVzZVJlZiIsImFjdGl2YXRlQW5pbWF0aW9uIiwiZWxlbWVudCIsImFsbFNoaXBzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwiZGVsYXkiLCJ4IiwibGVuZ3RoIiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsImRlc2FjdGl2YXRlQW5pbWF0aW9uIiwicmVtb3ZlIiwiVGVjaG5vbG9naWVzIiwic2hpcHNDb250YWluZXIiLCJjdXJyZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwic3JjIiwiaGVpZ2h0IiwiYWx0IiwiaDUiLCJ1bCIsImxpIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/technologies/page.js\n"));

/***/ })

});