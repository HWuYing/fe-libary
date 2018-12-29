"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrAsyncModule = registrAsyncModule;
exports.getAsyncModule = getAsyncModule;

var _decisionType = require("../tools/decisionType");

var _decisionObject = require("../tools/decisionObject");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var moduleMap = {};

function factoryImportLoader(importLoader) {
  var loadModule = undefined;
  return function () {
    if (loadModule) return Promise.resolve(loadModule);
    return importLoader().then(function (m) {
      loadModule = m;
      return m;
    }).catch(function (e) {
      console.log(e);
    });
  };
}

function registrAsyncModule(key, importLoader) {
  var keyType = (0, _decisionType.typeMold)(key);

  if (keyType('object')) {
    return Object.keys(key).forEach(function (kk) {
      return registry(kk, key[kk]);
    });
  }

  if (!asyncLoad) {
    throw new Error('importLoad is not defined');
  }

  if ((0, _decisionObject.hasOwnProperty)(moduleMap, key)) {
    throw new Error("".concat(key, "  registry"));
  }

  Object.assign(moduleMap, _defineProperty({}, key, factoryImportLoader(importLoader)));
}

function getAsyncModule(_x) {
  return _getAsyncModule.apply(this, arguments);
}

function _getAsyncModule() {
  _getAsyncModule = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(key) {
    var asyncModule;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            asyncModule = moduleMap[key]();
            return _context.abrupt("return", asyncModule);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getAsyncModule.apply(this, arguments);
}