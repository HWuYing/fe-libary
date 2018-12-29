import React, { Component, Fragment } from 'react';
import { Tabs } from 'antd';
import { component } from '@particulate';
import { PageLayout } from '@layouts';
import styles from './index.less';

const { factoryComponentsConfig, saveRef } = component;
const { TabPane } = Tabs;

class StandardPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.search = {};
    this.tables = {};
    this.currentActiveKey = props.defaultActiveKey;
  }

  componentDidMount() {
    this.search = this.form.getFieldsValue();
    this.fetchList();
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
    this.fetchList({
      pageNum,
      pageSize,
    });
  }

  onSelectionChange(selectedRowKeys, selectedRows, key) {
    const { onSelectionChange } = this.props;
    onSelectionChange(selectedRowKeys, selectedRows, key);
  }

  onTabsChange(activeKey) {
    this.currentActiveKey = activeKey;
    const { onTabsChange } = this.props;
    const paneList = this.tables[`${this.currentActiveKey}-TABLE`];
    onTabsChange(activeKey);
    if (!paneList) setTimeout(() => this.fetchList(), 0);
  }

  onSearch(fields) {
    this.search = { ...fields };
    this.fetchList();
  }

  getPage(form) {
    const { getPage } = this.props;
    getPage({
      form,
      tables: this.tables,
      fetchList: (...arg) => this.fetchList(...arg),
    });
    this.form = form;
  }

  getTable(table, key) {
    this.tables[`${key}-TABLE`] = table;
  }

  fetchList(merge) {
    const { fetchList } = this.props;
    const table = this.tables[`${this.currentActiveKey}-TABLE`];
    if (fetchList) {
      fetchList({
        ...table.getPaginationParams(),
        ...this.search,
        enumKey: this.currentActiveKey,
        ...merge,
      });
      table.clearSelectedRowKeys();
    }
  }

  renderPane() {
    const {
      Table,
      tableContext,
      renderTools,
      defaultExpandAllRows,
      isHeadFixed,
      columnsRender,
      onBatchDelete,
      ENUM_STATUS,
      storeState,
      deleteStatus,
    } = this.props;
    return Object.keys(ENUM_STATUS).map(key => {
      const item = ENUM_STATUS[key];
      const { list: dataSource = [], total = 0 } = storeState[key] || {};
      return (
        <TabPane tab={item.label} key={key}>
          <Table
            deleteStatus={deleteStatus}
            author={{ enumKey: key }}
            defaultExpandAllRows={defaultExpandAllRows}
            rootContext={{ enumKey: key, ...tableContext }}
            getTable={table => this.getTable(table, key)}
            isHeadFixed={isHeadFixed}
            columnsRender={columnsRender}
            tools={renderTools}
            onChange={(...arg) => this.onTableChange(...arg)}
            onPaginationChange={(...arg) => this.onPaginationChange(...arg)}
            onSelectionChange={(...arg) => this.onSelectionChange(...arg, key)}
            onBatchDelete={(...arg) => onBatchDelete && onBatchDelete(...arg, key)}
            dataSource={dataSource}
            total={total}
          />
        </TabPane>
      );
    });
  }

  render() {
    const {
      Form,
      layoutCol,
      parseFields,
      formContext,
      renderPageTools,
      defaultActiveKey,
    } = this.props;
    return (
      <Fragment>
        <Form
          parseFields={parseFields}
          layoutCol={layoutCol}
          rootContext={formContext}
          getForm={f => this.getPage(f)}
          onSubmit={(...arg) => this.onSearch(...arg)}
        />
        {typeof renderPageTools === 'function' ? renderPageTools() : renderPageTools}
        <Tabs
          className={['flex-1 flex flex-column', styles['plan-main']].join(' ')}
          defaultActiveKey={defaultActiveKey}
          onChange={(...arg) => this.onTabsChange(...arg)}
          animated={false}
        >
          {this.renderPane()}
        </Tabs>
      </Fragment>
    );
  }
}

export default (Form, Table, option) =>
  factoryComponentsConfig(StandardPage)({
    Form,
    Table,
    storeState: {},
    ENUM_STATUS: {},
    defaultExpandAllRows: false,
    isHeadFixed: true,
    tableContext: {},
    formContext: {},
    total: 0,
    layoutCol: 3,
    columnsRender: [],
    getPage: f => f,
    parseFields: f => f,
    renderPageTools: () => {},
    renderTools: () => {},
    onSelectionChange: () => {},
    onTabsChange: () => {},
    ...option,
  });
