import React, { Component } from 'react';
import { Icon, Upload, Modal } from 'antd';

// // 文档 https://help.aliyun.com/document_detail/64041.html?spm=a2c4g.11186623.6.772.c6CRGD
// // https://blog.csdn.net/hesonggg/article/details/78862641
// const co = require('co');
const OSS = require('ali-oss');
// const DRIVER_LICENSE_PATH = 'http://oss-cn-shenzhen.aliyuncs.com';
const DRIVER_LICENSE_PATH = 'test';

export default class WQUpload extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      // {
      //   uid: -1,
      //   name: 'xxx.png',
      //   status: 'done',
      //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      // },
    ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  beforeUpload = file => {
    const imageObj = {
      uid: file.uid,
      name: file.name,
      status: 'done',
      url: '',
    };

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      UploadToOss(this, DRIVER_LICENSE_PATH, file).then(data => {
        const { requestUrls = [] } = data.res;
        const { fileList } = this.state;
        const imageUrl = requestUrls[0];

        imageObj.url = imageUrl;
        fileList.push(imageObj);
        this.setState({ fileList });
      });
    };
    return false;
  };

  render() {
    const props = {
      accept: 'image/*',
      listType: 'picture-card',
      multiple: false,
      // onRemove: file => {
      //   this.setState(({ imageList }) => {
      //     const index = imageList.indexOf(file);
      //     const newFileList = imageList.slice();
      //     newFileList.splice(index, 1);
      //     return { imageList: newFileList };
      //   });
      // },
      beforeUpload: this.beforeUpload,
      fileList: this.state.fileList,
      onPreview: this.handlePreview,
    };
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <div>
        <Upload {...props}>{fileList.length >= 5 ? null : uploadButton}</Upload>

        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

const client = () => {
  return new OSS.Wrapper({
    endpoint: 'http://oss-cn-shenzhen.aliyuncs.com',
    // region: 'oss-cn-shenzhen',
    accessKeyId: 'LTAIun4CB14qXhBq',
    accessKeySecret: 'WLOLkI30qq822ZdNAimMDQv3sHMUdj',
    bucket: 'testwqmallimage',
  });
};

const uploadPath = (path, file) => {
  return `${path}/${file.name.split('.')[0]}-${file.uid}.${file.type.split('/')[1]}`;
};

const UploadToOss = (self, path, file) => {
  const url = uploadPath(path, file);

  return new Promise((resolve, reject) => {
    client(self)
      .multipartUpload(url, file, {
        // progress: function*(p) {
        //   console.log(`Progress:${p}`);
        // },
        meta: {
          year: 2018,
          people: 'test',
        },
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
