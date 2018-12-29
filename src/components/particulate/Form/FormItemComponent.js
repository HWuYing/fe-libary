import React, { Component } from 'react';
import { component, type, hasOwnProperty } from '@particulate';

const { factoryComponentsConfig, clearAttr } = component;

class FormItemComponent extends Component {
  static initialEntry = (Entry, entry) => {
    let fileEle;
    if (!entry) fileEle = () => <div />;
    else if (type(entry) === 'Function') {
      fileEle = entry;
    } else if(type(entry) === 'Object') {
      const { key, ...reset } = entry;
      fileEle = Entry(key, {
        ...reset,
      });
    }
    return fileEle;
  };

  static initialDecorator = (filedDecorator, fieldsStore, form) => {
    const { getFieldDecorator } = form;
    let decoratorNode;
    if (!filedDecorator) decoratorNode = fieldEle => fieldEle;
    else {
      const { key } = filedDecorator;
      decoratorNode = getFieldDecorator(key, {
        initialValue: undefined,
        ...filedDecorator,
        ...(hasOwnProperty(fieldsStore, key)
          ? {
            initialValue: type(fieldsStore[key]) === 'Number' ? fieldsStore[key].toString() : fieldsStore[key],
          }
          : {}),
        key: undefined,
      });
    }
    return decoratorNode;
  };

  static initialMergeProps = (props) => {
    const { isLine } = props;
    return clearAttr(
      {
        ...props,
        ...(isLine
          ? {
            labelCol: undefined,
            wrapperCol: undefined,
          }
          : {}),
      },
      [
        'decorator',
        'item',
        'entry',
        'isLine',
        'fieldsStore',
        'filedDecorator',
        'form',
        'labelStyle',
        'layoutSpan',
      ]
    );
  };

  constructor(props, context) {
    super(props, context);
  }


  render() {
    return null;
  }
}

export { FormItemComponent };

export default (Element, options) => factoryComponentsConfig(Element)({
  ...options,
});
