"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registryPage = registryPage;
exports.findPage = exports.renderRoute = void 0;

var _react = _interopRequireDefault(require("react"));

var _tools = require("@tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pageMap = {};

function registryPage(path, Page) {
  if ((0, _tools.hasOwnProperty)(pageMap, path)) {
    console.log(new Error("route path ".concat(path, " existence")));
  }

  pageMap[path] = Page;
  return pageMap;
}

var findPage = function findPage(path) {
  return pageMap[path];
};

exports.findPage = findPage;

var renderRoute = function renderRoute() {
  return Object.keys(pageMap).sort(function (a, b) {
    return b.length - a.length;
  }).map(function (path, index) {
    var Page = pageMap[path];
    var key = "".concat(path).concat(index);
    return _react.default.createElement(Page, {
      path: Page.path,
      key: key
    });
  });
};

exports.renderRoute = renderRoute;