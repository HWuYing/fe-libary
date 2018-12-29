"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _moment = _interopRequireDefault(require("moment"));

var _particulate = require("@particulate");

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var DateRange =
/*#__PURE__*/
function (_Component) {
  _inherits(DateRange, _Component);

  function DateRange(props, context) {
    var _this;

    _classCallCheck(this, DateRange);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateRange).call(this, props, context));
    _this.state = {
      value: {}
    };

    _this.initial(props);

    return _this;
  }

  _createClass(DateRange, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var value = this.props.value;
      if (nextProps.value !== value) this.initial(nextProps);
    }
  }, {
    key: "onChange",
    value: function onChange(fields, changeValue) {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          format = _this$props.format;
      var currentValue = this.mergeValues(fields, changeValue);
      var start = currentValue.start,
          end = currentValue.end;
      this.setState({
        value: currentValue
      });
      if (onChange) onChange({
        start: start ? start.format(format) : start,
        end: end ? end.format(format) : end
      });
    }
  }, {
    key: "initial",
    value: function initial(props) {
      var _ref = props.value || [],
          start = _ref.start,
          end = _ref.end;

      this.state.value = {
        start: start ? (0, _moment.default)(start) : start,
        end: end ? (0, _moment.default)(end) : end
      };
    }
  }, {
    key: "mergeValues",
    value: function mergeValues(fields, changeValue) {
      var value = this.state.value;
      return _objectSpread({}, value, _defineProperty({}, fields, changeValue));
    }
  }, {
    key: "disabledDate",
    value: function disabledDate(fields) {
      var _this2 = this;

      return function (changeValue) {
        var _this2$mergeValues = _this2.mergeValues(fields, changeValue),
            start = _this2$mergeValues.start,
            end = _this2$mergeValues.end;

        if (!start || !end) return false;
        return DateRange.validateMap[fields](start, end);
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          propsValue = _this$props2.value,
          reset = _objectWithoutProperties(_this$props2, ["value"]);

      var _this$state$value = this.state.value,
          start = _this$state$value.start,
          end = _this$state$value.end;
      var _this$props3 = this.props,
          _this$props3$disabled = _this$props3.disabledEndDate,
          disabledEndDate = _this$props3$disabled === void 0 ? function () {
        return false;
      } : _this$props3$disabled,
          _this$props3$disabled2 = _this$props3.disabledStartDate,
          disabledStartDate = _this$props3$disabled2 === void 0 ? function () {
        return false;
      } : _this$props3$disabled2;
      var disabledStart = this.disabledDate('start');
      var disabledEnd = this.disabledDate('end');
      return _react.default.createElement("div", {
        className: _index.default['entry-data-range']
      }, _react.default.createElement(_antd.DatePicker, _extends({
        value: start
      }, reset, {
        onChange: function onChange() {
          for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
          }

          return _this3.onChange.apply(_this3, ['start'].concat(arg));
        },
        disabledDate: function disabledDate() {
          return disabledStartDate.apply(void 0, arguments) || disabledStart.apply(void 0, arguments);
        }
      })), _react.default.createElement("a", {
        className: _index.default['range-word']
      }, "\u81F3"), _react.default.createElement(_antd.DatePicker, _extends({
        value: end
      }, reset, {
        disabledDate: function disabledDate() {
          return disabledEndDate.apply(void 0, arguments) || disabledEnd.apply(void 0, arguments);
        },
        onChange: function onChange() {
          for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            arg[_key2] = arguments[_key2];
          }

          return _this3.onChange.apply(_this3, ['end'].concat(arg));
        }
      })));
    }
  }]);

  return DateRange;
}(_react.Component);

_defineProperty(DateRange, "disabledEndDate", function (start, end) {
  return start.valueOf() > end.valueOf();
});

_defineProperty(DateRange, "disabledStartDate", function (start, end) {
  return start.valueOf() >= end.valueOf();
});

_defineProperty(DateRange, "validateMap", {
  start: DateRange.disabledStartDate,
  end: DateRange.disabledEndDate
});

var _default = DateRange;
exports.default = _default;