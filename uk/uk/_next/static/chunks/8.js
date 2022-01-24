(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[8],{

/***/ "./components/home/content/content.scss":
/*!**********************************************!*\
  !*** ./components/home/content/content.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-wrapper {\n  padding-bottom: 50px;\n}\n.content-wrapper .main-wrapper .content-box {\n  margin-bottom: 30px;\n  width: calc(50% - 30px);\n}\n\n.main-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.main-wrapper .content-box {\n  line-height: 30px;\n}\n.main-wrapper .content-box a {\n  font-weight: 500;\n  color: #12245A;\n}\n.main-wrapper .content-box .list {\n  column-count: 3;\n  margin: 0 30px;\n}\n.main-wrapper .content-box .list li {\n  margin-bottom: 0;\n}\n.main-wrapper .content-box ul,\n.main-wrapper .content-box ol {\n  padding-left: 20px;\n}\n.main-wrapper .content-box ul li,\n.main-wrapper .content-box ol li {\n  margin-bottom: 10px;\n  list-style: disc;\n  line-height: 30px;\n}\n.main-wrapper .content-box .content {\n  font-size: 20px;\n  color: #151515;\n  font-weight: 700;\n  margin-bottom: 40px;\n  line-height: 40px;\n  position: relative;\n}\n.main-wrapper .content-box .content::before {\n  content: \"\";\n  position: absolute;\n  width: 80px;\n  height: 3px;\n  background: #FBD501;\n  bottom: -15px;\n  left: 0;\n}\n.main-wrapper .content-box .desc {\n  width: 100%;\n  margin-bottom: 20px;\n  font-size: 16px;\n  line-height: 30px;\n  color: #151515;\n}\n\n@media screen and (max-width: 991px) {\n  .content-wrapper {\n    padding-bottom: 30px;\n    padding-top: 30px;\n  }\n  .content-wrapper .main-wrapper .content-box {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .content-wrapper .main-wrapper .content-box p {\n    font-size: 14px;\n    line-height: 24px;\n  }\n  .content-wrapper .main-wrapper .content-box .content {\n    line-height: 30px;\n    font-size: 16px;\n  }\n  .content-wrapper .main-wrapper .content-box ul li {\n    line-height: 24px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .main-wrapper .content-box p, .main-wrapper .content-box .desc {\n    font-size: 14px;\n    line-height: 24px;\n  }\n  .main-wrapper .content-box .content {\n    font-size: 18px;\n    line-height: 32px;\n  }\n\n  .content-wrapper .main-wrapper .content-box .content {\n    line-height: 28px;\n    font-size: 16px;\n  }\n}");

/***/ }),

/***/ "./components/home/content/index.js":
/*!******************************************!*\
  !*** ./components/home/content/index.js ***!
  \******************************************/
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
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content.scss */ "./components/home/content/content.scss");



var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Essay-Countries-nextJS\\components\\home\\content\\index.js",
    _this = undefined,
    _s = $RefreshSig$();


 // Html Parser

 // scss



var Content = function Content(props) {
  _s();

  // get route
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(); // essay service content

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      essayContent1 = _useState[0],
      setessayContent1 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      essayContent2 = _useState2[0],
      setessayContent2 = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (props.serviceData) {
      var essay_content1 = [];
      var essay_content2 = [];
      var contentLength = props.serviceData.sub_contents.length;
      var data = props.serviceData.sub_contents;

      for (var i = 0; i < contentLength; i++) {
        if (i < 4) {
          essay_content1.push(data[i]);
        } else {
          essay_content2.push(data[i]);
        }
      }

      setessayContent1(essay_content1);
      setessayContent2(essay_content2);
    }
  }, [props.serviceData]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
      dangerouslySetInnerHTML: {
        __html: _content_scss__WEBPACK_IMPORTED_MODULE_4__["default"]
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "content-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "main-wrapper",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: props.bottomContent ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: essayContent2 && essayContent2.map(function (list, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content-box",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "content",
                    children: list.header && Object(html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(list.header)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "desc mb-0",
                    children: list.content && Object(html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(list.content)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 25
                  }, _this)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: essayContent1 && essayContent1.map(function (list, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content-box",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "content",
                    children: list.header && Object(html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(list.header)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "desc mb-0",
                    children: list.content && Object(html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(list.content)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 25
                  }, _this)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Content, "CLQoYFzeJkHBX85tLzyujbAa9qU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Content;
/* harmony default export */ __webpack_exports__["default"] = (Content);

var _c;

$RefreshReg$(_c, "Content");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2NvbnRlbnQvY29udGVudC5zY3NzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvY29udGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RvbWVsZW1lbnR0eXBlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RvbWhhbmRsZXIvbGliL25vZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9odG1sLWRvbS1wYXJzZXIvbGliL2NsaWVudC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9odG1sLWRvbS1wYXJzZXIvbGliL2NsaWVudC9kb21wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9odG1sLWRvbS1wYXJzZXIvbGliL2NsaWVudC9odG1sLXRvLWRvbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2h0bWwtZG9tLXBhcnNlci9saWIvY2xpZW50L3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2h0bWwtcmVhY3QtcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaHRtbC1yZWFjdC1wYXJzZXIvaW5kZXgubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaHRtbC1yZWFjdC1wYXJzZXIvbGliL2F0dHJpYnV0ZXMtdG8tcHJvcHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9odG1sLXJlYWN0LXBhcnNlci9saWIvZG9tLXRvLXJlYWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaHRtbC1yZWFjdC1wYXJzZXIvbGliL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wYXJzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wcm9wZXJ0eS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wcm9wZXJ0eS9saWIvcG9zc2libGVTdGFuZGFyZE5hbWVzT3B0aW1pemVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tanMvY2pzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tanMvY2pzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlLXRvLW9iamVjdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb250ZW50IiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImVzc2F5Q29udGVudDEiLCJzZXRlc3NheUNvbnRlbnQxIiwiZXNzYXlDb250ZW50MiIsInNldGVzc2F5Q29udGVudDIiLCJ1c2VFZmZlY3QiLCJzZXJ2aWNlRGF0YSIsImVzc2F5X2NvbnRlbnQxIiwiZXNzYXlfY29udGVudDIiLCJjb250ZW50TGVuZ3RoIiwic3ViX2NvbnRlbnRzIiwibGVuZ3RoIiwiZGF0YSIsImkiLCJwdXNoIiwiX19odG1sIiwiY29udGVudENzcyIsImJvdHRvbUNvbnRlbnQiLCJtYXAiLCJsaXN0IiwiaW5kZXgiLCJoZWFkZXIiLCJwYXJzZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFlLDhzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Q0FHQTs7Q0FHQTs7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDekI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRnlCLENBSXpCOztBQUp5QixrQkFLaUJDLHNE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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1CQUFtQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxlQUFlLG1CQUFPLENBQUMsa0hBQXVDO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLElBQUk7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVUQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1ZWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0Esd0NBQXdDLG1CQUFPLENBQUMsZ0VBQWlCO0FBQ2pFLGtCQUFrQixtQkFBTyxDQUFDLGdFQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQmE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHFCQUFxQjtBQUNoRTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQkEsWUFBWSxtQkFBTyxDQUFDLHdFQUFxQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Ysa0NBQWtDO0FBQ2xDO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksU0FBUztBQUNyQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiLmNvbnRlbnQtd3JhcHBlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuLmNvbnRlbnQtd3JhcHBlciAubWFpbi13cmFwcGVyIC5jb250ZW50LWJveCB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMzBweCk7XFxufVxcblxcbi5tYWluLXdyYXBwZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5jb250ZW50LWJveCB7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuLm1haW4td3JhcHBlciAuY29udGVudC1ib3ggYSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICMxMjI0NUE7XFxufVxcbi5tYWluLXdyYXBwZXIgLmNvbnRlbnQtYm94IC5saXN0IHtcXG4gIGNvbHVtbi1jb3VudDogMztcXG4gIG1hcmdpbjogMCAzMHB4O1xcbn1cXG4ubWFpbi13cmFwcGVyIC5jb250ZW50LWJveCAubGlzdCBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5jb250ZW50LWJveCB1bCxcXG4ubWFpbi13cmFwcGVyIC5jb250ZW50LWJveCBvbCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcbi5tYWluLXdyYXBwZXIgLmNvbnRlbnQtYm94IHVsIGxpLFxcbi5tYWluLXdyYXBwZXIgLmNvbnRlbnQtYm94IG9sIGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBsaXN0LXN0eWxlOiBkaXNjO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxufVxcbi5tYWluLXdyYXBwZXIgLmNvbnRlbnQtYm94IC5jb250ZW50IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjMTUxNTE1O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1haW4td3JhcHBlciAuY29udGVudC1ib3ggLmNvbnRlbnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjRkJENTAxO1xcbiAgYm90dG9tOiAtMTVweDtcXG4gIGxlZnQ6IDA7XFxufVxcbi5tYWluLXdyYXBwZXIgLmNvbnRlbnQtYm94IC5kZXNjIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgY29sb3I6ICMxNTE1MTU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAuY29udGVudC13cmFwcGVyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgfVxcbiAgLmNvbnRlbnQtd3JhcHBlciAubWFpbi13cmFwcGVyIC5jb250ZW50LWJveCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgLmNvbnRlbnQtd3JhcHBlciAubWFpbi13cmFwcGVyIC5jb250ZW50LWJveCBwIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXG4gIH1cXG4gIC5jb250ZW50LXdyYXBwZXIgLm1haW4td3JhcHBlciAuY29udGVudC1ib3ggLmNvbnRlbnQge1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcbiAgLmNvbnRlbnQtd3JhcHBlciAubWFpbi13cmFwcGVyIC5jb250ZW50LWJveCB1bCBsaSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xcbiAgLm1haW4td3JhcHBlciAuY29udGVudC1ib3ggcCwgLm1haW4td3JhcHBlciAuY29udGVudC1ib3ggLmRlc2Mge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgfVxcbiAgLm1haW4td3JhcHBlciAuY29udGVudC1ib3ggLmNvbnRlbnQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgfVxcblxcbiAgLmNvbnRlbnQtd3JhcHBlciAubWFpbi13cmFwcGVyIC5jb250ZW50LWJveCAuY29udGVudCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxufVwiOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8gSHRtbCBQYXJzZXJcclxuaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcclxuXHJcbi8vIHNjc3NcclxuaW1wb3J0IGNvbnRlbnRDc3MgZnJvbSBcIi4vY29udGVudC5zY3NzXCI7XHJcblxyXG5jb25zdCBDb250ZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gZ2V0IHJvdXRlXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIGVzc2F5IHNlcnZpY2UgY29udGVudFxyXG4gIGNvbnN0IFtlc3NheUNvbnRlbnQxLCBzZXRlc3NheUNvbnRlbnQxXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Vzc2F5Q29udGVudDIsIHNldGVzc2F5Q29udGVudDJdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9wcy5zZXJ2aWNlRGF0YSkge1xyXG4gICAgICBsZXQgZXNzYXlfY29udGVudDEgPSBbXTtcclxuICAgICAgbGV0IGVzc2F5X2NvbnRlbnQyID0gW107XHJcbiAgICAgIHZhciBjb250ZW50TGVuZ3RoID0gcHJvcHMuc2VydmljZURhdGEuc3ViX2NvbnRlbnRzLmxlbmd0aDtcclxuICAgICAgdmFyIGRhdGEgPSBwcm9wcy5zZXJ2aWNlRGF0YS5zdWJfY29udGVudHNcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaSA8IDQpIHtcclxuICAgICAgICAgIGVzc2F5X2NvbnRlbnQxLnB1c2goZGF0YVtpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBlc3NheV9jb250ZW50Mi5wdXNoKGRhdGFbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNldGVzc2F5Q29udGVudDEoZXNzYXlfY29udGVudDEpO1xyXG4gICAgICBzZXRlc3NheUNvbnRlbnQyKGVzc2F5X2NvbnRlbnQyKTtcclxuICAgIH1cclxuICB9LCBbcHJvcHMuc2VydmljZURhdGFdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudENzcyB9fT48L3N0eWxlPlxyXG5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmJvdHRvbUNvbnRlbnQgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7ZXNzYXlDb250ZW50MiAmJiBlc3NheUNvbnRlbnQyLm1hcCgobGlzdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJveFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdC5oZWFkZXIgJiYgcGFyc2UobGlzdC5oZWFkZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdC5jb250ZW50ICYmIHBhcnNlKGxpc3QuY29udGVudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7ZXNzYXlDb250ZW50MSAmJiBlc3NheUNvbnRlbnQxLm1hcCgobGlzdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJveFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdC5oZWFkZXIgJiYgcGFyc2UobGlzdC5oZWFkZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdC5jb250ZW50ICYmIHBhcnNlKGxpc3QuY29udGVudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Eb2N0eXBlID0gZXhwb3J0cy5DREFUQSA9IGV4cG9ydHMuVGFnID0gZXhwb3J0cy5TdHlsZSA9IGV4cG9ydHMuU2NyaXB0ID0gZXhwb3J0cy5Db21tZW50ID0gZXhwb3J0cy5EaXJlY3RpdmUgPSBleHBvcnRzLlRleHQgPSBleHBvcnRzLlJvb3QgPSBleHBvcnRzLmlzVGFnID0gZXhwb3J0cy5FbGVtZW50VHlwZSA9IHZvaWQgMDtcbi8qKiBUeXBlcyBvZiBlbGVtZW50cyBmb3VuZCBpbiBodG1scGFyc2VyMidzIERPTSAqL1xudmFyIEVsZW1lbnRUeXBlO1xuKGZ1bmN0aW9uIChFbGVtZW50VHlwZSkge1xuICAgIC8qKiBUeXBlIGZvciB0aGUgcm9vdCBlbGVtZW50IG9mIGEgZG9jdW1lbnQgKi9cbiAgICBFbGVtZW50VHlwZVtcIlJvb3RcIl0gPSBcInJvb3RcIjtcbiAgICAvKiogVHlwZSBmb3IgVGV4dCAqL1xuICAgIEVsZW1lbnRUeXBlW1wiVGV4dFwiXSA9IFwidGV4dFwiO1xuICAgIC8qKiBUeXBlIGZvciA8PyAuLi4gPz4gKi9cbiAgICBFbGVtZW50VHlwZVtcIkRpcmVjdGl2ZVwiXSA9IFwiZGlyZWN0aXZlXCI7XG4gICAgLyoqIFR5cGUgZm9yIDwhLS0gLi4uIC0tPiAqL1xuICAgIEVsZW1lbnRUeXBlW1wiQ29tbWVudFwiXSA9IFwiY29tbWVudFwiO1xuICAgIC8qKiBUeXBlIGZvciA8c2NyaXB0PiB0YWdzICovXG4gICAgRWxlbWVudFR5cGVbXCJTY3JpcHRcIl0gPSBcInNjcmlwdFwiO1xuICAgIC8qKiBUeXBlIGZvciA8c3R5bGU+IHRhZ3MgKi9cbiAgICBFbGVtZW50VHlwZVtcIlN0eWxlXCJdID0gXCJzdHlsZVwiO1xuICAgIC8qKiBUeXBlIGZvciBBbnkgdGFnICovXG4gICAgRWxlbWVudFR5cGVbXCJUYWdcIl0gPSBcInRhZ1wiO1xuICAgIC8qKiBUeXBlIGZvciA8IVtDREFUQVsgLi4uIF1dPiAqL1xuICAgIEVsZW1lbnRUeXBlW1wiQ0RBVEFcIl0gPSBcImNkYXRhXCI7XG4gICAgLyoqIFR5cGUgZm9yIDwhZG9jdHlwZSAuLi4+ICovXG4gICAgRWxlbWVudFR5cGVbXCJEb2N0eXBlXCJdID0gXCJkb2N0eXBlXCI7XG59KShFbGVtZW50VHlwZSA9IGV4cG9ydHMuRWxlbWVudFR5cGUgfHwgKGV4cG9ydHMuRWxlbWVudFR5cGUgPSB7fSkpO1xuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYSB0YWcgb3Igbm90LlxuICpcbiAqIEBwYXJhbSBlbGVtIEVsZW1lbnQgdG8gdGVzdFxuICovXG5mdW5jdGlvbiBpc1RhZyhlbGVtKSB7XG4gICAgcmV0dXJuIChlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLlRhZyB8fFxuICAgICAgICBlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLlNjcmlwdCB8fFxuICAgICAgICBlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLlN0eWxlKTtcbn1cbmV4cG9ydHMuaXNUYWcgPSBpc1RhZztcbi8vIEV4cG9ydHMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4vKiogVHlwZSBmb3IgdGhlIHJvb3QgZWxlbWVudCBvZiBhIGRvY3VtZW50ICovXG5leHBvcnRzLlJvb3QgPSBFbGVtZW50VHlwZS5Sb290O1xuLyoqIFR5cGUgZm9yIFRleHQgKi9cbmV4cG9ydHMuVGV4dCA9IEVsZW1lbnRUeXBlLlRleHQ7XG4vKiogVHlwZSBmb3IgPD8gLi4uID8+ICovXG5leHBvcnRzLkRpcmVjdGl2ZSA9IEVsZW1lbnRUeXBlLkRpcmVjdGl2ZTtcbi8qKiBUeXBlIGZvciA8IS0tIC4uLiAtLT4gKi9cbmV4cG9ydHMuQ29tbWVudCA9IEVsZW1lbnRUeXBlLkNvbW1lbnQ7XG4vKiogVHlwZSBmb3IgPHNjcmlwdD4gdGFncyAqL1xuZXhwb3J0cy5TY3JpcHQgPSBFbGVtZW50VHlwZS5TY3JpcHQ7XG4vKiogVHlwZSBmb3IgPHN0eWxlPiB0YWdzICovXG5leHBvcnRzLlN0eWxlID0gRWxlbWVudFR5cGUuU3R5bGU7XG4vKiogVHlwZSBmb3IgQW55IHRhZyAqL1xuZXhwb3J0cy5UYWcgPSBFbGVtZW50VHlwZS5UYWc7XG4vKiogVHlwZSBmb3IgPCFbQ0RBVEFbIC4uLiBdXT4gKi9cbmV4cG9ydHMuQ0RBVEEgPSBFbGVtZW50VHlwZS5DREFUQTtcbi8qKiBUeXBlIGZvciA8IWRvY3R5cGUgLi4uPiAqL1xuZXhwb3J0cy5Eb2N0eXBlID0gRWxlbWVudFR5cGUuRG9jdHlwZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNsb25lTm9kZSA9IGV4cG9ydHMuaGFzQ2hpbGRyZW4gPSBleHBvcnRzLmlzRG9jdW1lbnQgPSBleHBvcnRzLmlzRGlyZWN0aXZlID0gZXhwb3J0cy5pc0NvbW1lbnQgPSBleHBvcnRzLmlzVGV4dCA9IGV4cG9ydHMuaXNDREFUQSA9IGV4cG9ydHMuaXNUYWcgPSBleHBvcnRzLkVsZW1lbnQgPSBleHBvcnRzLkRvY3VtZW50ID0gZXhwb3J0cy5Ob2RlV2l0aENoaWxkcmVuID0gZXhwb3J0cy5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gPSBleHBvcnRzLkNvbW1lbnQgPSBleHBvcnRzLlRleHQgPSBleHBvcnRzLkRhdGFOb2RlID0gZXhwb3J0cy5Ob2RlID0gdm9pZCAwO1xudmFyIGRvbWVsZW1lbnR0eXBlXzEgPSByZXF1aXJlKFwiZG9tZWxlbWVudHR5cGVcIik7XG52YXIgbm9kZVR5cGVzID0gbmV3IE1hcChbXG4gICAgW2RvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuVGFnLCAxXSxcbiAgICBbZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5TY3JpcHQsIDFdLFxuICAgIFtkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLlN0eWxlLCAxXSxcbiAgICBbZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5EaXJlY3RpdmUsIDFdLFxuICAgIFtkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLlRleHQsIDNdLFxuICAgIFtkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLkNEQVRBLCA0XSxcbiAgICBbZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5Db21tZW50LCA4XSxcbiAgICBbZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5Sb290LCA5XSxcbl0pO1xuLyoqXG4gKiBUaGlzIG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgdGhlIHByb3RvdHlwZSBmb3IgTm9kZXMgd2hlbiBjcmVhdGluZyBhXG4gKiBET00tTGV2ZWwtMS1jb21wbGlhbnQgc3RydWN0dXJlLlxuICovXG52YXIgTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBub2RlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE5vZGUodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICAvKiogUGFyZW50IG9mIHRoZSBub2RlICovXG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgLyoqIFByZXZpb3VzIHNpYmxpbmcgKi9cbiAgICAgICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICAgICAgLyoqIE5leHQgc2libGluZyAqL1xuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgICAgICAvKiogVGhlIHN0YXJ0IGluZGV4IG9mIHRoZSBub2RlLiBSZXF1aXJlcyBgd2l0aFN0YXJ0SW5kaWNlc2Agb24gdGhlIGhhbmRsZXIgdG8gYmUgYHRydWUuICovXG4gICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IG51bGw7XG4gICAgICAgIC8qKiBUaGUgZW5kIGluZGV4IG9mIHRoZSBub2RlLiBSZXF1aXJlcyBgd2l0aEVuZEluZGljZXNgIG9uIHRoZSBoYW5kbGVyIHRvIGJlIGB0cnVlLiAqL1xuICAgICAgICB0aGlzLmVuZEluZGV4ID0gbnVsbDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCBcIm5vZGVUeXBlXCIsIHtcbiAgICAgICAgLy8gUmVhZC1vbmx5IGFsaWFzZXNcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gKF9hID0gbm9kZVR5cGVzLmdldCh0aGlzLnR5cGUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAxO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCBcInBhcmVudE5vZGVcIiwge1xuICAgICAgICAvLyBSZWFkLXdyaXRlIGFsaWFzZXMgZm9yIHByb3BlcnRpZXNcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsIFwicHJldmlvdXNTaWJsaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmV2O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChwcmV2KSB7XG4gICAgICAgICAgICB0aGlzLnByZXYgPSBwcmV2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCBcIm5leHRTaWJsaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXh0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLm5leHQgPSBuZXh0O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQ2xvbmUgdGhpcyBub2RlLCBhbmQgb3B0aW9uYWxseSBpdHMgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVjdXJzaXZlIENsb25lIGNoaWxkIG5vZGVzIGFzIHdlbGwuXG4gICAgICogQHJldHVybnMgQSBjbG9uZSBvZiB0aGUgbm9kZS5cbiAgICAgKi9cbiAgICBOb2RlLnByb3RvdHlwZS5jbG9uZU5vZGUgPSBmdW5jdGlvbiAocmVjdXJzaXZlKSB7XG4gICAgICAgIGlmIChyZWN1cnNpdmUgPT09IHZvaWQgMCkgeyByZWN1cnNpdmUgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gY2xvbmVOb2RlKHRoaXMsIHJlY3Vyc2l2ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gTm9kZTtcbn0oKSk7XG5leHBvcnRzLk5vZGUgPSBOb2RlO1xuLyoqXG4gKiBBIG5vZGUgdGhhdCBjb250YWlucyBzb21lIGRhdGEuXG4gKi9cbnZhciBEYXRhTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGF0YU5vZGUsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIG5vZGVcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgY29udGVudCBvZiB0aGUgZGF0YSBub2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gRGF0YU5vZGUodHlwZSwgZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0eXBlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGF0YU5vZGUucHJvdG90eXBlLCBcIm5vZGVWYWx1ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBEYXRhTm9kZTtcbn0oTm9kZSkpO1xuZXhwb3J0cy5EYXRhTm9kZSA9IERhdGFOb2RlO1xuLyoqXG4gKiBUZXh0IHdpdGhpbiB0aGUgZG9jdW1lbnQuXG4gKi9cbnZhciBUZXh0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUZXh0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRleHQoZGF0YSkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5UZXh0LCBkYXRhKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gVGV4dDtcbn0oRGF0YU5vZGUpKTtcbmV4cG9ydHMuVGV4dCA9IFRleHQ7XG4vKipcbiAqIENvbW1lbnRzIHdpdGhpbiB0aGUgZG9jdW1lbnQuXG4gKi9cbnZhciBDb21tZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb21tZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbW1lbnQoZGF0YSkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5Db21tZW50LCBkYXRhKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gQ29tbWVudDtcbn0oRGF0YU5vZGUpKTtcbmV4cG9ydHMuQ29tbWVudCA9IENvbW1lbnQ7XG4vKipcbiAqIFByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb25zLCBpbmNsdWRpbmcgZG9jIHR5cGVzLlxuICovXG52YXIgUHJvY2Vzc2luZ0luc3RydWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUHJvY2Vzc2luZ0luc3RydWN0aW9uKG5hbWUsIGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5EaXJlY3RpdmUsIGRhdGEpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb247XG59KERhdGFOb2RlKSk7XG5leHBvcnRzLlByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IFByb2Nlc3NpbmdJbnN0cnVjdGlvbjtcbi8qKlxuICogQSBgTm9kZWAgdGhhdCBjYW4gaGF2ZSBjaGlsZHJlbi5cbiAqL1xudmFyIE5vZGVXaXRoQ2hpbGRyZW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5vZGVXaXRoQ2hpbGRyZW4sIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHR5cGUgVHlwZSBvZiB0aGUgbm9kZS5cbiAgICAgKiBAcGFyYW0gY2hpbGRyZW4gQ2hpbGRyZW4gb2YgdGhlIG5vZGUuIE9ubHkgY2VydGFpbiBub2RlIHR5cGVzIGNhbiBoYXZlIGNoaWxkcmVuLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE5vZGVXaXRoQ2hpbGRyZW4odHlwZSwgY2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHlwZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZVdpdGhDaGlsZHJlbi5wcm90b3R5cGUsIFwiZmlyc3RDaGlsZFwiLCB7XG4gICAgICAgIC8vIEFsaWFzZXNcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5jaGlsZHJlblswXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlV2l0aENoaWxkcmVuLnByb3RvdHlwZSwgXCJsYXN0Q2hpbGRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IHRoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlV2l0aENoaWxkcmVuLnByb3RvdHlwZSwgXCJjaGlsZE5vZGVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBOb2RlV2l0aENoaWxkcmVuO1xufShOb2RlKSk7XG5leHBvcnRzLk5vZGVXaXRoQ2hpbGRyZW4gPSBOb2RlV2l0aENoaWxkcmVuO1xuLyoqXG4gKiBUaGUgcm9vdCBub2RlIG9mIHRoZSBkb2N1bWVudC5cbiAqL1xudmFyIERvY3VtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEb2N1bWVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEb2N1bWVudChjaGlsZHJlbikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5Sb290LCBjaGlsZHJlbikgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIERvY3VtZW50O1xufShOb2RlV2l0aENoaWxkcmVuKSk7XG5leHBvcnRzLkRvY3VtZW50ID0gRG9jdW1lbnQ7XG4vKipcbiAqIEFuIGVsZW1lbnQgd2l0aGluIHRoZSBET00uXG4gKi9cbnZhciBFbGVtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFbGVtZW50LCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIHRhZywgZWcuIGBkaXZgLCBgc3BhbmAuXG4gICAgICogQHBhcmFtIGF0dHJpYnMgT2JqZWN0IG1hcHBpbmcgYXR0cmlidXRlIG5hbWVzIHRvIGF0dHJpYnV0ZSB2YWx1ZXMuXG4gICAgICogQHBhcmFtIGNoaWxkcmVuIENoaWxkcmVuIG9mIHRoZSBub2RlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEVsZW1lbnQobmFtZSwgYXR0cmlicywgY2hpbGRyZW4sIHR5cGUpIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuID09PSB2b2lkIDApIHsgY2hpbGRyZW4gPSBbXTsgfVxuICAgICAgICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7IHR5cGUgPSBuYW1lID09PSBcInNjcmlwdFwiXG4gICAgICAgICAgICA/IGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuU2NyaXB0XG4gICAgICAgICAgICA6IG5hbWUgPT09IFwic3R5bGVcIlxuICAgICAgICAgICAgICAgID8gZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5TdHlsZVxuICAgICAgICAgICAgICAgIDogZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5UYWc7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHlwZSwgY2hpbGRyZW4pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBfdGhpcy5hdHRyaWJzID0gYXR0cmlicztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsIFwidGFnTmFtZVwiLCB7XG4gICAgICAgIC8vIERPTSBMZXZlbCAxIGFsaWFzZXNcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCBcImF0dHJpYnV0ZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5hdHRyaWJzKS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3RoaXMuYXR0cmlic1tuYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlOiAoX2EgPSBfdGhpc1tcIngtYXR0cmlic05hbWVzcGFjZVwiXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW25hbWVdLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IChfYiA9IF90aGlzW1wieC1hdHRyaWJzUHJlZml4XCJdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbbmFtZV0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBFbGVtZW50O1xufShOb2RlV2l0aENoaWxkcmVuKSk7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuLyoqXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGNoZWNrLlxuICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBub2RlIGlzIGEgYEVsZW1lbnRgLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNUYWcobm9kZSkge1xuICAgIHJldHVybiAoMCwgZG9tZWxlbWVudHR5cGVfMS5pc1RhZykobm9kZSk7XG59XG5leHBvcnRzLmlzVGFnID0gaXNUYWc7XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaGFzIHRoZSB0eXBlIGBDREFUQWAsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBpc0NEQVRBKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50eXBlID09PSBkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLkNEQVRBO1xufVxuZXhwb3J0cy5pc0NEQVRBID0gaXNDREFUQTtcbi8qKlxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbm9kZSBoYXMgdGhlIHR5cGUgYFRleHRgLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNUZXh0KG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50eXBlID09PSBkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLlRleHQ7XG59XG5leHBvcnRzLmlzVGV4dCA9IGlzVGV4dDtcbi8qKlxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbm9kZSBoYXMgdGhlIHR5cGUgYENvbW1lbnRgLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNDb21tZW50KG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50eXBlID09PSBkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLkNvbW1lbnQ7XG59XG5leHBvcnRzLmlzQ29tbWVudCA9IGlzQ29tbWVudDtcbi8qKlxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbm9kZSBoYXMgdGhlIHR5cGUgYFByb2Nlc3NpbmdJbnN0cnVjdGlvbmAsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBpc0RpcmVjdGl2ZShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5EaXJlY3RpdmU7XG59XG5leHBvcnRzLmlzRGlyZWN0aXZlID0gaXNEaXJlY3RpdmU7XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaGFzIHRoZSB0eXBlIGBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb25gLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNEb2N1bWVudChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5Sb290O1xufVxuZXhwb3J0cy5pc0RvY3VtZW50ID0gaXNEb2N1bWVudDtcbi8qKlxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbm9kZSBpcyBhIGBOb2RlV2l0aENoaWxkcmVuYCAoaGFzIGNoaWxkcmVuKSwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGhhc0NoaWxkcmVuKG5vZGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5vZGUsIFwiY2hpbGRyZW5cIik7XG59XG5leHBvcnRzLmhhc0NoaWxkcmVuID0gaGFzQ2hpbGRyZW47XG4vKipcbiAqIENsb25lIGEgbm9kZSwgYW5kIG9wdGlvbmFsbHkgaXRzIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSByZWN1cnNpdmUgQ2xvbmUgY2hpbGQgbm9kZXMgYXMgd2VsbC5cbiAqIEByZXR1cm5zIEEgY2xvbmUgb2YgdGhlIG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlLCByZWN1cnNpdmUpIHtcbiAgICBpZiAocmVjdXJzaXZlID09PSB2b2lkIDApIHsgcmVjdXJzaXZlID0gZmFsc2U7IH1cbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmIChpc1RleHQobm9kZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gbmV3IFRleHQobm9kZS5kYXRhKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNDb21tZW50KG5vZGUpKSB7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBDb21tZW50KG5vZGUuZGF0YSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzVGFnKG5vZGUpKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHJlY3Vyc2l2ZSA/IGNsb25lQ2hpbGRyZW4obm9kZS5jaGlsZHJlbikgOiBbXTtcbiAgICAgICAgdmFyIGNsb25lXzEgPSBuZXcgRWxlbWVudChub2RlLm5hbWUsIF9fYXNzaWduKHt9LCBub2RlLmF0dHJpYnMpLCBjaGlsZHJlbik7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiAoY2hpbGQucGFyZW50ID0gY2xvbmVfMSk7IH0pO1xuICAgICAgICBpZiAobm9kZVtcIngtYXR0cmlic05hbWVzcGFjZVwiXSkge1xuICAgICAgICAgICAgY2xvbmVfMVtcIngtYXR0cmlic05hbWVzcGFjZVwiXSA9IF9fYXNzaWduKHt9LCBub2RlW1wieC1hdHRyaWJzTmFtZXNwYWNlXCJdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZVtcIngtYXR0cmlic1ByZWZpeFwiXSkge1xuICAgICAgICAgICAgY2xvbmVfMVtcIngtYXR0cmlic1ByZWZpeFwiXSA9IF9fYXNzaWduKHt9LCBub2RlW1wieC1hdHRyaWJzUHJlZml4XCJdKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBjbG9uZV8xO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0NEQVRBKG5vZGUpKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHJlY3Vyc2l2ZSA/IGNsb25lQ2hpbGRyZW4obm9kZS5jaGlsZHJlbikgOiBbXTtcbiAgICAgICAgdmFyIGNsb25lXzIgPSBuZXcgTm9kZVdpdGhDaGlsZHJlbihkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLkNEQVRBLCBjaGlsZHJlbik7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiAoY2hpbGQucGFyZW50ID0gY2xvbmVfMik7IH0pO1xuICAgICAgICByZXN1bHQgPSBjbG9uZV8yO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0RvY3VtZW50KG5vZGUpKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHJlY3Vyc2l2ZSA/IGNsb25lQ2hpbGRyZW4obm9kZS5jaGlsZHJlbikgOiBbXTtcbiAgICAgICAgdmFyIGNsb25lXzMgPSBuZXcgRG9jdW1lbnQoY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gKGNoaWxkLnBhcmVudCA9IGNsb25lXzMpOyB9KTtcbiAgICAgICAgaWYgKG5vZGVbXCJ4LW1vZGVcIl0pIHtcbiAgICAgICAgICAgIGNsb25lXzNbXCJ4LW1vZGVcIl0gPSBub2RlW1wieC1tb2RlXCJdO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGNsb25lXzM7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzRGlyZWN0aXZlKG5vZGUpKSB7XG4gICAgICAgIHZhciBpbnN0cnVjdGlvbiA9IG5ldyBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24obm9kZS5uYW1lLCBub2RlLmRhdGEpO1xuICAgICAgICBpZiAobm9kZVtcIngtbmFtZVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpbnN0cnVjdGlvbltcIngtbmFtZVwiXSA9IG5vZGVbXCJ4LW5hbWVcIl07XG4gICAgICAgICAgICBpbnN0cnVjdGlvbltcIngtcHVibGljSWRcIl0gPSBub2RlW1wieC1wdWJsaWNJZFwiXTtcbiAgICAgICAgICAgIGluc3RydWN0aW9uW1wieC1zeXN0ZW1JZFwiXSA9IG5vZGVbXCJ4LXN5c3RlbUlkXCJdO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGluc3RydWN0aW9uO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIHlldDogXCIgKyBub2RlLnR5cGUpO1xuICAgIH1cbiAgICByZXN1bHQuc3RhcnRJbmRleCA9IG5vZGUuc3RhcnRJbmRleDtcbiAgICByZXN1bHQuZW5kSW5kZXggPSBub2RlLmVuZEluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLmNsb25lTm9kZSA9IGNsb25lTm9kZTtcbmZ1bmN0aW9uIGNsb25lQ2hpbGRyZW4oY2hpbGRzKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gY2hpbGRzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNsb25lTm9kZShjaGlsZCwgdHJ1ZSk7IH0pO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2hpbGRyZW5baV0ucHJldiA9IGNoaWxkcmVuW2kgLSAxXTtcbiAgICAgICAgY2hpbGRyZW5baSAtIDFdLm5leHQgPSBjaGlsZHJlbltpXTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xufVxuIiwiLyoqXG4gKiBTVkcgZWxlbWVudHMgYXJlIGNhc2Utc2Vuc2l0aXZlLlxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL1NWRy9FbGVtZW50I1NWR19lbGVtZW50c19BX3RvX1p9XG4gKi9cbnZhciBDQVNFX1NFTlNJVElWRV9UQUdfTkFNRVMgPSBbXG4gICdhbmltYXRlTW90aW9uJyxcbiAgJ2FuaW1hdGVUcmFuc2Zvcm0nLFxuICAnY2xpcFBhdGgnLFxuICAnZmVCbGVuZCcsXG4gICdmZUNvbG9yTWF0cml4JyxcbiAgJ2ZlQ29tcG9uZW50VHJhbnNmZXInLFxuICAnZmVDb21wb3NpdGUnLFxuICAnZmVDb252b2x2ZU1hdHJpeCcsXG4gICdmZURpZmZ1c2VMaWdodGluZycsXG4gICdmZURpc3BsYWNlbWVudE1hcCcsXG4gICdmZURyb3BTaGFkb3cnLFxuICAnZmVGbG9vZCcsXG4gICdmZUZ1bmNBJyxcbiAgJ2ZlRnVuY0InLFxuICAnZmVGdW5jRycsXG4gICdmZUZ1bmNSJyxcbiAgJ2ZlR2F1c3NhaW5CbHVyJyxcbiAgJ2ZlSW1hZ2UnLFxuICAnZmVNZXJnZScsXG4gICdmZU1lcmdlTm9kZScsXG4gICdmZU1vcnBob2xvZ3knLFxuICAnZmVPZmZzZXQnLFxuICAnZmVQb2ludExpZ2h0JyxcbiAgJ2ZlU3BlY3VsYXJMaWdodGluZycsXG4gICdmZVNwb3RMaWdodCcsXG4gICdmZVRpbGUnLFxuICAnZmVUdXJidWxlbmNlJyxcbiAgJ2ZvcmVpZ25PYmplY3QnLFxuICAnbGluZWFyR3JhZGllbnQnLFxuICAncmFkaWFsR3JhZGllbnQnLFxuICAndGV4dFBhdGgnXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ0FTRV9TRU5TSVRJVkVfVEFHX05BTUVTOiBDQVNFX1NFTlNJVElWRV9UQUdfTkFNRVNcbn07XG4iLCIvLyBjb25zdGFudHNcbnZhciBIVE1MID0gJ2h0bWwnO1xudmFyIEhFQUQgPSAnaGVhZCc7XG52YXIgQk9EWSA9ICdib2R5JztcbnZhciBGSVJTVF9UQUdfUkVHRVggPSAvPChbYS16QS1aXStbMC05XT8pLzsgLy8gZS5nLiwgPGgxPlxudmFyIEhFQURfVEFHX1JFR0VYID0gLzxoZWFkLio+L2k7XG52YXIgQk9EWV9UQUdfUkVHRVggPSAvPGJvZHkuKj4vaTtcblxuLy8gZmFsbHMgYmFjayB0byBgcGFyc2VGcm9tU3RyaW5nYCBpZiBgY3JlYXRlSFRNTERvY3VtZW50YCBjYW5ub3QgYmUgdXNlZFxudmFyIHBhcnNlRnJvbURvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnRgJ1xuICApO1xufTtcblxudmFyIHBhcnNlRnJvbVN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBgRE9NUGFyc2VyLnByb3RvdHlwZS5wYXJzZUZyb21TdHJpbmdgJ1xuICApO1xufTtcblxuLyoqXG4gKiBET01QYXJzZXIgKHBlcmZvcm1hbmNlOiBzbG93KS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0FQSS9ET01QYXJzZXIjUGFyc2luZ19hbl9TVkdfb3JfSFRNTF9kb2N1bWVudFxuICovXG5pZiAodHlwZW9mIHdpbmRvdy5ET01QYXJzZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgdmFyIGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gIHZhciBtaW1lVHlwZSA9ICd0ZXh0L2h0bWwnO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIEhUTUwgZG9jdW1lbnQgdXNpbmcgYERPTVBhcnNlci5wYXJzZUZyb21TdHJpbmdgLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGh0bWwgICAgICAtIFRoZSBIVE1MIHN0cmluZy5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBbdGFnTmFtZV0gLSBUaGUgZWxlbWVudCB0byByZW5kZXIgdGhlIEhUTUwgKHdpdGggJ2JvZHknIGFzIGZhbGxiYWNrKS5cbiAgICogQHJldHVybiB7SFRNTERvY3VtZW50fVxuICAgKi9cbiAgcGFyc2VGcm9tU3RyaW5nID0gZnVuY3Rpb24gKGh0bWwsIHRhZ05hbWUpIHtcbiAgICBpZiAodGFnTmFtZSkge1xuICAgICAgaHRtbCA9ICc8JyArIHRhZ05hbWUgKyAnPicgKyBodG1sICsgJzwvJyArIHRhZ05hbWUgKyAnPic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgbWltZVR5cGUpO1xuICB9O1xuXG4gIHBhcnNlRnJvbURvY3VtZW50ID0gcGFyc2VGcm9tU3RyaW5nO1xufVxuXG4vKipcbiAqIERPTUltcGxlbWVudGF0aW9uIChwZXJmb3JtYW5jZTogZmFpcikuXG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9BUEkvRE9NSW1wbGVtZW50YXRpb24vY3JlYXRlSFRNTERvY3VtZW50XG4gKi9cbmlmIChkb2N1bWVudC5pbXBsZW1lbnRhdGlvbikge1xuICB2YXIgaXNJRSA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzJykuaXNJRTtcblxuICAvLyB0aXRsZSBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgaW4gSUVcbiAgLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9mZjk3NTQ1Nyh2PXZzLjg1KS5hc3B4XG4gIHZhciBkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXG4gICAgaXNJRSgpID8gJ2h0bWwtZG9tLXBhcnNlcicgOiB1bmRlZmluZWRcbiAgKTtcblxuICAvKipcbiAgICogVXNlIEhUTUwgZG9jdW1lbnQgY3JlYXRlZCBieSBgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50YC5cbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBodG1sICAgICAgLSBUaGUgSFRNTCBzdHJpbmcuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gW3RhZ05hbWVdIC0gVGhlIGVsZW1lbnQgdG8gcmVuZGVyIHRoZSBIVE1MICh3aXRoICdib2R5JyBhcyBmYWxsYmFjaykuXG4gICAqIEByZXR1cm4ge0hUTUxEb2N1bWVudH1cbiAgICovXG4gIHBhcnNlRnJvbURvY3VtZW50ID0gZnVuY3Rpb24gKGh0bWwsIHRhZ05hbWUpIHtcbiAgICBpZiAodGFnTmFtZSkge1xuICAgICAgZG9jLmRvY3VtZW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKVswXS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgcmV0dXJuIGRvYztcbiAgICB9XG5cbiAgICBkb2MuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGRvYztcbiAgfTtcbn1cblxuLyoqXG4gKiBUZW1wbGF0ZSAocGVyZm9ybWFuY2U6IGZhc3QpLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvSFRNTC9FbGVtZW50L3RlbXBsYXRlXG4gKi9cbnZhciB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG52YXIgcGFyc2VGcm9tVGVtcGxhdGU7XG5cbmlmICh0ZW1wbGF0ZS5jb250ZW50KSB7XG4gIC8qKlxuICAgKiBVc2VzIGEgdGVtcGxhdGUgZWxlbWVudCAoY29udGVudCBmcmFnbWVudCkgdG8gcGFyc2UgSFRNTC5cbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBodG1sIC0gVGhlIEhUTUwgc3RyaW5nLlxuICAgKiBAcmV0dXJuIHtOb2RlTGlzdH1cbiAgICovXG4gIHBhcnNlRnJvbVRlbXBsYXRlID0gZnVuY3Rpb24gKGh0bWwpIHtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNoaWxkTm9kZXM7XG4gIH07XG59XG5cbi8qKlxuICogUGFyc2VzIEhUTUwgc3RyaW5nIHRvIERPTSBub2Rlcy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgaHRtbCAtIEhUTUwgbWFya3VwLlxuICogQHJldHVybiB7Tm9kZUxpc3R9XG4gKi9cbmZ1bmN0aW9uIGRvbXBhcnNlcihodG1sKSB7XG4gIHZhciBmaXJzdFRhZ05hbWU7XG4gIHZhciBtYXRjaCA9IGh0bWwubWF0Y2goRklSU1RfVEFHX1JFR0VYKTtcblxuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICBmaXJzdFRhZ05hbWUgPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgdmFyIGRvYztcbiAgdmFyIGVsZW1lbnQ7XG4gIHZhciBlbGVtZW50cztcblxuICBzd2l0Y2ggKGZpcnN0VGFnTmFtZSkge1xuICAgIGNhc2UgSFRNTDpcbiAgICAgIGRvYyA9IHBhcnNlRnJvbVN0cmluZyhodG1sKTtcblxuICAgICAgLy8gdGhlIGNyZWF0ZWQgZG9jdW1lbnQgbWF5IGNvbWUgd2l0aCBmaWxsZXIgaGVhZC9ib2R5IGVsZW1lbnRzLFxuICAgICAgLy8gc28gbWFrZSBzdXJlIHRvIHJlbW92ZSB0aGVtIGlmIHRoZXkgZG9uJ3QgYWN0dWFsbHkgZXhpc3RcbiAgICAgIGlmICghSEVBRF9UQUdfUkVHRVgudGVzdChodG1sKSkge1xuICAgICAgICBlbGVtZW50ID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKEhFQUQpWzBdO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIUJPRFlfVEFHX1JFR0VYLnRlc3QoaHRtbCkpIHtcbiAgICAgICAgZWxlbWVudCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShCT0RZKVswXTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShIVE1MKTtcblxuICAgIGNhc2UgSEVBRDpcbiAgICBjYXNlIEJPRFk6XG4gICAgICBlbGVtZW50cyA9IHBhcnNlRnJvbURvY3VtZW50KGh0bWwpLmdldEVsZW1lbnRzQnlUYWdOYW1lKGZpcnN0VGFnTmFtZSk7XG5cbiAgICAgIC8vIGlmIHRoZXJlJ3MgYSBzaWJsaW5nIGVsZW1lbnQsIHRoZW4gcmV0dXJuIGJvdGggZWxlbWVudHNcbiAgICAgIGlmIChCT0RZX1RBR19SRUdFWC50ZXN0KGh0bWwpICYmIEhFQURfVEFHX1JFR0VYLnRlc3QoaHRtbCkpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzWzBdLnBhcmVudE5vZGUuY2hpbGROb2RlcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbGVtZW50cztcblxuICAgIC8vIGxvdy1sZXZlbCB0YWcgb3IgdGV4dFxuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAocGFyc2VGcm9tVGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRnJvbVRlbXBsYXRlKGh0bWwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VGcm9tRG9jdW1lbnQoaHRtbCwgQk9EWSkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoQk9EWSlbMF1cbiAgICAgICAgLmNoaWxkTm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21wYXJzZXI7XG4iLCJ2YXIgZG9tcGFyc2VyID0gcmVxdWlyZSgnLi9kb21wYXJzZXInKTtcbnZhciBmb3JtYXRET00gPSByZXF1aXJlKCcuL3V0aWxpdGllcycpLmZvcm1hdERPTTtcblxudmFyIERJUkVDVElWRV9SRUdFWCA9IC88KCFbYS16QS1aXFxzXSspPi87IC8vIGUuZy4sIDwhZG9jdHlwZSBodG1sPlxuXG4vKipcbiAqIFBhcnNlcyBIVE1MIHN0cmluZyB0byBET00gbm9kZXMgaW4gYnJvd3Nlci5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGh0bWwgIC0gSFRNTCBtYXJrdXAuXG4gKiBAcmV0dXJuIHtEb21FbGVtZW50W119IC0gRE9NIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBIVE1MRE9NUGFyc2VyKGh0bWwpIHtcbiAgaWYgKHR5cGVvZiBodG1sICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIGlmIChodG1sID09PSAnJykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vIG1hdGNoIGRpcmVjdGl2ZVxuICB2YXIgbWF0Y2ggPSBodG1sLm1hdGNoKERJUkVDVElWRV9SRUdFWCk7XG4gIHZhciBkaXJlY3RpdmU7XG5cbiAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgZGlyZWN0aXZlID0gbWF0Y2hbMV07XG4gIH1cblxuICByZXR1cm4gZm9ybWF0RE9NKGRvbXBhcnNlcihodG1sKSwgbnVsbCwgZGlyZWN0aXZlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIVE1MRE9NUGFyc2VyO1xuIiwidmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG52YXIgZG9taGFuZGxlciA9IHJlcXVpcmUoJ2RvbWhhbmRsZXIvbGliL25vZGUnKTtcblxudmFyIENBU0VfU0VOU0lUSVZFX1RBR19OQU1FUyA9IGNvbnN0YW50cy5DQVNFX1NFTlNJVElWRV9UQUdfTkFNRVM7XG5cbnZhciBDb21tZW50ID0gZG9taGFuZGxlci5Db21tZW50O1xudmFyIEVsZW1lbnQgPSBkb21oYW5kbGVyLkVsZW1lbnQ7XG52YXIgUHJvY2Vzc2luZ0luc3RydWN0aW9uID0gZG9taGFuZGxlci5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb247XG52YXIgVGV4dCA9IGRvbWhhbmRsZXIuVGV4dDtcblxudmFyIGNhc2VTZW5zaXRpdmVUYWdOYW1lc01hcCA9IHt9O1xudmFyIHRhZ05hbWU7XG5cbmZvciAodmFyIGkgPSAwLCBsZW4gPSBDQVNFX1NFTlNJVElWRV9UQUdfTkFNRVMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgdGFnTmFtZSA9IENBU0VfU0VOU0lUSVZFX1RBR19OQU1FU1tpXTtcbiAgY2FzZVNlbnNpdGl2ZVRhZ05hbWVzTWFwW3RhZ05hbWUudG9Mb3dlckNhc2UoKV0gPSB0YWdOYW1lO1xufVxuXG4vKipcbiAqIEdldHMgY2FzZS1zZW5zaXRpdmUgdGFnIG5hbWUuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgdGFnTmFtZSAtIFRhZyBuYW1lIGluIGxvd2VyY2FzZS5cbiAqIEByZXR1cm4ge3N0cmluZ3x1bmRlZmluZWR9ICAgICAgICAgLSBDYXNlLXNlbnNpdGl2ZSB0YWcgbmFtZS5cbiAqL1xuZnVuY3Rpb24gZ2V0Q2FzZVNlbnNpdGl2ZVRhZ05hbWUodGFnTmFtZSkge1xuICByZXR1cm4gY2FzZVNlbnNpdGl2ZVRhZ05hbWVzTWFwW3RhZ05hbWVdO1xufVxuXG4vKipcbiAqIEZvcm1hdHMgRE9NIGF0dHJpYnV0ZXMgdG8gYSBoYXNoIG1hcC5cbiAqXG4gKiBAcGFyYW0gIHtOYW1lZE5vZGVNYXB9IGF0dHJpYnV0ZXMgLSBMaXN0IG9mIGF0dHJpYnV0ZXMuXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgICAgICAgICAgLSBNYXAgb2YgYXR0cmlidXRlIG5hbWUgdG8gdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdEF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIHZhciBhdHRyaWJ1dGU7XG4gIC8vIGBOYW1lZE5vZGVNYXBgIGlzIGFycmF5LWxpa2VcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGF0dHJpYnV0ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzW2ldO1xuICAgIHJlc3VsdFthdHRyaWJ1dGUubmFtZV0gPSBhdHRyaWJ1dGUudmFsdWU7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0cyB0aGUgdGFnIG5hbWUgaWYgaXQgaXMgY2FzZS1zZW5zaXRpdmUgKFNWRykuXG4gKiBPdGhlcndpc2UsIHJldHVybnMgdGhlIGxvd2VyY2FzZSB0YWcgbmFtZSAoSFRNTCkuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB0YWdOYW1lIC0gTG93ZXJjYXNlIHRhZyBuYW1lLlxuICogQHJldHVybiB7c3RyaW5nfSAgICAgICAgIC0gRm9ybWF0dGVkIHRhZyBuYW1lLlxuICovXG5mdW5jdGlvbiBmb3JtYXRUYWdOYW1lKHRhZ05hbWUpIHtcbiAgdGFnTmFtZSA9IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgdmFyIGNhc2VTZW5zaXRpdmVUYWdOYW1lID0gZ2V0Q2FzZVNlbnNpdGl2ZVRhZ05hbWUodGFnTmFtZSk7XG4gIGlmIChjYXNlU2Vuc2l0aXZlVGFnTmFtZSkge1xuICAgIHJldHVybiBjYXNlU2Vuc2l0aXZlVGFnTmFtZTtcbiAgfVxuICByZXR1cm4gdGFnTmFtZTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIERPTSBub2RlcyB0byBgZG9taGFuZGxlcmAgbm9kZXMuXG4gKlxuICogQHBhcmFtICB7Tm9kZUxpc3R9ICAgICBub2RlcyAgICAgICAgIC0gRE9NIG5vZGVzLlxuICogQHBhcmFtICB7RWxlbWVudHxudWxsfSBbcGFyZW50PW51bGxdIC0gUGFyZW50IG5vZGUuXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgIFtkaXJlY3RpdmVdICAgLSBEaXJlY3RpdmUuXG4gKiBAcmV0dXJuIHtBcnJheTxDb21tZW50fEVsZW1lbnR8UHJvY2Vzc2luZ0luc3RydWN0aW9ufFRleHQ+fVxuICovXG5mdW5jdGlvbiBmb3JtYXRET00obm9kZXMsIHBhcmVudCwgZGlyZWN0aXZlKSB7XG4gIHBhcmVudCA9IHBhcmVudCB8fCBudWxsO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW4gPSBub2Rlcy5sZW5ndGg7IGluZGV4IDwgbGVuOyBpbmRleCsrKSB7XG4gICAgdmFyIG5vZGUgPSBub2Rlc1tpbmRleF07XG4gICAgdmFyIGN1cnJlbnQ7XG5cbiAgICAvLyBzZXQgdGhlIG5vZGUgZGF0YSBnaXZlbiB0aGUgdHlwZVxuICAgIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICAvLyBzY3JpcHQsIHN0eWxlLCBvciB0YWdcbiAgICAgICAgY3VycmVudCA9IG5ldyBFbGVtZW50KFxuICAgICAgICAgIGZvcm1hdFRhZ05hbWUobm9kZS5ub2RlTmFtZSksXG4gICAgICAgICAgZm9ybWF0QXR0cmlidXRlcyhub2RlLmF0dHJpYnV0ZXMpXG4gICAgICAgICk7XG4gICAgICAgIGN1cnJlbnQuY2hpbGRyZW4gPSBmb3JtYXRET00obm9kZS5jaGlsZE5vZGVzLCBjdXJyZW50KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgY3VycmVudCA9IG5ldyBUZXh0KG5vZGUubm9kZVZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgODpcbiAgICAgICAgY3VycmVudCA9IG5ldyBDb21tZW50KG5vZGUubm9kZVZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHNldCBwcmV2aW91cyBub2RlIG5leHRcbiAgICB2YXIgcHJldiA9IHJlc3VsdFtpbmRleCAtIDFdIHx8IG51bGw7XG4gICAgaWYgKHByZXYpIHtcbiAgICAgIHByZXYubmV4dCA9IGN1cnJlbnQ7XG4gICAgfVxuXG4gICAgLy8gc2V0IHByb3BlcnRpZXMgZm9yIGN1cnJlbnQgbm9kZVxuICAgIGN1cnJlbnQucGFyZW50ID0gcGFyZW50O1xuICAgIGN1cnJlbnQucHJldiA9IHByZXY7XG4gICAgY3VycmVudC5uZXh0ID0gbnVsbDtcblxuICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuICB9XG5cbiAgaWYgKGRpcmVjdGl2ZSkge1xuICAgIGN1cnJlbnQgPSBuZXcgUHJvY2Vzc2luZ0luc3RydWN0aW9uKFxuICAgICAgZGlyZWN0aXZlLnN1YnN0cmluZygwLCBkaXJlY3RpdmUuaW5kZXhPZignICcpKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgZGlyZWN0aXZlXG4gICAgKTtcbiAgICBjdXJyZW50Lm5leHQgPSByZXN1bHRbMF0gfHwgbnVsbDtcbiAgICBjdXJyZW50LnBhcmVudCA9IHBhcmVudDtcbiAgICByZXN1bHQudW5zaGlmdChjdXJyZW50KTtcblxuICAgIGlmIChyZXN1bHRbMV0pIHtcbiAgICAgIHJlc3VsdFsxXS5wcmV2ID0gcmVzdWx0WzBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZWN0cyBpZiBicm93c2VyIGlzIEludGVybmV0IEV4cGxvcmVyLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gV2hldGhlciBJRSBpcyBkZXRlY3RlZC5cbiAqL1xuZnVuY3Rpb24gaXNJRSgpIHtcbiAgcmV0dXJuIC8oTVNJRSB8VHJpZGVudFxcL3xFZGdlXFwvKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZvcm1hdEF0dHJpYnV0ZXM6IGZvcm1hdEF0dHJpYnV0ZXMsXG4gIGZvcm1hdERPTTogZm9ybWF0RE9NLFxuICBpc0lFOiBpc0lFXG59O1xuIiwidmFyIGRvbVRvUmVhY3QgPSByZXF1aXJlKCcuL2xpYi9kb20tdG8tcmVhY3QnKTtcbnZhciBhdHRyaWJ1dGVzVG9Qcm9wcyA9IHJlcXVpcmUoJy4vbGliL2F0dHJpYnV0ZXMtdG8tcHJvcHMnKTtcbnZhciBodG1sVG9ET00gPSByZXF1aXJlKCdodG1sLWRvbS1wYXJzZXInKTtcblxudmFyIGRvbVBhcnNlck9wdGlvbnMgPSB7IGxvd2VyQ2FzZUF0dHJpYnV0ZU5hbWVzOiBmYWxzZSB9O1xuXG4vKipcbiAqIENvbnZlcnRzIEhUTUwgc3RyaW5nIHRvIFJlYWN0IGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gICBodG1sICAgICAgICAgICAgICAgICAgICAtIEhUTUwgc3RyaW5nLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIFtvcHRpb25zXSAgICAgICAgICAgICAgIC0gUGFyc2VyIG9wdGlvbnMuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgW29wdGlvbnMuaHRtbHBhcnNlcjJdICAgLSBodG1scGFyc2VyMiBvcHRpb25zLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIFtvcHRpb25zLmxpYnJhcnldICAgICAgIC0gTGlicmFyeSBmb3IgUmVhY3QsIFByZWFjdCwgZXRjLlxuICogQHBhcmFtICB7RnVuY3Rpb259IFtvcHRpb25zLnJlcGxhY2VdICAgICAgIC0gUmVwbGFjZSBtZXRob2QuXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudHxKU1guRWxlbWVudFtdfFN0cmluZ30gLSBSZWFjdCBlbGVtZW50KHMpLCBlbXB0eSBhcnJheSwgb3Igc3RyaW5nLlxuICovXG5mdW5jdGlvbiBIVE1MUmVhY3RQYXJzZXIoaHRtbCwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZycpO1xuICB9XG4gIGlmIChodG1sID09PSAnJykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgcmV0dXJuIGRvbVRvUmVhY3QoXG4gICAgaHRtbFRvRE9NKGh0bWwsIG9wdGlvbnMuaHRtbHBhcnNlcjIgfHwgZG9tUGFyc2VyT3B0aW9ucyksXG4gICAgb3B0aW9uc1xuICApO1xufVxuXG5IVE1MUmVhY3RQYXJzZXIuZG9tVG9SZWFjdCA9IGRvbVRvUmVhY3Q7XG5IVE1MUmVhY3RQYXJzZXIuaHRtbFRvRE9NID0gaHRtbFRvRE9NO1xuSFRNTFJlYWN0UGFyc2VyLmF0dHJpYnV0ZXNUb1Byb3BzID0gYXR0cmlidXRlc1RvUHJvcHM7XG5cbi8vIHN1cHBvcnQgQ29tbW9uSlMgYW5kIEVTIE1vZHVsZXNcbm1vZHVsZS5leHBvcnRzID0gSFRNTFJlYWN0UGFyc2VyO1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IEhUTUxSZWFjdFBhcnNlcjtcbiIsImltcG9ydCBIVE1MUmVhY3RQYXJzZXIgZnJvbSAnLi9pbmRleC5qcyc7XG5cbmV4cG9ydCB2YXIgZG9tVG9SZWFjdCA9IEhUTUxSZWFjdFBhcnNlci5kb21Ub1JlYWN0O1xuZXhwb3J0IHZhciBodG1sVG9ET00gPSBIVE1MUmVhY3RQYXJzZXIuaHRtbFRvRE9NO1xuZXhwb3J0IHZhciBhdHRyaWJ1dGVzVG9Qcm9wcyA9IEhUTUxSZWFjdFBhcnNlci5hdHRyaWJ1dGVzVG9Qcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgSFRNTFJlYWN0UGFyc2VyO1xuIiwidmFyIHJlYWN0UHJvcGVydHkgPSByZXF1aXJlKCdyZWFjdC1wcm9wZXJ0eScpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzJyk7XG5cbi8qKlxuICogQ29udmVydHMgSFRNTC9TVkcgRE9NIGF0dHJpYnV0ZXMgdG8gUmVhY3QgcHJvcHMuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBbYXR0cmlidXRlcz17fV0gLSBIVE1ML1NWRyBET00gYXR0cmlidXRlcy5cbiAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgICAgICAgIC0gUmVhY3QgcHJvcHMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXR0cmlidXRlc1RvUHJvcHMoYXR0cmlidXRlcykge1xuICBhdHRyaWJ1dGVzID0gYXR0cmlidXRlcyB8fCB7fTtcblxuICB2YXIgYXR0cmlidXRlTmFtZTtcbiAgdmFyIGF0dHJpYnV0ZU5hbWVMb3dlckNhc2VkO1xuICB2YXIgYXR0cmlidXRlVmFsdWU7XG4gIHZhciBwcm9wTmFtZTtcbiAgdmFyIHByb3BlcnR5SW5mbztcbiAgdmFyIHByb3BzID0ge307XG5cbiAgZm9yIChhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV07XG5cbiAgICAvLyBBUklBIChhcmlhLSopIG9yIGN1c3RvbSBkYXRhIChkYXRhLSopIGF0dHJpYnV0ZVxuICAgIGlmIChyZWFjdFByb3BlcnR5LmlzQ3VzdG9tQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICBwcm9wc1thdHRyaWJ1dGVOYW1lXSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gY29udmVydCBIVE1ML1NWRyBhdHRyaWJ1dGUgdG8gUmVhY3QgcHJvcFxuICAgIGF0dHJpYnV0ZU5hbWVMb3dlckNhc2VkID0gYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIHByb3BOYW1lID0gcmVhY3RQcm9wZXJ0eS5wb3NzaWJsZVN0YW5kYXJkTmFtZXNbYXR0cmlidXRlTmFtZUxvd2VyQ2FzZWRdO1xuXG4gICAgaWYgKHByb3BOYW1lKSB7XG4gICAgICBwcm9wc1twcm9wTmFtZV0gPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgIHByb3BlcnR5SW5mbyA9IHJlYWN0UHJvcGVydHkuZ2V0UHJvcGVydHlJbmZvKHByb3BOYW1lKTtcbiAgICAgIHN3aXRjaCAocHJvcGVydHlJbmZvICYmIHByb3BlcnR5SW5mby50eXBlKSB7XG4gICAgICAgIGNhc2UgcmVhY3RQcm9wZXJ0eS5CT09MRUFOOlxuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcmVhY3RQcm9wZXJ0eS5PVkVSTE9BREVEX0JPT0xFQU46XG4gICAgICAgICAgaWYgKGF0dHJpYnV0ZVZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBwcmVzZXJ2ZSBjdXN0b20gYXR0cmlidXRlIGlmIFJlYWN0ID49MTZcbiAgICBpZiAodXRpbGl0aWVzLlBSRVNFUlZFX0NVU1RPTV9BVFRSSUJVVEVTKSB7XG4gICAgICBwcm9wc1thdHRyaWJ1dGVOYW1lXSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRyYW5zZm9ybSBpbmxpbmUgc3R5bGUgdG8gb2JqZWN0XG4gIHV0aWxpdGllcy5zZXRTdHlsZVByb3AoYXR0cmlidXRlcy5zdHlsZSwgcHJvcHMpO1xuXG4gIHJldHVybiBwcm9wcztcbn07XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGF0dHJpYnV0ZXNUb1Byb3BzID0gcmVxdWlyZSgnLi9hdHRyaWJ1dGVzLXRvLXByb3BzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMnKTtcblxudmFyIHNldFN0eWxlUHJvcCA9IHV0aWxpdGllcy5zZXRTdHlsZVByb3A7XG5cbi8qKlxuICogQ29udmVydHMgRE9NIG5vZGVzIHRvIEpTWCBlbGVtZW50KHMpLlxuICpcbiAqIEBwYXJhbSAge0RvbUVsZW1lbnRbXX0gbm9kZXMgICAgICAgICAgICAgLSBET00gbm9kZXMuXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgICAgIFtvcHRpb25zPXt9XSAgICAgIC0gT3B0aW9ucy5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgICAgW29wdGlvbnMucmVwbGFjZV0gLSBSZXBsYWNlci5cbiAqIEBwYXJhbSAge29iamVjdH0gICAgICAgW29wdGlvbnMubGlicmFyeV0gLSBMaWJyYXJ5IChSZWFjdC9QcmVhY3QvZXRjLikuXG4gKiBAcmV0dXJuIHtzdHJpbmd8SlNYLkVsZW1lbnR8SlNYLkVsZW1lbnRbXX1cbiAqL1xuZnVuY3Rpb24gZG9tVG9SZWFjdChub2Rlcywgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgbGlicmFyeSA9IG9wdGlvbnMubGlicmFyeSB8fCBSZWFjdDtcbiAgdmFyIGNsb25lRWxlbWVudCA9IGxpYnJhcnkuY2xvbmVFbGVtZW50O1xuICB2YXIgY3JlYXRlRWxlbWVudCA9IGxpYnJhcnkuY3JlYXRlRWxlbWVudDtcbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gbGlicmFyeS5pc1ZhbGlkRWxlbWVudDtcblxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBub2RlO1xuICB2YXIgaGFzUmVwbGFjZSA9IHR5cGVvZiBvcHRpb25zLnJlcGxhY2UgPT09ICdmdW5jdGlvbic7XG4gIHZhciByZXBsYWNlRWxlbWVudDtcbiAgdmFyIHByb3BzO1xuICB2YXIgY2hpbGRyZW47XG4gIHZhciBkYXRhO1xuICB2YXIgdHJpbSA9IG9wdGlvbnMudHJpbTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBub2RlID0gbm9kZXNbaV07XG5cbiAgICAvLyByZXBsYWNlIHdpdGggY3VzdG9tIFJlYWN0IGVsZW1lbnQgKGlmIHByZXNlbnQpXG4gICAgaWYgKGhhc1JlcGxhY2UpIHtcbiAgICAgIHJlcGxhY2VFbGVtZW50ID0gb3B0aW9ucy5yZXBsYWNlKG5vZGUpO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQocmVwbGFjZUVsZW1lbnQpKSB7XG4gICAgICAgIC8vIHNldCBcImtleVwiIHByb3AgZm9yIHNpYmxpbmcgZWxlbWVudHNcbiAgICAgICAgLy8gaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWtleXNcbiAgICAgICAgaWYgKGxlbiA+IDEpIHtcbiAgICAgICAgICByZXBsYWNlRWxlbWVudCA9IGNsb25lRWxlbWVudChyZXBsYWNlRWxlbWVudCwge1xuICAgICAgICAgICAga2V5OiByZXBsYWNlRWxlbWVudC5rZXkgfHwgaVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKHJlcGxhY2VFbGVtZW50KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAvLyBpZiB0cmltIG9wdGlvbiBpcyBlbmFibGVkLCBza2lwIHdoaXRlc3BhY2UgdGV4dCBub2Rlc1xuICAgICAgaWYgKHRyaW0pIHtcbiAgICAgICAgZGF0YSA9IG5vZGUuZGF0YS50cmltKCk7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2gobm9kZS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2gobm9kZS5kYXRhKTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHByb3BzID0gbm9kZS5hdHRyaWJzO1xuICAgIGlmIChza2lwQXR0cmlidXRlc1RvUHJvcHMobm9kZSkpIHtcbiAgICAgIHNldFN0eWxlUHJvcChwcm9wcy5zdHlsZSwgcHJvcHMpO1xuICAgIH0gZWxzZSBpZiAocHJvcHMpIHtcbiAgICAgIHByb3BzID0gYXR0cmlidXRlc1RvUHJvcHMocHJvcHMpO1xuICAgIH1cblxuICAgIGNoaWxkcmVuID0gbnVsbDtcblxuICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzY3JpcHQnOlxuICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAvLyBwcmV2ZW50IHRleHQgaW4gPHNjcmlwdD4gb3IgPHN0eWxlPiBmcm9tIGJlaW5nIGVzY2FwZWRcbiAgICAgICAgLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2RvbS1lbGVtZW50cy5odG1sI2Rhbmdlcm91c2x5c2V0aW5uZXJodG1sXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgICAgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgPSB7XG4gICAgICAgICAgICBfX2h0bWw6IG5vZGUuY2hpbGRyZW5bMF0uZGF0YVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgIC8vIHNldHRpbmcgdGV4dGFyZWEgdmFsdWUgaW4gY2hpbGRyZW4gaXMgYW4gYW50aXBhdHRlcm4gaW4gUmVhY3RcbiAgICAgICAgLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Zvcm1zLmh0bWwjdGhlLXRleHRhcmVhLXRhZ1xuICAgICAgICBpZiAobm9kZS5uYW1lID09PSAndGV4dGFyZWEnICYmIG5vZGUuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgICBwcm9wcy5kZWZhdWx0VmFsdWUgPSBub2RlLmNoaWxkcmVuWzBdLmRhdGE7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIC8vIGNvbnRpbnVlIHJlY3Vyc2lvbiBvZiBjcmVhdGluZyBSZWFjdCBlbGVtZW50cyAoaWYgYXBwbGljYWJsZSlcbiAgICAgICAgICBjaGlsZHJlbiA9IGRvbVRvUmVhY3Qobm9kZS5jaGlsZHJlbiwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIHNraXAgYWxsIG90aGVyIGNhc2VzIChlLmcuLCBjb21tZW50KVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gc2V0IFwia2V5XCIgcHJvcCBmb3Igc2libGluZyBlbGVtZW50c1xuICAgIC8vIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzXG4gICAgaWYgKGxlbiA+IDEpIHtcbiAgICAgIHByb3BzLmtleSA9IGk7XG4gICAgfVxuXG4gICAgcmVzdWx0LnB1c2goY3JlYXRlRWxlbWVudChub2RlLm5hbWUsIHByb3BzLCBjaGlsZHJlbikpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPT09IDEgPyByZXN1bHRbMF0gOiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIERPTSBlbGVtZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIHRyYW5zZm9ybWVkIHRvIHByb3BzLlxuICogV2ViIENvbXBvbmVudHMgc2hvdWxkIG5vdCBoYXZlIHRoZWlyIGF0dHJpYnV0ZXMgdHJhbnNmb3JtZWQgZXhjZXB0IGZvciBgc3R5bGVgLlxuICpcbiAqIEBwYXJhbSAge0RvbUVsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHNraXBBdHRyaWJ1dGVzVG9Qcm9wcyhub2RlKSB7XG4gIHJldHVybiAoXG4gICAgdXRpbGl0aWVzLlBSRVNFUlZFX0NVU1RPTV9BVFRSSUJVVEVTICYmXG4gICAgbm9kZS50eXBlID09PSAndGFnJyAmJlxuICAgIHV0aWxpdGllcy5pc0N1c3RvbUNvbXBvbmVudChub2RlLm5hbWUsIG5vZGUuYXR0cmlicylcbiAgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21Ub1JlYWN0O1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBzdHlsZVRvSlMgPSByZXF1aXJlKCdzdHlsZS10by1qcycpLmRlZmF1bHQ7XG5cbi8qKlxuICogU3dhcCBrZXkgd2l0aCB2YWx1ZSBpbiBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIG9iaiAgICAgICAgLSBUaGUgb2JqZWN0LlxuICogQHBhcmFtICB7RnVuY3Rpb259IFtvdmVycmlkZV0gLSBUaGUgb3ZlcnJpZGUgbWV0aG9kLlxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICAgLSBUaGUgaW52ZXJ0ZWQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBpbnZlcnRPYmplY3Qob2JqLCBvdmVycmlkZSkge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICB2YXIga2V5O1xuICB2YXIgdmFsdWU7XG4gIHZhciBpc092ZXJyaWRlUHJlc2VudCA9IHR5cGVvZiBvdmVycmlkZSA9PT0gJ2Z1bmN0aW9uJztcbiAgdmFyIG92ZXJyaWRlcyA9IHt9O1xuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgIGlmIChpc092ZXJyaWRlUHJlc2VudCkge1xuICAgICAgb3ZlcnJpZGVzID0gb3ZlcnJpZGUoa2V5LCB2YWx1ZSk7XG4gICAgICBpZiAob3ZlcnJpZGVzICYmIG92ZXJyaWRlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgcmVzdWx0W292ZXJyaWRlc1swXV0gPSBvdmVycmlkZXNbMV07XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXN1bHRbdmFsdWVdID0ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBnaXZlbiB0YWcgaXMgYSBjdXN0b20gY29tcG9uZW50LlxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YxNi42LjMvcGFja2FnZXMvcmVhY3QtZG9tL3NyYy9zaGFyZWQvaXNDdXN0b21Db21wb25lbnQuanN9XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgLSBUaGUgbmFtZSBvZiB0aGUgaHRtbCB0YWcuXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgICAtIFRoZSBwcm9wcyBiZWluZyBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0N1c3RvbUNvbXBvbmVudCh0YWdOYW1lLCBwcm9wcykge1xuICBpZiAodGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIHByb3BzICYmIHR5cGVvZiBwcm9wcy5pcyA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICAvLyBUaGVzZSBhcmUgcmVzZXJ2ZWQgU1ZHIGFuZCBNYXRoTUwgZWxlbWVudHMuXG4gICAgLy8gV2UgZG9uJ3QgbWluZCB0aGlzIHdoaXRlbGlzdCB0b28gbXVjaCBiZWNhdXNlIHdlIGV4cGVjdCBpdCB0byBuZXZlciBncm93LlxuICAgIC8vIFRoZSBhbHRlcm5hdGl2ZSBpcyB0byB0cmFjayB0aGUgbmFtZXNwYWNlIGluIGEgZmV3IHBsYWNlcyB3aGljaCBpcyBjb252b2x1dGVkLlxuICAgIC8vIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJjb21wb25lbnRzL3NwZWMvY3VzdG9tLyNjdXN0b20tZWxlbWVudHMtY29yZS1jb25jZXB0c1xuICAgIGNhc2UgJ2Fubm90YXRpb24teG1sJzpcbiAgICBjYXNlICdjb2xvci1wcm9maWxlJzpcbiAgICBjYXNlICdmb250LWZhY2UnOlxuICAgIGNhc2UgJ2ZvbnQtZmFjZS1zcmMnOlxuICAgIGNhc2UgJ2ZvbnQtZmFjZS11cmknOlxuICAgIGNhc2UgJ2ZvbnQtZmFjZS1mb3JtYXQnOlxuICAgIGNhc2UgJ2ZvbnQtZmFjZS1uYW1lJzpcbiAgICBjYXNlICdtaXNzaW5nLWdseXBoJzpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxudmFyIHN0eWxlVG9KU09wdGlvbnMgPSB7IHJlYWN0Q29tcGF0OiB0cnVlIH07XG5cbi8qKlxuICogU2V0cyBzdHlsZSBwcm9wLlxuICpcbiAqIEBwYXJhbSB7bnVsbHx1bmRlZmluZWR8c3RyaW5nfSBzdHlsZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKi9cbmZ1bmN0aW9uIHNldFN0eWxlUHJvcChzdHlsZSwgcHJvcHMpIHtcbiAgaWYgKHN0eWxlID09PSBudWxsIHx8IHN0eWxlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdHJ5IHtcbiAgICBwcm9wcy5zdHlsZSA9IHN0eWxlVG9KUyhzdHlsZSwgc3R5bGVUb0pTT3B0aW9ucyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHByb3BzLnN0eWxlID0ge307XG4gIH1cbn1cblxuLyoqXG4gKiBAY29uc3RhbnQge2Jvb2xlYW59XG4gKiBAc2VlIHtAbGluayBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxNy8wOS8wOC9kb20tYXR0cmlidXRlcy1pbi1yZWFjdC0xNi5odG1sfVxuICovXG52YXIgUFJFU0VSVkVfQ1VTVE9NX0FUVFJJQlVURVMgPSBSZWFjdC52ZXJzaW9uLnNwbGl0KCcuJylbMF0gPj0gMTY7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBQUkVTRVJWRV9DVVNUT01fQVRUUklCVVRFUzogUFJFU0VSVkVfQ1VTVE9NX0FUVFJJQlVURVMsXG4gIGludmVydE9iamVjdDogaW52ZXJ0T2JqZWN0LFxuICBpc0N1c3RvbUNvbXBvbmVudDogaXNDdXN0b21Db21wb25lbnQsXG4gIHNldFN0eWxlUHJvcDogc2V0U3R5bGVQcm9wXG59O1xuIiwiLy8gaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMjEvZ3JhbW1hci5odG1sXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdmlzaW9ubWVkaWEvY3NzLXBhcnNlL3B1bGwvNDkjaXNzdWVjb21tZW50LTMwMDg4MDI3XG52YXIgQ09NTUVOVF9SRUdFWCA9IC9cXC9cXCpbXipdKlxcKisoW14vKl1bXipdKlxcKispKlxcLy9nO1xuXG52YXIgTkVXTElORV9SRUdFWCA9IC9cXG4vZztcbnZhciBXSElURVNQQUNFX1JFR0VYID0gL15cXHMqLztcblxuLy8gZGVjbGFyYXRpb25cbnZhciBQUk9QRVJUWV9SRUdFWCA9IC9eKFxcKj9bLSMvKlxcXFxcXHddKyhcXFtbMC05YS16Xy1dK1xcXSk/KVxccyovO1xudmFyIENPTE9OX1JFR0VYID0gL146XFxzKi87XG52YXIgVkFMVUVfUkVHRVggPSAvXigoPzonKD86XFxcXCd8LikqPyd8XCIoPzpcXFxcXCJ8LikqP1wifFxcKFteKV0qP1xcKXxbXn07XSkrKS87XG52YXIgU0VNSUNPTE9OX1JFR0VYID0gL15bO1xcc10qLztcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL1RyaW0jUG9seWZpbGxcbnZhciBUUklNX1JFR0VYID0gL15cXHMrfFxccyskL2c7XG5cbi8vIHN0cmluZ3NcbnZhciBORVdMSU5FID0gJ1xcbic7XG52YXIgRk9SV0FSRF9TTEFTSCA9ICcvJztcbnZhciBBU1RFUklTSyA9ICcqJztcbnZhciBFTVBUWV9TVFJJTkcgPSAnJztcblxuLy8gdHlwZXNcbnZhciBUWVBFX0NPTU1FTlQgPSAnY29tbWVudCc7XG52YXIgVFlQRV9ERUNMQVJBVElPTiA9ICdkZWNsYXJhdGlvbic7XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtPYmplY3RbXX1cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAqIEB0aHJvd3Mge0Vycm9yfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0eWxlLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygc3R5bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgaWYgKCFzdHlsZSkgcmV0dXJuIFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8qKlxuICAgKiBQb3NpdGlvbmFsLlxuICAgKi9cbiAgdmFyIGxpbmVubyA9IDE7XG4gIHZhciBjb2x1bW4gPSAxO1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgbGluZW5vIGFuZCBjb2x1bW4gYmFzZWQgb24gYHN0cmAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKHN0cikge1xuICAgIHZhciBsaW5lcyA9IHN0ci5tYXRjaChORVdMSU5FX1JFR0VYKTtcbiAgICBpZiAobGluZXMpIGxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG4gICAgdmFyIGkgPSBzdHIubGFzdEluZGV4T2YoTkVXTElORSk7XG4gICAgY29sdW1uID0gfmkgPyBzdHIubGVuZ3RoIC0gaSA6IGNvbHVtbiArIHN0ci5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogTWFyayBwb3NpdGlvbiBhbmQgcGF0Y2ggYG5vZGUucG9zaXRpb25gLlxuICAgKlxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIHBvc2l0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHsgbGluZTogbGluZW5vLCBjb2x1bW46IGNvbHVtbiB9O1xuICAgIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgICBub2RlLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHN0YXJ0KTtcbiAgICAgIHdoaXRlc3BhY2UoKTtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU3RvcmUgcG9zaXRpb24gaW5mb3JtYXRpb24gZm9yIGEgbm9kZS5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBzdGFydFxuICAgKiBAcHJvcGVydHkge09iamVjdH0gZW5kXG4gICAqIEBwcm9wZXJ0eSB7dW5kZWZpbmVkfFN0cmluZ30gc291cmNlXG4gICAqL1xuICBmdW5jdGlvbiBQb3NpdGlvbihzdGFydCkge1xuICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICB0aGlzLmVuZCA9IHsgbGluZTogbGluZW5vLCBjb2x1bW46IGNvbHVtbiB9O1xuICAgIHRoaXMuc291cmNlID0gb3B0aW9ucy5zb3VyY2U7XG4gIH1cblxuICAvKipcbiAgICogTm9uLWVudW1lcmFibGUgc291cmNlIHN0cmluZy5cbiAgICovXG4gIFBvc2l0aW9uLnByb3RvdHlwZS5jb250ZW50ID0gc3R5bGU7XG5cbiAgdmFyIGVycm9yc0xpc3QgPSBbXTtcblxuICAvKipcbiAgICogRXJyb3IgYG1zZ2AuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtc2dcbiAgICogQHRocm93cyB7RXJyb3J9XG4gICAqL1xuICBmdW5jdGlvbiBlcnJvcihtc2cpIHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgb3B0aW9ucy5zb3VyY2UgKyAnOicgKyBsaW5lbm8gKyAnOicgKyBjb2x1bW4gKyAnOiAnICsgbXNnXG4gICAgKTtcbiAgICBlcnIucmVhc29uID0gbXNnO1xuICAgIGVyci5maWxlbmFtZSA9IG9wdGlvbnMuc291cmNlO1xuICAgIGVyci5saW5lID0gbGluZW5vO1xuICAgIGVyci5jb2x1bW4gPSBjb2x1bW47XG4gICAgZXJyLnNvdXJjZSA9IHN0eWxlO1xuXG4gICAgaWYgKG9wdGlvbnMuc2lsZW50KSB7XG4gICAgICBlcnJvcnNMaXN0LnB1c2goZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRjaCBgcmVgIGFuZCByZXR1cm4gY2FwdHVyZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVnRXhwfSByZVxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWR8QXJyYXl9XG4gICAqL1xuICBmdW5jdGlvbiBtYXRjaChyZSkge1xuICAgIHZhciBtID0gcmUuZXhlYyhzdHlsZSk7XG4gICAgaWYgKCFtKSByZXR1cm47XG4gICAgdmFyIHN0ciA9IG1bMF07XG4gICAgdXBkYXRlUG9zaXRpb24oc3RyKTtcbiAgICBzdHlsZSA9IHN0eWxlLnNsaWNlKHN0ci5sZW5ndGgpO1xuICAgIHJldHVybiBtO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHdoaXRlc3BhY2UuXG4gICAqL1xuICBmdW5jdGlvbiB3aGl0ZXNwYWNlKCkge1xuICAgIG1hdGNoKFdISVRFU1BBQ0VfUkVHRVgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGNvbW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdFtdfSBbcnVsZXNdXG4gICAqIEByZXR1cm4ge09iamVjdFtdfVxuICAgKi9cbiAgZnVuY3Rpb24gY29tbWVudHMocnVsZXMpIHtcbiAgICB2YXIgYztcbiAgICBydWxlcyA9IHJ1bGVzIHx8IFtdO1xuICAgIHdoaWxlICgoYyA9IGNvbW1lbnQoKSkpIHtcbiAgICAgIGlmIChjICE9PSBmYWxzZSkge1xuICAgICAgICBydWxlcy5wdXNoKGMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgY29tbWVudC5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKiBAdGhyb3dzIHtFcnJvcn1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbW1lbnQoKSB7XG4gICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XG4gICAgaWYgKEZPUldBUkRfU0xBU0ggIT0gc3R5bGUuY2hhckF0KDApIHx8IEFTVEVSSVNLICE9IHN0eWxlLmNoYXJBdCgxKSkgcmV0dXJuO1xuXG4gICAgdmFyIGkgPSAyO1xuICAgIHdoaWxlIChcbiAgICAgIEVNUFRZX1NUUklORyAhPSBzdHlsZS5jaGFyQXQoaSkgJiZcbiAgICAgIChBU1RFUklTSyAhPSBzdHlsZS5jaGFyQXQoaSkgfHwgRk9SV0FSRF9TTEFTSCAhPSBzdHlsZS5jaGFyQXQoaSArIDEpKVxuICAgICkge1xuICAgICAgKytpO1xuICAgIH1cbiAgICBpICs9IDI7XG5cbiAgICBpZiAoRU1QVFlfU1RSSU5HID09PSBzdHlsZS5jaGFyQXQoaSAtIDEpKSB7XG4gICAgICByZXR1cm4gZXJyb3IoJ0VuZCBvZiBjb21tZW50IG1pc3NpbmcnKTtcbiAgICB9XG5cbiAgICB2YXIgc3RyID0gc3R5bGUuc2xpY2UoMiwgaSAtIDIpO1xuICAgIGNvbHVtbiArPSAyO1xuICAgIHVwZGF0ZVBvc2l0aW9uKHN0cik7XG4gICAgc3R5bGUgPSBzdHlsZS5zbGljZShpKTtcbiAgICBjb2x1bW4gKz0gMjtcblxuICAgIHJldHVybiBwb3Moe1xuICAgICAgdHlwZTogVFlQRV9DT01NRU5ULFxuICAgICAgY29tbWVudDogc3RyXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgZGVjbGFyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICogQHRocm93cyB7RXJyb3J9XG4gICAqL1xuICBmdW5jdGlvbiBkZWNsYXJhdGlvbigpIHtcbiAgICB2YXIgcG9zID0gcG9zaXRpb24oKTtcblxuICAgIC8vIHByb3BcbiAgICB2YXIgcHJvcCA9IG1hdGNoKFBST1BFUlRZX1JFR0VYKTtcbiAgICBpZiAoIXByb3ApIHJldHVybjtcbiAgICBjb21tZW50KCk7XG5cbiAgICAvLyA6XG4gICAgaWYgKCFtYXRjaChDT0xPTl9SRUdFWCkpIHJldHVybiBlcnJvcihcInByb3BlcnR5IG1pc3NpbmcgJzonXCIpO1xuXG4gICAgLy8gdmFsXG4gICAgdmFyIHZhbCA9IG1hdGNoKFZBTFVFX1JFR0VYKTtcblxuICAgIHZhciByZXQgPSBwb3Moe1xuICAgICAgdHlwZTogVFlQRV9ERUNMQVJBVElPTixcbiAgICAgIHByb3BlcnR5OiB0cmltKHByb3BbMF0ucmVwbGFjZShDT01NRU5UX1JFR0VYLCBFTVBUWV9TVFJJTkcpKSxcbiAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgPyB0cmltKHZhbFswXS5yZXBsYWNlKENPTU1FTlRfUkVHRVgsIEVNUFRZX1NUUklORykpXG4gICAgICAgIDogRU1QVFlfU1RSSU5HXG4gICAgfSk7XG5cbiAgICAvLyA7XG4gICAgbWF0Y2goU0VNSUNPTE9OX1JFR0VYKTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgZGVjbGFyYXRpb25zLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3RbXX1cbiAgICovXG4gIGZ1bmN0aW9uIGRlY2xhcmF0aW9ucygpIHtcbiAgICB2YXIgZGVjbHMgPSBbXTtcblxuICAgIGNvbW1lbnRzKGRlY2xzKTtcblxuICAgIC8vIGRlY2xhcmF0aW9uc1xuICAgIHZhciBkZWNsO1xuICAgIHdoaWxlICgoZGVjbCA9IGRlY2xhcmF0aW9uKCkpKSB7XG4gICAgICBpZiAoZGVjbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgZGVjbHMucHVzaChkZWNsKTtcbiAgICAgICAgY29tbWVudHMoZGVjbHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWNscztcbiAgfVxuXG4gIHdoaXRlc3BhY2UoKTtcbiAgcmV0dXJuIGRlY2xhcmF0aW9ucygpO1xufTtcblxuLyoqXG4gKiBUcmltIGBzdHJgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ciA/IHN0ci5yZXBsYWNlKFRSSU1fUkVHRVgsIEVNUFRZX1NUUklORykgOiBFTVBUWV9TVFJJTkc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbi8vIEEgcmVzZXJ2ZWQgYXR0cmlidXRlLlxuLy8gSXQgaXMgaGFuZGxlZCBieSBSZWFjdCBzZXBhcmF0ZWx5IGFuZCBzaG91bGRuJ3QgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxudmFyIFJFU0VSVkVEID0gMDsgLy8gQSBzaW1wbGUgc3RyaW5nIGF0dHJpYnV0ZS5cbi8vIEF0dHJpYnV0ZXMgdGhhdCBhcmVuJ3QgaW4gdGhlIGZpbHRlciBhcmUgcHJlc3VtZWQgdG8gaGF2ZSB0aGlzIHR5cGUuXG5cbnZhciBTVFJJTkcgPSAxOyAvLyBBIHN0cmluZyBhdHRyaWJ1dGUgdGhhdCBhY2NlcHRzIGJvb2xlYW5zIGluIFJlYWN0LiBJbiBIVE1MLCB0aGVzZSBhcmUgY2FsbGVkXG4vLyBcImVudW1lcmF0ZWRcIiBhdHRyaWJ1dGVzIHdpdGggXCJ0cnVlXCIgYW5kIFwiZmFsc2VcIiBhcyBwb3NzaWJsZSB2YWx1ZXMuXG4vLyBXaGVuIHRydWUsIGl0IHNob3VsZCBiZSBzZXQgdG8gYSBcInRydWVcIiBzdHJpbmcuXG4vLyBXaGVuIGZhbHNlLCBpdCBzaG91bGQgYmUgc2V0IHRvIGEgXCJmYWxzZVwiIHN0cmluZy5cblxudmFyIEJPT0xFQU5JU0hfU1RSSU5HID0gMjsgLy8gQSByZWFsIGJvb2xlYW4gYXR0cmlidXRlLlxuLy8gV2hlbiB0cnVlLCBpdCBzaG91bGQgYmUgcHJlc2VudCAoc2V0IGVpdGhlciB0byBhbiBlbXB0eSBzdHJpbmcgb3IgaXRzIG5hbWUpLlxuLy8gV2hlbiBmYWxzZSwgaXQgc2hvdWxkIGJlIG9taXR0ZWQuXG5cbnZhciBCT09MRUFOID0gMzsgLy8gQW4gYXR0cmlidXRlIHRoYXQgY2FuIGJlIHVzZWQgYXMgYSBmbGFnIGFzIHdlbGwgYXMgd2l0aCBhIHZhbHVlLlxuLy8gV2hlbiB0cnVlLCBpdCBzaG91bGQgYmUgcHJlc2VudCAoc2V0IGVpdGhlciB0byBhbiBlbXB0eSBzdHJpbmcgb3IgaXRzIG5hbWUpLlxuLy8gV2hlbiBmYWxzZSwgaXQgc2hvdWxkIGJlIG9taXR0ZWQuXG4vLyBGb3IgYW55IG90aGVyIHZhbHVlLCBzaG91bGQgYmUgcHJlc2VudCB3aXRoIHRoYXQgdmFsdWUuXG5cbnZhciBPVkVSTE9BREVEX0JPT0xFQU4gPSA0OyAvLyBBbiBhdHRyaWJ1dGUgdGhhdCBtdXN0IGJlIG51bWVyaWMgb3IgcGFyc2UgYXMgYSBudW1lcmljLlxuLy8gV2hlbiBmYWxzeSwgaXQgc2hvdWxkIGJlIHJlbW92ZWQuXG5cbnZhciBOVU1FUklDID0gNTsgLy8gQW4gYXR0cmlidXRlIHRoYXQgbXVzdCBiZSBwb3NpdGl2ZSBudW1lcmljIG9yIHBhcnNlIGFzIGEgcG9zaXRpdmUgbnVtZXJpYy5cbi8vIFdoZW4gZmFsc3ksIGl0IHNob3VsZCBiZSByZW1vdmVkLlxuXG52YXIgUE9TSVRJVkVfTlVNRVJJQyA9IDY7XG5mdW5jdGlvbiBnZXRQcm9wZXJ0eUluZm8obmFtZSkge1xuICByZXR1cm4gcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHByb3BlcnRpZXNbbmFtZV0gOiBudWxsO1xufVxuXG5mdW5jdGlvbiBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgdHlwZSwgbXVzdFVzZVByb3BlcnR5LCBhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVOYW1lc3BhY2UsIHNhbml0aXplVVJMLCByZW1vdmVFbXB0eVN0cmluZykge1xuICB0aGlzLmFjY2VwdHNCb29sZWFucyA9IHR5cGUgPT09IEJPT0xFQU5JU0hfU1RSSU5HIHx8IHR5cGUgPT09IEJPT0xFQU4gfHwgdHlwZSA9PT0gT1ZFUkxPQURFRF9CT09MRUFOO1xuICB0aGlzLmF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGVOYW1lO1xuICB0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZSA9IGF0dHJpYnV0ZU5hbWVzcGFjZTtcbiAgdGhpcy5tdXN0VXNlUHJvcGVydHkgPSBtdXN0VXNlUHJvcGVydHk7XG4gIHRoaXMucHJvcGVydHlOYW1lID0gbmFtZTtcbiAgdGhpcy50eXBlID0gdHlwZTtcbiAgdGhpcy5zYW5pdGl6ZVVSTCA9IHNhbml0aXplVVJMO1xuICB0aGlzLnJlbW92ZUVtcHR5U3RyaW5nID0gcmVtb3ZlRW1wdHlTdHJpbmc7XG59IC8vIFdoZW4gYWRkaW5nIGF0dHJpYnV0ZXMgdG8gdGhpcyBsaXN0LCBiZSBzdXJlIHRvIGFsc28gYWRkIHRoZW0gdG9cbi8vIHRoZSBgcG9zc2libGVTdGFuZGFyZE5hbWVzYCBtb2R1bGUgdG8gZW5zdXJlIGNhc2luZyBhbmQgaW5jb3JyZWN0XG4vLyBuYW1lIHdhcm5pbmdzLlxuXG5cbnZhciBwcm9wZXJ0aWVzID0ge307IC8vIFRoZXNlIHByb3BzIGFyZSByZXNlcnZlZCBieSBSZWFjdC4gVGhleSBzaG91bGRuJ3QgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxuXG52YXIgcmVzZXJ2ZWRQcm9wcyA9IFsnY2hpbGRyZW4nLCAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnLCAvLyBUT0RPOiBUaGlzIHByZXZlbnRzIHRoZSBhc3NpZ25tZW50IG9mIGRlZmF1bHRWYWx1ZSB0byByZWd1bGFyXG4vLyBlbGVtZW50cyAobm90IGp1c3QgaW5wdXRzKS4gTm93IHRoYXQgUmVhY3RET01JbnB1dCBhc3NpZ25zIHRvIHRoZVxuLy8gZGVmYXVsdFZhbHVlIHByb3BlcnR5IC0tIGRvIHdlIG5lZWQgdGhpcz9cbidkZWZhdWx0VmFsdWUnLCAnZGVmYXVsdENoZWNrZWQnLCAnaW5uZXJIVE1MJywgJ3N1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZycsICdzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcnLCAnc3R5bGUnXTtcbnJlc2VydmVkUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBSRVNFUlZFRCwgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIEEgZmV3IFJlYWN0IHN0cmluZyBhdHRyaWJ1dGVzIGhhdmUgYSBkaWZmZXJlbnQgbmFtZS5cbi8vIFRoaXMgaXMgYSBtYXBwaW5nIGZyb20gUmVhY3QgcHJvcCBuYW1lcyB0byB0aGUgYXR0cmlidXRlIG5hbWVzLlxuXG5bWydhY2NlcHRDaGFyc2V0JywgJ2FjY2VwdC1jaGFyc2V0J10sIFsnY2xhc3NOYW1lJywgJ2NsYXNzJ10sIFsnaHRtbEZvcicsICdmb3InXSwgWydodHRwRXF1aXYnLCAnaHR0cC1lcXVpdiddXS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgbmFtZSA9IF9yZWYyWzBdLFxuICAgICAgYXR0cmlidXRlTmFtZSA9IF9yZWYyWzFdO1xuXG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSBcImVudW1lcmF0ZWRcIiBIVE1MIGF0dHJpYnV0ZXMgdGhhdCBhY2NlcHQgXCJ0cnVlXCIgYW5kIFwiZmFsc2VcIi5cbi8vIEluIFJlYWN0LCB3ZSBsZXQgdXNlcnMgcGFzcyBgdHJ1ZWAgYW5kIGBmYWxzZWAgZXZlbiB0aG91Z2ggdGVjaG5pY2FsbHlcbi8vIHRoZXNlIGFyZW4ndCBib29sZWFuIGF0dHJpYnV0ZXMgKHRoZXkgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncykuXG5cblsnY29udGVudEVkaXRhYmxlJywgJ2RyYWdnYWJsZScsICdzcGVsbENoZWNrJywgJ3ZhbHVlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOSVNIX1NUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLnRvTG93ZXJDYXNlKCksIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIFwiZW51bWVyYXRlZFwiIFNWRyBhdHRyaWJ1dGVzIHRoYXQgYWNjZXB0IFwidHJ1ZVwiIGFuZCBcImZhbHNlXCIuXG4vLyBJbiBSZWFjdCwgd2UgbGV0IHVzZXJzIHBhc3MgYHRydWVgIGFuZCBgZmFsc2VgIGV2ZW4gdGhvdWdoIHRlY2huaWNhbGx5XG4vLyB0aGVzZSBhcmVuJ3QgYm9vbGVhbiBhdHRyaWJ1dGVzICh0aGV5IGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MpLlxuLy8gU2luY2UgdGhlc2UgYXJlIFNWRyBhdHRyaWJ1dGVzLCB0aGVpciBhdHRyaWJ1dGUgbmFtZXMgYXJlIGNhc2Utc2Vuc2l0aXZlLlxuXG5bJ2F1dG9SZXZlcnNlJywgJ2V4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQnLCAnZm9jdXNhYmxlJywgJ3ByZXNlcnZlQWxwaGEnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIEJPT0xFQU5JU0hfU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYm9vbGVhbiBhdHRyaWJ1dGVzLlxuXG5bJ2FsbG93RnVsbFNjcmVlbicsICdhc3luYycsIC8vIE5vdGU6IHRoZXJlIGlzIGEgc3BlY2lhbCBjYXNlIHRoYXQgcHJldmVudHMgaXQgZnJvbSBiZWluZyB3cml0dGVuIHRvIHRoZSBET01cbi8vIG9uIHRoZSBjbGllbnQgc2lkZSBiZWNhdXNlIHRoZSBicm93c2VycyBhcmUgaW5jb25zaXN0ZW50LiBJbnN0ZWFkIHdlIGNhbGwgZm9jdXMoKS5cbidhdXRvRm9jdXMnLCAnYXV0b1BsYXknLCAnY29udHJvbHMnLCAnZGVmYXVsdCcsICdkZWZlcicsICdkaXNhYmxlZCcsICdkaXNhYmxlUGljdHVyZUluUGljdHVyZScsICdkaXNhYmxlUmVtb3RlUGxheWJhY2snLCAnZm9ybU5vVmFsaWRhdGUnLCAnaGlkZGVuJywgJ2xvb3AnLCAnbm9Nb2R1bGUnLCAnbm9WYWxpZGF0ZScsICdvcGVuJywgJ3BsYXlzSW5saW5lJywgJ3JlYWRPbmx5JywgJ3JlcXVpcmVkJywgJ3JldmVyc2VkJywgJ3Njb3BlZCcsICdzZWFtbGVzcycsIC8vIE1pY3JvZGF0YVxuJ2l0ZW1TY29wZSddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgQk9PTEVBTiwgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLnRvTG93ZXJDYXNlKCksIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIHRoZSBmZXcgUmVhY3QgcHJvcHMgdGhhdCB3ZSBzZXQgYXMgRE9NIHByb3BlcnRpZXNcbi8vIHJhdGhlciB0aGFuIGF0dHJpYnV0ZXMuIFRoZXNlIGFyZSBhbGwgYm9vbGVhbnMuXG5cblsnY2hlY2tlZCcsIC8vIE5vdGU6IGBvcHRpb24uc2VsZWN0ZWRgIGlzIG5vdCB1cGRhdGVkIGlmIGBzZWxlY3QubXVsdGlwbGVgIGlzXG4vLyBkaXNhYmxlZCB3aXRoIGByZW1vdmVBdHRyaWJ1dGVgLiBXZSBoYXZlIHNwZWNpYWwgbG9naWMgZm9yIGhhbmRsaW5nIHRoaXMuXG4nbXVsdGlwbGUnLCAnbXV0ZWQnLCAnc2VsZWN0ZWQnIC8vIE5PVEU6IGlmIHlvdSBhZGQgYSBjYW1lbENhc2VkIHByb3AgdG8gdGhpcyBsaXN0LFxuLy8geW91J2xsIG5lZWQgdG8gc2V0IGF0dHJpYnV0ZU5hbWUgdG8gbmFtZS50b0xvd2VyQ2FzZSgpXG4vLyBpbnN0ZWFkIGluIHRoZSBhc3NpZ25tZW50IGJlbG93LlxuXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIEJPT0xFQU4sIHRydWUsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSBIVE1MIGF0dHJpYnV0ZXMgdGhhdCBhcmUgXCJvdmVybG9hZGVkIGJvb2xlYW5zXCI6IHRoZXkgYmVoYXZlIGxpa2Vcbi8vIGJvb2xlYW5zLCBidXQgY2FuIGFsc28gYWNjZXB0IGEgc3RyaW5nIHZhbHVlLlxuXG5bJ2NhcHR1cmUnLCAnZG93bmxvYWQnIC8vIE5PVEU6IGlmIHlvdSBhZGQgYSBjYW1lbENhc2VkIHByb3AgdG8gdGhpcyBsaXN0LFxuLy8geW91J2xsIG5lZWQgdG8gc2V0IGF0dHJpYnV0ZU5hbWUgdG8gbmFtZS50b0xvd2VyQ2FzZSgpXG4vLyBpbnN0ZWFkIGluIHRoZSBhc3NpZ25tZW50IGJlbG93LlxuXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIE9WRVJMT0FERURfQk9PTEVBTiwgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSBIVE1MIGF0dHJpYnV0ZXMgdGhhdCBtdXN0IGJlIHBvc2l0aXZlIG51bWJlcnMuXG5cblsnY29scycsICdyb3dzJywgJ3NpemUnLCAnc3BhbicgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXG5dLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgUE9TSVRJVkVfTlVNRVJJQywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSBIVE1MIGF0dHJpYnV0ZXMgdGhhdCBtdXN0IGJlIG51bWJlcnMuXG5cblsncm93U3BhbicsICdzdGFydCddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgTlVNRVJJQywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLnRvTG93ZXJDYXNlKCksIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTtcbnZhciBDQU1FTElaRSA9IC9bXFwtXFw6XShbYS16XSkvZztcblxudmFyIGNhcGl0YWxpemUgPSBmdW5jdGlvbiBjYXBpdGFsaXplKHRva2VuKSB7XG4gIHJldHVybiB0b2tlblsxXS50b1VwcGVyQ2FzZSgpO1xufTsgLy8gVGhpcyBpcyBhIGxpc3Qgb2YgYWxsIFNWRyBhdHRyaWJ1dGVzIHRoYXQgbmVlZCBzcGVjaWFsIGNhc2luZywgbmFtZXNwYWNpbmcsXG4vLyBvciBib29sZWFuIHZhbHVlIGFzc2lnbm1lbnQuIFJlZ3VsYXIgYXR0cmlidXRlcyB0aGF0IGp1c3QgYWNjZXB0IHN0cmluZ3Ncbi8vIGFuZCBoYXZlIHRoZSBzYW1lIG5hbWVzIGFyZSBvbWl0dGVkLCBqdXN0IGxpa2UgaW4gdGhlIEhUTUwgYXR0cmlidXRlIGZpbHRlci5cbi8vIFNvbWUgb2YgdGhlc2UgYXR0cmlidXRlcyBjYW4gYmUgaGFyZCB0byBmaW5kLiBUaGlzIGxpc3Qgd2FzIGNyZWF0ZWQgYnlcbi8vIHNjcmFwaW5nIHRoZSBNRE4gZG9jdW1lbnRhdGlvbi5cblxuXG5bJ2FjY2VudC1oZWlnaHQnLCAnYWxpZ25tZW50LWJhc2VsaW5lJywgJ2FyYWJpYy1mb3JtJywgJ2Jhc2VsaW5lLXNoaWZ0JywgJ2NhcC1oZWlnaHQnLCAnY2xpcC1wYXRoJywgJ2NsaXAtcnVsZScsICdjb2xvci1pbnRlcnBvbGF0aW9uJywgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsICdjb2xvci1wcm9maWxlJywgJ2NvbG9yLXJlbmRlcmluZycsICdkb21pbmFudC1iYXNlbGluZScsICdlbmFibGUtYmFja2dyb3VuZCcsICdmaWxsLW9wYWNpdHknLCAnZmlsbC1ydWxlJywgJ2Zsb29kLWNvbG9yJywgJ2Zsb29kLW9wYWNpdHknLCAnZm9udC1mYW1pbHknLCAnZm9udC1zaXplJywgJ2ZvbnQtc2l6ZS1hZGp1c3QnLCAnZm9udC1zdHJldGNoJywgJ2ZvbnQtc3R5bGUnLCAnZm9udC12YXJpYW50JywgJ2ZvbnQtd2VpZ2h0JywgJ2dseXBoLW5hbWUnLCAnZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCcsICdnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbCcsICdob3Jpei1hZHYteCcsICdob3Jpei1vcmlnaW4teCcsICdpbWFnZS1yZW5kZXJpbmcnLCAnbGV0dGVyLXNwYWNpbmcnLCAnbGlnaHRpbmctY29sb3InLCAnbWFya2VyLWVuZCcsICdtYXJrZXItbWlkJywgJ21hcmtlci1zdGFydCcsICdvdmVybGluZS1wb3NpdGlvbicsICdvdmVybGluZS10aGlja25lc3MnLCAncGFpbnQtb3JkZXInLCAncGFub3NlLTEnLCAncG9pbnRlci1ldmVudHMnLCAncmVuZGVyaW5nLWludGVudCcsICdzaGFwZS1yZW5kZXJpbmcnLCAnc3RvcC1jb2xvcicsICdzdG9wLW9wYWNpdHknLCAnc3RyaWtldGhyb3VnaC1wb3NpdGlvbicsICdzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcycsICdzdHJva2UtZGFzaGFycmF5JywgJ3N0cm9rZS1kYXNob2Zmc2V0JywgJ3N0cm9rZS1saW5lY2FwJywgJ3N0cm9rZS1saW5lam9pbicsICdzdHJva2UtbWl0ZXJsaW1pdCcsICdzdHJva2Utb3BhY2l0eScsICdzdHJva2Utd2lkdGgnLCAndGV4dC1hbmNob3InLCAndGV4dC1kZWNvcmF0aW9uJywgJ3RleHQtcmVuZGVyaW5nJywgJ3VuZGVybGluZS1wb3NpdGlvbicsICd1bmRlcmxpbmUtdGhpY2tuZXNzJywgJ3VuaWNvZGUtYmlkaScsICd1bmljb2RlLXJhbmdlJywgJ3VuaXRzLXBlci1lbScsICd2LWFscGhhYmV0aWMnLCAndi1oYW5naW5nJywgJ3YtaWRlb2dyYXBoaWMnLCAndi1tYXRoZW1hdGljYWwnLCAndmVjdG9yLWVmZmVjdCcsICd2ZXJ0LWFkdi15JywgJ3ZlcnQtb3JpZ2luLXgnLCAndmVydC1vcmlnaW4teScsICd3b3JkLXNwYWNpbmcnLCAnd3JpdGluZy1tb2RlJywgJ3htbG5zOnhsaW5rJywgJ3gtaGVpZ2h0JyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICB2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZShDQU1FTElaRSwgY2FwaXRhbGl6ZSk7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLCBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBTdHJpbmcgU1ZHIGF0dHJpYnV0ZXMgd2l0aCB0aGUgeGxpbmsgbmFtZXNwYWNlLlxuXG5bJ3hsaW5rOmFjdHVhdGUnLCAneGxpbms6YXJjcm9sZScsICd4bGluazpyb2xlJywgJ3hsaW5rOnNob3cnLCAneGxpbms6dGl0bGUnLCAneGxpbms6dHlwZScgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXG5dLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgdmFyIG5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoQ0FNRUxJWkUsIGNhcGl0YWxpemUpO1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZSwgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFN0cmluZyBTVkcgYXR0cmlidXRlcyB3aXRoIHRoZSB4bWwgbmFtZXNwYWNlLlxuXG5bJ3htbDpiYXNlJywgJ3htbDpsYW5nJywgJ3htbDpzcGFjZScgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXG5dLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgdmFyIG5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoQ0FNRUxJWkUsIGNhcGl0YWxpemUpO1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZSwgJ2h0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZScsIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXR0cmlidXRlIGV4aXN0cyBib3RoIGluIEhUTUwgYW5kIFNWRy5cbi8vIFRoZSBhdHRyaWJ1dGUgbmFtZSBpcyBjYXNlLXNlbnNpdGl2ZSBpbiBTVkcgc28gd2UgY2FuJ3QganVzdCB1c2Vcbi8vIHRoZSBSZWFjdCBuYW1lIGxpa2Ugd2UgZG8gZm9yIGF0dHJpYnV0ZXMgdGhhdCBleGlzdCBvbmx5IGluIEhUTUwuXG5cblsndGFiSW5kZXgnLCAnY3Jvc3NPcmlnaW4nXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gIHByb3BlcnRpZXNbYXR0cmlidXRlTmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKGF0dHJpYnV0ZU5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCksIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXR0cmlidXRlcyBhY2NlcHQgVVJMcy4gVGhlc2UgbXVzdCBub3QgYWxsb3cgamF2YXNjcmlwdDogVVJMUy5cbi8vIFRoZXNlIHdpbGwgYWxzbyBuZWVkIHRvIGFjY2VwdCBUcnVzdGVkIFR5cGVzIG9iamVjdCBpbiB0aGUgZnV0dXJlLlxuXG52YXIgeGxpbmtIcmVmID0gJ3hsaW5rSHJlZic7XG5wcm9wZXJ0aWVzW3hsaW5rSHJlZl0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKCd4bGlua0hyZWYnLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbid4bGluazpocmVmJywgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCB0cnVlLCAvLyBzYW5pdGl6ZVVSTFxuZmFsc2UpO1xuWydzcmMnLCAnaHJlZicsICdhY3Rpb24nLCAnZm9ybUFjdGlvbiddLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcHJvcGVydGllc1thdHRyaWJ1dGVOYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQoYXR0cmlidXRlTmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgdHJ1ZSwgLy8gc2FuaXRpemVVUkxcbiAgdHJ1ZSk7XG59KTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi4vbGliL3Bvc3NpYmxlU3RhbmRhcmROYW1lc09wdGltaXplZCcpLFxuICAgIENBTUVMQ0FTRSA9IF9yZXF1aXJlLkNBTUVMQ0FTRSxcbiAgICBTQU1FID0gX3JlcXVpcmUuU0FNRSxcbiAgICBwb3NzaWJsZVN0YW5kYXJkTmFtZXNPcHRpbWl6ZWQgPSBfcmVxdWlyZS5wb3NzaWJsZVN0YW5kYXJkTmFtZXM7XG5cbnZhciBBVFRSSUJVVEVfTkFNRV9TVEFSVF9DSEFSID0gXCI6QS1aX2EtelxcXFx1MDBDMC1cXFxcdTAwRDZcXFxcdTAwRDgtXFxcXHUwMEY2XFxcXHUwMEY4LVxcXFx1MDJGRlxcXFx1MDM3MC1cXFxcdTAzN0RcXFxcdTAzN0YtXFxcXHUxRkZGXFxcXHUyMDBDLVxcXFx1MjAwRFxcXFx1MjA3MC1cXFxcdTIxOEZcXFxcdTJDMDAtXFxcXHUyRkVGXFxcXHUzMDAxLVxcXFx1RDdGRlxcXFx1RjkwMC1cXFxcdUZEQ0ZcXFxcdUZERjAtXFxcXHVGRkZEXCI7XG52YXIgQVRUUklCVVRFX05BTUVfQ0hBUiA9IEFUVFJJQlVURV9OQU1FX1NUQVJUX0NIQVIgKyBcIlxcXFwtLjAtOVxcXFx1MDBCN1xcXFx1MDMwMC1cXFxcdTAzNkZcXFxcdTIwM0YtXFxcXHUyMDQwXCI7XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGEgcHJvcGVydHkgbmFtZSBpcyBhIGN1c3RvbSBhdHRyaWJ1dGUuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMTUtc3RhYmxlL3NyYy9yZW5kZXJlcnMvZG9tL3NoYXJlZC9IVE1MRE9NUHJvcGVydHlDb25maWcuanMjTDIzLUwyNX1cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ31cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblxudmFyIGlzQ3VzdG9tQXR0cmlidXRlID0gUmVnRXhwLnByb3RvdHlwZS50ZXN0LmJpbmQoIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1taXNsZWFkaW5nLWNoYXJhY3Rlci1jbGFzc1xubmV3IFJlZ0V4cCgnXihkYXRhfGFyaWEpLVsnICsgQVRUUklCVVRFX05BTUVfQ0hBUiArICddKiQnKSk7XG52YXIgcG9zc2libGVTdGFuZGFyZE5hbWVzID0gT2JqZWN0LmtleXMocG9zc2libGVTdGFuZGFyZE5hbWVzT3B0aW1pemVkKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBzdGFuZGFyZE5hbWUpIHtcbiAgdmFyIHByb3BOYW1lID0gcG9zc2libGVTdGFuZGFyZE5hbWVzT3B0aW1pemVkW3N0YW5kYXJkTmFtZV07XG5cbiAgaWYgKHByb3BOYW1lID09PSBTQU1FKSB7XG4gICAgYWNjdW11bGF0b3Jbc3RhbmRhcmROYW1lXSA9IHN0YW5kYXJkTmFtZTtcbiAgfSBlbHNlIGlmIChwcm9wTmFtZSA9PT0gQ0FNRUxDQVNFKSB7XG4gICAgYWNjdW11bGF0b3Jbc3RhbmRhcmROYW1lLnRvTG93ZXJDYXNlKCldID0gc3RhbmRhcmROYW1lO1xuICB9IGVsc2Uge1xuICAgIGFjY3VtdWxhdG9yW3N0YW5kYXJkTmFtZV0gPSBwcm9wTmFtZTtcbiAgfVxuXG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn0sIHt9KTtcblxuZXhwb3J0cy5CT09MRUFOID0gQk9PTEVBTjtcbmV4cG9ydHMuQk9PTEVBTklTSF9TVFJJTkcgPSBCT09MRUFOSVNIX1NUUklORztcbmV4cG9ydHMuTlVNRVJJQyA9IE5VTUVSSUM7XG5leHBvcnRzLk9WRVJMT0FERURfQk9PTEVBTiA9IE9WRVJMT0FERURfQk9PTEVBTjtcbmV4cG9ydHMuUE9TSVRJVkVfTlVNRVJJQyA9IFBPU0lUSVZFX05VTUVSSUM7XG5leHBvcnRzLlJFU0VSVkVEID0gUkVTRVJWRUQ7XG5leHBvcnRzLlNUUklORyA9IFNUUklORztcbmV4cG9ydHMuZ2V0UHJvcGVydHlJbmZvID0gZ2V0UHJvcGVydHlJbmZvO1xuZXhwb3J0cy5pc0N1c3RvbUF0dHJpYnV0ZSA9IGlzQ3VzdG9tQXR0cmlidXRlO1xuZXhwb3J0cy5wb3NzaWJsZVN0YW5kYXJkTmFtZXMgPSBwb3NzaWJsZVN0YW5kYXJkTmFtZXM7XG4iLCIvLyBBbiBhdHRyaWJ1dGUgaW4gd2hpY2ggdGhlIERPTS9TVkcgc3RhbmRhcmQgbmFtZSBpcyB0aGUgc2FtZSBhcyB0aGUgUmVhY3QgcHJvcCBuYW1lIChlLmcuLCAnYWNjZXB0JykuXG52YXIgU0FNRSA9IDA7XG5leHBvcnRzLlNBTUUgPSBTQU1FO1xuXG4vLyBBbiBhdHRyaWJ1dGUgaW4gd2hpY2ggdGhlIFJlYWN0IHByb3AgbmFtZSBpcyB0aGUgY2FtZWxjYXNlZCB2ZXJzaW9uIG9mIHRoZSBET00vU1ZHIHN0YW5kYXJkIG5hbWUgKGUuZy4sICdhY2NlcHRDaGFyc2V0JykuXG52YXIgQ0FNRUxDQVNFID0gMTtcbmV4cG9ydHMuQ0FNRUxDQVNFID0gQ0FNRUxDQVNFO1xuXG5leHBvcnRzLnBvc3NpYmxlU3RhbmRhcmROYW1lcyA9IHtcbiAgYWNjZXB0OiAwLFxuICBhY2NlcHRDaGFyc2V0OiAxLFxuICAnYWNjZXB0LWNoYXJzZXQnOiAnYWNjZXB0Q2hhcnNldCcsXG4gIGFjY2Vzc0tleTogMSxcbiAgYWN0aW9uOiAwLFxuICBhbGxvd0Z1bGxTY3JlZW46IDEsXG4gIGFsdDogMCxcbiAgYXM6IDAsXG4gIGFzeW5jOiAwLFxuICBhdXRvQ2FwaXRhbGl6ZTogMSxcbiAgYXV0b0NvbXBsZXRlOiAxLFxuICBhdXRvQ29ycmVjdDogMSxcbiAgYXV0b0ZvY3VzOiAxLFxuICBhdXRvUGxheTogMSxcbiAgYXV0b1NhdmU6IDEsXG4gIGNhcHR1cmU6IDAsXG4gIGNlbGxQYWRkaW5nOiAxLFxuICBjZWxsU3BhY2luZzogMSxcbiAgY2hhbGxlbmdlOiAwLFxuICBjaGFyU2V0OiAxLFxuICBjaGVja2VkOiAwLFxuICBjaGlsZHJlbjogMCxcbiAgY2l0ZTogMCxcbiAgY2xhc3M6ICdjbGFzc05hbWUnLFxuICBjbGFzc0lEOiAxLFxuICBjbGFzc05hbWU6IDEsXG4gIGNvbHM6IDAsXG4gIGNvbFNwYW46IDEsXG4gIGNvbnRlbnQ6IDAsXG4gIGNvbnRlbnRFZGl0YWJsZTogMSxcbiAgY29udGV4dE1lbnU6IDEsXG4gIGNvbnRyb2xzOiAwLFxuICBjb250cm9sc0xpc3Q6IDEsXG4gIGNvb3JkczogMCxcbiAgY3Jvc3NPcmlnaW46IDEsXG4gIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiAxLFxuICBkYXRhOiAwLFxuICBkYXRlVGltZTogMSxcbiAgZGVmYXVsdDogMCxcbiAgZGVmYXVsdENoZWNrZWQ6IDEsXG4gIGRlZmF1bHRWYWx1ZTogMSxcbiAgZGVmZXI6IDAsXG4gIGRpcjogMCxcbiAgZGlzYWJsZWQ6IDAsXG4gIGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlOiAxLFxuICBkaXNhYmxlUmVtb3RlUGxheWJhY2s6IDEsXG4gIGRvd25sb2FkOiAwLFxuICBkcmFnZ2FibGU6IDAsXG4gIGVuY1R5cGU6IDEsXG4gIGVudGVyS2V5SGludDogMSxcbiAgZm9yOiAnaHRtbEZvcicsXG4gIGZvcm06IDAsXG4gIGZvcm1NZXRob2Q6IDEsXG4gIGZvcm1BY3Rpb246IDEsXG4gIGZvcm1FbmNUeXBlOiAxLFxuICBmb3JtTm9WYWxpZGF0ZTogMSxcbiAgZm9ybVRhcmdldDogMSxcbiAgZnJhbWVCb3JkZXI6IDEsXG4gIGhlYWRlcnM6IDAsXG4gIGhlaWdodDogMCxcbiAgaGlkZGVuOiAwLFxuICBoaWdoOiAwLFxuICBocmVmOiAwLFxuICBocmVmTGFuZzogMSxcbiAgaHRtbEZvcjogMSxcbiAgaHR0cEVxdWl2OiAxLFxuICAnaHR0cC1lcXVpdic6ICdodHRwRXF1aXYnLFxuICBpY29uOiAwLFxuICBpZDogMCxcbiAgaW5uZXJIVE1MOiAxLFxuICBpbnB1dE1vZGU6IDEsXG4gIGludGVncml0eTogMCxcbiAgaXM6IDAsXG4gIGl0ZW1JRDogMSxcbiAgaXRlbVByb3A6IDEsXG4gIGl0ZW1SZWY6IDEsXG4gIGl0ZW1TY29wZTogMSxcbiAgaXRlbVR5cGU6IDEsXG4gIGtleVBhcmFtczogMSxcbiAga2V5VHlwZTogMSxcbiAga2luZDogMCxcbiAgbGFiZWw6IDAsXG4gIGxhbmc6IDAsXG4gIGxpc3Q6IDAsXG4gIGxvb3A6IDAsXG4gIGxvdzogMCxcbiAgbWFuaWZlc3Q6IDAsXG4gIG1hcmdpbldpZHRoOiAxLFxuICBtYXJnaW5IZWlnaHQ6IDEsXG4gIG1heDogMCxcbiAgbWF4TGVuZ3RoOiAxLFxuICBtZWRpYTogMCxcbiAgbWVkaWFHcm91cDogMSxcbiAgbWV0aG9kOiAwLFxuICBtaW46IDAsXG4gIG1pbkxlbmd0aDogMSxcbiAgbXVsdGlwbGU6IDAsXG4gIG11dGVkOiAwLFxuICBuYW1lOiAwLFxuICBub01vZHVsZTogMSxcbiAgbm9uY2U6IDAsXG4gIG5vVmFsaWRhdGU6IDEsXG4gIG9wZW46IDAsXG4gIG9wdGltdW06IDAsXG4gIHBhdHRlcm46IDAsXG4gIHBsYWNlaG9sZGVyOiAwLFxuICBwbGF5c0lubGluZTogMSxcbiAgcG9zdGVyOiAwLFxuICBwcmVsb2FkOiAwLFxuICBwcm9maWxlOiAwLFxuICByYWRpb0dyb3VwOiAxLFxuICByZWFkT25seTogMSxcbiAgcmVmZXJyZXJQb2xpY3k6IDEsXG4gIHJlbDogMCxcbiAgcmVxdWlyZWQ6IDAsXG4gIHJldmVyc2VkOiAwLFxuICByb2xlOiAwLFxuICByb3dzOiAwLFxuICByb3dTcGFuOiAxLFxuICBzYW5kYm94OiAwLFxuICBzY29wZTogMCxcbiAgc2NvcGVkOiAwLFxuICBzY3JvbGxpbmc6IDAsXG4gIHNlYW1sZXNzOiAwLFxuICBzZWxlY3RlZDogMCxcbiAgc2hhcGU6IDAsXG4gIHNpemU6IDAsXG4gIHNpemVzOiAwLFxuICBzcGFuOiAwLFxuICBzcGVsbENoZWNrOiAxLFxuICBzcmM6IDAsXG4gIHNyY0RvYzogMSxcbiAgc3JjTGFuZzogMSxcbiAgc3JjU2V0OiAxLFxuICBzdGFydDogMCxcbiAgc3RlcDogMCxcbiAgc3R5bGU6IDAsXG4gIHN1bW1hcnk6IDAsXG4gIHRhYkluZGV4OiAxLFxuICB0YXJnZXQ6IDAsXG4gIHRpdGxlOiAwLFxuICB0eXBlOiAwLFxuICB1c2VNYXA6IDEsXG4gIHZhbHVlOiAwLFxuICB3aWR0aDogMCxcbiAgd21vZGU6IDAsXG4gIHdyYXA6IDAsXG4gIGFib3V0OiAwLFxuICBhY2NlbnRIZWlnaHQ6IDEsXG4gICdhY2NlbnQtaGVpZ2h0JzogJ2FjY2VudEhlaWdodCcsXG4gIGFjY3VtdWxhdGU6IDAsXG4gIGFkZGl0aXZlOiAwLFxuICBhbGlnbm1lbnRCYXNlbGluZTogMSxcbiAgJ2FsaWdubWVudC1iYXNlbGluZSc6ICdhbGlnbm1lbnRCYXNlbGluZScsXG4gIGFsbG93UmVvcmRlcjogMSxcbiAgYWxwaGFiZXRpYzogMCxcbiAgYW1wbGl0dWRlOiAwLFxuICBhcmFiaWNGb3JtOiAxLFxuICAnYXJhYmljLWZvcm0nOiAnYXJhYmljRm9ybScsXG4gIGFzY2VudDogMCxcbiAgYXR0cmlidXRlTmFtZTogMSxcbiAgYXR0cmlidXRlVHlwZTogMSxcbiAgYXV0b1JldmVyc2U6IDEsXG4gIGF6aW11dGg6IDAsXG4gIGJhc2VGcmVxdWVuY3k6IDEsXG4gIGJhc2VsaW5lU2hpZnQ6IDEsXG4gICdiYXNlbGluZS1zaGlmdCc6ICdiYXNlbGluZVNoaWZ0JyxcbiAgYmFzZVByb2ZpbGU6IDEsXG4gIGJib3g6IDAsXG4gIGJlZ2luOiAwLFxuICBiaWFzOiAwLFxuICBieTogMCxcbiAgY2FsY01vZGU6IDEsXG4gIGNhcEhlaWdodDogMSxcbiAgJ2NhcC1oZWlnaHQnOiAnY2FwSGVpZ2h0JyxcbiAgY2xpcDogMCxcbiAgY2xpcFBhdGg6IDEsXG4gICdjbGlwLXBhdGgnOiAnY2xpcFBhdGgnLFxuICBjbGlwUGF0aFVuaXRzOiAxLFxuICBjbGlwUnVsZTogMSxcbiAgJ2NsaXAtcnVsZSc6ICdjbGlwUnVsZScsXG4gIGNvbG9yOiAwLFxuICBjb2xvckludGVycG9sYXRpb246IDEsXG4gICdjb2xvci1pbnRlcnBvbGF0aW9uJzogJ2NvbG9ySW50ZXJwb2xhdGlvbicsXG4gIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM6IDEsXG4gICdjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMnOiAnY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVycycsXG4gIGNvbG9yUHJvZmlsZTogMSxcbiAgJ2NvbG9yLXByb2ZpbGUnOiAnY29sb3JQcm9maWxlJyxcbiAgY29sb3JSZW5kZXJpbmc6IDEsXG4gICdjb2xvci1yZW5kZXJpbmcnOiAnY29sb3JSZW5kZXJpbmcnLFxuICBjb250ZW50U2NyaXB0VHlwZTogMSxcbiAgY29udGVudFN0eWxlVHlwZTogMSxcbiAgY3Vyc29yOiAwLFxuICBjeDogMCxcbiAgY3k6IDAsXG4gIGQ6IDAsXG4gIGRhdGF0eXBlOiAwLFxuICBkZWNlbGVyYXRlOiAwLFxuICBkZXNjZW50OiAwLFxuICBkaWZmdXNlQ29uc3RhbnQ6IDEsXG4gIGRpcmVjdGlvbjogMCxcbiAgZGlzcGxheTogMCxcbiAgZGl2aXNvcjogMCxcbiAgZG9taW5hbnRCYXNlbGluZTogMSxcbiAgJ2RvbWluYW50LWJhc2VsaW5lJzogJ2RvbWluYW50QmFzZWxpbmUnLFxuICBkdXI6IDAsXG4gIGR4OiAwLFxuICBkeTogMCxcbiAgZWRnZU1vZGU6IDEsXG4gIGVsZXZhdGlvbjogMCxcbiAgZW5hYmxlQmFja2dyb3VuZDogMSxcbiAgJ2VuYWJsZS1iYWNrZ3JvdW5kJzogJ2VuYWJsZUJhY2tncm91bmQnLFxuICBlbmQ6IDAsXG4gIGV4cG9uZW50OiAwLFxuICBleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkOiAxLFxuICBmaWxsOiAwLFxuICBmaWxsT3BhY2l0eTogMSxcbiAgJ2ZpbGwtb3BhY2l0eSc6ICdmaWxsT3BhY2l0eScsXG4gIGZpbGxSdWxlOiAxLFxuICAnZmlsbC1ydWxlJzogJ2ZpbGxSdWxlJyxcbiAgZmlsdGVyOiAwLFxuICBmaWx0ZXJSZXM6IDEsXG4gIGZpbHRlclVuaXRzOiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gICdmbG9vZC1vcGFjaXR5JzogJ2Zsb29kT3BhY2l0eScsXG4gIGZsb29kQ29sb3I6IDEsXG4gICdmbG9vZC1jb2xvcic6ICdmbG9vZENvbG9yJyxcbiAgZm9jdXNhYmxlOiAwLFxuICBmb250RmFtaWx5OiAxLFxuICAnZm9udC1mYW1pbHknOiAnZm9udEZhbWlseScsXG4gIGZvbnRTaXplOiAxLFxuICAnZm9udC1zaXplJzogJ2ZvbnRTaXplJyxcbiAgZm9udFNpemVBZGp1c3Q6IDEsXG4gICdmb250LXNpemUtYWRqdXN0JzogJ2ZvbnRTaXplQWRqdXN0JyxcbiAgZm9udFN0cmV0Y2g6IDEsXG4gICdmb250LXN0cmV0Y2gnOiAnZm9udFN0cmV0Y2gnLFxuICBmb250U3R5bGU6IDEsXG4gICdmb250LXN0eWxlJzogJ2ZvbnRTdHlsZScsXG4gIGZvbnRWYXJpYW50OiAxLFxuICAnZm9udC12YXJpYW50JzogJ2ZvbnRWYXJpYW50JyxcbiAgZm9udFdlaWdodDogMSxcbiAgJ2ZvbnQtd2VpZ2h0JzogJ2ZvbnRXZWlnaHQnLFxuICBmb3JtYXQ6IDAsXG4gIGZyb206IDAsXG4gIGZ4OiAwLFxuICBmeTogMCxcbiAgZzE6IDAsXG4gIGcyOiAwLFxuICBnbHlwaE5hbWU6IDEsXG4gICdnbHlwaC1uYW1lJzogJ2dseXBoTmFtZScsXG4gIGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsOiAxLFxuICAnZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCc6ICdnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbCcsXG4gIGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbDogMSxcbiAgJ2dseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsJzogJ2dseXBoT3JpZW50YXRpb25WZXJ0aWNhbCcsXG4gIGdseXBoUmVmOiAxLFxuICBncmFkaWVudFRyYW5zZm9ybTogMSxcbiAgZ3JhZGllbnRVbml0czogMSxcbiAgaGFuZ2luZzogMCxcbiAgaG9yaXpBZHZYOiAxLFxuICAnaG9yaXotYWR2LXgnOiAnaG9yaXpBZHZYJyxcbiAgaG9yaXpPcmlnaW5YOiAxLFxuICAnaG9yaXotb3JpZ2luLXgnOiAnaG9yaXpPcmlnaW5YJyxcbiAgaWRlb2dyYXBoaWM6IDAsXG4gIGltYWdlUmVuZGVyaW5nOiAxLFxuICAnaW1hZ2UtcmVuZGVyaW5nJzogJ2ltYWdlUmVuZGVyaW5nJyxcbiAgaW4yOiAwLFxuICBpbjogMCxcbiAgaW5saXN0OiAwLFxuICBpbnRlcmNlcHQ6IDAsXG4gIGsxOiAwLFxuICBrMjogMCxcbiAgazM6IDAsXG4gIGs0OiAwLFxuICBrOiAwLFxuICBrZXJuZWxNYXRyaXg6IDEsXG4gIGtlcm5lbFVuaXRMZW5ndGg6IDEsXG4gIGtlcm5pbmc6IDAsXG4gIGtleVBvaW50czogMSxcbiAga2V5U3BsaW5lczogMSxcbiAga2V5VGltZXM6IDEsXG4gIGxlbmd0aEFkanVzdDogMSxcbiAgbGV0dGVyU3BhY2luZzogMSxcbiAgJ2xldHRlci1zcGFjaW5nJzogJ2xldHRlclNwYWNpbmcnLFxuICBsaWdodGluZ0NvbG9yOiAxLFxuICAnbGlnaHRpbmctY29sb3InOiAnbGlnaHRpbmdDb2xvcicsXG4gIGxpbWl0aW5nQ29uZUFuZ2xlOiAxLFxuICBsb2NhbDogMCxcbiAgbWFya2VyRW5kOiAxLFxuICAnbWFya2VyLWVuZCc6ICdtYXJrZXJFbmQnLFxuICBtYXJrZXJIZWlnaHQ6IDEsXG4gIG1hcmtlck1pZDogMSxcbiAgJ21hcmtlci1taWQnOiAnbWFya2VyTWlkJyxcbiAgbWFya2VyU3RhcnQ6IDEsXG4gICdtYXJrZXItc3RhcnQnOiAnbWFya2VyU3RhcnQnLFxuICBtYXJrZXJVbml0czogMSxcbiAgbWFya2VyV2lkdGg6IDEsXG4gIG1hc2s6IDAsXG4gIG1hc2tDb250ZW50VW5pdHM6IDEsXG4gIG1hc2tVbml0czogMSxcbiAgbWF0aGVtYXRpY2FsOiAwLFxuICBtb2RlOiAwLFxuICBudW1PY3RhdmVzOiAxLFxuICBvZmZzZXQ6IDAsXG4gIG9wYWNpdHk6IDAsXG4gIG9wZXJhdG9yOiAwLFxuICBvcmRlcjogMCxcbiAgb3JpZW50OiAwLFxuICBvcmllbnRhdGlvbjogMCxcbiAgb3JpZ2luOiAwLFxuICBvdmVyZmxvdzogMCxcbiAgb3ZlcmxpbmVQb3NpdGlvbjogMSxcbiAgJ292ZXJsaW5lLXBvc2l0aW9uJzogJ292ZXJsaW5lUG9zaXRpb24nLFxuICBvdmVybGluZVRoaWNrbmVzczogMSxcbiAgJ292ZXJsaW5lLXRoaWNrbmVzcyc6ICdvdmVybGluZVRoaWNrbmVzcycsXG4gIHBhaW50T3JkZXI6IDEsXG4gICdwYWludC1vcmRlcic6ICdwYWludE9yZGVyJyxcbiAgcGFub3NlMTogMCxcbiAgJ3Bhbm9zZS0xJzogJ3Bhbm9zZTEnLFxuICBwYXRoTGVuZ3RoOiAxLFxuICBwYXR0ZXJuQ29udGVudFVuaXRzOiAxLFxuICBwYXR0ZXJuVHJhbnNmb3JtOiAxLFxuICBwYXR0ZXJuVW5pdHM6IDEsXG4gIHBvaW50ZXJFdmVudHM6IDEsXG4gICdwb2ludGVyLWV2ZW50cyc6ICdwb2ludGVyRXZlbnRzJyxcbiAgcG9pbnRzOiAwLFxuICBwb2ludHNBdFg6IDEsXG4gIHBvaW50c0F0WTogMSxcbiAgcG9pbnRzQXRaOiAxLFxuICBwcmVmaXg6IDAsXG4gIHByZXNlcnZlQWxwaGE6IDEsXG4gIHByZXNlcnZlQXNwZWN0UmF0aW86IDEsXG4gIHByaW1pdGl2ZVVuaXRzOiAxLFxuICBwcm9wZXJ0eTogMCxcbiAgcjogMCxcbiAgcmFkaXVzOiAwLFxuICByZWZYOiAxLFxuICByZWZZOiAxLFxuICByZW5kZXJpbmdJbnRlbnQ6IDEsXG4gICdyZW5kZXJpbmctaW50ZW50JzogJ3JlbmRlcmluZ0ludGVudCcsXG4gIHJlcGVhdENvdW50OiAxLFxuICByZXBlYXREdXI6IDEsXG4gIHJlcXVpcmVkRXh0ZW5zaW9uczogMSxcbiAgcmVxdWlyZWRGZWF0dXJlczogMSxcbiAgcmVzb3VyY2U6IDAsXG4gIHJlc3RhcnQ6IDAsXG4gIHJlc3VsdDogMCxcbiAgcmVzdWx0czogMCxcbiAgcm90YXRlOiAwLFxuICByeDogMCxcbiAgcnk6IDAsXG4gIHNjYWxlOiAwLFxuICBzZWN1cml0eTogMCxcbiAgc2VlZDogMCxcbiAgc2hhcGVSZW5kZXJpbmc6IDEsXG4gICdzaGFwZS1yZW5kZXJpbmcnOiAnc2hhcGVSZW5kZXJpbmcnLFxuICBzbG9wZTogMCxcbiAgc3BhY2luZzogMCxcbiAgc3BlY3VsYXJDb25zdGFudDogMSxcbiAgc3BlY3VsYXJFeHBvbmVudDogMSxcbiAgc3BlZWQ6IDAsXG4gIHNwcmVhZE1ldGhvZDogMSxcbiAgc3RhcnRPZmZzZXQ6IDEsXG4gIHN0ZERldmlhdGlvbjogMSxcbiAgc3RlbWg6IDAsXG4gIHN0ZW12OiAwLFxuICBzdGl0Y2hUaWxlczogMSxcbiAgc3RvcENvbG9yOiAxLFxuICAnc3RvcC1jb2xvcic6ICdzdG9wQ29sb3InLFxuICBzdG9wT3BhY2l0eTogMSxcbiAgJ3N0b3Atb3BhY2l0eSc6ICdzdG9wT3BhY2l0eScsXG4gIHN0cmlrZXRocm91Z2hQb3NpdGlvbjogMSxcbiAgJ3N0cmlrZXRocm91Z2gtcG9zaXRpb24nOiAnc3RyaWtldGhyb3VnaFBvc2l0aW9uJyxcbiAgc3RyaWtldGhyb3VnaFRoaWNrbmVzczogMSxcbiAgJ3N0cmlrZXRocm91Z2gtdGhpY2tuZXNzJzogJ3N0cmlrZXRocm91Z2hUaGlja25lc3MnLFxuICBzdHJpbmc6IDAsXG4gIHN0cm9rZTogMCxcbiAgc3Ryb2tlRGFzaGFycmF5OiAxLFxuICAnc3Ryb2tlLWRhc2hhcnJheSc6ICdzdHJva2VEYXNoYXJyYXknLFxuICBzdHJva2VEYXNob2Zmc2V0OiAxLFxuICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAnc3Ryb2tlRGFzaG9mZnNldCcsXG4gIHN0cm9rZUxpbmVjYXA6IDEsXG4gICdzdHJva2UtbGluZWNhcCc6ICdzdHJva2VMaW5lY2FwJyxcbiAgc3Ryb2tlTGluZWpvaW46IDEsXG4gICdzdHJva2UtbGluZWpvaW4nOiAnc3Ryb2tlTGluZWpvaW4nLFxuICBzdHJva2VNaXRlcmxpbWl0OiAxLFxuICAnc3Ryb2tlLW1pdGVybGltaXQnOiAnc3Ryb2tlTWl0ZXJsaW1pdCcsXG4gIHN0cm9rZVdpZHRoOiAxLFxuICAnc3Ryb2tlLXdpZHRoJzogJ3N0cm9rZVdpZHRoJyxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgJ3N0cm9rZS1vcGFjaXR5JzogJ3N0cm9rZU9wYWNpdHknLFxuICBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc6IDEsXG4gIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZzogMSxcbiAgc3VyZmFjZVNjYWxlOiAxLFxuICBzeXN0ZW1MYW5ndWFnZTogMSxcbiAgdGFibGVWYWx1ZXM6IDEsXG4gIHRhcmdldFg6IDEsXG4gIHRhcmdldFk6IDEsXG4gIHRleHRBbmNob3I6IDEsXG4gICd0ZXh0LWFuY2hvcic6ICd0ZXh0QW5jaG9yJyxcbiAgdGV4dERlY29yYXRpb246IDEsXG4gICd0ZXh0LWRlY29yYXRpb24nOiAndGV4dERlY29yYXRpb24nLFxuICB0ZXh0TGVuZ3RoOiAxLFxuICB0ZXh0UmVuZGVyaW5nOiAxLFxuICAndGV4dC1yZW5kZXJpbmcnOiAndGV4dFJlbmRlcmluZycsXG4gIHRvOiAwLFxuICB0cmFuc2Zvcm06IDAsXG4gIHR5cGVvZjogMCxcbiAgdTE6IDAsXG4gIHUyOiAwLFxuICB1bmRlcmxpbmVQb3NpdGlvbjogMSxcbiAgJ3VuZGVybGluZS1wb3NpdGlvbic6ICd1bmRlcmxpbmVQb3NpdGlvbicsXG4gIHVuZGVybGluZVRoaWNrbmVzczogMSxcbiAgJ3VuZGVybGluZS10aGlja25lc3MnOiAndW5kZXJsaW5lVGhpY2tuZXNzJyxcbiAgdW5pY29kZTogMCxcbiAgdW5pY29kZUJpZGk6IDEsXG4gICd1bmljb2RlLWJpZGknOiAndW5pY29kZUJpZGknLFxuICB1bmljb2RlUmFuZ2U6IDEsXG4gICd1bmljb2RlLXJhbmdlJzogJ3VuaWNvZGVSYW5nZScsXG4gIHVuaXRzUGVyRW06IDEsXG4gICd1bml0cy1wZXItZW0nOiAndW5pdHNQZXJFbScsXG4gIHVuc2VsZWN0YWJsZTogMCxcbiAgdkFscGhhYmV0aWM6IDEsXG4gICd2LWFscGhhYmV0aWMnOiAndkFscGhhYmV0aWMnLFxuICB2YWx1ZXM6IDAsXG4gIHZlY3RvckVmZmVjdDogMSxcbiAgJ3ZlY3Rvci1lZmZlY3QnOiAndmVjdG9yRWZmZWN0JyxcbiAgdmVyc2lvbjogMCxcbiAgdmVydEFkdlk6IDEsXG4gICd2ZXJ0LWFkdi15JzogJ3ZlcnRBZHZZJyxcbiAgdmVydE9yaWdpblg6IDEsXG4gICd2ZXJ0LW9yaWdpbi14JzogJ3ZlcnRPcmlnaW5YJyxcbiAgdmVydE9yaWdpblk6IDEsXG4gICd2ZXJ0LW9yaWdpbi15JzogJ3ZlcnRPcmlnaW5ZJyxcbiAgdkhhbmdpbmc6IDEsXG4gICd2LWhhbmdpbmcnOiAndkhhbmdpbmcnLFxuICB2SWRlb2dyYXBoaWM6IDEsXG4gICd2LWlkZW9ncmFwaGljJzogJ3ZJZGVvZ3JhcGhpYycsXG4gIHZpZXdCb3g6IDEsXG4gIHZpZXdUYXJnZXQ6IDEsXG4gIHZpc2liaWxpdHk6IDAsXG4gIHZNYXRoZW1hdGljYWw6IDEsXG4gICd2LW1hdGhlbWF0aWNhbCc6ICd2TWF0aGVtYXRpY2FsJyxcbiAgdm9jYWI6IDAsXG4gIHdpZHRoczogMCxcbiAgd29yZFNwYWNpbmc6IDEsXG4gICd3b3JkLXNwYWNpbmcnOiAnd29yZFNwYWNpbmcnLFxuICB3cml0aW5nTW9kZTogMSxcbiAgJ3dyaXRpbmctbW9kZSc6ICd3cml0aW5nTW9kZScsXG4gIHgxOiAwLFxuICB4MjogMCxcbiAgeDogMCxcbiAgeENoYW5uZWxTZWxlY3RvcjogMSxcbiAgeEhlaWdodDogMSxcbiAgJ3gtaGVpZ2h0JzogJ3hIZWlnaHQnLFxuICB4bGlua0FjdHVhdGU6IDEsXG4gICd4bGluazphY3R1YXRlJzogJ3hsaW5rQWN0dWF0ZScsXG4gIHhsaW5rQXJjcm9sZTogMSxcbiAgJ3hsaW5rOmFyY3JvbGUnOiAneGxpbmtBcmNyb2xlJyxcbiAgeGxpbmtIcmVmOiAxLFxuICAneGxpbms6aHJlZic6ICd4bGlua0hyZWYnLFxuICB4bGlua1JvbGU6IDEsXG4gICd4bGluazpyb2xlJzogJ3hsaW5rUm9sZScsXG4gIHhsaW5rU2hvdzogMSxcbiAgJ3hsaW5rOnNob3cnOiAneGxpbmtTaG93JyxcbiAgeGxpbmtUaXRsZTogMSxcbiAgJ3hsaW5rOnRpdGxlJzogJ3hsaW5rVGl0bGUnLFxuICB4bGlua1R5cGU6IDEsXG4gICd4bGluazp0eXBlJzogJ3hsaW5rVHlwZScsXG4gIHhtbEJhc2U6IDEsXG4gICd4bWw6YmFzZSc6ICd4bWxCYXNlJyxcbiAgeG1sTGFuZzogMSxcbiAgJ3htbDpsYW5nJzogJ3htbExhbmcnLFxuICB4bWxuczogMCxcbiAgJ3htbDpzcGFjZSc6ICd4bWxTcGFjZScsXG4gIHhtbG5zWGxpbms6IDEsXG4gICd4bWxuczp4bGluayc6ICd4bWxuc1hsaW5rJyxcbiAgeG1sU3BhY2U6IDEsXG4gIHkxOiAwLFxuICB5MjogMCxcbiAgeTogMCxcbiAgeUNoYW5uZWxTZWxlY3RvcjogMSxcbiAgejogMCxcbiAgem9vbUFuZFBhbjogMVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBzdHlsZV90b19vYmplY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwic3R5bGUtdG8tb2JqZWN0XCIpKTtcbnZhciB1dGlsaXRpZXNfMSA9IHJlcXVpcmUoXCIuL3V0aWxpdGllc1wiKTtcbmZ1bmN0aW9uIFN0eWxlVG9KUyhzdHlsZSwgb3B0aW9ucykge1xuICAgIHZhciBvdXRwdXQgPSB7fTtcbiAgICBpZiAoIXN0eWxlIHx8IHR5cGVvZiBzdHlsZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgc3R5bGVfdG9fb2JqZWN0XzFbXCJkZWZhdWx0XCJdKHN0eWxlLCBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgb3V0cHV0W3V0aWxpdGllc18xLmNhbWVsQ2FzZShwcm9wZXJ0eSwgb3B0aW9ucyldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTdHlsZVRvSlM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNhbWVsQ2FzZSA9IHZvaWQgMDtcbnZhciBDVVNUT01fUFJPUEVSVFlfUkVHRVggPSAvXi0tW2EtekEtWjAtOS1dKyQvO1xudmFyIEhZUEhFTl9SRUdFWCA9IC8tKFthLXpdKS9nO1xudmFyIE5PX0hZUEhFTl9SRUdFWCA9IC9eW14tXSskLztcbnZhciBWRU5ET1JfUFJFRklYX1JFR0VYID0gL14tKHdlYmtpdHxtb3p8bXN8b3xraHRtbCktLztcbnZhciBza2lwQ2FtZWxDYXNlID0gZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFwcm9wZXJ0eSB8fFxuICAgICAgICBOT19IWVBIRU5fUkVHRVgudGVzdChwcm9wZXJ0eSkgfHxcbiAgICAgICAgQ1VTVE9NX1BST1BFUlRZX1JFR0VYLnRlc3QocHJvcGVydHkpO1xufTtcbnZhciBjYXBpdGFsaXplID0gZnVuY3Rpb24gKG1hdGNoLCBjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCk7XG59O1xudmFyIHRyaW1IeXBoZW4gPSBmdW5jdGlvbiAobWF0Y2gsIHByZWZpeCkgeyByZXR1cm4gcHJlZml4ICsgXCItXCI7IH07XG52YXIgY2FtZWxDYXNlID0gZnVuY3Rpb24gKHByb3BlcnR5LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBpZiAoc2tpcENhbWVsQ2FzZShwcm9wZXJ0eSkpIHtcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH1cbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKCFvcHRpb25zLnJlYWN0Q29tcGF0KSB7XG4gICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkucmVwbGFjZShWRU5ET1JfUFJFRklYX1JFR0VYLCB0cmltSHlwaGVuKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5LnJlcGxhY2UoSFlQSEVOX1JFR0VYLCBjYXBpdGFsaXplKTtcbn07XG5leHBvcnRzLmNhbWVsQ2FzZSA9IGNhbWVsQ2FzZTtcbiIsInZhciBwYXJzZSA9IHJlcXVpcmUoJ2lubGluZS1zdHlsZS1wYXJzZXInKTtcblxuLyoqXG4gKiBQYXJzZXMgaW5saW5lIHN0eWxlIHRvIG9iamVjdC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7ICdsaW5lLWhlaWdodCc6ICc0MicgfVxuICogU3R5bGVUb09iamVjdCgnbGluZS1oZWlnaHQ6IDQyOycpO1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICBzdHlsZSAgICAgIC0gVGhlIGlubGluZSBzdHlsZS5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgICBbaXRlcmF0b3JdIC0gVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bnVsbHxPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIFN0eWxlVG9PYmplY3Qoc3R5bGUsIGl0ZXJhdG9yKSB7XG4gIHZhciBvdXRwdXQgPSBudWxsO1xuICBpZiAoIXN0eWxlIHx8IHR5cGVvZiBzdHlsZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgdmFyIGRlY2xhcmF0aW9uO1xuICB2YXIgZGVjbGFyYXRpb25zID0gcGFyc2Uoc3R5bGUpO1xuICB2YXIgaGFzSXRlcmF0b3IgPSB0eXBlb2YgaXRlcmF0b3IgPT09ICdmdW5jdGlvbic7XG4gIHZhciBwcm9wZXJ0eTtcbiAgdmFyIHZhbHVlO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkZWNsYXJhdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBkZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uc1tpXTtcbiAgICBwcm9wZXJ0eSA9IGRlY2xhcmF0aW9uLnByb3BlcnR5O1xuICAgIHZhbHVlID0gZGVjbGFyYXRpb24udmFsdWU7XG5cbiAgICBpZiAoaGFzSXRlcmF0b3IpIHtcbiAgICAgIGl0ZXJhdG9yKHByb3BlcnR5LCB2YWx1ZSwgZGVjbGFyYXRpb24pO1xuICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgIG91dHB1dCB8fCAob3V0cHV0ID0ge30pO1xuICAgICAgb3V0cHV0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3R5bGVUb09iamVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=