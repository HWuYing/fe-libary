import interfaceRequest from '@util/interface';
import * as nodeFetch from 'node-fetch';

const fetch = typeof window !== 'undefined' ? self.fetch : nodeFetch;

const methods = ['POST', 'GET', 'DELETE', 'PUT'];

async function applyFetch(options) {
  const mergeOptions = { ...options };
  const res = await fetch(mergeOptions.url, {
    method: options.method,
    ...mergeOptions,
    url: undefined,
  });
  return res;
}

function applyFetchText() {
  return async options => {
    const res = await applyFetch(options);
    const result = async () => await res.text();
    return [result, res];
  };
}

function applyFetchJson() {
  return async options => {
    const res = await applyFetch(options);
    const result = async () => await res.json();
    return [result, res];
  }
}

function applyFetchBlob() {
  return async options => {
    const res = await applyFetch(options);
    const result = async () => await res.blob();
    return [result, res];
  }
}

const FetchType = {
  text: applyFetchText,
  json: applyFetchJson,
  blob: applyFetchBlob,
};


async function Interface(host, url, method, body, headers, context, isNotError, isLoading, crossDomain, resultType) {
  let res;
  const applyFetchFn = FetchType[resultType];
  try {
    res = await interfaceRequest(applyFetchFn(), { host, url, method, body, headers }, context, isNotError, isLoading, crossDomain);
  } catch (e) {
    console.log(e);
    throw e;
  }
  return res;
}

const InterfaceList = methods.reduce(
  (m, method) =>
    Object.assign(m, {
      [method.toLocaleLowerCase()]: async (host, url, body, headers, context, isNotError,isLoading, crossDomain, resultType) => {
        const res = await Interface(host, url, method, body, headers, context, isNotError, isLoading, crossDomain, resultType);
        return res;
      },
    }),
  {}
);

function factoryInterfaceRequest(host = '/', resultType='json', defaultIsNotError = false, defaultCrossDomain = true, defaultIsLoading = true) {
  return Object.keys(InterfaceList).reduce(
    (m, method) =>
      Object.assign(m, {
        [method]: async (url, { body, context, isNotError = defaultIsNotError, crossDomain=defaultCrossDomain, isLoading=defaultIsLoading, headers = {} }) => {
          const res = InterfaceList[method](host, url, body, headers, context, isNotError, isLoading, crossDomain, resultType);
          return res;
        },
      }),
    {}
  );
}

const fetchText = factoryInterfaceRequest(undefined, 'text', true);
const fetchBlob = factoryInterfaceRequest(undefined, 'blob', true);

export default factoryInterfaceRequest();
export {
  fetchText,
  fetchBlob,
  factoryInterfaceRequest
};
