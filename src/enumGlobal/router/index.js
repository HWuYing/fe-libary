import express from 'express';
import { factory } from '../../core/app';

const router = express.Router();

// 加载固定数据项代码
export default (javaAPI, api) => {
  router.post(
    '/source',
    factory(async (req, res) => {
      const { serviceApi } = req.body;
      return javaAPI(req, res).get(api[serviceApi]);
    })
  );
  return router;
};
