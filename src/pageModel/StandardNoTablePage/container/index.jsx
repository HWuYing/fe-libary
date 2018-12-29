import React, { Component } from 'react';
import { component } from '@particulate';
import { PageLayout } from '@layouts';

const { factoryComponentsConfig, saveRef } = component;

class StandardPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.search = {};
  }

  componentDidMount() {
    this.search = this.form.getFieldsValue();
    this.fetchList();
  }

  onSearch(fields) {
    this.search = { ...fields };
    this.fetchList();
  }

  getPage() {
    const { getPage } = this.props;
    const { form } = this;
    getPage({
      form,
      fetchList: (...arg) => this.fetchList(...arg),
    });
  }

  fetchList(merge) {
    const { fetchList } = this.props;
    if (fetchList)
      fetchList({
        ...this.search,
        ...merge,
      });
  }

  render() {
    const {
      Form,
      layoutCol,
      parseFields,
      formContext,
      children=[],
    } = this.props;
    return (
      <PageLayout ref={f => this.getPage(f)}>
        <Form
          parseFields={parseFields}
          layoutCol={layoutCol}
          rootContext={formContext}
          getForm={saveRef(this, 'form')}
          onSubmit={(...arg) => this.onSearch(...arg)}
        />
        {children}
      </PageLayout>
    );
  }
}

export default (Form) =>
  factoryComponentsConfig(StandardPage)({
    Form,
    formContext: {},
    layoutCol: 3,
    getPage: f => f,
    parseFields: f => f,
  });
