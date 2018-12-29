"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _particulate = require("../particulate");

var _particulate2 = require("@particulate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var saveRef = _particulate2.component.saveRef;
var ModalSize = {
  sm: 450,
  ml: 600,
  l: 800,
  xl: 1000
};

var ModalModifyForm =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ModalModifyForm, _PureComponent);

  function ModalModifyForm(props, context) {
    var _this;

    _classCallCheck(this, ModalModifyForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalModifyForm).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOk", function (e) {
      e.preventDefault();

      var self = _assertThisInitialized(_assertThisInitialized(_this));

      _this.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          var dataSource = self.props.dataSource;
          self.props.onSubmit(_objectSpread({}, dataSource, values));
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCancel", function () {
      _this.props.onClose();
    });

    _this.formCreate = (0, _particulate.createForm)(props.formConfig);
    return _this;
  }

  _createClass(ModalModifyForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var dataSource = nextProps.dataSource;
      if (dataSource && this.form) this.form.setFormFieldsValue(dataSource);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          visible = _this$props.visible,
          dataSource = _this$props.dataSource,
          title = _this$props.title,
          rootContext = _this$props.rootContext,
          _this$props$displaySi = _this$props.displaySize,
          displaySize = _this$props$displaySi === void 0 ? 'l' : _this$props$displaySi;
      var Form = this.formCreate;
      return _react.default.createElement(_antd.Modal, {
        destroyOnClose: true,
        visible: visible,
        title: title,
        width: ModalSize[displaySize],
        onOk: this.handleOk,
        onCancel: this.handleCancel,
        footer: [_react.default.createElement(_antd.Button, {
          key: "back",
          onClick: this.handleCancel
        }, "\u53D6\u6D88"), _react.default.createElement(_antd.Button, {
          key: "submit",
          type: "primary",
          onClick: this.handleOk
        }, "\u786E\u5B9A")]
      }, _react.default.createElement(Form, {
        layout: "inline",
        getForm: saveRef(this, 'form'),
        fieldsStore: dataSource || {},
        rootContext: rootContext
      }));
    }
  }]);

  return ModalModifyForm;
}(_react.PureComponent);

exports.default = ModalModifyForm;
ModalModifyForm.propTypes = {
  visible: _propTypes.default.bool.isRequired,
  title: _propTypes.default.string.isRequired,
  formConfig: _propTypes.default.func.isRequired,
  onSubmit: _propTypes.default.func.isRequired,
  onClose: _propTypes.default.func.isRequired
};