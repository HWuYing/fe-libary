import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import { component } from '@particulate';
import styles from './index.less';

class DateRange extends Component {
  static disabledEndDate = (start, end) => {
    return start.valueOf() > end.valueOf();
  };

  static disabledStartDate = (start, end) => {
    return start.valueOf() >= end.valueOf();
  };

  static validateMap = {
    start: DateRange.disabledStartDate,
    end: DateRange.disabledEndDate,
  };

  constructor(props, context) {
    super(props, context);
    this.state = { value: {} };
    this.initial(props);
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    if (nextProps.value !== value) this.initial(nextProps);
  }

  onChange(fields, changeValue) {
    const { onChange, format } = this.props;
    const currentValue = this.mergeValues(fields, changeValue);
    const { start, end } = currentValue;
    this.setState({
      value: currentValue,
    });
    if (onChange)
      onChange({
        start: start ? start.format(format) : start,
        end: end ? end.format(format) : end,
      });
  }

  initial(props) {
    const { start, end } = props.value || [];
    this.state.value = {
      start: start ? moment(start) : start,
      end: end ? moment(end) : end,
    };
  }

  mergeValues(fields, changeValue) {
    const { value } = this.state;
    return {
      ...value,
      [fields]: changeValue,
    };
  }

  disabledDate(fields) {
    return changeValue => {
      const { start, end } = this.mergeValues(fields, changeValue);
      if (!start || !end) return false;
      return DateRange.validateMap[fields](start, end);
    };
  }

  render() {
    const { value: propsValue, ...reset } = this.props;
    const {
      value: { start, end },
    } = this.state;
    const { disabledEndDate=() => false, disabledStartDate=() => false } = this.props;
    const disabledStart = this.disabledDate('start');
    const disabledEnd = this.disabledDate('end');
    return (
      <div className={styles['entry-data-range']}>
        <DatePicker
          value={start}
          {...reset}
          onChange={(...arg) => this.onChange('start', ...arg)}
          disabledDate={(...arg) => disabledStartDate(...arg) || disabledStart(...arg)}
        />
        <a className={styles['range-word']}>至</a>
        <DatePicker
          value={end}
          {...reset}
          disabledDate={(...arg) => disabledEndDate(...arg) || disabledEnd(...arg)}
          onChange={(...arg) => this.onChange('end', ...arg)}
        />
      </div>
    );
  }
}

export default DateRange;
