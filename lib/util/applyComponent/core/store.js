"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ComponentStore =
/*#__PURE__*/
function () {
  function ComponentStore(reactNode, path) {
    var _this = this;

    _classCallCheck(this, ComponentStore);

    _defineProperty(this, "getMounted", function (context) {
      var params = context.match.params;

      var hash = _this.getHash(params);

      return _this.isMountedCatch[hash];
    });

    _defineProperty(this, "setMounted", function (context, status) {
      var params = context.match.params;

      var hash = _this.getHash(params);

      _this.isMountedCatch[hash] = status;
    });

    this.reactNode = reactNode;
    this.isMountedCatch = {};
    this.path = path;
    this.storeProps = {
      ref: this.saveRef()
    };
  }

  _createClass(ComponentStore, [{
    key: "setReactNode",
    value: function setReactNode(reactNode) {
      this.reactNode = reactNode;
    }
  }, {
    key: "getReactNode",
    value: function getReactNode() {
      return this.reactNode;
    }
  }, {
    key: "getHash",
    value: function getHash() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var hash = Object.keys(params).reduce(function (str, key) {
        return "".concat(str, "-").concat(key, "-").concat(params[key]);
      }, '');
      if (!hash) hash = this.path;
      return hash;
    }
  }, {
    key: "saveRef",
    value: function saveRef() {
      var _this2 = this;

      var hash;
      return function (component) {
        if (!hash && component) {
          var match = component.props.match;
          var params = match.params;
          hash = _this2.getHash(params);
        }

        if (!component) {
          delete _this2.isMountedCatch[hash];
        } else {
          _this2.isMountedCatch[hash] = true;
        }
      };
    }
  }]);

  return ComponentStore;
}();

var _default = ComponentStore;
exports.default = _default;