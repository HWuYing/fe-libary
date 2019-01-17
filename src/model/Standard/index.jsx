import React, { Component, Fragment } from 'react';
import { component } from '@particulate';
import { PageLayout } from '@layouts';

const { factoryComponentsConfig, saveRef } = component;

class Standard extends Component {
  constructor(props, context) {
    super(props, context);
    this.search = {};
    this.pagination = {};
    this.selectedRows = [];
  }

  componentDidMount() {
    const { defaultFetch } = this.props;
    if (this.table && this.table.getPaginationParams) {
      this.pagination = this.table.getPaginationParams();
    }
    this.search = this.form ? this.form.getFieldsValue() : {};
    if (defaultFetch) this.fetchList();
  }

  getValue(obj) {
    return Object.keys(obj)
      .map(key => obj[key])
      .join(',');
  }

  onTableChange(pagination, filters, sorter, extra) {
    const filtersArg = Object.keys(filters).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = this.getValue(filters[key]);
      return newObj;
    }, {});

    let sorterParams = {};
    if (sorter && sorter.order) {
      const sortOrder = (sorter.order || '').match(/(\S*)end/);

      sorterParams = {
        sortField: sorter.field,
        sortOrder: (sortOrder[1] || 'asc').toUpperCase(),
      };
    }

    this.fetchList({
      ...filtersArg,
      ...sorterParams,
    });
  }

  onPaginationChange(pageNum, pageSize) {
    this.pagination = { pageNum, pageSize };
    this.fetchList();
  }

  onSelectionChange(selectedRowKeys, selectedRows) {
    const { onSelectionChange } = this.props;
    onSelectionChange(selectedRowKeys, selectedRows);
  }

  onSearch(fields) {
    this.search = { ...fields };
    if (this.table && this.table.getPaginationParams) {
      this.table.resetPaginationParams();
    } else {
      this.fetchList();
    }
  }

  getPage() {
    const { getPage } = this.props;
    const { form, table } = this;
    getPage({
      form,
      table,
      fetchList: (...arg) => this.fetchList(...arg),
    });
  }

  fetchList(merge) {
    const { fetchList } = this.props;
    if (fetchList) {
      fetchList({
        ...this.pagination,
        ...this.search,
        ...merge,
      });
      this.table.clearSelectedRowKeys();
    }
  }

  render() {
    const {
      Form,
      Table,
      layoutCol,
      parseFields,
      formContext,
      tableContext,
      renderTools,
      dataSource,
      total,
      defaultExpandAllRows,
      expandedRowKeys,
      deleteStatus,
      isHeadFixed,
      columnsRender,
      onBatchDelete,
      onExpand,
      author,
    } = this.props;
    const mergeProps = author ? { author } : {};
    return (
      <Fragment>
        <Form
          parseFields={parseFields}
          layoutCol={layoutCol}
          rootContext={formContext}
          getForm={saveRef(this, 'form')}
          onSubmit={(...arg) => this.onSearch(...arg)}
          {...mergeProps}
        />
        <Table
          {...{
            ...(expandedRowKeys ? { expandedRowKeys } : {}),
            ...(onExpand ? { onExpand } : {}),
          }}
          deleteStatus={deleteStatus}
          defaultExpandAllRows={defaultExpandAllRows}
          rootContext={tableContext}
          getTable={saveRef(this, 'table')}
          isHeadFixed={isHeadFixed}
          columnsRender={columnsRender}
          tools={renderTools}
          onPaginationChange={(...arg) => this.onPaginationChange(...arg)}
          onSelectionChange={(...arg) => this.onSelectionChange(...arg)}
          onBatchDelete={(...arg) => onBatchDelete && onBatchDelete(...arg)}
          onChange={(...arg) => this.onTableChange(...arg)}
          dataSource={dataSource}
          total={total}
          {...mergeProps}
        />
        <div ref={f => this.getPage(f)} style={{ display: 'none' }} />
      </Fragment>
    );
  }
}

export default (Form = () => null, Table = () => null) =>
  factoryComponentsConfig(Standard)({
    Form,
    Table,
    defaultExpandAllRows: false,
    isHeadFixed: true,
    tableContext: {},
    formContext: {},
    total: 0,
    layoutCol: 3,
    columnsRender: [],
    defaultFetch: true,
    author: undefined,
    getPage: f => f,
    parseFields: f => f,
    renderTools: () => [],
    onSelectionChange: () => {},
  });
