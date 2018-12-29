"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EditTableComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _particulate = require("@particulate");

var _BaseTable = require("../BaseTable");

var _TableComponent2 = _interopRequireDefault(require("../TableComponent"));

var _FormItem = _interopRequireDefault(require("../../Form/FormItem"));

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factoryComponentsConfig = _particulate.component.factoryComponentsConfig;

var EditTableComponent =
/*#__PURE__*/
function (_TableComponent) {
  _inherits(EditTableComponent, _TableComponent);

  function EditTableComponent(props, context) {
    var _this;

    _classCallCheck(this, EditTableComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditTableComponent).call(this, props, context));

    _this.initial(props);

    return _this;
  }

  _createClass(EditTableComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.saveRef();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var dataSource = this.props.dataSource;
      if (dataSource !== nextProps.dataSource) this.initial(nextProps);
    }
  }, {
    key: "onSourceChange",
    value: function onSourceChange(index, newRecord, oldRecord) {
      var onSourceChange = this.props.onSourceChange;
      onSourceChange(index, newRecord, oldRecord);
    }
  }, {
    key: "initial",
    value: function initial(props) {
      this.mergeProps = _objectSpread({}, EditTableComponent.initialMergeProps(props), {
        columnsConfig: this.disposeTableConfigInfo(_BaseTable.CombinationTable.formatConfig(props.columnsConfig, _objectSpread({}, props), 'formatColumn'))
      });
    }
  }, {
    key: "mergeFiledDecorator",
    value: function mergeFiledDecorator(filedDecorator, record, fieldKey) {
      var mergeFieldDecorator = _objectSpread({}, filedDecorator);

      var valuePropName = mergeFieldDecorator.valuePropName,
          _getValueProps = mergeFieldDecorator.getValueProps;
      var form = this.props.form;

      if (_getValueProps) {
        Object.assign(mergeFieldDecorator, {
          getValueProps: function getValueProps(fieldsValue) {
            var field = _getValueProps(fieldsValue, record, fieldKey) || fieldsValue;
            if (field !== fieldsValue) form.setFieldsValue(_defineProperty({}, fieldKey, field));
            return _defineProperty({}, valuePropName || 'value', field);
          }
        });
      }

      return mergeFieldDecorator;
    }
  }, {
    key: "factoryRenderCell",
    value: function factoryRenderCell(cellConfig) {
      var _this2 = this;

      var _cellConfig$decorator = cellConfig.decorator,
          entry = _cellConfig$decorator.entry,
          _cellConfig$decorator2 = _cellConfig$decorator.filedDecorator,
          filedDecorator = _cellConfig$decorator2 === void 0 ? {} : _cellConfig$decorator2,
          reset = _objectWithoutProperties(_cellConfig$decorator, ["entry", "filedDecorator"]);

      var form = this.props.form;
      var FormItemOption = {
        decorator: _objectSpread({}, reset, {
          entry: _objectSpread({}, entry),
          filedDecorator: {}
        }),
        className: _index.default['cell-item'],
        isLine: undefined,
        form: form
      };
      var decorator = FormItemOption.decorator;
      return function (text, record, index) {
        var fieldKey = "".concat(cellConfig.dataIndex, "-").concat(record.key);
        Object.assign(decorator.entry, {
          onChange: _this2.factoryCellChange(cellConfig.dataIndex, record, index)
        });
        Object.assign(decorator, {
          filedDecorator: _objectSpread({}, _this2.mergeFiledDecorator(filedDecorator, record, fieldKey), {
            key: fieldKey,
            initialValue: record[cellConfig.dataIndex]
          })
        });
        return (0, _FormItem.default)(FormItemOption);
      };
    }
  }, {
    key: "disposeTableConfigInfo",
    value: function disposeTableConfigInfo(columnConfig) {
      var _this3 = this;

      return columnConfig.map(function (item) {
        return Object.assign(item, item.decorator && !item.render ? {
          render: _this3.factoryRenderCell(item)
        } : {});
      });
    }
  }, {
    key: "factoryCellChange",
    value: function factoryCellChange(key, record, index) {
      var _this4 = this;

      var oldRecord = _objectSpread({}, record);

      return function (value) {
        oldRecord = _objectSpread({}, record);

        _this4.onSourceChange(index, Object.assign(record, _defineProperty({}, key, value && value.target ? value.target.value : value)), oldRecord);
      };
    }
  }, {
    key: "saveRef",
    value: function saveRef() {
      var _this$props = this.props,
          getForm = _this$props.getForm,
          form = _this$props.form;
      getForm(form);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return EditTableComponent;
}(_TableComponent2.default);

exports.EditTableComponent = EditTableComponent;

_defineProperty(EditTableComponent, "initialMergeProps", function (props) {
  return _TableComponent2.default.initialMergeProps(_objectSpread({}, props), ['onSourceChange', 'getForm', 'RenderTable']);
});

var _default = function _default(EditTable, options) {
  return function (column) {
    var rowSelectionConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var option = arguments.length > 2 ? arguments[2] : undefined;
    return factoryComponentsConfig(_antd.Form.create()(EditTable))(_objectSpread({
      columnsConfig: column,
      rowSelectionConfig: rowSelectionConfig,
      onSourceChange: function onSourceChange() {},
      getForm: function getForm() {}
    }, options, option));
  };
};

exports.default = _default;