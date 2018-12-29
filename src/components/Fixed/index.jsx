import React, { Component, Fragment } from 'react';
import {
  unstable_renderSubtreeIntoContainer,
  unmountComponentAtNode,
} from 'react-dom';
import { component } from '@particulate';
import styles from './index.less';

const { saveRef } = component;

class Fixed extends Component{
  componentDidMount() {
    this.node = document.createElement('div');
    this.renderPortal(this.props);
  }

  componentDidUpdate() {
    this.renderPortal(this.props);
  }

  componentWillUnmount() {
    this.removeUnmount();
  }

  getContainer() {
    return this.container && this.container.ownerDocument.body ||
      document.body.ownerDocument.body;
  }

  removeUnmount() {
    const { isFixed } = this.props;
    unmountComponentAtNode(this.node);
    if (this.owner && isFixed) {
      this.owner.removeChild(this.node);
    }
  }

  renderPortal(props) {
    const { isFixed, children, className = '', getContainer, onUpdate=() => null, ...reset } = props;
    if (isFixed) {
      unstable_renderSubtreeIntoContainer(this,
        <div {...reset} className={[className, styles.fixed].join(' ')}>
          {children}
        </div>,
        this.node,
        onUpdate,
      );
      if (!this.owner) {
        this.owner = getContainer && getContainer() || this.getContainer();
      }
      this.owner.appendChild(this.node);
    } else {
     this.removeUnmount();
    }
  }

  render() {
    const { children, isFixed } = this.props;
    return (
      <Fragment>
        <div ref={saveRef(this, 'container')} style={{display: 'none'}} />
        { !isFixed && children }
      </Fragment>
    );
  }
}

export default Fixed;
