import React from 'react';
import { Form } from 'antd';
import { FormItemComponent } from '../../Form/FormItemComponent';
import { authorizedFilter } from '../../../Authorized';
import FormLayout from '../../Layout';
import Entry from '../basics';

const { initialDecorator, initialEntry } = FormItemComponent;
const FormItem = Form.Item;

class MoreEntry extends FormItemComponent{
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: {},
    };
    this.childrenEntry = [];
    this.initial(props);
  }

  componentWillReceiveProps(nextProps) {
    this.initial(nextProps);
  }

  onChange(fields) {
    const { onChange } = this.props;
    if (onChange) onChange(fields);
  }

  factoryFileOnChange(index, key) {
    return (value) => {
      const { form } = this.props;
      const changeValue = value && value.target ? value.target.value : value;
      const { value: stateValue } = this.state;
      const mergeValue = {
        ...stateValue,
        [key || index]: changeValue,
      };
      if (key) form.setFieldsValue({ [key]: changeValue });
      this.setState({
        value: mergeValue,
      }, () => this.onChange(mergeValue));
    }
  }

  initial(props) {
    const { childrenEntry: children=[], form, fieldsStore={} } = props;
    this.childrenEntry = authorizedFilter({}, children).map(({ entry, filedDecorator, layoutSpan, render }, index) => {
      const decoratorNode = initialDecorator(filedDecorator, fieldsStore, form);
      const fileEle = initialEntry(Entry, entry);
      const key = `more-${index}`;
      return (
        <FormItem style={{width: '100%'}} layoutSpan={layoutSpan} key={key}>
          {
            render ? render(entry, decoratorNode, fileEle, form) : decoratorNode(fileEle({
              form,
              key,
              onChange: this.factoryFileOnChange(index, (filedDecorator || {}).key),
            }))
          }
        </FormItem>
      );
    });
    this.state.value = fieldsStore;
  }

  render() {
    const { col=1 } = this.props;
    return (
      <FormLayout col={col} style={{height: '40px'}}>
        { this.childrenEntry }
      </FormLayout>
    );
  }
}

export default MoreEntry;
