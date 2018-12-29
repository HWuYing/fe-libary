import { initReducers } from '@applyStore';
import { SET_DATASOURCE } from '../action';

const initialState = {};

const handlers = {
  [SET_DATASOURCE]: (state, { payload: { data, storeKey } }) => {
    return {
      ...state,
      [storeKey]: data,
    };
  },
};

export default initReducers(handlers, initialState);
