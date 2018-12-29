"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _container = _interopRequireWildcard(require("../../BaseModal/container"));

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var StandardModal =
/*#__PURE__*/
function (_BaseModal) {
  _inherits(StandardModal, _BaseModal);

  function StandardModal(props, context) {
    var _this;

    _classCallCheck(this, StandardModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StandardModal).call(this, props, context));
    _this.selectedRows = [];
    _this.selectedRowKeys = [];
    return _this;
  }

  _createClass(StandardModal, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.initial(nextProps);
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
      var resetState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (resetState && this.standard && this.standard.form) this.standard.form.resetFields();
      this.setState({
        visible: true
      });
    }
  }, {
    key: "onSelectionChange",
    value: function onSelectionChange(selectedRowKeys, selectedRows) {
      this.selectedRows = selectedRows;
      this.selectedRowKeys = selectedRowKeys;
    }
  }, {
    key: "onOk",
    value: function onOk() {
      var _this2 = this;

      var onOk = this.props.onOk;
      var promise = Promise.resolve();

      if (onOk) {
        var onOkPromise = onOk(this.selectedRowKeys, this.selectedRows);
        if (onOkPromise && onOkPromise.then) promise = onOkPromise;
        promise = Promise.resolve(onOkPromise);
      }

      promise.then(function (isCancel) {
        if (isCancel !== false) _this2.onCancel();
      });
    }
  }, {
    key: "getStandard",
    value: function getStandard(standard) {
      var getPage = this.props.getPage;
      this.standard = standard;
      getPage(standard);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          Model = _this$props.Model,
          isLimitHeight = _this$props.modalOptions.isLimitHeight;
      return this.renderModal(_react.default.createElement("div", {
        className: isLimitHeight ? _index.default['s-modal-body'] : ''
      }, _react.default.createElement(Model, _extends({}, this.childProps, {
        getPage: function getPage() {
          return _this3.getStandard.apply(_this3, arguments);
        },
        onSelectionChange: function onSelectionChange() {
          return _this3.onSelectionChange.apply(_this3, arguments);
        }
      }))));
    }
  }]);

  return StandardModal;
}(_container.BaseModal);

var _default = (0, _container.default)(StandardModal, {
  getPage: function getPage() {
    return null;
  },
  onSelectionChange: function onSelectionChange() {
    return null;
  }
});

exports.default = _default;