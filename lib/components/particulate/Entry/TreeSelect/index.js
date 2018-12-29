"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _tools = require("@tools");

var _decisionType = _interopRequireDefault(require("@tools/decisionType"));

var _particulate = require("@particulate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var clearAttr = _particulate.component.clearAttr;

var EntryTreeSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(EntryTreeSelect, _Component);

  function EntryTreeSelect(props, contenx) {
    var _this;

    _classCallCheck(this, EntryTreeSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EntryTreeSelect).call(this, props, contenx));

    _this.initial(props);

    return _this;
  }

  _createClass(EntryTreeSelect, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var children = this.props.children;

      if (nextProps.children !== children) {
        this.initial(nextProps);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      var onChange = this.props.onChange;
      if (onChange) onChange(value);
    }
  }, {
    key: "initial",
    value: function initial(props) {
      var childList = props.children,
          _props$titleName = props.titleName,
          titleName = _props$titleName === void 0 ? EntryTreeSelect.defaultTitleName : _props$titleName,
          _props$valueName = props.valueName,
          valueName = _props$valueName === void 0 ? EntryTreeSelect.defaultValueName : _props$valueName,
          _props$onlySelectLeaf = props.onlySelectLeaf,
          onlySelectLeaf = _props$onlySelectLeaf === void 0 ? false : _props$onlySelectLeaf,
          _props$rowKey = props.rowKey,
          rowKey = _props$rowKey === void 0 ? 'key' : _props$rowKey;
      var recursion = (0, _tools.factoryRecursion)(childList);
      this.mergeProps = Object.assign(clearAttr(_objectSpread({}, props), ['children', 'titleName', 'valueName', 'onlySelectLeaf', 'rowKey']), {
        treeData: recursion.each(function (data, pData, hash) {
          return Object.assign(data, {
            title: data[titleName],
            value: data[valueName],
            key: data[rowKey] ? data[rowKey] : hash,
            disabled: onlySelectLeaf && data.children && data.children.length > 0
          });
        })
      });
    }
  }, {
    key: "formatValue",
    value: function formatValue(value) {
      var _this$props = this.props,
          labelInValue = _this$props.labelInValue,
          _this$props$titleName = _this$props.titleName,
          titleName = _this$props$titleName === void 0 ? EntryTreeSelect.defaultTitleName : _this$props$titleName,
          _this$props$valueName = _this$props.valueName,
          valueName = _this$props$valueName === void 0 ? EntryTreeSelect.defaultValueName : _this$props$valueName;
      var propsValue = value;

      if (labelInValue && value) {
        if (Array.isArray(value)) {
          propsValue = value.map(function (item) {
            return _objectSpread({
              label: item[titleName],
              value: item[valueName]
            }, item);
          });
        } else {
          propsValue = _objectSpread({
            label: value[titleName],
            value: value[valueName]
          }, value);
        }
      }

      return (0, _decisionType.default)(propsValue) === 'number' ? propsValue.toString() : propsValue;
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.props.value;
      return _react.default.createElement(_antd.TreeSelect, _extends({}, this.mergeProps, {
        value: this.formatValue(value)
      }));
    }
  }]);

  return EntryTreeSelect;
}(_react.Component);

_defineProperty(EntryTreeSelect, "defaultValue", undefined);

_defineProperty(EntryTreeSelect, "defaultTitleName", 'label');

_defineProperty(EntryTreeSelect, "defaultValueName", 'value');

var _default = EntryTreeSelect;
exports.default = _default;