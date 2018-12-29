import React, { Component } from 'react';

const hash = () => {
  let count = -1;
  return () => {
    count += 1;
    return count;
  };
};

export default  function factoryActionComponent(preFetch) {
  return (Element) => {
    const dataCatch = { };
    const getHash = hash();

    let data;
    class ActionComponent extends Component {
      static setData = d => { data = d };

      constructor(props, context) {
        super(props, context);
        this.hash = getHash().toString();
        dataCatch[this.hash] = data ? JSON.parse(JSON.stringify(data)) : undefined;
      }

      componentWillUnmount() {
        delete dataCatch[this.hash];
      }

      render() {
        const merge = dataCatch[this.hash] ? { data: dataCatch[this.hash] } : {};
        return <Element {...merge} {...this.props} />;
      }
    }

    ['preFetch', 'components'].forEach((key) => {
      ActionComponent[key] = Element[key];
    });
    if (preFetch) ActionComponent.preFetch = preFetch;
    return ActionComponent;
  }
};
