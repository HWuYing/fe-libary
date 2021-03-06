"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormItemComponent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _particulate = require("@particulate");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factoryComponentsConfig = _particulate.component.factoryComponentsConfig,
    clearAttr = _particulate.component.clearAttr;

var FormItemComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(FormItemComponent, _Component);

  function FormItemComponent(props, context) {
    _classCallCheck(this, FormItemComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormItemComponent).call(this, props, context));
  }

  _createClass(FormItemComponent, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return FormItemComponent;
}(_react.Component);

exports.FormItemComponent = FormItemComponent;

_defineProperty(FormItemComponent, "initialEntry", function (Entry, entry) {
  var fileEle;
  if (!entry) fileEle = function fileEle() {
    return _react.default.createElement("div", null);
  };else if ((0, _particulate.type)(entry) === 'Function') {
    fileEle = entry;
  } else if ((0, _particulate.type)(entry) === 'Object') {
    var key = entry.key,
        reset = _objectWithoutProperties(entry, ["key"]);

    fileEle = Entry(key, _objectSpread({}, reset));
  }
  return fileEle;
});

_defineProperty(FormItemComponent, "initialDecorator", function (filedDecorator, fieldsStore, form) {
  var getFieldDecorator = form.getFieldDecorator;
  var decoratorNode;
  if (!filedDecorator) decoratorNode = function decoratorNode(fieldEle) {
    return fieldEle;
  };else {
    var key = filedDecorator.key;
    decoratorNode = getFieldDecorator(key, _objectSpread({
      initialValue: undefined
    }, filedDecorator, (0, _particulate.hasOwnProperty)(fieldsStore, key) ? {
      initialValue: (0, _particulate.type)(fieldsStore[key]) === 'Number' ? fieldsStore[key].toString() : fieldsStore[key]
    } : {}, {
      key: undefined
    }));
  }
  return decoratorNode;
});

_defineProperty(FormItemComponent, "initialMergeProps", function (props) {
  var isLine = props.isLine;
  return clearAttr(_objectSpread({}, props, isLine ? {
    labelCol: undefined,
    wrapperCol: undefined
  } : {}), ['decorator', 'item', 'entry', 'isLine', 'fieldsStore', 'filedDecorator', 'form', 'labelStyle', 'layoutSpan']);
});

var _default = function _default(Element, options) {
  return factoryComponentsConfig(Element)(_objectSpread({}, options));
};

exports.default = _default;