"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authorized = authorized;
exports.authorizedFilter = authorizedFilter;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tools = require("@tools");

var config = _interopRequireWildcard(require("@common/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function authorized(author, authorElement) {
  var type = (0, _tools.typeMold)(authorElement);
  if (!authorElement || author.isDebug) return true;else if (type('string')) {
    return authorized(author, {
      system: authorElement
    });
  } else if (type('object')) {
    return Object.keys(authorElement).reduce(function (status, key) {
      var authorCloneElement = authorElement[key];
      var typeClone = (0, _tools.typeMold)(authorCloneElement);
      var isNot = /^\!{1}/.test(key);
      var authorStatus;
      var rexKey = key.replace(/^\!{1}/, '');
      if (typeClone('object')) authorStatus = authorized(author, authorCloneElement);else if (typeClone("array")) {
        authorStatus = authorized(author, authorCloneElement.map(function (kk) {
          return _defineProperty({}, rexKey, kk);
        }));
      } else authorStatus = author[rexKey] === authorCloneElement;
      return status && (isNot ? !authorStatus : authorStatus);
    }, true);
  } else if (type('array')) {
    return authorElement.reduce(function (status, authorClone) {
      return status || authorized(author, authorClone);
    }, false);
  } else if (type('function')) {
    return authorElement(author);
  }
  return false;
}

function authorizedFilter(author, list) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var mergeAuthor = Authorized.mergeAuthor(author, context);
  return list.reduce(function (arr, item) {
    if (authorized(mergeAuthor, item.author)) {
      arr.push(item);
    }

    return arr;
  }, []);
}

var Authorized =
/*#__PURE__*/
function (_Component) {
  _inherits(Authorized, _Component);

  function Authorized(props, context) {
    var _this;

    _classCallCheck(this, Authorized);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Authorized).call(this, props, context));
    _this.author = Authorized.mergeAuthor(props.author, context);
    return _this;
  }

  _createClass(Authorized, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var author = nextProps.author;
      var props = this.props;
      if (author !== props.author) this.author = Authorized.mergeAuthor(author, this.context);
    }
  }, {
    key: "authorizedValidate",
    value: function authorizedValidate() {
      var children = this.props.children;
      var childList = [];
      var author = this.author;

      _react.default.Children.forEach(children, function (element) {
        if (_react.default.isValidElement(element) && authorized(author, element.props.author)) childList.push(element);
      });

      return childList;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          target = _this$props.target,
          reset = _objectWithoutProperties(_this$props, ["target"]);

      var children = this.authorizedValidate();
      if (target) return _react.default.createElement(target, _objectSpread({}, reset), children);
      return children;
    }
  }]);

  return Authorized;
}(_react.Component);

_defineProperty(Authorized, "author", {
  system: config.SYSTEM
});

_defineProperty(Authorized, "contextTypes", {
  author: _propTypes.default.object
});

_defineProperty(Authorized, "mergeAuthor", function (author) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _objectSpread({}, Authorized.author, context.author, author);
});

var _default = Authorized;
exports.default = _default;