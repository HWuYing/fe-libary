"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _particulate = require("@particulate");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable */
var clearAttr = _particulate.component.clearAttr;

var CustomerSwitch =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomerSwitch, _Component);

  function CustomerSwitch(props, context) {
    var _this;

    _classCallCheck(this, CustomerSwitch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomerSwitch).call(this, props, context));
    _this.state = {
      value: (props.value || props.defaultChecked || 1).toString()
    };

    _this.init(props);

    return _this;
  }

  _createClass(CustomerSwitch, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.init(nextProps);
    }
  }, {
    key: "onChange",
    value: function onChange(checked) {
      var value = checked ? this.defaultChecked : this.defaultNotChecked;
      if (this.props.onChange) this.props.onChange(value);
      this.setState({
        value: value
      });
    }
  }, {
    key: "init",
    value: function init(props) {
      this.defaultChecked = props.defaultChecked || '1';
      this.defaultNotChecked = props.defaultNotChecked || '2';
      if (props.value) this.state.value = props.value.toString();
      this.mergeProps = clearAttr(_objectSpread({}, props), ['defaultChecked', 'defaultNotChecked']);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      return _react.default.createElement(_antd.Switch, _extends({}, this.mergeProps, {
        checked: value.toString() === this.defaultChecked.toString(),
        onChange: function onChange() {
          return _this2.onChange.apply(_this2, arguments);
        }
      }));
    }
  }]);

  return CustomerSwitch;
}(_react.Component);

var _default = CustomerSwitch;
exports.default = _default;