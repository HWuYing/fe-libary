"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Interface;

var _formatOptions = _interopRequireDefault(require("@fetch/core/formatOptions"));

var _config = require("@common/config");

var _decisionType = _interopRequireDefault(require("../tools/decisionType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Interface(fetch, options, context, isNotError) {
  var res = context.res,
      _context$req = context.req,
      contentHeaders = _context$req.headers,
      _context$req$session = _context$req.session,
      session = _context$req$session === void 0 ? {} : _context$req$session;
  var _options$headers = options.headers,
      headers = _options$headers === void 0 ? {} : _options$headers;
  return fetch((0, _formatOptions.default)(_objectSpread({}, options, {
    headers: _objectSpread({
      cookie: contentHeaders.cookie,
      platform: contentHeaders.platform || _config.SYSTEM,
      token: contentHeaders.token || session.token
    }, headers)
  }))).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        fn = _ref2[0];

    return fn();
  }).then(function (result) {
    if ((0, _decisionType.default)(result) === 'string') return result;
    var resultCode = result.resultCode;
    if (resultCode === 100402 || resultCode === 110103) return res.redirect('/login');
    if (resultCode !== 200) throw new Error(resultCode);
    return result;
  }).catch(function (e) {
    if (!isNotError) res.json(e);
    throw e;
  });
}