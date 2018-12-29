"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseModal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _particulate = require("@particulate");

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var saveRef = _particulate.component.saveRef,
    clearAttr = _particulate.component.clearAttr,
    mergeObjectRef = _particulate.component.mergeObjectRef,
    factoryComponentsConfig = _particulate.component.factoryComponentsConfig;

var BaseModal =
/*#__PURE__*/
function (_Component) {
  _inherits(BaseModal, _Component);

  function BaseModal(props, context) {
    var _this;

    _classCallCheck(this, BaseModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseModal).call(this, props, context));

    _this.initial(props);

    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(BaseModal, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.initial(nextProps);
    }
  }, {
    key: "onOk",
    value: function onOk() {
      var onOk = this.props.onOk;
      if (onOk) onOk();
      this.onCancel();
    }
  }, {
    key: "onCancel",
    value: function onCancel() {
      this.setState({
        visible: false
      });
    }
  }, {
    key: "onShow",
    value: function onShow() {
      this.setState({
        visible: true
      });
    }
  }, {
    key: "getModal",
    value: function getModal(modal, mergeObj) {
      var _this2 = this;

      var getModal = this.props.getModal;
      getModal(mergeObjectRef(modal, _objectSpread({
        onShow: function onShow() {
          return _this2.onShow.apply(_this2, arguments);
        },
        onCancel: function onCancel() {
          return _this2.onCancel.apply(_this2, arguments);
        },
        onOk: function onOk() {
          return _this2.onOk.apply(_this2, arguments);
        }
      }, mergeObj)));
      this.modal = modal;
    }
  }, {
    key: "initial",
    value: function initial(props, clientArray) {
      this.childProps = BaseModal.initialMergeProps(props, clientArray);
    }
  }, {
    key: "renderModal",
    value: function renderModal(children) {
      var _this3 = this;

      var _this$props = this.props,
          modalOptions = _this$props.modalOptions,
          className = _this$props.className,
          modalProps = _this$props.modalProps;
      var visible = this.state.visible;

      var isLimitHeight = modalOptions.isLimitHeight,
          options = _objectWithoutProperties(modalOptions, ["isLimitHeight"]);

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
        style: {
          display: 'none'
        },
        ref: saveRef(this, 'container')
      }), _react.default.createElement(_antd.Modal, _extends({
        className: [isLimitHeight ? _index.default['modal-container'] : '', className].join(' '),
        visible: visible,
        ref: function ref(modal) {
          return _this3.getModal(modal);
        },
        onCancel: function onCancel() {
          return _this3.onCancel();
        },
        getContainer: function getContainer() {
          return _this3.container.ownerDocument.body;
        },
        onOk: function onOk() {
          return _this3.onOk();
        }
      }, options, modalProps), _react.default.cloneElement(children)));
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return BaseModal;
}(_react.Component);

exports.BaseModal = BaseModal;

_defineProperty(BaseModal, "initialMergeProps", function (props) {
  var clearArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return _objectSpread({}, clearAttr(_objectSpread({}, props), _toConsumableArray(clearArr).concat(['getModal', 'modalOptions', 'modalProps', 'className', 'Model', 'onOk'])));
});

var _default = function _default(Element, option) {
  return function (Model, options) {
    return factoryComponentsConfig(Element)(_objectSpread({
      Model: Model,
      className: '',
      modalOptions: _objectSpread({
        title: 'Title',
        width: 650,
        okText: '确定',
        isLimitHeight: true
      }, options),
      onOk: function onOk() {
        return null;
      },
      getModal: function getModal() {
        return {};
      }
    }, option));
  };
};

exports.default = _default;