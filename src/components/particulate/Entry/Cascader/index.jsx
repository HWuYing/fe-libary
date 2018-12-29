import React, { Component } from 'react';
import { Cascader } from 'antd';
import { factoryRecursion } from '@tools';
import decision from '@tools/decisionType';
import { component } from '@particulate';

const { clearAttr } = component;

class EntryCascader extends Component {
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
    const { children: childList, titleName = 'title', valueName = 'value' } = props;
    const recursion = factoryRecursion(childList);
    this.mergeProps = Object.assign(
      clearAttr({ ...props }, ['children', 'titleName', 'valueName', 'labelInValue']),
      {
        options: recursion.each((data, pData, hash) =>
          Object.assign(data, {
            label: data[titleName],
            value: data[valueName] && data[valueName].toString(),
            key: data.key ? data.key : hash,
          })
        ),
      }
    );
  }

  onChange = (value, selectedOptions) => {
    const { labelInValue } = this.props;

    if (labelInValue) {
      value = selectedOptions;
    } else value = value.toString();

    if (this.props.onChange) this.props.onChange(value, selectedOptions);
    if (labelInValue && this.props.onLeafChange) this.props.onLeafChange(value[value.length - 1]);
  };

  render() {
    const { labelInValue, valueName } = this.props;
    let { value } = this.props;

    if (value) {
      if (labelInValue) {
        value = value.map(item => item[valueName].toString());
      } else value = value.split(',');
    }

    return (
      <Cascader
        placeholder="请选择"
        {...this.mergeProps}
        value={decision(value) === 'number' ? value.toString() : value}
        onChange={this.onChange}
      />
    );
  }
}

export default EntryCascader;
