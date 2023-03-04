exports.id = 511;
exports.ids = [511];
exports.modules = {

/***/ 2572:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Container_container__WAGEk",
	"xs": "Container_xs__lmLxX",
	"sm": "Container_sm__NxnH_",
	"md": "Container_md__R9xsg",
	"lg": "Container_lg__ri4gN",
	"xl": "Container_xl__2fgyR"
};


/***/ }),

/***/ 537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ marketplaceContractAddress),
/* harmony export */   "f": () => (/* binding */ NFT_COLLECTION_ADDRESS)
/* harmony export */ });
// Use your marketplace contract address here
const marketplaceContractAddress = "0x9e9cE7082E4B1308Cb2186EfD28ea0ABcFcF4187";
const NFT_COLLECTION_ADDRESS = "0xe0718e419092311303ecC848152856a8f1a4d9F4";


/***/ }),

/***/ 5993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2572);
/* harmony import */ var _Container_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Container_module_css__WEBPACK_IMPORTED_MODULE_2__);



/**
 * A container component that sets the max-width of its children, and centers them on the page.
 * @param maxWidth: The max-width of the container. Can be "sm", "md", "lg", "xl", or "2xl".
 */ function Container({ maxWidth , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_Container_module_css__WEBPACK_IMPORTED_MODULE_2___default().container)} ${(_Container_module_css__WEBPACK_IMPORTED_MODULE_2___default())[maxWidth]}`,
        children: children
    });
}


/***/ })

};
;