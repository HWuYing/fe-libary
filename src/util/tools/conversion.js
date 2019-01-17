import React from 'react';
import { Badge } from 'antd';
import { typeMold } from './decisionType';

const statusFLagEnum = {
  success: { value: 1, label: "开启", status: 'success' },
  "default": { value: 2, label: "关闭", status: 'default' },
};

export const findTypeLabel = (status, enumType) => {
  const value = status;
  if (!value) return { value, label: '--' };
  const key = Object.keys(enumType).find(kk => {
    return value.toString() === enumType[kk].value.toString();
  });
  if (!key || !enumType[key]) return { value, label: '--' };
  return enumType[key];
};

export const typeToLabel = (status, enumType) => {
  return findTypeLabel(status, enumType).label;
};

export const statusFlagBadge = (value, flagEnum=statusFLagEnum) => {
  const { status, label} = findTypeLabel(value, flagEnum);
  return <Badge status={status} text={label} />;
};

export const getQueryKey = (search, key) => {
  const rex = new RegExp(`^\\?*[\\s\\S]*${key}=([^&]*)[\\s\\S]*$`, 'i');
  const matchArr = search.match(rex, '$1');
  if (matchArr) return matchArr[1];
  return matchArr;
};

export const moneyToYuan = (val, defaultValue='--') => {
  return !val && val !== 0 ? defaultValue : Number(val) / 100;
};

export const yuanToMoney = (val, defaultValue=0) => {
  return !val && val !== 0 ? defaultValue : Number(val) * 100;
};

export const moneyToUCurrency = (val, exchange) => {
  if (!exchange && exchange !== 0) return '暂无数据';
  return !val && val !== 0 ? val : `${(Number(val / 100) * Number(exchange / 100)).toFixed(2)} U币`;
};

export const uCurrentToMoney = (val, coinExchange) => {
  if (!exchange && exchange !== 0) return '暂无数据';
  return !val && val !== 0 ? val : (Number(val) / Number(coinExchange)).toFixed(2);
};

export const valueToString = val => {
  return val && val !== 0 ? val.toString() : val;
};

export const cloneData = data => {
  const typeFn = typeMold(data);
  if (typeFn('array')) return data.map(d => cloneData(d));
  else if (typeFn('object')) return Object.keys(data).reduce((o, key) => Object.assign(o, {
    [key]: cloneData(data[key]),
  }), {});
  return data;
};
