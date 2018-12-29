"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factoryRecursion = factoryRecursion;

var _decisionType = _interopRequireWildcard(require("./decisionType"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function factoryRecursion(tree) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
  var isDelete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  function recursion(pCurrent, current, handler) {
    var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var type = (0, _decisionType.default)(current);
    var children;

    if (type === 'array') {
      current.forEach(function (item, index) {
        executeRecursion(pCurrent, item, handler, _toConsumableArray(hash ? [hash] : []).concat([index]).join('-'));
      });
    } else if (type === 'object') {
      children = current[key];

      if ((0, _decisionType.isArray)(children)) {
        if (children.length) {
          Object.assign(current, _defineProperty({}, key, recursion(current, children, handler, hash) || children));
        } else if (isDelete) {
          delete current[key];
        }
      }
    }

    return current;
  }

  function executeRecursion(pTree, eTree, handler, hash) {
    if (handler && (0, _decisionType.isObject)(eTree)) handler(eTree, pTree, hash);
    return recursion(pTree, eTree, handler, hash);
  }

  return {
    each: function each(handler) {
      return executeRecursion({}, tree, handler, (0, _decisionType.isArray)(tree) ? '' : 0);
    },
    find: function find(hash) {
      return hash.split('-').reduce(function (fTree, fKey) {
        return fTree[key][fKey];
      }, _defineProperty({}, key, (0, _decisionType.isObject)(tree) ? [tree] : tree));
    }
  };
}