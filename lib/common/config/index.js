"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  A_MAP_KEY: true
};
exports.A_MAP_KEY = void 0;

var _system = require("./system");

Object.keys(_system).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _system[key];
    }
  });
});
var A_MAP_KEY = '61f9edcffdcf3df2fa5b3f4e70629215';
exports.A_MAP_KEY = A_MAP_KEY;