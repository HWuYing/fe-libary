"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _particulate = require("@particulate");

var _layouts = require("@layouts");

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var factoryComponentsConfig = _particulate.component.factoryComponentsConfig,
    saveRef = _particulate.component.saveRef;
var TabPane = _antd.Tabs.TabPane;

var StandardPage =
/*#__PURE__*/
function (_Component) {
  _inherits(StandardPage, _Component);

  function StandardPage(props, context) {
    var _this;

    _classCallCheck(this, StandardPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StandardPage).call(this, props, context));
    _this.search = {};
    _this.tables = {};
    _this.currentActiveKey = props.defaultActiveKey;
    return _this;
  }

  _createClass(StandardPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.search = this.form.getFieldsValue();
      this.fetchList();
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
      this.fetchList({
        pageNum: pageNum,
        pageSize: pageSize
      });
    }
  }, {
    key: "onSelectionChange",
    value: function onSelectionChange(selectedRowKeys, selectedRows, key) {
      var onSelectionChange = this.props.onSelectionChange;
      onSelectionChange(selectedRowKeys, selectedRows, key);
    }
  }, {
    key: "onTabsChange",
    value: function onTabsChange(activeKey) {
      var _this3 = this;

      this.currentActiveKey = activeKey;
      var onTabsChange = this.props.onTabsChange;
      var paneList = this.tables["".concat(this.currentActiveKey, "-TABLE")];
      onTabsChange(activeKey);
      if (!paneList) setTimeout(function () {
        return _this3.fetchList();
      }, 0);
    }
  }, {
    key: "onSearch",
    value: function onSearch(fields) {
      this.search = _objectSpread({}, fields);
      this.fetchList();
    }
  }, {
    key: "getPage",
    value: function getPage(form) {
      var _this4 = this;

      var getPage = this.props.getPage;
      getPage({
        form: form,
        tables: this.tables,
        fetchList: function fetchList() {
          return _this4.fetchList.apply(_this4, arguments);
        }
      });
      this.form = form;
    }
  }, {
    key: "getTable",
    value: function getTable(table, key) {
      this.tables["".concat(key, "-TABLE")] = table;
    }
  }, {
    key: "fetchList",
    value: function fetchList(merge) {
      var fetchList = this.props.fetchList;
      var table = this.tables["".concat(this.currentActiveKey, "-TABLE")];

      if (fetchList) {
        fetchList(_objectSpread({}, table.getPaginationParams(), this.search, {
          enumKey: this.currentActiveKey
        }, merge));
        table.clearSelectedRowKeys();
      }
    }
  }, {
    key: "renderPane",
    value: function renderPane() {
      var _this5 = this;

      var _this$props = this.props,
          Table = _this$props.Table,
          tableContext = _this$props.tableContext,
          renderTools = _this$props.renderTools,
          defaultExpandAllRows = _this$props.defaultExpandAllRows,
          isHeadFixed = _this$props.isHeadFixed,
          columnsRender = _this$props.columnsRender,
          _onBatchDelete = _this$props.onBatchDelete,
          ENUM_STATUS = _this$props.ENUM_STATUS,
          storeState = _this$props.storeState,
          deleteStatus = _this$props.deleteStatus;
      return Object.keys(ENUM_STATUS).map(function (key) {
        var item = ENUM_STATUS[key];

        var _ref = storeState[key] || {},
            _ref$list = _ref.list,
            dataSource = _ref$list === void 0 ? [] : _ref$list,
            _ref$total = _ref.total,
            total = _ref$total === void 0 ? 0 : _ref$total;

        return _react.default.createElement(TabPane, {
          tab: item.label,
          key: key
        }, _react.default.createElement(Table, {
          deleteStatus: deleteStatus,
          author: {
            enumKey: key
          },
          defaultExpandAllRows: defaultExpandAllRows,
          rootContext: _objectSpread({
            enumKey: key
          }, tableContext),
          getTable: function getTable(table) {
            return _this5.getTable(table, key);
          },
          isHeadFixed: isHeadFixed,
          columnsRender: columnsRender,
          tools: renderTools,
          onChange: function onChange() {
            return _this5.onTableChange.apply(_this5, arguments);
          },
          onPaginationChange: function onPaginationChange() {
            return _this5.onPaginationChange.apply(_this5, arguments);
          },
          onSelectionChange: function onSelectionChange() {
            for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
              arg[_key] = arguments[_key];
            }

            return _this5.onSelectionChange.apply(_this5, arg.concat([key]));
          },
          onBatchDelete: function onBatchDelete() {
            for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              arg[_key2] = arguments[_key2];
            }

            return _onBatchDelete && _onBatchDelete.apply(void 0, arg.concat([key]));
          },
          dataSource: dataSource,
          total: total
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$props2 = this.props,
          Form = _this$props2.Form,
          layoutCol = _this$props2.layoutCol,
          parseFields = _this$props2.parseFields,
          formContext = _this$props2.formContext,
          renderPageTools = _this$props2.renderPageTools,
          defaultActiveKey = _this$props2.defaultActiveKey;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Form, {
        parseFields: parseFields,
        layoutCol: layoutCol,
        rootContext: formContext,
        getForm: function getForm(f) {
          return _this6.getPage(f);
        },
        onSubmit: function onSubmit() {
          return _this6.onSearch.apply(_this6, arguments);
        }
      }), typeof renderPageTools === 'function' ? renderPageTools() : renderPageTools, _react.default.createElement(_antd.Tabs, {
        className: ['flex-1 flex flex-column', _index.default['plan-main']].join(' '),
        defaultActiveKey: defaultActiveKey,
        onChange: function onChange() {
          return _this6.onTabsChange.apply(_this6, arguments);
        },
        animated: false
      }, this.renderPane()));
    }
  }]);

  return StandardPage;
}(_react.Component);

var _default = function _default(Form, Table, option) {
  return factoryComponentsConfig(StandardPage)(_objectSpread({
    Form: Form,
    Table: Table,
    storeState: {},
    ENUM_STATUS: {},
    defaultExpandAllRows: false,
    isHeadFixed: true,
    tableContext: {},
    formContext: {},
    total: 0,
    layoutCol: 3,
    columnsRender: [],
    getPage: function getPage(f) {
      return f;
    },
    parseFields: function parseFields(f) {
      return f;
    },
    renderPageTools: function renderPageTools() {},
    renderTools: function renderTools() {},
    onSelectionChange: function onSelectionChange() {},
    onTabsChange: function onTabsChange() {}
  }, option));
};

exports.default = _default;