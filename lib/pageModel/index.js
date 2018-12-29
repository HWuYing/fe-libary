"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Page", {
  enumerable: true,
  get: function get() {
    return _container.default;
  }
});
Object.defineProperty(exports, "StandardPage", {
  enumerable: true,
  get: function get() {
    return _container2.default;
  }
});
Object.defineProperty(exports, "StandardNoFromPage", {
  enumerable: true,
  get: function get() {
    return _container3.default;
  }
});
Object.defineProperty(exports, "StandardNoTablePage", {
  enumerable: true,
  get: function get() {
    return _container4.default;
  }
});
Object.defineProperty(exports, "BasicPage", {
  enumerable: true,
  get: function get() {
    return _BasicPage.default;
  }
});

var _container = _interopRequireDefault(require("./Page/container"));

var _container2 = _interopRequireDefault(require("./StandardPage/container"));

var _container3 = _interopRequireDefault(require("./StandardNoFromPage/container"));

var _container4 = _interopRequireDefault(require("./StandardNoTablePage/container"));

var _BasicPage = _interopRequireDefault(require("./BasicPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }