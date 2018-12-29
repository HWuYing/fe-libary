import React, { Fragment } from 'react';
import StandardToolsComponent, { factoryStandardToolsTable } from '../StandardToolsComponent';
import StandardTable from '../StandardTable';

const Table = StandardTable();

class StandardToolsTable extends StandardToolsComponent {
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

export default factoryStandardToolsTable(StandardToolsTable);
