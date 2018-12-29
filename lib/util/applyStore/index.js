"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ApplyProvider", {
  enumerable: true,
  get: function get() {
    return _ApplyProvider.default;
  }
});
exports.default = exports.reducer = exports.initReducers = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reactRouterRedux = require("react-router-redux");

var _history = _interopRequireDefault(require("@util/history"));

var _promiseMiddleware = _interopRequireDefault(require("./core/promiseMiddleware"));

var _ApplyProvider = _interopRequireDefault(require("./components/ApplyProvider"));

var _initReducers = _interopRequireDefault(require("./core/initReducers"));

var _reducerEnhancer = _interopRequireDefault(require("./core/reducerEnhancer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = [_reduxThunk.default, (0, _reactRouterRedux.routerMiddleware)(_history.default), _promiseMiddleware.default];
var store = (0, _redux.createStore)(function () {}, (0, _redux.compose)(_redux.applyMiddleware.apply(void 0, middleware)));
var initReducers = (0, _initReducers.default)(store);
exports.initReducers = initReducers;
var reducerEnhancer = (0, _reducerEnhancer.default)(store);

var reducer = function reducer() {
  reducerEnhancer.apply(void 0, arguments);
  return function (Comment) {
    return Comment;
  };
};

exports.reducer = reducer;
reducerEnhancer();
var _default = store;
exports.default = _default;