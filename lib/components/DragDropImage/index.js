"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _particulate = require("@particulate");

var _index = _interopRequireDefault(require("../DragDropSort/index"));

var _index2 = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DragDropImage =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DragDropImage, _PureComponent);

  function DragDropImage(props, context) {
    var _this;

    _classCallCheck(this, DragDropImage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DragDropImage).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getChilrenList", function (value) {
      if (!value) return [];
      if ((0, _particulate.type)(value) === 'String') value = value.split(',');
      return value.map(function (item, i) {
        return {
          id: i,
          key: i.toString(),
          url: item
        };
      });
    });

    return _this;
  }

  _createClass(DragDropImage, [{
    key: "onItemMove",
    value: function onItemMove(from, to) {
      var value = this.props.value;
      var children = this.getChilrenList(value);

      var sortChildren = _toConsumableArray(children);

      var newChildren = [];

      if (from < to) {
        newChildren = sortChildren.map(function (item, i) {
          if (i >= from && i < to) return children[i + 1];
          if (i === to) return children[from];
          return item;
        });
      } else {
        newChildren = sortChildren.map(function (item, i) {
          if (i === to) return children[from];
          if (i > to && i <= from) return children[i - 1];
          return item;
        });
      }

      var result = newChildren.map(function (item) {
        return item.url;
      });
      this.props.onChange((0, _particulate.type)(value) === 'String' ? result : result.toString());
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.getChilrenList(this.props.value);
      return _react.default.createElement(_index.default, {
        onItemMove: function onItemMove() {
          return _this2.onItemMove.apply(_this2, arguments);
        },
        className: _index2.default.drageBox
      }, value.map(function (item) {
        return _react.default.createElement("div", {
          className: _index2.default.itemImageBox,
          key: item.key
        }, _react.default.createElement("span", {
          className: _index2.default.itemIndex
        }, 1 + item.id), _react.default.createElement("div", {
          className: _index2.default.itemImage,
          style: {
            backgroundImage: "url(".concat(item.url, ")")
          }
        }));
      }));
    }
  }]);

  return DragDropImage;
}(_react.PureComponent);

var _default = DragDropImage;
exports.default = _default;