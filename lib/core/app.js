"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factory = void 0;

var factory = function factory(fn) {
  return function (req, res, next) {
    next({
      $promise: fn(req, res)
    });
  };
};

exports.factory = factory;