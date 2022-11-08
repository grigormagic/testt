"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Modal/Auth/AuthModal.tsx":
/*!**********************************!*\
  !*** ./Modal/Auth/AuthModal.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_authModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/authModal */ \"./atoms/authModal.ts\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase/clientApp */ \"./firebase/clientApp.ts\");\n/* harmony import */ var _AuthInputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AuthInputs */ \"./Modal/Auth/AuthInputs.tsx\");\n/* harmony import */ var _OAuthButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OAuthButtons */ \"./Modal/Auth/OAuthButtons.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AuthModal = ()=>{\n    _s();\n    const [modalState, setModalState] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_atoms_authModal__WEBPACK_IMPORTED_MODULE_4__.authModalState);\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_5__.auth);\n    const hendleClose = ()=>{\n        setModalState((prev)=>({\n                ...prev,\n                open: false\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Modal, {\n            isOpen: modalState.open,\n            onClose: hendleClose,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ModalOverlay, {}, void 0, false, {\n                    fileName: \"/home/grigor/Desktop/testt/Modal/Auth/AuthModal.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ModalContent, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ModalHeader, {\n                            textAlign: \"center\",\n                            children: [\n                                modalState.view === \"login\" && \"Login\",\n                                modalState.view === \"singup\" && \"Sign Up\",\n                                modalState.view === \"resetPassword\" && \"Reset Password\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/grigor/Desktop/testt/Modal/Auth/AuthModal.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ModalCloseButton, {}, void 0, false, {\n                            fileName: \"/home/grigor/Desktop/testt/Modal/Auth/AuthModal.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ModalBody, {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                                direction: \"column\",\n                                align: \"center\",\n                                justify: \"center\",\n                                width: \"70%\",\n                                pb: 6,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OAuthButtons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/grigor/Desktop/testt/Modal/Auth/AuthModal.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                                        textColor: \"gray.300\",\n                                        children: \"OR\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/grigor/Desktop/testt/Modal/Auth/AuthModal.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthInputs__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/grigor/Desktop/testt/Modal/Auth/AuthModal.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/grigor/Desktop/testt/Modal/Auth/AuthModal.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/grigor/Desktop/testt/Modal/Auth/AuthModal.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/grigor/Desktop/testt/Modal/Auth/AuthModal.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/grigor/Desktop/testt/Modal/Auth/AuthModal.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(AuthModal, \"QD56RHU9BhkooVaeREqIa4AorME=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState,\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState\n    ];\n});\n_c = AuthModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthModal);\nvar _c;\n$RefreshReg$(_c, \"AuthModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Nb2RhbC9BdXRoL0F1dGhNb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBWTBCO0FBQ0E7QUFDK0I7QUFDakI7QUFDZTtBQUNQO0FBQ1Y7QUFDSTtBQUkxQyxNQUFNZSxZQUFzQyxJQUFNOztJQUNoRCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1Asc0RBQWNBLENBQUNDLDREQUFjQTtJQUNqRSxNQUFNLENBQUNPLE1BQU1DLFNBQVNDLE1BQU0sR0FBR1gsdUVBQVlBLENBQUNHLHFEQUFJQTtJQUNoRCxNQUFNUyxjQUFjLElBQU07UUFDeEJKLGNBQWMsQ0FBQ0ssT0FBVTtnQkFDdkIsR0FBR0EsSUFBSTtnQkFDUEMsTUFBTSxLQUFLO1lBQ2I7SUFDRjtJQUNBLHFCQUNFO2tCQUNFLDRFQUFDdkIsbURBQUtBO1lBQUN3QixRQUFRUixXQUFXTyxJQUFJO1lBQUVFLFNBQVNKOzs4QkFDdkMsOERBQUNwQiwwREFBWUE7Ozs7OzhCQUNiLDhEQUFDQywwREFBWUE7O3NDQUNYLDhEQUFDQyx5REFBV0E7NEJBQUN1QixXQUFVOztnQ0FDcEJWLFdBQVdXLElBQUksS0FBSyxXQUFXO2dDQUMvQlgsV0FBV1csSUFBSSxLQUFLLFlBQVk7Z0NBQ2hDWCxXQUFXVyxJQUFJLEtBQUssbUJBQW1COzs7Ozs7O3NDQUUxQyw4REFBQ3ZCLDhEQUFnQkE7Ozs7O3NDQUNqQiw4REFBQ0MsdURBQVNBOzRCQUNSdUIsU0FBUTs0QkFDUkMsZUFBYzs0QkFDZEMsZ0JBQWU7NEJBQ2ZDLFlBQVc7c0NBRVgsNEVBQUN6QixrREFBSUE7Z0NBQ0gwQixXQUFVO2dDQUNWQyxPQUFNO2dDQUNOQyxTQUFRO2dDQUNSQyxPQUFNO2dDQUNOQyxJQUFJOztrREFFSiw4REFBQ3RCLHFEQUFZQTs7Ozs7a0RBQ2IsOERBQUNQLGtEQUFJQTt3Q0FBQzhCLFdBQVU7a0RBQVc7Ozs7OztrREFDM0IsOERBQUN4QixtREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpCO0dBM0NNRTs7UUFDZ0NMLGtEQUFjQTtRQUNuQkQsbUVBQVlBOzs7S0FGdkNNO0FBNENOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL01vZGFsL0F1dGgvQXV0aE1vZGFsLnRzeD8zMzdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHVzZURpc2Nsb3N1cmUsXG4gIEJ1dHRvbixcbiAgTW9kYWwsXG4gIE1vZGFsT3ZlcmxheSxcbiAgTW9kYWxDb250ZW50LFxuICBNb2RhbEhlYWRlcixcbiAgTW9kYWxDbG9zZUJ1dHRvbixcbiAgTW9kYWxCb2R5LFxuICBNb2RhbEZvb3RlcixcbiAgRmxleCxcbiAgVGV4dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IGF1dGhNb2RhbFN0YXRlIH0gZnJvbSBcIi4uLy4uL2F0b21zL2F1dGhNb2RhbFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi8uLi9maXJlYmFzZS9jbGllbnRBcHBcIjtcbmltcG9ydCBBdXRoSW5wdXRzIGZyb20gXCIuL0F1dGhJbnB1dHNcIjtcbmltcG9ydCBPQXV0aEJ1dHRvbnMgZnJvbSBcIi4vT0F1dGhCdXR0b25zXCI7XG5cbnR5cGUgQXV0aE1vZGFsUHJvcHMgPSB7fTtcblxuY29uc3QgQXV0aE1vZGFsOiBSZWFjdC5GQzxBdXRoTW9kYWxQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IFttb2RhbFN0YXRlLCBzZXRNb2RhbFN0YXRlXSA9IHVzZVJlY29pbFN0YXRlKGF1dGhNb2RhbFN0YXRlKTtcbiAgY29uc3QgW3VzZXIsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcbiAgY29uc3QgaGVuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxTdGF0ZSgocHJldikgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICB9KSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbCBpc09wZW49e21vZGFsU3RhdGUub3Blbn0gb25DbG9zZT17aGVuZGxlQ2xvc2V9PlxuICAgICAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgICAgIDxNb2RhbENvbnRlbnQ+XG4gICAgICAgICAgPE1vZGFsSGVhZGVyIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAge21vZGFsU3RhdGUudmlldyA9PT0gXCJsb2dpblwiICYmIFwiTG9naW5cIn1cbiAgICAgICAgICAgIHttb2RhbFN0YXRlLnZpZXcgPT09IFwic2luZ3VwXCIgJiYgXCJTaWduIFVwXCJ9XG4gICAgICAgICAgICB7bW9kYWxTdGF0ZS52aWV3ID09PSBcInJlc2V0UGFzc3dvcmRcIiAmJiBcIlJlc2V0IFBhc3N3b3JkXCJ9XG4gICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxuICAgICAgICAgIDxNb2RhbEJvZHlcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCI3MCVcIlxuICAgICAgICAgICAgICBwYj17Nn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE9BdXRoQnV0dG9ucyAvPlxuICAgICAgICAgICAgICA8VGV4dCB0ZXh0Q29sb3I9XCJncmF5LjMwMFwiPk9SPC9UZXh0PlxuICAgICAgICAgICAgICA8QXV0aElucHV0cyAvPlxuICAgICAgICAgICAgICB7LyogPFJlc2V0UGFzc3dvcmQgLz4gKi99XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBdXRoTW9kYWw7XG4iXSwibmFtZXMiOlsiTW9kYWwiLCJNb2RhbE92ZXJsYXkiLCJNb2RhbENvbnRlbnQiLCJNb2RhbEhlYWRlciIsIk1vZGFsQ2xvc2VCdXR0b24iLCJNb2RhbEJvZHkiLCJGbGV4IiwiVGV4dCIsIlJlYWN0IiwidXNlQXV0aFN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJhdXRoTW9kYWxTdGF0ZSIsImF1dGgiLCJBdXRoSW5wdXRzIiwiT0F1dGhCdXR0b25zIiwiQXV0aE1vZGFsIiwibW9kYWxTdGF0ZSIsInNldE1vZGFsU3RhdGUiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwiaGVuZGxlQ2xvc2UiLCJwcmV2Iiwib3BlbiIsImlzT3BlbiIsIm9uQ2xvc2UiLCJ0ZXh0QWxpZ24iLCJ2aWV3IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJkaXJlY3Rpb24iLCJhbGlnbiIsImp1c3RpZnkiLCJ3aWR0aCIsInBiIiwidGV4dENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Modal/Auth/AuthModal.tsx\n"));

/***/ })

});