"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _exampleMap = _interopRequireDefault(require("../exampleMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaseExampleMap =
/*#__PURE__*/
function (_ExampleMap) {
  _inherits(BaseExampleMap, _ExampleMap);

  function BaseExampleMap() {
    _classCallCheck(this, BaseExampleMap);

    return _possibleConstructorReturn(this, _getPrototypeOf(BaseExampleMap).apply(this, arguments));
  }

  return BaseExampleMap;
}(_exampleMap.default);

var Scene =
/*#__PURE__*/
function (_BaseExampleMap) {
  _inherits(Scene, _BaseExampleMap);

  function Scene(_ref) {
    var _this;

    var ctx = _ref.ctx,
        example = _ref.example,
        _ref$ratio = _ref.ratio,
        ratio = _ref$ratio === void 0 ? 1 : _ref$ratio,
        hash = _ref.hash,
        containerWidth = _ref.containerWidth,
        containerHeight = _ref.containerHeight,
        devicePixelRatio = _ref.devicePixelRatio,
        x = _ref.x,
        y = _ref.y;

    _classCallCheck(this, Scene);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scene).call(this));
    _this.x = x;
    _this.y = y;
    _this.ctx = ctx;
    _this.hash = hash;
    _this.example = example;
    _this.containerWidth = containerWidth;
    _this.containerHeight = containerHeight;
    _this.devicePixelRatio = devicePixelRatio;
    _this.ratio = ratio;
    return _this;
  }

  _createClass(Scene, [{
    key: "draw",
    value: function draw() {
      var ctx = this.ctx,
          x = this.x,
          y = this.y,
          ratio = this.ratio;
      ctx.translate(x * ratio, y * ratio);

      _get(_getPrototypeOf(Scene.prototype), "draw", this).call(this, this.ctx);
    }
  }]);

  return Scene;
}(BaseExampleMap);

var _default = Scene;
exports.default = _default;