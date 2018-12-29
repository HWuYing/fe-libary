import { Component } from 'react';
import { component } from '@particulate';
import { hasOwnProperty } from '@tools';

const { clearAttr } = component;

class FormComponent extends Component {
  static initialMergeProps = (props, clearArr) => {
    return clearAttr({ ...props }, [...clearArr, 'getForm']);
  };

  getForm(form, mergeProperties = {}) {
    const { getForm } = this.props;
    this.form = form;
    if (form) {
      Object.keys(mergeProperties).forEach((key) => {
        if (!hasOwnProperty(form, key)) {
          Object.defineProperty(form, key, {
            value: mergeProperties[key],
          });
        }
      });
    }
    if (getForm) getForm(form);
  }

  render() {
    return null;
  }
}

export default FormComponent;
