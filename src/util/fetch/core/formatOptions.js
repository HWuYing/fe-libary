import { stringify } from 'querystring';

const hostRex = new RegExp('[\\/]*$', 'ig');
const urlRex = new RegExp('^[\\/]*', 'ig');
const formatNotJSON = ['GET', 'DELETE'];

function formatUrl({ host, url, body, method }) {
  const rexHost = host.replace(hostRex, '');
  const rexUrl = url.replace(urlRex, '');
  const mergeUrl = /^http|https/.test(rexUrl) ? rexUrl : `${rexHost}/${rexUrl}`;
  let query;
  if (formatNotJSON.includes(method.toUpperCase())) {
    query = stringify(body || {});
  }
  return `${mergeUrl}${query ? `?${query}` : ''}`;
}

function formatBody({ body, method }) {
  let param;
  if (body && !formatNotJSON.includes(method.toUpperCase())) {
    param = JSON.stringify(body);
  }
  return param;
}

function clientBodyUndefined(options) {
  const { body } = options;

  return Object.assign(options, {
    body: Object.keys(body || {}).reduce((o, key) => {
      const object = body[key];
      if (object !== undefined && object !== null) o[key] = body[key];
      return o;
    },{})
  });
}

export default function(options) {
  const body = formatBody(clientBodyUndefined(options));
  return {
    method: options.method,
    url: formatUrl(options),
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...(body ? { body } : {}),
  };
}
