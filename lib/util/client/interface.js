"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Interface;

var _antd = require("antd");

var _formatOptions = _interopRequireDefault(require("@fetch/core/formatOptions"));

var _mixin = require("@mixin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var $eventbus = (0, _mixin.getEventBus)();
var codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

function checkStatus(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      res = _ref2[0],
      response = _ref2[1];

  if (response.status >= 200 && response.status < 300) {
    return [res, response];
  }

  var errortext = codeMessage[response.status] || response.statusText;

  _antd.notification.error({
    message: "\u8BF7\u6C42\u9519\u8BEF ".concat(response.status, ": ").concat(response.url),
    description: errortext
  });

  var error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

function Interface(fetch, options, context, isNotError, crossDomain) {
  $eventbus.$emit('LOADING-OPEN');
  var headers = options.headers;
  var token = window.getToken && window.getToken();
  return fetch(_objectSpread({}, crossDomain ? {
    credentials: 'include',
    mode: "cors"
  } : {}, (0, _formatOptions.default)(_objectSpread({}, options, {
    headers: _objectSpread({
      platform: window.PLATFORM || ''
    }, token ? {
      token: token
    } : {}, headers)
  })))).then(checkStatus).then(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        fn = _ref4[0];

    return fn();
  }).then(function (result) {
    $eventbus.$emit('LOADING-CLOSE');

    if (!isNotError) {
      var eventEmitter = $eventbus.get('ERROR-INTERCEPT');
      if (eventEmitter && eventEmitter.length) return new Promise(function (resolve, reject) {
        $eventbus.$emit('ERROR-INTERCEPT', result, resolve, reject);
      });
    }

    return result;
  }).catch(function (e) {
    $eventbus.$emit('LOADING-CLOSE');
    throw e;
  });
}

;