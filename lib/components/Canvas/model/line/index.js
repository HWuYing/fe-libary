"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("../base"));

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

var Line =
/*#__PURE__*/
function (_Base) {
  _inherits(Line, _Base);

  function Line(props) {
    var _this;

    _classCallCheck(this, Line);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Line).call(this, props));
    var _props$lineList = props.lineList,
        lineList = _props$lineList === void 0 ? [] : _props$lineList,
        _props$lineWidth = props.lineWidth,
        lineWidth = _props$lineWidth === void 0 ? _this.ratio : _props$lineWidth,
        color = props.color;
    _this.lineList = lineList;
    _this.lineWidth = lineWidth;
    _this.lineColor = color;
    return _this;
  }

  _createClass(Line, [{
    key: "draw",
    value: function draw() {
      var ctx = this.ctx,
          ratio = this.ratio,
          x = this.x,
          y = this.y,
          lineList = this.lineList,
          lineWidth = this.lineWidth,
          lineColor = this.lineColor;
      ctx.translate(x * ratio, y * ratio);
      ctx.lineWidth = lineWidth * ratio;
      ctx.strokeStyle = lineColor;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      lineList.forEach(function (_ref) {
        var toX = _ref.x,
            toY = _ref.y;
        ctx.lineTo((toX - x) * ratio, (toY - y) * ratio);
      });
      ctx.stroke();
    }
  }]);

  return Line;
}(_base.default);

var _default = Line;
exports.default = _default;