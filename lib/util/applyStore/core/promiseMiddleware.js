"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tools = require("@tools");

var _default = function _default(_ref) {
  var dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      var payload = action.payload,
          type = action.type;
      if (!(0, _tools.isPromise)(payload)) return next(action);
      payload.then(function (res) {
        dispatch({
          type: type,
          payload: res
        });
      }).catch(function (e) {
        console.log(e);
      });
      return next(action);
    };
  };
};

exports.default = _default;