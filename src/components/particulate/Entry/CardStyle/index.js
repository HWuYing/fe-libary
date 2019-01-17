import React, { PureComponent } from 'react';
import styles from './index.less';

class EntryCardStyle extends PureComponent {
  render() {
    const { title, displayClass, ...reset } = this.props;
    return <div className={`${styles.card} ${styles[displayClass]}`} {...reset}>{title}</div>;
  }
}

export default EntryCardStyle;
