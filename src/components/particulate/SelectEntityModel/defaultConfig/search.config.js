export default () => {
  return {
    col: 2,
    decorator: [
      {
        item: {
          label: '商品类目',
        },
        entry: {
          key: 'connectSelect',
          showSearch: true,
          labelName: 'name',
          valueName: 'id',
          placeholder: '请输入',
          serviceApi: 'queryThirdCategory',
          storeKey: 'thirdCategoryEnum',
          mappingTo: 'children',
          filterOption: (input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
        },
        filedDecorator: {
          key: 'categoryId',
        },
      },
      {
        item: {
          label: '商品品牌',
        },
        entry: {
          key: 'connectSelect',
          showSearch: true,
          labelName: 'name',
          valueName: 'id',
          placeholder: '请输入',
          serviceApi: 'queryBrands',
          storeKey: 'brandsEnum',
          mappingTo: 'children',
          filterOption: (input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
        },
        filedDecorator: {
          key: 'brandId',
        },
      },
      {
        item: {
          label: '商品名称',
        },
        entry: {
          key: 'input',
          placeholder: '请输入商品名称',
        },
        filedDecorator: {
          key: 'name',
        },
      },
    ],
  };
};
