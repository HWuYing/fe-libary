"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

// // 文档 https://help.aliyun.com/document_detail/64041.html?spm=a2c4g.11186623.6.772.c6CRGD
// // https://blog.csdn.net/hesonggg/article/details/78862641
// const co = require('co');
var OSS = require('ali-oss'); // const DRIVER_LICENSE_PATH = 'http://oss-cn-shenzhen.aliyuncs.com';


var DRIVER_LICENSE_PATH = 'test';

var WQUpload =
/*#__PURE__*/
function (_Component) {
  _inherits(WQUpload, _Component);

  function WQUpload() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WQUpload);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WQUpload)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      previewVisible: false,
      previewImage: '',
      fileList: [// {
        //   uid: -1,
        //   name: 'xxx.png',
        //   status: 'done',
        //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        // },
      ]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCancel", function () {
      return _this.setState({
        previewVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePreview", function (file) {
      _this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (_ref) {
      var fileList = _ref.fileList;
      return _this.setState({
        fileList: fileList
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "beforeUpload", function (file) {
      var imageObj = {
        uid: file.uid,
        name: file.name,
        status: 'done',
        url: ''
      };
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = function () {
        UploadToOss(_assertThisInitialized(_assertThisInitialized(_this)), DRIVER_LICENSE_PATH, file).then(function (data) {
          var _data$res$requestUrls = data.res.requestUrls,
              requestUrls = _data$res$requestUrls === void 0 ? [] : _data$res$requestUrls;
          var fileList = _this.state.fileList;
          var imageUrl = requestUrls[0];
          imageObj.url = imageUrl;
          fileList.push(imageObj);

          _this.setState({
            fileList: fileList
          });
        });
      };

      return false;
    });

    return _this;
  }

  _createClass(WQUpload, [{
    key: "render",
    value: function render() {
      var props = {
        accept: 'image/*',
        listType: 'picture-card',
        multiple: false,
        // onRemove: file => {
        //   this.setState(({ imageList }) => {
        //     const index = imageList.indexOf(file);
        //     const newFileList = imageList.slice();
        //     newFileList.splice(index, 1);
        //     return { imageList: newFileList };
        //   });
        // },
        beforeUpload: this.beforeUpload,
        fileList: this.state.fileList,
        onPreview: this.handlePreview
      };
      var _this$state = this.state,
          previewVisible = _this$state.previewVisible,
          previewImage = _this$state.previewImage,
          fileList = _this$state.fileList;

      var uploadButton = _react.default.createElement("div", null, _react.default.createElement(_antd.Icon, {
        type: "plus"
      }), _react.default.createElement("div", {
        className: "ant-upload-text"
      }, "Upload"));

      return _react.default.createElement("div", null, _react.default.createElement(_antd.Upload, props, fileList.length >= 5 ? null : uploadButton), _react.default.createElement(_antd.Modal, {
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

  return WQUpload;
}(_react.Component);

exports.default = WQUpload;

var client = function client() {
  return new OSS.Wrapper({
    endpoint: 'http://oss-cn-shenzhen.aliyuncs.com',
    // region: 'oss-cn-shenzhen',
    accessKeyId: 'LTAIun4CB14qXhBq',
    accessKeySecret: 'WLOLkI30qq822ZdNAimMDQv3sHMUdj',
    bucket: 'testwqmallimage'
  });
};

var uploadPath = function uploadPath(path, file) {
  return "".concat(path, "/").concat(file.name.split('.')[0], "-").concat(file.uid, ".").concat(file.type.split('/')[1]);
};

var UploadToOss = function UploadToOss(self, path, file) {
  var url = uploadPath(path, file);
  return new Promise(function (resolve, reject) {
    client(self).multipartUpload(url, file, {
      // progress: function*(p) {
      //   console.log(`Progress:${p}`);
      // },
      meta: {
        year: 2018,
        people: 'test'
      }
    }).then(function (data) {
      resolve(data);
    }).catch(function (error) {
      reject(error);
    });
  });
};