import React, { Component } from 'react';
import { Button, message, Input } from 'antd';
import Modal from '../../Modal';
import SearchForm from '../../SearchForm';
import { StandardPage } from '../../../pageModel';
import createStandardTable from '../Table/StandardTable';
import defaultFormConfig from './defaultConfig/search.config';
import defaultTableConfig from './defaultConfig/table.config';

const { Search } = Input;

class SelectEntityModel extends Component {
  constructor(props, context) {
    super(props, context);
    this.showValue = props.value;
    this.state = {
      visible: false,
    };

    this.selectedRows = null;

    const { formConfig, tableConfig } = props;
    const Form = SearchForm(formConfig || defaultFormConfig);
    const Table = createStandardTable(tableConfig || defaultTableConfig);
    this.page = StandardPage(Form, Table);

    this.init(props);
  }

  componentWillReceiveProps(...arg) {
    this.init(arg[0]);
  }

  onChange = selectedRows => {
    if (this.props.onChange) this.props.onChange(selectedRows);
  };

  onSearch = () => {
    this.setState({
      visible: true,
    });
  };

  init(props) {
    const { value } = props;
    this.selectOne = props.selectOne || false;
    this.showKey = props.showKey || 'name';

    if (value) {
      if (Array.isArray(value)) {
        this.showValue = value.map(item => item[this.showKey]).toString();
      } else if (typeof value === 'object') {
        this.showValue = value[this.showKey];
      } else this.showValue = value;
    } else this.showValue = '';
  }

  handleOk = e => {
    e.stopPropagation();
    const selectedRows = this.selectedRows;

    if (!selectedRows) {
      message.error('请选择一条数据！');
      return;
    }

    if (this.selectOne && selectedRows.length > 1) {
      message.error('只能选择一条数据！');
      return;
    }

    if (this.selectOne) {
      this.showValue = selectedRows[0][this.showKey];
      this.setState({
        visible: false,
        value: selectedRows[0],
      });
      this.onChange(selectedRows[0]);
    } else {
      this.showValue = selectedRows.map(item => item[this.showKey]).toString();
      this.setState({
        visible: false,
        value: selectedRows,
      });
      this.onChange(selectedRows);
    }
  };

  handleCancel = e => {
    e.stopPropagation();
    this.setState({
      visible: false,
    });
  };

  onSelectChange(selectedRowKeys, selectedRows) {
    this.selectedRows = selectedRows;
  }

  fetchList = arg => {
    const { queryParam, loadData } = this.props;
    loadData({ ...arg, ...(queryParam || {}) });
  };

  render() {
    const { dataSource } = this.props;
    const { visible } = this.state;
    const { data, total } = dataSource;

    const Page = this.page;

    return (
      <div onClick={this.onSearch}>
        <Search value={this.showValue} disabled onSearch={(...arg) => this.onSearch(...arg)} />
        <Modal
          visible={visible}
          title="请选择"
          width={800}
          bodyStyle={{ minHeight: '500px', display: 'flex' }}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              确定
            </Button>,
          ]}
        >
          <Page
            dataSource={data}
            total={total}
            // getPage={saveRef(this, 'page')}
            fetchList={(...arg) => this.fetchList(...arg)}
            onSelectionChange={(selectedRowKeys, selectedRows) =>
              this.onSelectChange(selectedRowKeys, selectedRows)
            }
          />
        </Modal>
      </div>
    );
  }
}

export default SelectEntityModel;
