"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enumGlobalAction = void 0;

var _applyStore = require("@applyStore");

var _reduces = _interopRequireDefault(require("./reduces"));

var enumGlobalAction = _interopRequireWildcard(require("./action"));

exports.enumGlobalAction = enumGlobalAction;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _applyStore.reducer)('globalEnum', _reduces.default);