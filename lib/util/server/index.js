"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  fetch: true,
  loadMicro: true
};
Object.defineProperty(exports, "loadMicro", {
  enumerable: true,
  get: function get() {
    return _loadMicro.default;
  }
});
exports.fetch = void 0;

var _fetch = require("@fetch");

var _config = require("@common/config");

var _loadMicro = _interopRequireDefault(require("./loadMicro"));

var _asyncModule = require("../tools/asyncModule");

Object.keys(_asyncModule).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _asyncModule[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetch = (0, _fetch.factoryInterfaceRequest)("http://127.0.0.1:".concat(_config.SERVER_PORT));
exports.fetch = fetch;