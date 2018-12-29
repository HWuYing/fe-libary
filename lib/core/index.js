"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  global: true,
  createAPIServer: true
};
Object.defineProperty(exports, "global", {
  enumerable: true,
  get: function get() {
    return _glob.default;
  }
});
Object.defineProperty(exports, "createAPIServer", {
  enumerable: true,
  get: function get() {
    return _interface.createAPIServer;
  }
});

var _glob = _interopRequireDefault(require("./glob.router"));

var _interface = require("./interface");

var _app = require("./app");

Object.keys(_app).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _app[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }