"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _particulate = require("@particulate");

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var saveRef = _particulate.component.saveRef;

var Fixed =
/*#__PURE__*/
function (_Component) {
  _inherits(Fixed, _Component);

  function Fixed() {
    _classCallCheck(this, Fixed);

    return _possibleConstructorReturn(this, _getPrototypeOf(Fixed).apply(this, arguments));
  }

  _createClass(Fixed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.node = document.createElement('div');
      this.renderPortal(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeUnmount();
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      return this.container && this.container.ownerDocument.body || document.body.ownerDocument.body;
    }
  }, {
    key: "removeUnmount",
    value: function removeUnmount() {
      var isFixed = this.props.isFixed;
      (0, _reactDom.unmountComponentAtNode)(this.node);

      if (this.owner && isFixed) {
        this.owner.removeChild(this.node);
      }
    }
  }, {
    key: "renderPortal",
    value: function renderPortal(props) {
      var isFixed = props.isFixed,
          children = props.children,
          _props$className = props.className,
          className = _props$className === void 0 ? '' : _props$className,
          getContainer = props.getContainer,
          _props$onUpdate = props.onUpdate,
          onUpdate = _props$onUpdate === void 0 ? function () {
        return null;
      } : _props$onUpdate,
          reset = _objectWithoutProperties(props, ["isFixed", "children", "className", "getContainer", "onUpdate"]);

      if (isFixed) {
        (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, _react.default.createElement("div", _extends({}, reset, {
          className: [className, _index.default.fixed].join(' ')
        }), children), this.node, onUpdate);

        if (!this.owner) {
          this.owner = getContainer && getContainer() || this.getContainer();
        }

        this.owner.appendChild(this.node);
      } else {
        this.removeUnmount();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isFixed = _this$props.isFixed;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
        ref: saveRef(this, 'container'),
        style: {
          display: 'none'
        }
      }), !isFixed && children);
    }
  }]);

  return Fixed;
}(_react.Component);

var _default = Fixed;
exports.default = _default;