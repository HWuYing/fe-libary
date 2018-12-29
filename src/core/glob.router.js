import { factory } from './app';

export default (router, javaApi) => {
  router.all('/global/*', factory(async (req, res) => {
    const serverApi = req.path.replace(/^\/global\/([\S\s]*)/, '$1');
    const { query, body, method } = req;
    const params = {
      ...query,
      ...body,
    };
    return javaApi(req, res)[method.toLowerCase()](serverApi, params);
  }));
  return router;
};
