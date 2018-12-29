import React, { Fragment } from 'react';
import factoryModal, { BaseModal } from '../../BaseModal/container';

class FormModal extends BaseModal{
  render() {
    const { children } = this.props;
    return this.renderModal(
      <Fragment>
        {children}
      </Fragment>
    );
  }
}

export default factoryModal(FormModal);
