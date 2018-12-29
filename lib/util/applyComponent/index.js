"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  registryApplyComponent: true
};
exports.default = _default;
Object.defineProperty(exports, "registryApplyComponent", {
  enumerable: true,
  get: function get() {
    return _cache.registryApplyComponent;
  }
});

var _applyStore = _interopRequireDefault(require("@applyStore"));

var _cache = require("./core/cache");

var cacheUtil = _interopRequireWildcard(require("./core"));

var _middleware = require("./middleware");

var _pages = require("./core/pages");

Object.keys(_pages).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pages[key];
    }
  });
});

var _components = require("./components");

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cacheUtil.applyMiddleware(_middleware.asyncLoader, _middleware.beforeFetch);

function _default(context, propsStore) {
  return new Promise(function (resolve, reject) {
    try {
      cacheUtil.execute(context, resolve, propsStore || _applyStore.default);
    } catch (e) {
      reject(e);
    }
  });
}