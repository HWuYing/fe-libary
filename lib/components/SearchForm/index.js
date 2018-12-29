"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _particulate = require("../particulate");

var _particulate2 = require("@particulate");

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var factoryComponentsConfig = _particulate2.component.factoryComponentsConfig;
var Form = (0, _particulate.createForm)();

var SearchForm =
/*#__PURE__*/
function (_FormComponent) {
  _inherits(SearchForm, _FormComponent);

  function SearchForm(props, context) {
    var _this;

    _classCallCheck(this, SearchForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchForm).call(this, props, context));

    _this.initial(props);

    return _this;
  }

  _createClass(SearchForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.initial(nextProps);
    }
  }, {
    key: "initial",
    value: function initial(props) {
      this.mergeProps = _particulate.FormComponent.initialMergeProps(props, ['children']);
    }
  }, {
    key: "resetFields",
    value: function resetFields() {
      this.form.resetFields();
      this.form.onSubmit();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(Form, _extends({
        className: _index.default['search-form'],
        layout: "inline"
      }, this.mergeProps, {
        getForm: function getForm(f) {
          return _this2.getForm(f);
        }
      }), _react.default.createElement(_antd.Button, {
        type: "primary",
        htmlType: "submit"
      }, "\u67E5\u8BE2"), _react.default.createElement(_antd.Button, {
        style: {
          marginLeft: 8
        },
        onClick: function onClick() {
          return _this2.resetFields();
        }
      }, "\u91CD\u7F6E"));
    }
  }]);

  return SearchForm;
}(_particulate.FormComponent);

var _default = function _default(config, option) {
  return factoryComponentsConfig(SearchForm)(_objectSpread({
    fieldsConfig: config,
    getForm: function getForm() {},
    parseFields: function parseFields(fields) {
      return fields;
    },
    labelStyle: {}
  }, option));
};

exports.default = _default;