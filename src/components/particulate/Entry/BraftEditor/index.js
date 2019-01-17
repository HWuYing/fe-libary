import React, { Component } from 'react';
import { registryAsyncModule, getAsyncModule } from '@asyncModule';
import { message } from 'antd';
import controlsConfig from './config';

import 'braft-editor/dist/index.css';

registryAsyncModule('OSS', () => import('ali-oss'));
registryAsyncModule('braftEditor', () => import('braft-editor'));
const getFilePath = name => `${moment(new Date()).format('YYYYMM')}-${name}`;

export default class BaseBraftEditor extends Component {
  constructor(props, contenxt) {
    super(props, contenxt);
    this.state = {
      braftEditor: null,
    };
    this.init(props);
  }

  componentWillReceiveProps(...arg) {
    this.init(arg[0]);
  }

  async componentDidMount() {
    const mode = await getAsyncModule('braftEditor');

    this.setState({
      braftEditor: mode.default,
    });
  }

  init(props) {
    this.config = { ...(props || {}) };
    ['value', 'onChange'].forEach(item => delete this.config[item]);
  }

  onChange(editorState, others) {
    const { value } = this.props;

    if (value === editorState.toHTML()) return;
    if (this.props.onChange) this.props.onChange(editorState ? editorState.toHTML() : null);
  }

  mediaUpload(param) {
    const file = param.file;
    const fileName = uploadPath(getFilePath(file.name), file);

    client(this).then(oss => {
      oss
        .multipartUpload(fileName, file, {
          meta: {
            year: 2018,
            people: 'test',
          },
          progress: event => {
            param.progress(event * 100);
          },
        })
        .then(res => {
          const { requestUrls = [] } = data.res;
          if (requestUrls[0]) {
            param.success({
              url: requestUrls[0].split('?')[0],
              meta: {
                id: 'xxx',
                title: file.name,
                alt: file.name,
                loop: true, // 指定音视频是否循环播放
                autoPlay: true, // 指定音视频是否自动播放
                controls: true, // 指定音视频是否显示控制栏
                poster: 'http://xxx/xx.png', // 指定视频播放器的封面
              },
            });
          } else {
            param.error({
              msg: res || '上传附件失败！',
            });
          }
        });
    });
  }

  render() {
    const { braftEditor: BraftEditor } = this.state;
    const { value } = this.props;
    const mediaConfig = {
      accepts: {
        image: true,
        video: true,
        audio: true,
      },
      externals: {
        image: true,
        video: true,
      },
      uploadFn: (...arg) => this.mediaUpload(...arg),
    };

    console.log(value);
    if (BraftEditor) console.log(BraftEditor.createEditorState(value));

    return BraftEditor ? (
      <BraftEditor
        style={{
          border: 'soild 1px #f8f8f8',
        }}
        {...this.config}
        controls={controlsConfig}
        media={mediaConfig}
        value={BraftEditor.createEditorState(value || '<p>请输入 </p>')}
        onChange={(...arg) => this.onChange(...arg)}
      />
    ) : null;
  }
}

const client = () =>
  getAsyncModule('OSS').then(m => {
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
