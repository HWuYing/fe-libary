import React from 'react';
import { component } from '@particulate';
import createBasicTable, { CombinationTable } from '../BasicTable';
import HeadFixedBasicTable from '../HeadFixedBasicTable';
import TableComponent from '../TableComponent';

const { factoryComponentsConfig } = component;

const BasicTable = createBasicTable();
const HeadFixedTable = HeadFixedBasicTable();

class BaseTable extends TableComponent {
  static initialMergeProps = props =>
    TableComponent.initialMergeProps({ ...props }, [
      'isHeadFixed',
    ]);

  constructor(props, context) {
    super(props, context);
    this.initial(props);
  }

  componentWillReceiveProps(nextProps) {
    this.initial(nextProps);
  }

  initial(props) {
    this.mergeProps = BaseTable.initialMergeProps(props);
  }

  render() {
    const { isHeadFixed } = this.props;
    const Table = isHeadFixed === true || isHeadFixed === 'true' ? HeadFixedTable : BasicTable;
    return <Table {...this.mergeProps} getTable={table => this.getTable(table)} />;
  }
}

export { CombinationTable };
export default (column, rowSelection, option) =>
  factoryComponentsConfig(BaseTable)({
    rowSelectionConfig: rowSelection,
    columnsConfig: column,
    ...option,
  });

