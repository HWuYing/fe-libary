import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cloneData } from '../../../../util/tools';

function ConnectToEntry(component, reducesKey, storeAction, globalKey='global') {
  const ConnectComponent = component;
  let fetchStatus = false;
  @connect(state => {
    const global = state[globalKey];
    return {
      global,
    };
  }, {
    actionFetch: storeAction,
  })
  class ConnectToComponent extends Component {
    constructor(props, context) {
      super(props, context);
      this.storeKey = reducesKey || props.storeKey;
      this.mappingTo = props.mappingTo || 'children';
      this.initial(props);
    }

    componentWillReceiveProps(nextProps) {
      this.initial(nextProps);
    }

    initial(props) {
      const { global, actionFetch, sourceFilter=() => true, ...reset } = props;
      const dataSource= global[this.storeKey];
      let actionPromise = Promise.resolve();
      this.mergeProps = reset;
      if (!dataSource || Array.isArray(dataSource) && !dataSource.length){
        if (!fetchStatus) {
          fetchStatus = true;
          const actionResult = actionFetch();
          if (actionResult.then) actionPromise = actionResult;
          actionPromise.then(() => fetchStatus = false);
        }
      } else {
        Object.assign(this.mergeProps, {
          [this.mappingTo]: [...cloneData(dataSource)].filter(sourceFilter) || [],
        });
      }
    }

    render() {
      return <ConnectComponent {...this.mergeProps} />
    }
  }
  return ConnectToComponent;
}


export default ConnectToEntry;
