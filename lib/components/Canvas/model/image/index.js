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

var Image =
/*#__PURE__*/
function (_Base) {
  _inherits(Image, _Base);

  function Image(props) {
    var _this;

    _classCallCheck(this, Image);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Image).call(this, props));
    var width = props.width,
        height = props.height,
        src = props.src;
    _this.image = undefined;
    _this.width = width;
    _this.height = height;
    _this.src = src;
    return _this;
  }

  _createClass(Image, [{
    key: "loadImage",
    value: function loadImage() {
      var _this2 = this;

      return new Promise(function (resolve) {
        var src = _this2.src;
        var image = document.createElement('img');
        image.src = src;
        image.style.display = 'none';
        image.crossOrigin = "Anonymous";
        document.body.appendChild(image);

        image.onload = function () {
          resolve();
          _this2.image = image;
          document.body.removeChild(image);
        };
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this3 = this;

      var ctx = this.ctx,
          x = this.x,
          y = this.y,
          width = this.width,
          height = this.height,
          ratio = this.ratio;
      var promise = Promise.resolve();
      if (!this.image) promise = this.loadImage();
      return promise.then(function () {
        ctx.save();
        ctx.translate(x * ratio, y * ratio);
        ctx.drawImage(_this3.image, 0, 0, width * ratio, height * ratio);
        ctx.restore();
      });
    }
  }]);

  return Image;
}(_base.default);

var _default = Image;
exports.default = _default;