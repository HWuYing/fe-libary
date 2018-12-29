import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enumGlobalAction } from '@enumGlobal';
import { cloneData } from '../../../../util/tools';

const { getSourceList } = enumGlobalAction;

const ConnectEntry = (component, globalEnumKey='globalEnum') => {
  const ConnectEntryComponent = component;

  @connect(
    (state) => {
      const globalEnum = state[globalEnumKey];
      return {
        globalEnum,
      };
    },
    {
      getSourceList,
    }
  )
  class Entry extends Component {
    constructor(props, context) {
      super(props, context);
      this.serviceApi = props.serviceApi;
      this.storeKey = props.storeKey;
      this.mappingTo = props.mappingTo || 'children';

      this.initial(props);
    }

    componentWillReceiveProps(props) {
      // const { globalEnum } = props;
      this.initial(props);
      // this.config[this.mappingTo] = globalEnum[this.storeKey] || [];
    }

    initial(props) {
      const { globalEnum } = props;
      let dataSource = globalEnum[this.storeKey];
      this.config = { ...(props || {}) };

      if (!dataSource) {
        this.config[this.mappingTo] = [];
        this.props.getSourceList({ serviceApi: this.serviceApi, storeKey: this.storeKey });
      } else this.config[this.mappingTo] = cloneData(dataSource);

      ['serviceApi', 'storeKey', 'mappingTo', 'globalEnum', 'getSourceList'].forEach(
        item => delete this.config[item]
      );
    }

    render() {
      return <ConnectEntryComponent {...this.config} />;
    }
  }

  return Entry;
};

export default ConnectEntry;
