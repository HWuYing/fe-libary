"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _Authorized = require("../../Authorized");

var _particulate = require("@particulate");

var _FormItem = _interopRequireDefault(require("./FormItem"));

var _FomComponent = _interopRequireDefault(require("./FomComponent"));

var _Layout = _interopRequireDefault(require("../Layout"));

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var WarpForm =
/*#__PURE__*/
function (_FormComponent) {
  _inherits(WarpForm, _FormComponent);

  function WarpForm(props, context) {
    var _this;

    _classCallCheck(this, WarpForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WarpForm).call(this, props, context));
    _this.state = {};
    _this.layoutList = [];
    _this.validateFormList = {};
    return _this;
  }

  _createClass(WarpForm, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this2 = this;

      return {
        setValidateForm: function setValidateForm(key, form) {
          _this2.validateFormList[key] = form;
        },
        removeValidateForm: function removeValidateForm(key) {
          delete _this2.validateFormList[key];
        },
        getValidateForm: function getValidateForm(key) {
          return _this2.getValidateForm(key);
        }
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.initial(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props = this.props,
          fieldsConfig = _this$props.fieldsConfig,
          fieldsStore = _this$props.fieldsStore;
      if (fieldsConfig !== nextProps.fieldsConfig || fieldsStore !== nextProps.fieldsStore) this.initial(nextProps);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this3 = this;

      if (e && e.preventDefault) {
        e.preventDefault();
        e.stopPropagation();
      }

      var status = true;
      var _this$props2 = this.props,
          form = _this$props2.form,
          onSubmit = _this$props2.onSubmit,
          parseFields = _this$props2.parseFields;
      this.beforeValidate(form.getFieldsValue()).then(function (res) {
        if (res === false) return;

        _this3.validateFormListFields(function (err, fields) {
          if (err || !status) return;
          onSubmit(_objectSpread({}, fields, parseFields(fields) || {}, res || {}));
        });
      });
    }
  }, {
    key: "getValidateForm",
    value: function getValidateForm(key) {
      return key ? this.validateFormList[key] : this.validateFormList;
    }
  }, {
    key: "setFormFieldsValue",
    value: function setFormFieldsValue() {
      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oldFields = this.form.getFieldsValue();
      var setFieldsMap = {};
      var fieldsKeyList = Object.keys(oldFields);
      var status = Object.keys(fields).reduce(function (status, key) {
        if (fieldsKeyList.includes(key) && fields[key] !== oldFields[key]) {
          Object.assign(setFieldsMap, _defineProperty({}, key, fields[key]));
          return status && false;
        }

        return status && true;
      }, true);
      if (!status) this.form.setFieldsValue(setFieldsMap);
    }
  }, {
    key: "getForm",
    value: function getForm() {
      var _this4 = this;

      var form = this.props.form;

      _get(_getPrototypeOf(WarpForm.prototype), "getForm", this).call(this, form, {
        onSubmit: function onSubmit() {
          return _this4.onSubmit.apply(_this4, arguments);
        },
        setFormFieldsValue: function setFormFieldsValue() {
          return _this4.setFormFieldsValue.apply(_this4, arguments);
        },
        getValidateForm: function getValidateForm(key) {
          return _this4.getValidateForm(key);
        },
        validateFormListFields: function validateFormListFields(fn) {
          return _this4.validateFormListFields(fn);
        }
      });
    }
  }, {
    key: "beforeValidate",
    value: function beforeValidate(fields) {
      var beforeValidate = this.props.beforeValidate;
      return beforeValidate(fields);
    }
  }, {
    key: "validateFormListFields",
    value: function validateFormListFields(fn) {
      var validateFormList = this.validateFormList;
      var form = this.props.form;
      var validateFormListError = {};
      var formListFields = {};
      form.validateFields(function (err, fields) {
        var mergeError = err;
        Object.keys(validateFormList).forEach(function (formKey) {
          var validateForm = validateFormList[formKey];

          if (validateForm && validateForm.validateFields) {
            validateForm.validateFields(function (error) {
              if (error) {
                Object.assign(validateFormListError, _defineProperty({}, formKey, error));
              }

              Object.assign(formListFields, _defineProperty({}, formKey, fields));
            });
          }

          if (Object.keys(validateFormListError).length > 0) {
            mergeError = Object.assign(mergeError || {}, {
              validateFormListError: validateFormListError
            });
          }

          if (Object.keys(formListFields).length > 0) {
            Object.assign(fields, {
              formListFields: formListFields
            });
          }
        });
        fn(mergeError, fields);
      });
    }
  }, {
    key: "initial",
    value: function initial(props) {
      var _this5 = this;

      this.mergeProps = _objectSpread({}, WarpForm.initialMergeProps(props), {
        onSubmit: function onSubmit() {
          return _this5.onSubmit.apply(_this5, arguments);
        }
      });
      this.initialLayout(props);
    }
  }, {
    key: "initialLayout",
    value: function initialLayout(props) {
      var fieldsConfig = props.fieldsConfig,
          rootContext = props.rootContext;
      this.layoutList = WarpForm.formatFieldConfig((0, _particulate.type)(fieldsConfig) === 'Function' ? fieldsConfig(this, rootContext) : fieldsConfig);
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$props3 = this.props,
          form = _this$props3.form,
          fieldsStore = _this$props3.fieldsStore,
          _this$props3$classNam = _this$props3.className,
          className = _this$props3$classNam === void 0 ? '' : _this$props3$classNam,
          children = _this$props3.children,
          layout = _this$props3.layout,
          layoutCol = _this$props3.layoutCol,
          author = _this$props3.author,
          labelStyle = _this$props3.labelStyle;
      var isLine = layout === 'inline';
      var mergeClassName = "".concat(className, " ").concat(isLine ? _index.default['form-item-line'] : '');
      return _react.default.createElement(_antd.Form, _extends({
        autoComplete: "off"
      }, this.mergeProps, {
        className: mergeClassName,
        ref: function ref(f) {
          return _this6.getForm(f);
        }
      }), _react.default.createElement("div", {
        className: "form-aggregate"
      }, this.layoutList.map(function (_ref, index) {
        var _ref$col = _ref.col,
            col = _ref$col === void 0 ? layoutCol : _ref$col,
            _ref$decorator = _ref.decorator,
            decorator = _ref$decorator === void 0 ? [] : _ref$decorator;
        return _react.default.createElement(_Layout.default, {
          key: index.toString(),
          col: col
        }, (0, _Authorized.authorizedFilter)(author, decorator, _this6.context).map(function (item, key) {
          return (0, _FormItem.default)(_objectSpread({
            decorator: item
          }, labelStyle ? {
            labelStyle: labelStyle
          } : {}, item.item, {
            fieldsStore: fieldsStore,
            form: form,
            isLine: isLine,
            key: "".concat(key).concat(item.filedDecorator && item.filedDecorator.key)
          }));
        }));
      })), _react.default.createElement("div", {
        className: "form-slot"
      }, children));
    }
  }]);

  return WarpForm;
}(_FomComponent.default); // export default (config = [], parseFields = fields => fields, option) => {
//   const { onFieldsChange = () => null, onValuesChange = () => null, ...reset } = option || {};
//   return factoryComponentsConfig(
//     Form.create({
//       onValuesChange,
//       onFieldsChange,
//     })(WarpForm)
//   )({
//     fieldsConfig: config,
//     parseFields,
//     layoutCol: 3,
//     rootContext: {},
//     author: {},
//     labelStyle: undefined,
//     onSubmit: fields => fields,
//     beforeValidate: () => Promise.resolve({}),
//     ...reset,
//   });
// };


_defineProperty(WarpForm, "childContextTypes", {
  setValidateForm: _propTypes.default.func,
  removeValidateForm: _propTypes.default.func,
  getValidateForm: _propTypes.default.func
});

_defineProperty(WarpForm, "contextTypes", {
  author: _propTypes.default.object
});

_defineProperty(WarpForm, "initialMergeProps", function (props) {
  return _FomComponent.default.initialMergeProps(props, ['parseFields', 'form', 'fieldsConfig', 'getForm', 'onSubmit', 'layoutCol', 'className', 'fieldsStore', 'rootContext', 'beforeValidate', // 验证之前
  'author', // 权限
  'labelStyle']);
});

_defineProperty(WarpForm, "formatFieldConfig", function (config) {
  var formatConfig = config;
  if ((0, _particulate.type)(config) === 'Function') return config;

  if (Array.isArray(formatConfig)) {
    if (formatConfig.length !== 0) {
      var firstConfig = formatConfig[0];
      var mapKey = Object.keys(firstConfig);

      if (!mapKey.includes('decorator')) {
        formatConfig = [{
          decorator: formatConfig
        }];
      }
    }
  } else formatConfig = [formatConfig];

  formatConfig.forEach(function (itemConfig) {
    itemConfig.decorator.forEach(function (item) {
      if (!(0, _particulate.hasOwnProperty)(item, 'item')) Object.assign(item, {
        item: {
          label: item.label
        }
      });
    });
  });
  return formatConfig;
});

var _default = function _default() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var parseFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (fields) {
    return fields;
  };
  var option = arguments.length > 2 ? arguments[2] : undefined;

  var _ref2 = option || {},
      _ref2$onFieldsChange = _ref2.onFieldsChange,
      onFieldsChange = _ref2$onFieldsChange === void 0 ? function () {
    return null;
  } : _ref2$onFieldsChange,
      _ref2$onValuesChange = _ref2.onValuesChange,
      onValuesChange = _ref2$onValuesChange === void 0 ? function () {
    return null;
  } : _ref2$onValuesChange,
      reset = _objectWithoutProperties(_ref2, ["onFieldsChange", "onValuesChange"]);

  var formCreate = _antd.Form.create({
    onFieldsChange: onFieldsChange,
    onValuesChange: onValuesChange
  })(WarpForm);

  var formConfig = _objectSpread({
    fieldsConfig: config,
    parseFields: parseFields,
    layoutCol: 3,
    rootContext: {},
    author: {},
    labelStyle: undefined,
    onSubmit: function onSubmit(fields) {
      return fields;
    },
    beforeValidate: function beforeValidate() {
      return Promise.resolve({});
    }
  }, reset);

  return factoryComponentsConfig(formCreate)(formConfig);
};

exports.default = _default;