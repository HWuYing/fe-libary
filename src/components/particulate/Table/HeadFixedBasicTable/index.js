import React from 'react';
import ReactDOM from 'react-dom';
import { component } from '@particulate';
import { getClientInfo } from '../../../../util/tools/decisionObject';
import BasicTable from '../BasicTable';
import TableComponent from '../TableComponent';
import styles from './index.less';

const { factoryComponentsConfig, saveRef } = component;
const Table = BasicTable();

class HeadFixedBasicTable extends TableComponent {
  static initialMergeProps = props => {
    return TableComponent.initialMergeProps({ ...props }, [
      'height',
    ]);
  };

  constructor(props, context) {
    super(props, context);
    this.windowResize = this.factoryWindowResize();
    this.__isMounted__ = false;
    this.state = {
      scroll: {},
    };
    this.initial(props);
  }

  componentWillReceiveProps(nextProps) {
    // const { height } = this.props;
    this.initial(nextProps);
    setTimeout(() => this.resetScroll(nextProps));
  }

  componentDidMount() {
    this.__isMounted__ = true;
    this.resetScroll(this.props);
    const defaultWindow = this.parentElement.ownerDocument.defaultView;
    defaultWindow.addEventListener('resize', this.windowResize, false);
  }

  componentWillUnmount() {
    this.__isMounted__ = false;
    const defaultWindow = this.parentElement.ownerDocument.defaultView;
    defaultWindow.removeEventListener('resize', this.windowResize);
  }

  getTable(table) {
    super.getTable(table);
    this.table = table;
  }

  factoryWindowResize() {
    return () => this.resetScroll(this.props);
  }

  resetScroll(props) {
    if (!this.__isMounted__ || !this.table) return;
    const { height: propsHeight } = props;
    const height = propsHeight || this.parentElement.clientHeight;
    const headerHeight = getClientInfo(
      ReactDOM.findDOMNode(this.table).getElementsByClassName('ant-table-header')[0]
    ).height || 74;
    this.setState({
      scroll: { y: height - (headerHeight - 20) },
    });
  }

  initial(props) {
    this.mergeProps = {
      ...HeadFixedBasicTable.initialMergeProps(props),
      getTable: table => this.getTable(table),
    };
  }

  render() {
    const { scroll } = this.state;
    const { defaultExpandAllRows } = this.props;
    return (
      <div className={styles['head-fixed-table']} ref={saveRef(this, 'parentElement')}>
        <Table
          key={this.__isMounted__ && defaultExpandAllRows ? 'before' : 'mounted'}
          {...this.mergeProps}
          getTable={(table) => this.getTable(table)}
          scroll={scroll}
        />
      </div>
    )
  }
}


export default (column, rowSelection, option) =>
  factoryComponentsConfig(HeadFixedBasicTable)({
    rowSelectionConfig: rowSelection,
    columnsConfig: column,
    height: undefined,
    ...option,
  });
