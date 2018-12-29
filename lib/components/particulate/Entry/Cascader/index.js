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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var clearAttr = _particulate.component.clearAttr;

var EntryCascader =
/*#__PURE__*/
function (_Component) {
  _inherits(EntryCascader, _Component);

  function EntryCascader(props, contenx) {
    var _this;

    _classCallCheck(this, EntryCascader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EntryCascader).call(this, props, contenx));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (value, selectedOptions) {
      var labelInValue = _this.props.labelInValue;

      if (labelInValue) {
        value = selectedOptions;
      } else value = value.toString();

      if (_this.props.onChange) _this.props.onChange(value, selectedOptions);
      if (labelInValue && _this.props.onLeafChange) _this.props.onLeafChange(value[value.length - 1]);
    });

    _this.initial(props);

    return _this;
  }

  _createClass(EntryCascader, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var children = this.props.children;

      if (nextProps.children !== children) {
        this.initial(nextProps);
      }
    }
  }, {
    key: "initial",
    value: function initial(props) {
      var childList = props.children,
          _props$titleName = props.titleName,
          titleName = _props$titleName === void 0 ? 'title' : _props$titleName,
          _props$valueName = props.valueName,
          valueName = _props$valueName === void 0 ? 'value' : _props$valueName;
      var recursion = (0, _tools.factoryRecursion)(childList);
      this.mergeProps = Object.assign(clearAttr(_objectSpread({}, props), ['children', 'titleName', 'valueName', 'labelInValue']), {
        options: recursion.each(function (data, pData, hash) {
          return Object.assign(data, {
            label: data[titleName],
            value: data[valueName] && data[valueName].toString(),
            key: data.key ? data.key : hash
          });
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          labelInValue = _this$props.labelInValue,
          valueName = _this$props.valueName;
      var value = this.props.value;

      if (value) {
        if (labelInValue) {
          value = value.map(function (item) {
            return item[valueName].toString();
          });
        } else value = value.split(',');
      }

      return _react.default.createElement(_antd.Cascader, _extends({
        placeholder: "\u8BF7\u9009\u62E9"
      }, this.mergeProps, {
        value: (0, _decisionType.default)(value) === 'number' ? value.toString() : value,
        onChange: this.onChange
      }));
    }
  }]);

  return EntryCascader;
}(_react.Component);

_defineProperty(EntryCascader, "defaultValue", undefined);

var _default = EntryCascader;
exports.default = _default;