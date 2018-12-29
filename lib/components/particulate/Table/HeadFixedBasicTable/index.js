"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _particulate = require("@particulate");

var _decisionObject = require("../../../../util/tools/decisionObject");

var _BasicTable = _interopRequireDefault(require("../BasicTable"));

var _TableComponent2 = _interopRequireDefault(require("../TableComponent"));

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factoryComponentsConfig = _particulate.component.factoryComponentsConfig,
    saveRef = _particulate.component.saveRef;
var Table = (0, _BasicTable.default)();

var HeadFixedBasicTable =
/*#__PURE__*/
function (_TableComponent) {
  _inherits(HeadFixedBasicTable, _TableComponent);

  function HeadFixedBasicTable(props, context) {
    var _this;

    _classCallCheck(this, HeadFixedBasicTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeadFixedBasicTable).call(this, props, context));
    _this.windowResize = _this.factoryWindowResize();
    _this.__isMounted__ = false;
    _this.state = {
      scroll: {}
    };

    _this.initial(props);

    return _this;
  }

  _createClass(HeadFixedBasicTable, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      // const { height } = this.props;
      this.initial(nextProps);
      setTimeout(function () {
        return _this2.resetScroll(nextProps);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.__isMounted__ = true;
      this.resetScroll(this.props);
      var defaultWindow = this.parentElement.ownerDocument.defaultView;
      defaultWindow.addEventListener('resize', this.windowResize, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.__isMounted__ = false;
      var defaultWindow = this.parentElement.ownerDocument.defaultView;
      defaultWindow.removeEventListener('resize', this.windowResize);
    }
  }, {
    key: "getTable",
    value: function getTable(table) {
      _get(_getPrototypeOf(HeadFixedBasicTable.prototype), "getTable", this).call(this, table);

      this.table = table;
    }
  }, {
    key: "factoryWindowResize",
    value: function factoryWindowResize() {
      var _this3 = this;

      return function () {
        return _this3.resetScroll(_this3.props);
      };
    }
  }, {
    key: "resetScroll",
    value: function resetScroll(props) {
      if (!this.__isMounted__ || !this.table) return;
      var propsHeight = props.height;
      var height = propsHeight || this.parentElement.clientHeight;
      var headerHeight = (0, _decisionObject.getClientInfo)(_reactDom.default.findDOMNode(this.table).getElementsByClassName('ant-table-header')[0]).height || 74;
      this.setState({
        scroll: {
          y: height - (headerHeight - 20)
        }
      });
    }
  }, {
    key: "initial",
    value: function initial(props) {
      var _this4 = this;

      this.mergeProps = _objectSpread({}, HeadFixedBasicTable.initialMergeProps(props), {
        getTable: function getTable(table) {
          return _this4.getTable(table);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var scroll = this.state.scroll;
      var defaultExpandAllRows = this.props.defaultExpandAllRows;
      return _react.default.createElement("div", {
        className: _index.default['head-fixed-table'],
        ref: saveRef(this, 'parentElement')
      }, _react.default.createElement(Table, _extends({
        key: this.__isMounted__ && defaultExpandAllRows ? 'before' : 'mounted'
      }, this.mergeProps, {
        getTable: function getTable(table) {
          return _this5.getTable(table);
        },
        scroll: scroll
      })));
    }
  }]);

  return HeadFixedBasicTable;
}(_TableComponent2.default);

_defineProperty(HeadFixedBasicTable, "initialMergeProps", function (props) {
  return _TableComponent2.default.initialMergeProps(_objectSpread({}, props), ['height']);
});

var _default = function _default(column, rowSelection, option) {
  return factoryComponentsConfig(HeadFixedBasicTable)(_objectSpread({
    rowSelectionConfig: rowSelection,
    columnsConfig: column,
    height: undefined
  }, option));
};

exports.default = _default;