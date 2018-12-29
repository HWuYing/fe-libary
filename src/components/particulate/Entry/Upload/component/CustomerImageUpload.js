import React from 'react';
import { Icon, Upload, Modal, Button } from 'antd';
import BaseUpload from './baseUpload';

class CustomerImageUpload extends BaseUpload {
  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.state,
      previewVisible: false,
      previewImage: '',
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.value !== this.props.value || nextState.previewVisible !== this.state.previewVisible
    );
  }

  // 覆盖默认onchange 一定不能删除
  onChange = ({ file }) => {
    if (typeof file === 'object' && this.props.onChange) this.props.onChange(this.props.value);
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    const { onPreview = () => true } = this.props;
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: onPreview(file),
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const props = {
      accept: 'image/*',
      listType: 'picture-card',
      multiple: true,
      beforeUpload: this.beforeUpload,
      fileList: this.state.fileList,
      onPreview: this.handlePreview,
      onRemove: this.onRemove,
      ...this.config,
      onChange: this.onChange, // 一定不能动
    };
    const { previewVisible, previewImage, fileList } = this.state;
    const { listType, btnText= '上传' } = props;

    let uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">{btnText}</div>
      </div>
    );

    if (listType === 'text' || listType === 'picture') {
      uploadButton = (
        <Button>
          <Icon type="upload" />
          <span>{btnText}</span>
        </Button>
      );
    }
    return (
      <div>
        <Upload {...props}>{fileList.length >= this.maxLength ? null : uploadButton}</Upload>

        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default CustomerImageUpload;
