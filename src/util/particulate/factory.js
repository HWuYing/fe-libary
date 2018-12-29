import React, { Component } from 'react';
import { clearAttr, factoryComponentsConfig } from './component';

export function entryComponents(Components, defaultValue = undefined) {
  class EntryComponent extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = { value: defaultValue };
      this.initial(props);
    }

    componentWillReceiveProps(nextProps) {
      const { value } = this.state;
      if (nextProps.value !== value) {
        this.initial(nextProps);
      }
    }

    onChange(e) {
      const { onChange } = this.props;
      if (onChange) onChange(e);
    }

    initial(props) {
      this.initialMergeProps(props);
      this.state.value = props.value;
    }

    initialMergeProps(props) {
      this.mergeProps = {
        ...clearAttr({ ...props }, ['value', 'onChange']),
        onChange: (...arg) => this.onChange(...arg),
      };
    }

    render() {
      const { value } = this.state;
      return <Components value={value} {...this.mergeProps} />;
    }
  }
  return EntryComponent;
}

export function batchEntryMap(ComponentMap) {
  return Object.keys(ComponentMap).reduce(
    (o, key) =>
      Object.assign(o, {
        [key]: factoryComponentsConfig(ComponentMap[key]),
      }),
    {}
  );
}
