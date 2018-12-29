"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factoryStandardTableComponent = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _particulate = require("@particulate");

var _TableComponent2 = _interopRequireDefault(require("../TableComponent"));

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var factoryComponentsConfig = _particulate.component.factoryComponentsConfig;

var StandardTableComponent =
/*#__PURE__*/
function (_TableComponent) {
  _inherits(StandardTableComponent, _TableComponent);

  function StandardTableComponent(props, context) {
    var _this;

    _classCallCheck(this, StandardTableComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StandardTableComponent).call(this, props, context));
    _this.state = {
      selectedRowKeys: []
    };
    _this.selectedRows = [];

    _this.initial(props);

    return _this;
  }

  _createClass(StandardTableComponent, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.initial(nextProps);
    }
  }, {
    key: "onSelectionChange",
    value: function onSelectionChange(selectedRowKeys, selectedRows) {
      _get(_getPrototypeOf(StandardTableComponent.prototype), "onSelectionChange", this).call(this, selectedRowKeys, selectedRows);

      this.selectedRows = selectedRows;
      this.setState({
        selectedRowKeys: selectedRowKeys
      });
    }
  }, {
    key: "clearSelectedRowKeys",
    value: function clearSelectedRowKeys() {
      this.table.clearSelectedRowKeys();
    }
  }, {
    key: "initial",
    value: function initial(props) {
      this.mergeProps = this.initialMergeProps(StandardTableComponent.initialMergeProps(props), props);
    }
  }, {
    key: "initialMergeProps",
    value: function initialMergeProps(mergeProps) {
      var _this2 = this;

      return _objectSpread({}, mergeProps, {
        onSelectionChange: function onSelectionChange() {
          return _this2.onSelectionChange.apply(_this2, arguments);
        }
      });
    }
  }, {
    key: "getTable",
    value: function getTable(table) {
      _get(_getPrototypeOf(StandardTableComponent.prototype), "getTable", this).call(this, table);

      this.table = table;
    }
  }, {
    key: "renderAlert",
    value: function renderAlert() {
      var _this3 = this;

      var selectedRowKeys = this.state.selectedRowKeys;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", null, "\u5DF2\u9009\u62E9"), _react.default.createElement("a", {
        style: {
          fontWeight: 600
        }
      }, selectedRowKeys.length), _react.default.createElement("span", null, "\u9879"), _react.default.createElement("a", {
        style: {
          marginLeft: '15px'
        },
        onClick: function onClick() {
          return _this3.clearSelectedRowKeys();
        }
      }, "\u6E05\u7A7A"));
    }
  }, {
    key: "renderInfo",
    value: function renderInfo() {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_antd.Alert, {
        className: _index.default['info-container'],
        message: this.renderAlert(),
        type: "info",
        showIcon: true
      }), _react.default.createElement("div", {
        style: {
          marginBottom: '10px'
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return StandardTableComponent;
}(_TableComponent2.default);

_defineProperty(StandardTableComponent, "initialMergeProps", function (props) {
  return _TableComponent2.default.initialMergeProps(_objectSpread({}, props), ['onSelectionChange', 'getTable']);
});

var _default = StandardTableComponent;
exports.default = _default;

var factoryStandardTableComponent = function factoryStandardTableComponent(Component, options) {
  return function (column, rowSelection, option) {
    return factoryComponentsConfig(Component)(_objectSpread({
      rowSelectionConfig: rowSelection,
      columnsConfig: column,
      onSelectionChange: function onSelectionChange() {},
      getTable: function getTable() {}
    }, options, option));
  };
};

exports.factoryStandardTableComponent = factoryStandardTableComponent;