"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _FormItemComponent2 = require("../../Form/FormItemComponent");

var _Authorized = require("../../../Authorized");

var _Layout = _interopRequireDefault(require("../../Layout"));

var _basics = _interopRequireDefault(require("../basics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var initialDecorator = _FormItemComponent2.FormItemComponent.initialDecorator,
    initialEntry = _FormItemComponent2.FormItemComponent.initialEntry;
var FormItem = _antd.Form.Item;

var MoreEntry =
/*#__PURE__*/
function (_FormItemComponent) {
  _inherits(MoreEntry, _FormItemComponent);

  function MoreEntry(props, context) {
    var _this;

    _classCallCheck(this, MoreEntry);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MoreEntry).call(this, props, context));
    _this.state = {
      value: {}
    };
    _this.childrenEntry = [];

    _this.initial(props);

    return _this;
  }

  _createClass(MoreEntry, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.initial(nextProps);
    }
  }, {
    key: "onChange",
    value: function onChange(fields) {
      var onChange = this.props.onChange;
      if (onChange) onChange(fields);
    }
  }, {
    key: "factoryFileOnChange",
    value: function factoryFileOnChange(index, key) {
      var _this2 = this;

      return function (value) {
        var form = _this2.props.form;
        var changeValue = value && value.target ? value.target.value : value;
        var stateValue = _this2.state.value;

        var mergeValue = _objectSpread({}, stateValue, _defineProperty({}, key || index, changeValue));

        if (key) form.setFieldsValue(_defineProperty({}, key, changeValue));

        _this2.setState({
          value: mergeValue
        }, function () {
          return _this2.onChange(mergeValue);
        });
      };
    }
  }, {
    key: "initial",
    value: function initial(props) {
      var _this3 = this;

      var _props$childrenEntry = props.childrenEntry,
          children = _props$childrenEntry === void 0 ? [] : _props$childrenEntry,
          form = props.form,
          _props$fieldsStore = props.fieldsStore,
          fieldsStore = _props$fieldsStore === void 0 ? {} : _props$fieldsStore;
      this.childrenEntry = (0, _Authorized.authorizedFilter)({}, children).map(function (_ref, index) {
        var entry = _ref.entry,
            filedDecorator = _ref.filedDecorator,
            layoutSpan = _ref.layoutSpan,
            render = _ref.render;
        var decoratorNode = initialDecorator(filedDecorator, fieldsStore, form);
        var fileEle = initialEntry(_basics.default, entry);
        var key = "more-".concat(index);
        return _react.default.createElement(FormItem, {
          style: {
            width: '100%'
          },
          layoutSpan: layoutSpan,
          key: key
        }, render ? render(entry, decoratorNode, fileEle, form) : decoratorNode(fileEle({
          form: form,
          key: key,
          onChange: _this3.factoryFileOnChange(index, (filedDecorator || {}).key)
        })));
      });
      this.state.value = fieldsStore;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$col = this.props.col,
          col = _this$props$col === void 0 ? 1 : _this$props$col;
      return _react.default.createElement(_Layout.default, {
        col: col,
        style: {
          height: '40px'
        }
      }, this.childrenEntry);
    }
  }]);

  return MoreEntry;
}(_FormItemComponent2.FormItemComponent);

var _default = MoreEntry;
exports.default = _default;