import fetch from 'node-fetch';
import { typeMold } from '../util/tools';
import formOptions from '../util/fetch/core/formatOptions';

const time = 50000;

class InterfaceServer {
  static timeout = (context, InterfaceFetch) => (...arg) => {
    let status = false;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!status && (status = true)) {
          resolve({
            resultCode: 100111,
            resultMsg: '链接超时',
          });
        }
      }, time);
      InterfaceFetch(...arg)
        .then(result => {
          if (!status && (status = true)) resolve(result);
        })
        .catch(e => {
          /* eslint-disable no-console */
          console.log(e);
          if (!status && (status = true)) reject(e);
        });
    });
  };

  constructor(host, platform, req, res, options = {}) {
    const { headers = {} } = options;
    this.headers = headers;
    this.context = { req, res };
    this.url = '/';
    this.host = host;
    this.platform = platform;
  }

  setHeader(key, value) {
    const typeMode = typeMold(key);
    if (typeMode('object')) {
      Object.keys(key).forEach(iKey => {
        this.setHeader(iKey, key[iKey]);
      });
    } else if (typeMode('string')) {
      this.headers[key] = value;
    }
    return this;
  }

  async fetch(method, url, body) {
    const {
      host,
      context: { req },
    } = this;
    const { url: formatUrl, headers, ...options } = formOptions({ host, url, body, method });
    const { token, platform } = req.headers || {};
    const { token: sessionToken } = req.session || {};
    console.log(`${formatUrl}`, body);
    const result = await fetch(formatUrl, {
      method,
      ...options,
      headers: {
        ...(!token && !sessionToken
          ? {}
          : {
              token: token || sessionToken,
            }),
        token: token || sessionToken,
        platform: platform || this.platform,
        ...headers,
        ...this.headers,
      },
    });
    let api = result.url;
    let json = await result.json();
    if (result.status >= 200 && result.status < 300) api = formatUrl;
    return Object.assign(json, {
      api,
    });
  }
}

['GET', 'POST', 'DELETE', 'PUT'].forEach(method => {
  InterfaceServer.prototype[method.toLocaleLowerCase()] = async function(...arg) {
    const { context } = this;
    const interfaceFetch = InterfaceServer.timeout(context, this.fetch.bind(this));
    return interfaceFetch(method.toUpperCase(), ...arg);
  };
});

const createAPIServer = (host, platform) => (req, res, options) =>
  new InterfaceServer(host, platform, req, res, options);

export default createAPIServer;
