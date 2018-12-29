import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { component } from '@particulate';
import { authorizedFilter } from '../Authorized';
import FormItemEntry from '../particulate/Form/FormItem';
import FormLayout from '../particulate/Layout';

const { factoryComponentsConfig } = component;

class CascaderFormItem extends PureComponent {
  static contextTypes = {
    author: PropTypes.object,
  };

  // static propTypes = {
  //   optionConfig: PropTypes.object.isRequired,
  // };

  constructor(props, context) {
    super(props, context);

    this.renderConfig = {};
    this.init(props);
  }

  componentWillReceiveProps(nextProps) {
    this.init(nextProps);
  }

  init(props) {
    const { form, optionConfig, ownKey, fieldsStore } = props;
    const fields = form.getFieldsValue();

    if (fieldsStore && fieldsStore[ownKey]) {
      this.renderConfig = optionConfig[fieldsStore[ownKey].toString()] || {};
    } else if (fields && fields[ownKey]) {
      this.renderConfig = optionConfig[fields[ownKey].toString()] || {};
    }
  }

  render() {
    const { form, ownConfig, author = {}, fieldsStore } = this.props;
    const { config, col = 12, display = 'block' } = this.renderConfig;

    if (!ownConfig) return FormItemEntry({ ...config, form, isLine: true, fieldsStore });

    if (!config)
      return FormItemEntry({
        label: ownConfig.label,
        decorator: ownConfig,
        fieldsStore,
        isLine: true,
        form,
      });

    const { decorator, col: colItem } = config;
    if (display === 'inline') {
      return (
        <Row gutter={24}>
          <Col span={24 - Number(col)}>
            {FormItemEntry({
              label: ownConfig.label,
              decorator: ownConfig,
              isLine: true,
              fieldsStore,
              form,
            })}
          </Col>
          <Col span={col}>
            {
              <FormLayout col={colItem}>
                {authorizedFilter(author, decorator, this.context).map((item, key) =>
                  FormItemEntry({
                    label: item.label,
                    decorator: item,
                    form,
                    fieldsStore,
                    isLine: true,
                    key: `${key}${item.filedDecorator.key}`,
                  })
                )}
              </FormLayout>
            }
          </Col>
        </Row>
      );
    } else {
      return (
        <Fragment>
          {FormItemEntry({
            label: ownConfig.label,
            decorator: ownConfig,
            fieldsStore,
            isLine: true,
            form,
          })}
          {
            <FormLayout col={colItem}>
              {authorizedFilter(author, decorator, this.context).map((item, key) =>
                FormItemEntry({
                  label: item.label,
                  decorator: item,
                  form,
                  fieldsStore,
                  isLine: true,
                  key: `${key}${item.filedDecorator.key}`,
                })
              )}
            </FormLayout>
          }
        </Fragment>
      );
    }
  }
}

export default factoryComponentsConfig(CascaderFormItem)();
