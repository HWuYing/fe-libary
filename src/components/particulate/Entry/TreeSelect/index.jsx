import React, { Component } from 'react';
import { TreeSelect } from 'antd';
import { factoryRecursion } from '@tools';
import decision from '@tools/decisionType';
import { component } from '@particulate';

const { clearAttr } = component;

class EntryTreeSelect extends Component {
  static defaultValue = undefined;
  static defaultTitleName = 'label';
  static defaultValueName = 'value';
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

  onChange(value) {
    const { onChange } = this.props;
    if (onChange) onChange(value);
  }

  initial(props) {
    const {
      children: childList,
      titleName = EntryTreeSelect.defaultTitleName,
      valueName = EntryTreeSelect.defaultValueName,
      onlySelectLeaf = false,
      rowKey='key',
    } = props;
    const recursion = factoryRecursion(childList);
    this.mergeProps = Object.assign(
      clearAttr({ ...props }, ['children', 'titleName', 'valueName', 'onlySelectLeaf', 'rowKey']),
      {
        treeData: recursion.each((data, pData, hash) =>
          Object.assign(data, {
            title: data[titleName],
            value: data[valueName],
            key: data[rowKey] ? data[rowKey] : hash,
            disabled: onlySelectLeaf && data.children && data.children.length > 0,
          })
        ),
      }
    );
  }

  formatValue(value) {
    const {
      labelInValue,
      titleName = EntryTreeSelect.defaultTitleName,
      valueName = EntryTreeSelect.defaultValueName,
    } = this.props;
    let propsValue = value;
    if (labelInValue && value) {
      if (Array.isArray(value)) {
        propsValue = value.map(item => ({
          label: item[titleName],
          value: item[valueName],
          ...item,
        }));
      } else {
        propsValue = {
          label: value[titleName],
          value: value[valueName],
          ...value,
        };
      }
    }
    return decision(propsValue) === 'number' ? propsValue.toString() : propsValue;
  }

  render() {
    const { value } = this.props;
    return (
      <TreeSelect
        {...this.mergeProps}
        value={this.formatValue(value)}
      />
    );
  }
}

export default EntryTreeSelect;
