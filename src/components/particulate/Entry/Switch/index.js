import React, { Component } from 'react';
import { Switch } from 'antd';
import { component } from '@particulate';
/* eslint-disable */

const { clearAttr } = component;

class CustomerSwitch extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: (props.value || props.defaultChecked || 1).toString(),
    };
    this.init(props);
  }

  componentWillReceiveProps(nextProps) {
    this.init(nextProps);
  }

  onChange(checked) {
    const value = checked ? this.defaultChecked : this.defaultNotChecked;
    if (this.props.onChange) this.props.onChange(value);
    this.setState({ value });
  }

  init(props) {
    this.defaultChecked = props.defaultChecked || '1';
    this.defaultNotChecked = props.defaultNotChecked || '2';
    if (props.value) this.state.value = props.value.toString();
    this.mergeProps = clearAttr({ ...props }, [
      'defaultChecked',
      'defaultNotChecked',
    ]);
  }

  render() {
    const { value } = this.state;
    return (
      <Switch
        {...this.mergeProps}
        checked={value.toString() === this.defaultChecked.toString()}
        onChange={(...arg) => this.onChange(...arg)}
      />
    );
  }
}

export default CustomerSwitch;
