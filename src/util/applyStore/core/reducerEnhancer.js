import { combineReducers } from 'redux';
import { hasOwnProperty } from '@tools';
import { routerReducer } from 'react-router-redux';

const reducers = {
  routerReducer,
};

function reducerEnhancer(name, asyncReducers) {
  if (name && asyncReducers && !hasOwnProperty(reducers, name)) {
    Object.assign(reducers, {
      [name]: asyncReducers,
    });
  }
  return combineReducers(reducers);
}

export default store => (name, asyncReducers) =>
  store.replaceReducer(reducerEnhancer(name, asyncReducers));
