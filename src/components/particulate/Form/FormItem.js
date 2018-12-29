import React from 'react';
import { Form } from 'antd';
import factoryFormItem, { FormItemComponent } from './FormItemComponent';
import { type, hasOwnProperty } from '@particulate';
import Entry from '../Entry';
import styles from './index.less';

const FormItem = Form.Item;

class LayoutFormItem extends FormItemComponent {
  constructor(props, context) {
    super(props, context);
    this.decoratorNode = undefined;
    this.fileEle = undefined;
    this.initial(props);
  }

  componentWillReceiveProps(nextProps) {
    const { decorator, fieldsStore } = this.props;
    const status = decorator !== nextProps.decorator || fieldsStore !== nextProps.fieldsStore;
    this.initial(nextProps, status);
  }

  initial(props, status = true) {
    const { fieldsStore = {}, form, Entry } = props;
    const { entry, filedDecorator } = props.decorator;
    if (status) {
      this.mergeProps = LayoutFormItem.initialMergeProps(props);
      this.fileEle = LayoutFormItem.initialEntry(Entry, entry);
    }
    this.decoratorNode = LayoutFormItem.initialDecorator(filedDecorator, fieldsStore, form);
  }

  renderLabel() {
    const { labelStyle, isLine } = this.props;
    const { label } = this.mergeProps;
    if (!label) return null;
    return !isLine ? (
      label
    ) : (
      <span style={labelStyle} className={styles['label-width']}>
        {label}
      </span>
    );
  }

  render() {
    const {
      form,
      isLine,
      decorator: { render },
    } = this.props;
    const { className: propsClassName, ...reset } = this.mergeProps;
    const className = [propsClassName || '', isLine ? styles['line'] : ''].join(' ');
    return (
      <FormItem {...reset} className={className} label={this.renderLabel()}>
        {render
          ? render(reset, this.decoratorNode, this.fileEle, form)
          : this.decoratorNode(
              this.fileEle({
                form,
              })
            )}
      </FormItem>
    );
  }
}

export { LayoutFormItem };

export default factoryFormItem(LayoutFormItem, {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
  labelStyle: { width: '75px' },
  Entry,
})
