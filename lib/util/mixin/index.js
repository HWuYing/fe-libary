"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
Object.defineProperty(exports, "getEventBus", {
  enumerable: true,
  get: function get() {
    return _eventbus.getEventBus;
  }
});
Object.defineProperty(exports, "getUtil", {
  enumerable: true,
  get: function get() {
    return _util.getUtil;
  }
});

var _eventbus = _interopRequireWildcard(require("./eventbus"));

var _util = _interopRequireWildcard(require("./util"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _default(Component) {
  (0, _eventbus.default)(Component);
  (0, _util.default)(Component);
}