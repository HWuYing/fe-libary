import { typeMold } from '../tools/decisionType';
import { hasOwnProperty} from '../tools/decisionObject';
const moduleMap = {};

function factoryImportLoader(importLoader) {
  let loadModule = undefined;
  return () => {
    if (loadModule) return Promise.resolve(loadModule);
    return importLoader().then(m => {
      loadModule = m;
      return m;
    }).catch(e => {
      console.log(e);
    });
  }
}

function registryAsyncModule(key, importLoader) {
  const keyType = typeMold(key);
  if (keyType('object')) {
    return Object.keys(key).forEach((kk) => registryAsyncModule(kk, key[kk]));
  }

  if (!importLoader) {
    throw new Error('importLoad is not defined');
  }

  if (hasOwnProperty(moduleMap, key)) {
    console.log(new Error(`${key}  registry`));
    return ;
  }
  Object.assign(moduleMap, {
    [key]: factoryImportLoader(importLoader),
  });
  return () => getAsyncModule(key);
}

async function getAsyncModule(key) {
  const asyncModule = moduleMap[key]();
  return asyncModule;
}

export {
  registryAsyncModule,
  getAsyncModule,
}
