import React, { Component, Fragment } from 'react';
import { Popover } from 'antd';
import { component } from '@particulate';

const { saveRef } = component;

class CustomPopover extends Component {
  render() {
    return (
      <Fragment>
        <div style={{display: "none"}} ref={saveRef(this, 'container')} />
        <Popover
          getPopupContainer={() => this.container.ownerDocument.body}
          {...this.props}

        />
      </Fragment>
    )
  }
}

export default CustomPopover;
