import React, { Fragment } from 'react';
import StandardTableComponent, { factoryStandardTableComponent } from '../StandardTableComponent';
import PaginationTable from '../PaginationTable';

const Table = PaginationTable();

class StandardTable extends StandardTableComponent {
  render() {
    const rowSelection = {
      ...this.state,
    };
    return (
      <Fragment>
        {this.renderInfo()}
        <Table
          rowSelection={rowSelection}
          {...this.mergeProps}
          getTable={table => this.getTable(table)}
        />
      </Fragment>
    );
  }
}

export default factoryStandardTableComponent(StandardTable);
