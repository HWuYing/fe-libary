"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataSource = void 0;

var _util = require("@util");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var post = _util.fetch.post;

var getDataSource =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(body, httpOptions) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", post('/globalEnum/source', {
              httpOptions: httpOptions,
              body: body
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getDataSource(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getDataSource = getDataSource;