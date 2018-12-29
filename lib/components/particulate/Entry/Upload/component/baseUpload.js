"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _asyncModule = require("@asyncModule");

var _antd = require("antd");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable */
(0, _asyncModule.registryAsyncModule)('OSS', function () {
  return import('ali-oss');
});

var getFilePath = function getFilePath() {
  return (0, _moment.default)(new Date()).format('YYYYMM');
};

var BaseUpload =
/*#__PURE__*/
function (_Component) {
  _inherits(BaseUpload, _Component);

  function BaseUpload(props, contenxt) {
    var _this;

    _classCallCheck(this, BaseUpload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseUpload).call(this, props, contenxt));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onRemove", function (file) {
      var fileList = _this.state.fileList;
      var newFileList = fileList.filter(function (item) {
        return item.url !== file.url;
      });

      _this.setState({
        fileList: newFileList
      });

      _this.onFileChange(newFileList);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFileChange", function (fileList) {
      var result = (fileList || []).map(function (v) {
        return v.url;
      });
      if (_this.props.onChange) _this.props.onChange(result.toString());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "produceUrlData", function (value) {
      var data = value ? Array.isArray(value) ? value : value.split(',') : [];
      return data.map(function (v, i) {
        return {
          uid: "".concat(new Date().toUTCString()).concat(i),
          name: 'xxx.png',
          status: 'done',
          url: v
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "beforeUpload", function (file) {
      var imageObj = {
        uid: new Date().toUTCString(),
        name: file.name,
        status: 'done',
        url: ''
      };
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = function () {
        UploadToOss(_assertThisInitialized(_assertThisInitialized(_this)), getFilePath(), file).then(function (data) {
          var _data$res$requestUrls = data.res.requestUrls,
              requestUrls = _data$res$requestUrls === void 0 ? [] : _data$res$requestUrls;
          var fileList = _this.state.fileList;

          if (requestUrls[0]) {
            imageObj.url = requestUrls[0].split('?')[0];

            var newFileList = _toConsumableArray(fileList).concat([imageObj]);

            _this.setState({
              fileList: newFileList
            });

            _this.onFileChange(newFileList);
          } else _antd.message.error('上传附近失败！');
        });
      };

      return false;
    });

    _this.maxLength = props.maxLength || 3;
    _this.state = {
      fileList: _this.produceUrlData(props.value) || []
    };

    _this.init(props);

    return _this;
  }

  _createClass(BaseUpload, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      this.init(arguments.length <= 0 ? undefined : arguments[0]);
    }
  }, {
    key: "init",
    value: function init(props) {
      var _this2 = this;

      this.config = _objectSpread({}, props || {});
      if (!props.value) this.state.fileList = [];
      if (props.value && typeof props.value === 'string' || Array.isArray(props.value)) this.state.fileList = this.produceUrlData(props.value) || [];
      ['maxLength'].forEach(function (item) {
        return delete _this2.config[item];
      });
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return BaseUpload;
}(_react.Component);

exports.default = BaseUpload;

var client = function client() {
  return (0, _asyncModule.getAsyncModule)('OSS').then(function (m) {
    var oss = m.default;
    return new oss({
      endpoint: 'http://oss-cn-shenzhen.aliyuncs.com',
      // region: 'oss-cn-shenzhen',
      accessKeyId: 'LTAIun4CB14qXhBq',
      accessKeySecret: 'WLOLkI30qq822ZdNAimMDQv3sHMUdj',
      bucket: 'testwqmallimage'
    });
  });
};

var uploadPath = function uploadPath(path, file) {
  return "".concat(path, "/").concat(file.name.split('.')[0], "-").concat(file.uid, ".").concat(file.type.split('/')[1]);
};

var UploadToOss = function UploadToOss(self, path, file) {
  var url = uploadPath(path, file);
  return client(self).then(function (oss) {
    return oss.multipartUpload(url, file, {
      meta: {
        year: 2018,
        people: 'test'
      }
    });
  });
};