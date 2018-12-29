import React,{ Component } from 'react';
import { Tag } from 'antd';
import { type } from '@particulate';
import styles from './index.less';

const { CheckableTag } = Tag;

class CheckableTagGroup extends Component{
  constructor(props, contenx) {
    super(props, contenx);
    this.state = {
      checkedRowKeys: [],
    };
    this.initial(props);
  }

  componentWillReceiveProps(nextProps) {
    const { children, value } = this.props;
    if (nextProps.children !== children || nextProps.value !== value) {
      this.initial(nextProps);
    }
  }

  factoryOnTagChange(source, index) {
    const { labelInValue, onChange=() => null, valueName='value' } = this.props;
    const { childList } = this;
    return (e) => {
      const { checkedRowKeys } = this.state;
      const cursor = checkedRowKeys.indexOf(index);
      let value = [];
      if (e && cursor === -1) checkedRowKeys.push(index);
      if (!e && cursor !== -1) checkedRowKeys.splice(cursor, 1);
      checkedRowKeys.map(i => value.push(childList[i]));
      if (!labelInValue) value = value.map(item => item[valueName]);
      this.setState({
        checkedRowKeys: [...checkedRowKeys],
      }, () => onChange(value));
    }
  }

  initial(props) {
    const { labelName = 'label', valueName = 'value', value: propsValue=[] } = props;
    let childList = props.children;
    const value = Array.isArray(propsValue) ? propsValue : [propsValue];
    const valueClone = value.map(item => {
      if (type(item) === 'Object') return item[valueName].toString();
      return item.toString();
    });
    const checkedRowKeys = [];
    if (type(childList) === 'Object') {
      childList = Object.keys(childList).map(key => ({
        key,
        ...childList[key],
      }));
    }

    this.childList = childList.map((item, index) => {
      const v = item[valueName];
      if (v && valueClone.includes(v.toString())) checkedRowKeys.push(index);
      return {
        label: item[labelName],
        value: v,
        ...item,
      };
    });
    this.state.checkedRowKeys = checkedRowKeys;
  }

  render() {
    const { checkedRowKeys } = this.state;
    return (
      <div className={styles['checkable-tag']}>
        { this.childList.map((item, index) => (
          <CheckableTag
            key={`entry-checkable-tag${index}`}
            onChange={this.factoryOnTagChange(item, index)}
            checked={checkedRowKeys.includes(index)}
          >
            {item.label}
          </CheckableTag>
        ))}
      </div>
    )
  }
}

export default CheckableTagGroup;
