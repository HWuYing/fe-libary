"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneData = exports.valueToString = exports.yuanToMoney = exports.moneyToYuan = exports.getQueryKey = exports.statusFlagBadge = exports.typeToLabel = exports.findTypeLabel = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _decisionType = require("./decisionType");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var statusFLagEnum = {
  success: {
    value: 1,
    label: "开启",
    status: 'success'
  },
  "default": {
    value: 2,
    label: "关闭",
    status: 'default'
  }
};

var findTypeLabel = function findTypeLabel(status, enumType) {
  var value = status;
  if (!value) return {
    value: value,
    label: '--'
  };
  var key = Object.keys(enumType).find(function (kk) {
    return value.toString() === enumType[kk].value.toString();
  });
  if (!key || !enumType[key]) return {
    value: value,
    label: '--'
  };
  return enumType[key];
};

exports.findTypeLabel = findTypeLabel;

var typeToLabel = function typeToLabel(status, enumType) {
  return findTypeLabel(status, enumType).label;
};

exports.typeToLabel = typeToLabel;

var statusFlagBadge = function statusFlagBadge(value) {
  var flagEnum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : statusFLagEnum;

  var _findTypeLabel = findTypeLabel(value, flagEnum),
      status = _findTypeLabel.status,
      label = _findTypeLabel.label;

  return _react.default.createElement(_antd.Badge, {
    status: status,
    text: label
  });
};

exports.statusFlagBadge = statusFlagBadge;

var getQueryKey = function getQueryKey(search, key) {
  var rex = new RegExp("^\\?*[\\s\\S]*".concat(key, "=([^&]*)[\\s\\S]*$"), 'i');
  var matchArr = search.match(rex, '$1');
  if (matchArr) return matchArr[1];
  return matchArr;
};

exports.getQueryKey = getQueryKey;

var moneyToYuan = function moneyToYuan(val) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--';
  return !val && val !== 0 ? defaultValue : Number(val) / 100;
};

exports.moneyToYuan = moneyToYuan;

var yuanToMoney = function yuanToMoney(val) {
  return !val && val !== 0 ? val : Number(val) * 100;
};

exports.yuanToMoney = yuanToMoney;

var valueToString = function valueToString(val) {
  return val && val !== 0 ? val.toString() : val;
};

exports.valueToString = valueToString;

var cloneData = function cloneData(data) {
  var typeFn = (0, _decisionType.typeMold)(data);
  if (typeFn('array')) return data.map(function (d) {
    return cloneData(d);
  });else if (typeFn('object')) return Object.keys(data).reduce(function (o, key) {
    return Object.assign(o, _defineProperty({}, key, cloneData(data[key])));
  }, {});
  return data;
};

exports.cloneData = cloneData;