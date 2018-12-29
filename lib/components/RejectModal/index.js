"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("@components");

var _modalModel = require("@modalModel");

var _particulate = require("@particulate");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var createForm = _components.particulate.createForm;
var saveRef = _particulate.component.saveRef;
var Modal = (0, _modalModel.createFormModal)(createForm(function () {
  return [{
    label: '拒绝理由',
    entry: {
      key: 'textArea',
      rows: 4
    },
    filedDecorator: {
      key: 'refusal',
      rules: [{
        required: true,
        message: '拒绝理由必须填写'
      }]
    }
  }];
}, undefined, {
  layout: 'inline',
  layoutCol: 1,
  labelStyle: {
    width: '70px'
  }
}), {
  title: '拒绝'
});

var RejectModal =
/*#__PURE__*/
function (_Component) {
  _inherits(RejectModal, _Component);

  function RejectModal() {
    _classCallCheck(this, RejectModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(RejectModal).apply(this, arguments));
  }

  _createClass(RejectModal, [{
    key: "onShowModal",
    value: function onShowModal() {
      this.modal.onShow();
    }
  }, {
    key: "onConfirm",
    value: function onConfirm(fields) {
      var _this$props = this.props,
          onConfirm = _this$props.onConfirm,
          _this$props$refusalKe = _this$props.refusalKey,
          refusalKey = _this$props$refusalKe === void 0 ? 'refusal' : _this$props$refusalKe;
      if (onConfirm) onConfirm(_defineProperty({}, refusalKey, fields.refusal));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          author = _this$props2.author,
          refusalKey = _this$props2.refusalKey,
          onConfirm = _this$props2.onConfirm,
          reset = _objectWithoutProperties(_this$props2, ["children", "author", "refusalKey", "onConfirm"]);

      var props = children.props;
      return _react.default.createElement(_react.Fragment, null, _react.default.cloneElement(children, _objectSpread({}, props, {
        author: author,
        onClick: function onClick() {
          return _this.onShowModal();
        }
      })), _react.default.createElement(Modal, _extends({
        getModal: saveRef(this, 'modal'),
        onOk: function onOk() {
          return _this.onConfirm.apply(_this, arguments);
        }
      }, reset)));
    }
  }]);

  return RejectModal;
}(_react.Component);

var _default = RejectModal;
exports.default = _default;