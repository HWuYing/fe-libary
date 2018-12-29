"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMicroCatch = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _util = require("@mixin/util");

var _tools = require("@tools");

var _fetch = require("@fetch");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var get = _fetch.fetchText.get;
var microCache = {};

var getMicroCatch = function getMicroCatch(hashKey) {
  return microCache[hashKey];
};

exports.getMicroCatch = getMicroCatch;

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(menu, context) {
    var host, html, type, Page;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            host = menu.hasKey;

            if (host) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            html = '';
            _context.prev = 4;
            _context.next = 7;
            return get("http://".concat(host.replace(/[\\/]*$/, ''), "/render").concat(menu.path), {
              context: context
            });

          case 7:
            html = _context.sent;
            _context.next = 15;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](4);
            type = (0, _tools.typeMold)(_context.t0);
            html = _context.t0 instanceof Error ? _context.t0.message : type('object') ? JSON.stringify(_context.t0) : _context.t0;
            console.log(_context.t0);

          case 15:
            Page = function Page() {
              return _react.default.createElement("div", {
                className: "page-component flex flex-column",
                dangerouslySetInnerHTML: {
                  __html: html.replace(/^<div class="page-component flex flex-column">([\S\s]*)<\/div>$/, '$1')
                }
              });
            };

            microCache[host] = {
              AppMicro: function AppMicro(_ref2) {
                var children = _ref2.children;
                return _react.default.createElement(_react.Fragment, null, children);
              },
              $util: (0, _util.createUtil)(host)
            };
            return _context.abrupt("return", {
              path: menu.path,
              Page: Page
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 10]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;