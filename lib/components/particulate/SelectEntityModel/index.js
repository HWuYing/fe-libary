"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _Modal = _interopRequireDefault(require("../../Modal"));

var _SearchForm = _interopRequireDefault(require("../../SearchForm"));

var _pageModel = require("../../../pageModel");

var _StandardTable = _interopRequireDefault(require("../Table/StandardTable"));

var _search = _interopRequireDefault(require("./defaultConfig/search.config"));

var _table = _interopRequireDefault(require("./defaultConfig/table.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Search = _antd.Input.Search;

var SelectEntityModel =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectEntityModel, _Component);

  function SelectEntityModel(props, context) {
    var _this;

    _classCallCheck(this, SelectEntityModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectEntityModel).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (selectedRows) {
      if (_this.props.onChange) _this.props.onChange(selectedRows);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearch", function () {
      _this.setState({
        visible: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOk", function (e) {
      e.stopPropagation();
      var selectedRows = _this.selectedRows;

      if (!selectedRows) {
        _antd.message.error('请选择一条数据！');

        return;
      }

      if (_this.selectOne && selectedRows.length > 1) {
        _antd.message.error('只能选择一条数据！');

        return;
      }

      if (_this.selectOne) {
        _this.showValue = selectedRows[0][_this.showKey];

        _this.setState({
          visible: false,
          value: selectedRows[0]
        });

        _this.onChange(selectedRows[0]);
      } else {
        _this.showValue = selectedRows.map(function (item) {
          return item[_this.showKey];
        }).toString();

        _this.setState({
          visible: false,
          value: selectedRows
        });

        _this.onChange(selectedRows);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCancel", function (e) {
      e.stopPropagation();

      _this.setState({
        visible: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchList", function (arg) {
      var _this$props = _this.props,
          queryParam = _this$props.queryParam,
          loadData = _this$props.loadData;
      loadData(_objectSpread({}, arg, queryParam || {}));
    });

    _this.showValue = props.value;
    _this.state = {
      visible: false
    };
    _this.selectedRows = null;
    var formConfig = props.formConfig,
        tableConfig = props.tableConfig;
    var Form = (0, _SearchForm.default)(formConfig || _search.default);
    var Table = (0, _StandardTable.default)(tableConfig || _table.default);
    _this.page = (0, _pageModel.StandardPage)(Form, Table);

    _this.init(props);

    return _this;
  }

  _createClass(SelectEntityModel, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      this.init(arguments.length <= 0 ? undefined : arguments[0]);
    }
  }, {
    key: "init",
    value: function init(props) {
      var _this2 = this;

      var value = props.value;
      this.selectOne = props.selectOne || false;
      this.showKey = props.showKey || 'name';

      if (value) {
        if (Array.isArray(value)) {
          this.showValue = value.map(function (item) {
            return item[_this2.showKey];
          }).toString();
        } else if (_typeof(value) === 'object') {
          this.showValue = value[this.showKey];
        } else this.showValue = value;
      } else this.showValue = '';
    }
  }, {
    key: "onSelectChange",
    value: function onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRows = selectedRows;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var dataSource = this.props.dataSource;
      var visible = this.state.visible;
      var data = dataSource.data,
          total = dataSource.total;
      var Page = this.page;
      return _react.default.createElement("div", {
        onClick: this.onSearch
      }, _react.default.createElement(Search, {
        value: this.showValue,
        disabled: true,
        onSearch: function onSearch() {
          return _this3.onSearch.apply(_this3, arguments);
        }
      }), _react.default.createElement(_Modal.default, {
        visible: visible,
        title: "\u8BF7\u9009\u62E9",
        width: 800,
        bodyStyle: {
          minHeight: '500px',
          display: 'flex'
        },
        onOk: this.handleOk,
        onCancel: this.handleCancel,
        footer: [_react.default.createElement(_antd.Button, {
          key: "back",
          onClick: this.handleCancel
        }, "\u53D6\u6D88"), _react.default.createElement(_antd.Button, {
          key: "submit",
          type: "primary",
          onClick: this.handleOk
        }, "\u786E\u5B9A")]
      }, _react.default.createElement(Page, {
        dataSource: data,
        total: total // getPage={saveRef(this, 'page')}
        ,
        fetchList: function fetchList() {
          return _this3.fetchList.apply(_this3, arguments);
        },
        onSelectionChange: function onSelectionChange(selectedRowKeys, selectedRows) {
          return _this3.onSelectChange(selectedRowKeys, selectedRows);
        }
      })));
    }
  }]);

  return SelectEntityModel;
}(_react.Component);

var _default = SelectEntityModel;
exports.default = _default;