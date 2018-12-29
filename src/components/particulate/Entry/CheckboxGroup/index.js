import React, { PureComponent } from 'react';
import { Checkbox } from 'antd';
import { type } from '@particulate';

const CheckboxGroup = Checkbox.Group;
class EntryCheckboxGroup extends PureComponent {
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

  onChange = value => {
    const { labelInValue, children, valueName } = this.props;
    if (labelInValue) {
      const temp = children.filter(item => value.includes(item[valueName].toString()));
      value = temp;
    }
    if (this.props.onChange) this.props.onChange(value);
  };

  initial(props) {
    let childList = props.children;
    const { labelName = 'label', valueName = 'value' } = props;

    this.config = { ...(props || {}) };
    ['valueName', 'labelName', 'value', 'labelInValue'].forEach(item => delete this.config[item]);

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
    const { labelInValue, valueName } = this.props;
    let { value } = this.props;
    if (labelInValue) {
      value = (value || []).map(item => item[valueName].toString());
    }
    return (
      <CheckboxGroup
        value={value}
        {...this.config}
        options={this.childList}
        onChange={this.onChange}
      />
    );
  }
}

export default EntryCheckboxGroup;
