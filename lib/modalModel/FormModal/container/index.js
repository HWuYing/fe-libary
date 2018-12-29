"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _container = _interopRequireWildcard(require("../../BaseModal/container"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FormModal =
/*#__PURE__*/
function (_BaseModal) {
  _inherits(FormModal, _BaseModal);

  function FormModal() {
    _classCallCheck(this, FormModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormModal).apply(this, arguments));
  }

  _createClass(FormModal, [{
    key: "onShow",
    value: function onShow(resetForm) {
      if (this.form && resetForm) this.form.resetFields();

      _get(_getPrototypeOf(FormModal.prototype), "onShow", this).call(this);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(fields) {
      var _this = this;

      var onOk = this.props.onOk;
      var promise = Promise.resolve();

      if (onOk) {
        if (onOk.then) promise = onOk(fields);else promise = promise.then(function () {
          return onOk(fields);
        });
      }

      promise.then(function () {
        _this.onCancel();
      });
    }
  }, {
    key: "onOk",
    value: function onOk() {
      if (this.form) this.form.onSubmit();
    }
  }, {
    key: "getForm",
    value: function getForm(form) {
      var getForm = this.props.getForm;
      if (getForm) getForm(form);
      this.form = form;
    }
  }, {
    key: "initial",
    value: function initial(props) {
      _get(_getPrototypeOf(FormModal.prototype), "initial", this).call(this, props, ['onSubmit']);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Model = _this$props.Model,
          children = _this$props.children;
      return this.renderModal(_react.default.createElement(_react.Fragment, null, _react.default.createElement(Model, _extends({}, this.childProps, {
        onSubmit: function onSubmit() {
          return _this2.onSubmit.apply(_this2, arguments);
        },
        getForm: function getForm(form) {
          return _this2.getForm(form);
        }
      })), children));
    }
  }]);

  return FormModal;
}(_container.BaseModal);

var _default = (0, _container.default)(FormModal, {
  onSubmit: function onSubmit() {
    return null;
  }
});

exports.default = _default;