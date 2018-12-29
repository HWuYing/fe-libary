"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGoodsBrandList = exports.getGoodsCategoryTree = exports.getGoodsCategoryThree = exports.getConfigRegion = void 0;

var _util = require("@util");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var post = _util.fetch.post,
    get = _util.fetch.get;

function dictUrl(type) {
  return "/global/decoration/c/api/dict/1/list/".concat(type);
}

function factoryDictService(type) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(body, context) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", get(dictUrl(type), {
                  body: body,
                  context: context
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

var getConfigRegion =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(body, context) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _util.fetch.get('/global/config/s/api/region/1/childListTree', {
              body: body,
              context: context
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getConfigRegion(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // 商品品类列表(第三级)


exports.getConfigRegion = getConfigRegion;

var getGoodsCategoryThree =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(body, context) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _util.fetch.get('/global/good/w/api/category/1/queryThreeList', {
              body: body,
              context: context
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getGoodsCategoryThree(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // 商品品类列表(树)


exports.getGoodsCategoryThree = getGoodsCategoryThree;

var getGoodsCategoryTree =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(body, context) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _util.fetch.get('/global/good/w/api/category/1/queryList', {
              body: body,
              context: context
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getGoodsCategoryTree(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // 商品品牌


exports.getGoodsCategoryTree = getGoodsCategoryTree;

var getGoodsBrandList =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(body, context) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", _util.fetch.get('/global/good/w/api/brand/1/queryList', {
              body: body,
              context: context
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getGoodsBrandList(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getGoodsBrandList = getGoodsBrandList;