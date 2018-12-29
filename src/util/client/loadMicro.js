import React, { Fragment } from 'react';
import fetch from '@fetch';
import { createUtil } from '@mixin/util';
import { ApplyProvider } from '@applyStore';
import { hasOwnProperty } from '@tools';
import { typeMold } from '@tools';
import {getEventBus} from '@mixin';

const $eventbus = getEventBus();
const mixin = require('@mixin');
const applyStore = require('@applyStore');
const applyComponent = require('@applyComponent');
const ReactRequire = require('react');
const ReactDOM = require('react-dom');
const asyncModule = require('../tools/asyncModule');
const { get } = fetch;
const microCache = {};
const app = {
  asyncModule,
  mixin: mixin,
  applyStore: applyStore,
  applyComponent: applyComponent,
  react: ReactRequire,
  'react-dom': ReactDOM,
  'react-amap': require('react-amap'),
  'react-dnd': require('react-dnd'),
  'react-dnd-html5-backend': require('react-dnd-html5-backend'),
  antd: require('antd'),
};

function foramtHost(host) {
  const hashFormat = host.replace(/\/*$/, '');
  return /^http|https/.test(hashFormat) ? hashFormat : `http://${hashFormat}`;
}

function factoryAppMicro(store) {
  return ({ children, ...reset }) => (
    <ApplyProvider store={store} {...reset}>
      <Fragment>{children}</Fragment>
    </ApplyProvider>
  );
}

function getMicroResource(host, resource, loadSuccess) {
  const iframe = document.createElement('iframe');
  iframe.src = host;
  iframe.srcdoc = '';
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  const { contentWindow, contentDocument } = iframe;
  Object.assign(contentWindow, {
    app: {
      ...app,
      loadSuccess: (...arg) => loadSuccess([iframe, ...arg]),
    },
    getFeWindowKey: (key) => window[key],
    PLATFORM: window.PLATFORM,
    getToken: () => window.getToken(),
  });
  let scripts = resource.scriptList.reduce((str, script) => {
    return `${str}<script src="${host}${script}"></script>`;
  }, '');
  scripts += '<script>window.app.loadSuccess(window)</script>';
  contentDocument.write(`<head><base href="${host}" /></head><body>${scripts}</body>`);
}

async function getMicroConfig(host) {
  return get(`${host.replace(/[\\/]*$/, '')}/index.json`, { isNotError: true });
}

async function setStyleConfig(host, resource, iframe) {
  const { head } = document;
  const { head: iHead } = iframe.contentDocument;
  const firstNode = document.head.querySelector('meta');
  resource.linkList.forEach(href => {
    const link = document.createElement('link');
    Object.assign(link, {
      rel: 'stylesheet',
      type: 'text/css',
      href: `${host}${href}`,
    });
    head.insertBefore(link, firstNode);
  });
  Array.prototype.slice.call(iHead.querySelectorAll('style')).forEach(style => {
    head.insertBefore(style, firstNode);
  });
}

function loadMicroResource(host, config) {
  $eventbus.$emit('LOADING-OPEN');
  return new Promise(resolve => {
    return getMicroResource(host, config, resolve);
  }).then(([iframe, res]) => {
    setStyleConfig(host, config, iframe);
    microCache[host] = Object.assign(res, {
      AppMicro: factoryAppMicro(res.store),
      $util: createUtil(host),
      host,
    });
    $eventbus.$emit('LOADING-CLOSE');
    return res;
  }).catch(e => {
    $eventbus.$emit('LOADING-CLOSE');
    throw e;
  });
}

function getMicroCatch(hasKey) {
  const host = foramtHost(hasKey);
  return microCache[host];
}

function microConfigError(menu, e) {
  const type = typeMold(e);
  const html = e instanceof Error ? e.message : type('object') ? JSON.stringify(e) : e;
  const Page = () => (
    <div
      className="page-component flex flex-column"
      dangerouslySetInnerHTML={{
        __html: html.replace(/^<div class="page-component flex flex-column">([\S\s]*)<\/div>$/, '$1'),
      }}
    />
  );
  return {
    path: menu.path,
    Page,
  }
}

export default async menu => {
  const host = menu.hasKey && foramtHost(menu.hasKey);
  let rootContext = false;
  let config = {};
  if (host && !hasOwnProperty(microCache, host)) {
    try {
      config = await getMicroConfig(host);
    } catch (e) {
      config = {
        scriptList: [],
        linkList: [],
      };
      rootContext = microConfigError(menu, e);
    }
    await loadMicroResource(host, config);
  }
  return rootContext;
};

export { getMicroCatch };
