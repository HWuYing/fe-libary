import { factoryInterfaceRequest } from '@fetch';
import { SERVER_PORT } from '@common/config';
import loadMicro  from './loadMicro';

const fetch = factoryInterfaceRequest(`http://127.0.0.1:${SERVER_PORT}`);

export * from '../tools/asyncModule';
export {
  fetch,
  loadMicro,
}
