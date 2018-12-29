import React, { Fragment } from 'react';
import factoryModal, { BaseModal } from '../../BaseModal/container';

class FormModal extends BaseModal{
  onShow(resetForm) {
    if (this.form && resetForm) this.form.resetFields();
    super.onShow();
  }

  onSubmit(fields) {
    const { onOk } = this.props;
    let promise = Promise.resolve();
    if (onOk) {
      if (onOk.then) promise = onOk(fields);
      else promise = promise.then(() => onOk(fields));
    }
    promise.then(() => {
      this.onCancel();
    });
  }

  onOk() {
    if (this.form) this.form.onSubmit();
  }

  getForm(form) {
    const { getForm } = this.props;
    if (getForm) getForm(form);
    this.form = form;
  }

  initial(props) {
    super.initial(props, ['onSubmit']);
  }

  render() {
    const { Model, children } = this.props;
    return this.renderModal(
      <Fragment>
        <Model
          {...this.childProps}
          onSubmit={(...arg) => this.onSubmit(...arg)}
          getForm={(form) => this.getForm(form)}
        />
        {children}
      </Fragment>
    );
  }
}

export default factoryModal(FormModal, {
  onSubmit: () => null,
});
