"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _particulate = require("@particulate");

var _Authorized = require("../Authorized");

var _FormItem = _interopRequireDefault(require("../particulate/Form/FormItem"));

var _Layout = _interopRequireDefault(require("../particulate/Layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var factoryComponentsConfig = _particulate.component.factoryComponentsConfig;

var CascaderFormItem =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CascaderFormItem, _PureComponent);

  // static propTypes = {
  //   optionConfig: PropTypes.object.isRequired,
  // };
  function CascaderFormItem(props, context) {
    var _this;

    _classCallCheck(this, CascaderFormItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CascaderFormItem).call(this, props, context));
    _this.renderConfig = {};

    _this.init(props);

    return _this;
  }

  _createClass(CascaderFormItem, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.init(nextProps);
    }
  }, {
    key: "init",
    value: function init(props) {
      var form = props.form,
          optionConfig = props.optionConfig,
          ownKey = props.ownKey,
          fieldsStore = props.fieldsStore;
      var fields = form.getFieldsValue();

      if (fieldsStore && fieldsStore[ownKey]) {
        this.renderConfig = optionConfig[fieldsStore[ownKey].toString()] || {};
      } else if (fields && fields[ownKey]) {
        this.renderConfig = optionConfig[fields[ownKey].toString()] || {};
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          form = _this$props.form,
          ownConfig = _this$props.ownConfig,
          _this$props$author = _this$props.author,
          author = _this$props$author === void 0 ? {} : _this$props$author,
          fieldsStore = _this$props.fieldsStore;
      var _this$renderConfig = this.renderConfig,
          config = _this$renderConfig.config,
          _this$renderConfig$co = _this$renderConfig.col,
          col = _this$renderConfig$co === void 0 ? 12 : _this$renderConfig$co,
          _this$renderConfig$di = _this$renderConfig.display,
          display = _this$renderConfig$di === void 0 ? 'block' : _this$renderConfig$di;
      if (!ownConfig) return (0, _FormItem.default)(_objectSpread({}, config, {
        form: form,
        isLine: true,
        fieldsStore: fieldsStore
      }));
      if (!config) return (0, _FormItem.default)({
        label: ownConfig.label,
        decorator: ownConfig,
        fieldsStore: fieldsStore,
        isLine: true,
        form: form
      });
      var decorator = config.decorator,
          colItem = config.col;

      if (display === 'inline') {
        return _react.default.createElement(Row, {
          gutter: 24
        }, _react.default.createElement(Col, {
          span: 24 - Number(col)
        }, (0, _FormItem.default)({
          label: ownConfig.label,
          decorator: ownConfig,
          isLine: true,
          fieldsStore: fieldsStore,
          form: form
        })), _react.default.createElement(Col, {
          span: col
        }, _react.default.createElement(_Layout.default, {
          col: colItem
        }, (0, _Authorized.authorizedFilter)(author, decorator, this.context).map(function (item, key) {
          return (0, _FormItem.default)({
            label: item.label,
            decorator: item,
            form: form,
            fieldsStore: fieldsStore,
            isLine: true,
            key: "".concat(key).concat(item.filedDecorator.key)
          });
        }))));
      } else {
        return _react.default.createElement(_react.Fragment, null, (0, _FormItem.default)({
          label: ownConfig.label,
          decorator: ownConfig,
          fieldsStore: fieldsStore,
          isLine: true,
          form: form
        }), _react.default.createElement(_Layout.default, {
          col: colItem
        }, (0, _Authorized.authorizedFilter)(author, decorator, this.context).map(function (item, key) {
          return (0, _FormItem.default)({
            label: item.label,
            decorator: item,
            form: form,
            fieldsStore: fieldsStore,
            isLine: true,
            key: "".concat(key).concat(item.filedDecorator.key)
          });
        })));
      }
    }
  }]);

  return CascaderFormItem;
}(_react.PureComponent);

_defineProperty(CascaderFormItem, "contextTypes", {
  author: _propTypes.default.object
});

var _default = factoryComponentsConfig(CascaderFormItem)();

exports.default = _default;