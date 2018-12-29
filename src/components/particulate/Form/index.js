import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { authorizedFilter } from '../../Authorized';
import { component, hasOwnProperty, type } from '@particulate';
import FormItem from './FormItem';
import FormComponent from './FomComponent';
import FormLayout from '../Layout';
import styles from './index.less';

const { factoryComponentsConfig } = component;

class WarpForm extends FormComponent {
  static childContextTypes = {
    setValidateForm: PropTypes.func,
    removeValidateForm: PropTypes.func,
    getValidateForm: PropTypes.func,
  };

  static contextTypes = {
    author: PropTypes.object,
  };

  static initialMergeProps = props =>
    FormComponent.initialMergeProps(props, [
      'parseFields',
      'form',
      'fieldsConfig',
      'getForm',
      'onSubmit',
      'layoutCol',
      'className',
      'fieldsStore',
      'rootContext',
      'beforeValidate', // 验证之前
      'author', // 权限
      'labelStyle',
    ]);

  static formatFieldConfig = config => {
    let formatConfig = config;
    if (type(config) === 'Function') return config;
    if (Array.isArray(formatConfig)) {
      if (formatConfig.length !== 0) {
        const firstConfig = formatConfig[0];
        const mapKey = Object.keys(firstConfig);
        if (!mapKey.includes('decorator')) {
          formatConfig = [{ decorator: formatConfig }];
        }
      }
    } else formatConfig = [formatConfig];
    formatConfig.forEach(itemConfig => {
      itemConfig.decorator.forEach(item => {
        if (!hasOwnProperty(item, 'item'))
          Object.assign(item, {
            item: { label: item.label },
          });
      });
    });
    return formatConfig;
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.layoutList = [];
    this.validateFormList = {};
  }

  getChildContext() {
    return {
      setValidateForm: (key, form) => {
        this.validateFormList[key] = form;
      },
      removeValidateForm: key => {
        delete this.validateFormList[key];
      },
      getValidateForm: key => this.getValidateForm(key),
    };
  }

  componentWillMount() {
    this.initial(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const { fieldsConfig, fieldsStore } = this.props;
    if (fieldsConfig !== nextProps.fieldsConfig || fieldsStore !== nextProps.fieldsStore)
      this.initial(nextProps);
  }

  onSubmit(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
      e.stopPropagation();
    }
    let status = true;
    const { form, onSubmit, parseFields } = this.props;
    this.beforeValidate(form.getFieldsValue()).then(res => {
      if (res === false) return;
      this.validateFormListFields((err, fields) => {
        if (err || !status) return;
        onSubmit({
          ...fields,
          ...(parseFields(fields) || {}),
          ...(res || {}),
        });
      });
    });
  }

  getValidateForm(key) {
    return key ? this.validateFormList[key] : this.validateFormList;
  }

  setFormFieldsValue(fields = {}) {
    const oldFields = this.form.getFieldsValue();
    const setFieldsMap = {};
    const fieldsKeyList = Object.keys(oldFields);
    const status = Object.keys(fields).reduce((status, key) => {
      if (fieldsKeyList.includes(key) && fields[key] !== oldFields[key]) {
        Object.assign(setFieldsMap, { [key]: fields[key] });
        return status && false;
      }
      return status && true;
    }, true);
    if (!status) this.form.setFieldsValue(setFieldsMap);
  }

  getForm() {
    const { form } = this.props;
    super.getForm(form, {
      onSubmit: (...arg) => this.onSubmit(...arg),
      setFormFieldsValue: (...arg) => this.setFormFieldsValue(...arg),
      getValidateForm: key => this.getValidateForm(key),
      validateFormListFields: fn => this.validateFormListFields(fn),
    });
  }

  beforeValidate(fields) {
    const { beforeValidate } = this.props;
    return beforeValidate(fields);
  }

  validateFormListFields(fn) {
    const { validateFormList } = this;
    const { form } = this.props;
    const validateFormListError = {};
    const formListFields = {};

    form.validateFields((err, fields) => {
      let mergeError = err;
      Object.keys(validateFormList).forEach(formKey => {
        const validateForm = validateFormList[formKey];
        if (validateForm && validateForm.validateFields) {
          validateForm.validateFields(error => {
            if (error) {
              Object.assign(validateFormListError, {
                [formKey]: error,
              });
            }
            Object.assign(formListFields, {
              [formKey]: fields,
            });
          });
        }
        if (Object.keys(validateFormListError).length > 0) {
          mergeError = Object.assign(mergeError || {}, {
            validateFormListError,
          });
        }
        if (Object.keys(formListFields).length > 0) {
          Object.assign(fields, {
            formListFields,
          });
        }
      });
      fn(mergeError, fields);
    });
  }

  initial(props) {
    this.mergeProps = {
      ...WarpForm.initialMergeProps(props),
      onSubmit: (...arg) => this.onSubmit(...arg),
    };
    this.initialLayout(props);
  }

  initialLayout(props) {
    const { fieldsConfig, rootContext } = props;
    this.layoutList = WarpForm.formatFieldConfig(
      type(fieldsConfig) === 'Function' ? fieldsConfig(this, rootContext) : fieldsConfig
    );
  }

  render() {
    const {
      form,
      fieldsStore,
      className = '',
      children,
      layout,
      layoutCol,
      author,
      labelStyle,
    } = this.props;
    const isLine = layout === 'inline';
    const mergeClassName = `${className} ${isLine ? styles['form-item-line'] : ''}`;
    return (
      <Form
        autoComplete="off"
        {...this.mergeProps}
        className={mergeClassName}
        ref={f => this.getForm(f)}
      >
        <div className="form-aggregate">
          {this.layoutList.map(({ col = layoutCol, decorator = [] }, index) => (
            <FormLayout key={index.toString()} col={col}>
              {authorizedFilter(author, decorator, this.context).map((item, key) =>
                FormItem({
                  decorator: item,
                  ...(labelStyle ? { labelStyle } : {}),
                  ...item.item,
                  fieldsStore,
                  form,
                  isLine,
                  key: `${key}${item.filedDecorator && item.filedDecorator.key}`,
                })
              )}
            </FormLayout>
          ))}
        </div>
        <div className="form-slot">{children}</div>
      </Form>
    );
  }
}

// export default (config = [], parseFields = fields => fields, option) => {
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

export default (config = [], parseFields = fields => fields, option) => {
  const { onFieldsChange = () => null, onValuesChange = () => null, ...reset } = option || {};

  const formCreate = Form.create({
    onFieldsChange,
    onValuesChange,
  })(WarpForm);

  const formConfig = {
    fieldsConfig: config,
    parseFields,
    layoutCol: 3,
    rootContext: {},
    author: {},
    labelStyle: undefined,
    onSubmit: fields => fields,
    beforeValidate: () => Promise.resolve({}),
    ...reset,
  };

  return factoryComponentsConfig(formCreate)(formConfig);
};
