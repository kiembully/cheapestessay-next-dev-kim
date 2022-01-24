(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[10],{

/***/ "./components/Common/image.js":
/*!************************************!*\
  !*** ./components/Common/image.js ***!
  \************************************/
/*! exports provided: useBasePath, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBasePath", function() { return useBasePath; });
/* harmony import */ var C_Users_Admin_Desktop_Essay_Countries_nextJS_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Essay-Countries-nextJS\\components\\Common\\image.js",
    _s = $RefreshSig$(),
    _this = undefined,
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Admin_Desktop_Essay_Countries_nextJS_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function useBasePath() {
  _s();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      basePath = _useRouter.basePath;

  return basePath;
} //wrapper for the react img component that will check for locally sourced images and prepend the basePath

_s(useBasePath, "QSU8pqBrmbHtQVdeKPk3wS1/i7Y=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

var Img = function Img(props) {
  _s2();

  var basePath = useBasePath();
  var finalSrc = (basePath === null || basePath === void 0 ? void 0 : basePath.charAt(0)) === "/" ? basePath + props.src : props.src;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", _objectSpread(_objectSpread({}, props), {}, {
    src: finalSrc
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
};

_s2(Img, "77mSATC/sbK0WddCx5MkJc/QPLY=", false, function () {
  return [useBasePath];
});

_c = Img;
/* harmony default export */ __webpack_exports__["default"] = (Img);

var _c;

$RefreshReg$(_c, "Img");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/home/feature/feature.scss":
/*!**********************************************!*\
  !*** ./components/home/feature/feature.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".feature .feature-box {\n  width: calc(50% - 15px);\n  display: inline-flex;\n  margin-right: 15px;\n}\n.feature .feature-box .feature-img {\n  width: 40px;\n  height: 40px;\n  background: #fff;\n  text-align: center;\n  line-height: 35px;\n  border-radius: 50px;\n  -webkit-box-shadow: 0 4px 10px rgba(21, 42, 65, 0.08);\n  box-shadow: 0 4px 10px rgba(21, 42, 65, 0.08);\n}\n.feature .feature-box .detail {\n  width: calc(100% - 70px);\n  overflow: hidden;\n  margin-left: 15px;\n}\n.feature .feature-box .detail .title {\n  font-size: 20px;\n  color: #12245A;\n  text-transform: capitalize;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.feature .feature-box .detail .desc {\n  width: 100%;\n  margin-bottom: 80px;\n}\n.feature .right-details {\n  background: #fff;\n  border-radius: 10px;\n  text-align: center;\n  padding-bottom: 25px;\n  position: relative;\n  width: 350px;\n  margin: 0 auto;\n}\n.feature .right-details::before {\n  content: \"\";\n  background-image: url(\"/uk/dot-4.svg\");\n  width: 105px;\n  height: 95px;\n  bottom: -45px;\n  right: -34px;\n  position: absolute;\n  background-repeat: no-repeat;\n  z-index: -1;\n}\n.feature .right-details .title {\n  color: #fff;\n  font-weight: 700;\n  font-size: 22px;\n  padding: 0 40px;\n  text-align: center;\n  position: relative;\n  margin-bottom: 0;\n  z-index: 2;\n  height: 76px;\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n}\n.feature .right-details .title .success {\n  color: #04be5b;\n  text-decoration: line-through;\n}\n.feature .right-details .title::before {\n  content: \"\";\n  background-image: url(\"/uk/b-bg.svg\");\n  width: 100%;\n  display: inline-block;\n  height: 76px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: -1;\n}\n.feature .right-details .box-list {\n  margin-top: 20px;\n  text-align: left;\n  margin-left: 90px;\n  margin-bottom: 20px;\n}\n.feature .right-details .box-list li {\n  color: #666;\n  margin-bottom: 15px;\n  position: relative;\n}\n.feature .right-details .box-list li::before {\n  content: \"\";\n  background-image: url(\"/uk/tick.svg\");\n  width: 15px;\n  height: 15px;\n  background-size: cover;\n  display: inline-block;\n  position: absolute;\n  left: -30px;\n  top: 5px;\n}\n\n@media screen and (max-width: 1199px) {\n  .feature .feature-box {\n    width: calc(50% - 15px);\n  }\n  .feature .feature-box .detail {\n    width: calc(100% - 50px);\n  }\n  .feature .feature-box .detail .desc {\n    margin-bottom: 30px;\n  }\n}\n@media screen and (min-width: 992px) and (max-width: 1199px) {\n  .feature .right-details:before {\n    right: -20px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .feature .feature-box .detail .title {\n    font-size: 16px;\n    margin-bottom: 10px;\n  }\n  .feature .feature-box .detail .desc {\n    margin-bottom: 40px;\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .feature .right-details::before {\n    content: none;\n  }\n  .feature .right-details .box-list li {\n    font-size: 14px;\n  }\n  .feature .right-details .box-list li::before {\n    top: 2px;\n  }\n  .feature .feature-box {\n    width: 100%;\n    margin-right: 0;\n  }\n  .feature .feature-box .detail .title {\n    font-size: 16px;\n  }\n  .feature .feature-box .detail .desc {\n    margin-bottom: 20px;\n  }\n}\n@media screen and (max-width: 420px) {\n  .feature .right-details {\n    width: 280px;\n  }\n  .feature .right-details .title {\n    font-size: 16px;\n    line-height: 22px;\n    height: 60px;\n  }\n  .feature .right-details .box-list {\n    margin-left: 70px;\n  }\n}");

/***/ }),

/***/ "./components/home/feature/index.js":
/*!******************************************!*\
  !*** ./components/home/feature/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _feature_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature.scss */ "./components/home/feature/feature.scss");
/* harmony import */ var _Common_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/image */ "./components/Common/image.js");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Essay-Countries-nextJS\\components\\home\\feature\\index.js";
 // scss



var feature = [{
  img: '/write-point-symbol.svg',
  title: "Access to Top Writers",
  desc: "Your essay will be assigned to an experienced and certified writer who has studied your subject during their course. Most writers possess higher degrees, so rest assured that you're in safe hands!"
}, {
  img: '/write-point-symbol.svg',
  title: "Unlimited Revisions",
  desc: "Your essay will be assigned to an experienced and certified writer who has studied your subject during their course. Most writers possess higher degrees, so rest assured that you're in safe hands!"
}, {
  img: '/write-point-symbol.svg',
  title: "High-Quality Content",
  desc: "Your essay will be assigned to an experienced and certified writer who has studied your subject during their course. Most writers possess higher degrees, so rest assured that you're in safe hands!"
}, {
  img: '/write-point-symbol.svg',
  title: "Plagiarism-Free Papers",
  desc: "Your essay will be assigned to an experienced and certified writer who has studied your subject during their course. Most writers possess higher degrees, so rest assured that you're in safe hands!"
}];

function Feature() {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
      dangerouslySetInnerHTML: {
        __html: _feature_scss__WEBPACK_IMPORTED_MODULE_2__["default"]
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "feature p-0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center mb-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "section-title",
            children: "CheapestEssay Promises Flawless Paper Writing Services"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "desc",
            children: "No matter you are short on time, our essay writers UK help you create a paper that's sure to grab the reader's attention. What's more, our support team makes the process seamless. That's not all, check more perks that you will get from our service:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-7",
            children: feature.map(function (list, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "feature-box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "feature-img",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    src: list.img,
                    alt: "content",
                    width: "20",
                    height: "21"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "detail",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    className: "title",
                    children: list.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "desc",
                    children: list.desc
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 21
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "right-details",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "title",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["Get all the features for ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "success",
                    children: " $65.86"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 50
                  }, this), "\xA0 Free Per Page "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                className: "box-list",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Report on Plagiarism"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Perfect Formatting"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "No Hidden Charges"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Highest Quality"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "SafePayment Methods"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Your data is 100% Safe"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Unlimited Free Editing"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "btn secondary-btn",
                children: "Hire a Writer"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c = Feature;
/* harmony default export */ __webpack_exports__["default"] = (Feature);

var _c;

$RefreshReg$(_c, "Feature");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9mZWF0dXJlL2ZlYXR1cmUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2ZlYXR1cmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJ1c2VCYXNlUGF0aCIsInVzZVJvdXRlciIsImJhc2VQYXRoIiwiSW1nIiwicHJvcHMiLCJmaW5hbFNyYyIsImNoYXJBdCIsInNyYyIsImZlYXR1cmUiLCJpbWciLCJ0aXRsZSIsImRlc2MiLCJGZWF0dXJlIiwiX19odG1sIiwiZmVhdHVyZUNzcyIsIm1hcCIsImxpc3QiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQSxtQkFDTEMsNkRBQVMsRUFESjtBQUFBLE1BQ2xCQyxRQURrQixjQUNsQkEsUUFEa0I7O0FBRTFCLFNBQU9BLFFBQVA7QUFDSCxDLENBRUQ7O0dBTGdCRixXO1VBQ1NDLHFEOzs7QUFLekIsSUFBTUUsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ25CLE1BQU1GLFFBQVEsR0FBR0YsV0FBVyxFQUE1QjtBQUNBLE1BQU1LLFFBQVEsR0FBRyxDQUFBSCxRQUFRLFNBQVIsSUFBQUEsUUFBUSxXQUFSLFlBQUFBLFFBQVEsQ0FBRUksTUFBVixDQUFpQixDQUFqQixPQUF3QixHQUF4QixHQUE4QkosUUFBUSxHQUFHRSxLQUFLLENBQUNHLEdBQS9DLEdBQXFESCxLQUFLLENBQUNHLEdBQTVFO0FBQ0Esc0JBQ0ksNEdBQ1FILEtBRFI7QUFFSSxPQUFHLEVBQUVDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBTUgsQ0FURDs7SUFBTUYsRztVQUNlSCxXOzs7S0FEZkcsRztBQVdTQSxrRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFlLGdvSEFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDRUE7O0FBQ0E7QUFFQTtBQUVBLElBQU1LLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLEtBQUcsRUFBRSx5QkFEUDtBQUVFQyxPQUFLLEVBQUUsdUJBRlQ7QUFHRUMsTUFBSSxFQUFFO0FBSFIsQ0FEYyxFQU1kO0FBQ0VGLEtBQUcsRUFBRSx5QkFEUDtBQUVFQyxPQUFLLEVBQUUscUJBRlQ7QUFHRUMsTUFBSSxFQUFFO0FBSFIsQ0FOYyxFQVdkO0FBQ0VGLEtBQUcsRUFBRSx5QkFEUDtBQUVFQyxPQUFLLEVBQUUsc0JBRlQ7QUFHRUMsTUFBSSxFQUFFO0FBSFIsQ0FYYyxFQWdCZDtBQUNFRixLQUFHLEVBQUUseUJBRFA7QUFFRUMsT0FBSyxFQUFFLHdCQUZUO0FBR0VDLE1BQUksRUFBRTtBQUhSLENBaEJjLENBQWhCOztBQXVCQSxTQUFTQyxPQUFULEdBQW1CO0FBQUE7O0FBQ2pCLHNCQUNFO0FBQUEsNEJBQ0U7QUFBTyw2QkFBdUIsRUFBRTtBQUFFQyxjQUFNLEVBQUVDLHFEQUFVQTtBQUFwQjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFTLGVBQVMsRUFBQyxhQUFuQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFHLHFCQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFLRTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUEsc0JBQ0dOLE9BQU8sQ0FBQ08sR0FBUixDQUFZLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUM1QixrQ0FDRTtBQUFLLHlCQUFTLEVBQUMsYUFBZjtBQUFBLHdDQUNFO0FBQUssMkJBQVMsRUFBQyxhQUFmO0FBQUEseUNBQ0UscUVBQUMscURBQUQ7QUFBSyx1QkFBRyxFQUFFRCxJQUFJLENBQUNQLEdBQWY7QUFBb0IsdUJBQUcsRUFBQyxTQUF4QjtBQUFrQyx5QkFBSyxFQUFDLElBQXhDO0FBQTZDLDBCQUFNLEVBQUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRTtBQUFLLDJCQUFTLEVBQUMsUUFBZjtBQUFBLDBDQUNFO0FBQUksNkJBQVMsRUFBQyxPQUFkO0FBQUEsOEJBQXVCTyxJQUFJLENBQUNOO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRTtBQUFHLDZCQUFTLEVBQUMsTUFBYjtBQUFBLDhCQUFxQk0sSUFBSSxDQUFDTDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRjtBQUFBLGlCQUFrQ00sS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQVdELGFBWkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBZ0JFO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLGVBQWY7QUFBQSxzQ0FDRTtBQUFJLHlCQUFTLEVBQUMsT0FBZDtBQUFBLHVDQUNFO0FBQUEsdUVBQStCO0FBQU0sNkJBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUlFO0FBQUkseUJBQVMsRUFBQyxVQUFkO0FBQUEsd0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSkYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFMRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQU5GLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGLGVBYUU7QUFBUSx5QkFBUyxFQUFDLG1CQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUErQ0Q7O0tBaERRTCxPO0FBa0RNQSxzRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUGF0aCgpIHtcclxuICAgIGNvbnN0IHsgYmFzZVBhdGggfSA9IHVzZVJvdXRlcigpO1xyXG4gICAgcmV0dXJuIGJhc2VQYXRoO1xyXG59XHJcblxyXG4vL3dyYXBwZXIgZm9yIHRoZSByZWFjdCBpbWcgY29tcG9uZW50IHRoYXQgd2lsbCBjaGVjayBmb3IgbG9jYWxseSBzb3VyY2VkIGltYWdlcyBhbmQgcHJlcGVuZCB0aGUgYmFzZVBhdGhcclxuY29uc3QgSW1nID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlUGF0aCA9IHVzZUJhc2VQYXRoKCk7XHJcbiAgICBjb25zdCBmaW5hbFNyYyA9IGJhc2VQYXRoPy5jaGFyQXQoMCkgPT09IFwiL1wiID8gYmFzZVBhdGggKyBwcm9wcy5zcmMgOiBwcm9wcy5zcmM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICBzcmM9e2ZpbmFsU3JjfVxyXG4gICAgICAgIC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltZzsiLCJleHBvcnQgZGVmYXVsdCBcIi5mZWF0dXJlIC5mZWF0dXJlLWJveCB7XFxuICB3aWR0aDogY2FsYyg1MCUgLSAxNXB4KTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG4uZmVhdHVyZSAuZmVhdHVyZS1ib3ggLmZlYXR1cmUtaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDIxLCA0MiwgNjUsIDAuMDgpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDIxLCA0MiwgNjUsIDAuMDgpO1xcbn1cXG4uZmVhdHVyZSAuZmVhdHVyZS1ib3ggLmRldGFpbCB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5mZWF0dXJlIC5mZWF0dXJlLWJveCAuZGV0YWlsIC50aXRsZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogIzEyMjQ1QTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcbi5mZWF0dXJlIC5mZWF0dXJlLWJveCAuZGV0YWlsIC5kZXNjIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcXG59XFxuLmZlYXR1cmUgLnJpZ2h0LWRldGFpbHMge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uZmVhdHVyZSAucmlnaHQtZGV0YWlsczo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvdWsvZG90LTQuc3ZnXFxcIik7XFxuICB3aWR0aDogMTA1cHg7XFxuICBoZWlnaHQ6IDk1cHg7XFxuICBib3R0b206IC00NXB4O1xcbiAgcmlnaHQ6IC0zNHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4uZmVhdHVyZSAucmlnaHQtZGV0YWlscyAudGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgcGFkZGluZzogMCA0MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDI7XFxuICBoZWlnaHQ6IDc2cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZmVhdHVyZSAucmlnaHQtZGV0YWlscyAudGl0bGUgLnN1Y2Nlc3Mge1xcbiAgY29sb3I6ICMwNGJlNWI7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLmZlYXR1cmUgLnJpZ2h0LWRldGFpbHMgLnRpdGxlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi91ay9iLWJnLnN2Z1xcXCIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDc2cHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogLTE7XFxufVxcbi5mZWF0dXJlIC5yaWdodC1kZXRhaWxzIC5ib3gtbGlzdCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmZlYXR1cmUgLnJpZ2h0LWRldGFpbHMgLmJveC1saXN0IGxpIHtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZlYXR1cmUgLnJpZ2h0LWRldGFpbHMgLmJveC1saXN0IGxpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi91ay90aWNrLnN2Z1xcXCIpO1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTMwcHg7XFxuICB0b3A6IDVweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XFxuICAuZmVhdHVyZSAuZmVhdHVyZS1ib3gge1xcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAxNXB4KTtcXG4gIH1cXG4gIC5mZWF0dXJlIC5mZWF0dXJlLWJveCAuZGV0YWlsIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xcbiAgfVxcbiAgLmZlYXR1cmUgLmZlYXR1cmUtYm94IC5kZXRhaWwgLmRlc2Mge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xcbiAgLmZlYXR1cmUgLnJpZ2h0LWRldGFpbHM6YmVmb3JlIHtcXG4gICAgcmlnaHQ6IC0yMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLmZlYXR1cmUgLmZlYXR1cmUtYm94IC5kZXRhaWwgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgLmZlYXR1cmUgLmZlYXR1cmUtYm94IC5kZXRhaWwgLmRlc2Mge1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XFxuICAuZmVhdHVyZSAucmlnaHQtZGV0YWlsczo6YmVmb3JlIHtcXG4gICAgY29udGVudDogbm9uZTtcXG4gIH1cXG4gIC5mZWF0dXJlIC5yaWdodC1kZXRhaWxzIC5ib3gtbGlzdCBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG4gIC5mZWF0dXJlIC5yaWdodC1kZXRhaWxzIC5ib3gtbGlzdCBsaTo6YmVmb3JlIHtcXG4gICAgdG9wOiAycHg7XFxuICB9XFxuICAuZmVhdHVyZSAuZmVhdHVyZS1ib3gge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcbiAgLmZlYXR1cmUgLmZlYXR1cmUtYm94IC5kZXRhaWwgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcbiAgLmZlYXR1cmUgLmZlYXR1cmUtYm94IC5kZXRhaWwgLmRlc2Mge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xcbiAgLmZlYXR1cmUgLnJpZ2h0LWRldGFpbHMge1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICB9XFxuICAuZmVhdHVyZSAucmlnaHQtZGV0YWlscyAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICB9XFxuICAuZmVhdHVyZSAucmlnaHQtZGV0YWlscyAuYm94LWxpc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcXG4gIH1cXG59XCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gc2Nzc1xyXG5pbXBvcnQgZmVhdHVyZUNzcyBmcm9tIFwiLi9mZWF0dXJlLnNjc3NcIjtcclxuXHJcbmltcG9ydCBJbWcgZnJvbSBcIi4uLy4uL0NvbW1vbi9pbWFnZVwiO1xyXG5cclxuY29uc3QgZmVhdHVyZSA9IFtcclxuICB7XHJcbiAgICBpbWc6ICcvd3JpdGUtcG9pbnQtc3ltYm9sLnN2ZycsXHJcbiAgICB0aXRsZTogXCJBY2Nlc3MgdG8gVG9wIFdyaXRlcnNcIixcclxuICAgIGRlc2M6IFwiWW91ciBlc3NheSB3aWxsIGJlIGFzc2lnbmVkIHRvIGFuIGV4cGVyaWVuY2VkIGFuZCBjZXJ0aWZpZWQgd3JpdGVyIHdobyBoYXMgc3R1ZGllZCB5b3VyIHN1YmplY3QgZHVyaW5nIHRoZWlyIGNvdXJzZS4gTW9zdCB3cml0ZXJzIHBvc3Nlc3MgaGlnaGVyIGRlZ3JlZXMsIHNvIHJlc3QgYXNzdXJlZCB0aGF0IHlvdSdyZSBpbiBzYWZlIGhhbmRzIVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcvd3JpdGUtcG9pbnQtc3ltYm9sLnN2ZycsXHJcbiAgICB0aXRsZTogXCJVbmxpbWl0ZWQgUmV2aXNpb25zXCIsXHJcbiAgICBkZXNjOiBcIllvdXIgZXNzYXkgd2lsbCBiZSBhc3NpZ25lZCB0byBhbiBleHBlcmllbmNlZCBhbmQgY2VydGlmaWVkIHdyaXRlciB3aG8gaGFzIHN0dWRpZWQgeW91ciBzdWJqZWN0IGR1cmluZyB0aGVpciBjb3Vyc2UuIE1vc3Qgd3JpdGVycyBwb3NzZXNzIGhpZ2hlciBkZWdyZWVzLCBzbyByZXN0IGFzc3VyZWQgdGhhdCB5b3UncmUgaW4gc2FmZSBoYW5kcyFcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnL3dyaXRlLXBvaW50LXN5bWJvbC5zdmcnLFxyXG4gICAgdGl0bGU6IFwiSGlnaC1RdWFsaXR5IENvbnRlbnRcIixcclxuICAgIGRlc2M6IFwiWW91ciBlc3NheSB3aWxsIGJlIGFzc2lnbmVkIHRvIGFuIGV4cGVyaWVuY2VkIGFuZCBjZXJ0aWZpZWQgd3JpdGVyIHdobyBoYXMgc3R1ZGllZCB5b3VyIHN1YmplY3QgZHVyaW5nIHRoZWlyIGNvdXJzZS4gTW9zdCB3cml0ZXJzIHBvc3Nlc3MgaGlnaGVyIGRlZ3JlZXMsIHNvIHJlc3QgYXNzdXJlZCB0aGF0IHlvdSdyZSBpbiBzYWZlIGhhbmRzIVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcvd3JpdGUtcG9pbnQtc3ltYm9sLnN2ZycsXHJcbiAgICB0aXRsZTogXCJQbGFnaWFyaXNtLUZyZWUgUGFwZXJzXCIsXHJcbiAgICBkZXNjOiBcIllvdXIgZXNzYXkgd2lsbCBiZSBhc3NpZ25lZCB0byBhbiBleHBlcmllbmNlZCBhbmQgY2VydGlmaWVkIHdyaXRlciB3aG8gaGFzIHN0dWRpZWQgeW91ciBzdWJqZWN0IGR1cmluZyB0aGVpciBjb3Vyc2UuIE1vc3Qgd3JpdGVycyBwb3NzZXNzIGhpZ2hlciBkZWdyZWVzLCBzbyByZXN0IGFzc3VyZWQgdGhhdCB5b3UncmUgaW4gc2FmZSBoYW5kcyFcIlxyXG4gIH1cclxuXVxyXG5cclxuZnVuY3Rpb24gRmVhdHVyZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZmVhdHVyZUNzcyB9fT48L3N0eWxlPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWF0dXJlIHAtMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTVcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5DaGVhcGVzdEVzc2F5IFByb21pc2VzIEZsYXdsZXNzIFBhcGVyIFdyaXRpbmcgU2VydmljZXM8L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+Tm8gbWF0dGVyIHlvdSBhcmUgc2hvcnQgb24gdGltZSwgb3VyIGVzc2F5IHdyaXRlcnMgVUsgaGVscCB5b3UgY3JlYXRlIGEgcGFwZXIgdGhhdCdzIHN1cmUgdG8gZ3JhYiB0aGUgcmVhZGVyJ3MgYXR0ZW50aW9uLiBXaGF0J3MgbW9yZSwgb3VyIHN1cHBvcnQgdGVhbSBtYWtlcyB0aGUgcHJvY2VzcyBzZWFtbGVzcy4gVGhhdCdzIG5vdCBhbGwsIGNoZWNrIG1vcmUgcGVya3MgdGhhdCB5b3Ugd2lsbCBnZXQgZnJvbSBvdXIgc2VydmljZTo8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTdcIj5cclxuICAgICAgICAgICAgICB7ZmVhdHVyZS5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUtYm94XCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltZyBzcmM9e2xpc3QuaW1nfSBhbHQ9XCJjb250ZW50XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e2xpc3QudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NcIj57bGlzdC5kZXNjfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+R2V0IGFsbCB0aGUgZmVhdHVyZXMgZm9yIDxzcGFuIGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj4gJDY1Ljg2PC9zcGFuPiZuYnNwOyBGcmVlIFBlciBQYWdlIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYm94LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPlJlcG9ydCBvbiBQbGFnaWFyaXNtPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlBlcmZlY3QgRm9ybWF0dGluZzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5ObyBIaWRkZW4gQ2hhcmdlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5IaWdoZXN0IFF1YWxpdHk8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+U2FmZVBheW1lbnQgTWV0aG9kczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5Zb3VyIGRhdGEgaXMgMTAwJSBTYWZlPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlVubGltaXRlZCBGcmVlIEVkaXRpbmc8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHNlY29uZGFyeS1idG5cIj5IaXJlIGEgV3JpdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmU7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSJdLCJzb3VyY2VSb290IjoiIn0=