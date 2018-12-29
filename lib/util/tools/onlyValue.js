"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hash = void 0;

var hash = function hash() {
  var count = -1;
  return function () {
    count += 1;
    return count;
  };
};

exports.hash = hash;