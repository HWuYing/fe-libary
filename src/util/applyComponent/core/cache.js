import React from 'react';
import { matchPath } from 'react-router';
import { hasOwnProperty } from '@tools';
import { createLocation } from 'history';
import ComponentStore from './store';

const storeComponent = {};

function pathGenter(pathname) {
  const pathList = [];
  pathname.match(new RegExp('(\\/[^\\/]*)', 'g')).reduce((a, path) => {
    pathList.push(a + path);
    return a + path;
  }, '');
  return pathList;
}

function pathQuery(pathName) {

}

function getComponent(context, store) {
  const { location } = context;
  const componentList = [];
  if (!location.pathname) return componentList;
  const parseLocation = createLocation(location.pathname);
  const { pathname } = parseLocation;
  const pathList = pathGenter(pathname);
  let match;
  Object.keys(storeComponent).forEach(pathProps => {
    if (pathProps === '/' && pathname !== '/') return;
    pathList.some(pathName => {
      if ((match = matchPath(pathName, pathProps))) {
        componentList.push({
          store: storeComponent[pathProps],
          context: {
            ...context,
            location: {
              ...location,
              ...parseLocation,
            },
            match,
            dispatch: store.dispatch,
            state: store.getState(),
            store,
          },
        });
      }
      return !!match;
    });
  });
  return componentList;
}

function registryApplyComponent(path) {
  return Component => {
    const key = Component.name || path;
    if (!key) throw new Error(`name is undefined`);
    if (hasOwnProperty(storeComponent, key)) return new Error(`${key} existence`);
    storeComponent[path] = new ComponentStore(Component, path);
    return props => <Component {...props} {...storeComponent[path].storeProps} />;
  };
}

export { getComponent, registryApplyComponent };
