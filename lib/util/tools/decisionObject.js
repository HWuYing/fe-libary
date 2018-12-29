"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientInfo = exports.getPrefix = exports.hasOwnProperty = void 0;

var hasOwnProperty = function hasOwnProperty(o, name) {
  return Object.prototype.hasOwnProperty.call(o, name);
};

exports.hasOwnProperty = hasOwnProperty;

var getPrefix = function () {
  var prefix = null;
  return function () {
    if (typeof window === 'undefined') return {};

    if (!prefix) {
      var styles = window.getComputedStyle(document.documentElement, '');
      var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];
      var dom = 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1];
      prefix = {
        dom: dom,
        lowercase: pre,
        css: '-' + pre + '-',
        js: pre[0].toUpperCase() + pre.substr(1)
      };
    }

    return prefix;
  };
}();

exports.getPrefix = getPrefix;

var getClientInfo = function (dom) {
  if (typeof window === 'undefined') return function () {
    return {};
  };
  return function (dom) {
    var obj = {};

    if (dom && dom.getBoundingClientRect) {
      obj = dom.getBoundingClientRect();
    }

    return obj;
  };
}();

exports.getClientInfo = getClientInfo;