import React from 'react';
import { Button } from 'antd';
import { createForm, FormComponent } from '../particulate';
import { component } from '@particulate';
import styles from './index.less';

const { factoryComponentsConfig } = component;
const Form = createForm();

class SearchForm extends FormComponent {
  constructor(props, context) {
    super(props, context);
    this.initial(props);
  }

  componentWillReceiveProps(nextProps) {
    this.initial(nextProps);
  }

  initial(props) {
    this.mergeProps = FormComponent.initialMergeProps(props, ['children']);
  }

  resetFields() {
    this.form.resetFields();
    this.form.onSubmit();
  }

  render() {
    return (
      <Form
        className={styles['search-form']}
        layout="inline"
        {...this.mergeProps}
        getForm={f => this.getForm(f)}
      >
        <Button type="primary" htmlType="submit">
          查询
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={() => this.resetFields()}>
          重置
        </Button>
      </Form>
    );
  }
}

export default (config, option) =>
  factoryComponentsConfig(SearchForm)({
    fieldsConfig: config,
    getForm: () => {},
    parseFields: fields => fields,
    labelStyle: {},
    ...option,
  });
