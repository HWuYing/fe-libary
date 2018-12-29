import React from 'react';
import factoryEditTable, { EditTableComponent } from '../EditTableComponent';
import BasicTable from '../BaseTable';
import StandardTable from '../StandardTable';
import PaginationTable from '../PaginationTable';
import PaginationToolsTable from '../PaginationToolsTable';

class EditTable extends EditTableComponent {
  render() {
    const { RenderTable } = this.props;
    return <RenderTable {...this.mergeProps} getTable={table => this.getTable(table)} />;
  }
}

const createStandardEditTable = factoryEditTable(EditTable, {
  RenderTable: StandardTable(),
});

const createPaginationEditTable = factoryEditTable(EditTable, {
  RenderTable: PaginationTable(),
});

const createPaginationToolsEditTable = factoryEditTable(EditTable, {
  RenderTable: PaginationToolsTable(),
});

export default factoryEditTable(EditTable, {
  RenderTable: BasicTable(),
});

export {
  createStandardEditTable,
  createPaginationEditTable,
  createPaginationToolsEditTable,
}
