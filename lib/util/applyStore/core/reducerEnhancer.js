"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _tools = require("@tools");

var _reactRouterRedux = require("react-router-redux");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducers = {
  routerReducer: _reactRouterRedux.routerReducer
};

function reducerEnhancer(name, asyncReducers) {
  if (name && asyncReducers && !(0, _tools.hasOwnProperty)(reducers, name)) {
    Object.assign(reducers, _defineProperty({}, name, asyncReducers));
  }

  return (0, _redux.combineReducers)(reducers);
}

var _default = function _default(store) {
  return function (name, asyncReducers) {
    return store.replaceReducer(reducerEnhancer(name, asyncReducers));
  };
};

exports.default = _default;