"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  download: true,
  history: true,
  fetch: true,
  loadMicro: true
};
Object.defineProperty(exports, "history", {
  enumerable: true,
  get: function get() {
    return _history.default;
  }
});
Object.defineProperty(exports, "fetch", {
  enumerable: true,
  get: function get() {
    return _fetch.default;
  }
});
Object.defineProperty(exports, "loadMicro", {
  enumerable: true,
  get: function get() {
    return _loadMicro.default;
  }
});
exports.download = void 0;

var _history = _interopRequireDefault(require("./history"));

var _fetch = _interopRequireWildcard(require("@fetch"));

var _loadMicro = _interopRequireDefault(require("./loadMicro"));

var _asyncModule = require("../tools/asyncModule");

Object.keys(_asyncModule).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _asyncModule[key];
    }
  });
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var download =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(href, filename) {
    var blob, a, url;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _fetch.fetchBlob.get(href, {
              crossDomain: false
            });

          case 2:
            blob = _context.sent;
            a = document.createElement('a');
            url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function download(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.download = download;