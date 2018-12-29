import React, { Component } from 'react';
import { component } from '@particulate';
import { PageLayout } from '@layouts';

const { factoryComponentsConfig } = component;

class StandardPage extends Component {
  render() {
    const { Standard, ...reset } = this.props;
    return (
      <PageLayout>
        <Standard {...reset} />
      </PageLayout>
    );
  }
}

export default (Standard, options) =>
  factoryComponentsConfig(StandardPage)({
    Standard,
    ...options,
  });
