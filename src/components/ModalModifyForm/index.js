import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import { createForm } from '../particulate';
import { component } from '@particulate';

const { saveRef } = component;

const ModalSize = {
  sm: 450,
  ml: 600,
  l: 800,
  xl: 1000,
};

export default class ModalModifyForm extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this.formCreate = createForm(props.formConfig);
  }

  componentWillReceiveProps(nextProps) {
    const { dataSource } = nextProps;
    if (dataSource && this.form) this.form.setFormFieldsValue(dataSource);
  }

  handleOk = e => {
    e.preventDefault();
    const self = this;
    this.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { dataSource } = self.props;

        self.props.onSubmit({
          ...dataSource,
          ...values,
        });
      }
    });
  };

  handleCancel = () => {
    this.props.onClose();
  };

  render() {
    const { visible, dataSource, title, rootContext, displaySize = 'l' } = this.props;
    const Form = this.formCreate;

    return (
      <Modal
        destroyOnClose
        visible={visible}
        title={title}
        width={ModalSize[displaySize]}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>
            取消
          </Button>,
          <Button key="submit" type="primary" onClick={this.handleOk}>
            确定
          </Button>,
        ]}
      >
        <Form
          layout="inline"
          getForm={saveRef(this, 'form')}
          fieldsStore={dataSource || {}}
          rootContext={rootContext}
        />
      </Modal>
    );
  }
}

ModalModifyForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  formConfig: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
