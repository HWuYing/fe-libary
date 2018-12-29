// import ComponentStore from '../store';

async function fetchComponentSend({ store, context }) {
  const { components = [] } = store.reactNode;
  await Promise.all(
    components.map(component => formatComponent({ store: { reactNode: component }, context }))
  );
}

async function formatComponent({ store, context }) {
  let res;
  const { reactNode, getMounted } = store;
  const isMounted = (getMounted && getMounted(context)) || false;
  if (!isMounted && reactNode) {
    if (reactNode.preFetch) res = await reactNode.preFetch(context);
    if (reactNode.setData) reactNode.setData(res);
    if (store.setMounted) store.setMounted(context, true);
  }
  await fetchComponentSend({ store, context });
}

export default ({ store, context }) => next => () => {
  return new Promise((resolve, reject) =>
    formatComponent({ store, context })
      .then(() => {
        next();
      })
      .catch(e => {
        /* eslint-disable no-console */
        console.log(e);
        reject(e);
      })
  );
};
