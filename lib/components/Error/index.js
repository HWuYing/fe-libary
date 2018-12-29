"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _antd = require("antd");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var hasOwnProperty = function hasOwnProperty(o, n) {
  return Object.prototype.hasOwnProperty.call(o, n);
};

var prefix = 'error';
var codeMessageFn = mergeMessageFn({
  110101: '用户名不存在',
  110102: '用户名或密码错误',
  110103: '用户登录已过期',
  110104: '用户操作已被禁止',
  110105: '参数错误',
  110106: '数据签名校验失败',
  110201: '数据不存在或无法访问',
  110202: '数据验证错误',
  110203: '数据操作错误',
  999999: '服务器繁忙"',
  // 二期错误码
  100301: '参数强验证失败',
  100302: '依赖信息检查失败',
  100303: '目标对象不存在或者已经被删除',
  100304: '目标状态错误',
  100305: '错误的返回结果',
  100306: '数据已存在',
  100401: '用户名或者密码错误',
  100402: '获取用户会话数据失败',
  100501: '缺少操作所需的权限',
  100502: '被禁止的访问',
  100601: '用户操作失败',
  100111: '链接超时'
});

function getMessageMap(messageConfig) {
  return Object.keys(messageConfig).reduce(function (o, key) {
    return Object.assign(o, _defineProperty({}, "".concat(prefix).concat(key), function _(info) {
      _antd.message.error(info || messageConfig[key]);

      return messageConfig[key];
    }));
  }, {});
}

function mergeMessageFn(messageConfig) {
  var messageFns = getMessageMap(messageConfig);
  return function (key, reject, info) {
    var prefixKey = "".concat(prefix).concat(key);

    if (hasOwnProperty(messageFns, prefixKey)) {
      var messageInfo = messageFns[prefixKey](info);
      if (reject) reject(messageInfo);
      return false;
    }

    return true;
  };
}

var Error =
/*#__PURE__*/
function (_Component) {
  _inherits(Error, _Component);

  function Error(props, context) {
    var _this;

    _classCallCheck(this, Error);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Error).call(this, props, context));
    _this.mapEvent = {};
    return _this;
  }

  _createClass(Error, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.mapEvent['ERROR-INTERCEPT'] = this.$eventbus.$on('ERROR-INTERCEPT', function () {
        return _this2.errorIntercept.apply(_this2, arguments);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      Object.keys(this.mapEvent).forEach(function (key) {
        _this3.mapEvent[key]();

        delete _this3.mapEvent[key];
      });
    }
  }, {
    key: "errorIntercept",
    value: function errorIntercept(response, resolve, reject) {
      var resultCode = response.resultCode,
          resultMsg = response.resultMsg;
      var history = this.props.history;

      if (resultCode === 100402 || resultCode === 110103) {
        codeMessageFn('100402');
        return history.push('/login');
      }

      if (resultCode === 999999) {
        _antd.notification.error({
          message: "\u670D\u52A1\u7AEF\u9519\u8BEF,\u8BF7\u5237\u65B0\u9875\u9762",
          description: resultMsg
        });
      }

      if (codeMessageFn(resultCode.toString(), reject, resultMsg) && (resultCode === 200 || resultCode >= 504)) {
        return resolve(response);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Error;
}(_react.Component);

var _default = Error;
exports.default = _default;