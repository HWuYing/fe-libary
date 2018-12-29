/* eslint-disable */
import React, { PureComponent } from 'react';
import Ellipsis from '../particulate/Entry/Ellipsis';
import styles from './index.less';

class GoodsCard extends PureComponent {
  render() {
    const { cardStyle = 'item', image, name, label, textLength } = this.props;

    return (
      <div className={`${styles.item} ${styles[cardStyle]}`}>
        <img src={image || 'http://placeholder.qiniudn.com/50x50/FFF//fff'} />
        <div>
          <div className="name">
            <Ellipsis length={textLength || 100}>{name}</Ellipsis>
          </div>
          <div>{label}</div>
        </div>
      </div>
    );
  }
}

export default GoodsCard;
