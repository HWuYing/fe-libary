import React, { PureComponent } from 'react';
import styles from './index.less';

class EntryCardStyle extends PureComponent {
  render() {
    const { title, displayClass } = this.props;
    return <div className={`${styles.card} ${styles[displayClass]}`}>{title}</div>;
  }
}

export default EntryCardStyle;
