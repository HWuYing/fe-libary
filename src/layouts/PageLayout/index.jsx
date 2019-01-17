import React, { Component } from 'react';

class PageLayout extends Component {
  render() {
    const { children, className: classNamePro } = this.props;
    const className = `page-component flex flex-column ${classNamePro ? ` ${classNamePro}` : ''}`;
    return (
      <div {...this.props} className={className}>
        {children}
      </div>
    );
  }
}

export default PageLayout;
