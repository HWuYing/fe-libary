"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _particulate = require("@particulate");

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CheckableTag = _antd.Tag.CheckableTag;

var CheckableTagGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(CheckableTagGroup, _Component);

  function CheckableTagGroup(props, contenx) {
    var _this;

    _classCallCheck(this, CheckableTagGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckableTagGroup).call(this, props, contenx));
    _this.state = {
      checkedRowKeys: []
    };

    _this.initial(props);

    return _this;
  }

  _createClass(CheckableTagGroup, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props = this.props,
          children = _this$props.children,
          value = _this$props.value;

      if (nextProps.children !== children || nextProps.value !== value) {
        this.initial(nextProps);
      }
    }
  }, {
    key: "factoryOnTagChange",
    value: function factoryOnTagChange(source, index) {
      var _this2 = this;

      var _this$props2 = this.props,
          labelInValue = _this$props2.labelInValue,
          _this$props2$onChange = _this$props2.onChange,
          onChange = _this$props2$onChange === void 0 ? function () {
        return null;
      } : _this$props2$onChange,
          _this$props2$valueNam = _this$props2.valueName,
          valueName = _this$props2$valueNam === void 0 ? 'value' : _this$props2$valueNam;
      var childList = this.childList;
      return function (e) {
        var checkedRowKeys = _this2.state.checkedRowKeys;
        var cursor = checkedRowKeys.indexOf(index);
        var value = [];
        if (e && cursor === -1) checkedRowKeys.push(index);
        if (!e && cursor !== -1) checkedRowKeys.splice(cursor, 1);
        checkedRowKeys.map(function (i) {
          return value.push(childList[i]);
        });
        if (!labelInValue) value = value.map(function (item) {
          return item[valueName];
        });

        _this2.setState({
          checkedRowKeys: _toConsumableArray(checkedRowKeys)
        }, function () {
          return onChange(value);
        });
      };
    }
  }, {
    key: "initial",
    value: function initial(props) {
      var _props$labelName = props.labelName,
          labelName = _props$labelName === void 0 ? 'label' : _props$labelName,
          _props$valueName = props.valueName,
          valueName = _props$valueName === void 0 ? 'value' : _props$valueName,
          _props$value = props.value,
          propsValue = _props$value === void 0 ? [] : _props$value;
      var childList = props.children;
      var value = Array.isArray(propsValue) ? propsValue : [propsValue];
      var valueClone = value.map(function (item) {
        if ((0, _particulate.type)(item) === 'Object') return item[valueName].toString();
        return item.toString();
      });
      var checkedRowKeys = [];

      if ((0, _particulate.type)(childList) === 'Object') {
        childList = Object.keys(childList).map(function (key) {
          return _objectSpread({
            key: key
          }, childList[key]);
        });
      }

      this.childList = childList.map(function (item, index) {
        var v = item[valueName];
        if (v && valueClone.includes(v.toString())) checkedRowKeys.push(index);
        return _objectSpread({
          label: item[labelName],
          value: v
        }, item);
      });
      this.state.checkedRowKeys = checkedRowKeys;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var checkedRowKeys = this.state.checkedRowKeys;
      return _react.default.createElement("div", {
        className: _index.default['checkable-tag']
      }, this.childList.map(function (item, index) {
        return _react.default.createElement(CheckableTag, {
          key: "entry-checkable-tag".concat(index),
          onChange: _this3.factoryOnTagChange(item, index),
          checked: checkedRowKeys.includes(index)
        }, item.label);
      }));
    }
  }]);

  return CheckableTagGroup;
}(_react.Component);

var _default = CheckableTagGroup;
exports.default = _default;