"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factoryInterfaceRequest = factoryInterfaceRequest;
exports.fetchBlob = exports.fetchText = exports.default = void 0;

var _interface = _interopRequireDefault(require("@util/interface"));

var nodeFetch = _interopRequireWildcard(require("node-fetch"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetch = typeof window !== 'undefined' ? self.fetch : nodeFetch;
var methods = ['POST', 'GET', 'DELETE', 'PUT'];

function applyFetch(_x) {
  return _applyFetch.apply(this, arguments);
}

function _applyFetch() {
  _applyFetch = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(options) {
    var mergeOptions, res;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            mergeOptions = _objectSpread({}, options);
            _context9.next = 3;
            return fetch(mergeOptions.url, _objectSpread({
              method: options.method
            }, mergeOptions, {
              url: undefined
            }));

          case 3:
            res = _context9.sent;
            return _context9.abrupt("return", res);

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));
  return _applyFetch.apply(this, arguments);
}

function applyFetchText() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(options) {
        var res, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return applyFetch(options);

              case 2:
                res = _context2.sent;

                result =
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return res.text();

                          case 2:
                            return _context.abrupt("return", _context.sent);

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function result() {
                    return _ref2.apply(this, arguments);
                  };
                }();

                return _context2.abrupt("return", [result, res]);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function applyFetchJson() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(options) {
        var res, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return applyFetch(options);

              case 2:
                res = _context4.sent;

                result =
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee3() {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return res.json();

                          case 2:
                            return _context3.abrupt("return", _context3.sent);

                          case 3:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function result() {
                    return _ref4.apply(this, arguments);
                  };
                }();

                return _context4.abrupt("return", [result, res]);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}

function applyFetchBlob() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(options) {
        var res, result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return applyFetch(options);

              case 2:
                res = _context6.sent;

                result =
                /*#__PURE__*/
                function () {
                  var _ref6 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee5() {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return res.blob();

                          case 2:
                            return _context5.abrupt("return", _context5.sent);

                          case 3:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this);
                  }));

                  return function result() {
                    return _ref6.apply(this, arguments);
                  };
                }();

                return _context6.abrupt("return", [result, res]);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
}

var FetchType = {
  text: applyFetchText,
  json: applyFetchJson,
  blob: applyFetchBlob
};

function Interface(_x5, _x6, _x7, _x8, _x9, _x10, _x11, _x12, _x13) {
  return _Interface.apply(this, arguments);
}

function _Interface() {
  _Interface = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10(host, url, method, body, headers, context, isNotError, crossDomain, resultType) {
    var res, applyFetchFn;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            applyFetchFn = FetchType[resultType];
            _context10.prev = 1;
            _context10.next = 4;
            return (0, _interface.default)(applyFetchFn(), {
              host: host,
              url: url,
              method: method,
              body: body,
              headers: headers
            }, context, isNotError, crossDomain);

          case 4:
            res = _context10.sent;
            _context10.next = 11;
            break;

          case 7:
            _context10.prev = 7;
            _context10.t0 = _context10["catch"](1);
            console.log(_context10.t0);
            throw _context10.t0;

          case 11:
            return _context10.abrupt("return", res);

          case 12:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this, [[1, 7]]);
  }));
  return _Interface.apply(this, arguments);
}

var InterfaceList = methods.reduce(function (m, method) {
  return Object.assign(m, _defineProperty({}, method.toLocaleLowerCase(), function () {
    var _ref7 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee7(host, url, body, headers, context, isNotError, crossDomain, resultType) {
      var res;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return Interface(host, url, method, body, headers, context, isNotError, crossDomain, resultType);

            case 2:
              res = _context7.sent;
              return _context7.abrupt("return", res);

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    return function (_x14, _x15, _x16, _x17, _x18, _x19, _x20, _x21) {
      return _ref7.apply(this, arguments);
    };
  }()));
}, {});

function factoryInterfaceRequest() {
  var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  var resultType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
  var defaultIsNotError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var defaultCrossDomain = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return Object.keys(InterfaceList).reduce(function (m, method) {
    return Object.assign(m, _defineProperty({}, method, function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(url, _ref8) {
        var body, context, _ref8$isNotError, isNotError, _ref8$crossDomain, crossDomain, _ref8$headers, headers, res;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                body = _ref8.body, context = _ref8.context, _ref8$isNotError = _ref8.isNotError, isNotError = _ref8$isNotError === void 0 ? defaultIsNotError : _ref8$isNotError, _ref8$crossDomain = _ref8.crossDomain, crossDomain = _ref8$crossDomain === void 0 ? defaultCrossDomain : _ref8$crossDomain, _ref8$headers = _ref8.headers, headers = _ref8$headers === void 0 ? {} : _ref8$headers;
                res = InterfaceList[method](host, url, body, headers, context, isNotError, crossDomain, resultType);
                return _context8.abrupt("return", res);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x22, _x23) {
        return _ref9.apply(this, arguments);
      };
    }()));
  }, {});
}

var fetchText = factoryInterfaceRequest(undefined, 'text', true);
exports.fetchText = fetchText;
var fetchBlob = factoryInterfaceRequest(undefined, 'blob', true);
exports.fetchBlob = fetchBlob;

var _default = factoryInterfaceRequest();

exports.default = _default;