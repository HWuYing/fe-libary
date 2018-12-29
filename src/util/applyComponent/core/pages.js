import React from 'react';
import { hasOwnProperty } from '@tools';

const pageMap = {};

function registryPage(path, Page) {
  if (hasOwnProperty(pageMap, path)) {
    console.log(new Error(`route path ${path} existence`));
  }
  pageMap[path] = Page;
  return pageMap;
}

const findPage = path => pageMap[path];
const renderRoute = () => {
  return Object.keys(pageMap).sort((a, b) => b.length - a.length).map((path, index) => {
    const Page = pageMap[path];
    const key = `${path}${index}`;
    return <Page path={Page.path} key={key}/>;
  });
};

export { registryPage, renderRoute, findPage };
