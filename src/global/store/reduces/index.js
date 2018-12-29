import { initReducers } from '@applyStore';
import * as action from '../action';
import { GET_GOODS_BRAND_LIST } from '../action';

const initialState = {
  regionTree: [],
  goodsCategoryThree: [],
  goodsCategoryTree: [],
  goodsBrandList: [],
};

const handlers = {
  [action.GET_CONFIG_REGION](state, { data }) {
    return {
      ...state,
      regionTree: data,
    }
  },
  [action.GET_GOODS_CATEGORY_THREE_LIST](state, { data }) {
    return {
      ...state,
      goodsCategoryThree: data,
    }
  },
  [action.GET_GOODS_CATEGORY_TREE_LIST](state, { data }) {
    return {
      ...state,
      goodsCategoryTree: data,
    }
  },
  [action.GET_GOODS_BRAND_LIST](state, { data }) {
    return {
      ...state,
      goodsBrandList: data,
    }
  },
};

export {
  handlers,
  initialState,
}
