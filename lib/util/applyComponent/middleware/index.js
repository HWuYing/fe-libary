"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "beforeFetch", {
  enumerable: true,
  get: function get() {
    return _beforeFetch.default;
  }
});
Object.defineProperty(exports, "asyncLoader", {
  enumerable: true,
  get: function get() {
    return _asyncLoader.default;
  }
});

var _beforeFetch = _interopRequireDefault(require("./beforeFetch"));

var _asyncLoader = _interopRequireDefault(require("./asyncLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }