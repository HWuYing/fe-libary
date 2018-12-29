import { fetch } from '@util';

const { post } = fetch;

export const getDataSource = async (body, httpOptions) =>
  post('/globalEnum/source', { httpOptions, body });
