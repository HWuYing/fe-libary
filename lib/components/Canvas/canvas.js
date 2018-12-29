"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = factoryCanvas;

var _tools = require("@tools");

var ModelMap = _interopRequireWildcard(require("./model"));

var _exampleMap = _interopRequireDefault(require("./model/exampleMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function hash() {
  var count = 0;
  return function () {
    count += 1;
    return count.toString();
  };
}

function factoryModel(injectionModel) {
  var keys = Object.keys(ModelMap);
  return keys.forEach(function (key) {
    return injectionModel("create".concat(key), ModelMap[key]);
  });
}

function getScrenPixelDensity() {
  if (typeof window === 'undefined') return 1;
  return window.devicePixelRatio || 1;
}

function dataURLtoBlob(dataUrl) {
  var arr = dataUrl.split(',');
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);
  /* eslint-disable no-plusplus */

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], {
    type: mime
  });
}

function factoryCanvas() {
  var Canvas =
  /*#__PURE__*/
  function (_ExampleMap) {
    _inherits(Canvas, _ExampleMap);

    function Canvas(_ref) {
      var _this;

      var _ref$ratio = _ref.ratio,
          ratio = _ref$ratio === void 0 ? 1 : _ref$ratio,
          width = _ref.width,
          height = _ref.height,
          _ref$fontFamily = _ref.fontFamily,
          fontFamily = _ref$fontFamily === void 0 ? 'Arial' : _ref$fontFamily;

      _classCallCheck(this, Canvas);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Canvas).call(this)); // 像素密度

      _this.devicePixelRatio = getScrenPixelDensity();
      _this.ratio = ratio * _this.devicePixelRatio;
      _this.canvas = undefined;
      _this.ctx = undefined;
      _this.width = width * ratio;
      _this.height = height * ratio;
      _this.containerWidth = width * _this.ratio;
      _this.containerHeight = height * _this.ratio;
      _this.fontFamily = fontFamily;
      _this.getHash = hash();
      return _this;
    }

    _createClass(Canvas, [{
      key: "injectionModel",
      value: function injectionModel(key, Model) {
        var _this2 = this;

        var getHash = this.getHash,
            ctx = this.ctx,
            ratio = this.ratio,
            exampleMap = this.exampleMap,
            containerWidth = this.containerWidth,
            containerHeight = this.containerHeight,
            devicePixelRatio = this.devicePixelRatio,
            fontFamily = this.fontFamily;
        var prototype = Canvas.prototype;

        prototype[key] = function (props) {
          var example = new Model(_objectSpread({}, props, {
            containerWidth: containerWidth,
            containerHeight: containerHeight,
            hash: getHash(),
            ctx: ctx,
            devicePixelRatio: devicePixelRatio,
            exampleMap: exampleMap,
            ratio: ratio
          }));
          if (example.setDefaultFontFamily) example.setDefaultFontFamily(fontFamily);

          example.removeExample = function () {
            return _this2.removeExample(example);
          };

          return example;
        };
      }
    }, {
      key: "setBackingStorePixelRatio",
      value: function setBackingStorePixelRatio() {
        var ctx = this.ctx,
            devicePixelRatio = this.devicePixelRatio;

        var _getPrefix = (0, _tools.getPrefix)(),
            dom = _getPrefix.dom;

        ctx.backingStorePixelRatio = devicePixelRatio;
        ctx["".concat(dom, "BackingStorePixelRatio")] = devicePixelRatio;
      }
    }, {
      key: "setCanvas",
      value: function setCanvas(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        factoryModel(this.injectionModel.bind(this));
        this.setBackingStorePixelRatio();
      }
    }, {
      key: "draw",
      value: function draw() {
        var ctx = this.ctx,
            width = this.width,
            height = this.height;
        this.ctx.clearRect(0, 0, width, height);
        ctx.save();

        _get(_getPrototypeOf(Canvas.prototype), "draw", this).call(this, this.ctx);

        ctx.restore();
      }
    }, {
      key: "toDataBlob",
      value: function toDataBlob(type, encoderOptions) {
        var data = this.canvas.toDataURL(type, encoderOptions);
        return dataURLtoBlob(data);
      }
    }]);

    return Canvas;
  }(_exampleMap.default);

  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  return _construct(Canvas, arg);
}