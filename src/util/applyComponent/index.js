import store from '@applyStore';
import { registryApplyComponent } from './core/cache';
import * as cacheUtil from './core';
import { asyncLoader, beforeFetch } from './middleware';

cacheUtil.applyMiddleware(asyncLoader, beforeFetch);

export * from './core/pages';
export * from './components';
export { registryApplyComponent };

export default function(context, propsStore) {
  return new Promise((resolve, reject) => {
    try {
      cacheUtil.execute(context, resolve, propsStore || store);
    } catch (e) {
      reject(e);
    }
  });
}
