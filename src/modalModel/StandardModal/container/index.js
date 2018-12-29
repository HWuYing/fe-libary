import React from 'react';
import factoryModal, { BaseModal } from '../../BaseModal/container';
import styles from './index.less';

class StandardModal extends BaseModal{
  constructor(props, context) {
    super(props, context);
    this.selectedRows = [];
    this.selectedRowKeys = [];
  }

  componentWillReceiveProps(nextProps) {
    this.initial(nextProps);
  }

  onCancel() {
    this.setState({
      visible: false,
    });
  }

  onShow(resetState=false) {
    if (resetState && this.standard && this.standard.form) this.standard.form.resetFields();
    this.setState({
      visible: true,
    });
  }

  onSelectionChange(selectedRowKeys, selectedRows) {
    this.selectedRows = selectedRows;
    this.selectedRowKeys = selectedRowKeys;
  }

  onOk() {
    const { onOk } = this.props;
    let promise = Promise.resolve();
    if (onOk) {
      const onOkPromise = onOk(this.selectedRowKeys, this.selectedRows);
      if (onOkPromise && onOkPromise.then) promise = onOkPromise;
      promise = Promise.resolve(onOkPromise);
    }
    promise.then((isCancel) => {
      if (isCancel !== false) this.onCancel();
    });
  }

  getStandard(standard) {
    const { getPage } = this.props;
    this.standard = standard;
    getPage(standard);
  }

  render() {
    const { Model, modalOptions: { isLimitHeight } } = this.props;
    return this.renderModal(
      <div className={isLimitHeight ? styles['s-modal-body'] : ''}>
        <Model
          {...this.childProps}
          getPage={(...arg) => this.getStandard(...arg)}
          onSelectionChange={(...arg) => this.onSelectionChange(...arg)}
        />
      </div>
    );
  }
}
export default factoryModal(StandardModal, {
  getPage: () => null,
  onSelectionChange: () => null,
});
