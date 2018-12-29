import formatOptions from '@fetch/core/formatOptions';
import { SYSTEM } from '@common/config';
import decision from '../tools/decisionType';

export default function Interface(fetch, options, context, isNotError) {
  const {
    res,
    req: { headers: contentHeaders, session={} },
  } = context;
  const { headers = {} } = options;
  return fetch(
    formatOptions({
      ...options,
      headers: {
        cookie: contentHeaders.cookie,
        platform: contentHeaders.platform || SYSTEM,
        token: contentHeaders.token || session.token,
        ...headers,
      },
    })
  )
    .then(([fn]) => fn()).then((result) => {
      if (decision(result) === 'string') return result;
      const { resultCode } = result;
      if (resultCode === 100402 || resultCode === 110103) return res.redirect('/login');
      if (resultCode !== 200) throw new Error(resultCode);
      return result;
    })
    .catch(e => {
      if (!isNotError) res.json(e);
      throw e;
    });
}
