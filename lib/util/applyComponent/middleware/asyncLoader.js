"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var store = _ref.store;
  return function (next) {
    return function () {
      var reactNode = store.reactNode;
      return new Promise(function (resolve, reject) {
        if (reactNode.loader) {
          reactNode.loader().then(function (asyncModel) {
            store.setReactNode(asyncModel);
            next();
          }).catch(function (e) {
            reject(e);
          });
        } else next();
      });
    };
  };
};

exports.default = _default;