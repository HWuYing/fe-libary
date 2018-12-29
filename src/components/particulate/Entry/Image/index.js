import React, { Component, Fragment } from 'react';
import decision from '@tools/decisionType';
import { component } from '@particulate';
import { Modal } from 'antd';
import styles from './index.less';

const { saveRef } = component;

class Image extends Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentIndex: -1,
      visible: false,
    };
    this.childrenList = [];
    this.initial(props);
  }

  componentWillReceiveProps(nextProps) {
    const { children, value } = this.props;
    if (nextProps.children !== children || nextProps.value !== value) {
      this.initial(nextProps);
    }
  }

  onCancel() {
    this.setState({
      currentIndex: -1,
      visible: false,
    });
  }

  initial(props) {
    const { children=[], urlName='url', value } = props;
    const childrenList = [];
    const valueChildren = value ? Array.isArray(value) ? value : [value] : [];
    [...children, ...valueChildren].forEach((item) => {
      if (decision(item) === 'object') {
        childrenList.push({
          ...item,
          url: item[urlName],
        });
      } else {
        childrenList.push({
          url: item,
        });
      }
    });
    this.childrenList = childrenList;
  }

  showBigImage(index) {
    this.setState({
      currentIndex: index,
      visible: true,
    });
  }

  renderImageItem(item, index) {
    const { width, height } = this.props;
    const style = { width, height };
    return (
      <div key={`entry-image-${index}`} style={style} className={styles['image-item']}>
        <img src={item.url} alt="图片" />
        <div onClick={() => this.showBigImage(index)} className={styles['event-div']} />
      </div>
    )
  }

  render() {
    const { currentIndex, visible } = this.state;
    const { childrenList } = this;
    const { className='', style = {}, height} = this.props;
    const currentItem = childrenList[currentIndex] && childrenList[currentIndex].url || '';
    return (
      <Fragment>
        <div ref={saveRef(this, 'container')} style={{display: 'none'}} />
        <Modal
          visible={visible}
          footer={null}
          onCancel={() => this.onCancel()}
          getContainer={() => this.container.ownerDocument.body}
        >
          <img
            className={styles['image-modal']}
            src={currentItem}
            alt="图片"
          />
        </Modal>
        <div style={{ height }} className={styles['image-content']}>
          <div
            style={Object.assign(style, {
              height,
            })}
            className={[styles['image-list'], className].join(' ')}
          >
            { childrenList.map((item, index) => this.renderImageItem(item, index)) }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Image;
