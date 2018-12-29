export default ({ store }) => next => () => {
  const { reactNode } = store;
  return new Promise((resolve, reject) => {
    if (reactNode.loader) {
      reactNode.loader().then(asyncModel => {
        store.setReactNode(asyncModel);
        next();
      }).catch(e => {
        reject(e);
      });
    } else next();
  });
}
