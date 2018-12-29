import React, { Component, Fragment } from 'react';
import { particulate } from '@components';
import { createFormModal } from '@modalModel';
import { component } from '@particulate';

const { createForm } = particulate;
const { saveRef } = component;

const Modal = createFormModal(createForm(() => [{
  label: '拒绝理由',
  entry: {
    key: 'textArea',
    rows: 4,
  },
  filedDecorator: {
    key: 'refusal',
    rules:[{required: true, message: '拒绝理由必须填写'}],
  },
}], undefined, {
  layout: 'inline',
  layoutCol: 1,
  labelStyle: { width: '70px' },
}), {
  title: '拒绝',
});

class RejectModal extends Component{
  onShowModal() {
    this.modal.onShow();
  }

  onConfirm(fields) {
    const { onConfirm, refusalKey= 'refusal' } = this.props;
    if(onConfirm) onConfirm({
      [refusalKey]: fields.refusal,
    });
  }

  render() {
    const { children, author, refusalKey, onConfirm, ...reset } = this.props;
    const { props } = children;
    return (
      <Fragment>
        { React.cloneElement(children, {
          ...props,
          author,
          onClick: () => this.onShowModal(),
        }) }
        <Modal
          getModal={saveRef(this, 'modal')}
          onOk={(...arg) => this.onConfirm(...arg)}
          {...reset}
        />
      </Fragment>
    );
  }
}

export default RejectModal;
