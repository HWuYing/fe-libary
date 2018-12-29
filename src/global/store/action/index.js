import * as service from '../service';

const namespace = 'libGlobal';

export const GET_CONFIG_REGION = `${namespace}-GET_CONFIG_REGION`;
export const GET_GOODS_CATEGORY_THREE_LIST = `${namespace}GET_GOODS_CATEGORY_THREE_LIST`;
export const GET_GOODS_CATEGORY_TREE_LIST = `${namespace}GET_GOODS_CATEGORY_TREE_LIST`;
export const GET_GOODS_BRAND_LIST = `${namespace}GET_GOODS_BRAND_LIST`;

export const getConfigRegion = (body, context) => async dispatch => {
  const { data } = await service.getConfigRegion({parentId: '', ...body}, context);
  dispatch({
    type: GET_CONFIG_REGION,
    data,
  })
};

export const getGoodsCategoryThree = (body, context) => async dispatch => {
  const { data } = await service.getGoodsCategoryThree(body, context);
  dispatch({
    type: GET_GOODS_CATEGORY_THREE_LIST,
    data,
  })
};

export const getGoodsCategoryTree = (body, context) => async dispatch => {
  const { data } = await service.getGoodsCategoryTree(body, context);
  dispatch({
    type: GET_GOODS_CATEGORY_TREE_LIST,
    data,
  })
};

export const getGoodsBrandList = (body, context) => async dispatch => {
  const { data } = await service.getGoodsBrandList(body, context);
  dispatch({
    type: GET_GOODS_BRAND_LIST,
    data,
  })
};
