import React, { Component } from 'react';
import { Radio } from 'antd';
import { type } from '@particulate';

const RadioGroup = Radio.Group;
class EntryRadioGroup extends Component {
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
    let childList = props.children;
    const { labelName = 'label', valueName = 'value' } = props;
    if (type(childList) === 'Object') {
      childList = Object.keys(childList).map(key => ({
        key,
        ...childList[key],
      }));
    }
    this.childList = childList.map(item =>
      Object.assign(item, {
        label: item[labelName],
        value: item[valueName],
      })
    );
  }

  render() {
    return (
      <RadioGroup {...this.props} value={(this.props.value || '').toString()}>
        {this.childList.map(item => (
          <Radio value={item.value.toString()} key={(item.key || item.value).toString()}>
            {item.label}
          </Radio>
        ))}
      </RadioGroup>
    );
  }
}

export default EntryRadioGroup;
