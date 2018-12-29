"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registryEntry = registryEntry;
exports.mapEntry = exports.default = void 0;

var _particulate = require("@particulate");

var _antd = require("antd");

var _Switch = _interopRequireDefault(require("./Switch"));

var _Select = _interopRequireDefault(require("./Select"));

var _RadioGroup = _interopRequireDefault(require("./RadioGroup"));

var _CheckboxGroup = _interopRequireDefault(require("./CheckboxGroup"));

var _Text = _interopRequireDefault(require("./Text"));

var _DateRange = _interopRequireDefault(require("./DateRange"));

var _TreeSelect = _interopRequireDefault(require("./TreeSelect"));

var _Cascader = _interopRequireDefault(require("./Cascader"));

var _CustomerImageUpload = _interopRequireDefault(require("./Upload/component/CustomerImageUpload"));

var _CheckableTagGroup = _interopRequireDefault(require("./CheckableTagGroup"));

var _Image = _interopRequireDefault(require("./Image"));

var _ConnectToEntry = _interopRequireDefault(require("./ConnectToEntry"));

var _ConnectEntry = _interopRequireDefault(require("./ConnectEntry"));

var _CardStyle = _interopRequireDefault(require("./CardStyle"));

var _store = require("../../../global/store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextArea = _antd.Input.TextArea,
    Search = _antd.Input.Search;
var batchEntryMap = _particulate.factory.batchEntryMap;

var mapEntry = _objectSpread({}, batchEntryMap({
  input: _antd.Input,
  select: _Select.default,
  radioGroup: _RadioGroup.default,
  checkboxGroup: _CheckboxGroup.default,
  inputNumber: _antd.InputNumber,
  rate: _antd.Rate,
  datePicker: _antd.DatePicker,
  textArea: TextArea,
  switch: _Switch.default,
  text: _Text.default,
  image: _Image.default,
  search: Search,
  treeSelect: _TreeSelect.default,
  cascader: _Cascader.default,
  upload: _CustomerImageUpload.default,
  cardStyle: _CardStyle.default,
  regionCascader: (0, _ConnectToEntry.default)(_Cascader.default, 'regionTree', _store.libAction.getConfigRegion),
  connectSelect: (0, _ConnectEntry.default)(_Select.default),
  connectTreeSelect: (0, _ConnectEntry.default)(_TreeSelect.default),
  connectCascader: (0, _ConnectEntry.default)(_Cascader.default),
  connectRadioGroup: (0, _ConnectEntry.default)(_RadioGroup.default),
  tagGroup: _CheckableTagGroup.default,
  dateRange: _DateRange.default,
  steps: _antd.Steps
}));

exports.mapEntry = mapEntry;

function factoryEntry(key, option) {
  if (!(0, _particulate.hasOwnProperty)(mapEntry, key)) {
    throw new Error("".concat(key, " entry is not defined"));
  }

  return mapEntry[key](option);
}

function registryEntry(key, entry) {
  if (decision(key) === 'object') {
    Object.keys(key).map(function (keyClone, item) {
      return registryEntry(keyClone, key[keyClone]);
    });
  } else if (typeof entry !== 'undefined') {
    if ((0, _particulate.hasOwnProperty)(mapEntry, key)) throw new Error("".concat(key, " entry existence"));
    Object.assign(mapEntry, _defineProperty({}, key, entry));
  } else throw new Error('parameter is incorrect');
}

var _default = factoryEntry;
exports.default = _default;