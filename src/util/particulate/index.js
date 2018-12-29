import * as component from './component';
import * as factory from './factory';

export { component, factory };
export const hasOwnProperty = (o, name) => Object.prototype.hasOwnProperty.call(o, name);
export const type = o =>
  Object.prototype.toString.call(o).replace(/\[object ([a-z|A-Z]*)\]/gi, '$1');

export const typeToLabel = (status, enumType) => {
  const value = status;
  if (!value) return '--';
  const key = Object.keys(enumType).find(kk => {
    return value.toString() === enumType[kk].value.toString();
  });
  if (!key || !enumType[key]) return '--';
  return enumType[key].label;
};
