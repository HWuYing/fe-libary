"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _baseUpload = _interopRequireDefault(require("./baseUpload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomerImageUpload =
/*#__PURE__*/
function (_BaseUpload) {
  _inherits(CustomerImageUpload, _BaseUpload);

  function CustomerImageUpload(props, context) {
    var _this;

    _classCallCheck(this, CustomerImageUpload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomerImageUpload).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (_ref) {
      var file = _ref.file;
      if (_typeof(file) === 'object' && _this.props.onChange) _this.props.onChange(_this.props.value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCancel", function () {
      return _this.setState({
        previewVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePreview", function (file) {
      var _this$props$onPreview = _this.props.onPreview,
          onPreview = _this$props$onPreview === void 0 ? function () {
        return true;
      } : _this$props$onPreview;

      _this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: onPreview(file)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (_ref2) {
      var fileList = _ref2.fileList;
      return _this.setState({
        fileList: fileList
      });
    });

    _this.state = _objectSpread({}, _this.state, {
      previewVisible: false,
      previewImage: ''
    });
    return _this;
  }

  _createClass(CustomerImageUpload, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.value !== this.props.value || nextState.previewVisible !== this.state.previewVisible;
    } // 覆盖默认onchange 一定不能删除

  }, {
    key: "render",
    value: function render() {
      var props = _objectSpread({
        accept: 'image/*',
        listType: 'picture-card',
        multiple: true,
        beforeUpload: this.beforeUpload,
        fileList: this.state.fileList,
        onPreview: this.handlePreview,
        onRemove: this.onRemove
      }, this.config, {
        onChange: this.onChange // 一定不能动

      });

      var _this$state = this.state,
          previewVisible = _this$state.previewVisible,
          previewImage = _this$state.previewImage,
          fileList = _this$state.fileList;
      var listType = props.listType,
          _props$btnText = props.btnText,
          btnText = _props$btnText === void 0 ? '上传' : _props$btnText;

      var uploadButton = _react.default.createElement("div", null, _react.default.createElement(_antd.Icon, {
        type: "plus"
      }), _react.default.createElement("div", {
        className: "ant-upload-text"
      }, btnText));

      if (listType === 'text' || listType === 'picture') {
        uploadButton = _react.default.createElement(_antd.Button, null, _react.default.createElement(_antd.Icon, {
          type: "upload"
        }), _react.default.createElement("span", null, btnText));
      }

      return _react.default.createElement("div", null, _react.default.createElement(_antd.Upload, props, fileList.length >= this.maxLength ? null : uploadButton), _react.default.createElement(_antd.Modal, {
        visible: previewVisible,
        footer: null,
        onCancel: this.handleCancel
      }, _react.default.createElement("img", {
        alt: "example",
        style: {
          width: '100%'
        },
        src: previewImage
      })));
    }
  }]);

  return CustomerImageUpload;
}(_baseUpload.default);

var _default = CustomerImageUpload;
exports.default = _default;