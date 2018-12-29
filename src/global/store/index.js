import { initReducers, reducer as registryReducer } from '@applyStore';
import * as libAction from './action';
import * as libReduces from './reduces';

export default (reducers, action) => {
  registryReducer('global', initReducers({
    ...libReduces.handlers,
    ...reducers.handlers,
  }, {
    ...libReduces.initialState,
    ...reducers.initialState,
  }));
  return {
    ...action,
    ...libAction,
  };
}

export {
  libAction,
};
