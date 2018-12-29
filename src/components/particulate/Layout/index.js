import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
/* eslint-disable */
export default props => {
  const { children = [], col, ...reset } = props;
  const rowList = [];
  const row = Math.ceil(children.length / col);
  let splitNode;
  let cursor = 0;
  let remainingSpan;
  let currentSpan;
  let nodeProps;
  while (cursor < row) {
    splitNode = children.slice(cursor * col, (cursor + 1) * col);
    remainingSpan = 24;
    rowList.push(
      <Row {...reset} gutter={20} key={cursor.toString()}>
        {splitNode.map((
          //eslint-disable-line
          node,
          index
        ) => {
          nodeProps = (node && node.props) || {};
          currentSpan = (nodeProps && nodeProps.layoutSpan) || remainingSpan / (col - index);
          remainingSpan -= currentSpan;
          return (
            <Col key={(cursor * 3 + index).toString()} span={currentSpan}>
              {node}
            </Col>
          );
        })}
      </Row>
    );
    cursor += 1;
  }

  return <Fragment>{rowList}</Fragment>;
};
