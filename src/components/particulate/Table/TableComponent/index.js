import { Component } from 'react';
import { component } from '@particulate';
import { hasOwnProperty } from '@tools';

const { clearAttr } = component;

class TableComponent extends Component {
  static initialMergeProps = (props, clearArr) => {
    return {
      ...clearAttr({ ...props }, [...clearArr, 'getTable']),
    };
  };

  onSelectionChange(selectedRowKeys, selectedRows) {
    const { onSelectionChange = () => {} } = this.props;
    onSelectionChange(selectedRowKeys, selectedRows);
  }

  onRowClick(record) {
    const { onRowClick= () => {}} = this.props;
    onRowClick(record);
  }

  getTable(table, mergeObj = {}) {
    const { getTable = () => {} } = this.props;
    if (table) {
      Object.keys(mergeObj).forEach(key => {
        if (!hasOwnProperty(table, key)) {
          Object.defineProperty(table, key, { value: mergeObj[key] });
        }
      });
    }
    this.table = table;
    getTable(table);
  }

  render() {
    return null;
  }
}

export default TableComponent;
