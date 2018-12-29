import React, { PureComponent } from 'react';
import { type } from '@particulate';
import DragDropContainer from '../DragDropSort/index';
import styles from './index.less';

class DragDropImage extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }

  getChilrenList = value => {
    if (!value) return [];
    if (type(value) === 'String') value = value.split(',');
    return value.map((item, i) => {
      return {
        id: i,
        key: i.toString(),
        url: item,
      };
    });
  };

  onItemMove(from, to) {
    const { value } = this.props;
    const children = this.getChilrenList(value);
    const sortChildren = [...children];

    let newChildren = [];
    if (from < to) {
      newChildren = sortChildren.map((item, i) => {
        if (i >= from && i < to) return children[i + 1];
        if (i === to) return children[from];
        return item;
      });
    } else {
      newChildren = sortChildren.map((item, i) => {
        if (i === to) return children[from];
        if (i > to && i <= from) return children[i - 1];
        return item;
      });
    }

    const result = newChildren.map(item => item.url);
    this.props.onChange(type(value) === 'String' ? result : result.toString());
  }

  render() {
    const value = this.getChilrenList(this.props.value);

    return (
      <DragDropContainer
        onItemMove={(...arg) => this.onItemMove(...arg)}
        className={styles.drageBox}
      >
        {value.map(item => (
          <div className={styles.itemImageBox} key={item.key}>
            <span className={styles.itemIndex}>{1 + item.id}</span>
            <div className={styles.itemImage} style={{ backgroundImage: `url(${item.url})` }} />
          </div>
        ))}
      </DragDropContainer>
    );
  }
}

export default DragDropImage;
