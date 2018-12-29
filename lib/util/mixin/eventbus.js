"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.createEventBus = exports.getEventBus = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var hasOwnProperty = function hasOwnProperty(o, n) {
  return Object.prototype.hasOwnProperty.call(o, n);
};

var type = function type(o) {
  return Object.prototype.toString.call(o).replace(/\[object ([a-z|A-Z]*)\]/, '$1');
};

function initEventEmitter(eventbus) {
  if (typeof document !== 'undefined') {
    document.addEventListener('keydown', function (e) {
      return eventbus.$emit('KEY_DOWN', e);
    }, false);
  }
}

var EventBus =
/*#__PURE__*/
function () {
  function EventBus() {
    _classCallCheck(this, EventBus);

    this.eventEmitter = {
      'LOADING-CLOSE': [],
      'LOADING-OPEN': [],
      'ERROR-INTERCEPT': [],
      'FETCH-ERROR-INTERCEPT': [],
      'KEY_DOWN': []
    };
    initEventEmitter(this);
  }

  _createClass(EventBus, [{
    key: "getHandlers",
    value: function getHandlers(key) {
      var handlers = this.eventEmitter[key];
      handlers = type(handlers) === 'Array' ? handlers : [handlers];
      return handlers;
    }
  }, {
    key: "$on",
    value: function $on(key, event) {
      var _this = this;

      if (!key || type(key) !== 'String') throw new Error('key类型不正确');

      if (!hasOwnProperty(this.eventEmitter, key)) {
        this.eventEmitter[key] = [];
      } else this.$off(key, event);

      this.eventEmitter[key].push(event);
      return function () {
        return _this.$off(key, event);
      };
    }
  }, {
    key: "$emit",
    value: function $emit() {
      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      var key = arg.shift();
      if (!key) throw new Error('事件key值必须存在');

      if (!hasOwnProperty(this.eventEmitter, key)) {
        throw new Error("\u6CA1\u6709\u6CE8\u518C".concat(key, "\u4E8B\u4EF6"));
      }

      this.getHandlers(key).forEach(function (handler) {
        return type(handler === 'Function') && handler.apply(void 0, arg);
      });
    }
  }, {
    key: "$off",
    value: function $off(key, handler) {
      var _this2 = this;

      if (!hasOwnProperty(this.eventEmitter, key)) return;
      var handlers = this.getHandlers(key);
      handlers.some(function (_handler, index) {
        if (_handler !== handler) return false;
        _this2.eventEmitter[key] = [].concat(handlers.slice(0, index), handlers.slice(index + 1, handlers.length));
        return true;
      });
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.eventEmitter[key];
    }
  }]);

  return EventBus;
}();

var createEventBus = function createEventBus() {
  return new EventBus();
};

exports.createEventBus = createEventBus;

var getEventBus = function () {
  var $eventbus;
  return function () {
    if (!$eventbus) $eventbus = createEventBus();
    return $eventbus;
  };
}();

exports.getEventBus = getEventBus;

function _default(Component) {
  var prototypeClone = Component.prototype;

  if (!hasOwnProperty(prototypeClone, '$eventbus')) {
    Object.defineProperty(prototypeClone, '$eventbus', {
      get: function get() {
        return getEventBus();
      },
      set: function set() {
        throw new Error('event值不允许修改');
      }
    });
  }
}