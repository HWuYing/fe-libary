"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _canvas = _interopRequireDefault(require("./canvas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DrawCanvas =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DrawCanvas, _PureComponent);

  function DrawCanvas(props, context) {
    var _this;

    _classCallCheck(this, DrawCanvas);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DrawCanvas).call(this, props, context));
    _this.isClient = typeof window !== 'undefined';
    _this.canvas = (0, _canvas.default)(props);
    return _this;
  }

  _createClass(DrawCanvas, [{
    key: "getCanvas",
    value: function getCanvas(canvas) {
      var getCanvas = this.props.getCanvas;
      if (canvas) this.canvas.setCanvas(canvas);
      if (getCanvas) getCanvas(this.canvas);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.isClient) return null;
      var _this$props$style = this.props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style;
      var _this$canvas = this.canvas,
          width = _this$canvas.width,
          height = _this$canvas.height,
          containerWidth = _this$canvas.containerWidth,
          containerHeight = _this$canvas.containerHeight;
      var mergeStyle = Object.assign({
        width: "".concat(width, "px"),
        height: "".concat(height, "px")
      }, style);
      return _react.default.createElement("canvas", {
        ref: function ref(canvas) {
          return _this2.getCanvas(canvas);
        },
        width: containerWidth,
        height: containerHeight,
        style: mergeStyle
      });
    }
  }]);

  return DrawCanvas;
}(_react.PureComponent);

var _default = DrawCanvas;
exports.default = _default;