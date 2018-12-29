class ComponentStore {
  constructor(reactNode, path) {
    this.reactNode = reactNode;
    this.isMountedCatch = {};
    this.path = path;
    this.storeProps = {
      ref: this.saveRef(),
    };
  }

  setReactNode(reactNode) {
    this.reactNode = reactNode;
  }

  getReactNode() {
    return this.reactNode;
  }

  getMounted = (context) => {
    const { match: { params } } = context;
    const hash = this.getHash(params);
    return this.isMountedCatch[hash];
  };

  setMounted = (context, status) => {
    const { match: { params } } = context;
    const hash = this.getHash(params);
    this.isMountedCatch[hash] = status;
  };

  getHash(params = {}) {
    let hash = Object.keys(params).reduce(
      (str, key) => `${str}-${key}-${params[key]}`
      , '');
    if (!hash) hash = this.path;
    return hash;
  }

  saveRef() {
    let hash;
    return (component) => {
      if (!hash && component) {
        const { props: { match } } = component;
        const { params } = match;
        hash = this.getHash(params);
      }
      if (!component) {
        delete this.isMountedCatch[hash];
      } else {
        this.isMountedCatch[hash] = true;
      }
    }
  }
}

export default ComponentStore;
