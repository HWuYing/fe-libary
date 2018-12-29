"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbstractBase = exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractBase = function AbstractBase(_ref) {
  var ctx = _ref.ctx,
      _ref$ratio = _ref.ratio,
      ratio = _ref$ratio === void 0 ? 1 : _ref$ratio,
      hash = _ref.hash,
      containerWidth = _ref.containerWidth,
      containerHeight = _ref.containerHeight,
      devicePixelRatio = _ref.devicePixelRatio,
      _ref$x = _ref.x,
      x = _ref$x === void 0 ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === void 0 ? 0 : _ref$y;

  _classCallCheck(this, AbstractBase);

  this.x = x;
  this.y = y;
  this.ctx = ctx;
  this.hash = hash;
  this.ratio = ratio;
  this.containerWidth = containerWidth;
  this.containerHeight = containerHeight;
  this.devicePixelRatio = devicePixelRatio;
};

exports.AbstractBase = AbstractBase;

var Base =
/*#__PURE__*/
function (_AbstractBase) {
  _inherits(Base, _AbstractBase);

  function Base() {
    _classCallCheck(this, Base);

    return _possibleConstructorReturn(this, _getPrototypeOf(Base).apply(this, arguments));
  }

  _createClass(Base, [{
    key: "resetRatio",
    value: function resetRatio(ratio) {
      this.ratio = ratio;
    }
  }]);

  return Base;
}(AbstractBase);

var _default = Base;
exports.default = _default;