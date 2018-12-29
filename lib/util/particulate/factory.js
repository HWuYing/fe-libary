"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.entryComponents = entryComponents;
exports.batchEntryMap = batchEntryMap;

var _react = _interopRequireWildcard(require("react"));

var _component = require("./component");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function entryComponents(Components) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  var EntryComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(EntryComponent, _Component);

    function EntryComponent(props, context) {
      var _this;

      _classCallCheck(this, EntryComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(EntryComponent).call(this, props, context));
      _this.state = {
        value: defaultValue
      };

      _this.initial(props);

      return _this;
    }

    _createClass(EntryComponent, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var value = this.state.value;

        if (nextProps.value !== value) {
          this.initial(nextProps);
        }
      }
    }, {
      key: "onChange",
      value: function onChange(e) {
        var onChange = this.props.onChange;
        if (onChange) onChange(e);
      }
    }, {
      key: "initial",
      value: function initial(props) {
        this.initialMergeProps(props);
        this.state.value = props.value;
      }
    }, {
      key: "initialMergeProps",
      value: function initialMergeProps(props) {
        var _this2 = this;

        this.mergeProps = _objectSpread({}, (0, _component.clearAttr)(_objectSpread({}, props), ['value', 'onChange']), {
          onChange: function onChange() {
            return _this2.onChange.apply(_this2, arguments);
          }
        });
      }
    }, {
      key: "render",
      value: function render() {
        var value = this.state.value;
        return _react.default.createElement(Components, _extends({
          value: value
        }, this.mergeProps));
      }
    }]);

    return EntryComponent;
  }(_react.Component);

  return EntryComponent;
}

function batchEntryMap(ComponentMap) {
  return Object.keys(ComponentMap).reduce(function (o, key) {
    return Object.assign(o, _defineProperty({}, key, (0, _component.factoryComponentsConfig)(ComponentMap[key])));
  }, {});
}