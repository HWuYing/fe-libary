"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _particulate = require("@particulate");

var _tools = require("@tools");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var clearAttr = _particulate.component.clearAttr;

var TableComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(TableComponent, _Component);

  function TableComponent() {
    _classCallCheck(this, TableComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableComponent).apply(this, arguments));
  }

  _createClass(TableComponent, [{
    key: "onSelectionChange",
    value: function onSelectionChange(selectedRowKeys, selectedRows) {
      var _this$props$onSelecti = this.props.onSelectionChange,
          onSelectionChange = _this$props$onSelecti === void 0 ? function () {} : _this$props$onSelecti;
      onSelectionChange(selectedRowKeys, selectedRows);
    }
  }, {
    key: "onRowClick",
    value: function onRowClick(record) {
      var _this$props$onRowClic = this.props.onRowClick,
          onRowClick = _this$props$onRowClic === void 0 ? function () {} : _this$props$onRowClic;
      onRowClick(record);
    }
  }, {
    key: "getTable",
    value: function getTable(table) {
      var mergeObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props$getTable = this.props.getTable,
          getTable = _this$props$getTable === void 0 ? function () {} : _this$props$getTable;

      if (table) {
        Object.keys(mergeObj).forEach(function (key) {
          if (!(0, _tools.hasOwnProperty)(table, key)) {
            Object.defineProperty(table, key, {
              value: mergeObj[key]
            });
          }
        });
      }

      this.table = table;
      getTable(table);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return TableComponent;
}(_react.Component);

_defineProperty(TableComponent, "initialMergeProps", function (props, clearArr) {
  return _objectSpread({}, clearAttr(_objectSpread({}, props), _toConsumableArray(clearArr).concat(['getTable'])));
});

var _default = TableComponent;
exports.default = _default;