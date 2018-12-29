import { getComponent } from "./cache";

let middleware;

function executeMiddleware(list, resolve) {
  const len = list.length;
  let count = 0;
  if (len === 0) return resolve([]);
  const promiseMiddleware = () => {
    return () => () => {
      count += 1;
      if (count >= len) resolve(list);
    }
  };
  const chain = [...middleware, promiseMiddleware];
  list.forEach(store => {
    compose(next => next(),...chain.map(m => m(store)))(list);
  });
}

function execute(context, resolve, store) {
  const list = getComponent(context, store);
  executeMiddleware(list, resolve);
}

function compose(...funcs) {
  if (funcs.length === 0) return args => args;
  if(funcs.length === 1) return funcs[0];
  return funcs.reduce((a,b) =>  (...args) => a(b(...args)));
}

function applyMiddleware(...funcs) {
  middleware = funcs;
}

export {
  execute,
  executeMiddleware,
  applyMiddleware,
};
