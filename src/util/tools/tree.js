import decision, { isArray, isObject } from './decisionType';

function factoryRecursion(tree, key = 'children', isDelete=true) {
  function recursion(pCurrent, current, handler, hash = '') {
    const type = decision(current);
    let children;
    if (type === 'array') {
      current.forEach((item, index) => {
        executeRecursion(pCurrent, item, handler, [...(hash ? [hash] : []), index].join('-'));
      });
    } else if (type === 'object') {
      children = current[key];
      if (isArray(children)) {
        if (children.length) {
          Object.assign(current, {
            [key]: recursion(current, children, handler, hash) || children,
          });
        } else if (isDelete) {
          delete current[key];
        }
      }
    }
    return current;
  }

  function executeRecursion(pTree, eTree, handler, hash) {
    if (handler && isObject(eTree)) handler(eTree, pTree, hash);
    return recursion(pTree, eTree, handler, hash);
  }

  return {
    each: handler => executeRecursion({}, tree, handler, isArray(tree) ? '' : 0),
    find: hash =>
      hash
        .split('-')
        .reduce((fTree, fKey) => fTree[key][fKey], { [key]: isObject(tree) ? [tree] : tree }),
  };
}

export { factoryRecursion };
