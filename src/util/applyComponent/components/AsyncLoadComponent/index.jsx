import React, { Component } from 'react';

export default load => {
  let AsyncComponent;
  class AsyncLoadComponent extends Component {
    static loader = () =>
      load()
        .then(model => {
          return model.default || model;
        })
        .then(model => {
          AsyncComponent = model;
          return model;
        })
        .catch(e => {
          /* eslint-disable no-console */
          console.log(e);
        });

    constructor(props, context) {
      super(props, context);
      this.state = {
        ImportComponent: AsyncComponent || (() => <div />),
      };
      if (!AsyncComponent) this.loader();
    }

    loader() {
      AsyncLoadComponent.loader().then(model => {
        this.setState({
          ImportComponent: model,
        });
      });
    }

    render() {
      const { ImportComponent } = this.state;
      const { prototype } = ImportComponent;
      if (!ImportComponent) return null;
      if (prototype && prototype.render) {
        return <ImportComponent {...this.props} />;
      }
      if (typeof ImportComponent === 'function') {
        return ImportComponent(this.props);
      }
      return null;
    }
  }

  return AsyncLoadComponent;
};
