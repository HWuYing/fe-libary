import React from 'react';
import Ellipsis from '../../Entry/Ellipsis';

export default () => [
  {
    title: '商品名称',
    dataIndex: 'name',
    width: 300,
    render: val => (
      <Ellipsis length={26} tooltip>
        {val}
      </Ellipsis>
    ),
  },
  {
    title: '商品类目',
    dataIndex: 'categoryName',
    width: 100,
  },
  {
    title: '商品品牌',
    dataIndex: 'brandName',
    width: 100,
  },
];
