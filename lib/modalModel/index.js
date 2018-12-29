"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createFormModal", {
  enumerable: true,
  get: function get() {
    return _container.default;
  }
});
Object.defineProperty(exports, "createStandardModal", {
  enumerable: true,
  get: function get() {
    return _container2.default;
  }
});
Object.defineProperty(exports, "createBasicModal", {
  enumerable: true,
  get: function get() {
    return _container3.default;
  }
});

var _container = _interopRequireDefault(require("./FormModal/container"));

var _container2 = _interopRequireDefault(require("./StandardModal/container"));

var _container3 = _interopRequireDefault(require("./BasicModal/container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }