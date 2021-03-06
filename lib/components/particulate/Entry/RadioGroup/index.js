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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RadioGroup = _antd.Radio.Group;

var EntryRadioGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(EntryRadioGroup, _Component);

  function EntryRadioGroup(props, contenx) {
    var _this;

    _classCallCheck(this, EntryRadioGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EntryRadioGroup).call(this, props, contenx));

    _this.initial(props);

    return _this;
  }

  _createClass(EntryRadioGroup, [{
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
      var childList = props.children;
      var _props$labelName = props.labelName,
          labelName = _props$labelName === void 0 ? 'label' : _props$labelName,
          _props$valueName = props.valueName,
          valueName = _props$valueName === void 0 ? 'value' : _props$valueName;

      if ((0, _particulate.type)(childList) === 'Object') {
        childList = Object.keys(childList).map(function (key) {
          return _objectSpread({
            key: key
          }, childList[key]);
        });
      }

      this.childList = childList.map(function (item) {
        return Object.assign(item, {
          label: item[labelName],
          value: item[valueName]
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(RadioGroup, _extends({}, this.props, {
        value: (this.props.value || '').toString()
      }), this.childList.map(function (item) {
        return _react.default.createElement(_antd.Radio, {
          value: item.value.toString(),
          key: (item.key || item.value).toString()
        }, item.label);
      }));
    }
  }]);

  return EntryRadioGroup;
}(_react.Component);

_defineProperty(EntryRadioGroup, "defaultValue", undefined);

var _default = EntryRadioGroup;
exports.default = _default;