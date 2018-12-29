"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSourceList = exports.SET_DATASOURCE = void 0;

var _service = require("../service");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var SET_DATASOURCE = 'SET_DATASOURCE';
exports.SET_DATASOURCE = SET_DATASOURCE;

var getSourceList = function getSourceList(param, httpOptions) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch) {
        var res, data, storeKey;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _service.getDataSource)(param, httpOptions);

              case 2:
                res = _context.sent;
                data = res.data;
                storeKey = param.storeKey;
                dispatch({
                  type: SET_DATASOURCE,
                  payload: {
                    data: data,
                    storeKey: storeKey
                  }
                });
                return _context.abrupt("return", data);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

exports.getSourceList = getSourceList;