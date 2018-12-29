import React, { Component } from 'react';
import { Select } from 'antd';
import { type } from '@particulate';

const { Option } = Select;
class EntrySelect extends Component {
  static defaultValue = undefined;

  constructor(props, contenx) {
    super(props, contenx);
    this.initial(props);
  }

  componentWillReceiveProps(nextProps) {
    const { children } = this.props;
    if (nextProps.children !== children) {
      this.initial(nextProps);
    }
  }

  initial(props) {
    const { labelName = 'label', valueName = 'value' } = props;
    let childList = props.children;
    if (type(childList) === 'Object') {
      childList = Object.keys(childList).map(key => ({
        key,
        ...childList[key],
      }));
    }

    this.childList = childList.map(item => {
      return {
        label: item[labelName],
        value: item[valueName],
        ...item,
      };
    });
  }

  render() {
    const { value, labelInValue, mode, labelName, valueName } = this.props;
    let current = value;
    if (value && !mode) current = value.toString();
    if (value && labelInValue) {
      if (type(value) === 'Array') {
        current = value.map(item => {
          return {
            ...item,
            key: item.key || item[valueName],
            label: item.label || item[labelName],
          };
        });
      } else
        current = {
          ...value,
          key: value.key || value[valueName],
          label: value.label || value[labelName],
        };
    }

    return (
      <Select {...this.props} value={current}>
        {this.childList.map(item => (
          <Option value={item.value.toString()} key={(item.key || item.value).toString()}>
            {item.label}
          </Option>
        ))}
      </Select>
    );
  }
}

export default EntrySelect;
