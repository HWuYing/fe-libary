import React, { Fragment } from 'react';
import { Pagination } from 'antd';
import { component } from '@particulate';
import TableComponent from '../TableComponent';
import BasicTable from '../BaseTable';
import styles from './index.less';

const { factoryComponentsConfig } = component;
const Table = BasicTable();
class PaginationTable extends TableComponent {
  static initialMergeProps = props => {
    return TableComponent.initialMergeProps({ ...props }, [
      'pagination',
      'total',
      'current',
      'pageSize',
      'showTotal',
      'onPaginationChange',
    ]);
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      current: 1,
      pageSize: 20,
    };
    this.initial(props);
  }

  componentWillReceiveProps(nextProps) {
    this.initial(nextProps);
  }

  getPaginationParams() {
    const { pageSize, current } = this.state;
    return {
      pageSize,
      pageNum: current,
    };
  }

  setPaginationParams(pageNum, pageSize) {
    this.onChange(pageNum, pageSize);
  }

  resetPaginationParams() {
    const {
      current,
      pageSize,
      pagination: { defaultPageSize, defaultCurrent },
    } = this.props;
    this.setPaginationParams(current || defaultCurrent, pageSize || defaultPageSize);
  }

  getTable(table) {
    super.getTable(table, {
      getPaginationParams: (...arg) => this.getPaginationParams(...arg),
      setPaginationParams: (...arg) => this.setPaginationParams(...arg),
      resetPaginationParams: (...arg) => this.resetPaginationParams(...arg),
    });
  }

  onChange(current, pageSize) {
    const { onPaginationChange } = this.props;
    onPaginationChange(current, pageSize);
    this.setState({
      current,
      pageSize,
    });
  }

  onShowSizeChange(current, pageSize) {
    this.onChange(current, pageSize);
  }

  initial(props) {
    const {
      current,
      pageSize,
      pagination: { defaultPageSize, defaultCurrent },
    } = props;
    this.mergeProps = PaginationTable.initialMergeProps(props);
    this.paginationProps = this.initPaginationProps(props);
    this.state.current = current || this.state.current || defaultCurrent;
    this.state.pageSize = pageSize || this.state.pageSize || defaultPageSize;
  }

  initPaginationProps(props) {
    const { pagination, pageSize, total, showTotal } = props;
    const paginationProps = {
      ...pagination,
      pageSize,
      total: Number(total || 0),
      showTotal,
      onChange: (...arg) => this.onChange(...arg),
      onShowSizeChange: (...arg) => this.onShowSizeChange(...arg),
    };
    return paginationProps;
  }



  render() {
    return (
      <Fragment>
        <Table {...this.mergeProps} getTable={table => this.getTable(table)} />
        <div className={styles['pagination-warp']}>
          <Pagination {...this.paginationProps} {...this.state} />
        </div>
      </Fragment>
    );
  }
}

export default (column, rowSelection, option) =>
  factoryComponentsConfig(PaginationTable)({
    rowSelectionConfig: rowSelection,
    columnsConfig: column,
    total: 0,
    showTotal: total => `共${total}条`,
    onPaginationChange: () => {},
    pagination: {
      showQuickJumper: true,
      showSizeChanger: true,
      defaultCurrent: 1,
      defaultPageSize: 20,
      pageSizeOptions: ['10', '20', '40', '100', '200'],
    },
    ...option,
  });
