import { fetch } from '@util';

const { post, get } = fetch;

function dictUrl(type) {
  return `/global/decoration/c/api/dict/1/list/${type}`;
}

function factoryDictService(type) {
  return async (body, context) => {
    return get(dictUrl(type), { body, context });
  }
}

export const getConfigRegion = async (body, context) => {
  return fetch.get('/global/config/s/api/region/1/childListTree', { body, context });
};

// 商品品类列表(第三级)
export const getGoodsCategoryThree = async (body, context) => {
  return fetch.get('/global/good/w/api/category/1/queryThreeList', { body, context });
};

// 商品品类列表(树)
export const getGoodsCategoryTree = async (body, context) => {
  return fetch.get('/global/good/w/api/category/1/queryList', { body, context });
};

// 商品品牌
export const getGoodsBrandList = async (body, context) => {
  return fetch.get('/global/good/w/api/brand/1/queryList', { body, context });
};
