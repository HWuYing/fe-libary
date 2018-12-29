"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _tools = require("../util/tools");

var _formatOptions = _interopRequireDefault(require("../util/fetch/core/formatOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var time = 50000;

var InterfaceServer =
/*#__PURE__*/
function () {
  function InterfaceServer(host, platform, req, res) {
    var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

    _classCallCheck(this, InterfaceServer);

    var _options$headers = options.headers,
        headers = _options$headers === void 0 ? {} : _options$headers;
    this.headers = headers;
    this.context = {
      req: req,
      res: res
    };
    this.url = '/';
    this.host = host;
    this.platform = platform;
  }

  _createClass(InterfaceServer, [{
    key: "setHeader",
    value: function setHeader(key, value) {
      var _this = this;

      var typeMode = (0, _tools.typeMold)(key);

      if (typeMode('object')) {
        Object.keys(key).forEach(function (iKey) {
          _this.setHeader(iKey, key[iKey]);
        });
      } else if (typeMode('string')) {
        this.headers[key] = value;
      }

      return this;
    }
  }, {
    key: "fetch",
    value: function () {
      var _fetch2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(method, url, body) {
        var host, req, _formOptions, formatUrl, headers, options, _ref, token, platform, _ref2, sessionToken, result, api, json;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                host = this.host, req = this.context.req;
                _formOptions = (0, _formatOptions.default)({
                  host: host,
                  url: url,
                  body: body,
                  method: method
                }), formatUrl = _formOptions.url, headers = _formOptions.headers, options = _objectWithoutProperties(_formOptions, ["url", "headers"]);
                _ref = req.headers || {}, token = _ref.token, platform = _ref.platform;
                _ref2 = req.session || {}, sessionToken = _ref2.token;
                console.log("".concat(formatUrl), body);
                _context.next = 7;
                return (0, _nodeFetch.default)(formatUrl, _objectSpread({
                  method: method
                }, options, {
                  headers: _objectSpread({}, !token && !sessionToken ? {} : {
                    token: token || sessionToken
                  }, {
                    token: token || sessionToken,
                    platform: platform || this.platform
                  }, headers, this.headers)
                }));

              case 7:
                result = _context.sent;
                api = result.url;
                _context.next = 11;
                return result.json();

              case 11:
                json = _context.sent;
                if (result.status >= 200 && result.status < 300) api = formatUrl;
                return _context.abrupt("return", Object.assign(json, {
                  api: api
                }));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetch(_x, _x2, _x3) {
        return _fetch2.apply(this, arguments);
      }

      return fetch;
    }()
  }]);

  return InterfaceServer;
}();

_defineProperty(InterfaceServer, "timeout", function (context, InterfaceFetch) {
  return function () {
    for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arg[_key2] = arguments[_key2];
    }

    var status = false;
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (!status && (status = true)) {
          resolve({
            resultCode: 100111,
            resultMsg: '链接超时'
          });
        }
      }, time);
      InterfaceFetch.apply(void 0, arg).then(function (result) {
        if (!status && (status = true)) resolve(result);
      }).catch(function (e) {
        /* eslint-disable no-console */
        console.log(e);
        if (!status && (status = true)) reject(e);
      });
    });
  };
});

['GET', 'POST', 'DELETE', 'PUT'].forEach(function (method) {
  InterfaceServer.prototype[method.toLocaleLowerCase()] =
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var context,
        interfaceFetch,
        _len,
        arg,
        _key,
        _args2 = arguments;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            context = this.context;
            interfaceFetch = InterfaceServer.timeout(context, this.fetch.bind(this));

            for (_len = _args2.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
              arg[_key] = _args2[_key];
            }

            return _context2.abrupt("return", interfaceFetch.apply(void 0, [method.toUpperCase()].concat(arg)));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
});

var createAPIServer = function createAPIServer(host, platform) {
  return function (req, res, options) {
    return new InterfaceServer(host, platform, req, res, options);
  };
};

var _default = createAPIServer;
exports.default = _default;