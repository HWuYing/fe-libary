"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.execute = execute;
exports.executeMiddleware = executeMiddleware;
exports.applyMiddleware = applyMiddleware;

var _cache = require("./cache");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var middleware;

function executeMiddleware(list, resolve) {
  var len = list.length;
  var count = 0;
  if (len === 0) return resolve([]);

  var promiseMiddleware = function promiseMiddleware() {
    return function () {
      return function () {
        count += 1;
        if (count >= len) resolve(list);
      };
    };
  };

  var chain = _toConsumableArray(middleware).concat([promiseMiddleware]);

  list.forEach(function (store) {
    compose.apply(void 0, [function (next) {
      return next();
    }].concat(_toConsumableArray(chain.map(function (m) {
      return m(store);
    }))))(list);
  });
}

function execute(context, resolve, store) {
  var list = (0, _cache.getComponent)(context, store);
  executeMiddleware(list, resolve);
}

function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) return function (args) {
    return args;
  };
  if (funcs.length === 1) return funcs[0];
  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

function applyMiddleware() {
  for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    funcs[_key2] = arguments[_key2];
  }

  middleware = funcs;
}