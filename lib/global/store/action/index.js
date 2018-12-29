"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGoodsBrandList = exports.getGoodsCategoryTree = exports.getGoodsCategoryThree = exports.getConfigRegion = exports.GET_GOODS_BRAND_LIST = exports.GET_GOODS_CATEGORY_TREE_LIST = exports.GET_GOODS_CATEGORY_THREE_LIST = exports.GET_CONFIG_REGION = void 0;

var service = _interopRequireWildcard(require("../service"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var namespace = 'libGlobal';
var GET_CONFIG_REGION = "".concat(namespace, "-GET_CONFIG_REGION");
exports.GET_CONFIG_REGION = GET_CONFIG_REGION;
var GET_GOODS_CATEGORY_THREE_LIST = "".concat(namespace, "GET_GOODS_CATEGORY_THREE_LIST");
exports.GET_GOODS_CATEGORY_THREE_LIST = GET_GOODS_CATEGORY_THREE_LIST;
var GET_GOODS_CATEGORY_TREE_LIST = "".concat(namespace, "GET_GOODS_CATEGORY_TREE_LIST");
exports.GET_GOODS_CATEGORY_TREE_LIST = GET_GOODS_CATEGORY_TREE_LIST;
var GET_GOODS_BRAND_LIST = "".concat(namespace, "GET_GOODS_BRAND_LIST");
exports.GET_GOODS_BRAND_LIST = GET_GOODS_BRAND_LIST;

var getConfigRegion = function getConfigRegion(body, context) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch) {
        var _ref2, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return service.getConfigRegion(_objectSpread({
                  parentId: ''
                }, body), context);

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;
                dispatch({
                  type: GET_CONFIG_REGION,
                  data: data
                });

              case 5:
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

exports.getConfigRegion = getConfigRegion;

var getGoodsCategoryThree = function getGoodsCategoryThree(body, context) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch) {
        var _ref4, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return service.getGoodsCategoryThree(body, context);

              case 2:
                _ref4 = _context2.sent;
                data = _ref4.data;
                dispatch({
                  type: GET_GOODS_CATEGORY_THREE_LIST,
                  data: data
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.getGoodsCategoryThree = getGoodsCategoryThree;

var getGoodsCategoryTree = function getGoodsCategoryTree(body, context) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch) {
        var _ref6, data;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return service.getGoodsCategoryTree(body, context);

              case 2:
                _ref6 = _context3.sent;
                data = _ref6.data;
                dispatch({
                  type: GET_GOODS_CATEGORY_TREE_LIST,
                  data: data
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.getGoodsCategoryTree = getGoodsCategoryTree;

var getGoodsBrandList = function getGoodsBrandList(body, context) {
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(dispatch) {
        var _ref8, data;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return service.getGoodsBrandList(body, context);

              case 2:
                _ref8 = _context4.sent;
                data = _ref8.data;
                dispatch({
                  type: GET_GOODS_BRAND_LIST,
                  data: data
                });

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.getGoodsBrandList = getGoodsBrandList;