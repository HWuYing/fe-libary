import React, { Fragment } from 'react';
import factoryPage, { BasePage } from '../BasePage';

class BasicPage extends BasePage {
  render() {
    const { Model, children } = this.props;
    return this.renderPage(
      <Fragment>
        <Model
          {...this.childProps}
        />
        {children}
      </Fragment>
    );
  }
}

export default factoryPage(BasicPage);
