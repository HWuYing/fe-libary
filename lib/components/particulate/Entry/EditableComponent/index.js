"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _particulate = require("@particulate");

var _basics = _interopRequireDefault(require("../basics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var saveRef = _particulate.component.saveRef,
    clearAttr = _particulate.component.clearAttr;

var EntryEditableComponent =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(EntryEditableComponent, _PureComponent);

  function EntryEditableComponent(props, contenx) {
    var _this;

    _classCallCheck(this, EntryEditableComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EntryEditableComponent).call(this, props, contenx));
    _this.config = {};
    _this.state = {
      isOpenEdit: false,
      tempValue: undefined
    };
    _this.componentValueContainer = [];

    _this.initial(props);

    return _this;
  }

  _createClass(EntryEditableComponent, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.initial(nextProps);
    }
  }, {
    key: "initial",
    value: function initial(props) {
      this.config = Object.assign(clearAttr(_objectSpread({}, props), ['editComponentKey', 'componentStyle', 'displayTextFn']));
    }
  }, {
    key: "onComponentChange",
    value: function onComponentChange() {
      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      var e = arg[0];
      var value = e.target ? e.target.value : e;
      this.componentValueContainer = e.target ? [e.target.value] : arg;
      this.setState({
        tempValue: value
      });
    }
  }, {
    key: "saveChange",
    value: function saveChange() {
      if (this.props.onChange) {
        var _this$props;

        (_this$props = this.props).onChange.apply(_this$props, _toConsumableArray(this.componentValueContainer));
      }

      this.cancleChange();
    }
  }, {
    key: "cancleChange",
    value: function cancleChange() {
      this.setState({
        isOpenEdit: false,
        tempValue: undefined
      });
    }
  }, {
    key: "openEditor",
    value: function openEditor() {
      this.setState({
        isOpenEdit: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isOpenEdit = _this$state.isOpenEdit,
          tempValue = _this$state.tempValue; // editComponentKey 组件 componentStyle 组建样式 displayTextFn 显示特殊字段

      var _this$props2 = this.props,
          _this$props2$target = _this$props2.target,
          target = _this$props2$target === void 0 ? 'a' : _this$props2$target,
          value = _this$props2.value,
          style = _this$props2.style,
          editComponentKey = _this$props2.editComponentKey,
          componentStyle = _this$props2.componentStyle,
          displayTextFn = _this$props2.displayTextFn;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
        style: {
          display: "".concat(!isOpenEdit ? 'none' : 'block')
        }
      }, (0, _basics.default)(editComponentKey, _objectSpread({}, this.config, {
        style: _objectSpread({
          width: 'calc(100% - 110px)',
          marginRight: '20px'
        }, componentStyle || {}),
        value: tempValue || value,
        onChange: function onChange() {
          return _this2.onComponentChange.apply(_this2, arguments);
        }
      }))(), _react.default.createElement(_antd.Button, {
        size: "small",
        type: "primary",
        icon: "check",
        onClick: function onClick() {
          return _this2.saveChange();
        }
      }), _react.default.createElement(_antd.Divider, {
        type: "vertical"
      }), _react.default.createElement(_antd.Button, {
        size: "small",
        icon: "close",
        onClick: function onClick() {
          return _this2.cancleChange();
        }
      })), _react.default.createElement("span", {
        style: {
          display: "".concat(isOpenEdit ? 'none' : 'block')
        }
      }, _react.default.createElement(target, {
        children: displayTextFn ? displayTextFn(value) : value,
        style: _objectSpread({
          color: '#333',
          marginRight: '20px'
        }, style)
      }), _react.default.createElement(_antd.Button, {
        size: "small",
        type: "primary",
        icon: "edit",
        onClick: function onClick() {
          return _this2.openEditor();
        }
      })));
    }
  }]);

  return EntryEditableComponent;
}(_react.PureComponent);

var _default = EntryEditableComponent;
exports.default = _default;