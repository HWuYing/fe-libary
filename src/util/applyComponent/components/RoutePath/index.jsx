import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { hash } from '@tools';
import PropTypes from 'prop-types';
import { registryPage } from '../../core/pages';
import { registryApplyComponent } from '../../core/cache';

const getHash = hash();

export default path => Page => {
  const PageComponent = registryApplyComponent(path)(Page);

  class RoutePath extends Component {
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
          component={props => <PageComponent
            userInfo={userInfo}
            {...this.props}
            {...props}
          />}
        />
      );
    }
  }

  registryPage(path, RoutePath);
  return RoutePath;
};
