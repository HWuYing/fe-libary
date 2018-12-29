import React, { Component } from 'react';
import { registryAsyncModule, getAsyncModule } from '@asyncModule';
import { message } from 'antd';
import moment from 'moment';
/* eslint-disable */

registryAsyncModule('OSS', () => import('ali-oss'));
const getFilePath = () => moment(new Date()).format('YYYYMM');

export default class BaseUpload extends Component {
  constructor(props, contenxt) {
    super(props, contenxt);
    this.maxLength = props.maxLength || 3;
    this.state = {
      fileList: this.produceUrlData(props.value) || [],
    };
    this.init(props);
  }

  componentWillReceiveProps(...arg) {
    this.init(arg[0]);
  }

  onRemove = file => {
    const { fileList } = this.state;
    const newFileList = fileList.filter(item => item.url !== file.url);

    this.setState({ fileList: newFileList });
    this.onFileChange(newFileList);
  };

  onFileChange = fileList => {
    const result = (fileList || []).map(v => v.url);
    if (this.props.onChange) this.props.onChange(result.toString());
  };

  produceUrlData = value => {
    const data = value ? Array.isArray(value) ? value : value.split(',') : [];
    return data.map((v, i) => {
      return {
        uid: `${new Date().toUTCString()}${i}`,
        name: 'xxx.png',
        status: 'done',
        url: v,
      };
    });
  };

  init(props) {
    this.config = { ...(props || {}) };
    if (!props.value) this.state.fileList = [];
    if (props.value && typeof props.value === 'string' || Array.isArray(props.value))
      this.state.fileList = this.produceUrlData(props.value) || [];
    ['maxLength'].forEach(item => delete this.config[item]);
  }

  beforeUpload = file => {
    const imageObj = {
      uid: new Date().toUTCString(),
      name: file.name,
      status: 'done',
      url: '',
    };

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      UploadToOss(this, getFilePath(), file).then(data => {
        const { requestUrls = [] } = data.res;
        const { fileList } = this.state;
        if (requestUrls[0]) {
          imageObj.url = requestUrls[0].split('?')[0];
          const newFileList = [...fileList, imageObj];

          this.setState({ fileList: newFileList });
          this.onFileChange(newFileList);
        } else message.error('上传附近失败！');
      });
    };
    return false;
  };

  render() {
    return null;
  }
}

const client = () => getAsyncModule('OSS').then(m => {
  const oss = m.default;
  return new oss({
    endpoint: 'http://oss-cn-shenzhen.aliyuncs.com',
    // region: 'oss-cn-shenzhen',
    accessKeyId: 'LTAIun4CB14qXhBq',
    accessKeySecret: 'WLOLkI30qq822ZdNAimMDQv3sHMUdj',
    bucket: 'testwqmallimage',
  });
});

const uploadPath = (path, file) => {
  return `${path}/${file.name.split('.')[0]}-${file.uid}.${file.type.split('/')[1]}`;
};

const UploadToOss = (self, path, file) => {
  const url = uploadPath(path, file);
  return client(self).then(oss => {
    return oss.multipartUpload(url, file, {
      meta: {
        year: 2018,
        people: 'test',
      },
    });
  })
};
