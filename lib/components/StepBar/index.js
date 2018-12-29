"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StepsBar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("./index.less"));

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

var StepsBar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(StepsBar, _PureComponent);

  function StepsBar(props, context) {
    var _this;

    _classCallCheck(this, StepsBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StepsBar).call(this, props, context));
    _this.state = {
      stepsSource: props.stepsSource || [],
      current: props.current || 0,
      StepStyle: props.StepStyle || 'blueStepsBar'
    };
    return _this;
  }

  _createClass(StepsBar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.state.current = nextProps.current;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          stepsSource = _this$state.stepsSource,
          current = _this$state.current,
          StepStyle = _this$state.StepStyle;
      var width = {
        width: "".concat(100 / stepsSource.length, "%")
      };
      return _react.default.createElement("ul", {
        className: _index.default[StepStyle]
      }, stepsSource.map(function (item, i) {
        return _react.default.createElement("li", {
          key: i.toString(),
          "data-value": item.step,
          className: current === item.step ? _index.default.selected : '',
          style: width
        }, item.title);
      }));
    }
  }]);

  return StepsBar;
}(_react.PureComponent);

exports.StepsBar = StepsBar;
var _default = StepsBar;
exports.default = _default;