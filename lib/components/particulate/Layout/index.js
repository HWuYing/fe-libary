"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable */
var _default = function _default(props) {
  var _props$children = props.children,
      children = _props$children === void 0 ? [] : _props$children,
      col = props.col,
      reset = _objectWithoutProperties(props, ["children", "col"]);

  var rowList = [];
  var row = Math.ceil(children.length / col);
  var splitNode;
  var cursor = 0;
  var remainingSpan;
  var currentSpan;
  var nodeProps;

  while (cursor < row) {
    splitNode = children.slice(cursor * col, (cursor + 1) * col);
    remainingSpan = 24;
    rowList.push(_react.default.createElement(_antd.Row, _extends({}, reset, {
      gutter: 20,
      key: cursor.toString()
    }), splitNode.map(function ( //eslint-disable-line
    node, index) {
      nodeProps = node && node.props || {};
      currentSpan = nodeProps && nodeProps.layoutSpan || remainingSpan / (col - index);
      remainingSpan -= currentSpan;
      return _react.default.createElement(_antd.Col, {
        key: (cursor * 3 + index).toString(),
        span: currentSpan
      }, node);
    })));
    cursor += 1;
  }

  return _react.default.createElement(_react.Fragment, null, rowList);
};

exports.default = _default;