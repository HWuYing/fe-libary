import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux';

class ApplyProvider extends Component {
  render() {
    return (
      <Fragment>
        <Provider {...this.props} />
      </Fragment>
    );
  }
}

export default ApplyProvider;
