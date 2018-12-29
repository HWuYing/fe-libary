"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registryEntry = registryEntry;
Object.defineProperty(exports, "ConnectEntry", {
  enumerable: true,
  get: function get() {
    return _ConnectEntry.default;
  }
});
Object.defineProperty(exports, "ConnectToEntry", {
  enumerable: true,
  get: function get() {
    return _ConnectToEntry.default;
  }
});
exports.default = void 0;

var _particulate = require("@particulate");

var _basics = require("./basics");

var _decisionType = _interopRequireDefault(require("@tools/decisionType"));

var _ConnectEntry = _interopRequireDefault(require("./ConnectEntry"));

var _ConnectToEntry = _interopRequireDefault(require("./ConnectToEntry"));

var _MoreEntry = _interopRequireDefault(require("./MoreEntry"));

var _EditableComponent = _interopRequireDefault(require("./EditableComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var batchEntryMap = _particulate.factory.batchEntryMap;

var mapEntry = _objectSpread({}, _basics.mapEntry, batchEntryMap({
  moreEntry: _MoreEntry.default,
  editableComponent: _EditableComponent.default
}));

function factoryEntry(key, option) {
  if (!(0, _particulate.hasOwnProperty)(mapEntry, key)) {
    throw new Error("".concat(key, " entry is not defined"));
  }

  return mapEntry[key](option);
}

function registryEntry(key, entry) {
  if ((0, _decisionType.default)(key) === 'object') {
    Object.keys(key).map(function (keyClone, item) {
      return registryEntry(keyClone, key[keyClone]);
    });
  } else if (typeof entry !== 'undefined') {
    if ((0, _particulate.hasOwnProperty)(mapEntry, key)) throw new Error("".concat(key, " entry existence"));
    Object.assign(mapEntry, _defineProperty({}, key, entry));
  } else throw new Error('parameter is incorrect');
}

var _default = factoryEntry;
exports.default = _default;