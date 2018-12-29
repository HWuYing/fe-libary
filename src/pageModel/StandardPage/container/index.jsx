import React, { Component } from 'react';
import { component } from '@particulate';
import { PageLayout } from '@layouts';
import { createStandard } from '../../../model';

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

export default (Form, Table) =>
  factoryComponentsConfig(StandardPage)({
    Standard: createStandard(Form, Table),
  });
