(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[7],{

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

/***/ "./components/home/adsBanner/adsBanner.scss":
/*!**************************************************!*\
  !*** ./components/home/adsBanner/adsBanner.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".for-new {\n  background-color: #fff;\n  position: relative;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n.for-new .title {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 44px;\n  color: #151515;\n  position: relative;\n}\n.for-new .title::before {\n  content: \"\";\n  position: absolute;\n  width: 80px;\n  height: 3px;\n  background: #FBD501;\n  bottom: -16px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n.for-new.orderBanner {\n  background-color: #12245A;\n  margin-bottom: 50px;\n  margin-top: 50px;\n}\n.for-new.orderBanner::before, .for-new.orderBanner::after {\n  background-image: url(\"/uk/bannerBorder.svg\");\n}\n.for-new.orderBanner .section-title {\n  color: #fff;\n  margin-bottom: 20px;\n}\n.for-new.orderBanner .section-title::before {\n  content: none;\n}\n.for-new.orderBanner .desc {\n  color: #fff;\n  width: 70%;\n  margin: 0 auto;\n}\n.for-new::before, .for-new::after {\n  content: \"\";\n  background-image: url(\"/uk/papercuteffact.svg\");\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 85px;\n  z-index: -1;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.for-new::before {\n  top: -84px;\n}\n.for-new::after {\n  bottom: -84px;\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.for-new .banner {\n  position: relative;\n  width: 148px;\n  height: 148px;\n  margin: 0 auto;\n  animation: pulse 2s linear infinite;\n}\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n  to {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n}\n@keyframes pulse {\n  0% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n  to {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n}\n.for-new .banner .content {\n  position: absolute;\n  top: 40px;\n  left: 50%;\n  transform: translate(-50%);\n  font-size: 30px;\n  font-weight: 700;\n  text-align: center;\n  display: inline-block;\n  line-height: normal;\n}\n.for-new .banner .content span {\n  font-style: italic;\n}\n.for-new .text {\n  font-weight: 700;\n  font-size: 30px;\n  margin-top: 20px;\n  text-transform: capitalize;\n  text-align: center;\n  color: #151515;\n}\n.for-new .input-wrpper {\n  width: 80%;\n  margin: 50px auto 0;\n}\n.for-new .input-wrpper .input-group .emailInput {\n  width: calc(100% - 270px);\n}\n.for-new .input-wrpper .input-group .emailInput .form-control {\n  padding: 6px 15px;\n  height: 50px;\n  background: #f2f6f8;\n  border: none;\n  color: #000;\n  font-size: 16px;\n  border-radius: 6px !important;\n}\n.for-new .input-wrpper .input-group .btn {\n  margin-left: 20px !important;\n  width: 250px;\n  height: 50px;\n}\n\n@media screen and (max-width: 1199px) {\n  .for-new .title {\n    font-size: 34px;\n    line-height: 32px;\n  }\n  .for-new .text,\n.for-new .inner-title {\n    font-size: 20px;\n  }\n  .for-new .input-wrpper {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 991px) {\n  .for-new .title {\n    font-size: 22px;\n  }\n  .for-new.orderBanner p {\n    width: 100%;\n  }\n  .for-new.orderBanner .mt-5 {\n    margin-top: 2rem !important;\n  }\n  .for-new .input-wrpper {\n    margin-top: 30px;\n  }\n  .for-new .input-wrpper .input-group .emailInput {\n    width: calc(100% - 170px);\n  }\n  .for-new .input-wrpper .input-group .form-control {\n    height: 40px;\n  }\n  .for-new .input-wrpper .input-group .btn {\n    padding: 8px 20px;\n    width: auto;\n    height: auto;\n  }\n}\n@media screen and (max-width: 575px) {\n  .for-new.orderBanner {\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n  .for-new.orderBanner .desc {\n    width: 100%;\n  }\n  .for-new::before {\n    top: -34px;\n  }\n  .for-new::after {\n    bottom: -34px;\n  }\n  .for-new .input-wrpper {\n    width: 100%;\n  }\n  .for-new .input-wrpper .input-group {\n    justify-content: center;\n  }\n  .for-new .input-wrpper .input-group .emailInput {\n    width: 100%;\n  }\n  .for-new .input-wrpper .input-group .emailInput .form-control {\n    height: 40px;\n    font-size: 14px;\n    width: 100%;\n  }\n  .for-new .input-wrpper .input-group .btn {\n    margin-left: 0 !important;\n    width: auto;\n    margin-top: 10px;\n  }\n}");

/***/ }),

/***/ "./components/home/adsBanner/index.js":
/*!********************************************!*\
  !*** ./components/home/adsBanner/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_apiHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helper/apiHelper */ "./helper/apiHelper.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var _adsBanner_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adsBanner.scss */ "./components/home/adsBanner/adsBanner.scss");
/* harmony import */ var _Common_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Common/image */ "./components/Common/image.js");



var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Essay-Countries-nextJS\\components\\home\\adsBanner\\index.js",
    _s = $RefreshSig$();


 // API helper

 // Html Parser

 // scss




function AdsBanner(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      enteredEmail = _useState[0],
      setEnteredEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      emailIsValid = _useState2[0],
      setEmailIsValid = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      emailInValidMsg = _useState3[0],
      setEmailInValidMsg = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      formIsValid = _useState4[0],
      setFormIsValid = _useState4[1];

  var emailChangeHandler = function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
    setFormIsValid(event.target.value.includes('@'));
  };

  var validateEmailHandler = function validateEmailHandler() {
    setEmailIsValid(enteredEmail.includes('@'));
    setEmailInValidMsg("Email should be either valid or not be blank.");
  };

  var submitHandler = function submitHandler(event) {
    event.preventDefault();

    if (enteredEmail === "") {
      setEmailInValidMsg("Please Enter Email");
    } else {
      setEmailInValidMsg('');
      var formData = new FormData();
      formData.append("email", enteredEmail);
      formData.append("fx", "unlockDiscount");
      Object(_helper_apiHelper__WEBPACK_IMPORTED_MODULE_3__["ukApiHelper"])('createAccount', 'POST', formData, null).then(function (res) {
        var response = res.data;

        if (response.status) {
          // Set Data in localstrorage
          var now = new Date();
          var item = {
            value: response.data,
            expiry: now.getTime() + 12 * 60 * 60 * 1000
          };
          localStorage.setItem("token", JSON.stringify(item));
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/order');
          setEmailInValidMsg('');
        } else {
          setEmailInValidMsg(res.data.message);
        }
      })["catch"](function (error) {
        return console.error("Error: ".concat(error));
      });
    }
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      ctaSection = _useState5[0],
      setCtaSection = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (props.serviceContent) {
      setCtaSection(props.serviceContent.cta_section);
    }
  }, [props.serviceContent]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
      dangerouslySetInnerHTML: {
        __html: _adsBanner_scss__WEBPACK_IMPORTED_MODULE_5__["default"]
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), props.adsbanner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "for-new orderBanner",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "section-title",
            children: ctaSection && Object(html_react_parser__WEBPACK_IMPORTED_MODULE_4__["default"])(ctaSection.title)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "desc",
            children: ctaSection && Object(html_react_parser__WEBPACK_IMPORTED_MODULE_4__["default"])(ctaSection.content)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mt-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "btn secondary-btn",
              href: "".concat("/uk", "/order"),
              children: "Order an Essay"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "btn white-btn",
              href: "".concat("/uk", "/price"),
              children: "Check Prices"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "for-new ".concat(props.className),
      id: "offer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "banner",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
                src: props.src,
                alt: "banner",
                width: "148",
                height: "148"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content",
                children: ["15% ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "off"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 48
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "text",
              children: "on your first checkout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-8",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "title",
                children: "New to CheapestEssay Sign up & Save"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "input-wrpper",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                className: "input-group",
                method: "post",
                onSubmit: submitHandler,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "emailInput",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Your Email",
                    className: "form-control",
                    value: enteredEmail,
                    onChange: emailChangeHandler,
                    onBlur: validateEmailHandler
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "errorMsg",
                    title: emailInValidMsg,
                    children: emailInValidMsg
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "submit",
                  className: "btn theme-btn ".concat(props.btnclassName),
                  children: "Get a Discount"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(AdsBanner, "n8Qqsuhn0+H0aDpbHa457Scr/gw=");

_c = AdsBanner;
/* harmony default export */ __webpack_exports__["default"] = (AdsBanner);

var _c;

$RefreshReg$(_c, "AdsBanner");

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

/***/ }),

/***/ "./node_modules/domelementtype/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/domelementtype/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style);
}
exports.isTag = isTag;
// Exports for backwards compatibility
/** Type for the root element of a document */
exports.Root = ElementType.Root;
/** Type for Text */
exports.Text = ElementType.Text;
/** Type for <? ... ?> */
exports.Directive = ElementType.Directive;
/** Type for <!-- ... --> */
exports.Comment = ElementType.Comment;
/** Type for <script> tags */
exports.Script = ElementType.Script;
/** Type for <style> tags */
exports.Style = ElementType.Style;
/** Type for Any tag */
exports.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
exports.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
exports.Doctype = ElementType.Doctype;


/***/ }),

/***/ "./node_modules/domhandler/lib/node.js":
/*!*********************************************!*\
  !*** ./node_modules/domhandler/lib/node.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
var nodeTypes = new Map([
    [domelementtype_1.ElementType.Tag, 1],
    [domelementtype_1.ElementType.Script, 1],
    [domelementtype_1.ElementType.Style, 1],
    [domelementtype_1.ElementType.Directive, 1],
    [domelementtype_1.ElementType.Text, 3],
    [domelementtype_1.ElementType.CDATA, 4],
    [domelementtype_1.ElementType.Comment, 8],
    [domelementtype_1.ElementType.Root, 9],
]);
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
var Node = /** @class */ (function () {
    /**
     *
     * @param type The type of the node.
     */
    function Node(type) {
        this.type = type;
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "nodeType", {
        // Read-only aliases
        get: function () {
            var _a;
            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        get: function () {
            return this.parent;
        },
        set: function (parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        get: function () {
            return this.prev;
        },
        set: function (prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        get: function () {
            return this.next;
        },
        set: function (next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    Node.prototype.cloneNode = function (recursive) {
        if (recursive === void 0) { recursive = false; }
        return cloneNode(this, recursive);
    };
    return Node;
}());
exports.Node = Node;
/**
 * A node that contains some data.
 */
var DataNode = /** @class */ (function (_super) {
    __extends(DataNode, _super);
    /**
     * @param type The type of the node
     * @param data The content of the data node
     */
    function DataNode(type, data) {
        var _this = _super.call(this, type) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}(Node));
exports.DataNode = DataNode;
/**
 * Text within the document.
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(data) {
        return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
    }
    return Text;
}(DataNode));
exports.Text = Text;
/**
 * Comments within the document.
 */
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment(data) {
        return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
    }
    return Comment;
}(DataNode));
exports.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */
var ProcessingInstruction = /** @class */ (function (_super) {
    __extends(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
        _this.name = name;
        return _this;
    }
    return ProcessingInstruction;
}(DataNode));
exports.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */
var NodeWithChildren = /** @class */ (function (_super) {
    __extends(NodeWithChildren, _super);
    /**
     * @param type Type of the node.
     * @param children Children of the node. Only certain node types can have children.
     */
    function NodeWithChildren(type, children) {
        var _this = _super.call(this, type) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        get: function () {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        get: function () {
            return this.children.length > 0
                ? this.children[this.children.length - 1]
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        get: function () {
            return this.children;
        },
        set: function (children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren;
}(Node));
exports.NodeWithChildren = NodeWithChildren;
/**
 * The root node of the document.
 */
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document(children) {
        return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
    }
    return Document;
}(NodeWithChildren));
exports.Document = Document;
/**
 * An element within the DOM.
 */
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    function Element(name, attribs, children, type) {
        if (children === void 0) { children = []; }
        if (type === void 0) { type = name === "script"
            ? domelementtype_1.ElementType.Script
            : name === "style"
                ? domelementtype_1.ElementType.Style
                : domelementtype_1.ElementType.Tag; }
        var _this = _super.call(this, type, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        return _this;
    }
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (name) {
                var _a, _b;
                return ({
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
                });
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element;
}(NodeWithChildren));
exports.Element = Element;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag(node) {
    return (0, domelementtype_1.isTag)(node);
}
exports.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === domelementtype_1.ElementType.CDATA;
}
exports.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === domelementtype_1.ElementType.Text;
}
exports.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === domelementtype_1.ElementType.Comment;
}
exports.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === domelementtype_1.ElementType.Directive;
}
exports.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === domelementtype_1.ElementType.Root;
}
exports.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive) {
    if (recursive === void 0) { recursive = false; }
    var result;
    if (isText(node)) {
        result = new Text(node.data);
    }
    else if (isComment(node)) {
        result = new Comment(node.data);
    }
    else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function (child) { return (child.parent = clone_1); });
        if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
    }
    else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
        children.forEach(function (child) { return (child.parent = clone_2); });
        result = clone_2;
    }
    else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function (child) { return (child.parent = clone_3); });
        if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
    }
    else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error("Not implemented yet: " + node.type);
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    return result;
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function (child) { return cloneNode(child, true); });
    for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/constants.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * SVG elements are case-sensitive.
 *
 * @see {@link https://developer.mozilla.org/docs/Web/SVG/Element#SVG_elements_A_to_Z}
 */
var CASE_SENSITIVE_TAG_NAMES = [
  'animateMotion',
  'animateTransform',
  'clipPath',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussainBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'foreignObject',
  'linearGradient',
  'radialGradient',
  'textPath'
];

module.exports = {
  CASE_SENSITIVE_TAG_NAMES: CASE_SENSITIVE_TAG_NAMES
};


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/domparser.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/domparser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// constants
var HTML = 'html';
var HEAD = 'head';
var BODY = 'body';
var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/; // e.g., <h1>
var HEAD_TAG_REGEX = /<head.*>/i;
var BODY_TAG_REGEX = /<body.*>/i;

// falls back to `parseFromString` if `createHTMLDocument` cannot be used
var parseFromDocument = function () {
  throw new Error(
    'This browser does not support `document.implementation.createHTMLDocument`'
  );
};

var parseFromString = function () {
  throw new Error(
    'This browser does not support `DOMParser.prototype.parseFromString`'
  );
};

/**
 * DOMParser (performance: slow).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document
 */
if (typeof window.DOMParser === 'function') {
  var domParser = new window.DOMParser();
  var mimeType = 'text/html';

  /**
   * Creates an HTML document using `DOMParser.parseFromString`.
   *
   * @param  {string} html      - The HTML string.
   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
   * @return {HTMLDocument}
   */
  parseFromString = function (html, tagName) {
    if (tagName) {
      html = '<' + tagName + '>' + html + '</' + tagName + '>';
    }

    return domParser.parseFromString(html, mimeType);
  };

  parseFromDocument = parseFromString;
}

/**
 * DOMImplementation (performance: fair).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMImplementation/createHTMLDocument
 */
if (document.implementation) {
  var isIE = __webpack_require__(/*! ./utilities */ "./node_modules/html-dom-parser/lib/client/utilities.js").isIE;

  // title parameter is required in IE
  // https://msdn.microsoft.com/en-us/library/ff975457(v=vs.85).aspx
  var doc = document.implementation.createHTMLDocument(
    isIE() ? 'html-dom-parser' : undefined
  );

  /**
   * Use HTML document created by `document.implementation.createHTMLDocument`.
   *
   * @param  {string} html      - The HTML string.
   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
   * @return {HTMLDocument}
   */
  parseFromDocument = function (html, tagName) {
    if (tagName) {
      doc.documentElement.getElementsByTagName(tagName)[0].innerHTML = html;
      return doc;
    }

    doc.documentElement.innerHTML = html;
    return doc;
  };
}

/**
 * Template (performance: fast).
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/template
 */
var template = document.createElement('template');
var parseFromTemplate;

if (template.content) {
  /**
   * Uses a template element (content fragment) to parse HTML.
   *
   * @param  {string} html - The HTML string.
   * @return {NodeList}
   */
  parseFromTemplate = function (html) {
    template.innerHTML = html;
    return template.content.childNodes;
  };
}

/**
 * Parses HTML string to DOM nodes.
 *
 * @param  {string}   html - HTML markup.
 * @return {NodeList}
 */
function domparser(html) {
  var firstTagName;
  var match = html.match(FIRST_TAG_REGEX);

  if (match && match[1]) {
    firstTagName = match[1].toLowerCase();
  }

  var doc;
  var element;
  var elements;

  switch (firstTagName) {
    case HTML:
      doc = parseFromString(html);

      // the created document may come with filler head/body elements,
      // so make sure to remove them if they don't actually exist
      if (!HEAD_TAG_REGEX.test(html)) {
        element = doc.getElementsByTagName(HEAD)[0];
        if (element) {
          element.parentNode.removeChild(element);
        }
      }

      if (!BODY_TAG_REGEX.test(html)) {
        element = doc.getElementsByTagName(BODY)[0];
        if (element) {
          element.parentNode.removeChild(element);
        }
      }

      return doc.getElementsByTagName(HTML);

    case HEAD:
    case BODY:
      elements = parseFromDocument(html).getElementsByTagName(firstTagName);

      // if there's a sibling element, then return both elements
      if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
        return elements[0].parentNode.childNodes;
      }
      return elements;

    // low-level tag or text
    default:
      if (parseFromTemplate) {
        return parseFromTemplate(html);
      }

      return parseFromDocument(html, BODY).getElementsByTagName(BODY)[0]
        .childNodes;
  }
}

module.exports = domparser;


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/html-to-dom.js":
/*!****************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/html-to-dom.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var domparser = __webpack_require__(/*! ./domparser */ "./node_modules/html-dom-parser/lib/client/domparser.js");
var formatDOM = __webpack_require__(/*! ./utilities */ "./node_modules/html-dom-parser/lib/client/utilities.js").formatDOM;

var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/; // e.g., <!doctype html>

/**
 * Parses HTML string to DOM nodes in browser.
 *
 * @param  {string} html  - HTML markup.
 * @return {DomElement[]} - DOM elements.
 */
function HTMLDOMParser(html) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (html === '') {
    return [];
  }

  // match directive
  var match = html.match(DIRECTIVE_REGEX);
  var directive;

  if (match && match[1]) {
    directive = match[1];
  }

  return formatDOM(domparser(html), null, directive);
}

module.exports = HTMLDOMParser;


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/utilities.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/utilities.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constants = __webpack_require__(/*! ./constants */ "./node_modules/html-dom-parser/lib/client/constants.js");
var domhandler = __webpack_require__(/*! domhandler/lib/node */ "./node_modules/domhandler/lib/node.js");

var CASE_SENSITIVE_TAG_NAMES = constants.CASE_SENSITIVE_TAG_NAMES;

var Comment = domhandler.Comment;
var Element = domhandler.Element;
var ProcessingInstruction = domhandler.ProcessingInstruction;
var Text = domhandler.Text;

var caseSensitiveTagNamesMap = {};
var tagName;

for (var i = 0, len = CASE_SENSITIVE_TAG_NAMES.length; i < len; i++) {
  tagName = CASE_SENSITIVE_TAG_NAMES[i];
  caseSensitiveTagNamesMap[tagName.toLowerCase()] = tagName;
}

/**
 * Gets case-sensitive tag name.
 *
 * @param  {string}           tagName - Tag name in lowercase.
 * @return {string|undefined}         - Case-sensitive tag name.
 */
function getCaseSensitiveTagName(tagName) {
  return caseSensitiveTagNamesMap[tagName];
}

/**
 * Formats DOM attributes to a hash map.
 *
 * @param  {NamedNodeMap} attributes - List of attributes.
 * @return {object}                  - Map of attribute name to value.
 */
function formatAttributes(attributes) {
  var result = {};
  var attribute;
  // `NamedNodeMap` is array-like
  for (var i = 0, len = attributes.length; i < len; i++) {
    attribute = attributes[i];
    result[attribute.name] = attribute.value;
  }
  return result;
}

/**
 * Corrects the tag name if it is case-sensitive (SVG).
 * Otherwise, returns the lowercase tag name (HTML).
 *
 * @param  {string} tagName - Lowercase tag name.
 * @return {string}         - Formatted tag name.
 */
function formatTagName(tagName) {
  tagName = tagName.toLowerCase();
  var caseSensitiveTagName = getCaseSensitiveTagName(tagName);
  if (caseSensitiveTagName) {
    return caseSensitiveTagName;
  }
  return tagName;
}

/**
 * Transforms DOM nodes to `domhandler` nodes.
 *
 * @param  {NodeList}     nodes         - DOM nodes.
 * @param  {Element|null} [parent=null] - Parent node.
 * @param  {string}       [directive]   - Directive.
 * @return {Array<Comment|Element|ProcessingInstruction|Text>}
 */
function formatDOM(nodes, parent, directive) {
  parent = parent || null;
  var result = [];

  for (var index = 0, len = nodes.length; index < len; index++) {
    var node = nodes[index];
    var current;

    // set the node data given the type
    switch (node.nodeType) {
      case 1:
        // script, style, or tag
        current = new Element(
          formatTagName(node.nodeName),
          formatAttributes(node.attributes)
        );
        current.children = formatDOM(node.childNodes, current);
        break;

      case 3:
        current = new Text(node.nodeValue);
        break;

      case 8:
        current = new Comment(node.nodeValue);
        break;

      default:
        continue;
    }

    // set previous node next
    var prev = result[index - 1] || null;
    if (prev) {
      prev.next = current;
    }

    // set properties for current node
    current.parent = parent;
    current.prev = prev;
    current.next = null;

    result.push(current);
  }

  if (directive) {
    current = new ProcessingInstruction(
      directive.substring(0, directive.indexOf(' ')).toLowerCase(),
      directive
    );
    current.next = result[0] || null;
    current.parent = parent;
    result.unshift(current);

    if (result[1]) {
      result[1].prev = result[0];
    }
  }

  return result;
}

/**
 * Detects if browser is Internet Explorer.
 *
 * @return {boolean} - Whether IE is detected.
 */
function isIE() {
  return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
}

module.exports = {
  formatAttributes: formatAttributes,
  formatDOM: formatDOM,
  isIE: isIE
};


/***/ }),

/***/ "./node_modules/html-react-parser/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-react-parser/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var domToReact = __webpack_require__(/*! ./lib/dom-to-react */ "./node_modules/html-react-parser/lib/dom-to-react.js");
var attributesToProps = __webpack_require__(/*! ./lib/attributes-to-props */ "./node_modules/html-react-parser/lib/attributes-to-props.js");
var htmlToDOM = __webpack_require__(/*! html-dom-parser */ "./node_modules/html-dom-parser/lib/client/html-to-dom.js");

var domParserOptions = { lowerCaseAttributeNames: false };

/**
 * Converts HTML string to React elements.
 *
 * @param  {String}   html                    - HTML string.
 * @param  {Object}   [options]               - Parser options.
 * @param  {Object}   [options.htmlparser2]   - htmlparser2 options.
 * @param  {Object}   [options.library]       - Library for React, Preact, etc.
 * @param  {Function} [options.replace]       - Replace method.
 * @return {JSX.Element|JSX.Element[]|String} - React element(s), empty array, or string.
 */
function HTMLReactParser(html, options) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  if (html === '') {
    return [];
  }
  options = options || {};
  return domToReact(
    htmlToDOM(html, options.htmlparser2 || domParserOptions),
    options
  );
}

HTMLReactParser.domToReact = domToReact;
HTMLReactParser.htmlToDOM = htmlToDOM;
HTMLReactParser.attributesToProps = attributesToProps;

// support CommonJS and ES Modules
module.exports = HTMLReactParser;
module.exports.default = HTMLReactParser;


/***/ }),

/***/ "./node_modules/html-react-parser/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/html-react-parser/index.mjs ***!
  \**************************************************/
/*! exports provided: domToReact, htmlToDOM, attributesToProps, default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domToReact", function() { return domToReact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlToDOM", function() { return htmlToDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributesToProps", function() { return attributesToProps; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/html-react-parser/index.js");


var domToReact = _index_js__WEBPACK_IMPORTED_MODULE_0__.domToReact;
var htmlToDOM = _index_js__WEBPACK_IMPORTED_MODULE_0__.htmlToDOM;
var attributesToProps = _index_js__WEBPACK_IMPORTED_MODULE_0__.attributesToProps;

/* harmony default export */ __webpack_exports__["default"] = (_index_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./node_modules/html-react-parser/lib/attributes-to-props.js":
/*!*******************************************************************!*\
  !*** ./node_modules/html-react-parser/lib/attributes-to-props.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var reactProperty = __webpack_require__(/*! react-property */ "./node_modules/react-property/lib/index.js");
var utilities = __webpack_require__(/*! ./utilities */ "./node_modules/html-react-parser/lib/utilities.js");

/**
 * Converts HTML/SVG DOM attributes to React props.
 *
 * @param  {object} [attributes={}] - HTML/SVG DOM attributes.
 * @return {object}                 - React props.
 */
module.exports = function attributesToProps(attributes) {
  attributes = attributes || {};

  var attributeName;
  var attributeNameLowerCased;
  var attributeValue;
  var propName;
  var propertyInfo;
  var props = {};

  for (attributeName in attributes) {
    attributeValue = attributes[attributeName];

    // ARIA (aria-*) or custom data (data-*) attribute
    if (reactProperty.isCustomAttribute(attributeName)) {
      props[attributeName] = attributeValue;
      continue;
    }

    // convert HTML/SVG attribute to React prop
    attributeNameLowerCased = attributeName.toLowerCase();
    propName = reactProperty.possibleStandardNames[attributeNameLowerCased];

    if (propName) {
      props[propName] = attributeValue;
      propertyInfo = reactProperty.getPropertyInfo(propName);
      switch (propertyInfo && propertyInfo.type) {
        case reactProperty.BOOLEAN:
          props[propName] = true;
          break;
        case reactProperty.OVERLOADED_BOOLEAN:
          if (attributeValue === '') {
            props[propName] = true;
          }
          break;
      }
      continue;
    }

    // preserve custom attribute if React >=16
    if (utilities.PRESERVE_CUSTOM_ATTRIBUTES) {
      props[attributeName] = attributeValue;
    }
  }

  // transform inline style to object
  utilities.setStyleProp(attributes.style, props);

  return props;
};


/***/ }),

/***/ "./node_modules/html-react-parser/lib/dom-to-react.js":
/*!************************************************************!*\
  !*** ./node_modules/html-react-parser/lib/dom-to-react.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var attributesToProps = __webpack_require__(/*! ./attributes-to-props */ "./node_modules/html-react-parser/lib/attributes-to-props.js");
var utilities = __webpack_require__(/*! ./utilities */ "./node_modules/html-react-parser/lib/utilities.js");

var setStyleProp = utilities.setStyleProp;

/**
 * Converts DOM nodes to JSX element(s).
 *
 * @param  {DomElement[]} nodes             - DOM nodes.
 * @param  {object}       [options={}]      - Options.
 * @param  {Function}     [options.replace] - Replacer.
 * @param  {object}       [options.library] - Library (React/Preact/etc.).
 * @return {string|JSX.Element|JSX.Element[]}
 */
function domToReact(nodes, options) {
  options = options || {};

  var library = options.library || React;
  var cloneElement = library.cloneElement;
  var createElement = library.createElement;
  var isValidElement = library.isValidElement;

  var result = [];
  var node;
  var hasReplace = typeof options.replace === 'function';
  var replaceElement;
  var props;
  var children;
  var data;
  var trim = options.trim;

  for (var i = 0, len = nodes.length; i < len; i++) {
    node = nodes[i];

    // replace with custom React element (if present)
    if (hasReplace) {
      replaceElement = options.replace(node);

      if (isValidElement(replaceElement)) {
        // set "key" prop for sibling elements
        // https://fb.me/react-warning-keys
        if (len > 1) {
          replaceElement = cloneElement(replaceElement, {
            key: replaceElement.key || i
          });
        }
        result.push(replaceElement);
        continue;
      }
    }

    if (node.type === 'text') {
      // if trim option is enabled, skip whitespace text nodes
      if (trim) {
        data = node.data.trim();
        if (data) {
          result.push(node.data);
        }
      } else {
        result.push(node.data);
      }
      continue;
    }

    props = node.attribs;
    if (skipAttributesToProps(node)) {
      setStyleProp(props.style, props);
    } else if (props) {
      props = attributesToProps(props);
    }

    children = null;

    switch (node.type) {
      case 'script':
      case 'style':
        // prevent text in <script> or <style> from being escaped
        // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
        if (node.children[0]) {
          props.dangerouslySetInnerHTML = {
            __html: node.children[0].data
          };
        }
        break;

      case 'tag':
        // setting textarea value in children is an antipattern in React
        // https://reactjs.org/docs/forms.html#the-textarea-tag
        if (node.name === 'textarea' && node.children[0]) {
          props.defaultValue = node.children[0].data;
        } else if (node.children && node.children.length) {
          // continue recursion of creating React elements (if applicable)
          children = domToReact(node.children, options);
        }
        break;

      // skip all other cases (e.g., comment)
      default:
        continue;
    }

    // set "key" prop for sibling elements
    // https://fb.me/react-warning-keys
    if (len > 1) {
      props.key = i;
    }

    result.push(createElement(node.name, props, children));
  }

  return result.length === 1 ? result[0] : result;
}

/**
 * Determines whether DOM element attributes should be transformed to props.
 * Web Components should not have their attributes transformed except for `style`.
 *
 * @param  {DomElement} node
 * @return {boolean}
 */
function skipAttributesToProps(node) {
  return (
    utilities.PRESERVE_CUSTOM_ATTRIBUTES &&
    node.type === 'tag' &&
    utilities.isCustomComponent(node.name, node.attribs)
  );
}

module.exports = domToReact;


/***/ }),

/***/ "./node_modules/html-react-parser/lib/utilities.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-react-parser/lib/utilities.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styleToJS = __webpack_require__(/*! style-to-js */ "./node_modules/style-to-js/cjs/index.js").default;

/**
 * Swap key with value in an object.
 *
 * @param  {Object}   obj        - The object.
 * @param  {Function} [override] - The override method.
 * @return {Object}              - The inverted object.
 */
function invertObject(obj, override) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('First argument must be an object');
  }

  var key;
  var value;
  var isOverridePresent = typeof override === 'function';
  var overrides = {};
  var result = {};

  for (key in obj) {
    value = obj[key];

    if (isOverridePresent) {
      overrides = override(key, value);
      if (overrides && overrides.length === 2) {
        result[overrides[0]] = overrides[1];
        continue;
      }
    }

    if (typeof value === 'string') {
      result[value] = key;
    }
  }

  return result;
}

/**
 * Check if a given tag is a custom component.
 *
 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
 *
 * @param {string} tagName - The name of the html tag.
 * @param {Object} props   - The props being passed to the element.
 * @return {boolean}
 */
function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return props && typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

var styleToJSOptions = { reactCompat: true };

/**
 * Sets style prop.
 *
 * @param {null|undefined|string} style
 * @param {object} props
 */
function setStyleProp(style, props) {
  if (style === null || style === undefined) {
    return;
  }
  try {
    props.style = styleToJS(style, styleToJSOptions);
  } catch (err) {
    props.style = {};
  }
}

/**
 * @constant {boolean}
 * @see {@link https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html}
 */
var PRESERVE_CUSTOM_ATTRIBUTES = React.version.split('.')[0] >= 16;

module.exports = {
  PRESERVE_CUSTOM_ATTRIBUTES: PRESERVE_CUSTOM_ATTRIBUTES,
  invertObject: invertObject,
  isCustomComponent: isCustomComponent,
  setStyleProp: setStyleProp
};


/***/ }),

/***/ "./node_modules/inline-style-parser/index.js":
/*!***************************************************!*\
  !*** ./node_modules/inline-style-parser/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
module.exports = function(style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];

  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = { line: lineno, column: column };
    return function(node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  var errorsList = [];

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(
      options.source + ':' + lineno + ':' + column + ': ' + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while ((c = comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

    var i = 2;
    while (
      EMPTY_STRING != style.charAt(i) &&
      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
    ) {
      ++i;
    }
    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;

    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);

    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val
        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
        : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);

    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];

    comments(decls);

    // declarations
    var decl;
    while ((decl = declaration())) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}


/***/ }),

/***/ "./node_modules/react-property/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-property/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];
reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      attributeName = _ref2[1];

  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function capitalize(token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

var _require = __webpack_require__(/*! ../lib/possibleStandardNamesOptimized */ "./node_modules/react-property/lib/possibleStandardNamesOptimized.js"),
    CAMELCASE = _require.CAMELCASE,
    SAME = _require.SAME,
    possibleStandardNamesOptimized = _require.possibleStandardNames;

var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
/**
 * Checks whether a property name is a custom attribute.
 *
 * @see {@link https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25}
 *
 * @param {string}
 * @return {boolean}
 */

var isCustomAttribute = RegExp.prototype.test.bind( // eslint-disable-next-line no-misleading-character-class
new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
var possibleStandardNames = Object.keys(possibleStandardNamesOptimized).reduce(function (accumulator, standardName) {
  var propName = possibleStandardNamesOptimized[standardName];

  if (propName === SAME) {
    accumulator[standardName] = standardName;
  } else if (propName === CAMELCASE) {
    accumulator[standardName.toLowerCase()] = standardName;
  } else {
    accumulator[standardName] = propName;
  }

  return accumulator;
}, {});

exports.BOOLEAN = BOOLEAN;
exports.BOOLEANISH_STRING = BOOLEANISH_STRING;
exports.NUMERIC = NUMERIC;
exports.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
exports.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
exports.RESERVED = RESERVED;
exports.STRING = STRING;
exports.getPropertyInfo = getPropertyInfo;
exports.isCustomAttribute = isCustomAttribute;
exports.possibleStandardNames = possibleStandardNames;


/***/ }),

/***/ "./node_modules/react-property/lib/possibleStandardNamesOptimized.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-property/lib/possibleStandardNamesOptimized.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').
var SAME = 0;
exports.SAME = SAME;

// An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').
var CAMELCASE = 1;
exports.CAMELCASE = CAMELCASE;

exports.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  'accept-charset': 'acceptCharset',
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: 'className',
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: 'htmlFor',
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  'http-equiv': 'httpEquiv',
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  'accent-height': 'accentHeight',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  'alignment-baseline': 'alignmentBaseline',
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  'arabic-form': 'arabicForm',
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  'baseline-shift': 'baselineShift',
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  'cap-height': 'capHeight',
  clip: 0,
  clipPath: 1,
  'clip-path': 'clipPath',
  clipPathUnits: 1,
  clipRule: 1,
  'clip-rule': 'clipRule',
  color: 0,
  colorInterpolation: 1,
  'color-interpolation': 'colorInterpolation',
  colorInterpolationFilters: 1,
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorProfile: 1,
  'color-profile': 'colorProfile',
  colorRendering: 1,
  'color-rendering': 'colorRendering',
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  'dominant-baseline': 'dominantBaseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  'enable-background': 'enableBackground',
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  'fill-opacity': 'fillOpacity',
  fillRule: 1,
  'fill-rule': 'fillRule',
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  'flood-opacity': 'floodOpacity',
  floodColor: 1,
  'flood-color': 'floodColor',
  focusable: 0,
  fontFamily: 1,
  'font-family': 'fontFamily',
  fontSize: 1,
  'font-size': 'fontSize',
  fontSizeAdjust: 1,
  'font-size-adjust': 'fontSizeAdjust',
  fontStretch: 1,
  'font-stretch': 'fontStretch',
  fontStyle: 1,
  'font-style': 'fontStyle',
  fontVariant: 1,
  'font-variant': 'fontVariant',
  fontWeight: 1,
  'font-weight': 'fontWeight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  'glyph-name': 'glyphName',
  glyphOrientationHorizontal: 1,
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphOrientationVertical: 1,
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  'horiz-adv-x': 'horizAdvX',
  horizOriginX: 1,
  'horiz-origin-x': 'horizOriginX',
  ideographic: 0,
  imageRendering: 1,
  'image-rendering': 'imageRendering',
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  'letter-spacing': 'letterSpacing',
  lightingColor: 1,
  'lighting-color': 'lightingColor',
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  'marker-end': 'markerEnd',
  markerHeight: 1,
  markerMid: 1,
  'marker-mid': 'markerMid',
  markerStart: 1,
  'marker-start': 'markerStart',
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  'overline-position': 'overlinePosition',
  overlineThickness: 1,
  'overline-thickness': 'overlineThickness',
  paintOrder: 1,
  'paint-order': 'paintOrder',
  panose1: 0,
  'panose-1': 'panose1',
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  'pointer-events': 'pointerEvents',
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  'rendering-intent': 'renderingIntent',
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  'shape-rendering': 'shapeRendering',
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  'stop-color': 'stopColor',
  stopOpacity: 1,
  'stop-opacity': 'stopOpacity',
  strikethroughPosition: 1,
  'strikethrough-position': 'strikethroughPosition',
  strikethroughThickness: 1,
  'strikethrough-thickness': 'strikethroughThickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  'stroke-dasharray': 'strokeDasharray',
  strokeDashoffset: 1,
  'stroke-dashoffset': 'strokeDashoffset',
  strokeLinecap: 1,
  'stroke-linecap': 'strokeLinecap',
  strokeLinejoin: 1,
  'stroke-linejoin': 'strokeLinejoin',
  strokeMiterlimit: 1,
  'stroke-miterlimit': 'strokeMiterlimit',
  strokeWidth: 1,
  'stroke-width': 'strokeWidth',
  strokeOpacity: 1,
  'stroke-opacity': 'strokeOpacity',
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  'text-anchor': 'textAnchor',
  textDecoration: 1,
  'text-decoration': 'textDecoration',
  textLength: 1,
  textRendering: 1,
  'text-rendering': 'textRendering',
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  'underline-position': 'underlinePosition',
  underlineThickness: 1,
  'underline-thickness': 'underlineThickness',
  unicode: 0,
  unicodeBidi: 1,
  'unicode-bidi': 'unicodeBidi',
  unicodeRange: 1,
  'unicode-range': 'unicodeRange',
  unitsPerEm: 1,
  'units-per-em': 'unitsPerEm',
  unselectable: 0,
  vAlphabetic: 1,
  'v-alphabetic': 'vAlphabetic',
  values: 0,
  vectorEffect: 1,
  'vector-effect': 'vectorEffect',
  version: 0,
  vertAdvY: 1,
  'vert-adv-y': 'vertAdvY',
  vertOriginX: 1,
  'vert-origin-x': 'vertOriginX',
  vertOriginY: 1,
  'vert-origin-y': 'vertOriginY',
  vHanging: 1,
  'v-hanging': 'vHanging',
  vIdeographic: 1,
  'v-ideographic': 'vIdeographic',
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  'v-mathematical': 'vMathematical',
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  'word-spacing': 'wordSpacing',
  writingMode: 1,
  'writing-mode': 'writingMode',
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  'x-height': 'xHeight',
  xlinkActuate: 1,
  'xlink:actuate': 'xlinkActuate',
  xlinkArcrole: 1,
  'xlink:arcrole': 'xlinkArcrole',
  xlinkHref: 1,
  'xlink:href': 'xlinkHref',
  xlinkRole: 1,
  'xlink:role': 'xlinkRole',
  xlinkShow: 1,
  'xlink:show': 'xlinkShow',
  xlinkTitle: 1,
  'xlink:title': 'xlinkTitle',
  xlinkType: 1,
  'xlink:type': 'xlinkType',
  xmlBase: 1,
  'xml:base': 'xmlBase',
  xmlLang: 1,
  'xml:lang': 'xmlLang',
  xmlns: 0,
  'xml:space': 'xmlSpace',
  xmlnsXlink: 1,
  'xmlns:xlink': 'xmlnsXlink',
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};


/***/ }),

/***/ "./node_modules/style-to-js/cjs/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-js/cjs/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var style_to_object_1 = __importDefault(__webpack_require__(/*! style-to-object */ "./node_modules/style-to-object/index.js"));
var utilities_1 = __webpack_require__(/*! ./utilities */ "./node_modules/style-to-js/cjs/utilities.js");
function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    style_to_object_1["default"](style, function (property, value) {
        if (property && value) {
            output[utilities_1.camelCase(property, options)] = value;
        }
    });
    return output;
}
exports["default"] = StyleToJS;


/***/ }),

/***/ "./node_modules/style-to-js/cjs/utilities.js":
/*!***************************************************!*\
  !*** ./node_modules/style-to-js/cjs/utilities.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var skipCamelCase = function (property) {
    return !property ||
        NO_HYPHEN_REGEX.test(property) ||
        CUSTOM_PROPERTY_REGEX.test(property);
};
var capitalize = function (match, character) {
    return character.toUpperCase();
};
var trimHyphen = function (match, prefix) { return prefix + "-"; };
var camelCase = function (property, options) {
    if (options === void 0) { options = {}; }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (!options.reactCompat) {
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
exports.camelCase = camelCase;


/***/ }),

/***/ "./node_modules/style-to-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! inline-style-parser */ "./node_modules/inline-style-parser/index.js");

/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== 'string') {
    return output;
  }

  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
}

module.exports = StyleToObject;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9hZHNCYW5uZXIvYWRzQmFubmVyLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9hZHNCYW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RvbWVsZW1lbnR0eXBlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RvbWhhbmRsZXIvbGliL25vZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9odG1sLWRvbS1wYXJzZXIvbGliL2NsaWVudC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9odG1sLWRvbS1wYXJzZXIvbGliL2NsaWVudC9kb21wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9odG1sLWRvbS1wYXJzZXIvbGliL2NsaWVudC9odG1sLXRvLWRvbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2h0bWwtZG9tLXBhcnNlci9saWIvY2xpZW50L3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2h0bWwtcmVhY3QtcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaHRtbC1yZWFjdC1wYXJzZXIvaW5kZXgubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaHRtbC1yZWFjdC1wYXJzZXIvbGliL2F0dHJpYnV0ZXMtdG8tcHJvcHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9odG1sLXJlYWN0LXBhcnNlci9saWIvZG9tLXRvLXJlYWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaHRtbC1yZWFjdC1wYXJzZXIvbGliL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wYXJzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wcm9wZXJ0eS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wcm9wZXJ0eS9saWIvcG9zc2libGVTdGFuZGFyZE5hbWVzT3B0aW1pemVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tanMvY2pzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tanMvY2pzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlLXRvLW9iamVjdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VCYXNlUGF0aCIsInVzZVJvdXRlciIsImJhc2VQYXRoIiwiSW1nIiwicHJvcHMiLCJmaW5hbFNyYyIsImNoYXJBdCIsInNyYyIsIkFkc0Jhbm5lciIsInVzZVN0YXRlIiwiZW50ZXJlZEVtYWlsIiwic2V0RW50ZXJlZEVtYWlsIiwiZW1haWxJc1ZhbGlkIiwic2V0RW1haWxJc1ZhbGlkIiwiZW1haWxJblZhbGlkTXNnIiwic2V0RW1haWxJblZhbGlkTXNnIiwiZm9ybUlzVmFsaWQiLCJzZXRGb3JtSXNWYWxpZCIsImVtYWlsQ2hhbmdlSGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJpbmNsdWRlcyIsInZhbGlkYXRlRW1haWxIYW5kbGVyIiwic3VibWl0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVrQXBpSGVscGVyIiwidGhlbiIsInJlcyIsInJlc3BvbnNlIiwiZGF0YSIsInN0YXR1cyIsIm5vdyIsIkRhdGUiLCJpdGVtIiwiZXhwaXJ5IiwiZ2V0VGltZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiUm91dGVyIiwicHVzaCIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJjdGFTZWN0aW9uIiwic2V0Q3RhU2VjdGlvbiIsInVzZUVmZmVjdCIsInNlcnZpY2VDb250ZW50IiwiY3RhX3NlY3Rpb24iLCJfX2h0bWwiLCJhZHNCYW5uZXJDc3MiLCJhZHNiYW5uZXIiLCJwYXJzZSIsInRpdGxlIiwiY29udGVudCIsInByb2Nlc3MiLCJjbGFzc05hbWUiLCJidG5jbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsbUJBQ0xDLDZEQUFTLEVBREo7QUFBQSxNQUNsQkMsUUFEa0IsY0FDbEJBLFFBRGtCOztBQUUxQixTQUFPQSxRQUFQO0FBQ0gsQyxDQUVEOztHQUxnQkYsVztVQUNTQyxxRDs7O0FBS3pCLElBQU1FLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNuQixNQUFNRixRQUFRLEdBQUdGLFdBQVcsRUFBNUI7QUFDQSxNQUFNSyxRQUFRLEdBQUcsQ0FBQUgsUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVJLE1BQVYsQ0FBaUIsQ0FBakIsT0FBd0IsR0FBeEIsR0FBOEJKLFFBQVEsR0FBR0UsS0FBSyxDQUFDRyxHQUEvQyxHQUFxREgsS0FBSyxDQUFDRyxHQUE1RTtBQUNBLHNCQUNJLDRHQUNRSCxLQURSO0FBRUksT0FBRyxFQUFFQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBVEQ7O0lBQU1GLEc7VUFDZUgsVzs7O0tBRGZHLEc7QUFXU0Esa0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxtQkFBbUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZUFBZTtBQUNqRCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1CQUFtQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQsMkNBQTJDLGlDQUFpQyxFQUFFO0FBQzlFO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlDQUFpQyxFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaUNBQWlDLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCwrQkFBK0IsRUFBRTtBQUNqRixtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZaQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUJBQU8sQ0FBQywyRUFBYTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2xLQSxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBYTtBQUNyQyxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBYTs7QUFFckMseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDL0JBLGdCQUFnQixtQkFBTyxDQUFDLDJFQUFhO0FBQ3JDLGlCQUFpQixtQkFBTyxDQUFDLGtFQUFxQjs7QUFFOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBc0QsU0FBUztBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxTQUFTO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckIsWUFBWSxhQUFhO0FBQ3pCLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLGFBQWE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoSkEsaUJBQWlCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQzdDLHdCQUF3QixtQkFBTyxDQUFDLDhGQUEyQjtBQUMzRCxnQkFBZ0IsbUJBQU8sQ0FBQyxpRkFBaUI7O0FBRXpDLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksU0FBUztBQUNyQixZQUFZLGlDQUFpQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5Qzs7QUFFbEMsaUJBQWlCLHNDQUFlO0FBQ2hDLGdCQUFnQixzQ0FBZTtBQUMvQix3QkFBd0Isc0NBQWU7O0FBRS9CLHFHQUFlLEVBQUM7Ozs7Ozs7Ozs7OztBQ04vQixvQkFBb0IsbUJBQU8sQ0FBQyxrRUFBZ0I7QUFDNUMsZ0JBQWdCLG1CQUFPLENBQUMsc0VBQWE7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTyxlQUFlO0FBQ2xDLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxREEsWUFBWSxtQkFBTyxDQUFDLDRDQUFPO0FBQzNCLHdCQUF3QixtQkFBTyxDQUFDLDBGQUF1QjtBQUN2RCxnQkFBZ0IsbUJBQU8sQ0FBQyxzRUFBYTs7QUFFckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLFlBQVksT0FBTyxrQkFBa0I7QUFDckMsWUFBWSxTQUFTO0FBQ3JCLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLFNBQVM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksV0FBVztBQUN2QixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDaklBLFlBQVksbUJBQU8sQ0FBQyw0Q0FBTztBQUMzQixnQkFBZ0IsbUJBQU8sQ0FBQyw0REFBYTs7QUFFckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksU0FBUztBQUNyQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2QsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2R0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FLDBCQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BRYTs7QUFFYiw4Q0FBOEMsY0FBYzs7QUFFNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTJCLCtCQUErQjtBQUMxRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7OztBQUdBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsZUFBZSxtQkFBTyxDQUFDLGtIQUF1QztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxJQUFJOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1VEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNWVhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLHdDQUF3QyxtQkFBTyxDQUFDLGdFQUFpQjtBQUNqRSxrQkFBa0IsbUJBQU8sQ0FBQyxnRUFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxQkFBcUI7QUFDaEU7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBLFlBQVksbUJBQU8sQ0FBQyx3RUFBcUI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGtDQUFrQztBQUNsQztBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLFNBQVM7QUFDckIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUGF0aCgpIHtcclxuICAgIGNvbnN0IHsgYmFzZVBhdGggfSA9IHVzZVJvdXRlcigpO1xyXG4gICAgcmV0dXJuIGJhc2VQYXRoO1xyXG59XHJcblxyXG4vL3dyYXBwZXIgZm9yIHRoZSByZWFjdCBpbWcgY29tcG9uZW50IHRoYXQgd2lsbCBjaGVjayBmb3IgbG9jYWxseSBzb3VyY2VkIGltYWdlcyBhbmQgcHJlcGVuZCB0aGUgYmFzZVBhdGhcclxuY29uc3QgSW1nID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlUGF0aCA9IHVzZUJhc2VQYXRoKCk7XHJcbiAgICBjb25zdCBmaW5hbFNyYyA9IGJhc2VQYXRoPy5jaGFyQXQoMCkgPT09IFwiL1wiID8gYmFzZVBhdGggKyBwcm9wcy5zcmMgOiBwcm9wcy5zcmM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICBzcmM9e2ZpbmFsU3JjfVxyXG4gICAgICAgIC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltZzsiLCJleHBvcnQgZGVmYXVsdCBcIi5mb3ItbmV3IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi5mb3ItbmV3IC50aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xcbiAgY29sb3I6ICMxNTE1MTU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5mb3ItbmV3IC50aXRsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNGQkQ1MDE7XFxuICBib3R0b206IC0xNnB4O1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5mb3ItbmV3Lm9yZGVyQmFubmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjI0NUE7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuLmZvci1uZXcub3JkZXJCYW5uZXI6OmJlZm9yZSwgLmZvci1uZXcub3JkZXJCYW5uZXI6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL3VrL2Jhbm5lckJvcmRlci5zdmdcXFwiKTtcXG59XFxuLmZvci1uZXcub3JkZXJCYW5uZXIgLnNlY3Rpb24tdGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uZm9yLW5ldy5vcmRlckJhbm5lciAuc2VjdGlvbi10aXRsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbi5mb3ItbmV3Lm9yZGVyQmFubmVyIC5kZXNjIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uZm9yLW5ldzo6YmVmb3JlLCAuZm9yLW5ldzo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi91ay9wYXBlcmN1dGVmZmFjdC5zdmdcXFwiKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiA4NXB4O1xcbiAgei1pbmRleDogLTE7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLmZvci1uZXc6OmJlZm9yZSB7XFxuICB0b3A6IC04NHB4O1xcbn1cXG4uZm9yLW5ldzo6YWZ0ZXIge1xcbiAgYm90dG9tOiAtODRweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5mb3ItbmV3IC5iYW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE0OHB4O1xcbiAgaGVpZ2h0OiAxNDhweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAxLjA1LCAxLjA1KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgfVxcbn1cXG4uZm9yLW5ldyAuYmFubmVyIC5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcbi5mb3ItbmV3IC5iYW5uZXIgLmNvbnRlbnQgc3BhbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5mb3ItbmV3IC50ZXh0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzE1MTUxNTtcXG59XFxuLmZvci1uZXcgLmlucHV0LXdycHBlciB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMDtcXG59XFxuLmZvci1uZXcgLmlucHV0LXdycHBlciAuaW5wdXQtZ3JvdXAgLmVtYWlsSW5wdXQge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI3MHB4KTtcXG59XFxuLmZvci1uZXcgLmlucHV0LXdycHBlciAuaW5wdXQtZ3JvdXAgLmVtYWlsSW5wdXQgLmZvcm0tY29udHJvbCB7XFxuICBwYWRkaW5nOiA2cHggMTVweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQ6ICNmMmY2Zjg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uZm9yLW5ldyAuaW5wdXQtd3JwcGVyIC5pbnB1dC1ncm91cCAuYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xcbiAgLmZvci1uZXcgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMzJweDtcXG4gIH1cXG4gIC5mb3ItbmV3IC50ZXh0LFxcbi5mb3ItbmV3IC5pbm5lci10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG4gIC5mb3ItbmV3IC5pbnB1dC13cnBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC5mb3ItbmV3IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gIH1cXG4gIC5mb3ItbmV3Lm9yZGVyQmFubmVyIHAge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5mb3ItbmV3Lm9yZGVyQmFubmVyIC5tdC01IHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZvci1uZXcgLmlucHV0LXdycHBlciB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICB9XFxuICAuZm9yLW5ldyAuaW5wdXQtd3JwcGVyIC5pbnB1dC1ncm91cCAuZW1haWxJbnB1dCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNzBweCk7XFxuICB9XFxuICAuZm9yLW5ldyAuaW5wdXQtd3JwcGVyIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgfVxcbiAgLmZvci1uZXcgLmlucHV0LXdycHBlciAuaW5wdXQtZ3JvdXAgLmJ0biB7XFxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xcbiAgLmZvci1uZXcub3JkZXJCYW5uZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVxcbiAgLmZvci1uZXcub3JkZXJCYW5uZXIgLmRlc2Mge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5mb3ItbmV3OjpiZWZvcmUge1xcbiAgICB0b3A6IC0zNHB4O1xcbiAgfVxcbiAgLmZvci1uZXc6OmFmdGVyIHtcXG4gICAgYm90dG9tOiAtMzRweDtcXG4gIH1cXG4gIC5mb3ItbmV3IC5pbnB1dC13cnBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5mb3ItbmV3IC5pbnB1dC13cnBwZXIgLmlucHV0LWdyb3VwIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAuZm9yLW5ldyAuaW5wdXQtd3JwcGVyIC5pbnB1dC1ncm91cCAuZW1haWxJbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmZvci1uZXcgLmlucHV0LXdycHBlciAuaW5wdXQtZ3JvdXAgLmVtYWlsSW5wdXQgLmZvcm0tY29udHJvbCB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5mb3ItbmV3IC5pbnB1dC13cnBwZXIgLmlucHV0LWdyb3VwIC5idG4ge1xcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gIH1cXG59XCI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vIEFQSSBoZWxwZXJcclxuaW1wb3J0IHsgdWtBcGlIZWxwZXIgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXIvYXBpSGVscGVyJztcclxuXHJcbi8vIEh0bWwgUGFyc2VyXHJcbmltcG9ydCBwYXJzZSBmcm9tIFwiaHRtbC1yZWFjdC1wYXJzZXJcIjtcclxuXHJcbi8vIHNjc3NcclxuaW1wb3J0IGFkc0Jhbm5lckNzcyBmcm9tIFwiLi9hZHNCYW5uZXIuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IEltZyBmcm9tIFwiLi4vLi4vQ29tbW9uL2ltYWdlXCI7XHJcblxyXG5mdW5jdGlvbiBBZHNCYW5uZXIocHJvcHMpIHtcclxuXHJcbiAgY29uc3QgW2VudGVyZWRFbWFpbCwgc2V0RW50ZXJlZEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWxJc1ZhbGlkLCBzZXRFbWFpbElzVmFsaWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZW1haWxJblZhbGlkTXNnLCBzZXRFbWFpbEluVmFsaWRNc2ddID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmb3JtSXNWYWxpZCwgc2V0Rm9ybUlzVmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBlbWFpbENoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEVudGVyZWRFbWFpbChldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgIHNldEZvcm1Jc1ZhbGlkKFxyXG4gICAgICBldmVudC50YXJnZXQudmFsdWUuaW5jbHVkZXMoJ0AnKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2YWxpZGF0ZUVtYWlsSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldEVtYWlsSXNWYWxpZChlbnRlcmVkRW1haWwuaW5jbHVkZXMoJ0AnKSk7XHJcbiAgICBzZXRFbWFpbEluVmFsaWRNc2coXCJFbWFpbCBzaG91bGQgYmUgZWl0aGVyIHZhbGlkIG9yIG5vdCBiZSBibGFuay5cIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlbnRlcmVkRW1haWwgPT09IFwiXCIpIHtcclxuICAgICAgc2V0RW1haWxJblZhbGlkTXNnKFwiUGxlYXNlIEVudGVyIEVtYWlsXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNldEVtYWlsSW5WYWxpZE1zZygnJyk7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImVtYWlsXCIsIGVudGVyZWRFbWFpbCk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZ4XCIsIFwidW5sb2NrRGlzY291bnRcIik7XHJcblxyXG4gICAgICB1a0FwaUhlbHBlcignY3JlYXRlQWNjb3VudCcsICdQT1NUJywgZm9ybURhdGEsIG51bGwpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCBEYXRhIGluIGxvY2Fsc3Ryb3JhZ2VcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0ge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgIGV4cGlyeTogbm93LmdldFRpbWUoKSArICgxMiAqIDYwICogNjAgKiAxMDAwKSxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvb3JkZXInKTtcclxuICAgICAgICAgICAgc2V0RW1haWxJblZhbGlkTXNnKCcnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRFbWFpbEluVmFsaWRNc2cocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGBFcnJvcjogJHtlcnJvcn1gKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2N0YVNlY3Rpb24sIHNldEN0YVNlY3Rpb25dID0gdXNlU3RhdGUoKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMuc2VydmljZUNvbnRlbnQpIHtcclxuICAgICAgc2V0Q3RhU2VjdGlvbihwcm9wcy5zZXJ2aWNlQ29udGVudC5jdGFfc2VjdGlvbilcclxuICAgIH1cclxuICB9LCBbcHJvcHMuc2VydmljZUNvbnRlbnRdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYWRzQmFubmVyQ3NzIH19Pjwvc3R5bGU+XHJcbiAgICAgIHtwcm9wcy5hZHNiYW5uZXIgP1xyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvci1uZXcgb3JkZXJCYW5uZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj57Y3RhU2VjdGlvbiAmJiBwYXJzZShjdGFTZWN0aW9uLnRpdGxlKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj57Y3RhU2VjdGlvbiAmJiBwYXJzZShjdGFTZWN0aW9uLmNvbnRlbnQpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIHNlY29uZGFyeS1idG5cIiBocmVmPXtgJHtwcm9jZXNzLmVudi5iYXNlUGF0aH0vb3JkZXJgfT5PcmRlciBhbiBFc3NheTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biB3aGl0ZS1idG5cIiBocmVmPXtgJHtwcm9jZXNzLmVudi5iYXNlUGF0aH0vcHJpY2VgfT5DaGVjayBQcmljZXM8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Bmb3ItbmV3ICR7cHJvcHMuY2xhc3NOYW1lfWB9IGlkPVwib2ZmZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPXtwcm9wcy5zcmN9IGFsdD1cImJhbm5lclwiIHdpZHRoPVwiMTQ4XCIgaGVpZ2h0PVwiMTQ4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+MTUlIDxzcGFuPm9mZjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+b24geW91ciBmaXJzdCBjaGVja291dDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPk5ldyB0byBDaGVhcGVzdEVzc2F5IFNpZ24gdXAgJmFtcDsgU2F2ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdycHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiIG1ldGhvZD1cInBvc3RcIiBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbElucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW50ZXJlZEVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZW1haWxDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3ZhbGlkYXRlRW1haWxIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yTXNnXCIgdGl0bGU9e2VtYWlsSW5WYWxpZE1zZ30+e2VtYWlsSW5WYWxpZE1zZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtgYnRuIHRoZW1lLWJ0biAke3Byb3BzLmJ0bmNsYXNzTmFtZX1gfT5HZXQgYSBEaXNjb3VudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkc0Jhbm5lcjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRvY3R5cGUgPSBleHBvcnRzLkNEQVRBID0gZXhwb3J0cy5UYWcgPSBleHBvcnRzLlN0eWxlID0gZXhwb3J0cy5TY3JpcHQgPSBleHBvcnRzLkNvbW1lbnQgPSBleHBvcnRzLkRpcmVjdGl2ZSA9IGV4cG9ydHMuVGV4dCA9IGV4cG9ydHMuUm9vdCA9IGV4cG9ydHMuaXNUYWcgPSBleHBvcnRzLkVsZW1lbnRUeXBlID0gdm9pZCAwO1xuLyoqIFR5cGVzIG9mIGVsZW1lbnRzIGZvdW5kIGluIGh0bWxwYXJzZXIyJ3MgRE9NICovXG52YXIgRWxlbWVudFR5cGU7XG4oZnVuY3Rpb24gKEVsZW1lbnRUeXBlKSB7XG4gICAgLyoqIFR5cGUgZm9yIHRoZSByb290IGVsZW1lbnQgb2YgYSBkb2N1bWVudCAqL1xuICAgIEVsZW1lbnRUeXBlW1wiUm9vdFwiXSA9IFwicm9vdFwiO1xuICAgIC8qKiBUeXBlIGZvciBUZXh0ICovXG4gICAgRWxlbWVudFR5cGVbXCJUZXh0XCJdID0gXCJ0ZXh0XCI7XG4gICAgLyoqIFR5cGUgZm9yIDw/IC4uLiA/PiAqL1xuICAgIEVsZW1lbnRUeXBlW1wiRGlyZWN0aXZlXCJdID0gXCJkaXJlY3RpdmVcIjtcbiAgICAvKiogVHlwZSBmb3IgPCEtLSAuLi4gLS0+ICovXG4gICAgRWxlbWVudFR5cGVbXCJDb21tZW50XCJdID0gXCJjb21tZW50XCI7XG4gICAgLyoqIFR5cGUgZm9yIDxzY3JpcHQ+IHRhZ3MgKi9cbiAgICBFbGVtZW50VHlwZVtcIlNjcmlwdFwiXSA9IFwic2NyaXB0XCI7XG4gICAgLyoqIFR5cGUgZm9yIDxzdHlsZT4gdGFncyAqL1xuICAgIEVsZW1lbnRUeXBlW1wiU3R5bGVcIl0gPSBcInN0eWxlXCI7XG4gICAgLyoqIFR5cGUgZm9yIEFueSB0YWcgKi9cbiAgICBFbGVtZW50VHlwZVtcIlRhZ1wiXSA9IFwidGFnXCI7XG4gICAgLyoqIFR5cGUgZm9yIDwhW0NEQVRBWyAuLi4gXV0+ICovXG4gICAgRWxlbWVudFR5cGVbXCJDREFUQVwiXSA9IFwiY2RhdGFcIjtcbiAgICAvKiogVHlwZSBmb3IgPCFkb2N0eXBlIC4uLj4gKi9cbiAgICBFbGVtZW50VHlwZVtcIkRvY3R5cGVcIl0gPSBcImRvY3R5cGVcIjtcbn0pKEVsZW1lbnRUeXBlID0gZXhwb3J0cy5FbGVtZW50VHlwZSB8fCAoZXhwb3J0cy5FbGVtZW50VHlwZSA9IHt9KSk7XG4vKipcbiAqIFRlc3RzIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBhIHRhZyBvciBub3QuXG4gKlxuICogQHBhcmFtIGVsZW0gRWxlbWVudCB0byB0ZXN0XG4gKi9cbmZ1bmN0aW9uIGlzVGFnKGVsZW0pIHtcbiAgICByZXR1cm4gKGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuVGFnIHx8XG4gICAgICAgIGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuU2NyaXB0IHx8XG4gICAgICAgIGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuU3R5bGUpO1xufVxuZXhwb3J0cy5pc1RhZyA9IGlzVGFnO1xuLy8gRXhwb3J0cyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbi8qKiBUeXBlIGZvciB0aGUgcm9vdCBlbGVtZW50IG9mIGEgZG9jdW1lbnQgKi9cbmV4cG9ydHMuUm9vdCA9IEVsZW1lbnRUeXBlLlJvb3Q7XG4vKiogVHlwZSBmb3IgVGV4dCAqL1xuZXhwb3J0cy5UZXh0ID0gRWxlbWVudFR5cGUuVGV4dDtcbi8qKiBUeXBlIGZvciA8PyAuLi4gPz4gKi9cbmV4cG9ydHMuRGlyZWN0aXZlID0gRWxlbWVudFR5cGUuRGlyZWN0aXZlO1xuLyoqIFR5cGUgZm9yIDwhLS0gLi4uIC0tPiAqL1xuZXhwb3J0cy5Db21tZW50ID0gRWxlbWVudFR5cGUuQ29tbWVudDtcbi8qKiBUeXBlIGZvciA8c2NyaXB0PiB0YWdzICovXG5leHBvcnRzLlNjcmlwdCA9IEVsZW1lbnRUeXBlLlNjcmlwdDtcbi8qKiBUeXBlIGZvciA8c3R5bGU+IHRhZ3MgKi9cbmV4cG9ydHMuU3R5bGUgPSBFbGVtZW50VHlwZS5TdHlsZTtcbi8qKiBUeXBlIGZvciBBbnkgdGFnICovXG5leHBvcnRzLlRhZyA9IEVsZW1lbnRUeXBlLlRhZztcbi8qKiBUeXBlIGZvciA8IVtDREFUQVsgLi4uIF1dPiAqL1xuZXhwb3J0cy5DREFUQSA9IEVsZW1lbnRUeXBlLkNEQVRBO1xuLyoqIFR5cGUgZm9yIDwhZG9jdHlwZSAuLi4+ICovXG5leHBvcnRzLkRvY3R5cGUgPSBFbGVtZW50VHlwZS5Eb2N0eXBlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2xvbmVOb2RlID0gZXhwb3J0cy5oYXNDaGlsZHJlbiA9IGV4cG9ydHMuaXNEb2N1bWVudCA9IGV4cG9ydHMuaXNEaXJlY3RpdmUgPSBleHBvcnRzLmlzQ29tbWVudCA9IGV4cG9ydHMuaXNUZXh0ID0gZXhwb3J0cy5pc0NEQVRBID0gZXhwb3J0cy5pc1RhZyA9IGV4cG9ydHMuRWxlbWVudCA9IGV4cG9ydHMuRG9jdW1lbnQgPSBleHBvcnRzLk5vZGVXaXRoQ2hpbGRyZW4gPSBleHBvcnRzLlByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IGV4cG9ydHMuQ29tbWVudCA9IGV4cG9ydHMuVGV4dCA9IGV4cG9ydHMuRGF0YU5vZGUgPSBleHBvcnRzLk5vZGUgPSB2b2lkIDA7XG52YXIgZG9tZWxlbWVudHR5cGVfMSA9IHJlcXVpcmUoXCJkb21lbGVtZW50dHlwZVwiKTtcbnZhciBub2RlVHlwZXMgPSBuZXcgTWFwKFtcbiAgICBbZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5UYWcsIDFdLFxuICAgIFtkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLlNjcmlwdCwgMV0sXG4gICAgW2RvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuU3R5bGUsIDFdLFxuICAgIFtkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLkRpcmVjdGl2ZSwgMV0sXG4gICAgW2RvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuVGV4dCwgM10sXG4gICAgW2RvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuQ0RBVEEsIDRdLFxuICAgIFtkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLkNvbW1lbnQsIDhdLFxuICAgIFtkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLlJvb3QsIDldLFxuXSk7XG4vKipcbiAqIFRoaXMgb2JqZWN0IHdpbGwgYmUgdXNlZCBhcyB0aGUgcHJvdG90eXBlIGZvciBOb2RlcyB3aGVuIGNyZWF0aW5nIGFcbiAqIERPTS1MZXZlbC0xLWNvbXBsaWFudCBzdHJ1Y3R1cmUuXG4gKi9cbnZhciBOb2RlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIG5vZGUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gTm9kZSh0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIC8qKiBQYXJlbnQgb2YgdGhlIG5vZGUgKi9cbiAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICAvKiogUHJldmlvdXMgc2libGluZyAqL1xuICAgICAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgICAgICAvKiogTmV4dCBzaWJsaW5nICovXG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgICAgIC8qKiBUaGUgc3RhcnQgaW5kZXggb2YgdGhlIG5vZGUuIFJlcXVpcmVzIGB3aXRoU3RhcnRJbmRpY2VzYCBvbiB0aGUgaGFuZGxlciB0byBiZSBgdHJ1ZS4gKi9cbiAgICAgICAgdGhpcy5zdGFydEluZGV4ID0gbnVsbDtcbiAgICAgICAgLyoqIFRoZSBlbmQgaW5kZXggb2YgdGhlIG5vZGUuIFJlcXVpcmVzIGB3aXRoRW5kSW5kaWNlc2Agb24gdGhlIGhhbmRsZXIgdG8gYmUgYHRydWUuICovXG4gICAgICAgIHRoaXMuZW5kSW5kZXggPSBudWxsO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsIFwibm9kZVR5cGVcIiwge1xuICAgICAgICAvLyBSZWFkLW9ubHkgYWxpYXNlc1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHJldHVybiAoX2EgPSBub2RlVHlwZXMuZ2V0KHRoaXMudHlwZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IDE7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsIFwicGFyZW50Tm9kZVwiLCB7XG4gICAgICAgIC8vIFJlYWQtd3JpdGUgYWxpYXNlcyBmb3IgcHJvcGVydGllc1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwgXCJwcmV2aW91c1NpYmxpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXY7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgICAgICAgIHRoaXMucHJldiA9IHByZXY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsIFwibmV4dFNpYmxpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5leHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCA9IG5leHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBDbG9uZSB0aGlzIG5vZGUsIGFuZCBvcHRpb25hbGx5IGl0cyBjaGlsZHJlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZWN1cnNpdmUgQ2xvbmUgY2hpbGQgbm9kZXMgYXMgd2VsbC5cbiAgICAgKiBAcmV0dXJucyBBIGNsb25lIG9mIHRoZSBub2RlLlxuICAgICAqL1xuICAgIE5vZGUucHJvdG90eXBlLmNsb25lTm9kZSA9IGZ1bmN0aW9uIChyZWN1cnNpdmUpIHtcbiAgICAgICAgaWYgKHJlY3Vyc2l2ZSA9PT0gdm9pZCAwKSB7IHJlY3Vyc2l2ZSA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiBjbG9uZU5vZGUodGhpcywgcmVjdXJzaXZlKTtcbiAgICB9O1xuICAgIHJldHVybiBOb2RlO1xufSgpKTtcbmV4cG9ydHMuTm9kZSA9IE5vZGU7XG4vKipcbiAqIEEgbm9kZSB0aGF0IGNvbnRhaW5zIHNvbWUgZGF0YS5cbiAqL1xudmFyIERhdGFOb2RlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEYXRhTm9kZSwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgbm9kZVxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBjb250ZW50IG9mIHRoZSBkYXRhIG5vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBEYXRhTm9kZSh0eXBlLCBkYXRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHR5cGUpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShEYXRhTm9kZS5wcm90b3R5cGUsIFwibm9kZVZhbHVlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIERhdGFOb2RlO1xufShOb2RlKSk7XG5leHBvcnRzLkRhdGFOb2RlID0gRGF0YU5vZGU7XG4vKipcbiAqIFRleHQgd2l0aGluIHRoZSBkb2N1bWVudC5cbiAqL1xudmFyIFRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRleHQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVGV4dChkYXRhKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLlRleHQsIGRhdGEpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBUZXh0O1xufShEYXRhTm9kZSkpO1xuZXhwb3J0cy5UZXh0ID0gVGV4dDtcbi8qKlxuICogQ29tbWVudHMgd2l0aGluIHRoZSBkb2N1bWVudC5cbiAqL1xudmFyIENvbW1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbW1lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29tbWVudChkYXRhKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLkNvbW1lbnQsIGRhdGEpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBDb21tZW50O1xufShEYXRhTm9kZSkpO1xuZXhwb3J0cy5Db21tZW50ID0gQ29tbWVudDtcbi8qKlxuICogUHJvY2Vzc2luZyBpbnN0cnVjdGlvbnMsIGluY2x1ZGluZyBkb2MgdHlwZXMuXG4gKi9cbnZhciBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFByb2Nlc3NpbmdJbnN0cnVjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24obmFtZSwgZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLkRpcmVjdGl2ZSwgZGF0YSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFByb2Nlc3NpbmdJbnN0cnVjdGlvbjtcbn0oRGF0YU5vZGUpKTtcbmV4cG9ydHMuUHJvY2Vzc2luZ0luc3RydWN0aW9uID0gUHJvY2Vzc2luZ0luc3RydWN0aW9uO1xuLyoqXG4gKiBBIGBOb2RlYCB0aGF0IGNhbiBoYXZlIGNoaWxkcmVuLlxuICovXG52YXIgTm9kZVdpdGhDaGlsZHJlbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTm9kZVdpdGhDaGlsZHJlbiwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdHlwZSBUeXBlIG9mIHRoZSBub2RlLlxuICAgICAqIEBwYXJhbSBjaGlsZHJlbiBDaGlsZHJlbiBvZiB0aGUgbm9kZS4gT25seSBjZXJ0YWluIG5vZGUgdHlwZXMgY2FuIGhhdmUgY2hpbGRyZW4uXG4gICAgICovXG4gICAgZnVuY3Rpb24gTm9kZVdpdGhDaGlsZHJlbih0eXBlLCBjaGlsZHJlbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0eXBlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlV2l0aENoaWxkcmVuLnByb3RvdHlwZSwgXCJmaXJzdENoaWxkXCIsIHtcbiAgICAgICAgLy8gQWxpYXNlc1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHJldHVybiAoX2EgPSB0aGlzLmNoaWxkcmVuWzBdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGVXaXRoQ2hpbGRyZW4ucHJvdG90eXBlLCBcImxhc3RDaGlsZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgID8gdGhpcy5jaGlsZHJlblt0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGVXaXRoQ2hpbGRyZW4ucHJvdG90eXBlLCBcImNoaWxkTm9kZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE5vZGVXaXRoQ2hpbGRyZW47XG59KE5vZGUpKTtcbmV4cG9ydHMuTm9kZVdpdGhDaGlsZHJlbiA9IE5vZGVXaXRoQ2hpbGRyZW47XG4vKipcbiAqIFRoZSByb290IG5vZGUgb2YgdGhlIGRvY3VtZW50LlxuICovXG52YXIgRG9jdW1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERvY3VtZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERvY3VtZW50KGNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLlJvb3QsIGNoaWxkcmVuKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gRG9jdW1lbnQ7XG59KE5vZGVXaXRoQ2hpbGRyZW4pKTtcbmV4cG9ydHMuRG9jdW1lbnQgPSBEb2N1bWVudDtcbi8qKlxuICogQW4gZWxlbWVudCB3aXRoaW4gdGhlIERPTS5cbiAqL1xudmFyIEVsZW1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEVsZW1lbnQsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgdGFnLCBlZy4gYGRpdmAsIGBzcGFuYC5cbiAgICAgKiBAcGFyYW0gYXR0cmlicyBPYmplY3QgbWFwcGluZyBhdHRyaWJ1dGUgbmFtZXMgdG8gYXR0cmlidXRlIHZhbHVlcy5cbiAgICAgKiBAcGFyYW0gY2hpbGRyZW4gQ2hpbGRyZW4gb2YgdGhlIG5vZGUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gRWxlbWVudChuYW1lLCBhdHRyaWJzLCBjaGlsZHJlbiwgdHlwZSkge1xuICAgICAgICBpZiAoY2hpbGRyZW4gPT09IHZvaWQgMCkgeyBjaGlsZHJlbiA9IFtdOyB9XG4gICAgICAgIGlmICh0eXBlID09PSB2b2lkIDApIHsgdHlwZSA9IG5hbWUgPT09IFwic2NyaXB0XCJcbiAgICAgICAgICAgID8gZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5TY3JpcHRcbiAgICAgICAgICAgIDogbmFtZSA9PT0gXCJzdHlsZVwiXG4gICAgICAgICAgICAgICAgPyBkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLlN0eWxlXG4gICAgICAgICAgICAgICAgOiBkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLlRhZzsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0eXBlLCBjaGlsZHJlbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIF90aGlzLmF0dHJpYnMgPSBhdHRyaWJzO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgXCJ0YWdOYW1lXCIsIHtcbiAgICAgICAgLy8gRE9NIExldmVsIDEgYWxpYXNlc1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsIFwiYXR0cmlidXRlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmF0dHJpYnMpLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdGhpcy5hdHRyaWJzW25hbWVdLFxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IChfYSA9IF90aGlzW1wieC1hdHRyaWJzTmFtZXNwYWNlXCJdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbbmFtZV0sXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogKF9iID0gX3RoaXNbXCJ4LWF0dHJpYnNQcmVmaXhcIl0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYltuYW1lXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEVsZW1lbnQ7XG59KE5vZGVXaXRoQ2hpbGRyZW4pKTtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaXMgYSBgRWxlbWVudGAsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBpc1RhZyhub2RlKSB7XG4gICAgcmV0dXJuICgwLCBkb21lbGVtZW50dHlwZV8xLmlzVGFnKShub2RlKTtcbn1cbmV4cG9ydHMuaXNUYWcgPSBpc1RhZztcbi8qKlxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbm9kZSBoYXMgdGhlIHR5cGUgYENEQVRBYCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzQ0RBVEEobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09IGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuQ0RBVEE7XG59XG5leHBvcnRzLmlzQ0RBVEEgPSBpc0NEQVRBO1xuLyoqXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGNoZWNrLlxuICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBub2RlIGhhcyB0aGUgdHlwZSBgVGV4dGAsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBpc1RleHQobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09IGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuVGV4dDtcbn1cbmV4cG9ydHMuaXNUZXh0ID0gaXNUZXh0O1xuLyoqXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGNoZWNrLlxuICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBub2RlIGhhcyB0aGUgdHlwZSBgQ29tbWVudGAsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBpc0NvbW1lbnQobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09IGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuQ29tbWVudDtcbn1cbmV4cG9ydHMuaXNDb21tZW50ID0gaXNDb21tZW50O1xuLyoqXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGNoZWNrLlxuICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBub2RlIGhhcyB0aGUgdHlwZSBgUHJvY2Vzc2luZ0luc3RydWN0aW9uYCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzRGlyZWN0aXZlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50eXBlID09PSBkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLkRpcmVjdGl2ZTtcbn1cbmV4cG9ydHMuaXNEaXJlY3RpdmUgPSBpc0RpcmVjdGl2ZTtcbi8qKlxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbm9kZSBoYXMgdGhlIHR5cGUgYFByb2Nlc3NpbmdJbnN0cnVjdGlvbmAsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBpc0RvY3VtZW50KG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50eXBlID09PSBkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLlJvb3Q7XG59XG5leHBvcnRzLmlzRG9jdW1lbnQgPSBpc0RvY3VtZW50O1xuLyoqXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGNoZWNrLlxuICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBub2RlIGlzIGEgYE5vZGVXaXRoQ2hpbGRyZW5gIChoYXMgY2hpbGRyZW4pLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaGFzQ2hpbGRyZW4obm9kZSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobm9kZSwgXCJjaGlsZHJlblwiKTtcbn1cbmV4cG9ydHMuaGFzQ2hpbGRyZW4gPSBoYXNDaGlsZHJlbjtcbi8qKlxuICogQ2xvbmUgYSBub2RlLCBhbmQgb3B0aW9uYWxseSBpdHMgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHJlY3Vyc2l2ZSBDbG9uZSBjaGlsZCBub2RlcyBhcyB3ZWxsLlxuICogQHJldHVybnMgQSBjbG9uZSBvZiB0aGUgbm9kZS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUsIHJlY3Vyc2l2ZSkge1xuICAgIGlmIChyZWN1cnNpdmUgPT09IHZvaWQgMCkgeyByZWN1cnNpdmUgPSBmYWxzZTsgfVxuICAgIHZhciByZXN1bHQ7XG4gICAgaWYgKGlzVGV4dChub2RlKSkge1xuICAgICAgICByZXN1bHQgPSBuZXcgVGV4dChub2RlLmRhdGEpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0NvbW1lbnQobm9kZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gbmV3IENvbW1lbnQobm9kZS5kYXRhKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNUYWcobm9kZSkpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gcmVjdXJzaXZlID8gY2xvbmVDaGlsZHJlbihub2RlLmNoaWxkcmVuKSA6IFtdO1xuICAgICAgICB2YXIgY2xvbmVfMSA9IG5ldyBFbGVtZW50KG5vZGUubmFtZSwgX19hc3NpZ24oe30sIG5vZGUuYXR0cmlicyksIGNoaWxkcmVuKTtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIChjaGlsZC5wYXJlbnQgPSBjbG9uZV8xKTsgfSk7XG4gICAgICAgIGlmIChub2RlW1wieC1hdHRyaWJzTmFtZXNwYWNlXCJdKSB7XG4gICAgICAgICAgICBjbG9uZV8xW1wieC1hdHRyaWJzTmFtZXNwYWNlXCJdID0gX19hc3NpZ24oe30sIG5vZGVbXCJ4LWF0dHJpYnNOYW1lc3BhY2VcIl0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlW1wieC1hdHRyaWJzUHJlZml4XCJdKSB7XG4gICAgICAgICAgICBjbG9uZV8xW1wieC1hdHRyaWJzUHJlZml4XCJdID0gX19hc3NpZ24oe30sIG5vZGVbXCJ4LWF0dHJpYnNQcmVmaXhcIl0pO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGNsb25lXzE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQ0RBVEEobm9kZSkpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gcmVjdXJzaXZlID8gY2xvbmVDaGlsZHJlbihub2RlLmNoaWxkcmVuKSA6IFtdO1xuICAgICAgICB2YXIgY2xvbmVfMiA9IG5ldyBOb2RlV2l0aENoaWxkcmVuKGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuQ0RBVEEsIGNoaWxkcmVuKTtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIChjaGlsZC5wYXJlbnQgPSBjbG9uZV8yKTsgfSk7XG4gICAgICAgIHJlc3VsdCA9IGNsb25lXzI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzRG9jdW1lbnQobm9kZSkpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gcmVjdXJzaXZlID8gY2xvbmVDaGlsZHJlbihub2RlLmNoaWxkcmVuKSA6IFtdO1xuICAgICAgICB2YXIgY2xvbmVfMyA9IG5ldyBEb2N1bWVudChjaGlsZHJlbik7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiAoY2hpbGQucGFyZW50ID0gY2xvbmVfMyk7IH0pO1xuICAgICAgICBpZiAobm9kZVtcIngtbW9kZVwiXSkge1xuICAgICAgICAgICAgY2xvbmVfM1tcIngtbW9kZVwiXSA9IG5vZGVbXCJ4LW1vZGVcIl07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gY2xvbmVfMztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNEaXJlY3RpdmUobm9kZSkpIHtcbiAgICAgICAgdmFyIGluc3RydWN0aW9uID0gbmV3IFByb2Nlc3NpbmdJbnN0cnVjdGlvbihub2RlLm5hbWUsIG5vZGUuZGF0YSk7XG4gICAgICAgIGlmIChub2RlW1wieC1uYW1lXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGluc3RydWN0aW9uW1wieC1uYW1lXCJdID0gbm9kZVtcIngtbmFtZVwiXTtcbiAgICAgICAgICAgIGluc3RydWN0aW9uW1wieC1wdWJsaWNJZFwiXSA9IG5vZGVbXCJ4LXB1YmxpY0lkXCJdO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25bXCJ4LXN5c3RlbUlkXCJdID0gbm9kZVtcIngtc3lzdGVtSWRcIl07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gaW5zdHJ1Y3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0OiBcIiArIG5vZGUudHlwZSk7XG4gICAgfVxuICAgIHJlc3VsdC5zdGFydEluZGV4ID0gbm9kZS5zdGFydEluZGV4O1xuICAgIHJlc3VsdC5lbmRJbmRleCA9IG5vZGUuZW5kSW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuY2xvbmVOb2RlID0gY2xvbmVOb2RlO1xuZnVuY3Rpb24gY2xvbmVDaGlsZHJlbihjaGlsZHMpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBjaGlsZHMubWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2xvbmVOb2RlKGNoaWxkLCB0cnVlKTsgfSk7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjaGlsZHJlbltpXS5wcmV2ID0gY2hpbGRyZW5baSAtIDFdO1xuICAgICAgICBjaGlsZHJlbltpIC0gMV0ubmV4dCA9IGNoaWxkcmVuW2ldO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW47XG59XG4iLCIvKipcbiAqIFNWRyBlbGVtZW50cyBhcmUgY2FzZS1zZW5zaXRpdmUuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvU1ZHL0VsZW1lbnQjU1ZHX2VsZW1lbnRzX0FfdG9fWn1cbiAqL1xudmFyIENBU0VfU0VOU0lUSVZFX1RBR19OQU1FUyA9IFtcbiAgJ2FuaW1hdGVNb3Rpb24nLFxuICAnYW5pbWF0ZVRyYW5zZm9ybScsXG4gICdjbGlwUGF0aCcsXG4gICdmZUJsZW5kJyxcbiAgJ2ZlQ29sb3JNYXRyaXgnLFxuICAnZmVDb21wb25lbnRUcmFuc2ZlcicsXG4gICdmZUNvbXBvc2l0ZScsXG4gICdmZUNvbnZvbHZlTWF0cml4JyxcbiAgJ2ZlRGlmZnVzZUxpZ2h0aW5nJyxcbiAgJ2ZlRGlzcGxhY2VtZW50TWFwJyxcbiAgJ2ZlRHJvcFNoYWRvdycsXG4gICdmZUZsb29kJyxcbiAgJ2ZlRnVuY0EnLFxuICAnZmVGdW5jQicsXG4gICdmZUZ1bmNHJyxcbiAgJ2ZlRnVuY1InLFxuICAnZmVHYXVzc2FpbkJsdXInLFxuICAnZmVJbWFnZScsXG4gICdmZU1lcmdlJyxcbiAgJ2ZlTWVyZ2VOb2RlJyxcbiAgJ2ZlTW9ycGhvbG9neScsXG4gICdmZU9mZnNldCcsXG4gICdmZVBvaW50TGlnaHQnLFxuICAnZmVTcGVjdWxhckxpZ2h0aW5nJyxcbiAgJ2ZlU3BvdExpZ2h0JyxcbiAgJ2ZlVGlsZScsXG4gICdmZVR1cmJ1bGVuY2UnLFxuICAnZm9yZWlnbk9iamVjdCcsXG4gICdsaW5lYXJHcmFkaWVudCcsXG4gICdyYWRpYWxHcmFkaWVudCcsXG4gICd0ZXh0UGF0aCdcbl07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDQVNFX1NFTlNJVElWRV9UQUdfTkFNRVM6IENBU0VfU0VOU0lUSVZFX1RBR19OQU1FU1xufTtcbiIsIi8vIGNvbnN0YW50c1xudmFyIEhUTUwgPSAnaHRtbCc7XG52YXIgSEVBRCA9ICdoZWFkJztcbnZhciBCT0RZID0gJ2JvZHknO1xudmFyIEZJUlNUX1RBR19SRUdFWCA9IC88KFthLXpBLVpdK1swLTldPykvOyAvLyBlLmcuLCA8aDE+XG52YXIgSEVBRF9UQUdfUkVHRVggPSAvPGhlYWQuKj4vaTtcbnZhciBCT0RZX1RBR19SRUdFWCA9IC88Ym9keS4qPi9pO1xuXG4vLyBmYWxscyBiYWNrIHRvIGBwYXJzZUZyb21TdHJpbmdgIGlmIGBjcmVhdGVIVE1MRG9jdW1lbnRgIGNhbm5vdCBiZSB1c2VkXG52YXIgcGFyc2VGcm9tRG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudGAnXG4gICk7XG59O1xuXG52YXIgcGFyc2VGcm9tU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGBET01QYXJzZXIucHJvdG90eXBlLnBhcnNlRnJvbVN0cmluZ2AnXG4gICk7XG59O1xuXG4vKipcbiAqIERPTVBhcnNlciAocGVyZm9ybWFuY2U6IHNsb3cpLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvQVBJL0RPTVBhcnNlciNQYXJzaW5nX2FuX1NWR19vcl9IVE1MX2RvY3VtZW50XG4gKi9cbmlmICh0eXBlb2Ygd2luZG93LkRPTVBhcnNlciA9PT0gJ2Z1bmN0aW9uJykge1xuICB2YXIgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKTtcbiAgdmFyIG1pbWVUeXBlID0gJ3RleHQvaHRtbCc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gSFRNTCBkb2N1bWVudCB1c2luZyBgRE9NUGFyc2VyLnBhcnNlRnJvbVN0cmluZ2AuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaHRtbCAgICAgIC0gVGhlIEhUTUwgc3RyaW5nLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IFt0YWdOYW1lXSAtIFRoZSBlbGVtZW50IHRvIHJlbmRlciB0aGUgSFRNTCAod2l0aCAnYm9keScgYXMgZmFsbGJhY2spLlxuICAgKiBAcmV0dXJuIHtIVE1MRG9jdW1lbnR9XG4gICAqL1xuICBwYXJzZUZyb21TdHJpbmcgPSBmdW5jdGlvbiAoaHRtbCwgdGFnTmFtZSkge1xuICAgIGlmICh0YWdOYW1lKSB7XG4gICAgICBodG1sID0gJzwnICsgdGFnTmFtZSArICc+JyArIGh0bWwgKyAnPC8nICsgdGFnTmFtZSArICc+JztcbiAgICB9XG5cbiAgICByZXR1cm4gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCBtaW1lVHlwZSk7XG4gIH07XG5cbiAgcGFyc2VGcm9tRG9jdW1lbnQgPSBwYXJzZUZyb21TdHJpbmc7XG59XG5cbi8qKlxuICogRE9NSW1wbGVtZW50YXRpb24gKHBlcmZvcm1hbmNlOiBmYWlyKS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0FQSS9ET01JbXBsZW1lbnRhdGlvbi9jcmVhdGVIVE1MRG9jdW1lbnRcbiAqL1xuaWYgKGRvY3VtZW50LmltcGxlbWVudGF0aW9uKSB7XG4gIHZhciBpc0lFID0gcmVxdWlyZSgnLi91dGlsaXRpZXMnKS5pc0lFO1xuXG4gIC8vIHRpdGxlIHBhcmFtZXRlciBpcyByZXF1aXJlZCBpbiBJRVxuICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2ZmOTc1NDU3KHY9dnMuODUpLmFzcHhcbiAgdmFyIGRvYyA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcbiAgICBpc0lFKCkgPyAnaHRtbC1kb20tcGFyc2VyJyA6IHVuZGVmaW5lZFxuICApO1xuXG4gIC8qKlxuICAgKiBVc2UgSFRNTCBkb2N1bWVudCBjcmVhdGVkIGJ5IGBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnRgLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGh0bWwgICAgICAtIFRoZSBIVE1MIHN0cmluZy5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBbdGFnTmFtZV0gLSBUaGUgZWxlbWVudCB0byByZW5kZXIgdGhlIEhUTUwgKHdpdGggJ2JvZHknIGFzIGZhbGxiYWNrKS5cbiAgICogQHJldHVybiB7SFRNTERvY3VtZW50fVxuICAgKi9cbiAgcGFyc2VGcm9tRG9jdW1lbnQgPSBmdW5jdGlvbiAoaHRtbCwgdGFnTmFtZSkge1xuICAgIGlmICh0YWdOYW1lKSB7XG4gICAgICBkb2MuZG9jdW1lbnRFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpWzBdLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICByZXR1cm4gZG9jO1xuICAgIH1cblxuICAgIGRvYy5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gZG9jO1xuICB9O1xufVxuXG4vKipcbiAqIFRlbXBsYXRlIChwZXJmb3JtYW5jZTogZmFzdCkuXG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvdGVtcGxhdGVcbiAqL1xudmFyIHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnZhciBwYXJzZUZyb21UZW1wbGF0ZTtcblxuaWYgKHRlbXBsYXRlLmNvbnRlbnQpIHtcbiAgLyoqXG4gICAqIFVzZXMgYSB0ZW1wbGF0ZSBlbGVtZW50IChjb250ZW50IGZyYWdtZW50KSB0byBwYXJzZSBIVE1MLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGh0bWwgLSBUaGUgSFRNTCBzdHJpbmcuXG4gICAqIEByZXR1cm4ge05vZGVMaXN0fVxuICAgKi9cbiAgcGFyc2VGcm9tVGVtcGxhdGUgPSBmdW5jdGlvbiAoaHRtbCkge1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2RlcztcbiAgfTtcbn1cblxuLyoqXG4gKiBQYXJzZXMgSFRNTCBzdHJpbmcgdG8gRE9NIG5vZGVzLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gICBodG1sIC0gSFRNTCBtYXJrdXAuXG4gKiBAcmV0dXJuIHtOb2RlTGlzdH1cbiAqL1xuZnVuY3Rpb24gZG9tcGFyc2VyKGh0bWwpIHtcbiAgdmFyIGZpcnN0VGFnTmFtZTtcbiAgdmFyIG1hdGNoID0gaHRtbC5tYXRjaChGSVJTVF9UQUdfUkVHRVgpO1xuXG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIGZpcnN0VGFnTmFtZSA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICB2YXIgZG9jO1xuICB2YXIgZWxlbWVudDtcbiAgdmFyIGVsZW1lbnRzO1xuXG4gIHN3aXRjaCAoZmlyc3RUYWdOYW1lKSB7XG4gICAgY2FzZSBIVE1MOlxuICAgICAgZG9jID0gcGFyc2VGcm9tU3RyaW5nKGh0bWwpO1xuXG4gICAgICAvLyB0aGUgY3JlYXRlZCBkb2N1bWVudCBtYXkgY29tZSB3aXRoIGZpbGxlciBoZWFkL2JvZHkgZWxlbWVudHMsXG4gICAgICAvLyBzbyBtYWtlIHN1cmUgdG8gcmVtb3ZlIHRoZW0gaWYgdGhleSBkb24ndCBhY3R1YWxseSBleGlzdFxuICAgICAgaWYgKCFIRUFEX1RBR19SRUdFWC50ZXN0KGh0bWwpKSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoSEVBRClbMF07XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghQk9EWV9UQUdfUkVHRVgudGVzdChodG1sKSkge1xuICAgICAgICBlbGVtZW50ID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKEJPRFkpWzBdO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKEhUTUwpO1xuXG4gICAgY2FzZSBIRUFEOlxuICAgIGNhc2UgQk9EWTpcbiAgICAgIGVsZW1lbnRzID0gcGFyc2VGcm9tRG9jdW1lbnQoaHRtbCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZmlyc3RUYWdOYW1lKTtcblxuICAgICAgLy8gaWYgdGhlcmUncyBhIHNpYmxpbmcgZWxlbWVudCwgdGhlbiByZXR1cm4gYm90aCBlbGVtZW50c1xuICAgICAgaWYgKEJPRFlfVEFHX1JFR0VYLnRlc3QoaHRtbCkgJiYgSEVBRF9UQUdfUkVHRVgudGVzdChodG1sKSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudHNbMF0ucGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuXG4gICAgLy8gbG93LWxldmVsIHRhZyBvciB0ZXh0XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChwYXJzZUZyb21UZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gcGFyc2VGcm9tVGVtcGxhdGUoaHRtbCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZUZyb21Eb2N1bWVudChodG1sLCBCT0RZKS5nZXRFbGVtZW50c0J5VGFnTmFtZShCT0RZKVswXVxuICAgICAgICAuY2hpbGROb2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbXBhcnNlcjtcbiIsInZhciBkb21wYXJzZXIgPSByZXF1aXJlKCcuL2RvbXBhcnNlcicpO1xudmFyIGZvcm1hdERPTSA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzJykuZm9ybWF0RE9NO1xuXG52YXIgRElSRUNUSVZFX1JFR0VYID0gLzwoIVthLXpBLVpcXHNdKyk+LzsgLy8gZS5nLiwgPCFkb2N0eXBlIGh0bWw+XG5cbi8qKlxuICogUGFyc2VzIEhUTUwgc3RyaW5nIHRvIERPTSBub2RlcyBpbiBicm93c2VyLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaHRtbCAgLSBIVE1MIG1hcmt1cC5cbiAqIEByZXR1cm4ge0RvbUVsZW1lbnRbXX0gLSBET00gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIEhUTUxET01QYXJzZXIoaHRtbCkge1xuICBpZiAodHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgaWYgKGh0bWwgPT09ICcnKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLy8gbWF0Y2ggZGlyZWN0aXZlXG4gIHZhciBtYXRjaCA9IGh0bWwubWF0Y2goRElSRUNUSVZFX1JFR0VYKTtcbiAgdmFyIGRpcmVjdGl2ZTtcblxuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICBkaXJlY3RpdmUgPSBtYXRjaFsxXTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRET00oZG9tcGFyc2VyKGh0bWwpLCBudWxsLCBkaXJlY3RpdmUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhUTUxET01QYXJzZXI7XG4iLCJ2YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbnZhciBkb21oYW5kbGVyID0gcmVxdWlyZSgnZG9taGFuZGxlci9saWIvbm9kZScpO1xuXG52YXIgQ0FTRV9TRU5TSVRJVkVfVEFHX05BTUVTID0gY29uc3RhbnRzLkNBU0VfU0VOU0lUSVZFX1RBR19OQU1FUztcblxudmFyIENvbW1lbnQgPSBkb21oYW5kbGVyLkNvbW1lbnQ7XG52YXIgRWxlbWVudCA9IGRvbWhhbmRsZXIuRWxlbWVudDtcbnZhciBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gPSBkb21oYW5kbGVyLlByb2Nlc3NpbmdJbnN0cnVjdGlvbjtcbnZhciBUZXh0ID0gZG9taGFuZGxlci5UZXh0O1xuXG52YXIgY2FzZVNlbnNpdGl2ZVRhZ05hbWVzTWFwID0ge307XG52YXIgdGFnTmFtZTtcblxuZm9yICh2YXIgaSA9IDAsIGxlbiA9IENBU0VfU0VOU0lUSVZFX1RBR19OQU1FUy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICB0YWdOYW1lID0gQ0FTRV9TRU5TSVRJVkVfVEFHX05BTUVTW2ldO1xuICBjYXNlU2Vuc2l0aXZlVGFnTmFtZXNNYXBbdGFnTmFtZS50b0xvd2VyQ2FzZSgpXSA9IHRhZ05hbWU7XG59XG5cbi8qKlxuICogR2V0cyBjYXNlLXNlbnNpdGl2ZSB0YWcgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICB0YWdOYW1lIC0gVGFnIG5hbWUgaW4gbG93ZXJjYXNlLlxuICogQHJldHVybiB7c3RyaW5nfHVuZGVmaW5lZH0gICAgICAgICAtIENhc2Utc2Vuc2l0aXZlIHRhZyBuYW1lLlxuICovXG5mdW5jdGlvbiBnZXRDYXNlU2Vuc2l0aXZlVGFnTmFtZSh0YWdOYW1lKSB7XG4gIHJldHVybiBjYXNlU2Vuc2l0aXZlVGFnTmFtZXNNYXBbdGFnTmFtZV07XG59XG5cbi8qKlxuICogRm9ybWF0cyBET00gYXR0cmlidXRlcyB0byBhIGhhc2ggbWFwLlxuICpcbiAqIEBwYXJhbSAge05hbWVkTm9kZU1hcH0gYXR0cmlidXRlcyAtIExpc3Qgb2YgYXR0cmlidXRlcy5cbiAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgICAgICAgICAtIE1hcCBvZiBhdHRyaWJ1dGUgbmFtZSB0byB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIGF0dHJpYnV0ZTtcbiAgLy8gYE5hbWVkTm9kZU1hcGAgaXMgYXJyYXktbGlrZVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNbaV07XG4gICAgcmVzdWx0W2F0dHJpYnV0ZS5uYW1lXSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvcnJlY3RzIHRoZSB0YWcgbmFtZSBpZiBpdCBpcyBjYXNlLXNlbnNpdGl2ZSAoU1ZHKS5cbiAqIE90aGVyd2lzZSwgcmV0dXJucyB0aGUgbG93ZXJjYXNlIHRhZyBuYW1lIChIVE1MKS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRhZ05hbWUgLSBMb3dlcmNhc2UgdGFnIG5hbWUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICAgLSBGb3JtYXR0ZWQgdGFnIG5hbWUuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdFRhZ05hbWUodGFnTmFtZSkge1xuICB0YWdOYW1lID0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICB2YXIgY2FzZVNlbnNpdGl2ZVRhZ05hbWUgPSBnZXRDYXNlU2Vuc2l0aXZlVGFnTmFtZSh0YWdOYW1lKTtcbiAgaWYgKGNhc2VTZW5zaXRpdmVUYWdOYW1lKSB7XG4gICAgcmV0dXJuIGNhc2VTZW5zaXRpdmVUYWdOYW1lO1xuICB9XG4gIHJldHVybiB0YWdOYW1lO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgRE9NIG5vZGVzIHRvIGBkb21oYW5kbGVyYCBub2Rlcy5cbiAqXG4gKiBAcGFyYW0gIHtOb2RlTGlzdH0gICAgIG5vZGVzICAgICAgICAgLSBET00gbm9kZXMuXG4gKiBAcGFyYW0gIHtFbGVtZW50fG51bGx9IFtwYXJlbnQ9bnVsbF0gLSBQYXJlbnQgbm9kZS5cbiAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgW2RpcmVjdGl2ZV0gICAtIERpcmVjdGl2ZS5cbiAqIEByZXR1cm4ge0FycmF5PENvbW1lbnR8RWxlbWVudHxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb258VGV4dD59XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdERPTShub2RlcywgcGFyZW50LCBkaXJlY3RpdmUpIHtcbiAgcGFyZW50ID0gcGFyZW50IHx8IG51bGw7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbiA9IG5vZGVzLmxlbmd0aDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICB2YXIgbm9kZSA9IG5vZGVzW2luZGV4XTtcbiAgICB2YXIgY3VycmVudDtcblxuICAgIC8vIHNldCB0aGUgbm9kZSBkYXRhIGdpdmVuIHRoZSB0eXBlXG4gICAgc3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIC8vIHNjcmlwdCwgc3R5bGUsIG9yIHRhZ1xuICAgICAgICBjdXJyZW50ID0gbmV3IEVsZW1lbnQoXG4gICAgICAgICAgZm9ybWF0VGFnTmFtZShub2RlLm5vZGVOYW1lKSxcbiAgICAgICAgICBmb3JtYXRBdHRyaWJ1dGVzKG5vZGUuYXR0cmlidXRlcylcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudC5jaGlsZHJlbiA9IGZvcm1hdERPTShub2RlLmNoaWxkTm9kZXMsIGN1cnJlbnQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICBjdXJyZW50ID0gbmV3IFRleHQobm9kZS5ub2RlVmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA4OlxuICAgICAgICBjdXJyZW50ID0gbmV3IENvbW1lbnQobm9kZS5ub2RlVmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gc2V0IHByZXZpb3VzIG5vZGUgbmV4dFxuICAgIHZhciBwcmV2ID0gcmVzdWx0W2luZGV4IC0gMV0gfHwgbnVsbDtcbiAgICBpZiAocHJldikge1xuICAgICAgcHJldi5uZXh0ID0gY3VycmVudDtcbiAgICB9XG5cbiAgICAvLyBzZXQgcHJvcGVydGllcyBmb3IgY3VycmVudCBub2RlXG4gICAgY3VycmVudC5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgY3VycmVudC5wcmV2ID0gcHJldjtcbiAgICBjdXJyZW50Lm5leHQgPSBudWxsO1xuXG4gICAgcmVzdWx0LnB1c2goY3VycmVudCk7XG4gIH1cblxuICBpZiAoZGlyZWN0aXZlKSB7XG4gICAgY3VycmVudCA9IG5ldyBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oXG4gICAgICBkaXJlY3RpdmUuc3Vic3RyaW5nKDAsIGRpcmVjdGl2ZS5pbmRleE9mKCcgJykpLnRvTG93ZXJDYXNlKCksXG4gICAgICBkaXJlY3RpdmVcbiAgICApO1xuICAgIGN1cnJlbnQubmV4dCA9IHJlc3VsdFswXSB8fCBudWxsO1xuICAgIGN1cnJlbnQucGFyZW50ID0gcGFyZW50O1xuICAgIHJlc3VsdC51bnNoaWZ0KGN1cnJlbnQpO1xuXG4gICAgaWYgKHJlc3VsdFsxXSkge1xuICAgICAgcmVzdWx0WzFdLnByZXYgPSByZXN1bHRbMF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlY3RzIGlmIGJyb3dzZXIgaXMgSW50ZXJuZXQgRXhwbG9yZXIuXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBXaGV0aGVyIElFIGlzIGRldGVjdGVkLlxuICovXG5mdW5jdGlvbiBpc0lFKCkge1xuICByZXR1cm4gLyhNU0lFIHxUcmlkZW50XFwvfEVkZ2VcXC8pLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZm9ybWF0QXR0cmlidXRlczogZm9ybWF0QXR0cmlidXRlcyxcbiAgZm9ybWF0RE9NOiBmb3JtYXRET00sXG4gIGlzSUU6IGlzSUVcbn07XG4iLCJ2YXIgZG9tVG9SZWFjdCA9IHJlcXVpcmUoJy4vbGliL2RvbS10by1yZWFjdCcpO1xudmFyIGF0dHJpYnV0ZXNUb1Byb3BzID0gcmVxdWlyZSgnLi9saWIvYXR0cmlidXRlcy10by1wcm9wcycpO1xudmFyIGh0bWxUb0RPTSA9IHJlcXVpcmUoJ2h0bWwtZG9tLXBhcnNlcicpO1xuXG52YXIgZG9tUGFyc2VyT3B0aW9ucyA9IHsgbG93ZXJDYXNlQXR0cmlidXRlTmFtZXM6IGZhbHNlIH07XG5cbi8qKlxuICogQ29udmVydHMgSFRNTCBzdHJpbmcgdG8gUmVhY3QgZWxlbWVudHMuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgIGh0bWwgICAgICAgICAgICAgICAgICAgIC0gSFRNTCBzdHJpbmcuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgW29wdGlvbnNdICAgICAgICAgICAgICAgLSBQYXJzZXIgb3B0aW9ucy5cbiAqIEBwYXJhbSAge09iamVjdH0gICBbb3B0aW9ucy5odG1scGFyc2VyMl0gICAtIGh0bWxwYXJzZXIyIG9wdGlvbnMuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgW29wdGlvbnMubGlicmFyeV0gICAgICAgLSBMaWJyYXJ5IGZvciBSZWFjdCwgUHJlYWN0LCBldGMuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gW29wdGlvbnMucmVwbGFjZV0gICAgICAgLSBSZXBsYWNlIG1ldGhvZC5cbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fEpTWC5FbGVtZW50W118U3RyaW5nfSAtIFJlYWN0IGVsZW1lbnQocyksIGVtcHR5IGFycmF5LCBvciBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIEhUTUxSZWFjdFBhcnNlcihodG1sLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgaHRtbCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGh0bWwgPT09ICcnKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICByZXR1cm4gZG9tVG9SZWFjdChcbiAgICBodG1sVG9ET00oaHRtbCwgb3B0aW9ucy5odG1scGFyc2VyMiB8fCBkb21QYXJzZXJPcHRpb25zKSxcbiAgICBvcHRpb25zXG4gICk7XG59XG5cbkhUTUxSZWFjdFBhcnNlci5kb21Ub1JlYWN0ID0gZG9tVG9SZWFjdDtcbkhUTUxSZWFjdFBhcnNlci5odG1sVG9ET00gPSBodG1sVG9ET007XG5IVE1MUmVhY3RQYXJzZXIuYXR0cmlidXRlc1RvUHJvcHMgPSBhdHRyaWJ1dGVzVG9Qcm9wcztcblxuLy8gc3VwcG9ydCBDb21tb25KUyBhbmQgRVMgTW9kdWxlc1xubW9kdWxlLmV4cG9ydHMgPSBIVE1MUmVhY3RQYXJzZXI7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gSFRNTFJlYWN0UGFyc2VyO1xuIiwiaW1wb3J0IEhUTUxSZWFjdFBhcnNlciBmcm9tICcuL2luZGV4LmpzJztcblxuZXhwb3J0IHZhciBkb21Ub1JlYWN0ID0gSFRNTFJlYWN0UGFyc2VyLmRvbVRvUmVhY3Q7XG5leHBvcnQgdmFyIGh0bWxUb0RPTSA9IEhUTUxSZWFjdFBhcnNlci5odG1sVG9ET007XG5leHBvcnQgdmFyIGF0dHJpYnV0ZXNUb1Byb3BzID0gSFRNTFJlYWN0UGFyc2VyLmF0dHJpYnV0ZXNUb1Byb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBIVE1MUmVhY3RQYXJzZXI7XG4iLCJ2YXIgcmVhY3RQcm9wZXJ0eSA9IHJlcXVpcmUoJ3JlYWN0LXByb3BlcnR5Jyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBIVE1ML1NWRyBET00gYXR0cmlidXRlcyB0byBSZWFjdCBwcm9wcy5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IFthdHRyaWJ1dGVzPXt9XSAtIEhUTUwvU1ZHIERPTSBhdHRyaWJ1dGVzLlxuICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgICAgICAgLSBSZWFjdCBwcm9wcy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhdHRyaWJ1dGVzVG9Qcm9wcyhhdHRyaWJ1dGVzKSB7XG4gIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIHZhciBhdHRyaWJ1dGVOYW1lO1xuICB2YXIgYXR0cmlidXRlTmFtZUxvd2VyQ2FzZWQ7XG4gIHZhciBhdHRyaWJ1dGVWYWx1ZTtcbiAgdmFyIHByb3BOYW1lO1xuICB2YXIgcHJvcGVydHlJbmZvO1xuICB2YXIgcHJvcHMgPSB7fTtcblxuICBmb3IgKGF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgIGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXTtcblxuICAgIC8vIEFSSUEgKGFyaWEtKikgb3IgY3VzdG9tIGRhdGEgKGRhdGEtKikgYXR0cmlidXRlXG4gICAgaWYgKHJlYWN0UHJvcGVydHkuaXNDdXN0b21BdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgIHByb3BzW2F0dHJpYnV0ZU5hbWVdID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBjb252ZXJ0IEhUTUwvU1ZHIGF0dHJpYnV0ZSB0byBSZWFjdCBwcm9wXG4gICAgYXR0cmlidXRlTmFtZUxvd2VyQ2FzZWQgPSBhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgcHJvcE5hbWUgPSByZWFjdFByb3BlcnR5LnBvc3NpYmxlU3RhbmRhcmROYW1lc1thdHRyaWJ1dGVOYW1lTG93ZXJDYXNlZF07XG5cbiAgICBpZiAocHJvcE5hbWUpIHtcbiAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgcHJvcGVydHlJbmZvID0gcmVhY3RQcm9wZXJ0eS5nZXRQcm9wZXJ0eUluZm8ocHJvcE5hbWUpO1xuICAgICAgc3dpdGNoIChwcm9wZXJ0eUluZm8gJiYgcHJvcGVydHlJbmZvLnR5cGUpIHtcbiAgICAgICAgY2FzZSByZWFjdFByb3BlcnR5LkJPT0xFQU46XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSByZWFjdFByb3BlcnR5Lk9WRVJMT0FERURfQk9PTEVBTjpcbiAgICAgICAgICBpZiAoYXR0cmlidXRlVmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHByZXNlcnZlIGN1c3RvbSBhdHRyaWJ1dGUgaWYgUmVhY3QgPj0xNlxuICAgIGlmICh1dGlsaXRpZXMuUFJFU0VSVkVfQ1VTVE9NX0FUVFJJQlVURVMpIHtcbiAgICAgIHByb3BzW2F0dHJpYnV0ZU5hbWVdID0gYXR0cmlidXRlVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gdHJhbnNmb3JtIGlubGluZSBzdHlsZSB0byBvYmplY3RcbiAgdXRpbGl0aWVzLnNldFN0eWxlUHJvcChhdHRyaWJ1dGVzLnN0eWxlLCBwcm9wcyk7XG5cbiAgcmV0dXJuIHByb3BzO1xufTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgYXR0cmlidXRlc1RvUHJvcHMgPSByZXF1aXJlKCcuL2F0dHJpYnV0ZXMtdG8tcHJvcHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcycpO1xuXG52YXIgc2V0U3R5bGVQcm9wID0gdXRpbGl0aWVzLnNldFN0eWxlUHJvcDtcblxuLyoqXG4gKiBDb252ZXJ0cyBET00gbm9kZXMgdG8gSlNYIGVsZW1lbnQocykuXG4gKlxuICogQHBhcmFtICB7RG9tRWxlbWVudFtdfSBub2RlcyAgICAgICAgICAgICAtIERPTSBub2Rlcy5cbiAqIEBwYXJhbSAge29iamVjdH0gICAgICAgW29wdGlvbnM9e31dICAgICAgLSBPcHRpb25zLlxuICogQHBhcmFtICB7RnVuY3Rpb259ICAgICBbb3B0aW9ucy5yZXBsYWNlXSAtIFJlcGxhY2VyLlxuICogQHBhcmFtICB7b2JqZWN0fSAgICAgICBbb3B0aW9ucy5saWJyYXJ5XSAtIExpYnJhcnkgKFJlYWN0L1ByZWFjdC9ldGMuKS5cbiAqIEByZXR1cm4ge3N0cmluZ3xKU1guRWxlbWVudHxKU1guRWxlbWVudFtdfVxuICovXG5mdW5jdGlvbiBkb21Ub1JlYWN0KG5vZGVzLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBsaWJyYXJ5ID0gb3B0aW9ucy5saWJyYXJ5IHx8IFJlYWN0O1xuICB2YXIgY2xvbmVFbGVtZW50ID0gbGlicmFyeS5jbG9uZUVsZW1lbnQ7XG4gIHZhciBjcmVhdGVFbGVtZW50ID0gbGlicmFyeS5jcmVhdGVFbGVtZW50O1xuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBsaWJyYXJ5LmlzVmFsaWRFbGVtZW50O1xuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIG5vZGU7XG4gIHZhciBoYXNSZXBsYWNlID0gdHlwZW9mIG9wdGlvbnMucmVwbGFjZSA9PT0gJ2Z1bmN0aW9uJztcbiAgdmFyIHJlcGxhY2VFbGVtZW50O1xuICB2YXIgcHJvcHM7XG4gIHZhciBjaGlsZHJlbjtcbiAgdmFyIGRhdGE7XG4gIHZhciB0cmltID0gb3B0aW9ucy50cmltO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBub2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIG5vZGUgPSBub2Rlc1tpXTtcblxuICAgIC8vIHJlcGxhY2Ugd2l0aCBjdXN0b20gUmVhY3QgZWxlbWVudCAoaWYgcHJlc2VudClcbiAgICBpZiAoaGFzUmVwbGFjZSkge1xuICAgICAgcmVwbGFjZUVsZW1lbnQgPSBvcHRpb25zLnJlcGxhY2Uobm9kZSk7XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChyZXBsYWNlRWxlbWVudCkpIHtcbiAgICAgICAgLy8gc2V0IFwia2V5XCIgcHJvcCBmb3Igc2libGluZyBlbGVtZW50c1xuICAgICAgICAvLyBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmcta2V5c1xuICAgICAgICBpZiAobGVuID4gMSkge1xuICAgICAgICAgIHJlcGxhY2VFbGVtZW50ID0gY2xvbmVFbGVtZW50KHJlcGxhY2VFbGVtZW50LCB7XG4gICAgICAgICAgICBrZXk6IHJlcGxhY2VFbGVtZW50LmtleSB8fCBpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2gocmVwbGFjZUVsZW1lbnQpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgIC8vIGlmIHRyaW0gb3B0aW9uIGlzIGVuYWJsZWQsIHNraXAgd2hpdGVzcGFjZSB0ZXh0IG5vZGVzXG4gICAgICBpZiAodHJpbSkge1xuICAgICAgICBkYXRhID0gbm9kZS5kYXRhLnRyaW0oKTtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChub2RlLmRhdGEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChub2RlLmRhdGEpO1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcHJvcHMgPSBub2RlLmF0dHJpYnM7XG4gICAgaWYgKHNraXBBdHRyaWJ1dGVzVG9Qcm9wcyhub2RlKSkge1xuICAgICAgc2V0U3R5bGVQcm9wKHByb3BzLnN0eWxlLCBwcm9wcyk7XG4gICAgfSBlbHNlIGlmIChwcm9wcykge1xuICAgICAgcHJvcHMgPSBhdHRyaWJ1dGVzVG9Qcm9wcyhwcm9wcyk7XG4gICAgfVxuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuXG4gICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NjcmlwdCc6XG4gICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgIC8vIHByZXZlbnQgdGV4dCBpbiA8c2NyaXB0PiBvciA8c3R5bGU+IGZyb20gYmVpbmcgZXNjYXBlZFxuICAgICAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvZG9tLWVsZW1lbnRzLmh0bWwjZGFuZ2Vyb3VzbHlzZXRpbm5lcmh0bWxcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgICBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCA9IHtcbiAgICAgICAgICAgIF9faHRtbDogbm9kZS5jaGlsZHJlblswXS5kYXRhXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgLy8gc2V0dGluZyB0ZXh0YXJlYSB2YWx1ZSBpbiBjaGlsZHJlbiBpcyBhbiBhbnRpcGF0dGVybiBpbiBSZWFjdFxuICAgICAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvZm9ybXMuaHRtbCN0aGUtdGV4dGFyZWEtdGFnXG4gICAgICAgIGlmIChub2RlLm5hbWUgPT09ICd0ZXh0YXJlYScgJiYgbm9kZS5jaGlsZHJlblswXSkge1xuICAgICAgICAgIHByb3BzLmRlZmF1bHRWYWx1ZSA9IG5vZGUuY2hpbGRyZW5bMF0uZGF0YTtcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gY29udGludWUgcmVjdXJzaW9uIG9mIGNyZWF0aW5nIFJlYWN0IGVsZW1lbnRzIChpZiBhcHBsaWNhYmxlKVxuICAgICAgICAgIGNoaWxkcmVuID0gZG9tVG9SZWFjdChub2RlLmNoaWxkcmVuLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgLy8gc2tpcCBhbGwgb3RoZXIgY2FzZXMgKGUuZy4sIGNvbW1lbnQpXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBzZXQgXCJrZXlcIiBwcm9wIGZvciBzaWJsaW5nIGVsZW1lbnRzXG4gICAgLy8gaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWtleXNcbiAgICBpZiAobGVuID4gMSkge1xuICAgICAgcHJvcHMua2V5ID0gaTtcbiAgICB9XG5cbiAgICByZXN1bHQucHVzaChjcmVhdGVFbGVtZW50KG5vZGUubmFtZSwgcHJvcHMsIGNoaWxkcmVuKSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA9PT0gMSA/IHJlc3VsdFswXSA6IHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgRE9NIGVsZW1lbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgdHJhbnNmb3JtZWQgdG8gcHJvcHMuXG4gKiBXZWIgQ29tcG9uZW50cyBzaG91bGQgbm90IGhhdmUgdGhlaXIgYXR0cmlidXRlcyB0cmFuc2Zvcm1lZCBleGNlcHQgZm9yIGBzdHlsZWAuXG4gKlxuICogQHBhcmFtICB7RG9tRWxlbWVudH0gbm9kZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gc2tpcEF0dHJpYnV0ZXNUb1Byb3BzKG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICB1dGlsaXRpZXMuUFJFU0VSVkVfQ1VTVE9NX0FUVFJJQlVURVMgJiZcbiAgICBub2RlLnR5cGUgPT09ICd0YWcnICYmXG4gICAgdXRpbGl0aWVzLmlzQ3VzdG9tQ29tcG9uZW50KG5vZGUubmFtZSwgbm9kZS5hdHRyaWJzKVxuICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbVRvUmVhY3Q7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHN0eWxlVG9KUyA9IHJlcXVpcmUoJ3N0eWxlLXRvLWpzJykuZGVmYXVsdDtcblxuLyoqXG4gKiBTd2FwIGtleSB3aXRoIHZhbHVlIGluIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgb2JqICAgICAgICAtIFRoZSBvYmplY3QuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gW292ZXJyaWRlXSAtIFRoZSBvdmVycmlkZSBtZXRob2QuXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAtIFRoZSBpbnZlcnRlZCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGludmVydE9iamVjdChvYmosIG92ZXJyaWRlKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgfVxuXG4gIHZhciBrZXk7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIGlzT3ZlcnJpZGVQcmVzZW50ID0gdHlwZW9mIG92ZXJyaWRlID09PSAnZnVuY3Rpb24nO1xuICB2YXIgb3ZlcnJpZGVzID0ge307XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgaWYgKGlzT3ZlcnJpZGVQcmVzZW50KSB7XG4gICAgICBvdmVycmlkZXMgPSBvdmVycmlkZShrZXksIHZhbHVlKTtcbiAgICAgIGlmIChvdmVycmlkZXMgJiYgb3ZlcnJpZGVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICByZXN1bHRbb3ZlcnJpZGVzWzBdXSA9IG92ZXJyaWRlc1sxXTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlc3VsdFt2YWx1ZV0gPSBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGdpdmVuIHRhZyBpcyBhIGN1c3RvbSBjb21wb25lbnQuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjE2LjYuMy9wYWNrYWdlcy9yZWFjdC1kb20vc3JjL3NoYXJlZC9pc0N1c3RvbUNvbXBvbmVudC5qc31cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBodG1sIHRhZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAgIC0gVGhlIHByb3BzIGJlaW5nIHBhc3NlZCB0byB0aGUgZWxlbWVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQ3VzdG9tQ29tcG9uZW50KHRhZ05hbWUsIHByb3BzKSB7XG4gIGlmICh0YWdOYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gcHJvcHMgJiYgdHlwZW9mIHByb3BzLmlzID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIHN3aXRjaCAodGFnTmFtZSkge1xuICAgIC8vIFRoZXNlIGFyZSByZXNlcnZlZCBTVkcgYW5kIE1hdGhNTCBlbGVtZW50cy5cbiAgICAvLyBXZSBkb24ndCBtaW5kIHRoaXMgd2hpdGVsaXN0IHRvbyBtdWNoIGJlY2F1c2Ugd2UgZXhwZWN0IGl0IHRvIG5ldmVyIGdyb3cuXG4gICAgLy8gVGhlIGFsdGVybmF0aXZlIGlzIHRvIHRyYWNrIHRoZSBuYW1lc3BhY2UgaW4gYSBmZXcgcGxhY2VzIHdoaWNoIGlzIGNvbnZvbHV0ZWQuXG4gICAgLy8gaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9jdXN0b20vI2N1c3RvbS1lbGVtZW50cy1jb3JlLWNvbmNlcHRzXG4gICAgY2FzZSAnYW5ub3RhdGlvbi14bWwnOlxuICAgIGNhc2UgJ2NvbG9yLXByb2ZpbGUnOlxuICAgIGNhc2UgJ2ZvbnQtZmFjZSc6XG4gICAgY2FzZSAnZm9udC1mYWNlLXNyYyc6XG4gICAgY2FzZSAnZm9udC1mYWNlLXVyaSc6XG4gICAgY2FzZSAnZm9udC1mYWNlLWZvcm1hdCc6XG4gICAgY2FzZSAnZm9udC1mYWNlLW5hbWUnOlxuICAgIGNhc2UgJ21pc3NpbmctZ2x5cGgnOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG52YXIgc3R5bGVUb0pTT3B0aW9ucyA9IHsgcmVhY3RDb21wYXQ6IHRydWUgfTtcblxuLyoqXG4gKiBTZXRzIHN0eWxlIHByb3AuXG4gKlxuICogQHBhcmFtIHtudWxsfHVuZGVmaW5lZHxzdHJpbmd9IHN0eWxlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqL1xuZnVuY3Rpb24gc2V0U3R5bGVQcm9wKHN0eWxlLCBwcm9wcykge1xuICBpZiAoc3R5bGUgPT09IG51bGwgfHwgc3R5bGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIHByb3BzLnN0eWxlID0gc3R5bGVUb0pTKHN0eWxlLCBzdHlsZVRvSlNPcHRpb25zKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcHJvcHMuc3R5bGUgPSB7fTtcbiAgfVxufVxuXG4vKipcbiAqIEBjb25zdGFudCB7Ym9vbGVhbn1cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE3LzA5LzA4L2RvbS1hdHRyaWJ1dGVzLWluLXJlYWN0LTE2Lmh0bWx9XG4gKi9cbnZhciBQUkVTRVJWRV9DVVNUT01fQVRUUklCVVRFUyA9IFJlYWN0LnZlcnNpb24uc3BsaXQoJy4nKVswXSA+PSAxNjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFBSRVNFUlZFX0NVU1RPTV9BVFRSSUJVVEVTOiBQUkVTRVJWRV9DVVNUT01fQVRUUklCVVRFUyxcbiAgaW52ZXJ0T2JqZWN0OiBpbnZlcnRPYmplY3QsXG4gIGlzQ3VzdG9tQ29tcG9uZW50OiBpc0N1c3RvbUNvbXBvbmVudCxcbiAgc2V0U3R5bGVQcm9wOiBzZXRTdHlsZVByb3Bcbn07XG4iLCIvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9ncmFtbWFyLmh0bWxcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS92aXNpb25tZWRpYS9jc3MtcGFyc2UvcHVsbC80OSNpc3N1ZWNvbW1lbnQtMzAwODgwMjdcbnZhciBDT01NRU5UX1JFR0VYID0gL1xcL1xcKlteKl0qXFwqKyhbXi8qXVteKl0qXFwqKykqXFwvL2c7XG5cbnZhciBORVdMSU5FX1JFR0VYID0gL1xcbi9nO1xudmFyIFdISVRFU1BBQ0VfUkVHRVggPSAvXlxccyovO1xuXG4vLyBkZWNsYXJhdGlvblxudmFyIFBST1BFUlRZX1JFR0VYID0gL14oXFwqP1stIy8qXFxcXFxcd10rKFxcW1swLTlhLXpfLV0rXFxdKT8pXFxzKi87XG52YXIgQ09MT05fUkVHRVggPSAvXjpcXHMqLztcbnZhciBWQUxVRV9SRUdFWCA9IC9eKCg/OicoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8XFwoW14pXSo/XFwpfFtefTtdKSspLztcbnZhciBTRU1JQ09MT05fUkVHRVggPSAvXls7XFxzXSovO1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvVHJpbSNQb2x5ZmlsbFxudmFyIFRSSU1fUkVHRVggPSAvXlxccyt8XFxzKyQvZztcblxuLy8gc3RyaW5nc1xudmFyIE5FV0xJTkUgPSAnXFxuJztcbnZhciBGT1JXQVJEX1NMQVNIID0gJy8nO1xudmFyIEFTVEVSSVNLID0gJyonO1xudmFyIEVNUFRZX1NUUklORyA9ICcnO1xuXG4vLyB0eXBlc1xudmFyIFRZUEVfQ09NTUVOVCA9ICdjb21tZW50JztcbnZhciBUWVBFX0RFQ0xBUkFUSU9OID0gJ2RlY2xhcmF0aW9uJztcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3R5bGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge09iamVjdFtdfVxuICogQHRocm93cyB7VHlwZUVycm9yfVxuICogQHRocm93cyB7RXJyb3J9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3R5bGUsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBzdHlsZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIH1cblxuICBpZiAoIXN0eWxlKSByZXR1cm4gW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uYWwuXG4gICAqL1xuICB2YXIgbGluZW5vID0gMTtcbiAgdmFyIGNvbHVtbiA9IDE7XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBsaW5lbm8gYW5kIGNvbHVtbiBiYXNlZCBvbiBgc3RyYC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24oc3RyKSB7XG4gICAgdmFyIGxpbmVzID0gc3RyLm1hdGNoKE5FV0xJTkVfUkVHRVgpO1xuICAgIGlmIChsaW5lcykgbGluZW5vICs9IGxpbmVzLmxlbmd0aDtcbiAgICB2YXIgaSA9IHN0ci5sYXN0SW5kZXhPZihORVdMSU5FKTtcbiAgICBjb2x1bW4gPSB+aSA/IHN0ci5sZW5ndGggLSBpIDogY29sdW1uICsgc3RyLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrIHBvc2l0aW9uIGFuZCBwYXRjaCBgbm9kZS5wb3NpdGlvbmAuXG4gICAqXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gcG9zaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0geyBsaW5lOiBsaW5lbm8sIGNvbHVtbjogY29sdW1uIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIG5vZGUucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oc3RhcnQpO1xuICAgICAgd2hpdGVzcGFjZSgpO1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZSBwb3NpdGlvbiBpbmZvcm1hdGlvbiBmb3IgYSBub2RlLlxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IHN0YXJ0XG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBlbmRcbiAgICogQHByb3BlcnR5IHt1bmRlZmluZWR8U3RyaW5nfSBzb3VyY2VcbiAgICovXG4gIGZ1bmN0aW9uIFBvc2l0aW9uKHN0YXJ0KSB7XG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMuZW5kID0geyBsaW5lOiBsaW5lbm8sIGNvbHVtbjogY29sdW1uIH07XG4gICAgdGhpcy5zb3VyY2UgPSBvcHRpb25zLnNvdXJjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb24tZW51bWVyYWJsZSBzb3VyY2Ugc3RyaW5nLlxuICAgKi9cbiAgUG9zaXRpb24ucHJvdG90eXBlLmNvbnRlbnQgPSBzdHlsZTtcblxuICB2YXIgZXJyb3JzTGlzdCA9IFtdO1xuXG4gIC8qKlxuICAgKiBFcnJvciBgbXNnYC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1zZ1xuICAgKiBAdGhyb3dzIHtFcnJvcn1cbiAgICovXG4gIGZ1bmN0aW9uIGVycm9yKG1zZykge1xuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICBvcHRpb25zLnNvdXJjZSArICc6JyArIGxpbmVubyArICc6JyArIGNvbHVtbiArICc6ICcgKyBtc2dcbiAgICApO1xuICAgIGVyci5yZWFzb24gPSBtc2c7XG4gICAgZXJyLmZpbGVuYW1lID0gb3B0aW9ucy5zb3VyY2U7XG4gICAgZXJyLmxpbmUgPSBsaW5lbm87XG4gICAgZXJyLmNvbHVtbiA9IGNvbHVtbjtcbiAgICBlcnIuc291cmNlID0gc3R5bGU7XG5cbiAgICBpZiAob3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgIGVycm9yc0xpc3QucHVzaChlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1hdGNoIGByZWAgYW5kIHJldHVybiBjYXB0dXJlcy5cbiAgICpcbiAgICogQHBhcmFtIHtSZWdFeHB9IHJlXG4gICAqIEByZXR1cm4ge3VuZGVmaW5lZHxBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uIG1hdGNoKHJlKSB7XG4gICAgdmFyIG0gPSByZS5leGVjKHN0eWxlKTtcbiAgICBpZiAoIW0pIHJldHVybjtcbiAgICB2YXIgc3RyID0gbVswXTtcbiAgICB1cGRhdGVQb3NpdGlvbihzdHIpO1xuICAgIHN0eWxlID0gc3R5bGUuc2xpY2Uoc3RyLmxlbmd0aCk7XG4gICAgcmV0dXJuIG07XG4gIH1cblxuICAvKipcbiAgICogUGFyc2Ugd2hpdGVzcGFjZS5cbiAgICovXG4gIGZ1bmN0aW9uIHdoaXRlc3BhY2UoKSB7XG4gICAgbWF0Y2goV0hJVEVTUEFDRV9SRUdFWCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgY29tbWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IFtydWxlc11cbiAgICogQHJldHVybiB7T2JqZWN0W119XG4gICAqL1xuICBmdW5jdGlvbiBjb21tZW50cyhydWxlcykge1xuICAgIHZhciBjO1xuICAgIHJ1bGVzID0gcnVsZXMgfHwgW107XG4gICAgd2hpbGUgKChjID0gY29tbWVudCgpKSkge1xuICAgICAgaWYgKGMgIT09IGZhbHNlKSB7XG4gICAgICAgIHJ1bGVzLnB1c2goYyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBjb21tZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqIEB0aHJvd3Mge0Vycm9yfVxuICAgKi9cbiAgZnVuY3Rpb24gY29tbWVudCgpIHtcbiAgICB2YXIgcG9zID0gcG9zaXRpb24oKTtcbiAgICBpZiAoRk9SV0FSRF9TTEFTSCAhPSBzdHlsZS5jaGFyQXQoMCkgfHwgQVNURVJJU0sgIT0gc3R5bGUuY2hhckF0KDEpKSByZXR1cm47XG5cbiAgICB2YXIgaSA9IDI7XG4gICAgd2hpbGUgKFxuICAgICAgRU1QVFlfU1RSSU5HICE9IHN0eWxlLmNoYXJBdChpKSAmJlxuICAgICAgKEFTVEVSSVNLICE9IHN0eWxlLmNoYXJBdChpKSB8fCBGT1JXQVJEX1NMQVNIICE9IHN0eWxlLmNoYXJBdChpICsgMSkpXG4gICAgKSB7XG4gICAgICArK2k7XG4gICAgfVxuICAgIGkgKz0gMjtcblxuICAgIGlmIChFTVBUWV9TVFJJTkcgPT09IHN0eWxlLmNoYXJBdChpIC0gMSkpIHtcbiAgICAgIHJldHVybiBlcnJvcignRW5kIG9mIGNvbW1lbnQgbWlzc2luZycpO1xuICAgIH1cblxuICAgIHZhciBzdHIgPSBzdHlsZS5zbGljZSgyLCBpIC0gMik7XG4gICAgY29sdW1uICs9IDI7XG4gICAgdXBkYXRlUG9zaXRpb24oc3RyKTtcbiAgICBzdHlsZSA9IHN0eWxlLnNsaWNlKGkpO1xuICAgIGNvbHVtbiArPSAyO1xuXG4gICAgcmV0dXJuIHBvcyh7XG4gICAgICB0eXBlOiBUWVBFX0NPTU1FTlQsXG4gICAgICBjb21tZW50OiBzdHJcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBkZWNsYXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKiBAdGhyb3dzIHtFcnJvcn1cbiAgICovXG4gIGZ1bmN0aW9uIGRlY2xhcmF0aW9uKCkge1xuICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xuXG4gICAgLy8gcHJvcFxuICAgIHZhciBwcm9wID0gbWF0Y2goUFJPUEVSVFlfUkVHRVgpO1xuICAgIGlmICghcHJvcCkgcmV0dXJuO1xuICAgIGNvbW1lbnQoKTtcblxuICAgIC8vIDpcbiAgICBpZiAoIW1hdGNoKENPTE9OX1JFR0VYKSkgcmV0dXJuIGVycm9yKFwicHJvcGVydHkgbWlzc2luZyAnOidcIik7XG5cbiAgICAvLyB2YWxcbiAgICB2YXIgdmFsID0gbWF0Y2goVkFMVUVfUkVHRVgpO1xuXG4gICAgdmFyIHJldCA9IHBvcyh7XG4gICAgICB0eXBlOiBUWVBFX0RFQ0xBUkFUSU9OLFxuICAgICAgcHJvcGVydHk6IHRyaW0ocHJvcFswXS5yZXBsYWNlKENPTU1FTlRfUkVHRVgsIEVNUFRZX1NUUklORykpLFxuICAgICAgdmFsdWU6IHZhbFxuICAgICAgICA/IHRyaW0odmFsWzBdLnJlcGxhY2UoQ09NTUVOVF9SRUdFWCwgRU1QVFlfU1RSSU5HKSlcbiAgICAgICAgOiBFTVBUWV9TVFJJTkdcbiAgICB9KTtcblxuICAgIC8vIDtcbiAgICBtYXRjaChTRU1JQ09MT05fUkVHRVgpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBkZWNsYXJhdGlvbnMuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdFtdfVxuICAgKi9cbiAgZnVuY3Rpb24gZGVjbGFyYXRpb25zKCkge1xuICAgIHZhciBkZWNscyA9IFtdO1xuXG4gICAgY29tbWVudHMoZGVjbHMpO1xuXG4gICAgLy8gZGVjbGFyYXRpb25zXG4gICAgdmFyIGRlY2w7XG4gICAgd2hpbGUgKChkZWNsID0gZGVjbGFyYXRpb24oKSkpIHtcbiAgICAgIGlmIChkZWNsICE9PSBmYWxzZSkge1xuICAgICAgICBkZWNscy5wdXNoKGRlY2wpO1xuICAgICAgICBjb21tZW50cyhkZWNscyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlY2xzO1xuICB9XG5cbiAgd2hpdGVzcGFjZSgpO1xuICByZXR1cm4gZGVjbGFyYXRpb25zKCk7XG59O1xuXG4vKipcbiAqIFRyaW0gYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyID8gc3RyLnJlcGxhY2UoVFJJTV9SRUdFWCwgRU1QVFlfU1RSSU5HKSA6IEVNUFRZX1NUUklORztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxuLy8gQSByZXNlcnZlZCBhdHRyaWJ1dGUuXG4vLyBJdCBpcyBoYW5kbGVkIGJ5IFJlYWN0IHNlcGFyYXRlbHkgYW5kIHNob3VsZG4ndCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG52YXIgUkVTRVJWRUQgPSAwOyAvLyBBIHNpbXBsZSBzdHJpbmcgYXR0cmlidXRlLlxuLy8gQXR0cmlidXRlcyB0aGF0IGFyZW4ndCBpbiB0aGUgZmlsdGVyIGFyZSBwcmVzdW1lZCB0byBoYXZlIHRoaXMgdHlwZS5cblxudmFyIFNUUklORyA9IDE7IC8vIEEgc3RyaW5nIGF0dHJpYnV0ZSB0aGF0IGFjY2VwdHMgYm9vbGVhbnMgaW4gUmVhY3QuIEluIEhUTUwsIHRoZXNlIGFyZSBjYWxsZWRcbi8vIFwiZW51bWVyYXRlZFwiIGF0dHJpYnV0ZXMgd2l0aCBcInRydWVcIiBhbmQgXCJmYWxzZVwiIGFzIHBvc3NpYmxlIHZhbHVlcy5cbi8vIFdoZW4gdHJ1ZSwgaXQgc2hvdWxkIGJlIHNldCB0byBhIFwidHJ1ZVwiIHN0cmluZy5cbi8vIFdoZW4gZmFsc2UsIGl0IHNob3VsZCBiZSBzZXQgdG8gYSBcImZhbHNlXCIgc3RyaW5nLlxuXG52YXIgQk9PTEVBTklTSF9TVFJJTkcgPSAyOyAvLyBBIHJlYWwgYm9vbGVhbiBhdHRyaWJ1dGUuXG4vLyBXaGVuIHRydWUsIGl0IHNob3VsZCBiZSBwcmVzZW50IChzZXQgZWl0aGVyIHRvIGFuIGVtcHR5IHN0cmluZyBvciBpdHMgbmFtZSkuXG4vLyBXaGVuIGZhbHNlLCBpdCBzaG91bGQgYmUgb21pdHRlZC5cblxudmFyIEJPT0xFQU4gPSAzOyAvLyBBbiBhdHRyaWJ1dGUgdGhhdCBjYW4gYmUgdXNlZCBhcyBhIGZsYWcgYXMgd2VsbCBhcyB3aXRoIGEgdmFsdWUuXG4vLyBXaGVuIHRydWUsIGl0IHNob3VsZCBiZSBwcmVzZW50IChzZXQgZWl0aGVyIHRvIGFuIGVtcHR5IHN0cmluZyBvciBpdHMgbmFtZSkuXG4vLyBXaGVuIGZhbHNlLCBpdCBzaG91bGQgYmUgb21pdHRlZC5cbi8vIEZvciBhbnkgb3RoZXIgdmFsdWUsIHNob3VsZCBiZSBwcmVzZW50IHdpdGggdGhhdCB2YWx1ZS5cblxudmFyIE9WRVJMT0FERURfQk9PTEVBTiA9IDQ7IC8vIEFuIGF0dHJpYnV0ZSB0aGF0IG11c3QgYmUgbnVtZXJpYyBvciBwYXJzZSBhcyBhIG51bWVyaWMuXG4vLyBXaGVuIGZhbHN5LCBpdCBzaG91bGQgYmUgcmVtb3ZlZC5cblxudmFyIE5VTUVSSUMgPSA1OyAvLyBBbiBhdHRyaWJ1dGUgdGhhdCBtdXN0IGJlIHBvc2l0aXZlIG51bWVyaWMgb3IgcGFyc2UgYXMgYSBwb3NpdGl2ZSBudW1lcmljLlxuLy8gV2hlbiBmYWxzeSwgaXQgc2hvdWxkIGJlIHJlbW92ZWQuXG5cbnZhciBQT1NJVElWRV9OVU1FUklDID0gNjtcbmZ1bmN0aW9uIGdldFByb3BlcnR5SW5mbyhuYW1lKSB7XG4gIHJldHVybiBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KG5hbWUpID8gcHJvcGVydGllc1tuYW1lXSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCB0eXBlLCBtdXN0VXNlUHJvcGVydHksIGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZU5hbWVzcGFjZSwgc2FuaXRpemVVUkwsIHJlbW92ZUVtcHR5U3RyaW5nKSB7XG4gIHRoaXMuYWNjZXB0c0Jvb2xlYW5zID0gdHlwZSA9PT0gQk9PTEVBTklTSF9TVFJJTkcgfHwgdHlwZSA9PT0gQk9PTEVBTiB8fCB0eXBlID09PSBPVkVSTE9BREVEX0JPT0xFQU47XG4gIHRoaXMuYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZU5hbWU7XG4gIHRoaXMuYXR0cmlidXRlTmFtZXNwYWNlID0gYXR0cmlidXRlTmFtZXNwYWNlO1xuICB0aGlzLm11c3RVc2VQcm9wZXJ0eSA9IG11c3RVc2VQcm9wZXJ0eTtcbiAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBuYW1lO1xuICB0aGlzLnR5cGUgPSB0eXBlO1xuICB0aGlzLnNhbml0aXplVVJMID0gc2FuaXRpemVVUkw7XG4gIHRoaXMucmVtb3ZlRW1wdHlTdHJpbmcgPSByZW1vdmVFbXB0eVN0cmluZztcbn0gLy8gV2hlbiBhZGRpbmcgYXR0cmlidXRlcyB0byB0aGlzIGxpc3QsIGJlIHN1cmUgdG8gYWxzbyBhZGQgdGhlbSB0b1xuLy8gdGhlIGBwb3NzaWJsZVN0YW5kYXJkTmFtZXNgIG1vZHVsZSB0byBlbnN1cmUgY2FzaW5nIGFuZCBpbmNvcnJlY3Rcbi8vIG5hbWUgd2FybmluZ3MuXG5cblxudmFyIHByb3BlcnRpZXMgPSB7fTsgLy8gVGhlc2UgcHJvcHMgYXJlIHJlc2VydmVkIGJ5IFJlYWN0LiBUaGV5IHNob3VsZG4ndCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG5cbnZhciByZXNlcnZlZFByb3BzID0gWydjaGlsZHJlbicsICdkYW5nZXJvdXNseVNldElubmVySFRNTCcsIC8vIFRPRE86IFRoaXMgcHJldmVudHMgdGhlIGFzc2lnbm1lbnQgb2YgZGVmYXVsdFZhbHVlIHRvIHJlZ3VsYXJcbi8vIGVsZW1lbnRzIChub3QganVzdCBpbnB1dHMpLiBOb3cgdGhhdCBSZWFjdERPTUlucHV0IGFzc2lnbnMgdG8gdGhlXG4vLyBkZWZhdWx0VmFsdWUgcHJvcGVydHkgLS0gZG8gd2UgbmVlZCB0aGlzP1xuJ2RlZmF1bHRWYWx1ZScsICdkZWZhdWx0Q2hlY2tlZCcsICdpbm5lckhUTUwnLCAnc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nJywgJ3N1cHByZXNzSHlkcmF0aW9uV2FybmluZycsICdzdHlsZSddO1xucmVzZXJ2ZWRQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFJFU0VSVkVELCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gQSBmZXcgUmVhY3Qgc3RyaW5nIGF0dHJpYnV0ZXMgaGF2ZSBhIGRpZmZlcmVudCBuYW1lLlxuLy8gVGhpcyBpcyBhIG1hcHBpbmcgZnJvbSBSZWFjdCBwcm9wIG5hbWVzIHRvIHRoZSBhdHRyaWJ1dGUgbmFtZXMuXG5cbltbJ2FjY2VwdENoYXJzZXQnLCAnYWNjZXB0LWNoYXJzZXQnXSwgWydjbGFzc05hbWUnLCAnY2xhc3MnXSwgWydodG1sRm9yJywgJ2ZvciddLCBbJ2h0dHBFcXVpdicsICdodHRwLWVxdWl2J11dLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICBuYW1lID0gX3JlZjJbMF0sXG4gICAgICBhdHRyaWJ1dGVOYW1lID0gX3JlZjJbMV07XG5cbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIFwiZW51bWVyYXRlZFwiIEhUTUwgYXR0cmlidXRlcyB0aGF0IGFjY2VwdCBcInRydWVcIiBhbmQgXCJmYWxzZVwiLlxuLy8gSW4gUmVhY3QsIHdlIGxldCB1c2VycyBwYXNzIGB0cnVlYCBhbmQgYGZhbHNlYCBldmVuIHRob3VnaCB0ZWNobmljYWxseVxuLy8gdGhlc2UgYXJlbid0IGJvb2xlYW4gYXR0cmlidXRlcyAodGhleSBhcmUgY29lcmNlZCB0byBzdHJpbmdzKS5cblxuWydjb250ZW50RWRpdGFibGUnLCAnZHJhZ2dhYmxlJywgJ3NwZWxsQ2hlY2snLCAndmFsdWUnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIEJPT0xFQU5JU0hfU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhcmUgXCJlbnVtZXJhdGVkXCIgU1ZHIGF0dHJpYnV0ZXMgdGhhdCBhY2NlcHQgXCJ0cnVlXCIgYW5kIFwiZmFsc2VcIi5cbi8vIEluIFJlYWN0LCB3ZSBsZXQgdXNlcnMgcGFzcyBgdHJ1ZWAgYW5kIGBmYWxzZWAgZXZlbiB0aG91Z2ggdGVjaG5pY2FsbHlcbi8vIHRoZXNlIGFyZW4ndCBib29sZWFuIGF0dHJpYnV0ZXMgKHRoZXkgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncykuXG4vLyBTaW5jZSB0aGVzZSBhcmUgU1ZHIGF0dHJpYnV0ZXMsIHRoZWlyIGF0dHJpYnV0ZSBuYW1lcyBhcmUgY2FzZS1zZW5zaXRpdmUuXG5cblsnYXV0b1JldmVyc2UnLCAnZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZCcsICdmb2N1c2FibGUnLCAncHJlc2VydmVBbHBoYSddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgQk9PTEVBTklTSF9TVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhcmUgSFRNTCBib29sZWFuIGF0dHJpYnV0ZXMuXG5cblsnYWxsb3dGdWxsU2NyZWVuJywgJ2FzeW5jJywgLy8gTm90ZTogdGhlcmUgaXMgYSBzcGVjaWFsIGNhc2UgdGhhdCBwcmV2ZW50cyBpdCBmcm9tIGJlaW5nIHdyaXR0ZW4gdG8gdGhlIERPTVxuLy8gb24gdGhlIGNsaWVudCBzaWRlIGJlY2F1c2UgdGhlIGJyb3dzZXJzIGFyZSBpbmNvbnNpc3RlbnQuIEluc3RlYWQgd2UgY2FsbCBmb2N1cygpLlxuJ2F1dG9Gb2N1cycsICdhdXRvUGxheScsICdjb250cm9scycsICdkZWZhdWx0JywgJ2RlZmVyJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVQaWN0dXJlSW5QaWN0dXJlJywgJ2Rpc2FibGVSZW1vdGVQbGF5YmFjaycsICdmb3JtTm9WYWxpZGF0ZScsICdoaWRkZW4nLCAnbG9vcCcsICdub01vZHVsZScsICdub1ZhbGlkYXRlJywgJ29wZW4nLCAncGxheXNJbmxpbmUnLCAncmVhZE9ubHknLCAncmVxdWlyZWQnLCAncmV2ZXJzZWQnLCAnc2NvcGVkJywgJ3NlYW1sZXNzJywgLy8gTWljcm9kYXRhXG4naXRlbVNjb3BlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhcmUgdGhlIGZldyBSZWFjdCBwcm9wcyB0aGF0IHdlIHNldCBhcyBET00gcHJvcGVydGllc1xuLy8gcmF0aGVyIHRoYW4gYXR0cmlidXRlcy4gVGhlc2UgYXJlIGFsbCBib29sZWFucy5cblxuWydjaGVja2VkJywgLy8gTm90ZTogYG9wdGlvbi5zZWxlY3RlZGAgaXMgbm90IHVwZGF0ZWQgaWYgYHNlbGVjdC5tdWx0aXBsZWAgaXNcbi8vIGRpc2FibGVkIHdpdGggYHJlbW92ZUF0dHJpYnV0ZWAuIFdlIGhhdmUgc3BlY2lhbCBsb2dpYyBmb3IgaGFuZGxpbmcgdGhpcy5cbidtdWx0aXBsZScsICdtdXRlZCcsICdzZWxlY3RlZCcgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXG5dLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgQk9PTEVBTiwgdHJ1ZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYXR0cmlidXRlcyB0aGF0IGFyZSBcIm92ZXJsb2FkZWQgYm9vbGVhbnNcIjogdGhleSBiZWhhdmUgbGlrZVxuLy8gYm9vbGVhbnMsIGJ1dCBjYW4gYWxzbyBhY2NlcHQgYSBzdHJpbmcgdmFsdWUuXG5cblsnY2FwdHVyZScsICdkb3dubG9hZCcgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXG5dLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgT1ZFUkxPQURFRF9CT09MRUFOLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYXR0cmlidXRlcyB0aGF0IG11c3QgYmUgcG9zaXRpdmUgbnVtYmVycy5cblxuWydjb2xzJywgJ3Jvd3MnLCAnc2l6ZScsICdzcGFuJyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBQT1NJVElWRV9OVU1FUklDLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYXR0cmlidXRlcyB0aGF0IG11c3QgYmUgbnVtYmVycy5cblxuWydyb3dTcGFuJywgJ3N0YXJ0J10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBOVU1FUklDLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pO1xudmFyIENBTUVMSVpFID0gL1tcXC1cXDpdKFthLXpdKS9nO1xuXG52YXIgY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uIGNhcGl0YWxpemUodG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuWzFdLnRvVXBwZXJDYXNlKCk7XG59OyAvLyBUaGlzIGlzIGEgbGlzdCBvZiBhbGwgU1ZHIGF0dHJpYnV0ZXMgdGhhdCBuZWVkIHNwZWNpYWwgY2FzaW5nLCBuYW1lc3BhY2luZyxcbi8vIG9yIGJvb2xlYW4gdmFsdWUgYXNzaWdubWVudC4gUmVndWxhciBhdHRyaWJ1dGVzIHRoYXQganVzdCBhY2NlcHQgc3RyaW5nc1xuLy8gYW5kIGhhdmUgdGhlIHNhbWUgbmFtZXMgYXJlIG9taXR0ZWQsIGp1c3QgbGlrZSBpbiB0aGUgSFRNTCBhdHRyaWJ1dGUgZmlsdGVyLlxuLy8gU29tZSBvZiB0aGVzZSBhdHRyaWJ1dGVzIGNhbiBiZSBoYXJkIHRvIGZpbmQuIFRoaXMgbGlzdCB3YXMgY3JlYXRlZCBieVxuLy8gc2NyYXBpbmcgdGhlIE1ETiBkb2N1bWVudGF0aW9uLlxuXG5cblsnYWNjZW50LWhlaWdodCcsICdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnYXJhYmljLWZvcm0nLCAnYmFzZWxpbmUtc2hpZnQnLCAnY2FwLWhlaWdodCcsICdjbGlwLXBhdGgnLCAnY2xpcC1ydWxlJywgJ2NvbG9yLWludGVycG9sYXRpb24nLCAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJywgJ2NvbG9yLXByb2ZpbGUnLCAnY29sb3ItcmVuZGVyaW5nJywgJ2RvbWluYW50LWJhc2VsaW5lJywgJ2VuYWJsZS1iYWNrZ3JvdW5kJywgJ2ZpbGwtb3BhY2l0eScsICdmaWxsLXJ1bGUnLCAnZmxvb2QtY29sb3InLCAnZmxvb2Qtb3BhY2l0eScsICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zaXplLWFkanVzdCcsICdmb250LXN0cmV0Y2gnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLCAnZ2x5cGgtbmFtZScsICdnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsJywgJ2dseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsJywgJ2hvcml6LWFkdi14JywgJ2hvcml6LW9yaWdpbi14JywgJ2ltYWdlLXJlbmRlcmluZycsICdsZXR0ZXItc3BhY2luZycsICdsaWdodGluZy1jb2xvcicsICdtYXJrZXItZW5kJywgJ21hcmtlci1taWQnLCAnbWFya2VyLXN0YXJ0JywgJ292ZXJsaW5lLXBvc2l0aW9uJywgJ292ZXJsaW5lLXRoaWNrbmVzcycsICdwYWludC1vcmRlcicsICdwYW5vc2UtMScsICdwb2ludGVyLWV2ZW50cycsICdyZW5kZXJpbmctaW50ZW50JywgJ3NoYXBlLXJlbmRlcmluZycsICdzdG9wLWNvbG9yJywgJ3N0b3Atb3BhY2l0eScsICdzdHJpa2V0aHJvdWdoLXBvc2l0aW9uJywgJ3N0cmlrZXRocm91Z2gtdGhpY2tuZXNzJywgJ3N0cm9rZS1kYXNoYXJyYXknLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLWxpbmVjYXAnLCAnc3Ryb2tlLWxpbmVqb2luJywgJ3N0cm9rZS1taXRlcmxpbWl0JywgJ3N0cm9rZS1vcGFjaXR5JywgJ3N0cm9rZS13aWR0aCcsICd0ZXh0LWFuY2hvcicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1yZW5kZXJpbmcnLCAndW5kZXJsaW5lLXBvc2l0aW9uJywgJ3VuZGVybGluZS10aGlja25lc3MnLCAndW5pY29kZS1iaWRpJywgJ3VuaWNvZGUtcmFuZ2UnLCAndW5pdHMtcGVyLWVtJywgJ3YtYWxwaGFiZXRpYycsICd2LWhhbmdpbmcnLCAndi1pZGVvZ3JhcGhpYycsICd2LW1hdGhlbWF0aWNhbCcsICd2ZWN0b3ItZWZmZWN0JywgJ3ZlcnQtYWR2LXknLCAndmVydC1vcmlnaW4teCcsICd2ZXJ0LW9yaWdpbi15JywgJ3dvcmQtc3BhY2luZycsICd3cml0aW5nLW1vZGUnLCAneG1sbnM6eGxpbmsnLCAneC1oZWlnaHQnIC8vIE5PVEU6IGlmIHlvdSBhZGQgYSBjYW1lbENhc2VkIHByb3AgdG8gdGhpcyBsaXN0LFxuLy8geW91J2xsIG5lZWQgdG8gc2V0IGF0dHJpYnV0ZU5hbWUgdG8gbmFtZS50b0xvd2VyQ2FzZSgpXG4vLyBpbnN0ZWFkIGluIHRoZSBhc3NpZ25tZW50IGJlbG93LlxuXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gIHZhciBuYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKENBTUVMSVpFLCBjYXBpdGFsaXplKTtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUsIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFN0cmluZyBTVkcgYXR0cmlidXRlcyB3aXRoIHRoZSB4bGluayBuYW1lc3BhY2UuXG5cblsneGxpbms6YWN0dWF0ZScsICd4bGluazphcmNyb2xlJywgJ3hsaW5rOnJvbGUnLCAneGxpbms6c2hvdycsICd4bGluazp0aXRsZScsICd4bGluazp0eXBlJyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICB2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZShDQU1FTElaRSwgY2FwaXRhbGl6ZSk7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gU3RyaW5nIFNWRyBhdHRyaWJ1dGVzIHdpdGggdGhlIHhtbCBuYW1lc3BhY2UuXG5cblsneG1sOmJhc2UnLCAneG1sOmxhbmcnLCAneG1sOnNwYWNlJyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICB2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZShDQU1FTElaRSwgY2FwaXRhbGl6ZSk7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLCAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJywgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhdHRyaWJ1dGUgZXhpc3RzIGJvdGggaW4gSFRNTCBhbmQgU1ZHLlxuLy8gVGhlIGF0dHJpYnV0ZSBuYW1lIGlzIGNhc2Utc2Vuc2l0aXZlIGluIFNWRyBzbyB3ZSBjYW4ndCBqdXN0IHVzZVxuLy8gdGhlIFJlYWN0IG5hbWUgbGlrZSB3ZSBkbyBmb3IgYXR0cmlidXRlcyB0aGF0IGV4aXN0IG9ubHkgaW4gSFRNTC5cblxuWyd0YWJJbmRleCcsICdjcm9zc09yaWdpbiddLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcHJvcGVydGllc1thdHRyaWJ1dGVOYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQoYXR0cmlidXRlTmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhdHRyaWJ1dGVzIGFjY2VwdCBVUkxzLiBUaGVzZSBtdXN0IG5vdCBhbGxvdyBqYXZhc2NyaXB0OiBVUkxTLlxuLy8gVGhlc2Ugd2lsbCBhbHNvIG5lZWQgdG8gYWNjZXB0IFRydXN0ZWQgVHlwZXMgb2JqZWN0IGluIHRoZSBmdXR1cmUuXG5cbnZhciB4bGlua0hyZWYgPSAneGxpbmtIcmVmJztcbnByb3BlcnRpZXNbeGxpbmtIcmVmXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQoJ3hsaW5rSHJlZicsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuJ3hsaW5rOmhyZWYnLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIHRydWUsIC8vIHNhbml0aXplVVJMXG5mYWxzZSk7XG5bJ3NyYycsICdocmVmJywgJ2FjdGlvbicsICdmb3JtQWN0aW9uJ10uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICBwcm9wZXJ0aWVzW2F0dHJpYnV0ZU5hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChhdHRyaWJ1dGVOYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICB0cnVlLCAvLyBzYW5pdGl6ZVVSTFxuICB0cnVlKTtcbn0pO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuLi9saWIvcG9zc2libGVTdGFuZGFyZE5hbWVzT3B0aW1pemVkJyksXG4gICAgQ0FNRUxDQVNFID0gX3JlcXVpcmUuQ0FNRUxDQVNFLFxuICAgIFNBTUUgPSBfcmVxdWlyZS5TQU1FLFxuICAgIHBvc3NpYmxlU3RhbmRhcmROYW1lc09wdGltaXplZCA9IF9yZXF1aXJlLnBvc3NpYmxlU3RhbmRhcmROYW1lcztcblxudmFyIEFUVFJJQlVURV9OQU1FX1NUQVJUX0NIQVIgPSBcIjpBLVpfYS16XFxcXHUwMEMwLVxcXFx1MDBENlxcXFx1MDBEOC1cXFxcdTAwRjZcXFxcdTAwRjgtXFxcXHUwMkZGXFxcXHUwMzcwLVxcXFx1MDM3RFxcXFx1MDM3Ri1cXFxcdTFGRkZcXFxcdTIwMEMtXFxcXHUyMDBEXFxcXHUyMDcwLVxcXFx1MjE4RlxcXFx1MkMwMC1cXFxcdTJGRUZcXFxcdTMwMDEtXFxcXHVEN0ZGXFxcXHVGOTAwLVxcXFx1RkRDRlxcXFx1RkRGMC1cXFxcdUZGRkRcIjtcbnZhciBBVFRSSUJVVEVfTkFNRV9DSEFSID0gQVRUUklCVVRFX05BTUVfU1RBUlRfQ0hBUiArIFwiXFxcXC0uMC05XFxcXHUwMEI3XFxcXHUwMzAwLVxcXFx1MDM2RlxcXFx1MjAzRi1cXFxcdTIwNDBcIjtcbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYSBwcm9wZXJ0eSBuYW1lIGlzIGEgY3VzdG9tIGF0dHJpYnV0ZS5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8xNS1zdGFibGUvc3JjL3JlbmRlcmVycy9kb20vc2hhcmVkL0hUTUxET01Qcm9wZXJ0eUNvbmZpZy5qcyNMMjMtTDI1fVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuXG52YXIgaXNDdXN0b21BdHRyaWJ1dGUgPSBSZWdFeHAucHJvdG90eXBlLnRlc3QuYmluZCggLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1pc2xlYWRpbmctY2hhcmFjdGVyLWNsYXNzXG5uZXcgUmVnRXhwKCdeKGRhdGF8YXJpYSktWycgKyBBVFRSSUJVVEVfTkFNRV9DSEFSICsgJ10qJCcpKTtcbnZhciBwb3NzaWJsZVN0YW5kYXJkTmFtZXMgPSBPYmplY3Qua2V5cyhwb3NzaWJsZVN0YW5kYXJkTmFtZXNPcHRpbWl6ZWQpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIHN0YW5kYXJkTmFtZSkge1xuICB2YXIgcHJvcE5hbWUgPSBwb3NzaWJsZVN0YW5kYXJkTmFtZXNPcHRpbWl6ZWRbc3RhbmRhcmROYW1lXTtcblxuICBpZiAocHJvcE5hbWUgPT09IFNBTUUpIHtcbiAgICBhY2N1bXVsYXRvcltzdGFuZGFyZE5hbWVdID0gc3RhbmRhcmROYW1lO1xuICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSBDQU1FTENBU0UpIHtcbiAgICBhY2N1bXVsYXRvcltzdGFuZGFyZE5hbWUudG9Mb3dlckNhc2UoKV0gPSBzdGFuZGFyZE5hbWU7XG4gIH0gZWxzZSB7XG4gICAgYWNjdW11bGF0b3Jbc3RhbmRhcmROYW1lXSA9IHByb3BOYW1lO1xuICB9XG5cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufSwge30pO1xuXG5leHBvcnRzLkJPT0xFQU4gPSBCT09MRUFOO1xuZXhwb3J0cy5CT09MRUFOSVNIX1NUUklORyA9IEJPT0xFQU5JU0hfU1RSSU5HO1xuZXhwb3J0cy5OVU1FUklDID0gTlVNRVJJQztcbmV4cG9ydHMuT1ZFUkxPQURFRF9CT09MRUFOID0gT1ZFUkxPQURFRF9CT09MRUFOO1xuZXhwb3J0cy5QT1NJVElWRV9OVU1FUklDID0gUE9TSVRJVkVfTlVNRVJJQztcbmV4cG9ydHMuUkVTRVJWRUQgPSBSRVNFUlZFRDtcbmV4cG9ydHMuU1RSSU5HID0gU1RSSU5HO1xuZXhwb3J0cy5nZXRQcm9wZXJ0eUluZm8gPSBnZXRQcm9wZXJ0eUluZm87XG5leHBvcnRzLmlzQ3VzdG9tQXR0cmlidXRlID0gaXNDdXN0b21BdHRyaWJ1dGU7XG5leHBvcnRzLnBvc3NpYmxlU3RhbmRhcmROYW1lcyA9IHBvc3NpYmxlU3RhbmRhcmROYW1lcztcbiIsIi8vIEFuIGF0dHJpYnV0ZSBpbiB3aGljaCB0aGUgRE9NL1NWRyBzdGFuZGFyZCBuYW1lIGlzIHRoZSBzYW1lIGFzIHRoZSBSZWFjdCBwcm9wIG5hbWUgKGUuZy4sICdhY2NlcHQnKS5cbnZhciBTQU1FID0gMDtcbmV4cG9ydHMuU0FNRSA9IFNBTUU7XG5cbi8vIEFuIGF0dHJpYnV0ZSBpbiB3aGljaCB0aGUgUmVhY3QgcHJvcCBuYW1lIGlzIHRoZSBjYW1lbGNhc2VkIHZlcnNpb24gb2YgdGhlIERPTS9TVkcgc3RhbmRhcmQgbmFtZSAoZS5nLiwgJ2FjY2VwdENoYXJzZXQnKS5cbnZhciBDQU1FTENBU0UgPSAxO1xuZXhwb3J0cy5DQU1FTENBU0UgPSBDQU1FTENBU0U7XG5cbmV4cG9ydHMucG9zc2libGVTdGFuZGFyZE5hbWVzID0ge1xuICBhY2NlcHQ6IDAsXG4gIGFjY2VwdENoYXJzZXQ6IDEsXG4gICdhY2NlcHQtY2hhcnNldCc6ICdhY2NlcHRDaGFyc2V0JyxcbiAgYWNjZXNzS2V5OiAxLFxuICBhY3Rpb246IDAsXG4gIGFsbG93RnVsbFNjcmVlbjogMSxcbiAgYWx0OiAwLFxuICBhczogMCxcbiAgYXN5bmM6IDAsXG4gIGF1dG9DYXBpdGFsaXplOiAxLFxuICBhdXRvQ29tcGxldGU6IDEsXG4gIGF1dG9Db3JyZWN0OiAxLFxuICBhdXRvRm9jdXM6IDEsXG4gIGF1dG9QbGF5OiAxLFxuICBhdXRvU2F2ZTogMSxcbiAgY2FwdHVyZTogMCxcbiAgY2VsbFBhZGRpbmc6IDEsXG4gIGNlbGxTcGFjaW5nOiAxLFxuICBjaGFsbGVuZ2U6IDAsXG4gIGNoYXJTZXQ6IDEsXG4gIGNoZWNrZWQ6IDAsXG4gIGNoaWxkcmVuOiAwLFxuICBjaXRlOiAwLFxuICBjbGFzczogJ2NsYXNzTmFtZScsXG4gIGNsYXNzSUQ6IDEsXG4gIGNsYXNzTmFtZTogMSxcbiAgY29sczogMCxcbiAgY29sU3BhbjogMSxcbiAgY29udGVudDogMCxcbiAgY29udGVudEVkaXRhYmxlOiAxLFxuICBjb250ZXh0TWVudTogMSxcbiAgY29udHJvbHM6IDAsXG4gIGNvbnRyb2xzTGlzdDogMSxcbiAgY29vcmRzOiAwLFxuICBjcm9zc09yaWdpbjogMSxcbiAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IDEsXG4gIGRhdGE6IDAsXG4gIGRhdGVUaW1lOiAxLFxuICBkZWZhdWx0OiAwLFxuICBkZWZhdWx0Q2hlY2tlZDogMSxcbiAgZGVmYXVsdFZhbHVlOiAxLFxuICBkZWZlcjogMCxcbiAgZGlyOiAwLFxuICBkaXNhYmxlZDogMCxcbiAgZGlzYWJsZVBpY3R1cmVJblBpY3R1cmU6IDEsXG4gIGRpc2FibGVSZW1vdGVQbGF5YmFjazogMSxcbiAgZG93bmxvYWQ6IDAsXG4gIGRyYWdnYWJsZTogMCxcbiAgZW5jVHlwZTogMSxcbiAgZW50ZXJLZXlIaW50OiAxLFxuICBmb3I6ICdodG1sRm9yJyxcbiAgZm9ybTogMCxcbiAgZm9ybU1ldGhvZDogMSxcbiAgZm9ybUFjdGlvbjogMSxcbiAgZm9ybUVuY1R5cGU6IDEsXG4gIGZvcm1Ob1ZhbGlkYXRlOiAxLFxuICBmb3JtVGFyZ2V0OiAxLFxuICBmcmFtZUJvcmRlcjogMSxcbiAgaGVhZGVyczogMCxcbiAgaGVpZ2h0OiAwLFxuICBoaWRkZW46IDAsXG4gIGhpZ2g6IDAsXG4gIGhyZWY6IDAsXG4gIGhyZWZMYW5nOiAxLFxuICBodG1sRm9yOiAxLFxuICBodHRwRXF1aXY6IDEsXG4gICdodHRwLWVxdWl2JzogJ2h0dHBFcXVpdicsXG4gIGljb246IDAsXG4gIGlkOiAwLFxuICBpbm5lckhUTUw6IDEsXG4gIGlucHV0TW9kZTogMSxcbiAgaW50ZWdyaXR5OiAwLFxuICBpczogMCxcbiAgaXRlbUlEOiAxLFxuICBpdGVtUHJvcDogMSxcbiAgaXRlbVJlZjogMSxcbiAgaXRlbVNjb3BlOiAxLFxuICBpdGVtVHlwZTogMSxcbiAga2V5UGFyYW1zOiAxLFxuICBrZXlUeXBlOiAxLFxuICBraW5kOiAwLFxuICBsYWJlbDogMCxcbiAgbGFuZzogMCxcbiAgbGlzdDogMCxcbiAgbG9vcDogMCxcbiAgbG93OiAwLFxuICBtYW5pZmVzdDogMCxcbiAgbWFyZ2luV2lkdGg6IDEsXG4gIG1hcmdpbkhlaWdodDogMSxcbiAgbWF4OiAwLFxuICBtYXhMZW5ndGg6IDEsXG4gIG1lZGlhOiAwLFxuICBtZWRpYUdyb3VwOiAxLFxuICBtZXRob2Q6IDAsXG4gIG1pbjogMCxcbiAgbWluTGVuZ3RoOiAxLFxuICBtdWx0aXBsZTogMCxcbiAgbXV0ZWQ6IDAsXG4gIG5hbWU6IDAsXG4gIG5vTW9kdWxlOiAxLFxuICBub25jZTogMCxcbiAgbm9WYWxpZGF0ZTogMSxcbiAgb3BlbjogMCxcbiAgb3B0aW11bTogMCxcbiAgcGF0dGVybjogMCxcbiAgcGxhY2Vob2xkZXI6IDAsXG4gIHBsYXlzSW5saW5lOiAxLFxuICBwb3N0ZXI6IDAsXG4gIHByZWxvYWQ6IDAsXG4gIHByb2ZpbGU6IDAsXG4gIHJhZGlvR3JvdXA6IDEsXG4gIHJlYWRPbmx5OiAxLFxuICByZWZlcnJlclBvbGljeTogMSxcbiAgcmVsOiAwLFxuICByZXF1aXJlZDogMCxcbiAgcmV2ZXJzZWQ6IDAsXG4gIHJvbGU6IDAsXG4gIHJvd3M6IDAsXG4gIHJvd1NwYW46IDEsXG4gIHNhbmRib3g6IDAsXG4gIHNjb3BlOiAwLFxuICBzY29wZWQ6IDAsXG4gIHNjcm9sbGluZzogMCxcbiAgc2VhbWxlc3M6IDAsXG4gIHNlbGVjdGVkOiAwLFxuICBzaGFwZTogMCxcbiAgc2l6ZTogMCxcbiAgc2l6ZXM6IDAsXG4gIHNwYW46IDAsXG4gIHNwZWxsQ2hlY2s6IDEsXG4gIHNyYzogMCxcbiAgc3JjRG9jOiAxLFxuICBzcmNMYW5nOiAxLFxuICBzcmNTZXQ6IDEsXG4gIHN0YXJ0OiAwLFxuICBzdGVwOiAwLFxuICBzdHlsZTogMCxcbiAgc3VtbWFyeTogMCxcbiAgdGFiSW5kZXg6IDEsXG4gIHRhcmdldDogMCxcbiAgdGl0bGU6IDAsXG4gIHR5cGU6IDAsXG4gIHVzZU1hcDogMSxcbiAgdmFsdWU6IDAsXG4gIHdpZHRoOiAwLFxuICB3bW9kZTogMCxcbiAgd3JhcDogMCxcbiAgYWJvdXQ6IDAsXG4gIGFjY2VudEhlaWdodDogMSxcbiAgJ2FjY2VudC1oZWlnaHQnOiAnYWNjZW50SGVpZ2h0JyxcbiAgYWNjdW11bGF0ZTogMCxcbiAgYWRkaXRpdmU6IDAsXG4gIGFsaWdubWVudEJhc2VsaW5lOiAxLFxuICAnYWxpZ25tZW50LWJhc2VsaW5lJzogJ2FsaWdubWVudEJhc2VsaW5lJyxcbiAgYWxsb3dSZW9yZGVyOiAxLFxuICBhbHBoYWJldGljOiAwLFxuICBhbXBsaXR1ZGU6IDAsXG4gIGFyYWJpY0Zvcm06IDEsXG4gICdhcmFiaWMtZm9ybSc6ICdhcmFiaWNGb3JtJyxcbiAgYXNjZW50OiAwLFxuICBhdHRyaWJ1dGVOYW1lOiAxLFxuICBhdHRyaWJ1dGVUeXBlOiAxLFxuICBhdXRvUmV2ZXJzZTogMSxcbiAgYXppbXV0aDogMCxcbiAgYmFzZUZyZXF1ZW5jeTogMSxcbiAgYmFzZWxpbmVTaGlmdDogMSxcbiAgJ2Jhc2VsaW5lLXNoaWZ0JzogJ2Jhc2VsaW5lU2hpZnQnLFxuICBiYXNlUHJvZmlsZTogMSxcbiAgYmJveDogMCxcbiAgYmVnaW46IDAsXG4gIGJpYXM6IDAsXG4gIGJ5OiAwLFxuICBjYWxjTW9kZTogMSxcbiAgY2FwSGVpZ2h0OiAxLFxuICAnY2FwLWhlaWdodCc6ICdjYXBIZWlnaHQnLFxuICBjbGlwOiAwLFxuICBjbGlwUGF0aDogMSxcbiAgJ2NsaXAtcGF0aCc6ICdjbGlwUGF0aCcsXG4gIGNsaXBQYXRoVW5pdHM6IDEsXG4gIGNsaXBSdWxlOiAxLFxuICAnY2xpcC1ydWxlJzogJ2NsaXBSdWxlJyxcbiAgY29sb3I6IDAsXG4gIGNvbG9ySW50ZXJwb2xhdGlvbjogMSxcbiAgJ2NvbG9yLWludGVycG9sYXRpb24nOiAnY29sb3JJbnRlcnBvbGF0aW9uJyxcbiAgY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyczogMSxcbiAgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyc6ICdjb2xvckludGVycG9sYXRpb25GaWx0ZXJzJyxcbiAgY29sb3JQcm9maWxlOiAxLFxuICAnY29sb3ItcHJvZmlsZSc6ICdjb2xvclByb2ZpbGUnLFxuICBjb2xvclJlbmRlcmluZzogMSxcbiAgJ2NvbG9yLXJlbmRlcmluZyc6ICdjb2xvclJlbmRlcmluZycsXG4gIGNvbnRlbnRTY3JpcHRUeXBlOiAxLFxuICBjb250ZW50U3R5bGVUeXBlOiAxLFxuICBjdXJzb3I6IDAsXG4gIGN4OiAwLFxuICBjeTogMCxcbiAgZDogMCxcbiAgZGF0YXR5cGU6IDAsXG4gIGRlY2VsZXJhdGU6IDAsXG4gIGRlc2NlbnQ6IDAsXG4gIGRpZmZ1c2VDb25zdGFudDogMSxcbiAgZGlyZWN0aW9uOiAwLFxuICBkaXNwbGF5OiAwLFxuICBkaXZpc29yOiAwLFxuICBkb21pbmFudEJhc2VsaW5lOiAxLFxuICAnZG9taW5hbnQtYmFzZWxpbmUnOiAnZG9taW5hbnRCYXNlbGluZScsXG4gIGR1cjogMCxcbiAgZHg6IDAsXG4gIGR5OiAwLFxuICBlZGdlTW9kZTogMSxcbiAgZWxldmF0aW9uOiAwLFxuICBlbmFibGVCYWNrZ3JvdW5kOiAxLFxuICAnZW5hYmxlLWJhY2tncm91bmQnOiAnZW5hYmxlQmFja2dyb3VuZCcsXG4gIGVuZDogMCxcbiAgZXhwb25lbnQ6IDAsXG4gIGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQ6IDEsXG4gIGZpbGw6IDAsXG4gIGZpbGxPcGFjaXR5OiAxLFxuICAnZmlsbC1vcGFjaXR5JzogJ2ZpbGxPcGFjaXR5JyxcbiAgZmlsbFJ1bGU6IDEsXG4gICdmaWxsLXJ1bGUnOiAnZmlsbFJ1bGUnLFxuICBmaWx0ZXI6IDAsXG4gIGZpbHRlclJlczogMSxcbiAgZmlsdGVyVW5pdHM6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgJ2Zsb29kLW9wYWNpdHknOiAnZmxvb2RPcGFjaXR5JyxcbiAgZmxvb2RDb2xvcjogMSxcbiAgJ2Zsb29kLWNvbG9yJzogJ2Zsb29kQ29sb3InLFxuICBmb2N1c2FibGU6IDAsXG4gIGZvbnRGYW1pbHk6IDEsXG4gICdmb250LWZhbWlseSc6ICdmb250RmFtaWx5JyxcbiAgZm9udFNpemU6IDEsXG4gICdmb250LXNpemUnOiAnZm9udFNpemUnLFxuICBmb250U2l6ZUFkanVzdDogMSxcbiAgJ2ZvbnQtc2l6ZS1hZGp1c3QnOiAnZm9udFNpemVBZGp1c3QnLFxuICBmb250U3RyZXRjaDogMSxcbiAgJ2ZvbnQtc3RyZXRjaCc6ICdmb250U3RyZXRjaCcsXG4gIGZvbnRTdHlsZTogMSxcbiAgJ2ZvbnQtc3R5bGUnOiAnZm9udFN0eWxlJyxcbiAgZm9udFZhcmlhbnQ6IDEsXG4gICdmb250LXZhcmlhbnQnOiAnZm9udFZhcmlhbnQnLFxuICBmb250V2VpZ2h0OiAxLFxuICAnZm9udC13ZWlnaHQnOiAnZm9udFdlaWdodCcsXG4gIGZvcm1hdDogMCxcbiAgZnJvbTogMCxcbiAgZng6IDAsXG4gIGZ5OiAwLFxuICBnMTogMCxcbiAgZzI6IDAsXG4gIGdseXBoTmFtZTogMSxcbiAgJ2dseXBoLW5hbWUnOiAnZ2x5cGhOYW1lJyxcbiAgZ2x5cGhPcmllbnRhdGlvbkhvcml6b250YWw6IDEsXG4gICdnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsJzogJ2dseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsJyxcbiAgZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsOiAxLFxuICAnZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwnOiAnZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsJyxcbiAgZ2x5cGhSZWY6IDEsXG4gIGdyYWRpZW50VHJhbnNmb3JtOiAxLFxuICBncmFkaWVudFVuaXRzOiAxLFxuICBoYW5naW5nOiAwLFxuICBob3JpekFkdlg6IDEsXG4gICdob3Jpei1hZHYteCc6ICdob3JpekFkdlgnLFxuICBob3Jpek9yaWdpblg6IDEsXG4gICdob3Jpei1vcmlnaW4teCc6ICdob3Jpek9yaWdpblgnLFxuICBpZGVvZ3JhcGhpYzogMCxcbiAgaW1hZ2VSZW5kZXJpbmc6IDEsXG4gICdpbWFnZS1yZW5kZXJpbmcnOiAnaW1hZ2VSZW5kZXJpbmcnLFxuICBpbjI6IDAsXG4gIGluOiAwLFxuICBpbmxpc3Q6IDAsXG4gIGludGVyY2VwdDogMCxcbiAgazE6IDAsXG4gIGsyOiAwLFxuICBrMzogMCxcbiAgazQ6IDAsXG4gIGs6IDAsXG4gIGtlcm5lbE1hdHJpeDogMSxcbiAga2VybmVsVW5pdExlbmd0aDogMSxcbiAga2VybmluZzogMCxcbiAga2V5UG9pbnRzOiAxLFxuICBrZXlTcGxpbmVzOiAxLFxuICBrZXlUaW1lczogMSxcbiAgbGVuZ3RoQWRqdXN0OiAxLFxuICBsZXR0ZXJTcGFjaW5nOiAxLFxuICAnbGV0dGVyLXNwYWNpbmcnOiAnbGV0dGVyU3BhY2luZycsXG4gIGxpZ2h0aW5nQ29sb3I6IDEsXG4gICdsaWdodGluZy1jb2xvcic6ICdsaWdodGluZ0NvbG9yJyxcbiAgbGltaXRpbmdDb25lQW5nbGU6IDEsXG4gIGxvY2FsOiAwLFxuICBtYXJrZXJFbmQ6IDEsXG4gICdtYXJrZXItZW5kJzogJ21hcmtlckVuZCcsXG4gIG1hcmtlckhlaWdodDogMSxcbiAgbWFya2VyTWlkOiAxLFxuICAnbWFya2VyLW1pZCc6ICdtYXJrZXJNaWQnLFxuICBtYXJrZXJTdGFydDogMSxcbiAgJ21hcmtlci1zdGFydCc6ICdtYXJrZXJTdGFydCcsXG4gIG1hcmtlclVuaXRzOiAxLFxuICBtYXJrZXJXaWR0aDogMSxcbiAgbWFzazogMCxcbiAgbWFza0NvbnRlbnRVbml0czogMSxcbiAgbWFza1VuaXRzOiAxLFxuICBtYXRoZW1hdGljYWw6IDAsXG4gIG1vZGU6IDAsXG4gIG51bU9jdGF2ZXM6IDEsXG4gIG9mZnNldDogMCxcbiAgb3BhY2l0eTogMCxcbiAgb3BlcmF0b3I6IDAsXG4gIG9yZGVyOiAwLFxuICBvcmllbnQ6IDAsXG4gIG9yaWVudGF0aW9uOiAwLFxuICBvcmlnaW46IDAsXG4gIG92ZXJmbG93OiAwLFxuICBvdmVybGluZVBvc2l0aW9uOiAxLFxuICAnb3ZlcmxpbmUtcG9zaXRpb24nOiAnb3ZlcmxpbmVQb3NpdGlvbicsXG4gIG92ZXJsaW5lVGhpY2tuZXNzOiAxLFxuICAnb3ZlcmxpbmUtdGhpY2tuZXNzJzogJ292ZXJsaW5lVGhpY2tuZXNzJyxcbiAgcGFpbnRPcmRlcjogMSxcbiAgJ3BhaW50LW9yZGVyJzogJ3BhaW50T3JkZXInLFxuICBwYW5vc2UxOiAwLFxuICAncGFub3NlLTEnOiAncGFub3NlMScsXG4gIHBhdGhMZW5ndGg6IDEsXG4gIHBhdHRlcm5Db250ZW50VW5pdHM6IDEsXG4gIHBhdHRlcm5UcmFuc2Zvcm06IDEsXG4gIHBhdHRlcm5Vbml0czogMSxcbiAgcG9pbnRlckV2ZW50czogMSxcbiAgJ3BvaW50ZXItZXZlbnRzJzogJ3BvaW50ZXJFdmVudHMnLFxuICBwb2ludHM6IDAsXG4gIHBvaW50c0F0WDogMSxcbiAgcG9pbnRzQXRZOiAxLFxuICBwb2ludHNBdFo6IDEsXG4gIHByZWZpeDogMCxcbiAgcHJlc2VydmVBbHBoYTogMSxcbiAgcHJlc2VydmVBc3BlY3RSYXRpbzogMSxcbiAgcHJpbWl0aXZlVW5pdHM6IDEsXG4gIHByb3BlcnR5OiAwLFxuICByOiAwLFxuICByYWRpdXM6IDAsXG4gIHJlZlg6IDEsXG4gIHJlZlk6IDEsXG4gIHJlbmRlcmluZ0ludGVudDogMSxcbiAgJ3JlbmRlcmluZy1pbnRlbnQnOiAncmVuZGVyaW5nSW50ZW50JyxcbiAgcmVwZWF0Q291bnQ6IDEsXG4gIHJlcGVhdER1cjogMSxcbiAgcmVxdWlyZWRFeHRlbnNpb25zOiAxLFxuICByZXF1aXJlZEZlYXR1cmVzOiAxLFxuICByZXNvdXJjZTogMCxcbiAgcmVzdGFydDogMCxcbiAgcmVzdWx0OiAwLFxuICByZXN1bHRzOiAwLFxuICByb3RhdGU6IDAsXG4gIHJ4OiAwLFxuICByeTogMCxcbiAgc2NhbGU6IDAsXG4gIHNlY3VyaXR5OiAwLFxuICBzZWVkOiAwLFxuICBzaGFwZVJlbmRlcmluZzogMSxcbiAgJ3NoYXBlLXJlbmRlcmluZyc6ICdzaGFwZVJlbmRlcmluZycsXG4gIHNsb3BlOiAwLFxuICBzcGFjaW5nOiAwLFxuICBzcGVjdWxhckNvbnN0YW50OiAxLFxuICBzcGVjdWxhckV4cG9uZW50OiAxLFxuICBzcGVlZDogMCxcbiAgc3ByZWFkTWV0aG9kOiAxLFxuICBzdGFydE9mZnNldDogMSxcbiAgc3RkRGV2aWF0aW9uOiAxLFxuICBzdGVtaDogMCxcbiAgc3RlbXY6IDAsXG4gIHN0aXRjaFRpbGVzOiAxLFxuICBzdG9wQ29sb3I6IDEsXG4gICdzdG9wLWNvbG9yJzogJ3N0b3BDb2xvcicsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICAnc3RvcC1vcGFjaXR5JzogJ3N0b3BPcGFjaXR5JyxcbiAgc3RyaWtldGhyb3VnaFBvc2l0aW9uOiAxLFxuICAnc3RyaWtldGhyb3VnaC1wb3NpdGlvbic6ICdzdHJpa2V0aHJvdWdoUG9zaXRpb24nLFxuICBzdHJpa2V0aHJvdWdoVGhpY2tuZXNzOiAxLFxuICAnc3RyaWtldGhyb3VnaC10aGlja25lc3MnOiAnc3RyaWtldGhyb3VnaFRoaWNrbmVzcycsXG4gIHN0cmluZzogMCxcbiAgc3Ryb2tlOiAwLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gICdzdHJva2UtZGFzaGFycmF5JzogJ3N0cm9rZURhc2hhcnJheScsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gICdzdHJva2UtZGFzaG9mZnNldCc6ICdzdHJva2VEYXNob2Zmc2V0JyxcbiAgc3Ryb2tlTGluZWNhcDogMSxcbiAgJ3N0cm9rZS1saW5lY2FwJzogJ3N0cm9rZUxpbmVjYXAnLFxuICBzdHJva2VMaW5lam9pbjogMSxcbiAgJ3N0cm9rZS1saW5lam9pbic6ICdzdHJva2VMaW5lam9pbicsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gICdzdHJva2UtbWl0ZXJsaW1pdCc6ICdzdHJva2VNaXRlcmxpbWl0JyxcbiAgc3Ryb2tlV2lkdGg6IDEsXG4gICdzdHJva2Utd2lkdGgnOiAnc3Ryb2tlV2lkdGgnLFxuICBzdHJva2VPcGFjaXR5OiAxLFxuICAnc3Ryb2tlLW9wYWNpdHknOiAnc3Ryb2tlT3BhY2l0eScsXG4gIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZzogMSxcbiAgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nOiAxLFxuICBzdXJmYWNlU2NhbGU6IDEsXG4gIHN5c3RlbUxhbmd1YWdlOiAxLFxuICB0YWJsZVZhbHVlczogMSxcbiAgdGFyZ2V0WDogMSxcbiAgdGFyZ2V0WTogMSxcbiAgdGV4dEFuY2hvcjogMSxcbiAgJ3RleHQtYW5jaG9yJzogJ3RleHRBbmNob3InLFxuICB0ZXh0RGVjb3JhdGlvbjogMSxcbiAgJ3RleHQtZGVjb3JhdGlvbic6ICd0ZXh0RGVjb3JhdGlvbicsXG4gIHRleHRMZW5ndGg6IDEsXG4gIHRleHRSZW5kZXJpbmc6IDEsXG4gICd0ZXh0LXJlbmRlcmluZyc6ICd0ZXh0UmVuZGVyaW5nJyxcbiAgdG86IDAsXG4gIHRyYW5zZm9ybTogMCxcbiAgdHlwZW9mOiAwLFxuICB1MTogMCxcbiAgdTI6IDAsXG4gIHVuZGVybGluZVBvc2l0aW9uOiAxLFxuICAndW5kZXJsaW5lLXBvc2l0aW9uJzogJ3VuZGVybGluZVBvc2l0aW9uJyxcbiAgdW5kZXJsaW5lVGhpY2tuZXNzOiAxLFxuICAndW5kZXJsaW5lLXRoaWNrbmVzcyc6ICd1bmRlcmxpbmVUaGlja25lc3MnLFxuICB1bmljb2RlOiAwLFxuICB1bmljb2RlQmlkaTogMSxcbiAgJ3VuaWNvZGUtYmlkaSc6ICd1bmljb2RlQmlkaScsXG4gIHVuaWNvZGVSYW5nZTogMSxcbiAgJ3VuaWNvZGUtcmFuZ2UnOiAndW5pY29kZVJhbmdlJyxcbiAgdW5pdHNQZXJFbTogMSxcbiAgJ3VuaXRzLXBlci1lbSc6ICd1bml0c1BlckVtJyxcbiAgdW5zZWxlY3RhYmxlOiAwLFxuICB2QWxwaGFiZXRpYzogMSxcbiAgJ3YtYWxwaGFiZXRpYyc6ICd2QWxwaGFiZXRpYycsXG4gIHZhbHVlczogMCxcbiAgdmVjdG9yRWZmZWN0OiAxLFxuICAndmVjdG9yLWVmZmVjdCc6ICd2ZWN0b3JFZmZlY3QnLFxuICB2ZXJzaW9uOiAwLFxuICB2ZXJ0QWR2WTogMSxcbiAgJ3ZlcnQtYWR2LXknOiAndmVydEFkdlknLFxuICB2ZXJ0T3JpZ2luWDogMSxcbiAgJ3ZlcnQtb3JpZ2luLXgnOiAndmVydE9yaWdpblgnLFxuICB2ZXJ0T3JpZ2luWTogMSxcbiAgJ3ZlcnQtb3JpZ2luLXknOiAndmVydE9yaWdpblknLFxuICB2SGFuZ2luZzogMSxcbiAgJ3YtaGFuZ2luZyc6ICd2SGFuZ2luZycsXG4gIHZJZGVvZ3JhcGhpYzogMSxcbiAgJ3YtaWRlb2dyYXBoaWMnOiAndklkZW9ncmFwaGljJyxcbiAgdmlld0JveDogMSxcbiAgdmlld1RhcmdldDogMSxcbiAgdmlzaWJpbGl0eTogMCxcbiAgdk1hdGhlbWF0aWNhbDogMSxcbiAgJ3YtbWF0aGVtYXRpY2FsJzogJ3ZNYXRoZW1hdGljYWwnLFxuICB2b2NhYjogMCxcbiAgd2lkdGhzOiAwLFxuICB3b3JkU3BhY2luZzogMSxcbiAgJ3dvcmQtc3BhY2luZyc6ICd3b3JkU3BhY2luZycsXG4gIHdyaXRpbmdNb2RlOiAxLFxuICAnd3JpdGluZy1tb2RlJzogJ3dyaXRpbmdNb2RlJyxcbiAgeDE6IDAsXG4gIHgyOiAwLFxuICB4OiAwLFxuICB4Q2hhbm5lbFNlbGVjdG9yOiAxLFxuICB4SGVpZ2h0OiAxLFxuICAneC1oZWlnaHQnOiAneEhlaWdodCcsXG4gIHhsaW5rQWN0dWF0ZTogMSxcbiAgJ3hsaW5rOmFjdHVhdGUnOiAneGxpbmtBY3R1YXRlJyxcbiAgeGxpbmtBcmNyb2xlOiAxLFxuICAneGxpbms6YXJjcm9sZSc6ICd4bGlua0FyY3JvbGUnLFxuICB4bGlua0hyZWY6IDEsXG4gICd4bGluazpocmVmJzogJ3hsaW5rSHJlZicsXG4gIHhsaW5rUm9sZTogMSxcbiAgJ3hsaW5rOnJvbGUnOiAneGxpbmtSb2xlJyxcbiAgeGxpbmtTaG93OiAxLFxuICAneGxpbms6c2hvdyc6ICd4bGlua1Nob3cnLFxuICB4bGlua1RpdGxlOiAxLFxuICAneGxpbms6dGl0bGUnOiAneGxpbmtUaXRsZScsXG4gIHhsaW5rVHlwZTogMSxcbiAgJ3hsaW5rOnR5cGUnOiAneGxpbmtUeXBlJyxcbiAgeG1sQmFzZTogMSxcbiAgJ3htbDpiYXNlJzogJ3htbEJhc2UnLFxuICB4bWxMYW5nOiAxLFxuICAneG1sOmxhbmcnOiAneG1sTGFuZycsXG4gIHhtbG5zOiAwLFxuICAneG1sOnNwYWNlJzogJ3htbFNwYWNlJyxcbiAgeG1sbnNYbGluazogMSxcbiAgJ3htbG5zOnhsaW5rJzogJ3htbG5zWGxpbmsnLFxuICB4bWxTcGFjZTogMSxcbiAgeTE6IDAsXG4gIHkyOiAwLFxuICB5OiAwLFxuICB5Q2hhbm5lbFNlbGVjdG9yOiAxLFxuICB6OiAwLFxuICB6b29tQW5kUGFuOiAxXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHN0eWxlX3RvX29iamVjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJzdHlsZS10by1vYmplY3RcIikpO1xudmFyIHV0aWxpdGllc18xID0gcmVxdWlyZShcIi4vdXRpbGl0aWVzXCIpO1xuZnVuY3Rpb24gU3R5bGVUb0pTKHN0eWxlLCBvcHRpb25zKSB7XG4gICAgdmFyIG91dHB1dCA9IHt9O1xuICAgIGlmICghc3R5bGUgfHwgdHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBzdHlsZV90b19vYmplY3RfMVtcImRlZmF1bHRcIl0oc3R5bGUsIGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ICYmIHZhbHVlKSB7XG4gICAgICAgICAgICBvdXRwdXRbdXRpbGl0aWVzXzEuY2FtZWxDYXNlKHByb3BlcnR5LCBvcHRpb25zKV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFN0eWxlVG9KUztcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2FtZWxDYXNlID0gdm9pZCAwO1xudmFyIENVU1RPTV9QUk9QRVJUWV9SRUdFWCA9IC9eLS1bYS16QS1aMC05LV0rJC87XG52YXIgSFlQSEVOX1JFR0VYID0gLy0oW2Etel0pL2c7XG52YXIgTk9fSFlQSEVOX1JFR0VYID0gL15bXi1dKyQvO1xudmFyIFZFTkRPUl9QUkVGSVhfUkVHRVggPSAvXi0od2Via2l0fG1venxtc3xvfGtodG1sKS0vO1xudmFyIHNraXBDYW1lbENhc2UgPSBmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gIXByb3BlcnR5IHx8XG4gICAgICAgIE5PX0hZUEhFTl9SRUdFWC50ZXN0KHByb3BlcnR5KSB8fFxuICAgICAgICBDVVNUT01fUFJPUEVSVFlfUkVHRVgudGVzdChwcm9wZXJ0eSk7XG59O1xudmFyIGNhcGl0YWxpemUgPSBmdW5jdGlvbiAobWF0Y2gsIGNoYXJhY3Rlcikge1xuICAgIHJldHVybiBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKTtcbn07XG52YXIgdHJpbUh5cGhlbiA9IGZ1bmN0aW9uIChtYXRjaCwgcHJlZml4KSB7IHJldHVybiBwcmVmaXggKyBcIi1cIjsgfTtcbnZhciBjYW1lbENhc2UgPSBmdW5jdGlvbiAocHJvcGVydHksIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIGlmIChza2lwQ2FtZWxDYXNlKHByb3BlcnR5KSkge1xuICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfVxuICAgIHByb3BlcnR5ID0gcHJvcGVydHkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoIW9wdGlvbnMucmVhY3RDb21wYXQpIHtcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5yZXBsYWNlKFZFTkRPUl9QUkVGSVhfUkVHRVgsIHRyaW1IeXBoZW4pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHkucmVwbGFjZShIWVBIRU5fUkVHRVgsIGNhcGl0YWxpemUpO1xufTtcbmV4cG9ydHMuY2FtZWxDYXNlID0gY2FtZWxDYXNlO1xuIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnaW5saW5lLXN0eWxlLXBhcnNlcicpO1xuXG4vKipcbiAqIFBhcnNlcyBpbmxpbmUgc3R5bGUgdG8gb2JqZWN0LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHsgJ2xpbmUtaGVpZ2h0JzogJzQyJyB9XG4gKiBTdHlsZVRvT2JqZWN0KCdsaW5lLWhlaWdodDogNDI7Jyk7XG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgIHN0eWxlICAgICAgLSBUaGUgaW5saW5lIHN0eWxlLlxuICogQHBhcmFtICB7RnVuY3Rpb259ICAgIFtpdGVyYXRvcl0gLSBUaGUgaXRlcmF0b3IgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudWxsfE9iamVjdH1cbiAqL1xuZnVuY3Rpb24gU3R5bGVUb09iamVjdChzdHlsZSwgaXRlcmF0b3IpIHtcbiAgdmFyIG91dHB1dCA9IG51bGw7XG4gIGlmICghc3R5bGUgfHwgdHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICB2YXIgZGVjbGFyYXRpb247XG4gIHZhciBkZWNsYXJhdGlvbnMgPSBwYXJzZShzdHlsZSk7XG4gIHZhciBoYXNJdGVyYXRvciA9IHR5cGVvZiBpdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJztcbiAgdmFyIHByb3BlcnR5O1xuICB2YXIgdmFsdWU7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRlY2xhcmF0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25zW2ldO1xuICAgIHByb3BlcnR5ID0gZGVjbGFyYXRpb24ucHJvcGVydHk7XG4gICAgdmFsdWUgPSBkZWNsYXJhdGlvbi52YWx1ZTtcblxuICAgIGlmIChoYXNJdGVyYXRvcikge1xuICAgICAgaXRlcmF0b3IocHJvcGVydHksIHZhbHVlLCBkZWNsYXJhdGlvbik7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgb3V0cHV0IHx8IChvdXRwdXQgPSB7fSk7XG4gICAgICBvdXRwdXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdHlsZVRvT2JqZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==