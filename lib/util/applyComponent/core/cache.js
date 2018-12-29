"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComponent = getComponent;
exports.registryApplyComponent = registryApplyComponent;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _tools = require("@tools");

var _history = require("history");

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var storeComponent = {};

function pathGenter(pathname) {
  var pathList = [];
  pathname.match(new RegExp('(\\/[^\\/]*)', 'g')).reduce(function (a, path) {
    pathList.push(a + path);
    return a + path;
  }, '');
  return pathList;
}

function pathQuery(pathName) {}

function getComponent(context, store) {
  var location = context.location;
  var componentList = [];
  if (!location.pathname) return componentList;
  var parseLocation = (0, _history.createLocation)(location.pathname);
  var pathname = parseLocation.pathname;
  var pathList = pathGenter(pathname);
  var match;
  Object.keys(storeComponent).forEach(function (pathProps) {
    if (pathProps === '/' && pathname !== '/') return;
    pathList.some(function (pathName) {
      if (match = (0, _reactRouter.matchPath)(pathName, pathProps)) {
        componentList.push({
          store: storeComponent[pathProps],
          context: _objectSpread({}, context, {
            location: _objectSpread({}, location, parseLocation),
            match: match,
            dispatch: store.dispatch,
            state: store.getState(),
            store: store
          })
        });
      }

      return !!match;
    });
  });
  return componentList;
}

function registryApplyComponent(path) {
  return function (Component) {
    var key = Component.name || path;
    if (!key) throw new Error("name is undefined");
    if ((0, _tools.hasOwnProperty)(storeComponent, key)) return new Error("".concat(key, " existence"));
    storeComponent[path] = new _store.default(Component, path);
    return function (props) {
      return _react.default.createElement(Component, _extends({}, props, storeComponent[path].storeProps));
    };
  };
}