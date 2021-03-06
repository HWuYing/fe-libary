import React, { Component, Fragment } from 'react';
import { Modal } from 'antd';
import { component } from '@particulate';

const { saveRef } = component;

class CustomModal extends Component {
  render() {
    return (
      <Fragment>
        <div style={{display: "none"}} ref={saveRef(this, 'container')} />
        <Modal
          getPopupContainer={() => this.container.ownerDocument.body}
          {...this.props}

        />
      </Fragment>
    )
  }
}

export default CustomModal;
