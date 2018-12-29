"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = type;
exports.typeMold = typeMold;
exports.isPromise = isPromise;
exports.default = exports.isObject = exports.isString = exports.isFunction = exports.isArray = void 0;

function decision(o) {
  return Object.prototype.toString.call(o).replace(/^\[object ([^\]]*)\]$/, '$1').toLocaleLowerCase();
}

function type(mold) {
  return function (o) {
    return decision(o) === mold;
  };
}

function typeMold(o) {
  var mode = decision(o);
  return function (mold) {
    return mold === mode;
  };
}

function isPromise(o) {
  var promiseType = decision(o);
  if (promiseType === 'promise') return true;
  if (promiseType === 'function' && decision(o.then) === 'function') return true;
  return false;
}

var isArray = type('array');
exports.isArray = isArray;
var isFunction = type('function');
exports.isFunction = isFunction;
var isString = type('string');
exports.isString = isString;
var isObject = type('object');
exports.isObject = isObject;
var _default = decision;
exports.default = _default;