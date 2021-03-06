"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function handlerAction(actionType) {
  var reducer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
    return state;
  };
  return function (state, action) {
    var type = action.type;

    if (actionType === type) {
      return reducer(state, action);
    }

    return state;
  };
}

function reduceReducers() {
  for (var _len = arguments.length, reducers = new Array(_len), _key = 0; _key < _len; _key++) {
    reducers[_key] = arguments[_key];
  }

  return function (previous, current) {
    return reducers.reduce(function (p, r) {
      return r(p, current);
    }, previous);
  };
}

var _default = function _default() {
  return function (handlers) {
    var defaultStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var reducers = Object.keys(handlers).map(function (type) {
      return handlerAction(type, handlers[type]);
    });
    var reducer = reduceReducers.apply(void 0, _toConsumableArray(reducers));
    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultStatus;
      var action = arguments.length > 1 ? arguments[1] : undefined;
      return reducer(state, action);
    };
  };
};

exports.default = _default;