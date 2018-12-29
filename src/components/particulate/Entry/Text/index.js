import React, { Component } from 'react';

class EntryText extends Component {
  render() {
    const { target='a', value, style,  ...reset } = this.props;
    return React.createElement(target, {
      children: value,
      style: {color: '#333', ...style },
      ...reset,
    });
    // return <a {...reset} style={{ color: '#333', ...style }}>{value}</a>;
  }
}

export default EntryText;
