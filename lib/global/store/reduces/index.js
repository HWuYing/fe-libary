"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.handlers = void 0;

var _applyStore = require("@applyStore");

var action = _interopRequireWildcard(require("../action"));

var _handlers;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  regionTree: [],
  goodsCategoryThree: [],
  goodsCategoryTree: [],
  goodsBrandList: []
};
exports.initialState = initialState;
var handlers = (_handlers = {}, _defineProperty(_handlers, action.GET_CONFIG_REGION, function (state, _ref) {
  var data = _ref.data;
  return _objectSpread({}, state, {
    regionTree: data
  });
}), _defineProperty(_handlers, action.GET_GOODS_CATEGORY_THREE_LIST, function (state, _ref2) {
  var data = _ref2.data;
  return _objectSpread({}, state, {
    goodsCategoryThree: data
  });
}), _defineProperty(_handlers, action.GET_GOODS_CATEGORY_TREE_LIST, function (state, _ref3) {
  var data = _ref3.data;
  return _objectSpread({}, state, {
    goodsCategoryTree: data
  });
}), _defineProperty(_handlers, action.GET_GOODS_BRAND_LIST, function (state, _ref4) {
  var data = _ref4.data;
  return _objectSpread({}, state, {
    goodsBrandList: data
  });
}), _handlers);
exports.handlers = handlers;