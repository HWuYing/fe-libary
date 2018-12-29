function decision(o) {
  return Object.prototype.toString
    .call(o)
    .replace(/^\[object ([^\]]*)\]$/, '$1')
    .toLocaleLowerCase();
}

function type(mold) {
  return o => decision(o) === mold;
}

function typeMold(o) {
  const mode = decision(o);
  return mold => mold === mode;
}

function isPromise(o) {
  const promiseType = decision(o);
  if (promiseType === 'promise') return true;
  if (promiseType === 'function' && decision(o.then) === 'function') return true;
  return false;
}

export const isArray = type('array');
export const isFunction = type('function');
export const isString = type('string');
export const isObject = type('object');
export { type, typeMold, isPromise };

export default decision;
