"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LayoutFormItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _FormItemComponent2 = _interopRequireWildcard(require("./FormItemComponent"));

var _particulate = require("@particulate");

var _Entry = _interopRequireDefault(require("../Entry"));

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FormItem = _antd.Form.Item;

var LayoutFormItem =
/*#__PURE__*/
function (_FormItemComponent) {
  _inherits(LayoutFormItem, _FormItemComponent);

  function LayoutFormItem(props, context) {
    var _this;

    _classCallCheck(this, LayoutFormItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LayoutFormItem).call(this, props, context));
    _this.decoratorNode = undefined;
    _this.fileEle = undefined;

    _this.initial(props);

    return _this;
  }

  _createClass(LayoutFormItem, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props = this.props,
          decorator = _this$props.decorator,
          fieldsStore = _this$props.fieldsStore;
      var status = decorator !== nextProps.decorator || fieldsStore !== nextProps.fieldsStore;
      this.initial(nextProps, status);
    }
  }, {
    key: "initial",
    value: function initial(props) {
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var _props$fieldsStore = props.fieldsStore,
          fieldsStore = _props$fieldsStore === void 0 ? {} : _props$fieldsStore,
          form = props.form,
          Entry = props.Entry;
      var _props$decorator = props.decorator,
          entry = _props$decorator.entry,
          filedDecorator = _props$decorator.filedDecorator;

      if (status) {
        this.mergeProps = LayoutFormItem.initialMergeProps(props);
        this.fileEle = LayoutFormItem.initialEntry(Entry, entry);
      }

      this.decoratorNode = LayoutFormItem.initialDecorator(filedDecorator, fieldsStore, form);
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var _this$props2 = this.props,
          labelStyle = _this$props2.labelStyle,
          isLine = _this$props2.isLine;
      var label = this.mergeProps.label;
      if (!label) return null;
      return !isLine ? label : _react.default.createElement("span", {
        style: labelStyle,
        className: _index.default['label-width']
      }, label);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          form = _this$props3.form,
          isLine = _this$props3.isLine,
          render = _this$props3.decorator.render;

      var _this$mergeProps = this.mergeProps,
          propsClassName = _this$mergeProps.className,
          reset = _objectWithoutProperties(_this$mergeProps, ["className"]);

      var className = [propsClassName || '', isLine ? _index.default['line'] : ''].join(' ');
      return _react.default.createElement(FormItem, _extends({}, reset, {
        className: className,
        label: this.renderLabel()
      }), render ? render(reset, this.decoratorNode, this.fileEle, form) : this.decoratorNode(this.fileEle({
        form: form
      })));
    }
  }]);

  return LayoutFormItem;
}(_FormItemComponent2.FormItemComponent);

exports.LayoutFormItem = LayoutFormItem;

var _default = (0, _FormItemComponent2.default)(LayoutFormItem, {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 18
  },
  labelStyle: {
    width: '75px'
  },
  Entry: _Entry.default
});

exports.default = _default;