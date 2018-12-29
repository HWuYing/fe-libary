import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import history from '@util/history';
import promiseMiddleware from './core/promiseMiddleware';
import ApplyProvider from './components/ApplyProvider';
import factoryInitReducers from './core/initReducers';
import factoryReducerEnhancer from './core/reducerEnhancer';

const middleware = [
  thunk,
  routerMiddleware(history),
  promiseMiddleware,
];
const store = createStore(() => {}, compose(applyMiddleware(...middleware)));

const initReducers = factoryInitReducers(store);

const reducerEnhancer = factoryReducerEnhancer(store);

const reducer = (...arg) => {
  reducerEnhancer(...arg);
  return Comment =>  Comment;
};
reducerEnhancer();

export {
  initReducers,
  ApplyProvider,
  reducer,
}

export default store;
