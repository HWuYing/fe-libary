"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _decisionType = _interopRequireDefault(require("@tools/decisionType"));

var _particulate = require("@particulate");

var _antd = require("antd");

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var saveRef = _particulate.component.saveRef;

var Image =
/*#__PURE__*/
function (_Component) {
  _inherits(Image, _Component);

  function Image(props, context) {
    var _this;

    _classCallCheck(this, Image);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Image).call(this, props, context));
    _this.state = {
      currentIndex: -1,
      visible: false
    };
    _this.childrenList = [];

    _this.initial(props);

    return _this;
  }

  _createClass(Image, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props = this.props,
          children = _this$props.children,
          value = _this$props.value;

      if (nextProps.children !== children || nextProps.value !== value) {
        this.initial(nextProps);
      }
    }
  }, {
    key: "onCancel",
    value: function onCancel() {
      this.setState({
        currentIndex: -1,
        visible: false
      });
    }
  }, {
    key: "initial",
    value: function initial(props) {
      var _props$children = props.children,
          children = _props$children === void 0 ? [] : _props$children,
          _props$urlName = props.urlName,
          urlName = _props$urlName === void 0 ? 'url' : _props$urlName,
          value = props.value;
      var childrenList = [];
      var valueChildren = value ? Array.isArray(value) ? value : [value] : [];

      _toConsumableArray(children).concat(_toConsumableArray(valueChildren)).forEach(function (item) {
        if ((0, _decisionType.default)(item) === 'object') {
          childrenList.push(_objectSpread({}, item, {
            url: item[urlName]
          }));
        } else {
          childrenList.push({
            url: item
          });
        }
      });

      this.childrenList = childrenList;
    }
  }, {
    key: "showBigImage",
    value: function showBigImage(index) {
      this.setState({
        currentIndex: index,
        visible: true
      });
    }
  }, {
    key: "renderImageItem",
    value: function renderImageItem(item, index) {
      var _this2 = this;

      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height;
      var style = {
        width: width,
        height: height
      };
      return _react.default.createElement("div", {
        key: "entry-image-".concat(index),
        style: style,
        className: _index.default['image-item']
      }, _react.default.createElement("img", {
        src: item.url,
        alt: "\u56FE\u7247"
      }), _react.default.createElement("div", {
        onClick: function onClick() {
          return _this2.showBigImage(index);
        },
        className: _index.default['event-div']
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          currentIndex = _this$state.currentIndex,
          visible = _this$state.visible;
      var childrenList = this.childrenList;
      var _this$props3 = this.props,
          _this$props3$classNam = _this$props3.className,
          className = _this$props3$classNam === void 0 ? '' : _this$props3$classNam,
          _this$props3$style = _this$props3.style,
          style = _this$props3$style === void 0 ? {} : _this$props3$style,
          height = _this$props3.height;
      var currentItem = childrenList[currentIndex] && childrenList[currentIndex].url || '';
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
        ref: saveRef(this, 'container'),
        style: {
          display: 'none'
        }
      }), _react.default.createElement(_antd.Modal, {
        visible: visible,
        footer: null,
        onCancel: function onCancel() {
          return _this3.onCancel();
        },
        getContainer: function getContainer() {
          return _this3.container.ownerDocument.body;
        }
      }, _react.default.createElement("img", {
        className: _index.default['image-modal'],
        src: currentItem,
        alt: "\u56FE\u7247"
      })), _react.default.createElement("div", {
        style: {
          height: height
        },
        className: _index.default['image-content']
      }, _react.default.createElement("div", {
        style: Object.assign(style, {
          height: height
        }),
        className: [_index.default['image-list'], className].join(' ')
      }, childrenList.map(function (item, index) {
        return _this3.renderImageItem(item, index);
      }))));
    }
  }]);

  return Image;
}(_react.Component);

var _default = Image;
exports.default = _default;