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

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/page */ \"(app-pages-browser)/./src/app/page/page.js\");\n/* harmony import */ var _titlePage_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./titlePage/page */ \"(app-pages-browser)/./src/app/titlePage/page.js\");\n/* harmony import */ var _firstPage_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firstPage/page */ \"(app-pages-browser)/./src/app/firstPage/page.js\");\n/* harmony import */ var _aboutMePage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aboutMePage/page */ \"(app-pages-browser)/./src/app/aboutMePage/page.js\");\n/* harmony import */ var _technologies_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./technologies/page */ \"(app-pages-browser)/./src/app/technologies/page.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst LIMIT = 5;\nfunction Home() {\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const pageElement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [scrollLock, setScrollLock] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let [rotation, setRotation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        transitionRule(pageElement.current, rotation, page, setPage, setRotation, setScrollLock);\n    }, [\n        rotation\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.warn(\"current page\", page);\n    }, [\n        page\n    ]);\n    // just one time to at the start\n    // check if we're a scrolling or toutching device\n    // if toutching switch the overflow\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (\"ontouchstart\" in document.documentElement) {\n            convertTotoutch(pageElement.current);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        ref: pageElement,\n        onWheel: (event)=>{\n            handleScrolling(event, rotation, setRotation, scrollLock);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                rotation: rotation,\n                ElementAnimationCallBack: scrollingAnimationOne,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_firstPage_page__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/thedeath/Desktop/portfolio/src/app/page.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/page.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                rotation: rotation,\n                ElementAnimationCallBack: scrollingAnimationOne,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_titlePage_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    title: \"About me?\"\n                }, void 0, false, {\n                    fileName: \"/home/thedeath/Desktop/portfolio/src/app/page.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/page.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                rotation: rotation,\n                ElementAnimationCallBack: scrollingAnimationOne,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_aboutMePage_page__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/thedeath/Desktop/portfolio/src/app/page.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/page.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                rotation: rotation,\n                ElementAnimationCallBack: scrollingAnimationOne,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_titlePage_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    title: \"Technologies and Languages I worked with\"\n                }, void 0, false, {\n                    fileName: \"/home/thedeath/Desktop/portfolio/src/app/page.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/page.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                rotation: rotation,\n                ElementAnimationCallBack: scrollingAnimationOne,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_technologies_page__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/thedeath/Desktop/portfolio/src/app/page.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/thedeath/Desktop/portfolio/src/app/page.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/thedeath/Desktop/portfolio/src/app/page.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OIpFbtnTwenoYNksz+Ibqq6DH38=\");\n_c = Home;\n/**\n * A function that returns the next page with respect to\n * the LIMIT set\n * @param {number} current the current page\n * @returns the next page\n */ function goNextPage(current) {\n    if (current + 1 >= LIMIT) {\n        console.warn(\"next page is \", LIMIT - 1); // Stay on the last page\n        return LIMIT - 1;\n    }\n    console.warn(\"next page is \", current + 1);\n    return current + 1;\n}\n/**\n * A function that returns the previous page with respect\n * to the LIMIT set\n * @param {*} current the current page\n * @returns the previous page\n */ function goPrevPage(current) {\n    if (current - 1 < 0) {\n        console.warn(\"prev page is \", 0); // Stay on the first page\n        return 0;\n    }\n    console.warn(\"prev page is \", current - 1);\n    return current - 1;\n}\n/**\n * A function that canculates the jump from a slide to an other\n * Slide\n * @param {*} pageElement the page element (the container)\n * @param {*} targetPage the number of the target page 0 to X\n */ function pageTransitionTrigger(pageElement, targetPage) {\n    const maxHeight = window.innerHeight;\n    pageElement.scrollTo({\n        top: targetPage * maxHeight,\n        behavior: \"smooth\"\n    });\n}\n/**\n * A scrolling animation\n * @param {*} element the element\n * @param {*} rotation the value of the rotation or (animation stage tracker)\n */ function scrollingAnimationOne(element, rotation) {\n    console.log(\"element\", element);\n    if (element) {\n        if (rotation < 0) {\n            element.style.filter = \"blur(\".concat(rotation * -1, \"px)\");\n            element.style.transform = \"translateY(-\".concat(rotation * 4, \"px)\");\n        } else {\n            element.style.filter = \"blur(\".concat(rotation, \"px)\");\n            element.style.transform = \"translateY(-\".concat(rotation * 4, \"px)\");\n        }\n    }\n}\n/**\n * This function change the rotation value with respect to the\n * scrolling direction\n * @param {*} event the event of the scrolling\n * @param {number} rotation the value of rotation\n * @param {Function} setRotation a setter for rotation\n * @param {*} scrollLock scroll lock\n */ function handleScrolling(event, rotation, setRotation, scrollLock) {\n    function shouldIskipThis(event) {\n        const skipableClasses = [\n            \"ship\",\n            \"shipsContainer\"\n        ];\n        const werePointingOn = document.elementFromPoint(event.clientX, event.clientY);\n        for(let x = 0; x < skipableClasses; x++){\n            if (werePointingOn.classList.contains(skipableClasses[x])) {\n                return true;\n            }\n        }\n        return false;\n    }\n    if (shouldIskipThis(event)) {\n        return;\n    }\n    if (scrollLock) {\n        // scrolling is locked\n        return;\n    }\n    if (event.deltaY > 0) {\n        setRotation(rotation + 1);\n    } else if (event.deltaY === 0) {\n    // pass\n    } else {\n        setRotation(rotation - 1);\n    }\n}\n/**\n * this function tracks if the rotation value is above or bellow\n * a threashold, if so the next page will be calculated\n * the rotation value is reseted , a page transition is triggered\n * and a lock for scrolling is set for 1.5 seconds\n * @param {*} pageElement the pageElemen (container)\n * @param {*} rotation the rotation current value\n * @param {*} page page number\n * @param {*} setPage set page number value\n * @param {*} setRotation  set rotation value\n * @param {*} setScrollLock set scroll lock value\n */ function transitionRule(pageElement, rotation, page, setPage, setRotation, setScrollLock) {\n    if (rotation >= 10) {\n        const targetPage = goNextPage(page);\n        setPage(targetPage);\n        setRotation(0);\n        pageTransitionTrigger(pageElement, targetPage);\n        setScrollLock(true);\n        setTimeout(()=>{\n            setScrollLock(false);\n        }, 500);\n        console.warn(\"+readjusting pageRef\", targetPage);\n    } else if (rotation <= -10) {\n        const targetPage = goPrevPage(page);\n        setPage(targetPage);\n        setRotation(0);\n        pageTransitionTrigger(pageElement, targetPage);\n        setScrollLock(true);\n        setTimeout(()=>{\n            setScrollLock(false);\n        }, 500);\n        console.warn(\"+readjusting pageRef\", targetPage);\n    }\n}\n/**\n * allow overflow for page Element\n * @param {HTMLElement} pageElement\n */ function convertTotoutch(pageElement) {\n    pageElement.style.overflow = \"visible\";\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNKQyxPQUFPLEVBQ1BLLFdBQVcsRUFDWEYsYUFBYTtJQUViLElBQUlDLFlBQVksSUFBSTtRQUNsQixNQUFNcUIsYUFBYUgsV0FBV3ZCO1FBQzlCQyxRQUFReUI7UUFDUnBCLFlBQVk7UUFDWm1CLHNCQUFzQnZCLGFBQWF3QjtRQUNuQ3RCLGNBQWM7UUFDZDRDLFdBQVc7WUFDVDVDLGNBQWM7UUFDaEIsR0FBRztRQUNISyxRQUFRQyxJQUFJLENBQUMsd0JBQXdCZ0I7SUFDdkMsT0FBTyxJQUFJckIsWUFBWSxDQUFDLElBQUk7UUFDMUIsTUFBTXFCLGFBQWFGLFdBQVd4QjtRQUM5QkMsUUFBUXlCO1FBQ1JwQixZQUFZO1FBQ1ptQixzQkFBc0J2QixhQUFhd0I7UUFDbkN0QixjQUFjO1FBQ2Q0QyxXQUFXO1lBQ1Q1QyxjQUFjO1FBQ2hCLEdBQUc7UUFDSEssUUFBUUMsSUFBSSxDQUFDLHdCQUF3QmdCO0lBQ3ZDO0FBQ0Y7QUFFQTs7O0NBR0MsR0FDRCxTQUFTYixnQkFBZ0JYLFdBQVc7SUFDbENBLFlBQVlpQyxLQUFLLENBQUNjLFFBQVEsR0FBRztBQUMvQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFBhZ2VJbnRldHkgZnJvbSBcIi4vcGFnZS9wYWdlXCI7XG5pbXBvcnQgVGl0bGVQYWdlIGZyb20gXCIuL3RpdGxlUGFnZS9wYWdlXCI7XG5pbXBvcnQgRmlyc3RQYWdlIGZyb20gXCIuL2ZpcnN0UGFnZS9wYWdlXCI7XG5pbXBvcnQgQWJvdXRNZVBhZ2UgZnJvbSBcIi4vYWJvdXRNZVBhZ2UvcGFnZVwiO1xuaW1wb3J0IFRlY2hub2xvZ2llcyBmcm9tIFwiLi90ZWNobm9sb2dpZXMvcGFnZVwiO1xuY29uc3QgTElNSVQgPSA1O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgcGFnZUVsZW1lbnQgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtzY3JvbGxMb2NrLCBzZXRTY3JvbGxMb2NrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IFtyb3RhdGlvbiwgc2V0Um90YXRpb25dID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0cmFuc2l0aW9uUnVsZShcbiAgICAgIHBhZ2VFbGVtZW50LmN1cnJlbnQsXG4gICAgICByb3RhdGlvbixcbiAgICAgIHBhZ2UsXG4gICAgICBzZXRQYWdlLFxuICAgICAgc2V0Um90YXRpb24sXG4gICAgICBzZXRTY3JvbGxMb2NrXG4gICAgKTtcbiAgfSwgW3JvdGF0aW9uXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXCJjdXJyZW50IHBhZ2VcIiwgcGFnZSk7XG4gIH0sIFtwYWdlXSk7XG5cbiAgLy8ganVzdCBvbmUgdGltZSB0byBhdCB0aGUgc3RhcnRcbiAgLy8gY2hlY2sgaWYgd2UncmUgYSBzY3JvbGxpbmcgb3IgdG91dGNoaW5nIGRldmljZVxuICAvLyBpZiB0b3V0Y2hpbmcgc3dpdGNoIHRoZSBvdmVyZmxvd1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgY29udmVydFRvdG91dGNoKHBhZ2VFbGVtZW50LmN1cnJlbnQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwibWFpblwiXG4gICAgICByZWY9e3BhZ2VFbGVtZW50fVxuICAgICAgb25XaGVlbD17KGV2ZW50KSA9PiB7XG4gICAgICAgIGhhbmRsZVNjcm9sbGluZyhldmVudCwgcm90YXRpb24sIHNldFJvdGF0aW9uLCBzY3JvbGxMb2NrKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFBhZ2VJbnRldHlcbiAgICAgICAgcm90YXRpb249e3JvdGF0aW9ufVxuICAgICAgICBFbGVtZW50QW5pbWF0aW9uQ2FsbEJhY2s9e3Njcm9sbGluZ0FuaW1hdGlvbk9uZX1cbiAgICAgID5cbiAgICAgICAgPEZpcnN0UGFnZSAvPlxuICAgICAgPC9QYWdlSW50ZXR5PlxuXG4gICAgICA8UGFnZUludGV0eVxuICAgICAgICByb3RhdGlvbj17cm90YXRpb259XG4gICAgICAgIEVsZW1lbnRBbmltYXRpb25DYWxsQmFjaz17c2Nyb2xsaW5nQW5pbWF0aW9uT25lfVxuICAgICAgPlxuICAgICAgICA8VGl0bGVQYWdlIHRpdGxlPXtcIkFib3V0IG1lP1wifSAvPlxuICAgICAgPC9QYWdlSW50ZXR5PlxuXG4gICAgICA8UGFnZUludGV0eVxuICAgICAgICByb3RhdGlvbj17cm90YXRpb259XG4gICAgICAgIEVsZW1lbnRBbmltYXRpb25DYWxsQmFjaz17c2Nyb2xsaW5nQW5pbWF0aW9uT25lfVxuICAgICAgPlxuICAgICAgICA8QWJvdXRNZVBhZ2UgLz5cbiAgICAgIDwvUGFnZUludGV0eT5cblxuICAgICAgPFBhZ2VJbnRldHlcbiAgICAgICAgcm90YXRpb249e3JvdGF0aW9ufVxuICAgICAgICBFbGVtZW50QW5pbWF0aW9uQ2FsbEJhY2s9e3Njcm9sbGluZ0FuaW1hdGlvbk9uZX1cbiAgICAgID5cbiAgICAgICAgPFRpdGxlUGFnZSB0aXRsZT17XCJUZWNobm9sb2dpZXMgYW5kIExhbmd1YWdlcyBJIHdvcmtlZCB3aXRoXCJ9IC8+XG4gICAgICA8L1BhZ2VJbnRldHk+XG5cbiAgICAgIDxQYWdlSW50ZXR5XG4gICAgICAgIHJvdGF0aW9uPXtyb3RhdGlvbn1cbiAgICAgICAgRWxlbWVudEFuaW1hdGlvbkNhbGxCYWNrPXtzY3JvbGxpbmdBbmltYXRpb25PbmV9XG4gICAgICA+XG4gICAgICAgIDxUZWNobm9sb2dpZXMvPlxuICAgICAgPC9QYWdlSW50ZXR5PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHBhZ2Ugd2l0aCByZXNwZWN0IHRvXG4gKiB0aGUgTElNSVQgc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gY3VycmVudCB0aGUgY3VycmVudCBwYWdlXG4gKiBAcmV0dXJucyB0aGUgbmV4dCBwYWdlXG4gKi9cbmZ1bmN0aW9uIGdvTmV4dFBhZ2UoY3VycmVudCkge1xuICBpZiAoY3VycmVudCArIDEgPj0gTElNSVQpIHtcbiAgICBjb25zb2xlLndhcm4oXCJuZXh0IHBhZ2UgaXMgXCIsIExJTUlUIC0gMSk7IC8vIFN0YXkgb24gdGhlIGxhc3QgcGFnZVxuICAgIHJldHVybiBMSU1JVCAtIDE7XG4gIH1cbiAgY29uc29sZS53YXJuKFwibmV4dCBwYWdlIGlzIFwiLCBjdXJyZW50ICsgMSk7XG4gIHJldHVybiBjdXJyZW50ICsgMTtcbn1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgcHJldmlvdXMgcGFnZSB3aXRoIHJlc3BlY3RcbiAqIHRvIHRoZSBMSU1JVCBzZXRcbiAqIEBwYXJhbSB7Kn0gY3VycmVudCB0aGUgY3VycmVudCBwYWdlXG4gKiBAcmV0dXJucyB0aGUgcHJldmlvdXMgcGFnZVxuICovXG5mdW5jdGlvbiBnb1ByZXZQYWdlKGN1cnJlbnQpIHtcbiAgaWYgKGN1cnJlbnQgLSAxIDwgMCkge1xuICAgIGNvbnNvbGUud2FybihcInByZXYgcGFnZSBpcyBcIiwgMCk7IC8vIFN0YXkgb24gdGhlIGZpcnN0IHBhZ2VcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zb2xlLndhcm4oXCJwcmV2IHBhZ2UgaXMgXCIsIGN1cnJlbnQgLSAxKTtcbiAgcmV0dXJuIGN1cnJlbnQgLSAxO1xufVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBjYW5jdWxhdGVzIHRoZSBqdW1wIGZyb20gYSBzbGlkZSB0byBhbiBvdGhlclxuICogU2xpZGVcbiAqIEBwYXJhbSB7Kn0gcGFnZUVsZW1lbnQgdGhlIHBhZ2UgZWxlbWVudCAodGhlIGNvbnRhaW5lcilcbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0UGFnZSB0aGUgbnVtYmVyIG9mIHRoZSB0YXJnZXQgcGFnZSAwIHRvIFhcbiAqL1xuZnVuY3Rpb24gcGFnZVRyYW5zaXRpb25UcmlnZ2VyKHBhZ2VFbGVtZW50LCB0YXJnZXRQYWdlKSB7XG4gIGNvbnN0IG1heEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgcGFnZUVsZW1lbnQuc2Nyb2xsVG8oeyB0b3A6IHRhcmdldFBhZ2UgKiBtYXhIZWlnaHQsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xufVxuXG4vKipcbiAqIEEgc2Nyb2xsaW5nIGFuaW1hdGlvblxuICogQHBhcmFtIHsqfSBlbGVtZW50IHRoZSBlbGVtZW50XG4gKiBAcGFyYW0geyp9IHJvdGF0aW9uIHRoZSB2YWx1ZSBvZiB0aGUgcm90YXRpb24gb3IgKGFuaW1hdGlvbiBzdGFnZSB0cmFja2VyKVxuICovXG5mdW5jdGlvbiBzY3JvbGxpbmdBbmltYXRpb25PbmUoZWxlbWVudCwgcm90YXRpb24pIHtcbiAgY29uc29sZS5sb2coXCJlbGVtZW50XCIsIGVsZW1lbnQpO1xuICBpZiAoZWxlbWVudCkge1xuICAgIGlmIChyb3RhdGlvbiA8IDApIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuZmlsdGVyID0gYGJsdXIoJHtyb3RhdGlvbiAqIC0xfXB4KWA7XG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0ke3JvdGF0aW9uICogNH1weClgO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmZpbHRlciA9IGBibHVyKCR7cm90YXRpb259cHgpYDtcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoLSR7cm90YXRpb24gKiA0fXB4KWA7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjaGFuZ2UgdGhlIHJvdGF0aW9uIHZhbHVlIHdpdGggcmVzcGVjdCB0byB0aGVcbiAqIHNjcm9sbGluZyBkaXJlY3Rpb25cbiAqIEBwYXJhbSB7Kn0gZXZlbnQgdGhlIGV2ZW50IG9mIHRoZSBzY3JvbGxpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvbiB0aGUgdmFsdWUgb2Ygcm90YXRpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNldFJvdGF0aW9uIGEgc2V0dGVyIGZvciByb3RhdGlvblxuICogQHBhcmFtIHsqfSBzY3JvbGxMb2NrIHNjcm9sbCBsb2NrXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVNjcm9sbGluZyhldmVudCwgcm90YXRpb24sIHNldFJvdGF0aW9uLCBzY3JvbGxMb2NrKSB7XG4gIGZ1bmN0aW9uIHNob3VsZElza2lwVGhpcyhldmVudCl7XG4gICAgY29uc3Qgc2tpcGFibGVDbGFzc2VzID0gW1wic2hpcFwiLCBcInNoaXBzQ29udGFpbmVyXCJdO1xuICAgIGNvbnN0IHdlcmVQb2ludGluZ09uID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNraXBhYmxlQ2xhc3NlczsgeCsrKXtcbiAgICAgIGlmICh3ZXJlUG9pbnRpbmdPbi5jbGFzc0xpc3QuY29udGFpbnMoc2tpcGFibGVDbGFzc2VzW3hdKSl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHNob3VsZElza2lwVGhpcyhldmVudCkpe1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoc2Nyb2xsTG9jaykge1xuICAgIC8vIHNjcm9sbGluZyBpcyBsb2NrZWRcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGV2ZW50LmRlbHRhWSA+IDApIHtcbiAgICBzZXRSb3RhdGlvbihyb3RhdGlvbiArIDEpO1xuICB9IGVsc2UgaWYgKGV2ZW50LmRlbHRhWSA9PT0gMCkge1xuICAgIC8vIHBhc3NcbiAgfSBlbHNlIHtcbiAgICBzZXRSb3RhdGlvbihyb3RhdGlvbiAtIDEpO1xuICB9XG59XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiB0cmFja3MgaWYgdGhlIHJvdGF0aW9uIHZhbHVlIGlzIGFib3ZlIG9yIGJlbGxvd1xuICogYSB0aHJlYXNob2xkLCBpZiBzbyB0aGUgbmV4dCBwYWdlIHdpbGwgYmUgY2FsY3VsYXRlZFxuICogdGhlIHJvdGF0aW9uIHZhbHVlIGlzIHJlc2V0ZWQgLCBhIHBhZ2UgdHJhbnNpdGlvbiBpcyB0cmlnZ2VyZWRcbiAqIGFuZCBhIGxvY2sgZm9yIHNjcm9sbGluZyBpcyBzZXQgZm9yIDEuNSBzZWNvbmRzXG4gKiBAcGFyYW0geyp9IHBhZ2VFbGVtZW50IHRoZSBwYWdlRWxlbWVuIChjb250YWluZXIpXG4gKiBAcGFyYW0geyp9IHJvdGF0aW9uIHRoZSByb3RhdGlvbiBjdXJyZW50IHZhbHVlXG4gKiBAcGFyYW0geyp9IHBhZ2UgcGFnZSBudW1iZXJcbiAqIEBwYXJhbSB7Kn0gc2V0UGFnZSBzZXQgcGFnZSBudW1iZXIgdmFsdWVcbiAqIEBwYXJhbSB7Kn0gc2V0Um90YXRpb24gIHNldCByb3RhdGlvbiB2YWx1ZVxuICogQHBhcmFtIHsqfSBzZXRTY3JvbGxMb2NrIHNldCBzY3JvbGwgbG9jayB2YWx1ZVxuICovXG5mdW5jdGlvbiB0cmFuc2l0aW9uUnVsZShcbiAgcGFnZUVsZW1lbnQsXG4gIHJvdGF0aW9uLFxuICBwYWdlLFxuICBzZXRQYWdlLFxuICBzZXRSb3RhdGlvbixcbiAgc2V0U2Nyb2xsTG9ja1xuKSB7XG4gIGlmIChyb3RhdGlvbiA+PSAxMCkge1xuICAgIGNvbnN0IHRhcmdldFBhZ2UgPSBnb05leHRQYWdlKHBhZ2UpO1xuICAgIHNldFBhZ2UodGFyZ2V0UGFnZSk7XG4gICAgc2V0Um90YXRpb24oMCk7XG4gICAgcGFnZVRyYW5zaXRpb25UcmlnZ2VyKHBhZ2VFbGVtZW50LCB0YXJnZXRQYWdlKTtcbiAgICBzZXRTY3JvbGxMb2NrKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsTG9jayhmYWxzZSk7XG4gICAgfSwgNTAwKTtcbiAgICBjb25zb2xlLndhcm4oXCIrcmVhZGp1c3RpbmcgcGFnZVJlZlwiLCB0YXJnZXRQYWdlKTtcbiAgfSBlbHNlIGlmIChyb3RhdGlvbiA8PSAtMTApIHtcbiAgICBjb25zdCB0YXJnZXRQYWdlID0gZ29QcmV2UGFnZShwYWdlKTtcbiAgICBzZXRQYWdlKHRhcmdldFBhZ2UpO1xuICAgIHNldFJvdGF0aW9uKDApO1xuICAgIHBhZ2VUcmFuc2l0aW9uVHJpZ2dlcihwYWdlRWxlbWVudCwgdGFyZ2V0UGFnZSk7XG4gICAgc2V0U2Nyb2xsTG9jayh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNjcm9sbExvY2soZmFsc2UpO1xuICAgIH0sIDUwMCk7XG4gICAgY29uc29sZS53YXJuKFwiK3JlYWRqdXN0aW5nIHBhZ2VSZWZcIiwgdGFyZ2V0UGFnZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBhbGxvdyBvdmVyZmxvdyBmb3IgcGFnZSBFbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYWdlRWxlbWVudFxuICovXG5mdW5jdGlvbiBjb252ZXJ0VG90b3V0Y2gocGFnZUVsZW1lbnQpIHtcbiAgcGFnZUVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlBhZ2VJbnRldHkiLCJUaXRsZVBhZ2UiLCJGaXJzdFBhZ2UiLCJBYm91dE1lUGFnZSIsIlRlY2hub2xvZ2llcyIsIkxJTUlUIiwiSG9tZSIsInBhZ2UiLCJzZXRQYWdlIiwicGFnZUVsZW1lbnQiLCJzY3JvbGxMb2NrIiwic2V0U2Nyb2xsTG9jayIsInJvdGF0aW9uIiwic2V0Um90YXRpb24iLCJ0cmFuc2l0aW9uUnVsZSIsImN1cnJlbnQiLCJjb25zb2xlIiwid2FybiIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY29udmVydFRvdG91dGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwib25XaGVlbCIsImV2ZW50IiwiaGFuZGxlU2Nyb2xsaW5nIiwiRWxlbWVudEFuaW1hdGlvbkNhbGxCYWNrIiwic2Nyb2xsaW5nQW5pbWF0aW9uT25lIiwidGl0bGUiLCJnb05leHRQYWdlIiwiZ29QcmV2UGFnZSIsInBhZ2VUcmFuc2l0aW9uVHJpZ2dlciIsInRhcmdldFBhZ2UiLCJtYXhIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJlbGVtZW50IiwibG9nIiwic3R5bGUiLCJmaWx0ZXIiLCJ0cmFuc2Zvcm0iLCJzaG91bGRJc2tpcFRoaXMiLCJza2lwYWJsZUNsYXNzZXMiLCJ3ZXJlUG9pbnRpbmdPbiIsImVsZW1lbnRGcm9tUG9pbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIngiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImRlbHRhWSIsInNldFRpbWVvdXQiLCJvdmVyZmxvdyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});