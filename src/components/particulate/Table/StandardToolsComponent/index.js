import React from 'react';
import { Button, Popconfirm } from 'antd';
import { component, type } from '@particulate';
import TableComponent from '../TableComponent';
import styles from './index.less';

const { factoryComponentsConfig } = component;

class StandardToolsTableComponent extends TableComponent {
  static initialMergeProps = props =>
    TableComponent.initialMergeProps({ ...props }, [
      'onBatchDelete',
      'onSelectionChange',
      'tools',
      'deleteStatus',
      'showDelete',
    ]);

  constructor(props, context) {
    super(props, context);
    this.initial(props);
    this.state = {
      selectedRows: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.initial(nextProps);
  }

  onSelectionChange(selectedRowKeys, selectedRows) {
    super.onSelectionChange(selectedRowKeys, selectedRows);
    this.setState({
      selectedRows,
    });
  }

  onBatchDelete() {
    const { selectedRows } = this.state;
    const { onBatchDelete } = this.props;
    onBatchDelete(selectedRows);
  }

  initial(props) {
    this.mergeProps = this.initialMergeProps(StandardToolsTableComponent.initialMergeProps(props));
  }

  initialMergeProps(mergeProps) {
    return {
      ...mergeProps,
      onSelectionChange: (...arg) => this.onSelectionChange(...arg),
      onBatchDelete: () => this.onBatchDelete(),
    };
  }

  renderTools() {
    const { selectedRows } = this.state;
    const { tools, deleteStatus, showDelete } = this.props;
    const children = [].concat(type(tools) === 'Function' ? tools() : tools);
    if (showDelete || (selectedRows.length !== 0 && deleteStatus === true)) {
      children.push(
        <Popconfirm
          placement="topLeft"
          title="删除选中数据？"
          onConfirm={() => this.onBatchDelete()}
        >
          <Button>批量删除</Button>
        </Popconfirm>
      );
    }
    return <div className={styles.tools}>{
      children.map((c, index) => React.cloneElement(c, { key: c.key || `tools-${index}`}))
    }</div>;
  }

  render() {
    return null;
  }
}

export default StandardToolsTableComponent;

export const factoryStandardToolsTable = (Component, options) => (column, rowSelection, option) =>
  factoryComponentsConfig(Component)({
    rowSelectionConfig: rowSelection,
    columnsConfig: column,
    onBatchDelete: () => {},
    onSelectionChange: () => {},
    tools: () => [],
    deleteStatus: true,
    showDelete: false,
    ...options,
    ...option,
  });
