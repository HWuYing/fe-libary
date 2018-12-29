"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("./../base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Text =
/*#__PURE__*/
function (_Base) {
  _inherits(Text, _Base);

  function Text(props) {
    var _this;

    _classCallCheck(this, Text);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Text).call(this, props));
    var text = props.text,
        fontSize = props.fontSize,
        color = props.color,
        _props$fontWeight = props.fontWeight,
        fontWeight = _props$fontWeight === void 0 ? 'normal' : _props$fontWeight,
        _props$textBaseline = props.textBaseline,
        textBaseline = _props$textBaseline === void 0 ? 'top' : _props$textBaseline,
        fontFamily = props.fontFamily;
    _this.text = text;
    _this.fontSize = fontSize;
    _this.color = color;
    _this.fontWeight = fontWeight;
    _this.textBaseline = textBaseline;
    _this.measureWidth = 0;
    _this.fontFamily = fontFamily;
    return _this;
  }

  _createClass(Text, [{
    key: "setText",
    value: function setText(text) {
      this.text = text;
    }
  }, {
    key: "setDefaultFontFamily",
    value: function setDefaultFontFamily(family) {
      this.defaultFontFamily = family;
    }
  }, {
    key: "setFontFamily",
    value: function setFontFamily(family) {
      this.fontFamily = family;
    }
  }, {
    key: "draw",
    value: function draw() {
      var ctx = this.ctx,
          text = this.text,
          fontSize = this.fontSize,
          ratio = this.ratio,
          fontWeight = this.fontWeight,
          textBaseline = this.textBaseline,
          x = this.x,
          y = this.y,
          color = this.color,
          defaultFontFamily = this.defaultFontFamily,
          fontFamily = this.fontFamily;
      ctx.translate(x * ratio, y * ratio);
      ctx.textBaseline = textBaseline;
      ctx.fillStyle = color;
      ctx.font = "".concat(fontWeight, " ").concat(fontSize * ratio, "px ").concat(fontFamily || defaultFontFamily);
      ctx.fillText(text, 0, 0);
      this.measureWidth = ctx.measureText(text).width;
    }
  }, {
    key: "measureLength",
    value: function measureLength() {
      var ratio = this.ratio;
      return this.measureWidth / ratio;
    }
  }]);

  return Text;
}(_base.default);

var _default = Text;
exports.default = _default;