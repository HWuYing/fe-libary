"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CombinationTable = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _Authorized = require("../../../Authorized");

var _particulate = require("@particulate");

var _tools = require("@tools");

var _TableComponent2 = _interopRequireDefault(require("../TableComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factoryComponentsConfig = _particulate.component.factoryComponentsConfig;

var CombinationTable =
/*#__PURE__*/
function (_TableComponent) {
  _inherits(CombinationTable, _TableComponent);

  _createClass(CombinationTable, null, [{
    key: "factoryPropsRender",
    value: function factoryPropsRender(config) {
      var props = config.props,
          _render = config.render;

      if (props) {
        Object.assign(config, {
          render: function render(text, record, index) {
            var ObjectCell;
            var children = _render ? _render(text, record, index) : text;

            if ((0, _particulate.type)(props) === 'Function') {
              ObjectCell = props(children, record, index, text);
            } else {
              ObjectCell = Object.assign({
                children: _render ? _render(text, record, index) : text,
                props: props
              });
            }

            return ObjectCell;
          },
          props: undefined
        });
      }

      return config;
    }
  }, {
    key: "formatDataSource",
    value: function formatDataSource() {
      var dataSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var rowKey = arguments.length > 1 ? arguments[1] : undefined;
      var isDeleteNullLast = arguments.length > 2 ? arguments[2] : undefined;
      var parseInt = Number.parseInt.bind(Number);
      var recursion = (0, _tools.factoryRecursion)(dataSource, undefined, isDeleteNullLast);
      return recursion.each(function (data, pData, hash) {
        return Object.assign(data, !data.key ? {
          key: rowKey ? data[rowKey] : "".concat(hash.toString()).concat(Date.now().toString()).concat(parseInt(Math.random() * 10000) % 9)
        } : {});
      });
    }
  }]);

  function CombinationTable(props, context) {
    var _this;

    _classCallCheck(this, CombinationTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CombinationTable).call(this, props, context));
    _this.state = {
      dataSource: CombinationTable.formatDataSource(props.dataSource, props.rowKey, props.isDeleteNullLast),
      selectedRowKeys: []
    };
    _this.selectedRows = [];

    _this.initial(props);

    return _this;
  }

  _createClass(CombinationTable, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props = this.props,
          dataSource = _this$props.dataSource,
          columnsConfig = _this$props.columnsConfig,
          rowSelection = _this$props.rowSelection,
          scroll = _this$props.scroll,
          _this$props$rowKey = _this$props.rowKey,
          rowKey = _this$props$rowKey === void 0 ? 'key' : _this$props$rowKey;
      var updateState = {};

      if (nextProps.columnsConfig !== columnsConfig || nextProps.rowSelection !== rowSelection || nextProps.scroll !== scroll) {
        this.initial(nextProps);
      }

      if (nextProps.dataSource !== dataSource && nextProps.dataSource !== this.state.dataSource) {
        _get(_getPrototypeOf(CombinationTable.prototype), "onSelectionChange", this).call(this, [], []);

        updateState.dataSource = CombinationTable.formatDataSource(nextProps.dataSource, nextProps.rowKey, nextProps.isDeleteNullLast);
      }

      if (this.mergeProps.rowSelection) {
        var _this$mergeProps$rowS = this.mergeProps.rowSelection.selectedRowKeys,
            selectedRowKeys = _this$mergeProps$rowS === void 0 ? [] : _this$mergeProps$rowS;
        updateState.selectedRowKeys = selectedRowKeys;
        this.selectedRows = (updateState.dataSource || dataSource || []).filter(function (item) {
          return selectedRowKeys.includes(item[rowKey]);
        });
      }

      this.setState(_objectSpread({}, updateState));
    }
  }, {
    key: "onChange",
    value: function onChange(selectedRowKeys, selectedRows, fn) {
      var _this2 = this;

      var multiple = this.props.multiple;
      var propsSelectedRowKeys = selectedRowKeys;
      var propsSelectedRows = selectedRows;

      if (!multiple && selectedRowKeys.length !== 0) {
        var stateSelectedRowKeys = this.state.selectedRowKeys;
        var currentKey = selectedRowKeys.filter(function (key) {
          return !stateSelectedRowKeys.includes(key);
        });

        if (!currentKey[0]) {
          propsSelectedRowKeys = [];
          propsSelectedRows = [];
        } else {
          propsSelectedRowKeys = [currentKey[0]];
          propsSelectedRows = selectedRows.filter(function (item) {
            return item.key === currentKey[0];
          });
        }
      }

      this.selectedRows = propsSelectedRows;
      this.setState({
        selectedRowKeys: propsSelectedRowKeys
      }, function () {
        _get(_getPrototypeOf(CombinationTable.prototype), "onSelectionChange", _this2).call(_this2, propsSelectedRowKeys, propsSelectedRows);

        fn && fn(propsSelectedRowKeys, propsSelectedRows);
      });
    }
  }, {
    key: "onRowClick",
    value: function onRowClick(record) {
      var _this3 = this;

      var _this$props2 = this.props,
          rowSelectionConfig = _this$props2.rowSelectionConfig,
          rowSelection = _this$props2.rowSelection;
      if (rowSelection === false || rowSelectionConfig === false) return;
      var selectedRowKeys = this.state.selectedRowKeys;
      var selectedRows = this.selectedRows;
      var key = record.key;
      var cursor = selectedRowKeys.indexOf(key);
      var isSelect = cursor !== -1;

      var changeRowKeys = _toConsumableArray(selectedRowKeys);

      var changeRows = _toConsumableArray(selectedRows);

      if (isSelect) {
        changeRowKeys.splice(cursor, 1);
        changeRows.splice(cursor, 1);
      } else {
        changeRowKeys.push(key);
        changeRows.push(record);
      }

      this.onChange(_toConsumableArray(changeRowKeys), _toConsumableArray(changeRows), function () {
        _get(_getPrototypeOf(CombinationTable.prototype), "onRowClick", _this3).call(_this3, record);
      });
    }
  }, {
    key: "getTable",
    value: function getTable(table) {
      var _this4 = this;

      _get(_getPrototypeOf(CombinationTable.prototype), "getTable", this).call(this, table, {
        clearSelectedRowKeys: function clearSelectedRowKeys() {
          return _this4.clearSelectedRowKeys.apply(_this4, arguments);
        }
      });
    }
  }, {
    key: "clearSelectedRowKeys",
    value: function clearSelectedRowKeys() {
      this.selectedRows = [];
      this.setState({
        selectedRowKeys: []
      });
      this.onSelectionChange([], []);
    }
  }, {
    key: "initial",
    value: function initial(props) {
      var _this5 = this;

      var author = props.author;
      this.mergeProps = _objectSpread({}, CombinationTable.initialMergeProps(props), {
        columns: (0, _Authorized.authorizedFilter)(author, CombinationTable.mergeColumn(CombinationTable.formatConfig(props.columnsConfig, _objectSpread({}, props), 'formatColumn'), props), this.context),
        rowSelection: this.initRowSelection(props),
        onRow: function onRow() {
          for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
          }

          return {
            onClick: function onClick() {
              return _this5.onRowClick.apply(_this5, arg);
            }
          };
        }
      });
    }
  }, {
    key: "initRowSelection",
    value: function initRowSelection(props) {
      var _this6 = this;

      var rowSelectionConfig = props.rowSelectionConfig,
          rowSelection = props.rowSelection;
      if (rowSelection === false || rowSelectionConfig === false) return null;

      var formatRowSelection = _objectSpread({}, CombinationTable.formatConfig(rowSelectionConfig, _objectSpread({}, props), 'formatRowSelection'));

      formatRowSelection.onChange = function () {
        return _this6.onChange.apply(_this6, arguments);
      };

      return formatRowSelection;
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var dataSource = this.state.dataSource;
      var propsRowSelection = this.mergeProps.rowSelection;
      var selectedRowKeys = this.state.selectedRowKeys;
      var rowSelection = propsRowSelection;

      if (propsRowSelection) {
        rowSelection = Object.assign({}, _objectSpread({}, propsRowSelection, {
          selectedRowKeys: selectedRowKeys
        }));
      }

      return _react.default.createElement(_antd.Table, _extends({}, this.mergeProps, {
        rowSelection: rowSelection,
        dataSource: dataSource,
        ref: function ref(table) {
          return _this7.getTable(table);
        }
      }));
    }
  }]);

  return CombinationTable;
}(_TableComponent2.default);

exports.CombinationTable = CombinationTable;

_defineProperty(CombinationTable, "contextTypes", {
  author: _propTypes.default.object
});

_defineProperty(CombinationTable, "formatConfig", function (config, props, formatName) {
  return CombinationTable[formatName]((0, _particulate.type)(config) === 'Function' ? config(props) : config, props);
});

_defineProperty(CombinationTable, "formatColumn", function (columnsConfig, props) {
  var _props$columns = props.columns,
      columns = _props$columns === void 0 ? [] : _props$columns;
  var columnsMap = columns.reduce(function (m, i) {
    return Object.assign(m, _defineProperty({}, i.dataIndex, i));
  }, {});
  var columnsKey = Object.keys(columnsMap);
  return columnsConfig.map(function (config) {
    return _objectSpread({}, config, columnsKey.includes(config.dataIndex) ? columnsMap[config.dataIndex] : {});
  });
});

_defineProperty(CombinationTable, "formatRowSelection", function (rowSelectionConfig, props) {
  var rowSelection = props.rowSelection;
  return _objectSpread({}, rowSelectionConfig, rowSelection);
});

_defineProperty(CombinationTable, "initialMergeProps", function (props) {
  return _TableComponent2.default.initialMergeProps(_objectSpread({}, props), ['columnConfig', 'column', 'columnsRender', 'onSelectionChange', 'onRowClick', 'dataSource', 'rowSelectionConfig', 'rowSelection', 'renderColumn', 'rootContext', 'author', 'multiple', 'rowKey', 'isDeleteNullLast']);
});

_defineProperty(CombinationTable, "mergeColumn", function (formatColumns, props) {
  var columnsRender = props.columnsRender,
      rootContext = props.rootContext;
  var renderKey = Object.keys(columnsRender);
  var mergeColumns = formatColumns.map(function (config) {
    var render = config.render;

    if (renderKey.includes(config.dataIndex) && !config.render) {
      render = function render() {
        for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          arg[_key2] = arguments[_key2];
        }

        return columnsRender[config.dataIndex].apply(columnsRender, arg.concat([rootContext]));
      };
    } else if (config.render) {
      render = function (configRender) {
        return function () {
          for (var _len3 = arguments.length, arg = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            arg[_key3] = arguments[_key3];
          }

          return configRender.apply(void 0, arg.concat([rootContext]));
        };
      }(render);
    }

    return Object.assign(_objectSpread({}, config), CombinationTable.factoryPropsRender(_objectSpread({}, config, {
      render: render
    })));
  });
  return mergeColumns;
});

var _default = function _default() {
  var column = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var rowSelection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var option = arguments.length > 2 ? arguments[2] : undefined;
  return factoryComponentsConfig(CombinationTable)(_objectSpread({
    columnsConfig: column,
    columns: [],
    rowSelectionConfig: rowSelection,
    rowSelection: null,
    columnsRender: {},
    dataSource: [],
    rootContext: {},
    pagination: false,
    scroll: undefined,
    author: {},
    multiple: true,
    rowKey: undefined,
    isDeleteNullLast: true,
    // 删除末级不存在的值的对象
    onSelectionChange: function onSelectionChange() {},
    onRowClick: function onRowClick() {},
    getTable: function getTable() {}
  }, option));
};

exports.default = _default;