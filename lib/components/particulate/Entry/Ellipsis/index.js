"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint react/no-did-mount-set-state: 0 */

/* eslint no-param-reassign: 0 */
var isSupportLineClamp = typeof window !== 'undefined' && document.body.style.webkitLineClamp !== undefined;

var EllipsisText = function EllipsisText(_ref) {
  var text = _ref.text,
      length = _ref.length,
      tooltip = _ref.tooltip,
      other = _objectWithoutProperties(_ref, ["text", "length", "tooltip"]);

  if (typeof text !== 'string') {
    throw new Error('Ellipsis children must be string.');
  }

  if (text.length <= length || length < 0) {
    return _react.default.createElement("span", other, text);
  }

  var tail = '...';
  var displayText;

  if (length - tail.length <= 0) {
    displayText = '';
  } else {
    displayText = text.slice(0, length - tail.length);
  }

  if (tooltip) {
    return _react.default.createElement(_antd.Tooltip, {
      overlayStyle: {
        wordBreak: 'break-all'
      },
      title: text
    }, _react.default.createElement("span", null, displayText, tail));
  }

  return _react.default.createElement("span", other, displayText, tail);
};

var Ellipsis =
/*#__PURE__*/
function (_Component) {
  _inherits(Ellipsis, _Component);

  function Ellipsis() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Ellipsis);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Ellipsis)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      text: '',
      targetCount: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "computeLine", function () {
      var lines = _this.props.lines;

      if (lines && !isSupportLineClamp) {
        var text = _this.shadowChildren.innerText;
        var lineHeight = parseInt(getComputedStyle(_this.root).lineHeight, 10);
        var targetHeight = lines * lineHeight;
        _this.content.style.height = "".concat(targetHeight, "px");
        var totalHeight = _this.shadowChildren.offsetHeight;
        var shadowNode = _this.shadow.firstChild;

        if (totalHeight <= targetHeight) {
          _this.setState({
            text: text,
            targetCount: text.length
          });

          return;
        } // bisection


        var len = text.length;
        var mid = Math.floor(len / 2);

        var count = _this.bisection(targetHeight, mid, 0, len, text, shadowNode);

        _this.setState({
          text: text,
          targetCount: count
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bisection", function (th, m, b, e, text, shadowNode) {
      var suffix = '...';
      var mid = m;
      var end = e;
      var begin = b;
      shadowNode.innerHTML = text.substring(0, mid) + suffix;
      var sh = shadowNode.offsetHeight;

      if (sh <= th) {
        shadowNode.innerHTML = text.substring(0, mid + 1) + suffix;
        sh = shadowNode.offsetHeight;

        if (sh > th) {
          return mid;
        } else {
          begin = mid;
          mid = Math.floor((end - begin) / 2) + begin;
          return _this.bisection(th, mid, begin, end, text, shadowNode);
        }
      } else {
        if (mid - 1 < 0) {
          return mid;
        }

        shadowNode.innerHTML = text.substring(0, mid - 1) + suffix;
        sh = shadowNode.offsetHeight;

        if (sh <= th) {
          return mid - 1;
        } else {
          end = mid;
          mid = Math.floor((end - begin) / 2) + begin;
          return _this.bisection(th, mid, begin, end, text, shadowNode);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRoot", function (n) {
      _this.root = n;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleContent", function (n) {
      _this.content = n;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleNode", function (n) {
      _this.node = n;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleShadow", function (n) {
      _this.shadow = n;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleShadowChildren", function (n) {
      _this.shadowChildren = n;
    });

    return _this;
  }

  _createClass(Ellipsis, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.node) {
        this.computeLine();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.lines !== nextProps.lines) {
        this.computeLine();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          text = _this$state.text,
          targetCount = _this$state.targetCount;

      var _this$props = this.props,
          children = _this$props.children,
          lines = _this$props.lines,
          length = _this$props.length,
          className = _this$props.className,
          tooltip = _this$props.tooltip,
          restProps = _objectWithoutProperties(_this$props, ["children", "lines", "length", "className", "tooltip"]);

      var cls = "".concat(_index.default.ellipsis, " ").concat(className, " ").concat(lines && (isSupportLineClamp ? _index.default.lineClamp : _index.default.lines));

      if (!lines && !length) {
        return _react.default.createElement("span", _extends({
          className: cls
        }, restProps), children);
      } // length


      if (!lines) {
        return _react.default.createElement(EllipsisText, _extends({
          className: cls,
          length: length,
          text: children || '',
          tooltip: tooltip
        }, restProps));
      }

      var id = "antd-pro-ellipsis-".concat("".concat(new Date().getTime()).concat(Math.floor(Math.random() * 100))); // support document.body.style.webkitLineClamp

      if (isSupportLineClamp) {
        var style = "#".concat(id, "{-webkit-line-clamp:").concat(lines, ";-webkit-box-orient: vertical;}");
        return _react.default.createElement("div", _extends({
          id: id,
          className: cls
        }, restProps), _react.default.createElement("style", null, style), tooltip ? _react.default.createElement(_antd.Tooltip, {
          overlayStyle: {
            wordBreak: 'break-all'
          },
          title: children
        }, children) : children);
      }

      var childNode = _react.default.createElement("span", {
        ref: this.handleNode
      }, targetCount > 0 && text.substring(0, targetCount), targetCount > 0 && targetCount < text.length && '...');

      return _react.default.createElement("div", _extends({}, restProps, {
        ref: this.handleRoot,
        className: cls
      }), _react.default.createElement("div", {
        ref: this.handleContent
      }, tooltip ? _react.default.createElement(_antd.Tooltip, {
        overlayStyle: {
          wordBreak: 'break-all'
        },
        title: text
      }, childNode) : childNode, _react.default.createElement("div", {
        className: _index.default.shadow,
        ref: this.handleShadowChildren
      }, children), _react.default.createElement("div", {
        className: _index.default.shadow,
        ref: this.handleShadow
      }, _react.default.createElement("span", null, text))));
    }
  }]);

  return Ellipsis;
}(_react.Component);

exports.default = Ellipsis;