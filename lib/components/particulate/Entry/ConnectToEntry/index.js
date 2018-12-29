"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _tools = require("../../../../util/tools");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

function ConnectToEntry(component, reducesKey, storeAction) {
  var _dec, _class;

  var globalKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'global';
  var ConnectComponent = component;
  var fetchStatus = false;
  var ConnectToComponent = (_dec = (0, _reactRedux.connect)(function (state) {
    var global = state[globalKey];
    return {
      global: global
    };
  }, {
    actionFetch: storeAction
  }), _dec(_class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(ConnectToComponent, _Component);

    function ConnectToComponent(props, context) {
      var _this;

      _classCallCheck(this, ConnectToComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ConnectToComponent).call(this, props, context));
      _this.storeKey = reducesKey || props.storeKey;
      _this.mappingTo = props.mappingTo || 'children';

      _this.initial(props);

      return _this;
    }

    _createClass(ConnectToComponent, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        this.initial(nextProps);
      }
    }, {
      key: "initial",
      value: function initial(props) {
        var global = props.global,
            actionFetch = props.actionFetch,
            _props$sourceFilter = props.sourceFilter,
            sourceFilter = _props$sourceFilter === void 0 ? function () {
          return true;
        } : _props$sourceFilter,
            reset = _objectWithoutProperties(props, ["global", "actionFetch", "sourceFilter"]);

        var dataSource = global[this.storeKey];
        var actionPromise = Promise.resolve();
        this.mergeProps = reset;

        if (!dataSource || Array.isArray(dataSource) && !dataSource.length) {
          if (!fetchStatus) {
            fetchStatus = true;
            var actionResult = actionFetch();
            if (actionResult.then) actionPromise = actionResult;
            actionPromise.then(function () {
              return fetchStatus = false;
            });
          }
        } else {
          Object.assign(this.mergeProps, _defineProperty({}, this.mappingTo, _toConsumableArray((0, _tools.cloneData)(dataSource)).filter(sourceFilter) || []));
        }
      }
    }, {
      key: "render",
      value: function render() {
        return _react.default.createElement(ConnectComponent, this.mergeProps);
      }
    }]);

    return ConnectToComponent;
  }(_react.Component)) || _class);
  return ConnectToComponent;
}

var _default = ConnectToEntry;
exports.default = _default;