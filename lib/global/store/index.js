"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.libAction = exports.default = void 0;

var _applyStore = require("@applyStore");

var libAction = _interopRequireWildcard(require("./action"));

exports.libAction = libAction;

var libReduces = _interopRequireWildcard(require("./reduces"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(reducers, action) {
  (0, _applyStore.reducer)('global', (0, _applyStore.initReducers)(_objectSpread({}, libReduces.handlers, reducers.handlers), _objectSpread({}, libReduces.initialState, reducers.initialState)));
  return _objectSpread({}, action, libAction);
};

exports.default = _default;