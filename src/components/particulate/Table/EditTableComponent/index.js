import React from 'react';
import { Form } from 'antd';
import { component } from '@particulate';
import { CombinationTable } from '../BaseTable';
import TableComponent from '../TableComponent';
import FormItemEntry from '../../Form/FormItem';
import styles from './index.less';

const { factoryComponentsConfig } = component;

class EditTableComponent extends TableComponent {
  static initialMergeProps = props => {
    return TableComponent.initialMergeProps({ ...props }, [
      'onSourceChange',
      'getForm',
      'RenderTable',
    ]);
  };

  constructor(props, context) {
    super(props, context);
    this.initial(props);
  }

  componentDidMount() {
    this.saveRef();
  }

  componentWillReceiveProps(nextProps) {
    const { dataSource } = this.props;
    if (dataSource !== nextProps.dataSource) this.initial(nextProps);
  }

  onSourceChange(index, newRecord, oldRecord) {
    const { onSourceChange } = this.props;
    onSourceChange(index, newRecord, oldRecord);
  }

  initial(props) {
    this.mergeProps = {
      ...EditTableComponent.initialMergeProps(props),
      columnsConfig: this.disposeTableConfigInfo(
        CombinationTable.formatConfig(props.columnsConfig, { ...props }, 'formatColumn')
      ),
    };
  }

  mergeFiledDecorator(filedDecorator, record, fieldKey) {
    const mergeFieldDecorator = { ...filedDecorator };
    const { valuePropName, getValueProps } = mergeFieldDecorator;
    const { form } = this.props;
    if (getValueProps) {
      Object.assign(mergeFieldDecorator, {
        getValueProps: fieldsValue => {
          const field = getValueProps(fieldsValue, record, fieldKey) || fieldsValue;
          if (field !== fieldsValue) form.setFieldsValue({[fieldKey]: field});
          return {[valuePropName || 'value']: field};
        },
      })
    }
    return mergeFieldDecorator;

  }

  factoryRenderCell(cellConfig) {
    const {
      decorator: { entry, filedDecorator={}, ...reset },
    } = cellConfig;
    const { form } = this.props;
    const FormItemOption = {
      decorator:  {
        ...reset,
        entry: { ...entry },
        filedDecorator: {},
      },
      className: styles['cell-item'],
      isLine: undefined,
      form,
    };
    const { decorator } = FormItemOption;
    return (text, record, index) => {
      const fieldKey = `${cellConfig.dataIndex}-${record.key}`;
      Object.assign(decorator.entry, {
        onChange: this.factoryCellChange(cellConfig.dataIndex, record, index),
      });
      Object.assign(decorator, {
        filedDecorator:  {
          ...this.mergeFiledDecorator(filedDecorator, record, fieldKey),
          key: fieldKey,
          initialValue: record[cellConfig.dataIndex],
        }
      });
      return FormItemEntry(FormItemOption);
    }
  }

  disposeTableConfigInfo(columnConfig) {
    return columnConfig.map(item =>
      Object.assign(
        item,
        item.decorator && !item.render
          ? {
              render: this.factoryRenderCell(item),
            }
          : {}
      )
    );
  }

  factoryCellChange(key, record, index) {
    let oldRecord = { ...record };
    return value => {
      oldRecord = { ...record };
      this.onSourceChange(
        index,
        Object.assign(record, {
          [key]: value && value.target ? value.target.value : value,
        }),
        oldRecord
      );
    }
  }

  saveRef() {
    const { getForm, form } = this.props;
    getForm(form);
  }

  render() {
    return null;
  }
}

export { EditTableComponent };

export default (EditTable, options) => (column, rowSelectionConfig=false, option) =>
  factoryComponentsConfig(Form.create()(EditTable))({
    columnsConfig: column,
    rowSelectionConfig,
    onSourceChange: () => {},
    getForm: () => {},
    ...options,
    ...option,
  });
