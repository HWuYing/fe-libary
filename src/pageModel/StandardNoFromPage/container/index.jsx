import React, { Component } from 'react';
import { component } from '@particulate';
import { PageLayout } from '@layouts';

const { factoryComponentsConfig, saveRef } = component;

class StandardNoFromPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.pagination = {};
    this.selectedRows = [];
  }

  componentDidMount() {
    const { getPaginationParams } = this.table;
    if (getPaginationParams) this.pagination = getPaginationParams();
    this.fetchList();
  }

  onPaginationChange(pageNum, pageSize) {
    this.pagination = { pageNum, pageSize };
    this.fetchList();
  }

  onSelectionChange(selectedRowKeys, selectedRows) {
    const { onSelectionChange } = this.props;
    onSelectionChange(selectedRowKeys, selectedRows);
  }

  getPage() {
    const { getPage } = this.props;
    const { table } = this;
    getPage({
      table,
      fetchList: (...arg) => this.fetchList(...arg),
    });
  }

  fetchList(merge) {
    const { fetchList } = this.props;
    if (fetchList)
      fetchList({
        ...this.pagination,
        ...merge,
      });
  }

  render() {
    const {
      Table,
      tableContext,
      renderTools,
      dataSource,
      total,
      defaultExpandAllRows,
      isHeadFixed,
      columnsRender,
      deleteStatus,
    } = this.props;
    return (
      <PageLayout ref={f => this.getPage(f)}>
        <Table
          deleteStatus={deleteStatus}
          defaultExpandAllRows={defaultExpandAllRows}
          rootContext={tableContext}
          getTable={saveRef(this, 'table')}
          isHeadFixed={isHeadFixed}
          columnsRender={columnsRender}
          tools={renderTools}
          onPaginationChange={(...arg) => this.onPaginationChange(...arg)}
          onSelectionChange={(...arg) => this.onSelectionChange(...arg)}
          dataSource={dataSource}
          total={total}
        />
      </PageLayout>
    );
  }
}

export default Table =>
  factoryComponentsConfig(StandardNoFromPage)({
    Table,
    defaultExpandAllRows: false,
    isHeadFixed: true,
    tableContext: {},
    total: 0,
    columnsRender: [],
    getPage: f => f,
    renderTools: () => {},
    onSelectionChange: () => {},
  });
