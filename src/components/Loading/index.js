import React, { Component } from 'react';
import { Spin } from 'antd';
import Fixed from '../Fixed';
import styles from './index.less';

class Loading extends Component {
  constructor(props, context) {
    super(props, context);
    this.mapEvent = {};
    this.c_mounted = false;
    this.state = {
      count: 0,
    };
  }

  componentWillMount() {
    this.mapEvent['LOADING-OPEN'] = this.$eventbus.$on('LOADING-OPEN', () => {
      if (this.c_mounted === false) return;
      const { count } = this.state;
      this.setState({
        count: count + 1,
      });
    });
    this.mapEvent['LOADING-CLOSE'] = this.$eventbus.$on('LOADING-CLOSE', () => {
      setTimeout(() => this.delayedClose(), 200);
    });
  }

  componentDidMount() {
    this.c_mounted = true;
  }

  componentWillUnmount() {
    this.c_mounted = false;
    Object.keys(this.mapEvent).forEach(key => {
      this.mapEvent[key]();
      delete this.mapEvent[key];
    });
  }

  delayedClose() {
    const { count } = this.state;
    if (this.c_mounted === false) return;
    this.setState({
      count: count === 0 ? 0 : count - 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <Fixed
        isFixed={true}
        style={{zIndex: '9999'}}
      >
        {
          count <= 0 ? (
            <div />
          ) : (
            <div className={styles.loading}>
              <div className={styles['loading-content']}>
                <Spin size="large" tip="Loading..." />
              </div>
            </div>
          )
        }
      </Fixed>
    );
  }
}

export default Loading;
