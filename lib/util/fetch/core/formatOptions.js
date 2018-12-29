"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _querystring = require("querystring");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var hostRex = new RegExp('[\\/]*$', 'ig');
var urlRex = new RegExp('^[\\/]*', 'ig');
var formatNotJSON = ['GET', 'DELETE'];

function formatUrl(_ref) {
  var host = _ref.host,
      url = _ref.url,
      body = _ref.body,
      method = _ref.method;
  var rexHost = host.replace(hostRex, '');
  var rexUrl = url.replace(urlRex, '');
  var mergeUrl = /^http|https/.test(rexUrl) ? rexUrl : "".concat(rexHost, "/").concat(rexUrl);
  var query;

  if (formatNotJSON.includes(method.toUpperCase())) {
    query = (0, _querystring.stringify)(body || {});
  }

  return "".concat(mergeUrl).concat(query ? "?".concat(query) : '');
}

function formatBody(_ref2) {
  var body = _ref2.body,
      method = _ref2.method;
  var param;

  if (body && !formatNotJSON.includes(method.toUpperCase())) {
    param = JSON.stringify(body);
  }

  return param;
}

function clientBodyUndefined(options) {
  var body = options.body;
  return Object.assign(options, {
    body: Object.keys(body || {}).reduce(function (o, key) {
      var object = body[key];
      if (object !== undefined && object !== null) o[key] = body[key];
      return o;
    }, {})
  });
}

function _default(options) {
  var body = formatBody(clientBodyUndefined(options));
  return _objectSpread({
    method: options.method,
    url: formatUrl(options),
    headers: _objectSpread({
      'Content-Type': 'application/json'
    }, options.headers)
  }, body ? {
    body: body
  } : {});
}