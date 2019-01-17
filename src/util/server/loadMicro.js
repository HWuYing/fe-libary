import React,{ Fragment } from 'react';
import { createUtil } from '@mixin/util';
import { typeMold } from '@tools';
import { fetchText } from '@fetch';

const { get } = fetchText;
const microCache = {};
const getMicroCatch = (hashKey) => microCache[hashKey];

export default async (menu, context) => {
  const host = menu.hasKey;
  if (!host) return;
  let html = '';
  try {
    html = await get(`http://${host.replace(/[\\/]*$/, '')}/render${menu.path}`, {
      context,
    });
  } catch (e) {
    const type = typeMold(e);
    html = e instanceof Error ? e.message : type('object') ? JSON.stringify(e) : e;
    console.log(e);
  }

  const Page = () => (
    <div
      className="page-component flex flex-column"
      dangerouslySetInnerHTML={{
        __html: html.replace(/^<div class="page-component flex flex-column">([\S\s]*)<\/div>$/, '$1'),
      }}
    />
  );
  microCache[host] = {
    AppMicro: ({children}) => <Fragment>{children}</Fragment>,
    $util: createUtil(host),
    host,
  };
  return {
    path: menu.path,
    Page,
  };
};

export {
  getMicroCatch,
}
