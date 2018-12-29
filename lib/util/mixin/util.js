"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.createUtil = exports.getUtil = void 0;

var _tools = require("@tools");

var _eventbus = require("./eventbus");

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var event = (0, _eventbus.getEventBus)();

var Util =
/*#__PURE__*/
function () {
  function Util(host, fromMenu) {
    var _this = this;

    _classCallCheck(this, Util);

    _defineProperty(this, "openPage", function (menu) {
      event.$emit('@PAGE_LABEL_ON_PAGE', _this.formatMenu(menu), _this.fromMenu);
    });

    _defineProperty(this, "switchPage", function (menu) {
      event.$emit('@PAGE_LABEL_SWITCH', _this.formatMenu(menu));
    });

    _defineProperty(this, "closePage", function (menu) {
      event.$emit('@PAGE_LABEL_REMOVE', _this.formatMenu(menu));
    });

    _defineProperty(this, "refreshPage", function (menu) {
      event.$emit('@PAGE_LABEL_REFRESH', _this.formatMenu(menu));
    });

    _defineProperty(this, "closeAndOpen", function (close, open) {
      _this.closePage(close);

      setTimeout(function () {
        return _this.openPage(open);
      });
    });

    _defineProperty(this, "closeAndSwitch", function (close, open) {
      _this.closePage(close);

      setTimeout(function () {
        return _this.switchPage(open);
      });
    });

    _defineProperty(this, "closeAndSwitchRefresh", function (close, open) {
      _this.closePage(close);

      setTimeout(function () {
        return _this.switchRefresh(open);
      });
    });

    _defineProperty(this, "openAndRefreshPage", function (menu) {
      _this.closePage(menu);

      setTimeout(function () {
        return _this.openPage(menu);
      });
    });

    _defineProperty(this, "openAndClosePage", function (open, close) {
      _this.openPage(open);

      setTimeout(function () {
        return _this.closePage(close);
      });
    });

    _defineProperty(this, "switchAndClosePage", function (open, close) {
      _this.switchPage(open);

      setTimeout(function () {
        return _this.closePage(close);
      });
    });

    _defineProperty(this, "closeAndOpenPage", function (close, open) {
      _this.closePage(close);

      setTimeout(function () {
        return _this.openPage(open);
      });
    });

    _defineProperty(this, "switchAndCloseRefreshPage", function (open, close) {
      _this.switchAndClosePage(open, close);

      setTimeout(function () {
        return _this.refreshPage(open);
      });
    });

    _defineProperty(this, "openAndClosePageRefresh", function (open, close) {
      _this.closeAndOpenPage(close, open);

      setTimeout(function () {
        return _this.refreshPage(open);
      });
    });

    this.host = host;
    this.fromMenu = fromMenu;
  }

  _createClass(Util, [{
    key: "formatMenu",
    value: function formatMenu(menu) {
      var typeFn = (0, _tools.typeMold)(menu);
      var format = menu;
      if (typeFn('string')) format = {
        name: menu
      };
      return Object.assign(format, {
        hasKey: this.host
      });
    }
  }, {
    key: "switchRefresh",
    value: function switchRefresh(open) {
      var _this2 = this;

      this.switchPage(open);
      setTimeout(function () {
        return _this2.refreshPage(open);
      });
    }
  }]);

  return Util;
}();

var createUtil = function createUtil() {
  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  return _construct(Util, arg);
};

exports.createUtil = createUtil;

var getUtil = function () {
  var util;
  return function () {
    if (!util) util = createUtil();
    return util;
  };
}();

exports.getUtil = getUtil;

function _default(Component) {
  var prototypeClone = Component.prototype;

  if (!(0, _tools.hasOwnProperty)(prototypeClone, '$util')) {
    Object.defineProperty(prototypeClone, '$util', {
      get: function get() {
        return getUtil();
      },
      set: function set() {
        throw new Error('util值不允许修改');
      }
    });
  }
}