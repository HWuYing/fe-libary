"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factory = exports.component = exports.typeToLabel = exports.type = exports.hasOwnProperty = void 0;

var component = _interopRequireWildcard(require("./component"));

exports.component = component;

var factory = _interopRequireWildcard(require("./factory"));

exports.factory = factory;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var hasOwnProperty = function hasOwnProperty(o, name) {
  return Object.prototype.hasOwnProperty.call(o, name);
};

exports.hasOwnProperty = hasOwnProperty;

var type = function type(o) {
  return Object.prototype.toString.call(o).replace(/\[object ([a-z|A-Z]*)\]/gi, '$1');
};

exports.type = type;

var typeToLabel = function typeToLabel(status, enumType) {
  var value = status;
  if (!value) return '--';
  var key = Object.keys(enumType).find(function (kk) {
    return value.toString() === enumType[kk].value.toString();
  });
  if (!key || !enumType[key]) return '--';
  return enumType[key].label;
};

exports.typeToLabel = typeToLabel;