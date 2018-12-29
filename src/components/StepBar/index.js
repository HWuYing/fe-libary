import React, { PureComponent } from 'react';
import style from './index.less';

export class StepsBar extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stepsSource: props.stepsSource || [],
      current: props.current || 0,
      StepStyle: props.StepStyle || 'blueStepsBar',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.state.current = nextProps.current;
  }

  render() {
    const { stepsSource, current, StepStyle } = this.state;
    const width = { width: `${100 / stepsSource.length}%` };

    return (
      <ul className={style[StepStyle]}>
        {stepsSource.map((item, i) => (
          <li
            key={i.toString()}
            data-value={item.step}
            className={current === item.step ? style.selected : ''}
            style={width}
          >
            {item.title}
          </li>
        ))}
      </ul>
    );
  }
}

export default StepsBar;
