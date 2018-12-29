import React, { Component } from 'react';
import { hasOwnProperty } from '../tools';

/* eslint-disable */
export function factoryCloneComponents(Components, fn) {
  return (config = {}) => (...arg) => fn(...[<Components {...config} />, ...arg]);
}

export function factoryComponentsConfig(Components) {
  return factoryCloneComponents(Components, (cloneElement, options) =>
    React.cloneElement(cloneElement, { ...(options || {}) })
  );
}

export const saveRef = (_self, key) => f => (_self[key] = f);

export function clearAttr(_self, arr = []) {
  arr.forEach(key => delete _self[key]);
  return _self;
}

export const mergeObjectRef = (ref, obj) => {
  if (ref) {
    Object.keys(obj).forEach(key => {
      if (!hasOwnProperty(ref, key)) {
        Object.defineProperty(ref, key, { value: obj[key] });
      }
    });
  }
  return ref;
};

export const cloneElement = (ElementComment, mergeProps={}) => {
  class CloneElement extends Component {
    render() {
      return <ElementComment {...this.props} {...mergeProps}  />
    }
  }

  return CloneElement;
};
