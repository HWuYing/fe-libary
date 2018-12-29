"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Ellipsis = _interopRequireDefault(require("../../Entry/Ellipsis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return [{
    title: '商品名称',
    dataIndex: 'name',
    width: 300,
    render: function render(val) {
      return _react.default.createElement(_Ellipsis.default, {
        length: 26,
        tooltip: true
      }, val);
    }
  }, {
    title: '商品类目',
    dataIndex: 'categoryName',
    width: 100
  }, {
    title: '商品品牌',
    dataIndex: 'brandName',
    width: 100
  }];
};

exports.default = _default;