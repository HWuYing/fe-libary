import React, { Fragment } from 'react';
import StandardToolsComponent, { factoryStandardToolsTable } from '../StandardToolsComponent';
import BaseTable from '../BaseTable';

const Table = BaseTable();

class StandardToolsBasicTable extends StandardToolsComponent {
  render() {
    return (
      <Fragment>
        {this.renderTools()}
        <Table
          {...this.mergeProps}
          getTable={table => this.getTable(table)}
        />
      </Fragment>
    );
  }
}

export default factoryStandardToolsTable(StandardToolsBasicTable);
