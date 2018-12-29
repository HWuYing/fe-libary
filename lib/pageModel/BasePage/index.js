"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BasePage = void 0;

var _react = _interopRequireWildcard(require("react"));

var _particulate = require("@particulate");

var _layouts = require("@layouts");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var clearAttr = _particulate.component.clearAttr,
    factoryComponentsConfig = _particulate.component.factoryComponentsConfig;

var BasePage =
/*#__PURE__*/
function (_Component) {
  _inherits(BasePage, _Component);

  function BasePage(props, context) {
    var _this;

    _classCallCheck(this, BasePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BasePage).call(this, props, context));

    _this.initial(props);

    return _this;
  }

  _createClass(BasePage, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.initial(nextProps);
    }
  }, {
    key: "initial",
    value: function initial(props, clientArray) {
      this.childProps = BasePage.initialMergeProps(props, clientArray);
    }
  }, {
    key: "renderPage",
    value: function renderPage(children) {
      var _this$props = this.props,
          className = _this$props.className,
          pageOptions = _this$props.pageOptions,
          pageProps = _this$props.pageProps;
      return _react.default.createElement(_layouts.PageLayout, _extends({}, pageOptions, pageProps, {
        className: [className].join(' ')
      }), _react.default.cloneElement(children));
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return BasePage;
}(_react.Component);

exports.BasePage = BasePage;

_defineProperty(BasePage, "initialMergeProps", function (props) {
  var clearArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return _objectSpread({}, clearAttr(_objectSpread({}, props), _toConsumableArray(clearArr).concat(['pageOptions', 'pageProps', 'className', 'Model', 'children'])));
});

var _default = function _default(Element, option) {
  return function (Model, options) {
    return factoryComponentsConfig(Element)(_objectSpread({
      Model: Model,
      className: '',
      pageOptions: _objectSpread({}, options)
    }, option));
  };
};

exports.default = _default;