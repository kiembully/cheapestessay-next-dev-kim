(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

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

/***/ "./components/home/faq/faq.scss":
/*!**************************************!*\
  !*** ./components/home/faq/faq.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".faq .accordion .accordion__item {\n  border: none;\n  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.06);\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.06);\n  margin-bottom: 20px;\n  border-radius: 10px;\n  background-color: #fff;\n}\n.faq .accordion .accordion__item:last-child {\n  margin-bottom: 0;\n}\n.faq .accordion .accordion__item p {\n  color: #666666;\n  margin-bottom: 0;\n  font-size: 16px;\n  line-height: 28px;\n}\n.faq .accordion .accordion__item .accordion-button {\n  background: #fff;\n  padding: 10px 30px 10px 10px;\n  border-radius: 10px;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.faq .accordion .accordion__item .accordion-button .faqTitle {\n  font-size: 18px;\n  color: #151515;\n  font-weight: 500;\n  line-height: 24px;\n  margin-bottom: 0;\n}\n.faq .accordion .accordion__item .accordion-button[aria-expanded=true]::after {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.faq .accordion .accordion__item .accordion-button::after {\n  content: \"\";\n  background-image: url(\"/uk/dropdown-toggle.svg\");\n  width: 18px;\n  height: 10px;\n  background-size: 16px;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n}\n.faq .accordion .accordion__item .accordion-button img {\n  margin-right: 30px;\n  width: 60px;\n  height: 60px;\n}\n.faq .accordion .accordion__item .accordion-body {\n  padding: 30px;\n}\n.faq .accordion .accordion__item .accordion-body ul {\n  margin-top: 10px;\n  padding-left: 20px;\n}\n.faq .accordion .accordion__item .accordion-body ul li {\n  color: #666666;\n  font-size: 16px;\n  line-height: 28px;\n  list-style: disc;\n}\n.faq .accordion .accordion__item .accordion-body .desc {\n  margin-bottom: 0;\n  width: 100%;\n  font-size: 16px;\n  line-height: 28px;\n}\n.faq .accordion .accordion__item .accordion-body .desc ul,\n.faq .accordion .accordion__item .accordion-body .desc ol {\n  padding-left: 18px;\n}\n.faq .accordion .accordion__item .accordion-body .desc ul li,\n.faq .accordion .accordion__item .accordion-body .desc ol li {\n  list-style: decimal;\n  padding-left: 5px;\n}\n\n@media screen and (max-width: 991px) {\n  .faq .accordion .accordion__item {\n    margin-bottom: 10px;\n  }\n  .faq .accordion .accordion__item .accordion-button {\n    font-size: 16px;\n    padding-right: 20px;\n  }\n  .faq .accordion .accordion__item .accordion-button:after {\n    width: 12px;\n    height: 12px;\n    background-size: contain;\n  }\n  .faq .accordion .accordion__item .accordion-button img {\n    margin-right: 10px;\n    width: 30px;\n    height: 30px;\n  }\n  .faq .accordion .accordion__item .accordion-button .faqTitle {\n    font-size: 15px;\n    padding-right: 10px;\n  }\n  .faq .accordion .accordion__item .accordion-body {\n    padding: 10px;\n  }\n  .faq .accordion .accordion__item .accordion-body .desc {\n    font-size: 14px;\n    line-height: 24px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .faq .accordion .accordion__item p {\n    font-size: 14px;\n    line-height: 24px;\n  }\n}");

/***/ }),

/***/ "./components/home/faq/index.js":
/*!**************************************!*\
  !*** ./components/home/faq/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-accessible-accordion */ "./node_modules/react-accessible-accordion/dist/es/index.js");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var _faq_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq.scss */ "./components/home/faq/faq.scss");
/* harmony import */ var _Common_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Common/image */ "./components/Common/image.js");



var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Essay-Countries-nextJS\\components\\home\\faq\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



 // Html Parser

 // scss




var Faq = function Faq(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      faqData = _useState[0],
      setFaqData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      faqTitle = _useState2[0],
      setFaqTitle = _useState2[1];

  var getRandomString = function getRandomString(length) {
    var randomChars = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';

    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }

    return result;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (props.faqData) {
      var myArray = [];
      var i = 1;
      props.faqData.faq.forEach(function (element) {
        var uniqueStr = "";

        if (i === 1) {
          uniqueStr = "a";
        } else {
          uniqueStr = getRandomString(2).toLowerCase();
        }

        myArray.push({
          uuid: uniqueStr,
          question: element.question,
          answer: element.answer
        });
        i++;
      });
      setFaqData(myArray);

      if (props.faqData.page_contents.name) {
        var convTitle = Object(html_react_parser__WEBPACK_IMPORTED_MODULE_4__["default"])(props.faqData.page_contents.name);

        if (convTitle && convTitle.props && convTitle.props.children) {
          setFaqTitle(convTitle.props.children);
        } else {
          setFaqTitle(props.faqData.page_contents.name);
        }
      }
    }
  }, [props.faqData]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
      dangerouslySetInnerHTML: {
        __html: _faq_scss__WEBPACK_IMPORTED_MODULE_5__["default"]
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "faq pt-0",
      id: "faq",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center mb-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "section-title text-capitalize",
            children: [faqTitle && faqTitle, " F.A.Q."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "faqAccordion",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
            allowZeroExpanded: true,
            preExpanded: ['a'],
            children: faqData && faqData.length > 0 ? faqData.map(function (item, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItem"], {
                uuid: item.uuid,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemHeading"], {
                  className: "accordion-header",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemButton"], {
                    className: "accordion-button",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      src: "/faq.svg",
                      alt: "faq"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      className: "faqTitle",
                      children: item.question
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemPanel"], {
                  className: "accordion-body",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "desc",
                    children: item.answer && Object(html_react_parser__WEBPACK_IMPORTED_MODULE_4__["default"])(item.answer)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this);
            }) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Faq, "byJjpKfHFTFgq2hxt/sR46XTAgw=");

_c = Faq;
/* harmony default export */ __webpack_exports__["default"] = (Faq);

var _c;

$RefreshReg$(_c, "Faq");

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

/***/ "./node_modules/react-accessible-accordion/dist/es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/es/index.js ***!
  \******************************************************************/
/*! exports provided: Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState, resetNextUuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemButton", function() { return AccordionItemButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemHeading", function() { return AccordionItemHeadingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemPanel", function() { return AccordionItemPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemState", function() { return AccordionItemState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetNextUuid", function() { return resetNextUuid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var AccordionStore = function AccordionStore(_ref) {
  var _this = this;

  var _ref$expanded = _ref.expanded,
      _expanded = _ref$expanded === void 0 ? [] : _ref$expanded,
      _ref$allowMultipleExp = _ref.allowMultipleExpanded,
      allowMultipleExpanded = _ref$allowMultipleExp === void 0 ? false : _ref$allowMultipleExp,
      _ref$allowZeroExpande = _ref.allowZeroExpanded,
      allowZeroExpanded = _ref$allowZeroExpande === void 0 ? false : _ref$allowZeroExpande;

  _classCallCheck(this, AccordionStore);

  _defineProperty(this, "expanded", void 0);

  _defineProperty(this, "allowMultipleExpanded", void 0);

  _defineProperty(this, "allowZeroExpanded", void 0);

  _defineProperty(this, "toggleExpanded", function (uuid) {
    if (_this.isItemDisabled(uuid)) {
      return _this;
    }

    var isExpanded = _this.isItemExpanded(uuid);

    if (!isExpanded) {
      return _this.augment({
        expanded: _this.allowMultipleExpanded ? [].concat(_toConsumableArray(_this.expanded), [uuid]) : [uuid]
      });
    } else {
      return _this.augment({
        expanded: _this.expanded.filter(function (expandedUuid) {
          return expandedUuid !== uuid;
        })
      });
    }
  });

  _defineProperty(this, "isItemDisabled", function (uuid) {
    var isExpanded = _this.isItemExpanded(uuid);

    var isOnlyOneExpanded = _this.expanded.length === 1;
    return Boolean(isExpanded && !_this.allowZeroExpanded && isOnlyOneExpanded);
  });

  _defineProperty(this, "isItemExpanded", function (uuid) {
    return _this.expanded.indexOf(uuid) !== -1;
  });

  _defineProperty(this, "getPanelAttributes", function (uuid, dangerouslySetExpanded) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : _this.isItemExpanded(uuid);
    return {
      role: _this.allowMultipleExpanded ? undefined : 'region',
      'aria-hidden': _this.allowMultipleExpanded ? !expanded : undefined,
      'aria-labelledby': _this.getButtonId(uuid),
      id: _this.getPanelId(uuid),
      hidden: expanded ? undefined : true
    };
  });

  _defineProperty(this, "getHeadingAttributes", function () {
    return {
      role: 'heading'
    };
  });

  _defineProperty(this, "getButtonAttributes", function (uuid, dangerouslySetExpanded) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : _this.isItemExpanded(uuid);

    var disabled = _this.isItemDisabled(uuid);

    return {
      id: _this.getButtonId(uuid),
      'aria-disabled': disabled,
      'aria-expanded': expanded,
      'aria-controls': _this.getPanelId(uuid),
      role: 'button',
      tabIndex: 0
    };
  });

  _defineProperty(this, "getPanelId", function (uuid) {
    return "accordion__panel-".concat(uuid);
  });

  _defineProperty(this, "getButtonId", function (uuid) {
    return "accordion__heading-".concat(uuid);
  });

  _defineProperty(this, "augment", function (args) {
    return new AccordionStore(_objectSpread2({
      expanded: _this.expanded,
      allowMultipleExpanded: _this.allowMultipleExpanded,
      allowZeroExpanded: _this.allowZeroExpanded
    }, args));
  });

  this.expanded = _expanded;
  this.allowMultipleExpanded = allowMultipleExpanded;
  this.allowZeroExpanded = allowZeroExpanded;
};

var Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
var Provider = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Provider, _React$PureComponent);

  var _super = _createSuper(Provider);

  function Provider() {
    var _this;

    _classCallCheck(this, Provider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", new AccordionStore({
      expanded: _this.props.preExpanded,
      allowMultipleExpanded: _this.props.allowMultipleExpanded,
      allowZeroExpanded: _this.props.allowZeroExpanded
    }));

    _defineProperty(_assertThisInitialized(_this), "toggleExpanded", function (key) {
      _this.setState(function (state) {
        return state.toggleExpanded(key);
      }, function () {
        if (_this.props.onChange) {
          _this.props.onChange(_this.state.expanded);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isItemDisabled", function (key) {
      return _this.state.isItemDisabled(key);
    });

    _defineProperty(_assertThisInitialized(_this), "isItemExpanded", function (key) {
      return _this.state.isItemExpanded(key);
    });

    _defineProperty(_assertThisInitialized(_this), "getPanelAttributes", function (key, dangerouslySetExpanded) {
      return _this.state.getPanelAttributes(key, dangerouslySetExpanded);
    });

    _defineProperty(_assertThisInitialized(_this), "getHeadingAttributes", function () {
      // uuid: UUID
      return _this.state.getHeadingAttributes();
    });

    _defineProperty(_assertThisInitialized(_this), "getButtonAttributes", function (key, dangerouslySetExpanded) {
      return _this.state.getButtonAttributes(key, dangerouslySetExpanded);
    });

    return _this;
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          allowZeroExpanded = _this$state.allowZeroExpanded,
          allowMultipleExpanded = _this$state.allowMultipleExpanded;
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context.Provider, {
        value: {
          allowMultipleExpanded: allowMultipleExpanded,
          allowZeroExpanded: allowZeroExpanded,
          toggleExpanded: this.toggleExpanded,
          isItemDisabled: this.isItemDisabled,
          isItemExpanded: this.isItemExpanded,
          getPanelAttributes: this.getPanelAttributes,
          getHeadingAttributes: this.getHeadingAttributes,
          getButtonAttributes: this.getButtonAttributes
        }
      }, this.props.children || null);
    }
  }]);

  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(Provider, "defaultProps", {
  allowMultipleExpanded: false,
  allowZeroExpanded: false
});

var Consumer = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(Consumer, _React$PureComponent2);

  var _super2 = _createSuper(Consumer);

  function Consumer() {
    var _this2;

    _classCallCheck(this, Consumer);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "renderChildren", function (container) {
      return container ? _this2.props.children(container) : null;
    });

    return _this2;
  }

  _createClass(Consumer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context.Consumer, null, this.renderChildren);
    }
  }]);

  return Consumer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var Accordion = function Accordion(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion' : _ref$className,
      allowMultipleExpanded = _ref.allowMultipleExpanded,
      allowZeroExpanded = _ref.allowZeroExpanded,
      onChange = _ref.onChange,
      preExpanded = _ref.preExpanded,
      rest = _objectWithoutProperties(_ref, ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"]);

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Provider, {
    preExpanded: preExpanded,
    allowMultipleExpanded: allowMultipleExpanded,
    allowZeroExpanded: allowZeroExpanded,
    onChange: onChange
  }, /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
    "data-accordion-component": "Accordion",
    className: className
  }, rest)));
};

var DisplayName;

(function (DisplayName) {
  DisplayName["Accordion"] = "Accordion";
  DisplayName["AccordionItem"] = "AccordionItem";
  DisplayName["AccordionItemButton"] = "AccordionItemButton";
  DisplayName["AccordionItemHeading"] = "AccordionItemHeading";
  DisplayName["AccordionItemPanel"] = "AccordionItemPanel";
})(DisplayName || (DisplayName = {}));

var DisplayName$1 = DisplayName;

var DEFAULT = 0;
var counter = DEFAULT;
function nextUuid() {
  var current = counter;
  counter = counter + 1;
  return "raa-".concat(current);
}
function resetNextUuid() {
  counter = DEFAULT;
} // HTML5 ids allow all unicode characters, except for ASCII whitespaces
// https://infra.spec.whatwg.org/#ascii-whitespace
// eslint-disable-next-line no-control-regex

var idRegex = /[\u0009\u000a\u000c\u000d\u0020]/g;
function assertValidHtmlId(htmlId) {
  if (htmlId === '' || idRegex.test(htmlId)) {
    console.error("uuid must be a valid HTML5 id but was given \"".concat(htmlId, "\", ASCII whitespaces are forbidden"));
    return false;
  }

  return true;
}

var Context$1 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);

var Provider$1 = function Provider(_ref) {
  var children = _ref.children,
      uuid = _ref.uuid,
      accordionContext = _ref.accordionContext,
      dangerouslySetExpanded = _ref.dangerouslySetExpanded;

  var toggleExpanded = function toggleExpanded() {
    accordionContext.toggleExpanded(uuid);
  };

  var renderChildren = function renderChildren(accordionContext) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : accordionContext.isItemExpanded(uuid);
    var disabled = accordionContext.isItemDisabled(uuid);
    var panelAttributes = accordionContext.getPanelAttributes(uuid, dangerouslySetExpanded);
    var headingAttributes = accordionContext.getHeadingAttributes(uuid);
    var buttonAttributes = accordionContext.getButtonAttributes(uuid, dangerouslySetExpanded);
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context$1.Provider, {
      value: {
        uuid: uuid,
        expanded: expanded,
        disabled: disabled,
        toggleExpanded: toggleExpanded,
        panelAttributes: panelAttributes,
        headingAttributes: headingAttributes,
        buttonAttributes: buttonAttributes
      }
    }, children);
  };

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer, null, renderChildren);
};

var ProviderWrapper = function ProviderWrapper(props) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer, null, function (accordionContext) {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Provider$1, _extends({}, props, {
      accordionContext: accordionContext
    }));
  });
};
var Consumer$1 = function Consumer(_ref2) {
  var children = _ref2.children;

  var renderChildren = function renderChildren(container) {
    return container ? children(container) : null;
  };

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context$1.Consumer, null, renderChildren);
};

var AccordionItem = function AccordionItem(_ref) {
  var customUuid = _ref.uuid,
      dangerouslySetExpanded = _ref.dangerouslySetExpanded,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion__item' : _ref$className,
      activeClassName = _ref.activeClassName,
      rest = _objectWithoutProperties(_ref, ["uuid", "dangerouslySetExpanded", "className", "activeClassName"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(nextUuid()),
      _useState2 = _slicedToArray(_useState, 1),
      instanceUuid = _useState2[0];

  var uuid = customUuid !== null && customUuid !== void 0 ? customUuid : instanceUuid;

  var renderChildren = function renderChildren(itemContext) {
    var expanded = itemContext.expanded;
    var cx = expanded && activeClassName ? activeClassName : className;
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
      "data-accordion-component": "AccordionItem",
      className: cx
    }, rest));
  };

  assertValidHtmlId(uuid.toString());

  if (rest.id) {
    assertValidHtmlId(rest.id);
  }

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ProviderWrapper, {
    uuid: uuid,
    dangerouslySetExpanded: dangerouslySetExpanded
  }, /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, renderChildren));
};

AccordionItem.displayName = DisplayName$1.AccordionItem;

function getClosestAccordion(el) {
  return el && (el.matches('[data-accordion-component="Accordion"]') ? el : getClosestAccordion(el.parentElement));
}
function getSiblingButtons(item) {
  var parentAccordion = getClosestAccordion(item);
  return parentAccordion && Array.from(parentAccordion.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function focusFirstSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var first = siblings[0];

  if (first) {
    first.focus();
  }
}
function focusLastSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var last = siblings[siblings.length - 1];

  if (last) {
    last.focus();
  }
}
function focusNextSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var currentIndex = siblings.indexOf(item);

  if (currentIndex !== -1) {
    var next = siblings[currentIndex + 1];

    if (next) {
      next.focus();
    }
  }
}
function focusPreviousSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var currentIndex = siblings.indexOf(item);

  if (currentIndex !== -1) {
    var previous = siblings[currentIndex - 1];

    if (previous) {
      previous.focus();
    }
  }
}

var keycodes = {
  END: 'End',
  ENTER: 'Enter',
  HOME: 'Home',
  SPACE: ' ',
  SPACE_DEPRECATED: 'Spacebar',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight'
};

var AccordionItemButton = function AccordionItemButton(_ref) {
  var toggleExpanded = _ref.toggleExpanded,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion__button' : _ref$className,
      rest = _objectWithoutProperties(_ref, ["toggleExpanded", "className"]);

  var handleKeyPress = function handleKeyPress(evt) {
    var keyCode = evt.key;

    if (keyCode === keycodes.ENTER || keyCode === keycodes.SPACE || keyCode === keycodes.SPACE_DEPRECATED) {
      evt.preventDefault();
      toggleExpanded();
    }
    /* The following block is ignored from test coverage because at time
     * time of writing Jest/react-testing-library can not assert 'focus'
     * functionality.
     */
    // istanbul ignore next


    if (evt.target instanceof HTMLElement) {
      switch (keyCode) {
        case keycodes.HOME:
          {
            evt.preventDefault();
            focusFirstSiblingOf(evt.target);
            break;
          }

        case keycodes.END:
          {
            evt.preventDefault();
            focusLastSiblingOf(evt.target);
            break;
          }

        case keycodes.LEFT:
        case keycodes.UP:
          {
            evt.preventDefault();
            focusPreviousSiblingOf(evt.target);
            break;
          }

        case keycodes.RIGHT:
        case keycodes.DOWN:
          {
            evt.preventDefault();
            focusNextSiblingOf(evt.target);
            break;
          }
      }
    }
  };

  if (rest.id) {
    assertValidHtmlId(rest.id);
  }

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
    className: className
  }, rest, {
    role: "button",
    tabIndex: 0,
    onClick: toggleExpanded,
    onKeyDown: handleKeyPress,
    "data-accordion-component": "AccordionItemButton"
  }));
};

var AccordionItemButtonWrapper = function AccordionItemButtonWrapper(props) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, function (itemContext) {
    var toggleExpanded = itemContext.toggleExpanded,
        buttonAttributes = itemContext.buttonAttributes;
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AccordionItemButton, _extends({
      toggleExpanded: toggleExpanded
    }, props, buttonAttributes));
  });
};

var defaultProps = {
  className: 'accordion__heading',
  'aria-level': 3
};
var SPEC_ERROR = "AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201CThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201D\n\n";
var AccordionItemHeading = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(AccordionItemHeading, _React$PureComponent);

  var _super = _createSuper(AccordionItemHeading);

  function AccordionItemHeading() {
    var _this;

    _classCallCheck(this, AccordionItemHeading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "ref", void 0);

    _defineProperty(_assertThisInitialized(_this), "setRef", function (ref) {
      _this.ref = ref;
    });

    return _this;
  }

  _createClass(AccordionItemHeading, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      AccordionItemHeading.VALIDATE(this.ref);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      AccordionItemHeading.VALIDATE(this.ref);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
        "data-accordion-component": "AccordionItemHeading"
      }, this.props, {
        ref: this.setRef
      }));
    }
  }], [{
    key: "VALIDATE",
    value: function VALIDATE(ref) {
      if (ref === undefined) {
        throw new Error('ref is undefined');
      }

      if (!(ref.childElementCount === 1 && ref.firstElementChild && ref.firstElementChild.getAttribute('data-accordion-component') === 'AccordionItemButton')) {
        throw new Error(SPEC_ERROR);
      }
    }
  }]);

  return AccordionItemHeading;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(AccordionItemHeading, "defaultProps", defaultProps);

var AccordionItemHeadingWrapper = function AccordionItemHeadingWrapper(props) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, function (itemContext) {
    var headingAttributes = itemContext.headingAttributes;

    if (props.id) {
      assertValidHtmlId(props.id);
    }

    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AccordionItemHeading, _extends({}, props, headingAttributes));
  });
};

AccordionItemHeadingWrapper.displayName = DisplayName$1.AccordionItemHeading;

var AccordionItemPanel = function AccordionItemPanel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion__panel' : _ref$className,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ["className", "id"]);

  var renderChildren = function renderChildren(_ref2) {
    var panelAttributes = _ref2.panelAttributes;

    if (id) {
      assertValidHtmlId(id);
    }

    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
      "data-accordion-component": "AccordionItemPanel",
      className: className
    }, rest, panelAttributes));
  };

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, renderChildren);
};

var AccordionItemState = function AccordionItemState(_ref) {
  var children = _ref.children;

  var renderChildren = function renderChildren(itemContext) {
    var expanded = itemContext.expanded,
        disabled = itemContext.disabled;
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, children({
      expanded: expanded,
      disabled: disabled
    }));
  };

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, renderChildren);
};




/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n* ----------------------------------------------\n* Demo styles\n* ----------------------------------------------\n**/\n.accordion {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 2px;\n}\n\n.accordion__item + .accordion__item {\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.accordion__button {\n    background-color: #f4f4f4;\n    color: #444;\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    text-align: left;\n    border: none;\n}\n\n.accordion__button:hover {\n    background-color: #ddd;\n}\n\n.accordion__button:before {\n    display: inline-block;\n    content: '';\n    height: 10px;\n    width: 10px;\n    margin-right: 12px;\n    border-bottom: 2px solid currentColor;\n    border-right: 2px solid currentColor;\n    transform: rotate(-45deg);\n}\n\n.accordion__button[aria-expanded='true']::before,\n.accordion__button[aria-selected='true']::before {\n    transform: rotate(45deg);\n}\n\n[hidden] {\n    display: none;\n}\n\n.accordion__panel {\n    padding: 20px;\n    animation: fadein 0.35s ease-in;\n}\n\n/* -------------------------------------------------- */\n/* ---------------- Animation part ------------------ */\n/* -------------------------------------------------- */\n\n@keyframes fadein {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9mYXEvZmFxLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9mYXEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RvbWVsZW1lbnR0eXBlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RvbWhhbmRsZXIvbGliL25vZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9odG1sLWRvbS1wYXJzZXIvbGliL2NsaWVudC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9odG1sLWRvbS1wYXJzZXIvbGliL2NsaWVudC9kb21wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9odG1sLWRvbS1wYXJzZXIvbGliL2NsaWVudC9odG1sLXRvLWRvbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2h0bWwtZG9tLXBhcnNlci9saWIvY2xpZW50L3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2h0bWwtcmVhY3QtcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaHRtbC1yZWFjdC1wYXJzZXIvaW5kZXgubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaHRtbC1yZWFjdC1wYXJzZXIvbGliL2F0dHJpYnV0ZXMtdG8tcHJvcHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9odG1sLXJlYWN0LXBhcnNlci9saWIvZG9tLXRvLXJlYWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaHRtbC1yZWFjdC1wYXJzZXIvbGliL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wYXJzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbi9kaXN0L2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYWNjZXNzaWJsZS1hY2NvcmRpb24vZGlzdC9mYW5jeS1leGFtcGxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXByb3BlcnR5L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXByb3BlcnR5L2xpYi9wb3NzaWJsZVN0YW5kYXJkTmFtZXNPcHRpbWl6ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHlsZS10by1qcy9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHlsZS10by1qcy9janMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZUJhc2VQYXRoIiwidXNlUm91dGVyIiwiYmFzZVBhdGgiLCJJbWciLCJwcm9wcyIsImZpbmFsU3JjIiwiY2hhckF0Iiwic3JjIiwiRmFxIiwidXNlU3RhdGUiLCJmYXFEYXRhIiwic2V0RmFxRGF0YSIsImZhcVRpdGxlIiwic2V0RmFxVGl0bGUiLCJnZXRSYW5kb21TdHJpbmciLCJsZW5ndGgiLCJyYW5kb21DaGFycyIsInJlc3VsdCIsImkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ1c2VFZmZlY3QiLCJteUFycmF5IiwiZmFxIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJ1bmlxdWVTdHIiLCJ0b0xvd2VyQ2FzZSIsInB1c2giLCJ1dWlkIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJwYWdlX2NvbnRlbnRzIiwibmFtZSIsImNvbnZUaXRsZSIsInBhcnNlIiwiY2hpbGRyZW4iLCJfX2h0bWwiLCJmYXFDc3MiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsbUJBQ0xDLDZEQUFTLEVBREo7QUFBQSxNQUNsQkMsUUFEa0IsY0FDbEJBLFFBRGtCOztBQUUxQixTQUFPQSxRQUFQO0FBQ0gsQyxDQUVEOztHQUxnQkYsVztVQUNTQyxxRDs7O0FBS3pCLElBQU1FLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNuQixNQUFNRixRQUFRLEdBQUdGLFdBQVcsRUFBNUI7QUFDQSxNQUFNSyxRQUFRLEdBQUcsQ0FBQUgsUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVJLE1BQVYsQ0FBaUIsQ0FBakIsT0FBd0IsR0FBeEIsR0FBOEJKLFFBQVEsR0FBR0UsS0FBSyxDQUFDRyxHQUEvQyxHQUFxREgsS0FBSyxDQUFDRyxHQUE1RTtBQUNBLHNCQUNJLDRHQUNRSCxLQURSO0FBRUksT0FBRyxFQUFFQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBVEQ7O0lBQU1GLEc7VUFDZUgsVzs7O0tBRGZHLEc7QUFXU0Esa0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBZSx1Z0dBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7QUFFQTs7QUFFQSxJQUFNSyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDSixLQUFELEVBQVc7QUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGVBQWU7QUFDakQsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsK0JBQStCO0FBQzVFOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUzs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsMkRBQWE7QUFDeEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHVFQUF1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LEVBQUU7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsZUFBZSxtQkFBTyxDQUFDLGtIQUF1QztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxJQUFJOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1VEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNWVhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLHdDQUF3QyxtQkFBTyxDQUFDLGdFQUFpQjtBQUNqRSxrQkFBa0IsbUJBQU8sQ0FBQyxnRUFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxQkFBcUI7QUFDaEU7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBLFlBQVksbUJBQU8sQ0FBQyx3RUFBcUI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGtDQUFrQztBQUNsQztBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLFNBQVM7QUFDckIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUGF0aCgpIHtcclxuICAgIGNvbnN0IHsgYmFzZVBhdGggfSA9IHVzZVJvdXRlcigpO1xyXG4gICAgcmV0dXJuIGJhc2VQYXRoO1xyXG59XHJcblxyXG4vL3dyYXBwZXIgZm9yIHRoZSByZWFjdCBpbWcgY29tcG9uZW50IHRoYXQgd2lsbCBjaGVjayBmb3IgbG9jYWxseSBzb3VyY2VkIGltYWdlcyBhbmQgcHJlcGVuZCB0aGUgYmFzZVBhdGhcclxuY29uc3QgSW1nID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlUGF0aCA9IHVzZUJhc2VQYXRoKCk7XHJcbiAgICBjb25zdCBmaW5hbFNyYyA9IGJhc2VQYXRoPy5jaGFyQXQoMCkgPT09IFwiL1wiID8gYmFzZVBhdGggKyBwcm9wcy5zcmMgOiBwcm9wcy5zcmM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICBzcmM9e2ZpbmFsU3JjfVxyXG4gICAgICAgIC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltZzsiLCJleHBvcnQgZGVmYXVsdCBcIi5mYXEgLmFjY29yZGlvbiAuYWNjb3JkaW9uX19pdGVtIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5mYXEgLmFjY29yZGlvbiAuYWNjb3JkaW9uX19pdGVtOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmZhcSAuYWNjb3JkaW9uIC5hY2NvcmRpb25fX2l0ZW0gcCB7XFxuICBjb2xvcjogIzY2NjY2NjtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG59XFxuLmZhcSAuYWNjb3JkaW9uIC5hY2NvcmRpb25fX2l0ZW0gLmFjY29yZGlvbi1idXR0b24ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLmZhcSAuYWNjb3JkaW9uIC5hY2NvcmRpb25fX2l0ZW0gLmFjY29yZGlvbi1idXR0b24gLmZhcVRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjMTUxNTE1O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmZhcSAuYWNjb3JkaW9uIC5hY2NvcmRpb25fX2l0ZW0gLmFjY29yZGlvbi1idXR0b25bYXJpYS1leHBhbmRlZD10cnVlXTo6YWZ0ZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLmZhcSAuYWNjb3JkaW9uIC5hY2NvcmRpb25fX2l0ZW0gLmFjY29yZGlvbi1idXR0b246OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvdWsvZHJvcGRvd24tdG9nZ2xlLnN2Z1xcXCIpO1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDE2cHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcbi5mYXEgLmFjY29yZGlvbiAuYWNjb3JkaW9uX19pdGVtIC5hY2NvcmRpb24tYnV0dG9uIGltZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuLmZhcSAuYWNjb3JkaW9uIC5hY2NvcmRpb25fX2l0ZW0gLmFjY29yZGlvbi1ib2R5IHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcbi5mYXEgLmFjY29yZGlvbiAuYWNjb3JkaW9uX19pdGVtIC5hY2NvcmRpb24tYm9keSB1bCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4uZmFxIC5hY2NvcmRpb24gLmFjY29yZGlvbl9faXRlbSAuYWNjb3JkaW9uLWJvZHkgdWwgbGkge1xcbiAgY29sb3I6ICM2NjY2NjY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG4gIGxpc3Qtc3R5bGU6IGRpc2M7XFxufVxcbi5mYXEgLmFjY29yZGlvbiAuYWNjb3JkaW9uX19pdGVtIC5hY2NvcmRpb24tYm9keSAuZGVzYyB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG59XFxuLmZhcSAuYWNjb3JkaW9uIC5hY2NvcmRpb25fX2l0ZW0gLmFjY29yZGlvbi1ib2R5IC5kZXNjIHVsLFxcbi5mYXEgLmFjY29yZGlvbiAuYWNjb3JkaW9uX19pdGVtIC5hY2NvcmRpb24tYm9keSAuZGVzYyBvbCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XFxufVxcbi5mYXEgLmFjY29yZGlvbiAuYWNjb3JkaW9uX19pdGVtIC5hY2NvcmRpb24tYm9keSAuZGVzYyB1bCBsaSxcXG4uZmFxIC5hY2NvcmRpb24gLmFjY29yZGlvbl9faXRlbSAuYWNjb3JkaW9uLWJvZHkgLmRlc2Mgb2wgbGkge1xcbiAgbGlzdC1zdHlsZTogZGVjaW1hbDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLmZhcSAuYWNjb3JkaW9uIC5hY2NvcmRpb25fX2l0ZW0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgLmZhcSAuYWNjb3JkaW9uIC5hY2NvcmRpb25fX2l0ZW0gLmFjY29yZGlvbi1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICB9XFxuICAuZmFxIC5hY2NvcmRpb24gLmFjY29yZGlvbl9faXRlbSAuYWNjb3JkaW9uLWJ1dHRvbjphZnRlciB7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIH1cXG4gIC5mYXEgLmFjY29yZGlvbiAuYWNjb3JkaW9uX19pdGVtIC5hY2NvcmRpb24tYnV0dG9uIGltZyB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG4gIC5mYXEgLmFjY29yZGlvbiAuYWNjb3JkaW9uX19pdGVtIC5hY2NvcmRpb24tYnV0dG9uIC5mYXFUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIH1cXG4gIC5mYXEgLmFjY29yZGlvbiAuYWNjb3JkaW9uX19pdGVtIC5hY2NvcmRpb24tYm9keSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAuZmFxIC5hY2NvcmRpb24gLmFjY29yZGlvbl9faXRlbSAuYWNjb3JkaW9uLWJvZHkgLmRlc2Mge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xcbiAgLmZhcSAuYWNjb3JkaW9uIC5hY2NvcmRpb25fX2l0ZW0gcCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB9XFxufVwiOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFjY29yZGlvbiwgQWNjb3JkaW9uSXRlbSwgQWNjb3JkaW9uSXRlbUhlYWRpbmcsIEFjY29yZGlvbkl0ZW1CdXR0b24sIEFjY29yZGlvbkl0ZW1QYW5lbCB9IGZyb20gXCJyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvblwiO1xyXG5pbXBvcnQgXCJyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbi9kaXN0L2ZhbmN5LWV4YW1wbGUuY3NzXCI7XHJcblxyXG4vLyBIdG1sIFBhcnNlclxyXG5pbXBvcnQgcGFyc2UgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInO1xyXG5cclxuLy8gc2Nzc1xyXG5pbXBvcnQgZmFxQ3NzIGZyb20gXCIuL2ZhcS5zY3NzXCI7XHJcblxyXG5pbXBvcnQgSW1nIGZyb20gXCIuLi8uLi9Db21tb24vaW1hZ2VcIjtcclxuXHJcbmNvbnN0IEZhcSA9IChwcm9wcykgPT4ge1xyXG5cclxuICB2YXIgW2ZhcURhdGEsIHNldEZhcURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmYXFUaXRsZSwgc2V0RmFxVGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBnZXRSYW5kb21TdHJpbmcgPSAobGVuZ3RoKSA9PiB7XHJcbiAgICB2YXIgcmFuZG9tQ2hhcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xyXG4gICAgdmFyIHJlc3VsdCA9ICcnO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICByZXN1bHQgKz0gcmFuZG9tQ2hhcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmRvbUNoYXJzLmxlbmd0aCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMuZmFxRGF0YSkge1xyXG4gICAgICBsZXQgbXlBcnJheSA9IFtdO1xyXG4gICAgICBsZXQgaSA9IDE7XHJcbiAgICAgIChwcm9wcy5mYXFEYXRhLmZhcSkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBsZXQgdW5pcXVlU3RyID0gXCJcIjtcclxuICAgICAgICBpZiAoaSA9PT0gMSkge1xyXG4gICAgICAgICAgdW5pcXVlU3RyID0gXCJhXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdW5pcXVlU3RyID0gZ2V0UmFuZG9tU3RyaW5nKDIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG15QXJyYXkucHVzaCh7IHV1aWQ6IHVuaXF1ZVN0ciwgcXVlc3Rpb246IGVsZW1lbnQucXVlc3Rpb24sIGFuc3dlcjogZWxlbWVudC5hbnN3ZXIgfSk7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0RmFxRGF0YShteUFycmF5KTtcclxuXHJcbiAgICAgIGlmIChwcm9wcy5mYXFEYXRhLnBhZ2VfY29udGVudHMubmFtZSkge1xyXG4gICAgICAgIHZhciBjb252VGl0bGUgPSBwYXJzZShwcm9wcy5mYXFEYXRhLnBhZ2VfY29udGVudHMubmFtZSlcclxuICAgICAgICBpZiAoY29udlRpdGxlICYmIGNvbnZUaXRsZS5wcm9wcyAmJiBjb252VGl0bGUucHJvcHMuY2hpbGRyZW4pIHtcclxuICAgICAgICAgIHNldEZhcVRpdGxlKGNvbnZUaXRsZS5wcm9wcy5jaGlsZHJlbilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBzZXRGYXFUaXRsZShwcm9wcy5mYXFEYXRhLnBhZ2VfY29udGVudHMubmFtZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcHJvcHMuZmFxRGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZmFxQ3NzIH19Pjwvc3R5bGU+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZhcSBwdC0wXCIgaWQ9XCJmYXFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi01XCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlIHRleHQtY2FwaXRhbGl6ZVwiPntmYXFUaXRsZSAmJiBmYXFUaXRsZX0gRi5BLlEuPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXFBY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgPEFjY29yZGlvbiBhbGxvd1plcm9FeHBhbmRlZCBwcmVFeHBhbmRlZD17WydhJ119PlxyXG4gICAgICAgICAgICAgIHtmYXFEYXRhICYmIGZhcURhdGEubGVuZ3RoID4gMCA/IGZhcURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0ga2V5PXtpbmRleH0gdXVpZD17aXRlbS51dWlkfT5cclxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1IZWFkaW5nIGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUJ1dHRvbiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz1cIi9mYXEuc3ZnXCIgYWx0PVwiZmFxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmYXFUaXRsZVwiPntpdGVtLnF1ZXN0aW9ufTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsIGNsYXNzTmFtZT1cImFjY29yZGlvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+e2l0ZW0uYW5zd2VyICYmIHBhcnNlKGl0ZW0uYW5zd2VyKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFxO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRG9jdHlwZSA9IGV4cG9ydHMuQ0RBVEEgPSBleHBvcnRzLlRhZyA9IGV4cG9ydHMuU3R5bGUgPSBleHBvcnRzLlNjcmlwdCA9IGV4cG9ydHMuQ29tbWVudCA9IGV4cG9ydHMuRGlyZWN0aXZlID0gZXhwb3J0cy5UZXh0ID0gZXhwb3J0cy5Sb290ID0gZXhwb3J0cy5pc1RhZyA9IGV4cG9ydHMuRWxlbWVudFR5cGUgPSB2b2lkIDA7XG4vKiogVHlwZXMgb2YgZWxlbWVudHMgZm91bmQgaW4gaHRtbHBhcnNlcjIncyBET00gKi9cbnZhciBFbGVtZW50VHlwZTtcbihmdW5jdGlvbiAoRWxlbWVudFR5cGUpIHtcbiAgICAvKiogVHlwZSBmb3IgdGhlIHJvb3QgZWxlbWVudCBvZiBhIGRvY3VtZW50ICovXG4gICAgRWxlbWVudFR5cGVbXCJSb290XCJdID0gXCJyb290XCI7XG4gICAgLyoqIFR5cGUgZm9yIFRleHQgKi9cbiAgICBFbGVtZW50VHlwZVtcIlRleHRcIl0gPSBcInRleHRcIjtcbiAgICAvKiogVHlwZSBmb3IgPD8gLi4uID8+ICovXG4gICAgRWxlbWVudFR5cGVbXCJEaXJlY3RpdmVcIl0gPSBcImRpcmVjdGl2ZVwiO1xuICAgIC8qKiBUeXBlIGZvciA8IS0tIC4uLiAtLT4gKi9cbiAgICBFbGVtZW50VHlwZVtcIkNvbW1lbnRcIl0gPSBcImNvbW1lbnRcIjtcbiAgICAvKiogVHlwZSBmb3IgPHNjcmlwdD4gdGFncyAqL1xuICAgIEVsZW1lbnRUeXBlW1wiU2NyaXB0XCJdID0gXCJzY3JpcHRcIjtcbiAgICAvKiogVHlwZSBmb3IgPHN0eWxlPiB0YWdzICovXG4gICAgRWxlbWVudFR5cGVbXCJTdHlsZVwiXSA9IFwic3R5bGVcIjtcbiAgICAvKiogVHlwZSBmb3IgQW55IHRhZyAqL1xuICAgIEVsZW1lbnRUeXBlW1wiVGFnXCJdID0gXCJ0YWdcIjtcbiAgICAvKiogVHlwZSBmb3IgPCFbQ0RBVEFbIC4uLiBdXT4gKi9cbiAgICBFbGVtZW50VHlwZVtcIkNEQVRBXCJdID0gXCJjZGF0YVwiO1xuICAgIC8qKiBUeXBlIGZvciA8IWRvY3R5cGUgLi4uPiAqL1xuICAgIEVsZW1lbnRUeXBlW1wiRG9jdHlwZVwiXSA9IFwiZG9jdHlwZVwiO1xufSkoRWxlbWVudFR5cGUgPSBleHBvcnRzLkVsZW1lbnRUeXBlIHx8IChleHBvcnRzLkVsZW1lbnRUeXBlID0ge30pKTtcbi8qKlxuICogVGVzdHMgd2hldGhlciBhbiBlbGVtZW50IGlzIGEgdGFnIG9yIG5vdC5cbiAqXG4gKiBAcGFyYW0gZWxlbSBFbGVtZW50IHRvIHRlc3RcbiAqL1xuZnVuY3Rpb24gaXNUYWcoZWxlbSkge1xuICAgIHJldHVybiAoZWxlbS50eXBlID09PSBFbGVtZW50VHlwZS5UYWcgfHxcbiAgICAgICAgZWxlbS50eXBlID09PSBFbGVtZW50VHlwZS5TY3JpcHQgfHxcbiAgICAgICAgZWxlbS50eXBlID09PSBFbGVtZW50VHlwZS5TdHlsZSk7XG59XG5leHBvcnRzLmlzVGFnID0gaXNUYWc7XG4vLyBFeHBvcnRzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuLyoqIFR5cGUgZm9yIHRoZSByb290IGVsZW1lbnQgb2YgYSBkb2N1bWVudCAqL1xuZXhwb3J0cy5Sb290ID0gRWxlbWVudFR5cGUuUm9vdDtcbi8qKiBUeXBlIGZvciBUZXh0ICovXG5leHBvcnRzLlRleHQgPSBFbGVtZW50VHlwZS5UZXh0O1xuLyoqIFR5cGUgZm9yIDw/IC4uLiA/PiAqL1xuZXhwb3J0cy5EaXJlY3RpdmUgPSBFbGVtZW50VHlwZS5EaXJlY3RpdmU7XG4vKiogVHlwZSBmb3IgPCEtLSAuLi4gLS0+ICovXG5leHBvcnRzLkNvbW1lbnQgPSBFbGVtZW50VHlwZS5Db21tZW50O1xuLyoqIFR5cGUgZm9yIDxzY3JpcHQ+IHRhZ3MgKi9cbmV4cG9ydHMuU2NyaXB0ID0gRWxlbWVudFR5cGUuU2NyaXB0O1xuLyoqIFR5cGUgZm9yIDxzdHlsZT4gdGFncyAqL1xuZXhwb3J0cy5TdHlsZSA9IEVsZW1lbnRUeXBlLlN0eWxlO1xuLyoqIFR5cGUgZm9yIEFueSB0YWcgKi9cbmV4cG9ydHMuVGFnID0gRWxlbWVudFR5cGUuVGFnO1xuLyoqIFR5cGUgZm9yIDwhW0NEQVRBWyAuLi4gXV0+ICovXG5leHBvcnRzLkNEQVRBID0gRWxlbWVudFR5cGUuQ0RBVEE7XG4vKiogVHlwZSBmb3IgPCFkb2N0eXBlIC4uLj4gKi9cbmV4cG9ydHMuRG9jdHlwZSA9IEVsZW1lbnRUeXBlLkRvY3R5cGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jbG9uZU5vZGUgPSBleHBvcnRzLmhhc0NoaWxkcmVuID0gZXhwb3J0cy5pc0RvY3VtZW50ID0gZXhwb3J0cy5pc0RpcmVjdGl2ZSA9IGV4cG9ydHMuaXNDb21tZW50ID0gZXhwb3J0cy5pc1RleHQgPSBleHBvcnRzLmlzQ0RBVEEgPSBleHBvcnRzLmlzVGFnID0gZXhwb3J0cy5FbGVtZW50ID0gZXhwb3J0cy5Eb2N1bWVudCA9IGV4cG9ydHMuTm9kZVdpdGhDaGlsZHJlbiA9IGV4cG9ydHMuUHJvY2Vzc2luZ0luc3RydWN0aW9uID0gZXhwb3J0cy5Db21tZW50ID0gZXhwb3J0cy5UZXh0ID0gZXhwb3J0cy5EYXRhTm9kZSA9IGV4cG9ydHMuTm9kZSA9IHZvaWQgMDtcbnZhciBkb21lbGVtZW50dHlwZV8xID0gcmVxdWlyZShcImRvbWVsZW1lbnR0eXBlXCIpO1xudmFyIG5vZGVUeXBlcyA9IG5ldyBNYXAoW1xuICAgIFtkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLlRhZywgMV0sXG4gICAgW2RvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuU2NyaXB0LCAxXSxcbiAgICBbZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5TdHlsZSwgMV0sXG4gICAgW2RvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuRGlyZWN0aXZlLCAxXSxcbiAgICBbZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5UZXh0LCAzXSxcbiAgICBbZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5DREFUQSwgNF0sXG4gICAgW2RvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuQ29tbWVudCwgOF0sXG4gICAgW2RvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuUm9vdCwgOV0sXG5dKTtcbi8qKlxuICogVGhpcyBvYmplY3Qgd2lsbCBiZSB1c2VkIGFzIHRoZSBwcm90b3R5cGUgZm9yIE5vZGVzIHdoZW4gY3JlYXRpbmcgYVxuICogRE9NLUxldmVsLTEtY29tcGxpYW50IHN0cnVjdHVyZS5cbiAqL1xudmFyIE5vZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgbm9kZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBOb2RlKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgLyoqIFBhcmVudCBvZiB0aGUgbm9kZSAqL1xuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIC8qKiBQcmV2aW91cyBzaWJsaW5nICovXG4gICAgICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgICAgIC8qKiBOZXh0IHNpYmxpbmcgKi9cbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICAgICAgLyoqIFRoZSBzdGFydCBpbmRleCBvZiB0aGUgbm9kZS4gUmVxdWlyZXMgYHdpdGhTdGFydEluZGljZXNgIG9uIHRoZSBoYW5kbGVyIHRvIGJlIGB0cnVlLiAqL1xuICAgICAgICB0aGlzLnN0YXJ0SW5kZXggPSBudWxsO1xuICAgICAgICAvKiogVGhlIGVuZCBpbmRleCBvZiB0aGUgbm9kZS4gUmVxdWlyZXMgYHdpdGhFbmRJbmRpY2VzYCBvbiB0aGUgaGFuZGxlciB0byBiZSBgdHJ1ZS4gKi9cbiAgICAgICAgdGhpcy5lbmRJbmRleCA9IG51bGw7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwgXCJub2RlVHlwZVwiLCB7XG4gICAgICAgIC8vIFJlYWQtb25seSBhbGlhc2VzXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgcmV0dXJuIChfYSA9IG5vZGVUeXBlcy5nZXQodGhpcy50eXBlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwgXCJwYXJlbnROb2RlXCIsIHtcbiAgICAgICAgLy8gUmVhZC13cml0ZSBhbGlhc2VzIGZvciBwcm9wZXJ0aWVzXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCBcInByZXZpb3VzU2libGluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJldjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocHJldikge1xuICAgICAgICAgICAgdGhpcy5wcmV2ID0gcHJldjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwgXCJuZXh0U2libGluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0ID0gbmV4dDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIENsb25lIHRoaXMgbm9kZSwgYW5kIG9wdGlvbmFsbHkgaXRzIGNoaWxkcmVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlY3Vyc2l2ZSBDbG9uZSBjaGlsZCBub2RlcyBhcyB3ZWxsLlxuICAgICAqIEByZXR1cm5zIEEgY2xvbmUgb2YgdGhlIG5vZGUuXG4gICAgICovXG4gICAgTm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlID0gZnVuY3Rpb24gKHJlY3Vyc2l2ZSkge1xuICAgICAgICBpZiAocmVjdXJzaXZlID09PSB2b2lkIDApIHsgcmVjdXJzaXZlID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIGNsb25lTm9kZSh0aGlzLCByZWN1cnNpdmUpO1xuICAgIH07XG4gICAgcmV0dXJuIE5vZGU7XG59KCkpO1xuZXhwb3J0cy5Ob2RlID0gTm9kZTtcbi8qKlxuICogQSBub2RlIHRoYXQgY29udGFpbnMgc29tZSBkYXRhLlxuICovXG52YXIgRGF0YU5vZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERhdGFOb2RlLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBub2RlXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGNvbnRlbnQgb2YgdGhlIGRhdGEgbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIERhdGFOb2RlKHR5cGUsIGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHlwZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERhdGFOb2RlLnByb3RvdHlwZSwgXCJub2RlVmFsdWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRGF0YU5vZGU7XG59KE5vZGUpKTtcbmV4cG9ydHMuRGF0YU5vZGUgPSBEYXRhTm9kZTtcbi8qKlxuICogVGV4dCB3aXRoaW4gdGhlIGRvY3VtZW50LlxuICovXG52YXIgVGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGV4dCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUZXh0KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuVGV4dCwgZGF0YSkgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFRleHQ7XG59KERhdGFOb2RlKSk7XG5leHBvcnRzLlRleHQgPSBUZXh0O1xuLyoqXG4gKiBDb21tZW50cyB3aXRoaW4gdGhlIGRvY3VtZW50LlxuICovXG52YXIgQ29tbWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29tbWVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb21tZW50KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuQ29tbWVudCwgZGF0YSkgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIENvbW1lbnQ7XG59KERhdGFOb2RlKSk7XG5leHBvcnRzLkNvbW1lbnQgPSBDb21tZW50O1xuLyoqXG4gKiBQcm9jZXNzaW5nIGluc3RydWN0aW9ucywgaW5jbHVkaW5nIGRvYyB0eXBlcy5cbiAqL1xudmFyIFByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUHJvY2Vzc2luZ0luc3RydWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByb2Nlc3NpbmdJbnN0cnVjdGlvbihuYW1lLCBkYXRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuRGlyZWN0aXZlLCBkYXRhKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gUHJvY2Vzc2luZ0luc3RydWN0aW9uO1xufShEYXRhTm9kZSkpO1xuZXhwb3J0cy5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gPSBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb247XG4vKipcbiAqIEEgYE5vZGVgIHRoYXQgY2FuIGhhdmUgY2hpbGRyZW4uXG4gKi9cbnZhciBOb2RlV2l0aENoaWxkcmVuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb2RlV2l0aENoaWxkcmVuLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB0eXBlIFR5cGUgb2YgdGhlIG5vZGUuXG4gICAgICogQHBhcmFtIGNoaWxkcmVuIENoaWxkcmVuIG9mIHRoZSBub2RlLiBPbmx5IGNlcnRhaW4gbm9kZSB0eXBlcyBjYW4gaGF2ZSBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBOb2RlV2l0aENoaWxkcmVuKHR5cGUsIGNoaWxkcmVuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHR5cGUpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGVXaXRoQ2hpbGRyZW4ucHJvdG90eXBlLCBcImZpcnN0Q2hpbGRcIiwge1xuICAgICAgICAvLyBBbGlhc2VzXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuY2hpbGRyZW5bMF0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZVdpdGhDaGlsZHJlbi5wcm90b3R5cGUsIFwibGFzdENoaWxkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyB0aGlzLmNoaWxkcmVuW3RoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZVdpdGhDaGlsZHJlbi5wcm90b3R5cGUsIFwiY2hpbGROb2Rlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gTm9kZVdpdGhDaGlsZHJlbjtcbn0oTm9kZSkpO1xuZXhwb3J0cy5Ob2RlV2l0aENoaWxkcmVuID0gTm9kZVdpdGhDaGlsZHJlbjtcbi8qKlxuICogVGhlIHJvb3Qgbm9kZSBvZiB0aGUgZG9jdW1lbnQuXG4gKi9cbnZhciBEb2N1bWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRG9jdW1lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnQoY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuUm9vdCwgY2hpbGRyZW4pIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBEb2N1bWVudDtcbn0oTm9kZVdpdGhDaGlsZHJlbikpO1xuZXhwb3J0cy5Eb2N1bWVudCA9IERvY3VtZW50O1xuLyoqXG4gKiBBbiBlbGVtZW50IHdpdGhpbiB0aGUgRE9NLlxuICovXG52YXIgRWxlbWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRWxlbWVudCwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSB0YWcsIGVnLiBgZGl2YCwgYHNwYW5gLlxuICAgICAqIEBwYXJhbSBhdHRyaWJzIE9iamVjdCBtYXBwaW5nIGF0dHJpYnV0ZSBuYW1lcyB0byBhdHRyaWJ1dGUgdmFsdWVzLlxuICAgICAqIEBwYXJhbSBjaGlsZHJlbiBDaGlsZHJlbiBvZiB0aGUgbm9kZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBFbGVtZW50KG5hbWUsIGF0dHJpYnMsIGNoaWxkcmVuLCB0eXBlKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbiA9PT0gdm9pZCAwKSB7IGNoaWxkcmVuID0gW107IH1cbiAgICAgICAgaWYgKHR5cGUgPT09IHZvaWQgMCkgeyB0eXBlID0gbmFtZSA9PT0gXCJzY3JpcHRcIlxuICAgICAgICAgICAgPyBkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLlNjcmlwdFxuICAgICAgICAgICAgOiBuYW1lID09PSBcInN0eWxlXCJcbiAgICAgICAgICAgICAgICA/IGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuU3R5bGVcbiAgICAgICAgICAgICAgICA6IGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuVGFnOyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHR5cGUsIGNoaWxkcmVuKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMuYXR0cmlicyA9IGF0dHJpYnM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCBcInRhZ05hbWVcIiwge1xuICAgICAgICAvLyBET00gTGV2ZWwgMSBhbGlhc2VzXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgXCJhdHRyaWJ1dGVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYXR0cmlicykubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF90aGlzLmF0dHJpYnNbbmFtZV0sXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogKF9hID0gX3RoaXNbXCJ4LWF0dHJpYnNOYW1lc3BhY2VcIl0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtuYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiAoX2IgPSBfdGhpc1tcIngtYXR0cmlic1ByZWZpeFwiXSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iW25hbWVdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRWxlbWVudDtcbn0oTm9kZVdpdGhDaGlsZHJlbikpO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbi8qKlxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbm9kZSBpcyBhIGBFbGVtZW50YCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzVGFnKG5vZGUpIHtcbiAgICByZXR1cm4gKDAsIGRvbWVsZW1lbnR0eXBlXzEuaXNUYWcpKG5vZGUpO1xufVxuZXhwb3J0cy5pc1RhZyA9IGlzVGFnO1xuLyoqXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGNoZWNrLlxuICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBub2RlIGhhcyB0aGUgdHlwZSBgQ0RBVEFgLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNDREFUQShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5DREFUQTtcbn1cbmV4cG9ydHMuaXNDREFUQSA9IGlzQ0RBVEE7XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaGFzIHRoZSB0eXBlIGBUZXh0YCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzVGV4dChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5UZXh0O1xufVxuZXhwb3J0cy5pc1RleHQgPSBpc1RleHQ7XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaGFzIHRoZSB0eXBlIGBDb21tZW50YCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzQ29tbWVudChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5Db21tZW50O1xufVxuZXhwb3J0cy5pc0NvbW1lbnQgPSBpc0NvbW1lbnQ7XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaGFzIHRoZSB0eXBlIGBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb25gLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNEaXJlY3RpdmUobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09IGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuRGlyZWN0aXZlO1xufVxuZXhwb3J0cy5pc0RpcmVjdGl2ZSA9IGlzRGlyZWN0aXZlO1xuLyoqXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGNoZWNrLlxuICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBub2RlIGhhcyB0aGUgdHlwZSBgUHJvY2Vzc2luZ0luc3RydWN0aW9uYCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzRG9jdW1lbnQobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09IGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuUm9vdDtcbn1cbmV4cG9ydHMuaXNEb2N1bWVudCA9IGlzRG9jdW1lbnQ7XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaXMgYSBgTm9kZVdpdGhDaGlsZHJlbmAgKGhhcyBjaGlsZHJlbiksIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBoYXNDaGlsZHJlbihub2RlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChub2RlLCBcImNoaWxkcmVuXCIpO1xufVxuZXhwb3J0cy5oYXNDaGlsZHJlbiA9IGhhc0NoaWxkcmVuO1xuLyoqXG4gKiBDbG9uZSBhIG5vZGUsIGFuZCBvcHRpb25hbGx5IGl0cyBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gcmVjdXJzaXZlIENsb25lIGNoaWxkIG5vZGVzIGFzIHdlbGwuXG4gKiBAcmV0dXJucyBBIGNsb25lIG9mIHRoZSBub2RlLlxuICovXG5mdW5jdGlvbiBjbG9uZU5vZGUobm9kZSwgcmVjdXJzaXZlKSB7XG4gICAgaWYgKHJlY3Vyc2l2ZSA9PT0gdm9pZCAwKSB7IHJlY3Vyc2l2ZSA9IGZhbHNlOyB9XG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZiAoaXNUZXh0KG5vZGUpKSB7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBUZXh0KG5vZGUuZGF0YSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQ29tbWVudChub2RlKSkge1xuICAgICAgICByZXN1bHQgPSBuZXcgQ29tbWVudChub2RlLmRhdGEpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1RhZyhub2RlKSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSByZWN1cnNpdmUgPyBjbG9uZUNoaWxkcmVuKG5vZGUuY2hpbGRyZW4pIDogW107XG4gICAgICAgIHZhciBjbG9uZV8xID0gbmV3IEVsZW1lbnQobm9kZS5uYW1lLCBfX2Fzc2lnbih7fSwgbm9kZS5hdHRyaWJzKSwgY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gKGNoaWxkLnBhcmVudCA9IGNsb25lXzEpOyB9KTtcbiAgICAgICAgaWYgKG5vZGVbXCJ4LWF0dHJpYnNOYW1lc3BhY2VcIl0pIHtcbiAgICAgICAgICAgIGNsb25lXzFbXCJ4LWF0dHJpYnNOYW1lc3BhY2VcIl0gPSBfX2Fzc2lnbih7fSwgbm9kZVtcIngtYXR0cmlic05hbWVzcGFjZVwiXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGVbXCJ4LWF0dHJpYnNQcmVmaXhcIl0pIHtcbiAgICAgICAgICAgIGNsb25lXzFbXCJ4LWF0dHJpYnNQcmVmaXhcIl0gPSBfX2Fzc2lnbih7fSwgbm9kZVtcIngtYXR0cmlic1ByZWZpeFwiXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gY2xvbmVfMTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNDREFUQShub2RlKSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSByZWN1cnNpdmUgPyBjbG9uZUNoaWxkcmVuKG5vZGUuY2hpbGRyZW4pIDogW107XG4gICAgICAgIHZhciBjbG9uZV8yID0gbmV3IE5vZGVXaXRoQ2hpbGRyZW4oZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5DREFUQSwgY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gKGNoaWxkLnBhcmVudCA9IGNsb25lXzIpOyB9KTtcbiAgICAgICAgcmVzdWx0ID0gY2xvbmVfMjtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNEb2N1bWVudChub2RlKSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSByZWN1cnNpdmUgPyBjbG9uZUNoaWxkcmVuKG5vZGUuY2hpbGRyZW4pIDogW107XG4gICAgICAgIHZhciBjbG9uZV8zID0gbmV3IERvY3VtZW50KGNoaWxkcmVuKTtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIChjaGlsZC5wYXJlbnQgPSBjbG9uZV8zKTsgfSk7XG4gICAgICAgIGlmIChub2RlW1wieC1tb2RlXCJdKSB7XG4gICAgICAgICAgICBjbG9uZV8zW1wieC1tb2RlXCJdID0gbm9kZVtcIngtbW9kZVwiXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBjbG9uZV8zO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0RpcmVjdGl2ZShub2RlKSkge1xuICAgICAgICB2YXIgaW5zdHJ1Y3Rpb24gPSBuZXcgUHJvY2Vzc2luZ0luc3RydWN0aW9uKG5vZGUubmFtZSwgbm9kZS5kYXRhKTtcbiAgICAgICAgaWYgKG5vZGVbXCJ4LW5hbWVcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25bXCJ4LW5hbWVcIl0gPSBub2RlW1wieC1uYW1lXCJdO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25bXCJ4LXB1YmxpY0lkXCJdID0gbm9kZVtcIngtcHVibGljSWRcIl07XG4gICAgICAgICAgICBpbnN0cnVjdGlvbltcIngtc3lzdGVtSWRcIl0gPSBub2RlW1wieC1zeXN0ZW1JZFwiXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBpbnN0cnVjdGlvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXQ6IFwiICsgbm9kZS50eXBlKTtcbiAgICB9XG4gICAgcmVzdWx0LnN0YXJ0SW5kZXggPSBub2RlLnN0YXJ0SW5kZXg7XG4gICAgcmVzdWx0LmVuZEluZGV4ID0gbm9kZS5lbmRJbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5jbG9uZU5vZGUgPSBjbG9uZU5vZGU7XG5mdW5jdGlvbiBjbG9uZUNoaWxkcmVuKGNoaWxkcykge1xuICAgIHZhciBjaGlsZHJlbiA9IGNoaWxkcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjbG9uZU5vZGUoY2hpbGQsIHRydWUpOyB9KTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoaWxkcmVuW2ldLnByZXYgPSBjaGlsZHJlbltpIC0gMV07XG4gICAgICAgIGNoaWxkcmVuW2kgLSAxXS5uZXh0ID0gY2hpbGRyZW5baV07XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbjtcbn1cbiIsIi8qKlxuICogU1ZHIGVsZW1lbnRzIGFyZSBjYXNlLXNlbnNpdGl2ZS5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9TVkcvRWxlbWVudCNTVkdfZWxlbWVudHNfQV90b19afVxuICovXG52YXIgQ0FTRV9TRU5TSVRJVkVfVEFHX05BTUVTID0gW1xuICAnYW5pbWF0ZU1vdGlvbicsXG4gICdhbmltYXRlVHJhbnNmb3JtJyxcbiAgJ2NsaXBQYXRoJyxcbiAgJ2ZlQmxlbmQnLFxuICAnZmVDb2xvck1hdHJpeCcsXG4gICdmZUNvbXBvbmVudFRyYW5zZmVyJyxcbiAgJ2ZlQ29tcG9zaXRlJyxcbiAgJ2ZlQ29udm9sdmVNYXRyaXgnLFxuICAnZmVEaWZmdXNlTGlnaHRpbmcnLFxuICAnZmVEaXNwbGFjZW1lbnRNYXAnLFxuICAnZmVEcm9wU2hhZG93JyxcbiAgJ2ZlRmxvb2QnLFxuICAnZmVGdW5jQScsXG4gICdmZUZ1bmNCJyxcbiAgJ2ZlRnVuY0cnLFxuICAnZmVGdW5jUicsXG4gICdmZUdhdXNzYWluQmx1cicsXG4gICdmZUltYWdlJyxcbiAgJ2ZlTWVyZ2UnLFxuICAnZmVNZXJnZU5vZGUnLFxuICAnZmVNb3JwaG9sb2d5JyxcbiAgJ2ZlT2Zmc2V0JyxcbiAgJ2ZlUG9pbnRMaWdodCcsXG4gICdmZVNwZWN1bGFyTGlnaHRpbmcnLFxuICAnZmVTcG90TGlnaHQnLFxuICAnZmVUaWxlJyxcbiAgJ2ZlVHVyYnVsZW5jZScsXG4gICdmb3JlaWduT2JqZWN0JyxcbiAgJ2xpbmVhckdyYWRpZW50JyxcbiAgJ3JhZGlhbEdyYWRpZW50JyxcbiAgJ3RleHRQYXRoJ1xuXTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENBU0VfU0VOU0lUSVZFX1RBR19OQU1FUzogQ0FTRV9TRU5TSVRJVkVfVEFHX05BTUVTXG59O1xuIiwiLy8gY29uc3RhbnRzXG52YXIgSFRNTCA9ICdodG1sJztcbnZhciBIRUFEID0gJ2hlYWQnO1xudmFyIEJPRFkgPSAnYm9keSc7XG52YXIgRklSU1RfVEFHX1JFR0VYID0gLzwoW2EtekEtWl0rWzAtOV0/KS87IC8vIGUuZy4sIDxoMT5cbnZhciBIRUFEX1RBR19SRUdFWCA9IC88aGVhZC4qPi9pO1xudmFyIEJPRFlfVEFHX1JFR0VYID0gLzxib2R5Lio+L2k7XG5cbi8vIGZhbGxzIGJhY2sgdG8gYHBhcnNlRnJvbVN0cmluZ2AgaWYgYGNyZWF0ZUhUTUxEb2N1bWVudGAgY2Fubm90IGJlIHVzZWRcbnZhciBwYXJzZUZyb21Eb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50YCdcbiAgKTtcbn07XG5cbnZhciBwYXJzZUZyb21TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYERPTVBhcnNlci5wcm90b3R5cGUucGFyc2VGcm9tU3RyaW5nYCdcbiAgKTtcbn07XG5cbi8qKlxuICogRE9NUGFyc2VyIChwZXJmb3JtYW5jZTogc2xvdykuXG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9BUEkvRE9NUGFyc2VyI1BhcnNpbmdfYW5fU1ZHX29yX0hUTUxfZG9jdW1lbnRcbiAqL1xuaWYgKHR5cGVvZiB3aW5kb3cuRE9NUGFyc2VyID09PSAnZnVuY3Rpb24nKSB7XG4gIHZhciBkb21QYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xuICB2YXIgbWltZVR5cGUgPSAndGV4dC9odG1sJztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBIVE1MIGRvY3VtZW50IHVzaW5nIGBET01QYXJzZXIucGFyc2VGcm9tU3RyaW5nYC5cbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBodG1sICAgICAgLSBUaGUgSFRNTCBzdHJpbmcuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gW3RhZ05hbWVdIC0gVGhlIGVsZW1lbnQgdG8gcmVuZGVyIHRoZSBIVE1MICh3aXRoICdib2R5JyBhcyBmYWxsYmFjaykuXG4gICAqIEByZXR1cm4ge0hUTUxEb2N1bWVudH1cbiAgICovXG4gIHBhcnNlRnJvbVN0cmluZyA9IGZ1bmN0aW9uIChodG1sLCB0YWdOYW1lKSB7XG4gICAgaWYgKHRhZ05hbWUpIHtcbiAgICAgIGh0bWwgPSAnPCcgKyB0YWdOYW1lICsgJz4nICsgaHRtbCArICc8LycgKyB0YWdOYW1lICsgJz4nO1xuICAgIH1cblxuICAgIHJldHVybiBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsIG1pbWVUeXBlKTtcbiAgfTtcblxuICBwYXJzZUZyb21Eb2N1bWVudCA9IHBhcnNlRnJvbVN0cmluZztcbn1cblxuLyoqXG4gKiBET01JbXBsZW1lbnRhdGlvbiAocGVyZm9ybWFuY2U6IGZhaXIpLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvQVBJL0RPTUltcGxlbWVudGF0aW9uL2NyZWF0ZUhUTUxEb2N1bWVudFxuICovXG5pZiAoZG9jdW1lbnQuaW1wbGVtZW50YXRpb24pIHtcbiAgdmFyIGlzSUUgPSByZXF1aXJlKCcuL3V0aWxpdGllcycpLmlzSUU7XG5cbiAgLy8gdGl0bGUgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIGluIElFXG4gIC8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvZmY5NzU0NTcodj12cy44NSkuYXNweFxuICB2YXIgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFxuICAgIGlzSUUoKSA/ICdodG1sLWRvbS1wYXJzZXInIDogdW5kZWZpbmVkXG4gICk7XG5cbiAgLyoqXG4gICAqIFVzZSBIVE1MIGRvY3VtZW50IGNyZWF0ZWQgYnkgYGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudGAuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaHRtbCAgICAgIC0gVGhlIEhUTUwgc3RyaW5nLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IFt0YWdOYW1lXSAtIFRoZSBlbGVtZW50IHRvIHJlbmRlciB0aGUgSFRNTCAod2l0aCAnYm9keScgYXMgZmFsbGJhY2spLlxuICAgKiBAcmV0dXJuIHtIVE1MRG9jdW1lbnR9XG4gICAqL1xuICBwYXJzZUZyb21Eb2N1bWVudCA9IGZ1bmN0aW9uIChodG1sLCB0YWdOYW1lKSB7XG4gICAgaWYgKHRhZ05hbWUpIHtcbiAgICAgIGRvYy5kb2N1bWVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSlbMF0uaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgIHJldHVybiBkb2M7XG4gICAgfVxuXG4gICAgZG9jLmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBkb2M7XG4gIH07XG59XG5cbi8qKlxuICogVGVtcGxhdGUgKHBlcmZvcm1hbmNlOiBmYXN0KS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0hUTUwvRWxlbWVudC90ZW1wbGF0ZVxuICovXG52YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudmFyIHBhcnNlRnJvbVRlbXBsYXRlO1xuXG5pZiAodGVtcGxhdGUuY29udGVudCkge1xuICAvKipcbiAgICogVXNlcyBhIHRlbXBsYXRlIGVsZW1lbnQgKGNvbnRlbnQgZnJhZ21lbnQpIHRvIHBhcnNlIEhUTUwuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaHRtbCAtIFRoZSBIVE1MIHN0cmluZy5cbiAgICogQHJldHVybiB7Tm9kZUxpc3R9XG4gICAqL1xuICBwYXJzZUZyb21UZW1wbGF0ZSA9IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5jaGlsZE5vZGVzO1xuICB9O1xufVxuXG4vKipcbiAqIFBhcnNlcyBIVE1MIHN0cmluZyB0byBET00gbm9kZXMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgIGh0bWwgLSBIVE1MIG1hcmt1cC5cbiAqIEByZXR1cm4ge05vZGVMaXN0fVxuICovXG5mdW5jdGlvbiBkb21wYXJzZXIoaHRtbCkge1xuICB2YXIgZmlyc3RUYWdOYW1lO1xuICB2YXIgbWF0Y2ggPSBodG1sLm1hdGNoKEZJUlNUX1RBR19SRUdFWCk7XG5cbiAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgZmlyc3RUYWdOYW1lID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHZhciBkb2M7XG4gIHZhciBlbGVtZW50O1xuICB2YXIgZWxlbWVudHM7XG5cbiAgc3dpdGNoIChmaXJzdFRhZ05hbWUpIHtcbiAgICBjYXNlIEhUTUw6XG4gICAgICBkb2MgPSBwYXJzZUZyb21TdHJpbmcoaHRtbCk7XG5cbiAgICAgIC8vIHRoZSBjcmVhdGVkIGRvY3VtZW50IG1heSBjb21lIHdpdGggZmlsbGVyIGhlYWQvYm9keSBlbGVtZW50cyxcbiAgICAgIC8vIHNvIG1ha2Ugc3VyZSB0byByZW1vdmUgdGhlbSBpZiB0aGV5IGRvbid0IGFjdHVhbGx5IGV4aXN0XG4gICAgICBpZiAoIUhFQURfVEFHX1JFR0VYLnRlc3QoaHRtbCkpIHtcbiAgICAgICAgZWxlbWVudCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShIRUFEKVswXTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFCT0RZX1RBR19SRUdFWC50ZXN0KGh0bWwpKSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoQk9EWSlbMF07XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoSFRNTCk7XG5cbiAgICBjYXNlIEhFQUQ6XG4gICAgY2FzZSBCT0RZOlxuICAgICAgZWxlbWVudHMgPSBwYXJzZUZyb21Eb2N1bWVudChodG1sKS5nZXRFbGVtZW50c0J5VGFnTmFtZShmaXJzdFRhZ05hbWUpO1xuXG4gICAgICAvLyBpZiB0aGVyZSdzIGEgc2libGluZyBlbGVtZW50LCB0aGVuIHJldHVybiBib3RoIGVsZW1lbnRzXG4gICAgICBpZiAoQk9EWV9UQUdfUkVHRVgudGVzdChodG1sKSAmJiBIRUFEX1RBR19SRUdFWC50ZXN0KGh0bWwpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50c1swXS5wYXJlbnROb2RlLmNoaWxkTm9kZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gZWxlbWVudHM7XG5cbiAgICAvLyBsb3ctbGV2ZWwgdGFnIG9yIHRleHRcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHBhcnNlRnJvbVRlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZyb21UZW1wbGF0ZShodG1sKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlRnJvbURvY3VtZW50KGh0bWwsIEJPRFkpLmdldEVsZW1lbnRzQnlUYWdOYW1lKEJPRFkpWzBdXG4gICAgICAgIC5jaGlsZE5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tcGFyc2VyO1xuIiwidmFyIGRvbXBhcnNlciA9IHJlcXVpcmUoJy4vZG9tcGFyc2VyJyk7XG52YXIgZm9ybWF0RE9NID0gcmVxdWlyZSgnLi91dGlsaXRpZXMnKS5mb3JtYXRET007XG5cbnZhciBESVJFQ1RJVkVfUkVHRVggPSAvPCghW2EtekEtWlxcc10rKT4vOyAvLyBlLmcuLCA8IWRvY3R5cGUgaHRtbD5cblxuLyoqXG4gKiBQYXJzZXMgSFRNTCBzdHJpbmcgdG8gRE9NIG5vZGVzIGluIGJyb3dzZXIuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBodG1sICAtIEhUTUwgbWFya3VwLlxuICogQHJldHVybiB7RG9tRWxlbWVudFtdfSAtIERPTSBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gSFRNTERPTVBhcnNlcihodG1sKSB7XG4gIGlmICh0eXBlb2YgaHRtbCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIH1cblxuICBpZiAoaHRtbCA9PT0gJycpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBtYXRjaCBkaXJlY3RpdmVcbiAgdmFyIG1hdGNoID0gaHRtbC5tYXRjaChESVJFQ1RJVkVfUkVHRVgpO1xuICB2YXIgZGlyZWN0aXZlO1xuXG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIGRpcmVjdGl2ZSA9IG1hdGNoWzFdO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdERPTShkb21wYXJzZXIoaHRtbCksIG51bGwsIGRpcmVjdGl2ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSFRNTERPTVBhcnNlcjtcbiIsInZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xudmFyIGRvbWhhbmRsZXIgPSByZXF1aXJlKCdkb21oYW5kbGVyL2xpYi9ub2RlJyk7XG5cbnZhciBDQVNFX1NFTlNJVElWRV9UQUdfTkFNRVMgPSBjb25zdGFudHMuQ0FTRV9TRU5TSVRJVkVfVEFHX05BTUVTO1xuXG52YXIgQ29tbWVudCA9IGRvbWhhbmRsZXIuQ29tbWVudDtcbnZhciBFbGVtZW50ID0gZG9taGFuZGxlci5FbGVtZW50O1xudmFyIFByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IGRvbWhhbmRsZXIuUHJvY2Vzc2luZ0luc3RydWN0aW9uO1xudmFyIFRleHQgPSBkb21oYW5kbGVyLlRleHQ7XG5cbnZhciBjYXNlU2Vuc2l0aXZlVGFnTmFtZXNNYXAgPSB7fTtcbnZhciB0YWdOYW1lO1xuXG5mb3IgKHZhciBpID0gMCwgbGVuID0gQ0FTRV9TRU5TSVRJVkVfVEFHX05BTUVTLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gIHRhZ05hbWUgPSBDQVNFX1NFTlNJVElWRV9UQUdfTkFNRVNbaV07XG4gIGNhc2VTZW5zaXRpdmVUYWdOYW1lc01hcFt0YWdOYW1lLnRvTG93ZXJDYXNlKCldID0gdGFnTmFtZTtcbn1cblxuLyoqXG4gKiBHZXRzIGNhc2Utc2Vuc2l0aXZlIHRhZyBuYW1lLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgIHRhZ05hbWUgLSBUYWcgbmFtZSBpbiBsb3dlcmNhc2UuXG4gKiBAcmV0dXJuIHtzdHJpbmd8dW5kZWZpbmVkfSAgICAgICAgIC0gQ2FzZS1zZW5zaXRpdmUgdGFnIG5hbWUuXG4gKi9cbmZ1bmN0aW9uIGdldENhc2VTZW5zaXRpdmVUYWdOYW1lKHRhZ05hbWUpIHtcbiAgcmV0dXJuIGNhc2VTZW5zaXRpdmVUYWdOYW1lc01hcFt0YWdOYW1lXTtcbn1cblxuLyoqXG4gKiBGb3JtYXRzIERPTSBhdHRyaWJ1dGVzIHRvIGEgaGFzaCBtYXAuXG4gKlxuICogQHBhcmFtICB7TmFtZWROb2RlTWFwfSBhdHRyaWJ1dGVzIC0gTGlzdCBvZiBhdHRyaWJ1dGVzLlxuICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgICAgICAgIC0gTWFwIG9mIGF0dHJpYnV0ZSBuYW1lIHRvIHZhbHVlLlxuICovXG5mdW5jdGlvbiBmb3JtYXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICB2YXIgYXR0cmlidXRlO1xuICAvLyBgTmFtZWROb2RlTWFwYCBpcyBhcnJheS1saWtlXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhdHRyaWJ1dGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXR0cmlidXRlID0gYXR0cmlidXRlc1tpXTtcbiAgICByZXN1bHRbYXR0cmlidXRlLm5hbWVdID0gYXR0cmlidXRlLnZhbHVlO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29ycmVjdHMgdGhlIHRhZyBuYW1lIGlmIGl0IGlzIGNhc2Utc2Vuc2l0aXZlIChTVkcpLlxuICogT3RoZXJ3aXNlLCByZXR1cm5zIHRoZSBsb3dlcmNhc2UgdGFnIG5hbWUgKEhUTUwpLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdGFnTmFtZSAtIExvd2VyY2FzZSB0YWcgbmFtZS5cbiAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgICAtIEZvcm1hdHRlZCB0YWcgbmFtZS5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0VGFnTmFtZSh0YWdOYW1lKSB7XG4gIHRhZ05hbWUgPSB0YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBjYXNlU2Vuc2l0aXZlVGFnTmFtZSA9IGdldENhc2VTZW5zaXRpdmVUYWdOYW1lKHRhZ05hbWUpO1xuICBpZiAoY2FzZVNlbnNpdGl2ZVRhZ05hbWUpIHtcbiAgICByZXR1cm4gY2FzZVNlbnNpdGl2ZVRhZ05hbWU7XG4gIH1cbiAgcmV0dXJuIHRhZ05hbWU7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyBET00gbm9kZXMgdG8gYGRvbWhhbmRsZXJgIG5vZGVzLlxuICpcbiAqIEBwYXJhbSAge05vZGVMaXN0fSAgICAgbm9kZXMgICAgICAgICAtIERPTSBub2Rlcy5cbiAqIEBwYXJhbSAge0VsZW1lbnR8bnVsbH0gW3BhcmVudD1udWxsXSAtIFBhcmVudCBub2RlLlxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgICBbZGlyZWN0aXZlXSAgIC0gRGlyZWN0aXZlLlxuICogQHJldHVybiB7QXJyYXk8Q29tbWVudHxFbGVtZW50fFByb2Nlc3NpbmdJbnN0cnVjdGlvbnxUZXh0Pn1cbiAqL1xuZnVuY3Rpb24gZm9ybWF0RE9NKG5vZGVzLCBwYXJlbnQsIGRpcmVjdGl2ZSkge1xuICBwYXJlbnQgPSBwYXJlbnQgfHwgbnVsbDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMCwgbGVuID0gbm9kZXMubGVuZ3RoOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xuICAgIHZhciBub2RlID0gbm9kZXNbaW5kZXhdO1xuICAgIHZhciBjdXJyZW50O1xuXG4gICAgLy8gc2V0IHRoZSBub2RlIGRhdGEgZ2l2ZW4gdGhlIHR5cGVcbiAgICBzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgLy8gc2NyaXB0LCBzdHlsZSwgb3IgdGFnXG4gICAgICAgIGN1cnJlbnQgPSBuZXcgRWxlbWVudChcbiAgICAgICAgICBmb3JtYXRUYWdOYW1lKG5vZGUubm9kZU5hbWUpLFxuICAgICAgICAgIGZvcm1hdEF0dHJpYnV0ZXMobm9kZS5hdHRyaWJ1dGVzKVxuICAgICAgICApO1xuICAgICAgICBjdXJyZW50LmNoaWxkcmVuID0gZm9ybWF0RE9NKG5vZGUuY2hpbGROb2RlcywgY3VycmVudCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIGN1cnJlbnQgPSBuZXcgVGV4dChub2RlLm5vZGVWYWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDg6XG4gICAgICAgIGN1cnJlbnQgPSBuZXcgQ29tbWVudChub2RlLm5vZGVWYWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBzZXQgcHJldmlvdXMgbm9kZSBuZXh0XG4gICAgdmFyIHByZXYgPSByZXN1bHRbaW5kZXggLSAxXSB8fCBudWxsO1xuICAgIGlmIChwcmV2KSB7XG4gICAgICBwcmV2Lm5leHQgPSBjdXJyZW50O1xuICAgIH1cblxuICAgIC8vIHNldCBwcm9wZXJ0aWVzIGZvciBjdXJyZW50IG5vZGVcbiAgICBjdXJyZW50LnBhcmVudCA9IHBhcmVudDtcbiAgICBjdXJyZW50LnByZXYgPSBwcmV2O1xuICAgIGN1cnJlbnQubmV4dCA9IG51bGw7XG5cbiAgICByZXN1bHQucHVzaChjdXJyZW50KTtcbiAgfVxuXG4gIGlmIChkaXJlY3RpdmUpIHtcbiAgICBjdXJyZW50ID0gbmV3IFByb2Nlc3NpbmdJbnN0cnVjdGlvbihcbiAgICAgIGRpcmVjdGl2ZS5zdWJzdHJpbmcoMCwgZGlyZWN0aXZlLmluZGV4T2YoJyAnKSkudG9Mb3dlckNhc2UoKSxcbiAgICAgIGRpcmVjdGl2ZVxuICAgICk7XG4gICAgY3VycmVudC5uZXh0ID0gcmVzdWx0WzBdIHx8IG51bGw7XG4gICAgY3VycmVudC5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgcmVzdWx0LnVuc2hpZnQoY3VycmVudCk7XG5cbiAgICBpZiAocmVzdWx0WzFdKSB7XG4gICAgICByZXN1bHRbMV0ucHJldiA9IHJlc3VsdFswXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVjdHMgaWYgYnJvd3NlciBpcyBJbnRlcm5ldCBFeHBsb3Jlci5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFdoZXRoZXIgSUUgaXMgZGV0ZWN0ZWQuXG4gKi9cbmZ1bmN0aW9uIGlzSUUoKSB7XG4gIHJldHVybiAvKE1TSUUgfFRyaWRlbnRcXC98RWRnZVxcLykvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmb3JtYXRBdHRyaWJ1dGVzOiBmb3JtYXRBdHRyaWJ1dGVzLFxuICBmb3JtYXRET006IGZvcm1hdERPTSxcbiAgaXNJRTogaXNJRVxufTtcbiIsInZhciBkb21Ub1JlYWN0ID0gcmVxdWlyZSgnLi9saWIvZG9tLXRvLXJlYWN0Jyk7XG52YXIgYXR0cmlidXRlc1RvUHJvcHMgPSByZXF1aXJlKCcuL2xpYi9hdHRyaWJ1dGVzLXRvLXByb3BzJyk7XG52YXIgaHRtbFRvRE9NID0gcmVxdWlyZSgnaHRtbC1kb20tcGFyc2VyJyk7XG5cbnZhciBkb21QYXJzZXJPcHRpb25zID0geyBsb3dlckNhc2VBdHRyaWJ1dGVOYW1lczogZmFsc2UgfTtcblxuLyoqXG4gKiBDb252ZXJ0cyBIVE1MIHN0cmluZyB0byBSZWFjdCBlbGVtZW50cy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgaHRtbCAgICAgICAgICAgICAgICAgICAgLSBIVE1MIHN0cmluZy5cbiAqIEBwYXJhbSAge09iamVjdH0gICBbb3B0aW9uc10gICAgICAgICAgICAgICAtIFBhcnNlciBvcHRpb25zLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIFtvcHRpb25zLmh0bWxwYXJzZXIyXSAgIC0gaHRtbHBhcnNlcjIgb3B0aW9ucy5cbiAqIEBwYXJhbSAge09iamVjdH0gICBbb3B0aW9ucy5saWJyYXJ5XSAgICAgICAtIExpYnJhcnkgZm9yIFJlYWN0LCBQcmVhY3QsIGV0Yy5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBbb3B0aW9ucy5yZXBsYWNlXSAgICAgICAtIFJlcGxhY2UgbWV0aG9kLlxuICogQHJldHVybiB7SlNYLkVsZW1lbnR8SlNYLkVsZW1lbnRbXXxTdHJpbmd9IC0gUmVhY3QgZWxlbWVudChzKSwgZW1wdHkgYXJyYXksIG9yIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gSFRNTFJlYWN0UGFyc2VyKGh0bWwsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBodG1sICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgfVxuICBpZiAoaHRtbCA9PT0gJycpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHJldHVybiBkb21Ub1JlYWN0KFxuICAgIGh0bWxUb0RPTShodG1sLCBvcHRpb25zLmh0bWxwYXJzZXIyIHx8IGRvbVBhcnNlck9wdGlvbnMpLFxuICAgIG9wdGlvbnNcbiAgKTtcbn1cblxuSFRNTFJlYWN0UGFyc2VyLmRvbVRvUmVhY3QgPSBkb21Ub1JlYWN0O1xuSFRNTFJlYWN0UGFyc2VyLmh0bWxUb0RPTSA9IGh0bWxUb0RPTTtcbkhUTUxSZWFjdFBhcnNlci5hdHRyaWJ1dGVzVG9Qcm9wcyA9IGF0dHJpYnV0ZXNUb1Byb3BzO1xuXG4vLyBzdXBwb3J0IENvbW1vbkpTIGFuZCBFUyBNb2R1bGVzXG5tb2R1bGUuZXhwb3J0cyA9IEhUTUxSZWFjdFBhcnNlcjtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBIVE1MUmVhY3RQYXJzZXI7XG4iLCJpbXBvcnQgSFRNTFJlYWN0UGFyc2VyIGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgdmFyIGRvbVRvUmVhY3QgPSBIVE1MUmVhY3RQYXJzZXIuZG9tVG9SZWFjdDtcbmV4cG9ydCB2YXIgaHRtbFRvRE9NID0gSFRNTFJlYWN0UGFyc2VyLmh0bWxUb0RPTTtcbmV4cG9ydCB2YXIgYXR0cmlidXRlc1RvUHJvcHMgPSBIVE1MUmVhY3RQYXJzZXIuYXR0cmlidXRlc1RvUHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IEhUTUxSZWFjdFBhcnNlcjtcbiIsInZhciByZWFjdFByb3BlcnR5ID0gcmVxdWlyZSgncmVhY3QtcHJvcGVydHknKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcycpO1xuXG4vKipcbiAqIENvbnZlcnRzIEhUTUwvU1ZHIERPTSBhdHRyaWJ1dGVzIHRvIFJlYWN0IHByb3BzLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gW2F0dHJpYnV0ZXM9e31dIC0gSFRNTC9TVkcgRE9NIGF0dHJpYnV0ZXMuXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgICAgICAgICAtIFJlYWN0IHByb3BzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGF0dHJpYnV0ZXNUb1Byb3BzKGF0dHJpYnV0ZXMpIHtcbiAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMgfHwge307XG5cbiAgdmFyIGF0dHJpYnV0ZU5hbWU7XG4gIHZhciBhdHRyaWJ1dGVOYW1lTG93ZXJDYXNlZDtcbiAgdmFyIGF0dHJpYnV0ZVZhbHVlO1xuICB2YXIgcHJvcE5hbWU7XG4gIHZhciBwcm9wZXJ0eUluZm87XG4gIHZhciBwcm9wcyA9IHt9O1xuXG4gIGZvciAoYXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgYXR0cmlidXRlVmFsdWUgPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xuXG4gICAgLy8gQVJJQSAoYXJpYS0qKSBvciBjdXN0b20gZGF0YSAoZGF0YS0qKSBhdHRyaWJ1dGVcbiAgICBpZiAocmVhY3RQcm9wZXJ0eS5pc0N1c3RvbUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgcHJvcHNbYXR0cmlidXRlTmFtZV0gPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGNvbnZlcnQgSFRNTC9TVkcgYXR0cmlidXRlIHRvIFJlYWN0IHByb3BcbiAgICBhdHRyaWJ1dGVOYW1lTG93ZXJDYXNlZCA9IGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBwcm9wTmFtZSA9IHJlYWN0UHJvcGVydHkucG9zc2libGVTdGFuZGFyZE5hbWVzW2F0dHJpYnV0ZU5hbWVMb3dlckNhc2VkXTtcblxuICAgIGlmIChwcm9wTmFtZSkge1xuICAgICAgcHJvcHNbcHJvcE5hbWVdID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICBwcm9wZXJ0eUluZm8gPSByZWFjdFByb3BlcnR5LmdldFByb3BlcnR5SW5mbyhwcm9wTmFtZSk7XG4gICAgICBzd2l0Y2ggKHByb3BlcnR5SW5mbyAmJiBwcm9wZXJ0eUluZm8udHlwZSkge1xuICAgICAgICBjYXNlIHJlYWN0UHJvcGVydHkuQk9PTEVBTjpcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHJlYWN0UHJvcGVydHkuT1ZFUkxPQURFRF9CT09MRUFOOlxuICAgICAgICAgIGlmIChhdHRyaWJ1dGVWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gcHJlc2VydmUgY3VzdG9tIGF0dHJpYnV0ZSBpZiBSZWFjdCA+PTE2XG4gICAgaWYgKHV0aWxpdGllcy5QUkVTRVJWRV9DVVNUT01fQVRUUklCVVRFUykge1xuICAgICAgcHJvcHNbYXR0cmlidXRlTmFtZV0gPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyB0cmFuc2Zvcm0gaW5saW5lIHN0eWxlIHRvIG9iamVjdFxuICB1dGlsaXRpZXMuc2V0U3R5bGVQcm9wKGF0dHJpYnV0ZXMuc3R5bGUsIHByb3BzKTtcblxuICByZXR1cm4gcHJvcHM7XG59O1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBhdHRyaWJ1dGVzVG9Qcm9wcyA9IHJlcXVpcmUoJy4vYXR0cmlidXRlcy10by1wcm9wcycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzJyk7XG5cbnZhciBzZXRTdHlsZVByb3AgPSB1dGlsaXRpZXMuc2V0U3R5bGVQcm9wO1xuXG4vKipcbiAqIENvbnZlcnRzIERPTSBub2RlcyB0byBKU1ggZWxlbWVudChzKS5cbiAqXG4gKiBAcGFyYW0gIHtEb21FbGVtZW50W119IG5vZGVzICAgICAgICAgICAgIC0gRE9NIG5vZGVzLlxuICogQHBhcmFtICB7b2JqZWN0fSAgICAgICBbb3B0aW9ucz17fV0gICAgICAtIE9wdGlvbnMuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gICAgIFtvcHRpb25zLnJlcGxhY2VdIC0gUmVwbGFjZXIuXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgICAgIFtvcHRpb25zLmxpYnJhcnldIC0gTGlicmFyeSAoUmVhY3QvUHJlYWN0L2V0Yy4pLlxuICogQHJldHVybiB7c3RyaW5nfEpTWC5FbGVtZW50fEpTWC5FbGVtZW50W119XG4gKi9cbmZ1bmN0aW9uIGRvbVRvUmVhY3Qobm9kZXMsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIGxpYnJhcnkgPSBvcHRpb25zLmxpYnJhcnkgfHwgUmVhY3Q7XG4gIHZhciBjbG9uZUVsZW1lbnQgPSBsaWJyYXJ5LmNsb25lRWxlbWVudDtcbiAgdmFyIGNyZWF0ZUVsZW1lbnQgPSBsaWJyYXJ5LmNyZWF0ZUVsZW1lbnQ7XG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGxpYnJhcnkuaXNWYWxpZEVsZW1lbnQ7XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgbm9kZTtcbiAgdmFyIGhhc1JlcGxhY2UgPSB0eXBlb2Ygb3B0aW9ucy5yZXBsYWNlID09PSAnZnVuY3Rpb24nO1xuICB2YXIgcmVwbGFjZUVsZW1lbnQ7XG4gIHZhciBwcm9wcztcbiAgdmFyIGNoaWxkcmVuO1xuICB2YXIgZGF0YTtcbiAgdmFyIHRyaW0gPSBvcHRpb25zLnRyaW07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgbm9kZSA9IG5vZGVzW2ldO1xuXG4gICAgLy8gcmVwbGFjZSB3aXRoIGN1c3RvbSBSZWFjdCBlbGVtZW50IChpZiBwcmVzZW50KVxuICAgIGlmIChoYXNSZXBsYWNlKSB7XG4gICAgICByZXBsYWNlRWxlbWVudCA9IG9wdGlvbnMucmVwbGFjZShub2RlKTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHJlcGxhY2VFbGVtZW50KSkge1xuICAgICAgICAvLyBzZXQgXCJrZXlcIiBwcm9wIGZvciBzaWJsaW5nIGVsZW1lbnRzXG4gICAgICAgIC8vIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzXG4gICAgICAgIGlmIChsZW4gPiAxKSB7XG4gICAgICAgICAgcmVwbGFjZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQocmVwbGFjZUVsZW1lbnQsIHtcbiAgICAgICAgICAgIGtleTogcmVwbGFjZUVsZW1lbnQua2V5IHx8IGlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChyZXBsYWNlRWxlbWVudCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgLy8gaWYgdHJpbSBvcHRpb24gaXMgZW5hYmxlZCwgc2tpcCB3aGl0ZXNwYWNlIHRleHQgbm9kZXNcbiAgICAgIGlmICh0cmltKSB7XG4gICAgICAgIGRhdGEgPSBub2RlLmRhdGEudHJpbSgpO1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKG5vZGUuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKG5vZGUuZGF0YSk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwcm9wcyA9IG5vZGUuYXR0cmlicztcbiAgICBpZiAoc2tpcEF0dHJpYnV0ZXNUb1Byb3BzKG5vZGUpKSB7XG4gICAgICBzZXRTdHlsZVByb3AocHJvcHMuc3R5bGUsIHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzKSB7XG4gICAgICBwcm9wcyA9IGF0dHJpYnV0ZXNUb1Byb3BzKHByb3BzKTtcbiAgICB9XG5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG5cbiAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2NyaXB0JzpcbiAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgLy8gcHJldmVudCB0ZXh0IGluIDxzY3JpcHQ+IG9yIDxzdHlsZT4gZnJvbSBiZWluZyBlc2NhcGVkXG4gICAgICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9kb20tZWxlbWVudHMuaHRtbCNkYW5nZXJvdXNseXNldGlubmVyaHRtbFxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlblswXSkge1xuICAgICAgICAgIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0ge1xuICAgICAgICAgICAgX19odG1sOiBub2RlLmNoaWxkcmVuWzBdLmRhdGFcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd0YWcnOlxuICAgICAgICAvLyBzZXR0aW5nIHRleHRhcmVhIHZhbHVlIGluIGNoaWxkcmVuIGlzIGFuIGFudGlwYXR0ZXJuIGluIFJlYWN0XG4gICAgICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9mb3Jtcy5odG1sI3RoZS10ZXh0YXJlYS10YWdcbiAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gJ3RleHRhcmVhJyAmJiBub2RlLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgICAgcHJvcHMuZGVmYXVsdFZhbHVlID0gbm9kZS5jaGlsZHJlblswXS5kYXRhO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBjb250aW51ZSByZWN1cnNpb24gb2YgY3JlYXRpbmcgUmVhY3QgZWxlbWVudHMgKGlmIGFwcGxpY2FibGUpXG4gICAgICAgICAgY2hpbGRyZW4gPSBkb21Ub1JlYWN0KG5vZGUuY2hpbGRyZW4sIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBza2lwIGFsbCBvdGhlciBjYXNlcyAoZS5nLiwgY29tbWVudClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHNldCBcImtleVwiIHByb3AgZm9yIHNpYmxpbmcgZWxlbWVudHNcbiAgICAvLyBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmcta2V5c1xuICAgIGlmIChsZW4gPiAxKSB7XG4gICAgICBwcm9wcy5rZXkgPSBpO1xuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKGNyZWF0ZUVsZW1lbnQobm9kZS5uYW1lLCBwcm9wcywgY2hpbGRyZW4pKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQubGVuZ3RoID09PSAxID8gcmVzdWx0WzBdIDogcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBET00gZWxlbWVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSB0cmFuc2Zvcm1lZCB0byBwcm9wcy5cbiAqIFdlYiBDb21wb25lbnRzIHNob3VsZCBub3QgaGF2ZSB0aGVpciBhdHRyaWJ1dGVzIHRyYW5zZm9ybWVkIGV4Y2VwdCBmb3IgYHN0eWxlYC5cbiAqXG4gKiBAcGFyYW0gIHtEb21FbGVtZW50fSBub2RlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBza2lwQXR0cmlidXRlc1RvUHJvcHMobm9kZSkge1xuICByZXR1cm4gKFxuICAgIHV0aWxpdGllcy5QUkVTRVJWRV9DVVNUT01fQVRUUklCVVRFUyAmJlxuICAgIG5vZGUudHlwZSA9PT0gJ3RhZycgJiZcbiAgICB1dGlsaXRpZXMuaXNDdXN0b21Db21wb25lbnQobm9kZS5uYW1lLCBub2RlLmF0dHJpYnMpXG4gICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tVG9SZWFjdDtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgc3R5bGVUb0pTID0gcmVxdWlyZSgnc3R5bGUtdG8tanMnKS5kZWZhdWx0O1xuXG4vKipcbiAqIFN3YXAga2V5IHdpdGggdmFsdWUgaW4gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBvYmogICAgICAgIC0gVGhlIG9iamVjdC5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBbb3ZlcnJpZGVdIC0gVGhlIG92ZXJyaWRlIG1ldGhvZC5cbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgIC0gVGhlIGludmVydGVkIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gaW52ZXJ0T2JqZWN0KG9iaiwgb3ZlcnJpZGUpIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG5cbiAgdmFyIGtleTtcbiAgdmFyIHZhbHVlO1xuICB2YXIgaXNPdmVycmlkZVByZXNlbnQgPSB0eXBlb2Ygb3ZlcnJpZGUgPT09ICdmdW5jdGlvbic7XG4gIHZhciBvdmVycmlkZXMgPSB7fTtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIGZvciAoa2V5IGluIG9iaikge1xuICAgIHZhbHVlID0gb2JqW2tleV07XG5cbiAgICBpZiAoaXNPdmVycmlkZVByZXNlbnQpIHtcbiAgICAgIG92ZXJyaWRlcyA9IG92ZXJyaWRlKGtleSwgdmFsdWUpO1xuICAgICAgaWYgKG92ZXJyaWRlcyAmJiBvdmVycmlkZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHJlc3VsdFtvdmVycmlkZXNbMF1dID0gb3ZlcnJpZGVzWzFdO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzdWx0W3ZhbHVlXSA9IGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gdGFnIGlzIGEgY3VzdG9tIGNvbXBvbmVudC5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MTYuNi4zL3BhY2thZ2VzL3JlYWN0LWRvbS9zcmMvc2hhcmVkL2lzQ3VzdG9tQ29tcG9uZW50LmpzfVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGh0bWwgdGFnLlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzICAgLSBUaGUgcHJvcHMgYmVpbmcgcGFzc2VkIHRvIHRoZSBlbGVtZW50LlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDdXN0b21Db21wb25lbnQodGFnTmFtZSwgcHJvcHMpIHtcbiAgaWYgKHRhZ05hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgIHJldHVybiBwcm9wcyAmJiB0eXBlb2YgcHJvcHMuaXMgPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgLy8gVGhlc2UgYXJlIHJlc2VydmVkIFNWRyBhbmQgTWF0aE1MIGVsZW1lbnRzLlxuICAgIC8vIFdlIGRvbid0IG1pbmQgdGhpcyB3aGl0ZWxpc3QgdG9vIG11Y2ggYmVjYXVzZSB3ZSBleHBlY3QgaXQgdG8gbmV2ZXIgZ3Jvdy5cbiAgICAvLyBUaGUgYWx0ZXJuYXRpdmUgaXMgdG8gdHJhY2sgdGhlIG5hbWVzcGFjZSBpbiBhIGZldyBwbGFjZXMgd2hpY2ggaXMgY29udm9sdXRlZC5cbiAgICAvLyBodHRwczovL3czYy5naXRodWIuaW8vd2ViY29tcG9uZW50cy9zcGVjL2N1c3RvbS8jY3VzdG9tLWVsZW1lbnRzLWNvcmUtY29uY2VwdHNcbiAgICBjYXNlICdhbm5vdGF0aW9uLXhtbCc6XG4gICAgY2FzZSAnY29sb3ItcHJvZmlsZSc6XG4gICAgY2FzZSAnZm9udC1mYWNlJzpcbiAgICBjYXNlICdmb250LWZhY2Utc3JjJzpcbiAgICBjYXNlICdmb250LWZhY2UtdXJpJzpcbiAgICBjYXNlICdmb250LWZhY2UtZm9ybWF0JzpcbiAgICBjYXNlICdmb250LWZhY2UtbmFtZSc6XG4gICAgY2FzZSAnbWlzc2luZy1nbHlwaCc6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbnZhciBzdHlsZVRvSlNPcHRpb25zID0geyByZWFjdENvbXBhdDogdHJ1ZSB9O1xuXG4vKipcbiAqIFNldHMgc3R5bGUgcHJvcC5cbiAqXG4gKiBAcGFyYW0ge251bGx8dW5kZWZpbmVkfHN0cmluZ30gc3R5bGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICovXG5mdW5jdGlvbiBzZXRTdHlsZVByb3Aoc3R5bGUsIHByb3BzKSB7XG4gIGlmIChzdHlsZSA9PT0gbnVsbCB8fCBzdHlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRyeSB7XG4gICAgcHJvcHMuc3R5bGUgPSBzdHlsZVRvSlMoc3R5bGUsIHN0eWxlVG9KU09wdGlvbnMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwcm9wcy5zdHlsZSA9IHt9O1xuICB9XG59XG5cbi8qKlxuICogQGNvbnN0YW50IHtib29sZWFufVxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTcvMDkvMDgvZG9tLWF0dHJpYnV0ZXMtaW4tcmVhY3QtMTYuaHRtbH1cbiAqL1xudmFyIFBSRVNFUlZFX0NVU1RPTV9BVFRSSUJVVEVTID0gUmVhY3QudmVyc2lvbi5zcGxpdCgnLicpWzBdID49IDE2O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUFJFU0VSVkVfQ1VTVE9NX0FUVFJJQlVURVM6IFBSRVNFUlZFX0NVU1RPTV9BVFRSSUJVVEVTLFxuICBpbnZlcnRPYmplY3Q6IGludmVydE9iamVjdCxcbiAgaXNDdXN0b21Db21wb25lbnQ6IGlzQ3VzdG9tQ29tcG9uZW50LFxuICBzZXRTdHlsZVByb3A6IHNldFN0eWxlUHJvcFxufTtcbiIsIi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIxL2dyYW1tYXIuaHRtbFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3Zpc2lvbm1lZGlhL2Nzcy1wYXJzZS9wdWxsLzQ5I2lzc3VlY29tbWVudC0zMDA4ODAyN1xudmFyIENPTU1FTlRfUkVHRVggPSAvXFwvXFwqW14qXSpcXCorKFteLypdW14qXSpcXCorKSpcXC8vZztcblxudmFyIE5FV0xJTkVfUkVHRVggPSAvXFxuL2c7XG52YXIgV0hJVEVTUEFDRV9SRUdFWCA9IC9eXFxzKi87XG5cbi8vIGRlY2xhcmF0aW9uXG52YXIgUFJPUEVSVFlfUkVHRVggPSAvXihcXCo/Wy0jLypcXFxcXFx3XSsoXFxbWzAtOWEtel8tXStcXF0pPylcXHMqLztcbnZhciBDT0xPTl9SRUdFWCA9IC9eOlxccyovO1xudmFyIFZBTFVFX1JFR0VYID0gL14oKD86Jyg/OlxcXFwnfC4pKj8nfFwiKD86XFxcXFwifC4pKj9cInxcXChbXildKj9cXCl8W159O10pKykvO1xudmFyIFNFTUlDT0xPTl9SRUdFWCA9IC9eWztcXHNdKi87XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9UcmltI1BvbHlmaWxsXG52YXIgVFJJTV9SRUdFWCA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vLyBzdHJpbmdzXG52YXIgTkVXTElORSA9ICdcXG4nO1xudmFyIEZPUldBUkRfU0xBU0ggPSAnLyc7XG52YXIgQVNURVJJU0sgPSAnKic7XG52YXIgRU1QVFlfU1RSSU5HID0gJyc7XG5cbi8vIHR5cGVzXG52YXIgVFlQRV9DT01NRU5UID0gJ2NvbW1lbnQnO1xudmFyIFRZUEVfREVDTEFSQVRJT04gPSAnZGVjbGFyYXRpb24nO1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHlsZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7T2JqZWN0W119XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdHlsZSwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIGlmICghc3R5bGUpIHJldHVybiBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvKipcbiAgICogUG9zaXRpb25hbC5cbiAgICovXG4gIHZhciBsaW5lbm8gPSAxO1xuICB2YXIgY29sdW1uID0gMTtcblxuICAvKipcbiAgICogVXBkYXRlIGxpbmVubyBhbmQgY29sdW1uIGJhc2VkIG9uIGBzdHJgLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbihzdHIpIHtcbiAgICB2YXIgbGluZXMgPSBzdHIubWF0Y2goTkVXTElORV9SRUdFWCk7XG4gICAgaWYgKGxpbmVzKSBsaW5lbm8gKz0gbGluZXMubGVuZ3RoO1xuICAgIHZhciBpID0gc3RyLmxhc3RJbmRleE9mKE5FV0xJTkUpO1xuICAgIGNvbHVtbiA9IH5pID8gc3RyLmxlbmd0aCAtIGkgOiBjb2x1bW4gKyBzdHIubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcmsgcG9zaXRpb24gYW5kIHBhdGNoIGBub2RlLnBvc2l0aW9uYC5cbiAgICpcbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBwb3NpdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB7IGxpbmU6IGxpbmVubywgY29sdW1uOiBjb2x1bW4gfTtcbiAgICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgICAgbm9kZS5wb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihzdGFydCk7XG4gICAgICB3aGl0ZXNwYWNlKCk7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlIHBvc2l0aW9uIGluZm9ybWF0aW9uIGZvciBhIG5vZGUuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcHJvcGVydHkge09iamVjdH0gc3RhcnRcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGVuZFxuICAgKiBAcHJvcGVydHkge3VuZGVmaW5lZHxTdHJpbmd9IHNvdXJjZVxuICAgKi9cbiAgZnVuY3Rpb24gUG9zaXRpb24oc3RhcnQpIHtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5lbmQgPSB7IGxpbmU6IGxpbmVubywgY29sdW1uOiBjb2x1bW4gfTtcbiAgICB0aGlzLnNvdXJjZSA9IG9wdGlvbnMuc291cmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vbi1lbnVtZXJhYmxlIHNvdXJjZSBzdHJpbmcuXG4gICAqL1xuICBQb3NpdGlvbi5wcm90b3R5cGUuY29udGVudCA9IHN0eWxlO1xuXG4gIHZhciBlcnJvcnNMaXN0ID0gW107XG5cbiAgLyoqXG4gICAqIEVycm9yIGBtc2dgLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbXNnXG4gICAqIEB0aHJvd3Mge0Vycm9yfVxuICAgKi9cbiAgZnVuY3Rpb24gZXJyb3IobXNnKSB7XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgIG9wdGlvbnMuc291cmNlICsgJzonICsgbGluZW5vICsgJzonICsgY29sdW1uICsgJzogJyArIG1zZ1xuICAgICk7XG4gICAgZXJyLnJlYXNvbiA9IG1zZztcbiAgICBlcnIuZmlsZW5hbWUgPSBvcHRpb25zLnNvdXJjZTtcbiAgICBlcnIubGluZSA9IGxpbmVubztcbiAgICBlcnIuY29sdW1uID0gY29sdW1uO1xuICAgIGVyci5zb3VyY2UgPSBzdHlsZTtcblxuICAgIGlmIChvcHRpb25zLnNpbGVudCkge1xuICAgICAgZXJyb3JzTGlzdC5wdXNoKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWF0Y2ggYHJlYCBhbmQgcmV0dXJuIGNhcHR1cmVzLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVcbiAgICogQHJldHVybiB7dW5kZWZpbmVkfEFycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gbWF0Y2gocmUpIHtcbiAgICB2YXIgbSA9IHJlLmV4ZWMoc3R5bGUpO1xuICAgIGlmICghbSkgcmV0dXJuO1xuICAgIHZhciBzdHIgPSBtWzBdO1xuICAgIHVwZGF0ZVBvc2l0aW9uKHN0cik7XG4gICAgc3R5bGUgPSBzdHlsZS5zbGljZShzdHIubGVuZ3RoKTtcbiAgICByZXR1cm4gbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB3aGl0ZXNwYWNlLlxuICAgKi9cbiAgZnVuY3Rpb24gd2hpdGVzcGFjZSgpIHtcbiAgICBtYXRjaChXSElURVNQQUNFX1JFR0VYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBjb21tZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3RbXX0gW3J1bGVzXVxuICAgKiBAcmV0dXJuIHtPYmplY3RbXX1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbW1lbnRzKHJ1bGVzKSB7XG4gICAgdmFyIGM7XG4gICAgcnVsZXMgPSBydWxlcyB8fCBbXTtcbiAgICB3aGlsZSAoKGMgPSBjb21tZW50KCkpKSB7XG4gICAgICBpZiAoYyAhPT0gZmFsc2UpIHtcbiAgICAgICAgcnVsZXMucHVzaChjKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGNvbW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICogQHRocm93cyB7RXJyb3J9XG4gICAqL1xuICBmdW5jdGlvbiBjb21tZW50KCkge1xuICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xuICAgIGlmIChGT1JXQVJEX1NMQVNIICE9IHN0eWxlLmNoYXJBdCgwKSB8fCBBU1RFUklTSyAhPSBzdHlsZS5jaGFyQXQoMSkpIHJldHVybjtcblxuICAgIHZhciBpID0gMjtcbiAgICB3aGlsZSAoXG4gICAgICBFTVBUWV9TVFJJTkcgIT0gc3R5bGUuY2hhckF0KGkpICYmXG4gICAgICAoQVNURVJJU0sgIT0gc3R5bGUuY2hhckF0KGkpIHx8IEZPUldBUkRfU0xBU0ggIT0gc3R5bGUuY2hhckF0KGkgKyAxKSlcbiAgICApIHtcbiAgICAgICsraTtcbiAgICB9XG4gICAgaSArPSAyO1xuXG4gICAgaWYgKEVNUFRZX1NUUklORyA9PT0gc3R5bGUuY2hhckF0KGkgLSAxKSkge1xuICAgICAgcmV0dXJuIGVycm9yKCdFbmQgb2YgY29tbWVudCBtaXNzaW5nJyk7XG4gICAgfVxuXG4gICAgdmFyIHN0ciA9IHN0eWxlLnNsaWNlKDIsIGkgLSAyKTtcbiAgICBjb2x1bW4gKz0gMjtcbiAgICB1cGRhdGVQb3NpdGlvbihzdHIpO1xuICAgIHN0eWxlID0gc3R5bGUuc2xpY2UoaSk7XG4gICAgY29sdW1uICs9IDI7XG5cbiAgICByZXR1cm4gcG9zKHtcbiAgICAgIHR5cGU6IFRZUEVfQ09NTUVOVCxcbiAgICAgIGNvbW1lbnQ6IHN0clxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGRlY2xhcmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqIEB0aHJvd3Mge0Vycm9yfVxuICAgKi9cbiAgZnVuY3Rpb24gZGVjbGFyYXRpb24oKSB7XG4gICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XG5cbiAgICAvLyBwcm9wXG4gICAgdmFyIHByb3AgPSBtYXRjaChQUk9QRVJUWV9SRUdFWCk7XG4gICAgaWYgKCFwcm9wKSByZXR1cm47XG4gICAgY29tbWVudCgpO1xuXG4gICAgLy8gOlxuICAgIGlmICghbWF0Y2goQ09MT05fUkVHRVgpKSByZXR1cm4gZXJyb3IoXCJwcm9wZXJ0eSBtaXNzaW5nICc6J1wiKTtcblxuICAgIC8vIHZhbFxuICAgIHZhciB2YWwgPSBtYXRjaChWQUxVRV9SRUdFWCk7XG5cbiAgICB2YXIgcmV0ID0gcG9zKHtcbiAgICAgIHR5cGU6IFRZUEVfREVDTEFSQVRJT04sXG4gICAgICBwcm9wZXJ0eTogdHJpbShwcm9wWzBdLnJlcGxhY2UoQ09NTUVOVF9SRUdFWCwgRU1QVFlfU1RSSU5HKSksXG4gICAgICB2YWx1ZTogdmFsXG4gICAgICAgID8gdHJpbSh2YWxbMF0ucmVwbGFjZShDT01NRU5UX1JFR0VYLCBFTVBUWV9TVFJJTkcpKVxuICAgICAgICA6IEVNUFRZX1NUUklOR1xuICAgIH0pO1xuXG4gICAgLy8gO1xuICAgIG1hdGNoKFNFTUlDT0xPTl9SRUdFWCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGRlY2xhcmF0aW9ucy5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0W119XG4gICAqL1xuICBmdW5jdGlvbiBkZWNsYXJhdGlvbnMoKSB7XG4gICAgdmFyIGRlY2xzID0gW107XG5cbiAgICBjb21tZW50cyhkZWNscyk7XG5cbiAgICAvLyBkZWNsYXJhdGlvbnNcbiAgICB2YXIgZGVjbDtcbiAgICB3aGlsZSAoKGRlY2wgPSBkZWNsYXJhdGlvbigpKSkge1xuICAgICAgaWYgKGRlY2wgIT09IGZhbHNlKSB7XG4gICAgICAgIGRlY2xzLnB1c2goZGVjbCk7XG4gICAgICAgIGNvbW1lbnRzKGRlY2xzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVjbHM7XG4gIH1cblxuICB3aGl0ZXNwYWNlKCk7XG4gIHJldHVybiBkZWNsYXJhdGlvbnMoKTtcbn07XG5cbi8qKlxuICogVHJpbSBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIgPyBzdHIucmVwbGFjZShUUklNX1JFR0VYLCBFTVBUWV9TVFJJTkcpIDogRU1QVFlfU1RSSU5HO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgUHVyZUNvbXBvbmVudCwgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcblxuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbnZhciBBY2NvcmRpb25TdG9yZSA9IGZ1bmN0aW9uIEFjY29yZGlvblN0b3JlKF9yZWYpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgX3JlZiRleHBhbmRlZCA9IF9yZWYuZXhwYW5kZWQsXG4gICAgICBfZXhwYW5kZWQgPSBfcmVmJGV4cGFuZGVkID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkZXhwYW5kZWQsXG4gICAgICBfcmVmJGFsbG93TXVsdGlwbGVFeHAgPSBfcmVmLmFsbG93TXVsdGlwbGVFeHBhbmRlZCxcbiAgICAgIGFsbG93TXVsdGlwbGVFeHBhbmRlZCA9IF9yZWYkYWxsb3dNdWx0aXBsZUV4cCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGFsbG93TXVsdGlwbGVFeHAsXG4gICAgICBfcmVmJGFsbG93WmVyb0V4cGFuZGUgPSBfcmVmLmFsbG93WmVyb0V4cGFuZGVkLFxuICAgICAgYWxsb3daZXJvRXhwYW5kZWQgPSBfcmVmJGFsbG93WmVyb0V4cGFuZGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhbGxvd1plcm9FeHBhbmRlO1xuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY2NvcmRpb25TdG9yZSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXhwYW5kZWRcIiwgdm9pZCAwKTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhbGxvd011bHRpcGxlRXhwYW5kZWRcIiwgdm9pZCAwKTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhbGxvd1plcm9FeHBhbmRlZFwiLCB2b2lkIDApO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvZ2dsZUV4cGFuZGVkXCIsIGZ1bmN0aW9uICh1dWlkKSB7XG4gICAgaWYgKF90aGlzLmlzSXRlbURpc2FibGVkKHV1aWQpKSB7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgdmFyIGlzRXhwYW5kZWQgPSBfdGhpcy5pc0l0ZW1FeHBhbmRlZCh1dWlkKTtcblxuICAgIGlmICghaXNFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuIF90aGlzLmF1Z21lbnQoe1xuICAgICAgICBleHBhbmRlZDogX3RoaXMuYWxsb3dNdWx0aXBsZUV4cGFuZGVkID8gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShfdGhpcy5leHBhbmRlZCksIFt1dWlkXSkgOiBbdXVpZF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3RoaXMuYXVnbWVudCh7XG4gICAgICAgIGV4cGFuZGVkOiBfdGhpcy5leHBhbmRlZC5maWx0ZXIoZnVuY3Rpb24gKGV4cGFuZGVkVXVpZCkge1xuICAgICAgICAgIHJldHVybiBleHBhbmRlZFV1aWQgIT09IHV1aWQ7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzSXRlbURpc2FibGVkXCIsIGZ1bmN0aW9uICh1dWlkKSB7XG4gICAgdmFyIGlzRXhwYW5kZWQgPSBfdGhpcy5pc0l0ZW1FeHBhbmRlZCh1dWlkKTtcblxuICAgIHZhciBpc09ubHlPbmVFeHBhbmRlZCA9IF90aGlzLmV4cGFuZGVkLmxlbmd0aCA9PT0gMTtcbiAgICByZXR1cm4gQm9vbGVhbihpc0V4cGFuZGVkICYmICFfdGhpcy5hbGxvd1plcm9FeHBhbmRlZCAmJiBpc09ubHlPbmVFeHBhbmRlZCk7XG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzSXRlbUV4cGFuZGVkXCIsIGZ1bmN0aW9uICh1dWlkKSB7XG4gICAgcmV0dXJuIF90aGlzLmV4cGFuZGVkLmluZGV4T2YodXVpZCkgIT09IC0xO1xuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRQYW5lbEF0dHJpYnV0ZXNcIiwgZnVuY3Rpb24gKHV1aWQsIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQpIHtcbiAgICB2YXIgZXhwYW5kZWQgPSBkYW5nZXJvdXNseVNldEV4cGFuZGVkICE9PSBudWxsICYmIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgIT09IHZvaWQgMCA/IGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgOiBfdGhpcy5pc0l0ZW1FeHBhbmRlZCh1dWlkKTtcbiAgICByZXR1cm4ge1xuICAgICAgcm9sZTogX3RoaXMuYWxsb3dNdWx0aXBsZUV4cGFuZGVkID8gdW5kZWZpbmVkIDogJ3JlZ2lvbicsXG4gICAgICAnYXJpYS1oaWRkZW4nOiBfdGhpcy5hbGxvd011bHRpcGxlRXhwYW5kZWQgPyAhZXhwYW5kZWQgOiB1bmRlZmluZWQsXG4gICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogX3RoaXMuZ2V0QnV0dG9uSWQodXVpZCksXG4gICAgICBpZDogX3RoaXMuZ2V0UGFuZWxJZCh1dWlkKSxcbiAgICAgIGhpZGRlbjogZXhwYW5kZWQgPyB1bmRlZmluZWQgOiB0cnVlXG4gICAgfTtcbiAgfSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0SGVhZGluZ0F0dHJpYnV0ZXNcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICByb2xlOiAnaGVhZGluZydcbiAgICB9O1xuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRCdXR0b25BdHRyaWJ1dGVzXCIsIGZ1bmN0aW9uICh1dWlkLCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKSB7XG4gICAgdmFyIGV4cGFuZGVkID0gZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCAhPT0gbnVsbCAmJiBkYW5nZXJvdXNseVNldEV4cGFuZGVkICE9PSB2b2lkIDAgPyBkYW5nZXJvdXNseVNldEV4cGFuZGVkIDogX3RoaXMuaXNJdGVtRXhwYW5kZWQodXVpZCk7XG5cbiAgICB2YXIgZGlzYWJsZWQgPSBfdGhpcy5pc0l0ZW1EaXNhYmxlZCh1dWlkKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpZDogX3RoaXMuZ2V0QnV0dG9uSWQodXVpZCksXG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBleHBhbmRlZCxcbiAgICAgICdhcmlhLWNvbnRyb2xzJzogX3RoaXMuZ2V0UGFuZWxJZCh1dWlkKSxcbiAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgdGFiSW5kZXg6IDBcbiAgICB9O1xuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRQYW5lbElkXCIsIGZ1bmN0aW9uICh1dWlkKSB7XG4gICAgcmV0dXJuIFwiYWNjb3JkaW9uX19wYW5lbC1cIi5jb25jYXQodXVpZCk7XG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEJ1dHRvbklkXCIsIGZ1bmN0aW9uICh1dWlkKSB7XG4gICAgcmV0dXJuIFwiYWNjb3JkaW9uX19oZWFkaW5nLVwiLmNvbmNhdCh1dWlkKTtcbiAgfSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXVnbWVudFwiLCBmdW5jdGlvbiAoYXJncykge1xuICAgIHJldHVybiBuZXcgQWNjb3JkaW9uU3RvcmUoX29iamVjdFNwcmVhZDIoe1xuICAgICAgZXhwYW5kZWQ6IF90aGlzLmV4cGFuZGVkLFxuICAgICAgYWxsb3dNdWx0aXBsZUV4cGFuZGVkOiBfdGhpcy5hbGxvd011bHRpcGxlRXhwYW5kZWQsXG4gICAgICBhbGxvd1plcm9FeHBhbmRlZDogX3RoaXMuYWxsb3daZXJvRXhwYW5kZWRcbiAgICB9LCBhcmdzKSk7XG4gIH0pO1xuXG4gIHRoaXMuZXhwYW5kZWQgPSBfZXhwYW5kZWQ7XG4gIHRoaXMuYWxsb3dNdWx0aXBsZUV4cGFuZGVkID0gYWxsb3dNdWx0aXBsZUV4cGFuZGVkO1xuICB0aGlzLmFsbG93WmVyb0V4cGFuZGVkID0gYWxsb3daZXJvRXhwYW5kZWQ7XG59O1xuXG52YXIgQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KG51bGwpO1xudmFyIFByb3ZpZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUHJvdmlkZXIsIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFByb3ZpZGVyKTtcblxuICBmdW5jdGlvbiBQcm92aWRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvdmlkZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGF0ZVwiLCBuZXcgQWNjb3JkaW9uU3RvcmUoe1xuICAgICAgZXhwYW5kZWQ6IF90aGlzLnByb3BzLnByZUV4cGFuZGVkLFxuICAgICAgYWxsb3dNdWx0aXBsZUV4cGFuZGVkOiBfdGhpcy5wcm9wcy5hbGxvd011bHRpcGxlRXhwYW5kZWQsXG4gICAgICBhbGxvd1plcm9FeHBhbmRlZDogX3RoaXMucHJvcHMuYWxsb3daZXJvRXhwYW5kZWRcbiAgICB9KSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidG9nZ2xlRXhwYW5kZWRcIiwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS50b2dnbGVFeHBhbmRlZChrZXkpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShfdGhpcy5zdGF0ZS5leHBhbmRlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImlzSXRlbURpc2FibGVkXCIsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5pc0l0ZW1EaXNhYmxlZChrZXkpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImlzSXRlbUV4cGFuZGVkXCIsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5pc0l0ZW1FeHBhbmRlZChrZXkpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldFBhbmVsQXR0cmlidXRlc1wiLCBmdW5jdGlvbiAoa2V5LCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc3RhdGUuZ2V0UGFuZWxBdHRyaWJ1dGVzKGtleSwgZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0SGVhZGluZ0F0dHJpYnV0ZXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gdXVpZDogVVVJRFxuICAgICAgcmV0dXJuIF90aGlzLnN0YXRlLmdldEhlYWRpbmdBdHRyaWJ1dGVzKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0QnV0dG9uQXR0cmlidXRlc1wiLCBmdW5jdGlvbiAoa2V5LCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc3RhdGUuZ2V0QnV0dG9uQXR0cmlidXRlcyhrZXksIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFByb3ZpZGVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBhbGxvd1plcm9FeHBhbmRlZCA9IF90aGlzJHN0YXRlLmFsbG93WmVyb0V4cGFuZGVkLFxuICAgICAgICAgIGFsbG93TXVsdGlwbGVFeHBhbmRlZCA9IF90aGlzJHN0YXRlLmFsbG93TXVsdGlwbGVFeHBhbmRlZDtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgYWxsb3dNdWx0aXBsZUV4cGFuZGVkOiBhbGxvd011bHRpcGxlRXhwYW5kZWQsXG4gICAgICAgICAgYWxsb3daZXJvRXhwYW5kZWQ6IGFsbG93WmVyb0V4cGFuZGVkLFxuICAgICAgICAgIHRvZ2dsZUV4cGFuZGVkOiB0aGlzLnRvZ2dsZUV4cGFuZGVkLFxuICAgICAgICAgIGlzSXRlbURpc2FibGVkOiB0aGlzLmlzSXRlbURpc2FibGVkLFxuICAgICAgICAgIGlzSXRlbUV4cGFuZGVkOiB0aGlzLmlzSXRlbUV4cGFuZGVkLFxuICAgICAgICAgIGdldFBhbmVsQXR0cmlidXRlczogdGhpcy5nZXRQYW5lbEF0dHJpYnV0ZXMsXG4gICAgICAgICAgZ2V0SGVhZGluZ0F0dHJpYnV0ZXM6IHRoaXMuZ2V0SGVhZGluZ0F0dHJpYnV0ZXMsXG4gICAgICAgICAgZ2V0QnV0dG9uQXR0cmlidXRlczogdGhpcy5nZXRCdXR0b25BdHRyaWJ1dGVzXG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgbnVsbCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFByb3ZpZGVyO1xufShQdXJlQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KFByb3ZpZGVyLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGFsbG93TXVsdGlwbGVFeHBhbmRlZDogZmFsc2UsXG4gIGFsbG93WmVyb0V4cGFuZGVkOiBmYWxzZVxufSk7XG5cbnZhciBDb25zdW1lciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhDb25zdW1lciwgX1JlYWN0JFB1cmVDb21wb25lbnQyKTtcblxuICB2YXIgX3N1cGVyMiA9IF9jcmVhdGVTdXBlcihDb25zdW1lcik7XG5cbiAgZnVuY3Rpb24gQ29uc3VtZXIoKSB7XG4gICAgdmFyIF90aGlzMjtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25zdW1lcik7XG5cbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICBfdGhpczIgPSBfc3VwZXIyLmNhbGwuYXBwbHkoX3N1cGVyMiwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczIpLCBcInJlbmRlckNoaWxkcmVuXCIsIGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAgIHJldHVybiBjb250YWluZXIgPyBfdGhpczIucHJvcHMuY2hpbGRyZW4oY29udGFpbmVyKSA6IG51bGw7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvbnN1bWVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbnRleHQuQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyQ2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb25zdW1lcjtcbn0oUHVyZUNvbXBvbmVudCk7XG5cbnZhciBBY2NvcmRpb24gPSBmdW5jdGlvbiBBY2NvcmRpb24oX3JlZikge1xuICB2YXIgX3JlZiRjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYkY2xhc3NOYW1lID09PSB2b2lkIDAgPyAnYWNjb3JkaW9uJyA6IF9yZWYkY2xhc3NOYW1lLFxuICAgICAgYWxsb3dNdWx0aXBsZUV4cGFuZGVkID0gX3JlZi5hbGxvd011bHRpcGxlRXhwYW5kZWQsXG4gICAgICBhbGxvd1plcm9FeHBhbmRlZCA9IF9yZWYuYWxsb3daZXJvRXhwYW5kZWQsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBwcmVFeHBhbmRlZCA9IF9yZWYucHJlRXhwYW5kZWQsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImNsYXNzTmFtZVwiLCBcImFsbG93TXVsdGlwbGVFeHBhbmRlZFwiLCBcImFsbG93WmVyb0V4cGFuZGVkXCIsIFwib25DaGFuZ2VcIiwgXCJwcmVFeHBhbmRlZFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFByb3ZpZGVyLCB7XG4gICAgcHJlRXhwYW5kZWQ6IHByZUV4cGFuZGVkLFxuICAgIGFsbG93TXVsdGlwbGVFeHBhbmRlZDogYWxsb3dNdWx0aXBsZUV4cGFuZGVkLFxuICAgIGFsbG93WmVyb0V4cGFuZGVkOiBhbGxvd1plcm9FeHBhbmRlZCxcbiAgICBvbkNoYW5nZTogb25DaGFuZ2VcbiAgfSwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIFwiZGF0YS1hY2NvcmRpb24tY29tcG9uZW50XCI6IFwiQWNjb3JkaW9uXCIsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgfSwgcmVzdCkpKTtcbn07XG5cbnZhciBEaXNwbGF5TmFtZTtcblxuKGZ1bmN0aW9uIChEaXNwbGF5TmFtZSkge1xuICBEaXNwbGF5TmFtZVtcIkFjY29yZGlvblwiXSA9IFwiQWNjb3JkaW9uXCI7XG4gIERpc3BsYXlOYW1lW1wiQWNjb3JkaW9uSXRlbVwiXSA9IFwiQWNjb3JkaW9uSXRlbVwiO1xuICBEaXNwbGF5TmFtZVtcIkFjY29yZGlvbkl0ZW1CdXR0b25cIl0gPSBcIkFjY29yZGlvbkl0ZW1CdXR0b25cIjtcbiAgRGlzcGxheU5hbWVbXCJBY2NvcmRpb25JdGVtSGVhZGluZ1wiXSA9IFwiQWNjb3JkaW9uSXRlbUhlYWRpbmdcIjtcbiAgRGlzcGxheU5hbWVbXCJBY2NvcmRpb25JdGVtUGFuZWxcIl0gPSBcIkFjY29yZGlvbkl0ZW1QYW5lbFwiO1xufSkoRGlzcGxheU5hbWUgfHwgKERpc3BsYXlOYW1lID0ge30pKTtcblxudmFyIERpc3BsYXlOYW1lJDEgPSBEaXNwbGF5TmFtZTtcblxudmFyIERFRkFVTFQgPSAwO1xudmFyIGNvdW50ZXIgPSBERUZBVUxUO1xuZnVuY3Rpb24gbmV4dFV1aWQoKSB7XG4gIHZhciBjdXJyZW50ID0gY291bnRlcjtcbiAgY291bnRlciA9IGNvdW50ZXIgKyAxO1xuICByZXR1cm4gXCJyYWEtXCIuY29uY2F0KGN1cnJlbnQpO1xufVxuZnVuY3Rpb24gcmVzZXROZXh0VXVpZCgpIHtcbiAgY291bnRlciA9IERFRkFVTFQ7XG59IC8vIEhUTUw1IGlkcyBhbGxvdyBhbGwgdW5pY29kZSBjaGFyYWN0ZXJzLCBleGNlcHQgZm9yIEFTQ0lJIHdoaXRlc3BhY2VzXG4vLyBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktd2hpdGVzcGFjZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcblxudmFyIGlkUmVnZXggPSAvW1xcdTAwMDlcXHUwMDBhXFx1MDAwY1xcdTAwMGRcXHUwMDIwXS9nO1xuZnVuY3Rpb24gYXNzZXJ0VmFsaWRIdG1sSWQoaHRtbElkKSB7XG4gIGlmIChodG1sSWQgPT09ICcnIHx8IGlkUmVnZXgudGVzdChodG1sSWQpKSB7XG4gICAgY29uc29sZS5lcnJvcihcInV1aWQgbXVzdCBiZSBhIHZhbGlkIEhUTUw1IGlkIGJ1dCB3YXMgZ2l2ZW4gXFxcIlwiLmNvbmNhdChodG1sSWQsIFwiXFxcIiwgQVNDSUkgd2hpdGVzcGFjZXMgYXJlIGZvcmJpZGRlblwiKSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBDb250ZXh0JDEgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dChudWxsKTtcblxudmFyIFByb3ZpZGVyJDEgPSBmdW5jdGlvbiBQcm92aWRlcihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICB1dWlkID0gX3JlZi51dWlkLFxuICAgICAgYWNjb3JkaW9uQ29udGV4dCA9IF9yZWYuYWNjb3JkaW9uQ29udGV4dCxcbiAgICAgIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgPSBfcmVmLmRhbmdlcm91c2x5U2V0RXhwYW5kZWQ7XG5cbiAgdmFyIHRvZ2dsZUV4cGFuZGVkID0gZnVuY3Rpb24gdG9nZ2xlRXhwYW5kZWQoKSB7XG4gICAgYWNjb3JkaW9uQ29udGV4dC50b2dnbGVFeHBhbmRlZCh1dWlkKTtcbiAgfTtcblxuICB2YXIgcmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbihhY2NvcmRpb25Db250ZXh0KSB7XG4gICAgdmFyIGV4cGFuZGVkID0gZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCAhPT0gbnVsbCAmJiBkYW5nZXJvdXNseVNldEV4cGFuZGVkICE9PSB2b2lkIDAgPyBkYW5nZXJvdXNseVNldEV4cGFuZGVkIDogYWNjb3JkaW9uQ29udGV4dC5pc0l0ZW1FeHBhbmRlZCh1dWlkKTtcbiAgICB2YXIgZGlzYWJsZWQgPSBhY2NvcmRpb25Db250ZXh0LmlzSXRlbURpc2FibGVkKHV1aWQpO1xuICAgIHZhciBwYW5lbEF0dHJpYnV0ZXMgPSBhY2NvcmRpb25Db250ZXh0LmdldFBhbmVsQXR0cmlidXRlcyh1dWlkLCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKTtcbiAgICB2YXIgaGVhZGluZ0F0dHJpYnV0ZXMgPSBhY2NvcmRpb25Db250ZXh0LmdldEhlYWRpbmdBdHRyaWJ1dGVzKHV1aWQpO1xuICAgIHZhciBidXR0b25BdHRyaWJ1dGVzID0gYWNjb3JkaW9uQ29udGV4dC5nZXRCdXR0b25BdHRyaWJ1dGVzKHV1aWQsIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb250ZXh0JDEuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICAgIGV4cGFuZGVkOiBleHBhbmRlZCxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICB0b2dnbGVFeHBhbmRlZDogdG9nZ2xlRXhwYW5kZWQsXG4gICAgICAgIHBhbmVsQXR0cmlidXRlczogcGFuZWxBdHRyaWJ1dGVzLFxuICAgICAgICBoZWFkaW5nQXR0cmlidXRlczogaGVhZGluZ0F0dHJpYnV0ZXMsXG4gICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXM6IGJ1dHRvbkF0dHJpYnV0ZXNcbiAgICAgIH1cbiAgICB9LCBjaGlsZHJlbik7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbnN1bWVyLCBudWxsLCByZW5kZXJDaGlsZHJlbik7XG59O1xuXG52YXIgUHJvdmlkZXJXcmFwcGVyID0gZnVuY3Rpb24gUHJvdmlkZXJXcmFwcGVyKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGFjY29yZGlvbkNvbnRleHQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoUHJvdmlkZXIkMSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBhY2NvcmRpb25Db250ZXh0OiBhY2NvcmRpb25Db250ZXh0XG4gICAgfSkpO1xuICB9KTtcbn07XG52YXIgQ29uc3VtZXIkMSA9IGZ1bmN0aW9uIENvbnN1bWVyKF9yZWYyKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuO1xuXG4gIHZhciByZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKGNvbnRhaW5lcikge1xuICAgIHJldHVybiBjb250YWluZXIgPyBjaGlsZHJlbihjb250YWluZXIpIDogbnVsbDtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQ29udGV4dCQxLkNvbnN1bWVyLCBudWxsLCByZW5kZXJDaGlsZHJlbik7XG59O1xuXG52YXIgQWNjb3JkaW9uSXRlbSA9IGZ1bmN0aW9uIEFjY29yZGlvbkl0ZW0oX3JlZikge1xuICB2YXIgY3VzdG9tVXVpZCA9IF9yZWYudXVpZCxcbiAgICAgIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgPSBfcmVmLmRhbmdlcm91c2x5U2V0RXhwYW5kZWQsXG4gICAgICBfcmVmJGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHZvaWQgMCA/ICdhY2NvcmRpb25fX2l0ZW0nIDogX3JlZiRjbGFzc05hbWUsXG4gICAgICBhY3RpdmVDbGFzc05hbWUgPSBfcmVmLmFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1widXVpZFwiLCBcImRhbmdlcm91c2x5U2V0RXhwYW5kZWRcIiwgXCJjbGFzc05hbWVcIiwgXCJhY3RpdmVDbGFzc05hbWVcIl0pO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShuZXh0VXVpZCgpKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDEpLFxuICAgICAgaW5zdGFuY2VVdWlkID0gX3VzZVN0YXRlMlswXTtcblxuICB2YXIgdXVpZCA9IGN1c3RvbVV1aWQgIT09IG51bGwgJiYgY3VzdG9tVXVpZCAhPT0gdm9pZCAwID8gY3VzdG9tVXVpZCA6IGluc3RhbmNlVXVpZDtcblxuICB2YXIgcmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbihpdGVtQ29udGV4dCkge1xuICAgIHZhciBleHBhbmRlZCA9IGl0ZW1Db250ZXh0LmV4cGFuZGVkO1xuICAgIHZhciBjeCA9IGV4cGFuZGVkICYmIGFjdGl2ZUNsYXNzTmFtZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IGNsYXNzTmFtZTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgICAgXCJkYXRhLWFjY29yZGlvbi1jb21wb25lbnRcIjogXCJBY2NvcmRpb25JdGVtXCIsXG4gICAgICBjbGFzc05hbWU6IGN4XG4gICAgfSwgcmVzdCkpO1xuICB9O1xuXG4gIGFzc2VydFZhbGlkSHRtbElkKHV1aWQudG9TdHJpbmcoKSk7XG5cbiAgaWYgKHJlc3QuaWQpIHtcbiAgICBhc3NlcnRWYWxpZEh0bWxJZChyZXN0LmlkKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChQcm92aWRlcldyYXBwZXIsIHtcbiAgICB1dWlkOiB1dWlkLFxuICAgIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQ6IGRhbmdlcm91c2x5U2V0RXhwYW5kZWRcbiAgfSwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQ29uc3VtZXIkMSwgbnVsbCwgcmVuZGVyQ2hpbGRyZW4pKTtcbn07XG5cbkFjY29yZGlvbkl0ZW0uZGlzcGxheU5hbWUgPSBEaXNwbGF5TmFtZSQxLkFjY29yZGlvbkl0ZW07XG5cbmZ1bmN0aW9uIGdldENsb3Nlc3RBY2NvcmRpb24oZWwpIHtcbiAgcmV0dXJuIGVsICYmIChlbC5tYXRjaGVzKCdbZGF0YS1hY2NvcmRpb24tY29tcG9uZW50PVwiQWNjb3JkaW9uXCJdJykgPyBlbCA6IGdldENsb3Nlc3RBY2NvcmRpb24oZWwucGFyZW50RWxlbWVudCkpO1xufVxuZnVuY3Rpb24gZ2V0U2libGluZ0J1dHRvbnMoaXRlbSkge1xuICB2YXIgcGFyZW50QWNjb3JkaW9uID0gZ2V0Q2xvc2VzdEFjY29yZGlvbihpdGVtKTtcbiAgcmV0dXJuIHBhcmVudEFjY29yZGlvbiAmJiBBcnJheS5mcm9tKHBhcmVudEFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hY2NvcmRpb24tY29tcG9uZW50PVwiQWNjb3JkaW9uSXRlbUJ1dHRvblwiXScpKTtcbn1cbmZ1bmN0aW9uIGZvY3VzRmlyc3RTaWJsaW5nT2YoaXRlbSkge1xuICB2YXIgc2libGluZ3MgPSBnZXRTaWJsaW5nQnV0dG9ucyhpdGVtKSB8fCBbXTtcbiAgdmFyIGZpcnN0ID0gc2libGluZ3NbMF07XG5cbiAgaWYgKGZpcnN0KSB7XG4gICAgZmlyc3QuZm9jdXMoKTtcbiAgfVxufVxuZnVuY3Rpb24gZm9jdXNMYXN0U2libGluZ09mKGl0ZW0pIHtcbiAgdmFyIHNpYmxpbmdzID0gZ2V0U2libGluZ0J1dHRvbnMoaXRlbSkgfHwgW107XG4gIHZhciBsYXN0ID0gc2libGluZ3Nbc2libGluZ3MubGVuZ3RoIC0gMV07XG5cbiAgaWYgKGxhc3QpIHtcbiAgICBsYXN0LmZvY3VzKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZvY3VzTmV4dFNpYmxpbmdPZihpdGVtKSB7XG4gIHZhciBzaWJsaW5ncyA9IGdldFNpYmxpbmdCdXR0b25zKGl0ZW0pIHx8IFtdO1xuICB2YXIgY3VycmVudEluZGV4ID0gc2libGluZ3MuaW5kZXhPZihpdGVtKTtcblxuICBpZiAoY3VycmVudEluZGV4ICE9PSAtMSkge1xuICAgIHZhciBuZXh0ID0gc2libGluZ3NbY3VycmVudEluZGV4ICsgMV07XG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgbmV4dC5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZm9jdXNQcmV2aW91c1NpYmxpbmdPZihpdGVtKSB7XG4gIHZhciBzaWJsaW5ncyA9IGdldFNpYmxpbmdCdXR0b25zKGl0ZW0pIHx8IFtdO1xuICB2YXIgY3VycmVudEluZGV4ID0gc2libGluZ3MuaW5kZXhPZihpdGVtKTtcblxuICBpZiAoY3VycmVudEluZGV4ICE9PSAtMSkge1xuICAgIHZhciBwcmV2aW91cyA9IHNpYmxpbmdzW2N1cnJlbnRJbmRleCAtIDFdO1xuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICBwcmV2aW91cy5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuXG52YXIga2V5Y29kZXMgPSB7XG4gIEVORDogJ0VuZCcsXG4gIEVOVEVSOiAnRW50ZXInLFxuICBIT01FOiAnSG9tZScsXG4gIFNQQUNFOiAnICcsXG4gIFNQQUNFX0RFUFJFQ0FURUQ6ICdTcGFjZWJhcicsXG4gIFVQOiAnQXJyb3dVcCcsXG4gIERPV046ICdBcnJvd0Rvd24nLFxuICBMRUZUOiAnQXJyb3dMZWZ0JyxcbiAgUklHSFQ6ICdBcnJvd1JpZ2h0J1xufTtcblxudmFyIEFjY29yZGlvbkl0ZW1CdXR0b24gPSBmdW5jdGlvbiBBY2NvcmRpb25JdGVtQnV0dG9uKF9yZWYpIHtcbiAgdmFyIHRvZ2dsZUV4cGFuZGVkID0gX3JlZi50b2dnbGVFeHBhbmRlZCxcbiAgICAgIF9yZWYkY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gJ2FjY29yZGlvbl9fYnV0dG9uJyA6IF9yZWYkY2xhc3NOYW1lLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJ0b2dnbGVFeHBhbmRlZFwiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgdmFyIGhhbmRsZUtleVByZXNzID0gZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZ0KSB7XG4gICAgdmFyIGtleUNvZGUgPSBldnQua2V5O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IGtleWNvZGVzLkVOVEVSIHx8IGtleUNvZGUgPT09IGtleWNvZGVzLlNQQUNFIHx8IGtleUNvZGUgPT09IGtleWNvZGVzLlNQQUNFX0RFUFJFQ0FURUQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9nZ2xlRXhwYW5kZWQoKTtcbiAgICB9XG4gICAgLyogVGhlIGZvbGxvd2luZyBibG9jayBpcyBpZ25vcmVkIGZyb20gdGVzdCBjb3ZlcmFnZSBiZWNhdXNlIGF0IHRpbWVcbiAgICAgKiB0aW1lIG9mIHdyaXRpbmcgSmVzdC9yZWFjdC10ZXN0aW5nLWxpYnJhcnkgY2FuIG5vdCBhc3NlcnQgJ2ZvY3VzJ1xuICAgICAqIGZ1bmN0aW9uYWxpdHkuXG4gICAgICovXG4gICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuXG4gICAgaWYgKGV2dC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgIGNhc2Uga2V5Y29kZXMuSE9NRTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGZvY3VzRmlyc3RTaWJsaW5nT2YoZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBrZXljb2Rlcy5FTkQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb2N1c0xhc3RTaWJsaW5nT2YoZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBrZXljb2Rlcy5MRUZUOlxuICAgICAgICBjYXNlIGtleWNvZGVzLlVQOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZm9jdXNQcmV2aW91c1NpYmxpbmdPZihldnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIGtleWNvZGVzLlJJR0hUOlxuICAgICAgICBjYXNlIGtleWNvZGVzLkRPV046XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb2N1c05leHRTaWJsaW5nT2YoZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGlmIChyZXN0LmlkKSB7XG4gICAgYXNzZXJ0VmFsaWRIdG1sSWQocmVzdC5pZCk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gIH0sIHJlc3QsIHtcbiAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgIHRhYkluZGV4OiAwLFxuICAgIG9uQ2xpY2s6IHRvZ2dsZUV4cGFuZGVkLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5UHJlc3MsXG4gICAgXCJkYXRhLWFjY29yZGlvbi1jb21wb25lbnRcIjogXCJBY2NvcmRpb25JdGVtQnV0dG9uXCJcbiAgfSkpO1xufTtcblxudmFyIEFjY29yZGlvbkl0ZW1CdXR0b25XcmFwcGVyID0gZnVuY3Rpb24gQWNjb3JkaW9uSXRlbUJ1dHRvbldyYXBwZXIocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbnN1bWVyJDEsIG51bGwsIGZ1bmN0aW9uIChpdGVtQ29udGV4dCkge1xuICAgIHZhciB0b2dnbGVFeHBhbmRlZCA9IGl0ZW1Db250ZXh0LnRvZ2dsZUV4cGFuZGVkLFxuICAgICAgICBidXR0b25BdHRyaWJ1dGVzID0gaXRlbUNvbnRleHQuYnV0dG9uQXR0cmlidXRlcztcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQWNjb3JkaW9uSXRlbUJ1dHRvbiwgX2V4dGVuZHMoe1xuICAgICAgdG9nZ2xlRXhwYW5kZWQ6IHRvZ2dsZUV4cGFuZGVkXG4gICAgfSwgcHJvcHMsIGJ1dHRvbkF0dHJpYnV0ZXMpKTtcbiAgfSk7XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICdhY2NvcmRpb25fX2hlYWRpbmcnLFxuICAnYXJpYS1sZXZlbCc6IDNcbn07XG52YXIgU1BFQ19FUlJPUiA9IFwiQWNjb3JkaW9uSXRlbUJ1dHRvbiBtYXkgY29udGFpbiBvbmx5IG9uZSBjaGlsZCBlbGVtZW50LCB3aGljaCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIEFjY29yZGlvbkl0ZW1CdXR0b24uXFxuXFxuRnJvbSB0aGUgV0FJLUFSSUEgc3BlYyAoaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy0xLjEvI2FjY29yZGlvbik6XFxuXFxuXFx1MjAxQ1RoZSBidXR0b24gZWxlbWVudCBpcyB0aGUgb25seSBlbGVtZW50IGluc2lkZSB0aGUgaGVhZGluZyBlbGVtZW50LiBUaGF0IGlzLCBpZiB0aGVyZSBhcmUgb3RoZXIgdmlzdWFsbHkgcGVyc2lzdGVudCBlbGVtZW50cywgdGhleSBhcmUgbm90IGluY2x1ZGVkIGluc2lkZSB0aGUgaGVhZGluZyBlbGVtZW50LlxcdTIwMURcXG5cXG5cIjtcbnZhciBBY2NvcmRpb25JdGVtSGVhZGluZyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFjY29yZGlvbkl0ZW1IZWFkaW5nLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBY2NvcmRpb25JdGVtSGVhZGluZyk7XG5cbiAgZnVuY3Rpb24gQWNjb3JkaW9uSXRlbUhlYWRpbmcoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjY29yZGlvbkl0ZW1IZWFkaW5nKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVmXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0UmVmXCIsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLnJlZiA9IHJlZjtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBY2NvcmRpb25JdGVtSGVhZGluZywgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIEFjY29yZGlvbkl0ZW1IZWFkaW5nLlZBTElEQVRFKHRoaXMucmVmKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBBY2NvcmRpb25JdGVtSGVhZGluZy5WQUxJREFURSh0aGlzLnJlZik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgICAgICBcImRhdGEtYWNjb3JkaW9uLWNvbXBvbmVudFwiOiBcIkFjY29yZGlvbkl0ZW1IZWFkaW5nXCJcbiAgICAgIH0sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgcmVmOiB0aGlzLnNldFJlZlxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcIlZBTElEQVRFXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIFZBTElEQVRFKHJlZikge1xuICAgICAgaWYgKHJlZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncmVmIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShyZWYuY2hpbGRFbGVtZW50Q291bnQgPT09IDEgJiYgcmVmLmZpcnN0RWxlbWVudENoaWxkICYmIHJlZi5maXJzdEVsZW1lbnRDaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWNjb3JkaW9uLWNvbXBvbmVudCcpID09PSAnQWNjb3JkaW9uSXRlbUJ1dHRvbicpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTUEVDX0VSUk9SKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQWNjb3JkaW9uSXRlbUhlYWRpbmc7XG59KFB1cmVDb21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoQWNjb3JkaW9uSXRlbUhlYWRpbmcsIFwiZGVmYXVsdFByb3BzXCIsIGRlZmF1bHRQcm9wcyk7XG5cbnZhciBBY2NvcmRpb25JdGVtSGVhZGluZ1dyYXBwZXIgPSBmdW5jdGlvbiBBY2NvcmRpb25JdGVtSGVhZGluZ1dyYXBwZXIocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbnN1bWVyJDEsIG51bGwsIGZ1bmN0aW9uIChpdGVtQ29udGV4dCkge1xuICAgIHZhciBoZWFkaW5nQXR0cmlidXRlcyA9IGl0ZW1Db250ZXh0LmhlYWRpbmdBdHRyaWJ1dGVzO1xuXG4gICAgaWYgKHByb3BzLmlkKSB7XG4gICAgICBhc3NlcnRWYWxpZEh0bWxJZChwcm9wcy5pZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KEFjY29yZGlvbkl0ZW1IZWFkaW5nLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIGhlYWRpbmdBdHRyaWJ1dGVzKSk7XG4gIH0pO1xufTtcblxuQWNjb3JkaW9uSXRlbUhlYWRpbmdXcmFwcGVyLmRpc3BsYXlOYW1lID0gRGlzcGxheU5hbWUkMS5BY2NvcmRpb25JdGVtSGVhZGluZztcblxudmFyIEFjY29yZGlvbkl0ZW1QYW5lbCA9IGZ1bmN0aW9uIEFjY29yZGlvbkl0ZW1QYW5lbChfcmVmKSB7XG4gIHZhciBfcmVmJGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHZvaWQgMCA/ICdhY2NvcmRpb25fX3BhbmVsJyA6IF9yZWYkY2xhc3NOYW1lLFxuICAgICAgaWQgPSBfcmVmLmlkLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjbGFzc05hbWVcIiwgXCJpZFwiXSk7XG5cbiAgdmFyIHJlbmRlckNoaWxkcmVuID0gZnVuY3Rpb24gcmVuZGVyQ2hpbGRyZW4oX3JlZjIpIHtcbiAgICB2YXIgcGFuZWxBdHRyaWJ1dGVzID0gX3JlZjIucGFuZWxBdHRyaWJ1dGVzO1xuXG4gICAgaWYgKGlkKSB7XG4gICAgICBhc3NlcnRWYWxpZEh0bWxJZChpZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICAgIFwiZGF0YS1hY2NvcmRpb24tY29tcG9uZW50XCI6IFwiQWNjb3JkaW9uSXRlbVBhbmVsXCIsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgIH0sIHJlc3QsIHBhbmVsQXR0cmlidXRlcykpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb25zdW1lciQxLCBudWxsLCByZW5kZXJDaGlsZHJlbik7XG59O1xuXG52YXIgQWNjb3JkaW9uSXRlbVN0YXRlID0gZnVuY3Rpb24gQWNjb3JkaW9uSXRlbVN0YXRlKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcblxuICB2YXIgcmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbihpdGVtQ29udGV4dCkge1xuICAgIHZhciBleHBhbmRlZCA9IGl0ZW1Db250ZXh0LmV4cGFuZGVkLFxuICAgICAgICBkaXNhYmxlZCA9IGl0ZW1Db250ZXh0LmRpc2FibGVkO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgY2hpbGRyZW4oe1xuICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb25zdW1lciQxLCBudWxsLCByZW5kZXJDaGlsZHJlbik7XG59O1xuXG5leHBvcnQgeyBBY2NvcmRpb24sIEFjY29yZGlvbkl0ZW0sIEFjY29yZGlvbkl0ZW1CdXR0b25XcmFwcGVyIGFzIEFjY29yZGlvbkl0ZW1CdXR0b24sIEFjY29yZGlvbkl0ZW1IZWFkaW5nV3JhcHBlciBhcyBBY2NvcmRpb25JdGVtSGVhZGluZywgQWNjb3JkaW9uSXRlbVBhbmVsLCBBY2NvcmRpb25JdGVtU3RhdGUsIHJlc2V0TmV4dFV1aWQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiLyoqXFxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuKiBEZW1vIHN0eWxlc1xcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbioqL1xcbi5hY2NvcmRpb24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLmFjY29yZGlvbl9faXRlbSArIC5hY2NvcmRpb25fX2l0ZW0ge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uYWNjb3JkaW9uX19idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcbiAgICBjb2xvcjogIzQ0NDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYWNjb3JkaW9uX19idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbn1cXG5cXG4uYWNjb3JkaW9uX19idXR0b246YmVmb3JlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgY3VycmVudENvbG9yO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5hY2NvcmRpb25fX2J1dHRvblthcmlhLWV4cGFuZGVkPSd0cnVlJ106OmJlZm9yZSxcXG4uYWNjb3JkaW9uX19idXR0b25bYXJpYS1zZWxlY3RlZD0ndHJ1ZSddOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFjY29yZGlvbl9fcGFuZWwge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjM1cyBlYXNlLWluO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0gQW5pbWF0aW9uIHBhcnQgLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblwiOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxuLy8gQSByZXNlcnZlZCBhdHRyaWJ1dGUuXG4vLyBJdCBpcyBoYW5kbGVkIGJ5IFJlYWN0IHNlcGFyYXRlbHkgYW5kIHNob3VsZG4ndCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG52YXIgUkVTRVJWRUQgPSAwOyAvLyBBIHNpbXBsZSBzdHJpbmcgYXR0cmlidXRlLlxuLy8gQXR0cmlidXRlcyB0aGF0IGFyZW4ndCBpbiB0aGUgZmlsdGVyIGFyZSBwcmVzdW1lZCB0byBoYXZlIHRoaXMgdHlwZS5cblxudmFyIFNUUklORyA9IDE7IC8vIEEgc3RyaW5nIGF0dHJpYnV0ZSB0aGF0IGFjY2VwdHMgYm9vbGVhbnMgaW4gUmVhY3QuIEluIEhUTUwsIHRoZXNlIGFyZSBjYWxsZWRcbi8vIFwiZW51bWVyYXRlZFwiIGF0dHJpYnV0ZXMgd2l0aCBcInRydWVcIiBhbmQgXCJmYWxzZVwiIGFzIHBvc3NpYmxlIHZhbHVlcy5cbi8vIFdoZW4gdHJ1ZSwgaXQgc2hvdWxkIGJlIHNldCB0byBhIFwidHJ1ZVwiIHN0cmluZy5cbi8vIFdoZW4gZmFsc2UsIGl0IHNob3VsZCBiZSBzZXQgdG8gYSBcImZhbHNlXCIgc3RyaW5nLlxuXG52YXIgQk9PTEVBTklTSF9TVFJJTkcgPSAyOyAvLyBBIHJlYWwgYm9vbGVhbiBhdHRyaWJ1dGUuXG4vLyBXaGVuIHRydWUsIGl0IHNob3VsZCBiZSBwcmVzZW50IChzZXQgZWl0aGVyIHRvIGFuIGVtcHR5IHN0cmluZyBvciBpdHMgbmFtZSkuXG4vLyBXaGVuIGZhbHNlLCBpdCBzaG91bGQgYmUgb21pdHRlZC5cblxudmFyIEJPT0xFQU4gPSAzOyAvLyBBbiBhdHRyaWJ1dGUgdGhhdCBjYW4gYmUgdXNlZCBhcyBhIGZsYWcgYXMgd2VsbCBhcyB3aXRoIGEgdmFsdWUuXG4vLyBXaGVuIHRydWUsIGl0IHNob3VsZCBiZSBwcmVzZW50IChzZXQgZWl0aGVyIHRvIGFuIGVtcHR5IHN0cmluZyBvciBpdHMgbmFtZSkuXG4vLyBXaGVuIGZhbHNlLCBpdCBzaG91bGQgYmUgb21pdHRlZC5cbi8vIEZvciBhbnkgb3RoZXIgdmFsdWUsIHNob3VsZCBiZSBwcmVzZW50IHdpdGggdGhhdCB2YWx1ZS5cblxudmFyIE9WRVJMT0FERURfQk9PTEVBTiA9IDQ7IC8vIEFuIGF0dHJpYnV0ZSB0aGF0IG11c3QgYmUgbnVtZXJpYyBvciBwYXJzZSBhcyBhIG51bWVyaWMuXG4vLyBXaGVuIGZhbHN5LCBpdCBzaG91bGQgYmUgcmVtb3ZlZC5cblxudmFyIE5VTUVSSUMgPSA1OyAvLyBBbiBhdHRyaWJ1dGUgdGhhdCBtdXN0IGJlIHBvc2l0aXZlIG51bWVyaWMgb3IgcGFyc2UgYXMgYSBwb3NpdGl2ZSBudW1lcmljLlxuLy8gV2hlbiBmYWxzeSwgaXQgc2hvdWxkIGJlIHJlbW92ZWQuXG5cbnZhciBQT1NJVElWRV9OVU1FUklDID0gNjtcbmZ1bmN0aW9uIGdldFByb3BlcnR5SW5mbyhuYW1lKSB7XG4gIHJldHVybiBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KG5hbWUpID8gcHJvcGVydGllc1tuYW1lXSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCB0eXBlLCBtdXN0VXNlUHJvcGVydHksIGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZU5hbWVzcGFjZSwgc2FuaXRpemVVUkwsIHJlbW92ZUVtcHR5U3RyaW5nKSB7XG4gIHRoaXMuYWNjZXB0c0Jvb2xlYW5zID0gdHlwZSA9PT0gQk9PTEVBTklTSF9TVFJJTkcgfHwgdHlwZSA9PT0gQk9PTEVBTiB8fCB0eXBlID09PSBPVkVSTE9BREVEX0JPT0xFQU47XG4gIHRoaXMuYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZU5hbWU7XG4gIHRoaXMuYXR0cmlidXRlTmFtZXNwYWNlID0gYXR0cmlidXRlTmFtZXNwYWNlO1xuICB0aGlzLm11c3RVc2VQcm9wZXJ0eSA9IG11c3RVc2VQcm9wZXJ0eTtcbiAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBuYW1lO1xuICB0aGlzLnR5cGUgPSB0eXBlO1xuICB0aGlzLnNhbml0aXplVVJMID0gc2FuaXRpemVVUkw7XG4gIHRoaXMucmVtb3ZlRW1wdHlTdHJpbmcgPSByZW1vdmVFbXB0eVN0cmluZztcbn0gLy8gV2hlbiBhZGRpbmcgYXR0cmlidXRlcyB0byB0aGlzIGxpc3QsIGJlIHN1cmUgdG8gYWxzbyBhZGQgdGhlbSB0b1xuLy8gdGhlIGBwb3NzaWJsZVN0YW5kYXJkTmFtZXNgIG1vZHVsZSB0byBlbnN1cmUgY2FzaW5nIGFuZCBpbmNvcnJlY3Rcbi8vIG5hbWUgd2FybmluZ3MuXG5cblxudmFyIHByb3BlcnRpZXMgPSB7fTsgLy8gVGhlc2UgcHJvcHMgYXJlIHJlc2VydmVkIGJ5IFJlYWN0LiBUaGV5IHNob3VsZG4ndCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG5cbnZhciByZXNlcnZlZFByb3BzID0gWydjaGlsZHJlbicsICdkYW5nZXJvdXNseVNldElubmVySFRNTCcsIC8vIFRPRE86IFRoaXMgcHJldmVudHMgdGhlIGFzc2lnbm1lbnQgb2YgZGVmYXVsdFZhbHVlIHRvIHJlZ3VsYXJcbi8vIGVsZW1lbnRzIChub3QganVzdCBpbnB1dHMpLiBOb3cgdGhhdCBSZWFjdERPTUlucHV0IGFzc2lnbnMgdG8gdGhlXG4vLyBkZWZhdWx0VmFsdWUgcHJvcGVydHkgLS0gZG8gd2UgbmVlZCB0aGlzP1xuJ2RlZmF1bHRWYWx1ZScsICdkZWZhdWx0Q2hlY2tlZCcsICdpbm5lckhUTUwnLCAnc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nJywgJ3N1cHByZXNzSHlkcmF0aW9uV2FybmluZycsICdzdHlsZSddO1xucmVzZXJ2ZWRQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFJFU0VSVkVELCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gQSBmZXcgUmVhY3Qgc3RyaW5nIGF0dHJpYnV0ZXMgaGF2ZSBhIGRpZmZlcmVudCBuYW1lLlxuLy8gVGhpcyBpcyBhIG1hcHBpbmcgZnJvbSBSZWFjdCBwcm9wIG5hbWVzIHRvIHRoZSBhdHRyaWJ1dGUgbmFtZXMuXG5cbltbJ2FjY2VwdENoYXJzZXQnLCAnYWNjZXB0LWNoYXJzZXQnXSwgWydjbGFzc05hbWUnLCAnY2xhc3MnXSwgWydodG1sRm9yJywgJ2ZvciddLCBbJ2h0dHBFcXVpdicsICdodHRwLWVxdWl2J11dLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICBuYW1lID0gX3JlZjJbMF0sXG4gICAgICBhdHRyaWJ1dGVOYW1lID0gX3JlZjJbMV07XG5cbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIFwiZW51bWVyYXRlZFwiIEhUTUwgYXR0cmlidXRlcyB0aGF0IGFjY2VwdCBcInRydWVcIiBhbmQgXCJmYWxzZVwiLlxuLy8gSW4gUmVhY3QsIHdlIGxldCB1c2VycyBwYXNzIGB0cnVlYCBhbmQgYGZhbHNlYCBldmVuIHRob3VnaCB0ZWNobmljYWxseVxuLy8gdGhlc2UgYXJlbid0IGJvb2xlYW4gYXR0cmlidXRlcyAodGhleSBhcmUgY29lcmNlZCB0byBzdHJpbmdzKS5cblxuWydjb250ZW50RWRpdGFibGUnLCAnZHJhZ2dhYmxlJywgJ3NwZWxsQ2hlY2snLCAndmFsdWUnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIEJPT0xFQU5JU0hfU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhcmUgXCJlbnVtZXJhdGVkXCIgU1ZHIGF0dHJpYnV0ZXMgdGhhdCBhY2NlcHQgXCJ0cnVlXCIgYW5kIFwiZmFsc2VcIi5cbi8vIEluIFJlYWN0LCB3ZSBsZXQgdXNlcnMgcGFzcyBgdHJ1ZWAgYW5kIGBmYWxzZWAgZXZlbiB0aG91Z2ggdGVjaG5pY2FsbHlcbi8vIHRoZXNlIGFyZW4ndCBib29sZWFuIGF0dHJpYnV0ZXMgKHRoZXkgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncykuXG4vLyBTaW5jZSB0aGVzZSBhcmUgU1ZHIGF0dHJpYnV0ZXMsIHRoZWlyIGF0dHJpYnV0ZSBuYW1lcyBhcmUgY2FzZS1zZW5zaXRpdmUuXG5cblsnYXV0b1JldmVyc2UnLCAnZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZCcsICdmb2N1c2FibGUnLCAncHJlc2VydmVBbHBoYSddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgQk9PTEVBTklTSF9TVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhcmUgSFRNTCBib29sZWFuIGF0dHJpYnV0ZXMuXG5cblsnYWxsb3dGdWxsU2NyZWVuJywgJ2FzeW5jJywgLy8gTm90ZTogdGhlcmUgaXMgYSBzcGVjaWFsIGNhc2UgdGhhdCBwcmV2ZW50cyBpdCBmcm9tIGJlaW5nIHdyaXR0ZW4gdG8gdGhlIERPTVxuLy8gb24gdGhlIGNsaWVudCBzaWRlIGJlY2F1c2UgdGhlIGJyb3dzZXJzIGFyZSBpbmNvbnNpc3RlbnQuIEluc3RlYWQgd2UgY2FsbCBmb2N1cygpLlxuJ2F1dG9Gb2N1cycsICdhdXRvUGxheScsICdjb250cm9scycsICdkZWZhdWx0JywgJ2RlZmVyJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVQaWN0dXJlSW5QaWN0dXJlJywgJ2Rpc2FibGVSZW1vdGVQbGF5YmFjaycsICdmb3JtTm9WYWxpZGF0ZScsICdoaWRkZW4nLCAnbG9vcCcsICdub01vZHVsZScsICdub1ZhbGlkYXRlJywgJ29wZW4nLCAncGxheXNJbmxpbmUnLCAncmVhZE9ubHknLCAncmVxdWlyZWQnLCAncmV2ZXJzZWQnLCAnc2NvcGVkJywgJ3NlYW1sZXNzJywgLy8gTWljcm9kYXRhXG4naXRlbVNjb3BlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhcmUgdGhlIGZldyBSZWFjdCBwcm9wcyB0aGF0IHdlIHNldCBhcyBET00gcHJvcGVydGllc1xuLy8gcmF0aGVyIHRoYW4gYXR0cmlidXRlcy4gVGhlc2UgYXJlIGFsbCBib29sZWFucy5cblxuWydjaGVja2VkJywgLy8gTm90ZTogYG9wdGlvbi5zZWxlY3RlZGAgaXMgbm90IHVwZGF0ZWQgaWYgYHNlbGVjdC5tdWx0aXBsZWAgaXNcbi8vIGRpc2FibGVkIHdpdGggYHJlbW92ZUF0dHJpYnV0ZWAuIFdlIGhhdmUgc3BlY2lhbCBsb2dpYyBmb3IgaGFuZGxpbmcgdGhpcy5cbidtdWx0aXBsZScsICdtdXRlZCcsICdzZWxlY3RlZCcgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXG5dLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgQk9PTEVBTiwgdHJ1ZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYXR0cmlidXRlcyB0aGF0IGFyZSBcIm92ZXJsb2FkZWQgYm9vbGVhbnNcIjogdGhleSBiZWhhdmUgbGlrZVxuLy8gYm9vbGVhbnMsIGJ1dCBjYW4gYWxzbyBhY2NlcHQgYSBzdHJpbmcgdmFsdWUuXG5cblsnY2FwdHVyZScsICdkb3dubG9hZCcgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXG5dLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgT1ZFUkxPQURFRF9CT09MRUFOLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYXR0cmlidXRlcyB0aGF0IG11c3QgYmUgcG9zaXRpdmUgbnVtYmVycy5cblxuWydjb2xzJywgJ3Jvd3MnLCAnc2l6ZScsICdzcGFuJyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBQT1NJVElWRV9OVU1FUklDLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYXR0cmlidXRlcyB0aGF0IG11c3QgYmUgbnVtYmVycy5cblxuWydyb3dTcGFuJywgJ3N0YXJ0J10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBOVU1FUklDLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pO1xudmFyIENBTUVMSVpFID0gL1tcXC1cXDpdKFthLXpdKS9nO1xuXG52YXIgY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uIGNhcGl0YWxpemUodG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuWzFdLnRvVXBwZXJDYXNlKCk7XG59OyAvLyBUaGlzIGlzIGEgbGlzdCBvZiBhbGwgU1ZHIGF0dHJpYnV0ZXMgdGhhdCBuZWVkIHNwZWNpYWwgY2FzaW5nLCBuYW1lc3BhY2luZyxcbi8vIG9yIGJvb2xlYW4gdmFsdWUgYXNzaWdubWVudC4gUmVndWxhciBhdHRyaWJ1dGVzIHRoYXQganVzdCBhY2NlcHQgc3RyaW5nc1xuLy8gYW5kIGhhdmUgdGhlIHNhbWUgbmFtZXMgYXJlIG9taXR0ZWQsIGp1c3QgbGlrZSBpbiB0aGUgSFRNTCBhdHRyaWJ1dGUgZmlsdGVyLlxuLy8gU29tZSBvZiB0aGVzZSBhdHRyaWJ1dGVzIGNhbiBiZSBoYXJkIHRvIGZpbmQuIFRoaXMgbGlzdCB3YXMgY3JlYXRlZCBieVxuLy8gc2NyYXBpbmcgdGhlIE1ETiBkb2N1bWVudGF0aW9uLlxuXG5cblsnYWNjZW50LWhlaWdodCcsICdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnYXJhYmljLWZvcm0nLCAnYmFzZWxpbmUtc2hpZnQnLCAnY2FwLWhlaWdodCcsICdjbGlwLXBhdGgnLCAnY2xpcC1ydWxlJywgJ2NvbG9yLWludGVycG9sYXRpb24nLCAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJywgJ2NvbG9yLXByb2ZpbGUnLCAnY29sb3ItcmVuZGVyaW5nJywgJ2RvbWluYW50LWJhc2VsaW5lJywgJ2VuYWJsZS1iYWNrZ3JvdW5kJywgJ2ZpbGwtb3BhY2l0eScsICdmaWxsLXJ1bGUnLCAnZmxvb2QtY29sb3InLCAnZmxvb2Qtb3BhY2l0eScsICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zaXplLWFkanVzdCcsICdmb250LXN0cmV0Y2gnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLCAnZ2x5cGgtbmFtZScsICdnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsJywgJ2dseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsJywgJ2hvcml6LWFkdi14JywgJ2hvcml6LW9yaWdpbi14JywgJ2ltYWdlLXJlbmRlcmluZycsICdsZXR0ZXItc3BhY2luZycsICdsaWdodGluZy1jb2xvcicsICdtYXJrZXItZW5kJywgJ21hcmtlci1taWQnLCAnbWFya2VyLXN0YXJ0JywgJ292ZXJsaW5lLXBvc2l0aW9uJywgJ292ZXJsaW5lLXRoaWNrbmVzcycsICdwYWludC1vcmRlcicsICdwYW5vc2UtMScsICdwb2ludGVyLWV2ZW50cycsICdyZW5kZXJpbmctaW50ZW50JywgJ3NoYXBlLXJlbmRlcmluZycsICdzdG9wLWNvbG9yJywgJ3N0b3Atb3BhY2l0eScsICdzdHJpa2V0aHJvdWdoLXBvc2l0aW9uJywgJ3N0cmlrZXRocm91Z2gtdGhpY2tuZXNzJywgJ3N0cm9rZS1kYXNoYXJyYXknLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLWxpbmVjYXAnLCAnc3Ryb2tlLWxpbmVqb2luJywgJ3N0cm9rZS1taXRlcmxpbWl0JywgJ3N0cm9rZS1vcGFjaXR5JywgJ3N0cm9rZS13aWR0aCcsICd0ZXh0LWFuY2hvcicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1yZW5kZXJpbmcnLCAndW5kZXJsaW5lLXBvc2l0aW9uJywgJ3VuZGVybGluZS10aGlja25lc3MnLCAndW5pY29kZS1iaWRpJywgJ3VuaWNvZGUtcmFuZ2UnLCAndW5pdHMtcGVyLWVtJywgJ3YtYWxwaGFiZXRpYycsICd2LWhhbmdpbmcnLCAndi1pZGVvZ3JhcGhpYycsICd2LW1hdGhlbWF0aWNhbCcsICd2ZWN0b3ItZWZmZWN0JywgJ3ZlcnQtYWR2LXknLCAndmVydC1vcmlnaW4teCcsICd2ZXJ0LW9yaWdpbi15JywgJ3dvcmQtc3BhY2luZycsICd3cml0aW5nLW1vZGUnLCAneG1sbnM6eGxpbmsnLCAneC1oZWlnaHQnIC8vIE5PVEU6IGlmIHlvdSBhZGQgYSBjYW1lbENhc2VkIHByb3AgdG8gdGhpcyBsaXN0LFxuLy8geW91J2xsIG5lZWQgdG8gc2V0IGF0dHJpYnV0ZU5hbWUgdG8gbmFtZS50b0xvd2VyQ2FzZSgpXG4vLyBpbnN0ZWFkIGluIHRoZSBhc3NpZ25tZW50IGJlbG93LlxuXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gIHZhciBuYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKENBTUVMSVpFLCBjYXBpdGFsaXplKTtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUsIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFN0cmluZyBTVkcgYXR0cmlidXRlcyB3aXRoIHRoZSB4bGluayBuYW1lc3BhY2UuXG5cblsneGxpbms6YWN0dWF0ZScsICd4bGluazphcmNyb2xlJywgJ3hsaW5rOnJvbGUnLCAneGxpbms6c2hvdycsICd4bGluazp0aXRsZScsICd4bGluazp0eXBlJyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICB2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZShDQU1FTElaRSwgY2FwaXRhbGl6ZSk7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gU3RyaW5nIFNWRyBhdHRyaWJ1dGVzIHdpdGggdGhlIHhtbCBuYW1lc3BhY2UuXG5cblsneG1sOmJhc2UnLCAneG1sOmxhbmcnLCAneG1sOnNwYWNlJyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICB2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZShDQU1FTElaRSwgY2FwaXRhbGl6ZSk7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLCAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJywgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhdHRyaWJ1dGUgZXhpc3RzIGJvdGggaW4gSFRNTCBhbmQgU1ZHLlxuLy8gVGhlIGF0dHJpYnV0ZSBuYW1lIGlzIGNhc2Utc2Vuc2l0aXZlIGluIFNWRyBzbyB3ZSBjYW4ndCBqdXN0IHVzZVxuLy8gdGhlIFJlYWN0IG5hbWUgbGlrZSB3ZSBkbyBmb3IgYXR0cmlidXRlcyB0aGF0IGV4aXN0IG9ubHkgaW4gSFRNTC5cblxuWyd0YWJJbmRleCcsICdjcm9zc09yaWdpbiddLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcHJvcGVydGllc1thdHRyaWJ1dGVOYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQoYXR0cmlidXRlTmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhdHRyaWJ1dGVzIGFjY2VwdCBVUkxzLiBUaGVzZSBtdXN0IG5vdCBhbGxvdyBqYXZhc2NyaXB0OiBVUkxTLlxuLy8gVGhlc2Ugd2lsbCBhbHNvIG5lZWQgdG8gYWNjZXB0IFRydXN0ZWQgVHlwZXMgb2JqZWN0IGluIHRoZSBmdXR1cmUuXG5cbnZhciB4bGlua0hyZWYgPSAneGxpbmtIcmVmJztcbnByb3BlcnRpZXNbeGxpbmtIcmVmXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQoJ3hsaW5rSHJlZicsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuJ3hsaW5rOmhyZWYnLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIHRydWUsIC8vIHNhbml0aXplVVJMXG5mYWxzZSk7XG5bJ3NyYycsICdocmVmJywgJ2FjdGlvbicsICdmb3JtQWN0aW9uJ10uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICBwcm9wZXJ0aWVzW2F0dHJpYnV0ZU5hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChhdHRyaWJ1dGVOYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICB0cnVlLCAvLyBzYW5pdGl6ZVVSTFxuICB0cnVlKTtcbn0pO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuLi9saWIvcG9zc2libGVTdGFuZGFyZE5hbWVzT3B0aW1pemVkJyksXG4gICAgQ0FNRUxDQVNFID0gX3JlcXVpcmUuQ0FNRUxDQVNFLFxuICAgIFNBTUUgPSBfcmVxdWlyZS5TQU1FLFxuICAgIHBvc3NpYmxlU3RhbmRhcmROYW1lc09wdGltaXplZCA9IF9yZXF1aXJlLnBvc3NpYmxlU3RhbmRhcmROYW1lcztcblxudmFyIEFUVFJJQlVURV9OQU1FX1NUQVJUX0NIQVIgPSBcIjpBLVpfYS16XFxcXHUwMEMwLVxcXFx1MDBENlxcXFx1MDBEOC1cXFxcdTAwRjZcXFxcdTAwRjgtXFxcXHUwMkZGXFxcXHUwMzcwLVxcXFx1MDM3RFxcXFx1MDM3Ri1cXFxcdTFGRkZcXFxcdTIwMEMtXFxcXHUyMDBEXFxcXHUyMDcwLVxcXFx1MjE4RlxcXFx1MkMwMC1cXFxcdTJGRUZcXFxcdTMwMDEtXFxcXHVEN0ZGXFxcXHVGOTAwLVxcXFx1RkRDRlxcXFx1RkRGMC1cXFxcdUZGRkRcIjtcbnZhciBBVFRSSUJVVEVfTkFNRV9DSEFSID0gQVRUUklCVVRFX05BTUVfU1RBUlRfQ0hBUiArIFwiXFxcXC0uMC05XFxcXHUwMEI3XFxcXHUwMzAwLVxcXFx1MDM2RlxcXFx1MjAzRi1cXFxcdTIwNDBcIjtcbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYSBwcm9wZXJ0eSBuYW1lIGlzIGEgY3VzdG9tIGF0dHJpYnV0ZS5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8xNS1zdGFibGUvc3JjL3JlbmRlcmVycy9kb20vc2hhcmVkL0hUTUxET01Qcm9wZXJ0eUNvbmZpZy5qcyNMMjMtTDI1fVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuXG52YXIgaXNDdXN0b21BdHRyaWJ1dGUgPSBSZWdFeHAucHJvdG90eXBlLnRlc3QuYmluZCggLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1pc2xlYWRpbmctY2hhcmFjdGVyLWNsYXNzXG5uZXcgUmVnRXhwKCdeKGRhdGF8YXJpYSktWycgKyBBVFRSSUJVVEVfTkFNRV9DSEFSICsgJ10qJCcpKTtcbnZhciBwb3NzaWJsZVN0YW5kYXJkTmFtZXMgPSBPYmplY3Qua2V5cyhwb3NzaWJsZVN0YW5kYXJkTmFtZXNPcHRpbWl6ZWQpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIHN0YW5kYXJkTmFtZSkge1xuICB2YXIgcHJvcE5hbWUgPSBwb3NzaWJsZVN0YW5kYXJkTmFtZXNPcHRpbWl6ZWRbc3RhbmRhcmROYW1lXTtcblxuICBpZiAocHJvcE5hbWUgPT09IFNBTUUpIHtcbiAgICBhY2N1bXVsYXRvcltzdGFuZGFyZE5hbWVdID0gc3RhbmRhcmROYW1lO1xuICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSBDQU1FTENBU0UpIHtcbiAgICBhY2N1bXVsYXRvcltzdGFuZGFyZE5hbWUudG9Mb3dlckNhc2UoKV0gPSBzdGFuZGFyZE5hbWU7XG4gIH0gZWxzZSB7XG4gICAgYWNjdW11bGF0b3Jbc3RhbmRhcmROYW1lXSA9IHByb3BOYW1lO1xuICB9XG5cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufSwge30pO1xuXG5leHBvcnRzLkJPT0xFQU4gPSBCT09MRUFOO1xuZXhwb3J0cy5CT09MRUFOSVNIX1NUUklORyA9IEJPT0xFQU5JU0hfU1RSSU5HO1xuZXhwb3J0cy5OVU1FUklDID0gTlVNRVJJQztcbmV4cG9ydHMuT1ZFUkxPQURFRF9CT09MRUFOID0gT1ZFUkxPQURFRF9CT09MRUFOO1xuZXhwb3J0cy5QT1NJVElWRV9OVU1FUklDID0gUE9TSVRJVkVfTlVNRVJJQztcbmV4cG9ydHMuUkVTRVJWRUQgPSBSRVNFUlZFRDtcbmV4cG9ydHMuU1RSSU5HID0gU1RSSU5HO1xuZXhwb3J0cy5nZXRQcm9wZXJ0eUluZm8gPSBnZXRQcm9wZXJ0eUluZm87XG5leHBvcnRzLmlzQ3VzdG9tQXR0cmlidXRlID0gaXNDdXN0b21BdHRyaWJ1dGU7XG5leHBvcnRzLnBvc3NpYmxlU3RhbmRhcmROYW1lcyA9IHBvc3NpYmxlU3RhbmRhcmROYW1lcztcbiIsIi8vIEFuIGF0dHJpYnV0ZSBpbiB3aGljaCB0aGUgRE9NL1NWRyBzdGFuZGFyZCBuYW1lIGlzIHRoZSBzYW1lIGFzIHRoZSBSZWFjdCBwcm9wIG5hbWUgKGUuZy4sICdhY2NlcHQnKS5cbnZhciBTQU1FID0gMDtcbmV4cG9ydHMuU0FNRSA9IFNBTUU7XG5cbi8vIEFuIGF0dHJpYnV0ZSBpbiB3aGljaCB0aGUgUmVhY3QgcHJvcCBuYW1lIGlzIHRoZSBjYW1lbGNhc2VkIHZlcnNpb24gb2YgdGhlIERPTS9TVkcgc3RhbmRhcmQgbmFtZSAoZS5nLiwgJ2FjY2VwdENoYXJzZXQnKS5cbnZhciBDQU1FTENBU0UgPSAxO1xuZXhwb3J0cy5DQU1FTENBU0UgPSBDQU1FTENBU0U7XG5cbmV4cG9ydHMucG9zc2libGVTdGFuZGFyZE5hbWVzID0ge1xuICBhY2NlcHQ6IDAsXG4gIGFjY2VwdENoYXJzZXQ6IDEsXG4gICdhY2NlcHQtY2hhcnNldCc6ICdhY2NlcHRDaGFyc2V0JyxcbiAgYWNjZXNzS2V5OiAxLFxuICBhY3Rpb246IDAsXG4gIGFsbG93RnVsbFNjcmVlbjogMSxcbiAgYWx0OiAwLFxuICBhczogMCxcbiAgYXN5bmM6IDAsXG4gIGF1dG9DYXBpdGFsaXplOiAxLFxuICBhdXRvQ29tcGxldGU6IDEsXG4gIGF1dG9Db3JyZWN0OiAxLFxuICBhdXRvRm9jdXM6IDEsXG4gIGF1dG9QbGF5OiAxLFxuICBhdXRvU2F2ZTogMSxcbiAgY2FwdHVyZTogMCxcbiAgY2VsbFBhZGRpbmc6IDEsXG4gIGNlbGxTcGFjaW5nOiAxLFxuICBjaGFsbGVuZ2U6IDAsXG4gIGNoYXJTZXQ6IDEsXG4gIGNoZWNrZWQ6IDAsXG4gIGNoaWxkcmVuOiAwLFxuICBjaXRlOiAwLFxuICBjbGFzczogJ2NsYXNzTmFtZScsXG4gIGNsYXNzSUQ6IDEsXG4gIGNsYXNzTmFtZTogMSxcbiAgY29sczogMCxcbiAgY29sU3BhbjogMSxcbiAgY29udGVudDogMCxcbiAgY29udGVudEVkaXRhYmxlOiAxLFxuICBjb250ZXh0TWVudTogMSxcbiAgY29udHJvbHM6IDAsXG4gIGNvbnRyb2xzTGlzdDogMSxcbiAgY29vcmRzOiAwLFxuICBjcm9zc09yaWdpbjogMSxcbiAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IDEsXG4gIGRhdGE6IDAsXG4gIGRhdGVUaW1lOiAxLFxuICBkZWZhdWx0OiAwLFxuICBkZWZhdWx0Q2hlY2tlZDogMSxcbiAgZGVmYXVsdFZhbHVlOiAxLFxuICBkZWZlcjogMCxcbiAgZGlyOiAwLFxuICBkaXNhYmxlZDogMCxcbiAgZGlzYWJsZVBpY3R1cmVJblBpY3R1cmU6IDEsXG4gIGRpc2FibGVSZW1vdGVQbGF5YmFjazogMSxcbiAgZG93bmxvYWQ6IDAsXG4gIGRyYWdnYWJsZTogMCxcbiAgZW5jVHlwZTogMSxcbiAgZW50ZXJLZXlIaW50OiAxLFxuICBmb3I6ICdodG1sRm9yJyxcbiAgZm9ybTogMCxcbiAgZm9ybU1ldGhvZDogMSxcbiAgZm9ybUFjdGlvbjogMSxcbiAgZm9ybUVuY1R5cGU6IDEsXG4gIGZvcm1Ob1ZhbGlkYXRlOiAxLFxuICBmb3JtVGFyZ2V0OiAxLFxuICBmcmFtZUJvcmRlcjogMSxcbiAgaGVhZGVyczogMCxcbiAgaGVpZ2h0OiAwLFxuICBoaWRkZW46IDAsXG4gIGhpZ2g6IDAsXG4gIGhyZWY6IDAsXG4gIGhyZWZMYW5nOiAxLFxuICBodG1sRm9yOiAxLFxuICBodHRwRXF1aXY6IDEsXG4gICdodHRwLWVxdWl2JzogJ2h0dHBFcXVpdicsXG4gIGljb246IDAsXG4gIGlkOiAwLFxuICBpbm5lckhUTUw6IDEsXG4gIGlucHV0TW9kZTogMSxcbiAgaW50ZWdyaXR5OiAwLFxuICBpczogMCxcbiAgaXRlbUlEOiAxLFxuICBpdGVtUHJvcDogMSxcbiAgaXRlbVJlZjogMSxcbiAgaXRlbVNjb3BlOiAxLFxuICBpdGVtVHlwZTogMSxcbiAga2V5UGFyYW1zOiAxLFxuICBrZXlUeXBlOiAxLFxuICBraW5kOiAwLFxuICBsYWJlbDogMCxcbiAgbGFuZzogMCxcbiAgbGlzdDogMCxcbiAgbG9vcDogMCxcbiAgbG93OiAwLFxuICBtYW5pZmVzdDogMCxcbiAgbWFyZ2luV2lkdGg6IDEsXG4gIG1hcmdpbkhlaWdodDogMSxcbiAgbWF4OiAwLFxuICBtYXhMZW5ndGg6IDEsXG4gIG1lZGlhOiAwLFxuICBtZWRpYUdyb3VwOiAxLFxuICBtZXRob2Q6IDAsXG4gIG1pbjogMCxcbiAgbWluTGVuZ3RoOiAxLFxuICBtdWx0aXBsZTogMCxcbiAgbXV0ZWQ6IDAsXG4gIG5hbWU6IDAsXG4gIG5vTW9kdWxlOiAxLFxuICBub25jZTogMCxcbiAgbm9WYWxpZGF0ZTogMSxcbiAgb3BlbjogMCxcbiAgb3B0aW11bTogMCxcbiAgcGF0dGVybjogMCxcbiAgcGxhY2Vob2xkZXI6IDAsXG4gIHBsYXlzSW5saW5lOiAxLFxuICBwb3N0ZXI6IDAsXG4gIHByZWxvYWQ6IDAsXG4gIHByb2ZpbGU6IDAsXG4gIHJhZGlvR3JvdXA6IDEsXG4gIHJlYWRPbmx5OiAxLFxuICByZWZlcnJlclBvbGljeTogMSxcbiAgcmVsOiAwLFxuICByZXF1aXJlZDogMCxcbiAgcmV2ZXJzZWQ6IDAsXG4gIHJvbGU6IDAsXG4gIHJvd3M6IDAsXG4gIHJvd1NwYW46IDEsXG4gIHNhbmRib3g6IDAsXG4gIHNjb3BlOiAwLFxuICBzY29wZWQ6IDAsXG4gIHNjcm9sbGluZzogMCxcbiAgc2VhbWxlc3M6IDAsXG4gIHNlbGVjdGVkOiAwLFxuICBzaGFwZTogMCxcbiAgc2l6ZTogMCxcbiAgc2l6ZXM6IDAsXG4gIHNwYW46IDAsXG4gIHNwZWxsQ2hlY2s6IDEsXG4gIHNyYzogMCxcbiAgc3JjRG9jOiAxLFxuICBzcmNMYW5nOiAxLFxuICBzcmNTZXQ6IDEsXG4gIHN0YXJ0OiAwLFxuICBzdGVwOiAwLFxuICBzdHlsZTogMCxcbiAgc3VtbWFyeTogMCxcbiAgdGFiSW5kZXg6IDEsXG4gIHRhcmdldDogMCxcbiAgdGl0bGU6IDAsXG4gIHR5cGU6IDAsXG4gIHVzZU1hcDogMSxcbiAgdmFsdWU6IDAsXG4gIHdpZHRoOiAwLFxuICB3bW9kZTogMCxcbiAgd3JhcDogMCxcbiAgYWJvdXQ6IDAsXG4gIGFjY2VudEhlaWdodDogMSxcbiAgJ2FjY2VudC1oZWlnaHQnOiAnYWNjZW50SGVpZ2h0JyxcbiAgYWNjdW11bGF0ZTogMCxcbiAgYWRkaXRpdmU6IDAsXG4gIGFsaWdubWVudEJhc2VsaW5lOiAxLFxuICAnYWxpZ25tZW50LWJhc2VsaW5lJzogJ2FsaWdubWVudEJhc2VsaW5lJyxcbiAgYWxsb3dSZW9yZGVyOiAxLFxuICBhbHBoYWJldGljOiAwLFxuICBhbXBsaXR1ZGU6IDAsXG4gIGFyYWJpY0Zvcm06IDEsXG4gICdhcmFiaWMtZm9ybSc6ICdhcmFiaWNGb3JtJyxcbiAgYXNjZW50OiAwLFxuICBhdHRyaWJ1dGVOYW1lOiAxLFxuICBhdHRyaWJ1dGVUeXBlOiAxLFxuICBhdXRvUmV2ZXJzZTogMSxcbiAgYXppbXV0aDogMCxcbiAgYmFzZUZyZXF1ZW5jeTogMSxcbiAgYmFzZWxpbmVTaGlmdDogMSxcbiAgJ2Jhc2VsaW5lLXNoaWZ0JzogJ2Jhc2VsaW5lU2hpZnQnLFxuICBiYXNlUHJvZmlsZTogMSxcbiAgYmJveDogMCxcbiAgYmVnaW46IDAsXG4gIGJpYXM6IDAsXG4gIGJ5OiAwLFxuICBjYWxjTW9kZTogMSxcbiAgY2FwSGVpZ2h0OiAxLFxuICAnY2FwLWhlaWdodCc6ICdjYXBIZWlnaHQnLFxuICBjbGlwOiAwLFxuICBjbGlwUGF0aDogMSxcbiAgJ2NsaXAtcGF0aCc6ICdjbGlwUGF0aCcsXG4gIGNsaXBQYXRoVW5pdHM6IDEsXG4gIGNsaXBSdWxlOiAxLFxuICAnY2xpcC1ydWxlJzogJ2NsaXBSdWxlJyxcbiAgY29sb3I6IDAsXG4gIGNvbG9ySW50ZXJwb2xhdGlvbjogMSxcbiAgJ2NvbG9yLWludGVycG9sYXRpb24nOiAnY29sb3JJbnRlcnBvbGF0aW9uJyxcbiAgY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyczogMSxcbiAgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyc6ICdjb2xvckludGVycG9sYXRpb25GaWx0ZXJzJyxcbiAgY29sb3JQcm9maWxlOiAxLFxuICAnY29sb3ItcHJvZmlsZSc6ICdjb2xvclByb2ZpbGUnLFxuICBjb2xvclJlbmRlcmluZzogMSxcbiAgJ2NvbG9yLXJlbmRlcmluZyc6ICdjb2xvclJlbmRlcmluZycsXG4gIGNvbnRlbnRTY3JpcHRUeXBlOiAxLFxuICBjb250ZW50U3R5bGVUeXBlOiAxLFxuICBjdXJzb3I6IDAsXG4gIGN4OiAwLFxuICBjeTogMCxcbiAgZDogMCxcbiAgZGF0YXR5cGU6IDAsXG4gIGRlY2VsZXJhdGU6IDAsXG4gIGRlc2NlbnQ6IDAsXG4gIGRpZmZ1c2VDb25zdGFudDogMSxcbiAgZGlyZWN0aW9uOiAwLFxuICBkaXNwbGF5OiAwLFxuICBkaXZpc29yOiAwLFxuICBkb21pbmFudEJhc2VsaW5lOiAxLFxuICAnZG9taW5hbnQtYmFzZWxpbmUnOiAnZG9taW5hbnRCYXNlbGluZScsXG4gIGR1cjogMCxcbiAgZHg6IDAsXG4gIGR5OiAwLFxuICBlZGdlTW9kZTogMSxcbiAgZWxldmF0aW9uOiAwLFxuICBlbmFibGVCYWNrZ3JvdW5kOiAxLFxuICAnZW5hYmxlLWJhY2tncm91bmQnOiAnZW5hYmxlQmFja2dyb3VuZCcsXG4gIGVuZDogMCxcbiAgZXhwb25lbnQ6IDAsXG4gIGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQ6IDEsXG4gIGZpbGw6IDAsXG4gIGZpbGxPcGFjaXR5OiAxLFxuICAnZmlsbC1vcGFjaXR5JzogJ2ZpbGxPcGFjaXR5JyxcbiAgZmlsbFJ1bGU6IDEsXG4gICdmaWxsLXJ1bGUnOiAnZmlsbFJ1bGUnLFxuICBmaWx0ZXI6IDAsXG4gIGZpbHRlclJlczogMSxcbiAgZmlsdGVyVW5pdHM6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgJ2Zsb29kLW9wYWNpdHknOiAnZmxvb2RPcGFjaXR5JyxcbiAgZmxvb2RDb2xvcjogMSxcbiAgJ2Zsb29kLWNvbG9yJzogJ2Zsb29kQ29sb3InLFxuICBmb2N1c2FibGU6IDAsXG4gIGZvbnRGYW1pbHk6IDEsXG4gICdmb250LWZhbWlseSc6ICdmb250RmFtaWx5JyxcbiAgZm9udFNpemU6IDEsXG4gICdmb250LXNpemUnOiAnZm9udFNpemUnLFxuICBmb250U2l6ZUFkanVzdDogMSxcbiAgJ2ZvbnQtc2l6ZS1hZGp1c3QnOiAnZm9udFNpemVBZGp1c3QnLFxuICBmb250U3RyZXRjaDogMSxcbiAgJ2ZvbnQtc3RyZXRjaCc6ICdmb250U3RyZXRjaCcsXG4gIGZvbnRTdHlsZTogMSxcbiAgJ2ZvbnQtc3R5bGUnOiAnZm9udFN0eWxlJyxcbiAgZm9udFZhcmlhbnQ6IDEsXG4gICdmb250LXZhcmlhbnQnOiAnZm9udFZhcmlhbnQnLFxuICBmb250V2VpZ2h0OiAxLFxuICAnZm9udC13ZWlnaHQnOiAnZm9udFdlaWdodCcsXG4gIGZvcm1hdDogMCxcbiAgZnJvbTogMCxcbiAgZng6IDAsXG4gIGZ5OiAwLFxuICBnMTogMCxcbiAgZzI6IDAsXG4gIGdseXBoTmFtZTogMSxcbiAgJ2dseXBoLW5hbWUnOiAnZ2x5cGhOYW1lJyxcbiAgZ2x5cGhPcmllbnRhdGlvbkhvcml6b250YWw6IDEsXG4gICdnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsJzogJ2dseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsJyxcbiAgZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsOiAxLFxuICAnZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwnOiAnZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsJyxcbiAgZ2x5cGhSZWY6IDEsXG4gIGdyYWRpZW50VHJhbnNmb3JtOiAxLFxuICBncmFkaWVudFVuaXRzOiAxLFxuICBoYW5naW5nOiAwLFxuICBob3JpekFkdlg6IDEsXG4gICdob3Jpei1hZHYteCc6ICdob3JpekFkdlgnLFxuICBob3Jpek9yaWdpblg6IDEsXG4gICdob3Jpei1vcmlnaW4teCc6ICdob3Jpek9yaWdpblgnLFxuICBpZGVvZ3JhcGhpYzogMCxcbiAgaW1hZ2VSZW5kZXJpbmc6IDEsXG4gICdpbWFnZS1yZW5kZXJpbmcnOiAnaW1hZ2VSZW5kZXJpbmcnLFxuICBpbjI6IDAsXG4gIGluOiAwLFxuICBpbmxpc3Q6IDAsXG4gIGludGVyY2VwdDogMCxcbiAgazE6IDAsXG4gIGsyOiAwLFxuICBrMzogMCxcbiAgazQ6IDAsXG4gIGs6IDAsXG4gIGtlcm5lbE1hdHJpeDogMSxcbiAga2VybmVsVW5pdExlbmd0aDogMSxcbiAga2VybmluZzogMCxcbiAga2V5UG9pbnRzOiAxLFxuICBrZXlTcGxpbmVzOiAxLFxuICBrZXlUaW1lczogMSxcbiAgbGVuZ3RoQWRqdXN0OiAxLFxuICBsZXR0ZXJTcGFjaW5nOiAxLFxuICAnbGV0dGVyLXNwYWNpbmcnOiAnbGV0dGVyU3BhY2luZycsXG4gIGxpZ2h0aW5nQ29sb3I6IDEsXG4gICdsaWdodGluZy1jb2xvcic6ICdsaWdodGluZ0NvbG9yJyxcbiAgbGltaXRpbmdDb25lQW5nbGU6IDEsXG4gIGxvY2FsOiAwLFxuICBtYXJrZXJFbmQ6IDEsXG4gICdtYXJrZXItZW5kJzogJ21hcmtlckVuZCcsXG4gIG1hcmtlckhlaWdodDogMSxcbiAgbWFya2VyTWlkOiAxLFxuICAnbWFya2VyLW1pZCc6ICdtYXJrZXJNaWQnLFxuICBtYXJrZXJTdGFydDogMSxcbiAgJ21hcmtlci1zdGFydCc6ICdtYXJrZXJTdGFydCcsXG4gIG1hcmtlclVuaXRzOiAxLFxuICBtYXJrZXJXaWR0aDogMSxcbiAgbWFzazogMCxcbiAgbWFza0NvbnRlbnRVbml0czogMSxcbiAgbWFza1VuaXRzOiAxLFxuICBtYXRoZW1hdGljYWw6IDAsXG4gIG1vZGU6IDAsXG4gIG51bU9jdGF2ZXM6IDEsXG4gIG9mZnNldDogMCxcbiAgb3BhY2l0eTogMCxcbiAgb3BlcmF0b3I6IDAsXG4gIG9yZGVyOiAwLFxuICBvcmllbnQ6IDAsXG4gIG9yaWVudGF0aW9uOiAwLFxuICBvcmlnaW46IDAsXG4gIG92ZXJmbG93OiAwLFxuICBvdmVybGluZVBvc2l0aW9uOiAxLFxuICAnb3ZlcmxpbmUtcG9zaXRpb24nOiAnb3ZlcmxpbmVQb3NpdGlvbicsXG4gIG92ZXJsaW5lVGhpY2tuZXNzOiAxLFxuICAnb3ZlcmxpbmUtdGhpY2tuZXNzJzogJ292ZXJsaW5lVGhpY2tuZXNzJyxcbiAgcGFpbnRPcmRlcjogMSxcbiAgJ3BhaW50LW9yZGVyJzogJ3BhaW50T3JkZXInLFxuICBwYW5vc2UxOiAwLFxuICAncGFub3NlLTEnOiAncGFub3NlMScsXG4gIHBhdGhMZW5ndGg6IDEsXG4gIHBhdHRlcm5Db250ZW50VW5pdHM6IDEsXG4gIHBhdHRlcm5UcmFuc2Zvcm06IDEsXG4gIHBhdHRlcm5Vbml0czogMSxcbiAgcG9pbnRlckV2ZW50czogMSxcbiAgJ3BvaW50ZXItZXZlbnRzJzogJ3BvaW50ZXJFdmVudHMnLFxuICBwb2ludHM6IDAsXG4gIHBvaW50c0F0WDogMSxcbiAgcG9pbnRzQXRZOiAxLFxuICBwb2ludHNBdFo6IDEsXG4gIHByZWZpeDogMCxcbiAgcHJlc2VydmVBbHBoYTogMSxcbiAgcHJlc2VydmVBc3BlY3RSYXRpbzogMSxcbiAgcHJpbWl0aXZlVW5pdHM6IDEsXG4gIHByb3BlcnR5OiAwLFxuICByOiAwLFxuICByYWRpdXM6IDAsXG4gIHJlZlg6IDEsXG4gIHJlZlk6IDEsXG4gIHJlbmRlcmluZ0ludGVudDogMSxcbiAgJ3JlbmRlcmluZy1pbnRlbnQnOiAncmVuZGVyaW5nSW50ZW50JyxcbiAgcmVwZWF0Q291bnQ6IDEsXG4gIHJlcGVhdER1cjogMSxcbiAgcmVxdWlyZWRFeHRlbnNpb25zOiAxLFxuICByZXF1aXJlZEZlYXR1cmVzOiAxLFxuICByZXNvdXJjZTogMCxcbiAgcmVzdGFydDogMCxcbiAgcmVzdWx0OiAwLFxuICByZXN1bHRzOiAwLFxuICByb3RhdGU6IDAsXG4gIHJ4OiAwLFxuICByeTogMCxcbiAgc2NhbGU6IDAsXG4gIHNlY3VyaXR5OiAwLFxuICBzZWVkOiAwLFxuICBzaGFwZVJlbmRlcmluZzogMSxcbiAgJ3NoYXBlLXJlbmRlcmluZyc6ICdzaGFwZVJlbmRlcmluZycsXG4gIHNsb3BlOiAwLFxuICBzcGFjaW5nOiAwLFxuICBzcGVjdWxhckNvbnN0YW50OiAxLFxuICBzcGVjdWxhckV4cG9uZW50OiAxLFxuICBzcGVlZDogMCxcbiAgc3ByZWFkTWV0aG9kOiAxLFxuICBzdGFydE9mZnNldDogMSxcbiAgc3RkRGV2aWF0aW9uOiAxLFxuICBzdGVtaDogMCxcbiAgc3RlbXY6IDAsXG4gIHN0aXRjaFRpbGVzOiAxLFxuICBzdG9wQ29sb3I6IDEsXG4gICdzdG9wLWNvbG9yJzogJ3N0b3BDb2xvcicsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICAnc3RvcC1vcGFjaXR5JzogJ3N0b3BPcGFjaXR5JyxcbiAgc3RyaWtldGhyb3VnaFBvc2l0aW9uOiAxLFxuICAnc3RyaWtldGhyb3VnaC1wb3NpdGlvbic6ICdzdHJpa2V0aHJvdWdoUG9zaXRpb24nLFxuICBzdHJpa2V0aHJvdWdoVGhpY2tuZXNzOiAxLFxuICAnc3RyaWtldGhyb3VnaC10aGlja25lc3MnOiAnc3RyaWtldGhyb3VnaFRoaWNrbmVzcycsXG4gIHN0cmluZzogMCxcbiAgc3Ryb2tlOiAwLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gICdzdHJva2UtZGFzaGFycmF5JzogJ3N0cm9rZURhc2hhcnJheScsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gICdzdHJva2UtZGFzaG9mZnNldCc6ICdzdHJva2VEYXNob2Zmc2V0JyxcbiAgc3Ryb2tlTGluZWNhcDogMSxcbiAgJ3N0cm9rZS1saW5lY2FwJzogJ3N0cm9rZUxpbmVjYXAnLFxuICBzdHJva2VMaW5lam9pbjogMSxcbiAgJ3N0cm9rZS1saW5lam9pbic6ICdzdHJva2VMaW5lam9pbicsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gICdzdHJva2UtbWl0ZXJsaW1pdCc6ICdzdHJva2VNaXRlcmxpbWl0JyxcbiAgc3Ryb2tlV2lkdGg6IDEsXG4gICdzdHJva2Utd2lkdGgnOiAnc3Ryb2tlV2lkdGgnLFxuICBzdHJva2VPcGFjaXR5OiAxLFxuICAnc3Ryb2tlLW9wYWNpdHknOiAnc3Ryb2tlT3BhY2l0eScsXG4gIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZzogMSxcbiAgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nOiAxLFxuICBzdXJmYWNlU2NhbGU6IDEsXG4gIHN5c3RlbUxhbmd1YWdlOiAxLFxuICB0YWJsZVZhbHVlczogMSxcbiAgdGFyZ2V0WDogMSxcbiAgdGFyZ2V0WTogMSxcbiAgdGV4dEFuY2hvcjogMSxcbiAgJ3RleHQtYW5jaG9yJzogJ3RleHRBbmNob3InLFxuICB0ZXh0RGVjb3JhdGlvbjogMSxcbiAgJ3RleHQtZGVjb3JhdGlvbic6ICd0ZXh0RGVjb3JhdGlvbicsXG4gIHRleHRMZW5ndGg6IDEsXG4gIHRleHRSZW5kZXJpbmc6IDEsXG4gICd0ZXh0LXJlbmRlcmluZyc6ICd0ZXh0UmVuZGVyaW5nJyxcbiAgdG86IDAsXG4gIHRyYW5zZm9ybTogMCxcbiAgdHlwZW9mOiAwLFxuICB1MTogMCxcbiAgdTI6IDAsXG4gIHVuZGVybGluZVBvc2l0aW9uOiAxLFxuICAndW5kZXJsaW5lLXBvc2l0aW9uJzogJ3VuZGVybGluZVBvc2l0aW9uJyxcbiAgdW5kZXJsaW5lVGhpY2tuZXNzOiAxLFxuICAndW5kZXJsaW5lLXRoaWNrbmVzcyc6ICd1bmRlcmxpbmVUaGlja25lc3MnLFxuICB1bmljb2RlOiAwLFxuICB1bmljb2RlQmlkaTogMSxcbiAgJ3VuaWNvZGUtYmlkaSc6ICd1bmljb2RlQmlkaScsXG4gIHVuaWNvZGVSYW5nZTogMSxcbiAgJ3VuaWNvZGUtcmFuZ2UnOiAndW5pY29kZVJhbmdlJyxcbiAgdW5pdHNQZXJFbTogMSxcbiAgJ3VuaXRzLXBlci1lbSc6ICd1bml0c1BlckVtJyxcbiAgdW5zZWxlY3RhYmxlOiAwLFxuICB2QWxwaGFiZXRpYzogMSxcbiAgJ3YtYWxwaGFiZXRpYyc6ICd2QWxwaGFiZXRpYycsXG4gIHZhbHVlczogMCxcbiAgdmVjdG9yRWZmZWN0OiAxLFxuICAndmVjdG9yLWVmZmVjdCc6ICd2ZWN0b3JFZmZlY3QnLFxuICB2ZXJzaW9uOiAwLFxuICB2ZXJ0QWR2WTogMSxcbiAgJ3ZlcnQtYWR2LXknOiAndmVydEFkdlknLFxuICB2ZXJ0T3JpZ2luWDogMSxcbiAgJ3ZlcnQtb3JpZ2luLXgnOiAndmVydE9yaWdpblgnLFxuICB2ZXJ0T3JpZ2luWTogMSxcbiAgJ3ZlcnQtb3JpZ2luLXknOiAndmVydE9yaWdpblknLFxuICB2SGFuZ2luZzogMSxcbiAgJ3YtaGFuZ2luZyc6ICd2SGFuZ2luZycsXG4gIHZJZGVvZ3JhcGhpYzogMSxcbiAgJ3YtaWRlb2dyYXBoaWMnOiAndklkZW9ncmFwaGljJyxcbiAgdmlld0JveDogMSxcbiAgdmlld1RhcmdldDogMSxcbiAgdmlzaWJpbGl0eTogMCxcbiAgdk1hdGhlbWF0aWNhbDogMSxcbiAgJ3YtbWF0aGVtYXRpY2FsJzogJ3ZNYXRoZW1hdGljYWwnLFxuICB2b2NhYjogMCxcbiAgd2lkdGhzOiAwLFxuICB3b3JkU3BhY2luZzogMSxcbiAgJ3dvcmQtc3BhY2luZyc6ICd3b3JkU3BhY2luZycsXG4gIHdyaXRpbmdNb2RlOiAxLFxuICAnd3JpdGluZy1tb2RlJzogJ3dyaXRpbmdNb2RlJyxcbiAgeDE6IDAsXG4gIHgyOiAwLFxuICB4OiAwLFxuICB4Q2hhbm5lbFNlbGVjdG9yOiAxLFxuICB4SGVpZ2h0OiAxLFxuICAneC1oZWlnaHQnOiAneEhlaWdodCcsXG4gIHhsaW5rQWN0dWF0ZTogMSxcbiAgJ3hsaW5rOmFjdHVhdGUnOiAneGxpbmtBY3R1YXRlJyxcbiAgeGxpbmtBcmNyb2xlOiAxLFxuICAneGxpbms6YXJjcm9sZSc6ICd4bGlua0FyY3JvbGUnLFxuICB4bGlua0hyZWY6IDEsXG4gICd4bGluazpocmVmJzogJ3hsaW5rSHJlZicsXG4gIHhsaW5rUm9sZTogMSxcbiAgJ3hsaW5rOnJvbGUnOiAneGxpbmtSb2xlJyxcbiAgeGxpbmtTaG93OiAxLFxuICAneGxpbms6c2hvdyc6ICd4bGlua1Nob3cnLFxuICB4bGlua1RpdGxlOiAxLFxuICAneGxpbms6dGl0bGUnOiAneGxpbmtUaXRsZScsXG4gIHhsaW5rVHlwZTogMSxcbiAgJ3hsaW5rOnR5cGUnOiAneGxpbmtUeXBlJyxcbiAgeG1sQmFzZTogMSxcbiAgJ3htbDpiYXNlJzogJ3htbEJhc2UnLFxuICB4bWxMYW5nOiAxLFxuICAneG1sOmxhbmcnOiAneG1sTGFuZycsXG4gIHhtbG5zOiAwLFxuICAneG1sOnNwYWNlJzogJ3htbFNwYWNlJyxcbiAgeG1sbnNYbGluazogMSxcbiAgJ3htbG5zOnhsaW5rJzogJ3htbG5zWGxpbmsnLFxuICB4bWxTcGFjZTogMSxcbiAgeTE6IDAsXG4gIHkyOiAwLFxuICB5OiAwLFxuICB5Q2hhbm5lbFNlbGVjdG9yOiAxLFxuICB6OiAwLFxuICB6b29tQW5kUGFuOiAxXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHN0eWxlX3RvX29iamVjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJzdHlsZS10by1vYmplY3RcIikpO1xudmFyIHV0aWxpdGllc18xID0gcmVxdWlyZShcIi4vdXRpbGl0aWVzXCIpO1xuZnVuY3Rpb24gU3R5bGVUb0pTKHN0eWxlLCBvcHRpb25zKSB7XG4gICAgdmFyIG91dHB1dCA9IHt9O1xuICAgIGlmICghc3R5bGUgfHwgdHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBzdHlsZV90b19vYmplY3RfMVtcImRlZmF1bHRcIl0oc3R5bGUsIGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ICYmIHZhbHVlKSB7XG4gICAgICAgICAgICBvdXRwdXRbdXRpbGl0aWVzXzEuY2FtZWxDYXNlKHByb3BlcnR5LCBvcHRpb25zKV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFN0eWxlVG9KUztcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2FtZWxDYXNlID0gdm9pZCAwO1xudmFyIENVU1RPTV9QUk9QRVJUWV9SRUdFWCA9IC9eLS1bYS16QS1aMC05LV0rJC87XG52YXIgSFlQSEVOX1JFR0VYID0gLy0oW2Etel0pL2c7XG52YXIgTk9fSFlQSEVOX1JFR0VYID0gL15bXi1dKyQvO1xudmFyIFZFTkRPUl9QUkVGSVhfUkVHRVggPSAvXi0od2Via2l0fG1venxtc3xvfGtodG1sKS0vO1xudmFyIHNraXBDYW1lbENhc2UgPSBmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gIXByb3BlcnR5IHx8XG4gICAgICAgIE5PX0hZUEhFTl9SRUdFWC50ZXN0KHByb3BlcnR5KSB8fFxuICAgICAgICBDVVNUT01fUFJPUEVSVFlfUkVHRVgudGVzdChwcm9wZXJ0eSk7XG59O1xudmFyIGNhcGl0YWxpemUgPSBmdW5jdGlvbiAobWF0Y2gsIGNoYXJhY3Rlcikge1xuICAgIHJldHVybiBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKTtcbn07XG52YXIgdHJpbUh5cGhlbiA9IGZ1bmN0aW9uIChtYXRjaCwgcHJlZml4KSB7IHJldHVybiBwcmVmaXggKyBcIi1cIjsgfTtcbnZhciBjYW1lbENhc2UgPSBmdW5jdGlvbiAocHJvcGVydHksIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIGlmIChza2lwQ2FtZWxDYXNlKHByb3BlcnR5KSkge1xuICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfVxuICAgIHByb3BlcnR5ID0gcHJvcGVydHkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoIW9wdGlvbnMucmVhY3RDb21wYXQpIHtcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5yZXBsYWNlKFZFTkRPUl9QUkVGSVhfUkVHRVgsIHRyaW1IeXBoZW4pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHkucmVwbGFjZShIWVBIRU5fUkVHRVgsIGNhcGl0YWxpemUpO1xufTtcbmV4cG9ydHMuY2FtZWxDYXNlID0gY2FtZWxDYXNlO1xuIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnaW5saW5lLXN0eWxlLXBhcnNlcicpO1xuXG4vKipcbiAqIFBhcnNlcyBpbmxpbmUgc3R5bGUgdG8gb2JqZWN0LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHsgJ2xpbmUtaGVpZ2h0JzogJzQyJyB9XG4gKiBTdHlsZVRvT2JqZWN0KCdsaW5lLWhlaWdodDogNDI7Jyk7XG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgIHN0eWxlICAgICAgLSBUaGUgaW5saW5lIHN0eWxlLlxuICogQHBhcmFtICB7RnVuY3Rpb259ICAgIFtpdGVyYXRvcl0gLSBUaGUgaXRlcmF0b3IgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudWxsfE9iamVjdH1cbiAqL1xuZnVuY3Rpb24gU3R5bGVUb09iamVjdChzdHlsZSwgaXRlcmF0b3IpIHtcbiAgdmFyIG91dHB1dCA9IG51bGw7XG4gIGlmICghc3R5bGUgfHwgdHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICB2YXIgZGVjbGFyYXRpb247XG4gIHZhciBkZWNsYXJhdGlvbnMgPSBwYXJzZShzdHlsZSk7XG4gIHZhciBoYXNJdGVyYXRvciA9IHR5cGVvZiBpdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJztcbiAgdmFyIHByb3BlcnR5O1xuICB2YXIgdmFsdWU7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRlY2xhcmF0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25zW2ldO1xuICAgIHByb3BlcnR5ID0gZGVjbGFyYXRpb24ucHJvcGVydHk7XG4gICAgdmFsdWUgPSBkZWNsYXJhdGlvbi52YWx1ZTtcblxuICAgIGlmIChoYXNJdGVyYXRvcikge1xuICAgICAgaXRlcmF0b3IocHJvcGVydHksIHZhbHVlLCBkZWNsYXJhdGlvbik7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgb3V0cHV0IHx8IChvdXRwdXQgPSB7fSk7XG4gICAgICBvdXRwdXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdHlsZVRvT2JqZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==