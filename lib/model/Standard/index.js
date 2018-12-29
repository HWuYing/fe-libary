"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _particulate = require("@particulate");

var _layouts = require("@layouts");

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

var factoryComponentsConfig = _particulate.component.factoryComponentsConfig,
    saveRef = _particulate.component.saveRef;

var Standard =
/*#__PURE__*/
function (_Component) {
  _inherits(Standard, _Component);

  function Standard(props, context) {
    var _this;

    _classCallCheck(this, Standard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Standard).call(this, props, context));
    _this.search = {};
    _this.pagination = {};
    _this.selectedRows = [];
    return _this;
  }

  _createClass(Standard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var defaultFetch = this.props.defaultFetch;

      if (this.table && this.table.getPaginationParams) {
        this.pagination = this.table.getPaginationParams();
      }

      this.search = this.form ? this.form.getFieldsValue() : {};
      if (defaultFetch) this.fetchList();
    }
  }, {
    key: "getValue",
    value: function getValue(obj) {
      return Object.keys(obj).map(function (key) {
        return obj[key];
      }).join(',');
    }
  }, {
    key: "onTableChange",
    value: function onTableChange(pagination, filters, sorter, extra) {
      var _this2 = this;

      var filtersArg = Object.keys(filters).reduce(function (obj, key) {
        var newObj = _objectSpread({}, obj);

        newObj[key] = _this2.getValue(filters[key]);
        return newObj;
      }, {});
      var sorterParams = {};

      if (sorter && sorter.order) {
        var sortOrder = (sorter.order || '').match(/(\S*)end/);
        sorterParams = {
          sortField: sorter.field,
          sortOrder: (sortOrder[1] || 'asc').toUpperCase()
        };
      }

      this.fetchList(_objectSpread({}, filtersArg, sorterParams));
    }
  }, {
    key: "onPaginationChange",
    value: function onPaginationChange(pageNum, pageSize) {
      this.pagination = {
        pageNum: pageNum,
        pageSize: pageSize
      };
      this.fetchList();
    }
  }, {
    key: "onSelectionChange",
    value: function onSelectionChange(selectedRowKeys, selectedRows) {
      var onSelectionChange = this.props.onSelectionChange;
      onSelectionChange(selectedRowKeys, selectedRows);
    }
  }, {
    key: "onSearch",
    value: function onSearch(fields) {
      this.search = _objectSpread({}, fields);
      this.fetchList();
    }
  }, {
    key: "getPage",
    value: function getPage() {
      var _this3 = this;

      var getPage = this.props.getPage;
      var form = this.form,
          table = this.table;
      getPage({
        form: form,
        table: table,
        fetchList: function fetchList() {
          return _this3.fetchList.apply(_this3, arguments);
        }
      });
    }
  }, {
    key: "fetchList",
    value: function fetchList(merge) {
      var fetchList = this.props.fetchList;

      if (fetchList) {
        fetchList(_objectSpread({}, this.pagination, this.search, merge));
        this.table.clearSelectedRowKeys();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          Form = _this$props.Form,
          Table = _this$props.Table,
          layoutCol = _this$props.layoutCol,
          parseFields = _this$props.parseFields,
          formContext = _this$props.formContext,
          tableContext = _this$props.tableContext,
          renderTools = _this$props.renderTools,
          dataSource = _this$props.dataSource,
          total = _this$props.total,
          defaultExpandAllRows = _this$props.defaultExpandAllRows,
          expandedRowKeys = _this$props.expandedRowKeys,
          deleteStatus = _this$props.deleteStatus,
          isHeadFixed = _this$props.isHeadFixed,
          columnsRender = _this$props.columnsRender,
          _onBatchDelete = _this$props.onBatchDelete,
          onExpand = _this$props.onExpand,
          author = _this$props.author;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Form, {
        parseFields: parseFields,
        layoutCol: layoutCol,
        author: author,
        rootContext: formContext,
        getForm: saveRef(this, 'form'),
        onSubmit: function onSubmit() {
          return _this4.onSearch.apply(_this4, arguments);
        }
      }), _react.default.createElement(Table, _extends({}, _objectSpread({}, expandedRowKeys ? {
        expandedRowKeys: expandedRowKeys
      } : {}, onExpand ? {
        onExpand: onExpand
      } : {}), {
        author: author,
        deleteStatus: deleteStatus,
        defaultExpandAllRows: defaultExpandAllRows,
        rootContext: tableContext,
        getTable: saveRef(this, 'table'),
        isHeadFixed: isHeadFixed,
        columnsRender: columnsRender,
        tools: renderTools,
        onPaginationChange: function onPaginationChange() {
          return _this4.onPaginationChange.apply(_this4, arguments);
        },
        onSelectionChange: function onSelectionChange() {
          return _this4.onSelectionChange.apply(_this4, arguments);
        },
        onBatchDelete: function onBatchDelete() {
          return _onBatchDelete && _onBatchDelete.apply(void 0, arguments);
        },
        onChange: function onChange() {
          return _this4.onTableChange.apply(_this4, arguments);
        },
        dataSource: dataSource,
        total: total
      })), _react.default.createElement("div", {
        ref: function ref(f) {
          return _this4.getPage(f);
        },
        style: {
          display: 'none'
        }
      }));
    }
  }]);

  return Standard;
}(_react.Component);

var _default = function _default() {
  var Form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    return null;
  };
  var Table = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return null;
  };
  return factoryComponentsConfig(Standard)({
    Form: Form,
    Table: Table,
    defaultExpandAllRows: false,
    isHeadFixed: true,
    tableContext: {},
    formContext: {},
    total: 0,
    layoutCol: 3,
    columnsRender: [],
    defaultFetch: true,
    author: {},
    getPage: function getPage(f) {
      return f;
    },
    parseFields: function parseFields(f) {
      return f;
    },
    renderTools: function renderTools() {
      return [];
    },
    onSelectionChange: function onSelectionChange() {}
  });
};

exports.default = _default;