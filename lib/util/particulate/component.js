"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factoryCloneComponents = factoryCloneComponents;
exports.factoryComponentsConfig = factoryComponentsConfig;
exports.clearAttr = clearAttr;
exports.cloneElement = exports.mergeObjectRef = exports.saveRef = void 0;

var _react = _interopRequireWildcard(require("react"));

var _tools = require("../tools");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable */
function factoryCloneComponents(Components, fn) {
  return function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function () {
      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      return fn.apply(void 0, [_react.default.createElement(Components, config)].concat(arg));
    };
  };
}

function factoryComponentsConfig(Components) {
  return factoryCloneComponents(Components, function (cloneElement, options) {
    return _react.default.cloneElement(cloneElement, _objectSpread({}, options || {}));
  });
}

var saveRef = function saveRef(_self, key) {
  return function (f) {
    return _self[key] = f;
  };
};

exports.saveRef = saveRef;

function clearAttr(_self) {
  var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  arr.forEach(function (key) {
    return delete _self[key];
  });
  return _self;
}

var mergeObjectRef = function mergeObjectRef(ref, obj) {
  if (ref) {
    Object.keys(obj).forEach(function (key) {
      if (!(0, _tools.hasOwnProperty)(ref, key)) {
        Object.defineProperty(ref, key, {
          value: obj[key]
        });
      }
    });
  }

  return ref;
};

exports.mergeObjectRef = mergeObjectRef;

var cloneElement = function cloneElement(ElementComment) {
  var mergeProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var CloneElement =
  /*#__PURE__*/
  function (_Component) {
    _inherits(CloneElement, _Component);

    function CloneElement() {
      _classCallCheck(this, CloneElement);

      return _possibleConstructorReturn(this, _getPrototypeOf(CloneElement).apply(this, arguments));
    }

    _createClass(CloneElement, [{
      key: "render",
      value: function render() {
        return _react.default.createElement(ElementComment, _extends({}, this.props, mergeProps));
      }
    }]);

    return CloneElement;
  }(_react.Component);

  return CloneElement;
};

exports.cloneElement = cloneElement;