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

var StandardNoFromPage =
/*#__PURE__*/
function (_Component) {
  _inherits(StandardNoFromPage, _Component);

  function StandardNoFromPage(props, context) {
    var _this;

    _classCallCheck(this, StandardNoFromPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StandardNoFromPage).call(this, props, context));
    _this.pagination = {};
    _this.selectedRows = [];
    return _this;
  }

  _createClass(StandardNoFromPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var getPaginationParams = this.table.getPaginationParams;
      if (getPaginationParams) this.pagination = getPaginationParams();
      this.fetchList();
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
    key: "getPage",
    value: function getPage() {
      var _this2 = this;

      var getPage = this.props.getPage;
      var table = this.table;
      getPage({
        table: table,
        fetchList: function fetchList() {
          return _this2.fetchList.apply(_this2, arguments);
        }
      });
    }
  }, {
    key: "fetchList",
    value: function fetchList(merge) {
      var fetchList = this.props.fetchList;
      if (fetchList) fetchList(_objectSpread({}, this.pagination, merge));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          Table = _this$props.Table,
          tableContext = _this$props.tableContext,
          renderTools = _this$props.renderTools,
          dataSource = _this$props.dataSource,
          total = _this$props.total,
          defaultExpandAllRows = _this$props.defaultExpandAllRows,
          isHeadFixed = _this$props.isHeadFixed,
          columnsRender = _this$props.columnsRender,
          deleteStatus = _this$props.deleteStatus;
      return _react.default.createElement(_layouts.PageLayout, {
        ref: function ref(f) {
          return _this3.getPage(f);
        }
      }, _react.default.createElement(Table, {
        deleteStatus: deleteStatus,
        defaultExpandAllRows: defaultExpandAllRows,
        rootContext: tableContext,
        getTable: saveRef(this, 'table'),
        isHeadFixed: isHeadFixed,
        columnsRender: columnsRender,
        tools: renderTools,
        onPaginationChange: function onPaginationChange() {
          return _this3.onPaginationChange.apply(_this3, arguments);
        },
        onSelectionChange: function onSelectionChange() {
          return _this3.onSelectionChange.apply(_this3, arguments);
        },
        dataSource: dataSource,
        total: total
      }));
    }
  }]);

  return StandardNoFromPage;
}(_react.Component);

var _default = function _default(Table) {
  return factoryComponentsConfig(StandardNoFromPage)({
    Table: Table,
    defaultExpandAllRows: false,
    isHeadFixed: true,
    tableContext: {},
    total: 0,
    columnsRender: [],
    getPage: function getPage(f) {
      return f;
    },
    renderTools: function renderTools() {},
    onSelectionChange: function onSelectionChange() {}
  });
};

exports.default = _default;