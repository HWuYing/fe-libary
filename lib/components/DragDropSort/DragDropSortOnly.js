"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDndHtml5Backend = _interopRequireDefault(require("react-dnd-html5-backend"));

var _reactDnd = require("react-dnd");

var _BaseComponent2 = _interopRequireDefault(require("../../utils/BaseComponent"));

var _ItemContainer = _interopRequireDefault(require("./ItemContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable */
var DragDropContainer =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(DragDropContainer, _BaseComponent);

  function DragDropContainer(props, context) {
    var _this;

    _classCallCheck(this, DragDropContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DragDropContainer).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "find", function (index) {
      var children = _this.state.children;
      return children.find(function (v, i) {
        return i === index;
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "move", function (from, to) {
      _this.props.onItemMove(from, to, _this.find(from), _this.find(to));
    });

    _this.state = {
      children: props.children || [],
      className: props.className || ''
    };
    return _this;
  }

  _createClass(DragDropContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.state.children = nextProps.children;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          children = _this$state.children,
          className = _this$state.className;
      return _react.default.createElement("div", {
        className: className
      }, Array.isArray(children) && children.map(function (item, i) {
        return _react.default.createElement(_ItemContainer.default, {
          id: i,
          dropItem: _this2.move,
          key: i.toString()
        }, item);
      }));
    }
  }]);

  return DragDropContainer;
}(_BaseComponent2.default);

var _default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend.default)(DragDropContainer);

exports.default = _default;