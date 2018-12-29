"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _applyStore = require("@applyStore");

var _action = require("../action");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {};

var handlers = _defineProperty({}, _action.SET_DATASOURCE, function (state, _ref) {
  var _ref$payload = _ref.payload,
      data = _ref$payload.data,
      storeKey = _ref$payload.storeKey;
  return _objectSpread({}, state, _defineProperty({}, storeKey, data));
});

var _default = (0, _applyStore.initReducers)(handlers, initialState);

exports.default = _default;