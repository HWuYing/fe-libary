import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { hash } from '@tools';
import { registryPage } from '../../core/pages';
import { registryApplyComponent } from '../../core/cache';
import AsyncLoadComponent from '../AsyncLoadComponent';

const getHash = hash();
export default path => loader => {
  const Page = registryApplyComponent(path)(AsyncLoadComponent(loader));
  class RouterLoader extends Component {
    static contextTypes = {
      userInfo: PropTypes.object,
    };

    static path = path;

    constructor(props, context) {
      super(props, context);
      this.hash = getHash();
    }

    shouldComponentUpdate() {
      return false;
    }

    render() {
      const { userInfo } = this.context;
      return (
        <Route
          {...this.props}
          path={path}
          component={props => <Page
            userInfo={userInfo}
            {...this.props}
            {...props}
          />}
        />
      );
    }
  }

  registryPage(path, RouterLoader);
  return RouterLoader;
};
