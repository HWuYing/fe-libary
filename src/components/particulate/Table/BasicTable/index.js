import React from 'react';
import PropTypes from "prop-types";
import { Table } from 'antd';
import { authorizedFilter } from '../../../Authorized';
import { component, type } from '@particulate';
import { factoryRecursion } from '@tools';
import TableComponent from '../TableComponent';

const { factoryComponentsConfig } = component;

class CombinationTable extends TableComponent {
  static contextTypes = {
    author: PropTypes.object,
  };

  static formatConfig = (config, props, formatName) => {
    return CombinationTable[formatName](
      type(config) === 'Function' ? config(props) : config,
      props
    );
  };

  static formatColumn = (columnsConfig, props) => {
    const { columns = [] } = props;
    const columnsMap = columns.reduce(
      (m, i) =>
        Object.assign(m, {
          [i.dataIndex]: i,
        }),
      {}
    );
    const columnsKey = Object.keys(columnsMap);
    return columnsConfig.map(config => ({
      ...config,
      ...(columnsKey.includes(config.dataIndex) ? columnsMap[config.dataIndex] : {}),
    }));
  };

  static formatRowSelection = (rowSelectionConfig, props) => {
    const { rowSelection } = props;
    return {
      ...rowSelectionConfig,
      ...rowSelection,
    };
  };

  static initialMergeProps = props => {
    return TableComponent.initialMergeProps({ ...props }, [
      'columnConfig',
      'column',
      'columnsRender',
      'onSelectionChange',
      'onRowClick',
      'dataSource',
      'rowSelectionConfig',
      'rowSelection',
      'renderColumn',
      'rootContext',
      'author',
      'multiple',
      'rowKey',
      'isDeleteNullLast',
    ]);
  };

  static factoryPropsRender(config) {
    const { props, render } = config;
    if (props) {
      Object.assign(config, {
        render: (text, record, index) => {
          let ObjectCell;
          const children = render ? render(text, record, index) : text;
          if (type(props) === 'Function') {
            ObjectCell = props(children, record, index, text);
          } else {
            ObjectCell = Object.assign({
              children: render ? render(text, record, index) : text,
              props,
            });
          }
          return ObjectCell;
        },
        props: undefined,
      });
    }
    return config;
  }

  static mergeColumn = (formatColumns, props) => {
    const { columnsRender, rootContext } = props;
    const renderKey = Object.keys(columnsRender);
    const mergeColumns = formatColumns.map(config => {
      let { render } = config;
      if (renderKey.includes(config.dataIndex) && !config.render) {
        render = (...arg) => columnsRender[config.dataIndex](...arg, rootContext);
      } else if (config.render) {
        render = (configRender => (...arg) => configRender(...arg, rootContext))(render);
      }
      return Object.assign(
        { ...config },
        CombinationTable.factoryPropsRender({
          ...config,
          render,
        }),
      );
    });
    return mergeColumns;
  };

  static formatDataSource(dataSource = [], rowKey, isDeleteNullLast) {
    const parseInt = Number.parseInt.bind(Number);
    const recursion = factoryRecursion(dataSource, undefined, isDeleteNullLast);
    return recursion.each((data, pData, hash) =>
      Object.assign(
        data,
        !data.key
          ? {
            key: rowKey ? data[rowKey] : `${hash.toString()}${Date.now().toString()}${parseInt(Math.random() * 10000) % 9}`,
          }
          : {}
      )
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      dataSource: CombinationTable.formatDataSource(props.dataSource, props.rowKey, props.isDeleteNullLast),
      selectedRowKeys: [],
    };
    this.selectedRows = [];
    this.initial(props);
  }

  componentWillReceiveProps(nextProps) {
    const { dataSource, columnsConfig, rowSelection, scroll, rowKey='key' } = this.props;
    const updateState = { };
    if (nextProps.columnsConfig !== columnsConfig ||
      nextProps.rowSelection !== rowSelection ||
      nextProps.scroll !== scroll
    ) {
      this.initial(nextProps);
    }
    if (nextProps.dataSource !== dataSource && nextProps.dataSource !== this.state.dataSource) {
      super.onSelectionChange([], []);
      updateState.dataSource = CombinationTable.formatDataSource(nextProps.dataSource, nextProps.rowKey, nextProps.isDeleteNullLast);
    }
    if (this.mergeProps.rowSelection && this.mergeProps.rowSelection.selectedRowKeys) {
      const { selectedRowKeys } = this.mergeProps.rowSelection;
      updateState.selectedRowKeys = selectedRowKeys;
      this.selectedRows = (updateState.dataSource || dataSource || []).filter((item) => selectedRowKeys.includes(item[rowKey]));
    }
    this.setState({
      ...updateState,
    });
  }

  onChange(selectedRowKeys, selectedRows, fn) {
    const { multiple } = this.props;
    let propsSelectedRowKeys = selectedRowKeys;
    let propsSelectedRows = selectedRows;
    if (!multiple && selectedRowKeys.length !== 0) {
      const { selectedRowKeys: stateSelectedRowKeys } = this.state;
      const currentKey = selectedRowKeys.filter(key => !stateSelectedRowKeys.includes(key));
      if (!currentKey[0]) {
        propsSelectedRowKeys = [];
        propsSelectedRows = [];
      } else {
        propsSelectedRowKeys = [currentKey[0]];
        propsSelectedRows = selectedRows.filter(item => item.key === currentKey[0]);
      }
    }
    this.selectedRows = propsSelectedRows;
    this.setState({
      selectedRowKeys: propsSelectedRowKeys,
    }, () => {
      super.onSelectionChange(propsSelectedRowKeys, propsSelectedRows);
      fn && fn(propsSelectedRowKeys, propsSelectedRows);
    });
  }

  onRowClick(record) {
    const { rowSelectionConfig, rowSelection } = this.props;
    if (rowSelection === false || rowSelectionConfig === false) return;
    const { selectedRowKeys } = this.state;
    const { selectedRows } = this;
    const { key } = record;
    const cursor = selectedRowKeys.indexOf(key);
    const isSelect = cursor !== -1;
    const changeRowKeys = [...selectedRowKeys];
    const changeRows = [...selectedRows];
    if (isSelect) {
      changeRowKeys.splice(cursor, 1);
      changeRows.splice(cursor, 1);
    } else {
      changeRowKeys.push(key);
      changeRows.push(record);
    }
    this.onChange([...changeRowKeys], [...changeRows], () => {
      super.onRowClick(record);
    });
  }

  getTable(table) {
    super.getTable(table, {
      clearSelectedRowKeys: (...arg) => this.clearSelectedRowKeys(...arg),
    });
  }

  clearSelectedRowKeys() {
    this.selectedRows = [];
    this.setState({
      selectedRowKeys: [],
    });
    this.onSelectionChange([], []);
  }

  initial(props) {
    const { author, onRow } = props;
    this.mergeProps = {
      ...CombinationTable.initialMergeProps(props),
      columns: authorizedFilter(
        author,
        CombinationTable.mergeColumn(
          CombinationTable.formatConfig(props.columnsConfig, { ...props }, 'formatColumn'),
          props
        ),
        this.context,
      ),
      rowSelection: this.initRowSelection(props),
      onRow: onRow ? onRow : (...arg) => ({
        onClick: () => this.onRowClick(...arg),
      }),
    };

  }

  initRowSelection(props) {
    const { rowSelectionConfig, rowSelection } = props;
    if (rowSelection === false || rowSelectionConfig === false) return null;
    const formatRowSelection = {
      ...CombinationTable.formatConfig(rowSelectionConfig, { ...props }, 'formatRowSelection'),
    };
    formatRowSelection.onChange = (...arg) => this.onChange(...arg);
    return formatRowSelection;
  }

  render() {
    const { dataSource } = this.state;
    const { rowSelection: propsRowSelection } = this.mergeProps;
    const { selectedRowKeys } = this.state;
    let rowSelection = propsRowSelection;
    if (propsRowSelection) {
      rowSelection = Object.assign({}, {
        ...propsRowSelection,
        selectedRowKeys,
      });
    }
    return (
      <Table {...this.mergeProps} rowSelection={rowSelection} dataSource={dataSource} ref={table => this.getTable(table)} />
    );
  }
}

export { CombinationTable };
export default (column = [], rowSelection = {}, option) =>
  factoryComponentsConfig(CombinationTable)({
    columnsConfig: column,
    columns: [],
    rowSelectionConfig: rowSelection,
    rowSelection: null,
    columnsRender: {},
    dataSource: [],
    rootContext: {},
    pagination: false,
    scroll: undefined,
    author: {},
    multiple: true,
    rowKey: undefined,
    isDeleteNullLast: true, // 删除末级不存在的值的对象
    onSelectionChange: () => {},
    onRowClick: () => {},
    getTable: () => {},
    ...option,
  });
