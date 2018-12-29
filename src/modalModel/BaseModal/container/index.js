import React, { Component, Fragment } from 'react';
import { Modal } from 'antd';
import { component } from '@particulate';
import styles from './index.less';

const { saveRef, clearAttr, mergeObjectRef, factoryComponentsConfig } = component;

class BaseModal extends Component{
  static initialMergeProps = (props, clearArr=[]) => {
    return {
      ...clearAttr({ ...props }, [
        ...clearArr,
        'getModal',
        'modalOptions',
        'modalProps',
        'className',
        'Model',
        'onOk',
      ]),
    };
  };

  constructor(props, context) {
    super(props, context);
    this.initial(props);
    this.state = {
      visible: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.initial(nextProps);
  }

  onOk() {
    const { onOk } = this.props;
    if (onOk) onOk();
    this.onCancel();
  }

  onCancel() {
    this.setState({
      visible: false,
    });
  }

  onShow() {
    this.setState({
      visible: true,
    });
  }

  getModal(modal, mergeObj) {
    const { getModal } = this.props;
    getModal(mergeObjectRef(modal, {
      onShow: (...arg) => this.onShow(...arg),
      onCancel: (...arg) => this.onCancel(...arg),
      onOk: (...arg) => this.onOk(...arg),
      ...mergeObj,

    }));
    this.modal = modal;
  }

  initial(props, clientArray) {
    this.childProps = BaseModal.initialMergeProps(props, clientArray);
  }

  renderModal(children) {
    const { modalOptions, className, modalProps } = this.props;
    const { visible } = this.state;
    const { isLimitHeight, ...options } = modalOptions;
    return (
      <Fragment>
        <div style={{display: 'none'}} ref={saveRef(this, 'container')} />
        <Modal
          className={[
            isLimitHeight ? styles['modal-container'] : '',
            className
          ].join(' ')}
          visible={visible}
          ref={(modal) => this.getModal(modal)}
          onCancel={() => this.onCancel()}
          getContainer={() => this.container.ownerDocument.body}
          onOk={() => this.onOk()}
          {...options}
          {...modalProps}
        >
          {React.cloneElement(children)}
        </Modal>
      </Fragment>
    )
  }

  render() {
    return null;
  }
}

export { BaseModal }
export default (Element, option) => (Model, options) => factoryComponentsConfig(Element)({
  Model,
  className: '',
  modalOptions: {
    title:'Title',
    width: 650,
    okText: '确定',
    isLimitHeight: true,
    ...options,
  },
  onOk: () => null,
  getModal: () => ({}),
  ...option,
});
