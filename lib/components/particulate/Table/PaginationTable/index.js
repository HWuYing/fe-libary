"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _particulate = require("@particulate");

var _TableComponent2 = _interopRequireDefault(require("../TableComponent"));

var _BaseTable = _interopRequireDefault(require("../BaseTable"));

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var factoryComponentsConfig = _particulate.component.factoryComponentsConfig;
var Table = (0, _BaseTable.default)();

var PaginationTable =
/*#__PURE__*/
function (_TableComponent) {
  _inherits(PaginationTable, _TableComponent);

  function PaginationTable(props, context) {
    var _this;

    _classCallCheck(this, PaginationTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PaginationTable).call(this, props, context));
    _this.state = {
      current: 1,
      pageSize: 20
    };

    _this.initial(props);

    return _this;
  }

  _createClass(PaginationTable, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.initial(nextProps);
    }
  }, {
    key: "getPaginationParams",
    value: function getPaginationParams() {
      var _this$state = this.state,
          pageSize = _this$state.pageSize,
          current = _this$state.current;
      return {
        pageSize: pageSize,
        pageNum: current
      };
    }
  }, {
    key: "getTable",
    value: function getTable(table) {
      var _this2 = this;

      _get(_getPrototypeOf(PaginationTable.prototype), "getTable", this).call(this, table, {
        getPaginationParams: function getPaginationParams() {
          return _this2.getPaginationParams.apply(_this2, arguments);
        }
      });
    }
  }, {
    key: "onChange",
    value: function onChange(current, pageSize) {
      var onPaginationChange = this.props.onPaginationChange;
      onPaginationChange(current, pageSize);
      this.setState({
        current: current,
        pageSize: pageSize
      });
    }
  }, {
    key: "onShowSizeChange",
    value: function onShowSizeChange(current, pageSize) {
      this.onChange(current, pageSize);
    }
  }, {
    key: "initial",
    value: function initial(props) {
      var current = props.current,
          pageSize = props.pageSize,
          _props$pagination = props.pagination,
          defaultPageSize = _props$pagination.defaultPageSize,
          defaultCurrent = _props$pagination.defaultCurrent;
      this.mergeProps = PaginationTable.initialMergeProps(props);
      this.paginationProps = this.initPaginationProps(props);
      this.state.current = current || this.state.current || defaultCurrent;
      this.state.pageSize = pageSize || this.state.pageSize || defaultPageSize;
    }
  }, {
    key: "initPaginationProps",
    value: function initPaginationProps(props) {
      var _this3 = this;

      var pagination = props.pagination,
          pageSize = props.pageSize,
          total = props.total,
          showTotal = props.showTotal;

      var paginationProps = _objectSpread({}, pagination, {
        pageSize: pageSize,
        total: Number(total || 0),
        showTotal: showTotal,
        onChange: function onChange() {
          return _this3.onChange.apply(_this3, arguments);
        },
        onShowSizeChange: function onShowSizeChange() {
          return _this3.onShowSizeChange.apply(_this3, arguments);
        }
      });

      return paginationProps;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Table, _extends({}, this.mergeProps, {
        getTable: function getTable(table) {
          return _this4.getTable(table);
        }
      })), _react.default.createElement("div", {
        className: _index.default['pagination-warp']
      }, _react.default.createElement(_antd.Pagination, _extends({}, this.paginationProps, this.state))));
    }
  }]);

  return PaginationTable;
}(_TableComponent2.default);

_defineProperty(PaginationTable, "initialMergeProps", function (props) {
  return _TableComponent2.default.initialMergeProps(_objectSpread({}, props), ['pagination', 'total', 'current', 'pageSize', 'showTotal', 'onPaginationChange']);
});

var _default = function _default(column, rowSelection, option) {
  return factoryComponentsConfig(PaginationTable)(_objectSpread({
    rowSelectionConfig: rowSelection,
    columnsConfig: column,
    total: 0,
    showTotal: function showTotal(total) {
      return "\u5171".concat(total, "\u6761");
    },
    onPaginationChange: function onPaginationChange() {},
    pagination: {
      showQuickJumper: true,
      showSizeChanger: true,
      defaultCurrent: 1,
      defaultPageSize: 20
    }
  }, option));
};

exports.default = _default;