import React, { Component, Fragment } from 'react';
import { Popconfirm } from 'antd';
import { component } from '@particulate';

const { saveRef } = component;

class CustomPopConfirm extends Component {
  render() {
    return (
      <Fragment>
        <div style={{display: "none"}} ref={saveRef(this, 'container')} />
        <Popconfirm
          getPopupContainer={() => this.container.ownerDocument.body}
          {...this.props}

        />
      </Fragment>
    )
  }
}

export default CustomPopConfirm;
