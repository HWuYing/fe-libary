"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _enumGlobal = require("@enumGlobal");

var _tools = require("../../../../util/tools");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var getSourceList = _enumGlobal.enumGlobalAction.getSourceList;

var ConnectEntry = function ConnectEntry(component) {
  var _dec, _class;

  var globalEnumKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'globalEnum';
  var ConnectEntryComponent = component;
  var Entry = (_dec = (0, _reactRedux.connect)(function (state) {
    var globalEnum = state[globalEnumKey];
    return {
      globalEnum: globalEnum
    };
  }, {
    getSourceList: getSourceList
  }), _dec(_class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Entry, _Component);

    function Entry(props, context) {
      var _this;

      _classCallCheck(this, Entry);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Entry).call(this, props, context));
      _this.serviceApi = props.serviceApi;
      _this.storeKey = props.storeKey;
      _this.mappingTo = props.mappingTo || 'children';

      _this.initial(props);

      return _this;
    }

    _createClass(Entry, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(props) {
        // const { globalEnum } = props;
        this.initial(props); // this.config[this.mappingTo] = globalEnum[this.storeKey] || [];
      }
    }, {
      key: "initial",
      value: function initial(props) {
        var _this2 = this;

        var globalEnum = props.globalEnum;
        var dataSource = globalEnum[this.storeKey];
        this.config = _objectSpread({}, props || {});

        if (!dataSource) {
          this.config[this.mappingTo] = [];
          this.props.getSourceList({
            serviceApi: this.serviceApi,
            storeKey: this.storeKey
          });
        } else this.config[this.mappingTo] = (0, _tools.cloneData)(dataSource);

        ['serviceApi', 'storeKey', 'mappingTo', 'globalEnum', 'getSourceList'].forEach(function (item) {
          return delete _this2.config[item];
        });
      }
    }, {
      key: "render",
      value: function render() {
        return _react.default.createElement(ConnectEntryComponent, this.config);
      }
    }]);

    return Entry;
  }(_react.Component)) || _class);
  return Entry;
};

var _default = ConnectEntry;
exports.default = _default;