import React, { PureComponent, Fragment } from 'react';
import { Button, Divider } from 'antd';
import { component } from '@particulate';
import factoryEntry from '../basics';

const { saveRef, clearAttr } = component;

class EntryEditableComponent extends PureComponent {
  constructor(props, contenx) {
    super(props, contenx);
    this.config = {};
    this.state = {
      isOpenEdit: false,
      tempValue: undefined,
    };
    this.componentValueContainer = [];
    this.initial(props);
  }

  componentWillReceiveProps(nextProps) {
    this.initial(nextProps);
  }

  initial(props) {
    this.config = Object.assign(
      clearAttr({ ...props }, ['editComponentKey', 'componentStyle', 'displayTextFn'])
    );
  }

  onComponentChange(...arg) {
    const e = arg[0];
    const value = e.target ? e.target.value : e;

    this.componentValueContainer = e.target ? [e.target.value] : arg;
    this.setState({ tempValue: value });
  }

  saveChange() {
    if (this.props.onChange) {
      this.props.onChange(...this.componentValueContainer);
    }
    this.cancleChange();
  }

  cancleChange() {
    this.setState({
      isOpenEdit: false,
      tempValue: undefined,
    });
  }

  openEditor() {
    this.setState({
      isOpenEdit: true,
    });
  }

  render() {
    const { isOpenEdit, tempValue } = this.state;
    // editComponentKey 组件 componentStyle 组建样式 displayTextFn 显示特殊字段
    const {
      target = 'a',
      value,
      style,
      editComponentKey,
      componentStyle,
      displayTextFn,
    } = this.props;

    return (
      <Fragment>
        <span style={{ display: `${!isOpenEdit ? 'none' : 'block'}` }}>
          {factoryEntry(editComponentKey, {
            ...this.config,
            style: {
              width: 'calc(100% - 110px)',
              marginRight: '20px',
              ...(componentStyle || {}),
            },
            value: tempValue || value,
            onChange: (...arg) => this.onComponentChange(...arg),
          })()}
          <Button size="small" type="primary" icon="check" onClick={() => this.saveChange()} />
          <Divider type="vertical" />
          <Button size="small" icon="close" onClick={() => this.cancleChange()} />
        </span>
        <span style={{ display: `${isOpenEdit ? 'none' : 'block'}` }}>
          {React.createElement(target, {
            children: displayTextFn ? displayTextFn(value) : value,
            style: { color: '#333', marginRight: '20px', ...style },
          })}
          <Button size="small" type="primary" icon="edit" onClick={() => this.openEditor()} />
        </span>
      </Fragment>
    );
  }
}

export default EntryEditableComponent;
