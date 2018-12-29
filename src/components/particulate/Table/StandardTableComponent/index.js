import React, { Fragment } from 'react';
import { Alert } from 'antd';
import { component } from '@particulate';
import TableComponent from '../TableComponent';
import styles from './index.less';

const { factoryComponentsConfig } = component;

class StandardTableComponent extends TableComponent {
  static initialMergeProps = props =>
    TableComponent.initialMergeProps({ ...props }, ['onSelectionChange', 'getTable']);

  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedRowKeys: [],
    };
    this.selectedRows = [];
    this.initial(props);
  }

  componentWillReceiveProps(nextProps) {
    this.initial(nextProps);
  }

  onSelectionChange(selectedRowKeys, selectedRows) {
    super.onSelectionChange(selectedRowKeys, selectedRows);
    this.selectedRows = selectedRows;
    this.setState({
      selectedRowKeys,
    });
  }

  clearSelectedRowKeys() {
    this.table.clearSelectedRowKeys();
  }

  initial(props) {
    this.mergeProps = this.initialMergeProps(
      StandardTableComponent.initialMergeProps(props),
      props
    );
  }

  initialMergeProps(mergeProps) {
    return {
      ...mergeProps,
      onSelectionChange: (...arg) => this.onSelectionChange(...arg),
    };
  }

  getTable(table) {
    super.getTable(table);
    this.table = table;
  }

  renderAlert() {
    const { selectedRowKeys } = this.state;
    return (
      <Fragment>
        <span>已选择</span>
        <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a>
        <span>项</span>
        <a style={{ marginLeft: '15px' }} onClick={() => this.clearSelectedRowKeys()}>
          清空
        </a>
      </Fragment>
    );
  }

  renderInfo() {
    return (
      <Fragment>
        <Alert className={styles['info-container']} message={this.renderAlert()} type="info" showIcon />
        <div style={{ marginBottom: '10px' }} />
      </Fragment>
    );
  }

  render() {
    return null;
  }
}

export default StandardTableComponent;

export const factoryStandardTableComponent = (Component, options) => (column, rowSelection, option) =>
  factoryComponentsConfig(Component)({
    rowSelectionConfig: rowSelection,
    columnsConfig: column,
    onSelectionChange: () => {},
    getTable: () => {},
    ...options,
    ...option,
  });
