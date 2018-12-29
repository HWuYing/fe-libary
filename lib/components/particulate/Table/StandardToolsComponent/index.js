"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factoryStandardToolsTable = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _particulate = require("@particulate");

var _TableComponent2 = _interopRequireDefault(require("../TableComponent"));

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var StandardToolsTableComponent =
/*#__PURE__*/
function (_TableComponent) {
  _inherits(StandardToolsTableComponent, _TableComponent);

  function StandardToolsTableComponent(props, context) {
    var _this;

    _classCallCheck(this, StandardToolsTableComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StandardToolsTableComponent).call(this, props, context));

    _this.initial(props);

    _this.state = {
      selectedRows: []
    };
    return _this;
  }

  _createClass(StandardToolsTableComponent, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.initial(nextProps);
    }
  }, {
    key: "onSelectionChange",
    value: function onSelectionChange(selectedRowKeys, selectedRows) {
      _get(_getPrototypeOf(StandardToolsTableComponent.prototype), "onSelectionChange", this).call(this, selectedRowKeys, selectedRows);

      this.setState({
        selectedRows: selectedRows
      });
    }
  }, {
    key: "onBatchDelete",
    value: function onBatchDelete() {
      var selectedRows = this.state.selectedRows;
      var onBatchDelete = this.props.onBatchDelete;
      onBatchDelete(selectedRows);
    }
  }, {
    key: "initial",
    value: function initial(props) {
      this.mergeProps = this.initialMergeProps(StandardToolsTableComponent.initialMergeProps(props));
    }
  }, {
    key: "initialMergeProps",
    value: function initialMergeProps(mergeProps) {
      var _this2 = this;

      return _objectSpread({}, mergeProps, {
        onSelectionChange: function onSelectionChange() {
          return _this2.onSelectionChange.apply(_this2, arguments);
        },
        onBatchDelete: function onBatchDelete() {
          return _this2.onBatchDelete();
        }
      });
    }
  }, {
    key: "renderTools",
    value: function renderTools() {
      var _this3 = this;

      var selectedRows = this.state.selectedRows;
      var _this$props = this.props,
          tools = _this$props.tools,
          deleteStatus = _this$props.deleteStatus,
          showDelete = _this$props.showDelete;
      var children = [].concat((0, _particulate.type)(tools) === 'Function' ? tools() : tools);

      if (showDelete || selectedRows.length !== 0 && deleteStatus === true) {
        children.push(_react.default.createElement(_antd.Popconfirm, {
          placement: "topLeft",
          title: "\u5220\u9664\u9009\u4E2D\u6570\u636E\uFF1F",
          onConfirm: function onConfirm() {
            return _this3.onBatchDelete();
          }
        }, _react.default.createElement(_antd.Button, null, "\u6279\u91CF\u5220\u9664")));
      }

      return _react.default.createElement("div", {
        className: _index.default.tools
      }, children.map(function (c, index) {
        return _react.default.cloneElement(c, {
          key: c.key || "tools-".concat(index)
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return StandardToolsTableComponent;
}(_TableComponent2.default);

_defineProperty(StandardToolsTableComponent, "initialMergeProps", function (props) {
  return _TableComponent2.default.initialMergeProps(_objectSpread({}, props), ['onBatchDelete', 'onSelectionChange', 'tools', 'deleteStatus', 'showDelete']);
});

var _default = StandardToolsTableComponent;
exports.default = _default;

var factoryStandardToolsTable = function factoryStandardToolsTable(Component, options) {
  return function (column, rowSelection, option) {
    return factoryComponentsConfig(Component)(_objectSpread({
      rowSelectionConfig: rowSelection,
      columnsConfig: column,
      onBatchDelete: function onBatchDelete() {},
      onSelectionChange: function onSelectionChange() {},
      tools: function tools() {
        return [];
      },
      deleteStatus: true,
      showDelete: false
    }, options, option));
  };
};

exports.factoryStandardToolsTable = factoryStandardToolsTable;