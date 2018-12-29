"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeListen = executeListen;
exports.default = exports.historyListen = void 0;

var _history = require("history");

var listenCatch = [];
var targetHistory = (0, _history.createBrowserHistory)();
var historyListen = targetHistory.listen;
exports.historyListen = historyListen;

function listen(fn) {
  listenCatch.push(fn);
  return function () {
    return listenCatch.splice(listenCatch.indexOf(fn), 1);
  };
}

function executeListen() {
  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  listenCatch.forEach(function (fn) {
    return fn.apply(void 0, arg);
  });
}

targetHistory.listen = listen;
var _default = targetHistory;
exports.default = _default;