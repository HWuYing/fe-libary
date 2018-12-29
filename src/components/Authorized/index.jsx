import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { typeMold } from '@tools';
import * as config from '@common/config';

function authorized(author, authorElement) {
  const type = typeMold(authorElement);
  if (!authorElement || author.isDebug) return true;
  else if (type('string')) {
    return authorized(author, { system: authorElement });
  } else if (type('object')) {
    return Object.keys(authorElement).reduce((status, key) => {
      const authorCloneElement = authorElement[key];
      const typeClone = typeMold(authorCloneElement);
      let isNot = /^\!{1}/.test(key);
      let authorStatus;
      const rexKey = key.replace(/^\!{1}/, '');
      if (typeClone('object')) authorStatus = authorized(author, authorCloneElement);
      else if (typeClone("array")) {
        authorStatus = authorized(author, authorCloneElement.map(kk => ({
          [rexKey]: kk,
        })));
      } else authorStatus = author[rexKey] === authorCloneElement;
      return status && (isNot ? !authorStatus : authorStatus);
    }, true);
  } else if (type('array')) {
    return authorElement.reduce(
      (status, authorClone) => status || authorized(author, authorClone),
      false
    );
  } else if (type('function')) {
    return authorElement(author);
  }
  return false;
}

function authorizedFilter(author, list, context={}) {
  const mergeAuthor = Authorized.mergeAuthor(author, context);
  return list.reduce((arr, item) => {
    if (authorized(mergeAuthor, item.author)) {
      arr.push(item);
    }
    return arr;
  }, []);
}

class Authorized extends Component {
  static author = {
    system: config.SYSTEM,
  };

  static contextTypes = {
    author: PropTypes.object,
  };

  static mergeAuthor = (author, context={}) => {
    return {
      ...Authorized.author,
      ...context.author,
      ...author,
    }
  };

  constructor(props, context) {
    super(props, context);
    this.author = Authorized.mergeAuthor(props.author, context);
  }

  componentWillReceiveProps(nextProps) {
    const { author } = nextProps;
    const { props } = this;
    if (author !== props.author) this.author = Authorized.mergeAuthor(author, this.context);
  }

  authorizedValidate() {
    const { children } = this.props;
    const childList = [];
    const { author } = this;
    React.Children.forEach(children, element => {
      if (React.isValidElement(element) && authorized(author, element.props.author))
        childList.push(element);
    });
    return childList;
  }

  render() {
    const { target, ...reset } = this.props;
    const children = this.authorizedValidate();
    if (target) return React.createElement(target, { ...reset }, children);
    return children;
  }
}

export default Authorized;
export { authorized, authorizedFilter };
