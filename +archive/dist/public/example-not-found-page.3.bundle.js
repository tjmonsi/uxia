webpackJsonp([3],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RegisterHtmlTemplate = __webpack_require__(26);

RegisterHtmlTemplate.register("<dom-module id=example-not-found-page> <template> <link rel=stylesheet src=./example-not-found-page.scss> <h1>Hello world</h1> </template> </dom-module>");

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(5);

__webpack_require__(118);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* @polymer
* @extends HTMLElement
*/
var ExampleNotFoundPage = function (_Polymer$Element) {
  _inherits(ExampleNotFoundPage, _Polymer$Element);

  function ExampleNotFoundPage() {
    _classCallCheck(this, ExampleNotFoundPage);

    return _possibleConstructorReturn(this, (ExampleNotFoundPage.__proto__ || Object.getPrototypeOf(ExampleNotFoundPage)).apply(this, arguments));
  }

  _createClass(ExampleNotFoundPage, null, [{
    key: 'is',
    get: function get() {
      return 'example-not-found-page';
    }
  }]);

  return ExampleNotFoundPage;
}(Polymer.Element);

window.customElements.define(ExampleNotFoundPage.is, ExampleNotFoundPage);

/***/ })

});
//# sourceMappingURL=example-not-found-page.3.bundle.js.map