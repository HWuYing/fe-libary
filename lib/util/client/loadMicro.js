"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMicroCatch = getMicroCatch;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _fetch = _interopRequireDefault(require("@fetch"));

var _util = require("@mixin/util");

var _applyStore = require("@applyStore");

var _tools = require("@tools");

var _mixin = require("@mixin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var $eventbus = (0, _mixin.getEventBus)();

var mixin = require('@mixin');

var applyStore = require('@applyStore');

var applyComponent = require('@applyComponent');

var ReactRequire = require('react');

var ReactDOM = require('react-dom');

var asyncModule = require('../tools/asyncModule');

var get = _fetch.default.get;
var microCache = {};
var app = {
  asyncModule: asyncModule,
  mixin: mixin,
  applyStore: applyStore,
  applyComponent: applyComponent,
  react: ReactRequire,
  'react-dom': ReactDOM,
  'react-amap': require('react-amap'),
  'react-dnd': require('react-dnd'),
  'react-dnd-html5-backend': require('react-dnd-html5-backend'),
  antd: require('antd')
};

function foramtHost(host) {
  var hashFormat = host.replace(/\/*$/, '');
  return /^http|https/.test(hashFormat) ? hashFormat : "http://".concat(hashFormat);
}

function factoryAppMicro(store) {
  return function (_ref) {
    var children = _ref.children,
        reset = _objectWithoutProperties(_ref, ["children"]);

    return _react.default.createElement(_applyStore.ApplyProvider, _extends({
      store: store
    }, reset), _react.default.createElement(_react.Fragment, null, children));
  };
}

function getMicroResource(host, resource, _loadSuccess) {
  var iframe = document.createElement('iframe');
  iframe.src = host;
  iframe.srcdoc = '';
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  var contentWindow = iframe.contentWindow,
      contentDocument = iframe.contentDocument;
  Object.assign(contentWindow, {
    app: _objectSpread({}, app, {
      loadSuccess: function loadSuccess() {
        for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
          arg[_key] = arguments[_key];
        }

        return _loadSuccess([iframe].concat(arg));
      }
    }),
    getFeWindowKey: function getFeWindowKey(key) {
      return window[key];
    },
    PLATFORM: window.PLATFORM,
    getToken: function getToken() {
      return window.getToken();
    }
  });
  var scripts = resource.scriptList.reduce(function (str, script) {
    return "".concat(str, "<script src=\"").concat(host).concat(script, "\"></script>");
  }, '');
  scripts += '<script>window.app.loadSuccess(window)</script>';
  contentDocument.write("<head><base href=\"".concat(host, "\" /></head><body>").concat(scripts, "</body>"));
}

function getMicroConfig(_x) {
  return _getMicroConfig.apply(this, arguments);
}

function _getMicroConfig() {
  _getMicroConfig = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(host) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", get("".concat(host.replace(/[\\/]*$/, ''), "/index.json"), {
              isNotError: true
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getMicroConfig.apply(this, arguments);
}

function setStyleConfig(_x2, _x3, _x4) {
  return _setStyleConfig.apply(this, arguments);
}

function _setStyleConfig() {
  _setStyleConfig = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(host, resource, iframe) {
    var _document, head, iHead, firstNode;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _document = document, head = _document.head;
            iHead = iframe.contentDocument.head;
            firstNode = document.head.querySelector('meta');
            resource.linkList.forEach(function (href) {
              var link = document.createElement('link');
              Object.assign(link, {
                rel: 'stylesheet',
                type: 'text/css',
                href: "".concat(host).concat(href)
              });
              head.insertBefore(link, firstNode);
            });
            Array.prototype.slice.call(iHead.querySelectorAll('style')).forEach(function (style) {
              head.insertBefore(style, firstNode);
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _setStyleConfig.apply(this, arguments);
}

function loadMicroResource(host, config) {
  $eventbus.$emit('LOADING-OPEN');
  return new Promise(function (resolve) {
    return getMicroResource(host, config, resolve);
  }).then(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        iframe = _ref3[0],
        res = _ref3[1];

    setStyleConfig(host, config, iframe);
    microCache[host] = Object.assign(res, {
      AppMicro: factoryAppMicro(res.store),
      $util: (0, _util.createUtil)(host),
      host: host
    });
    $eventbus.$emit('LOADING-CLOSE');
    return res;
  }).catch(function (e) {
    $eventbus.$emit('LOADING-CLOSE');
    throw e;
  });
}

function getMicroCatch(hasKey) {
  var host = foramtHost(hasKey);
  return microCache[host];
}

function microConfigError(menu, e) {
  var type = (0, _tools.typeMold)(e);
  var html = e instanceof Error ? e.message : type('object') ? JSON.stringify(e) : e;

  var Page = function Page() {
    return _react.default.createElement("div", {
      className: "page-component flex flex-column",
      dangerouslySetInnerHTML: {
        __html: html.replace(/^<div class="page-component flex flex-column">([\S\s]*)<\/div>$/, '$1')
      }
    });
  };

  return {
    path: menu.path,
    Page: Page
  };
}

var _default =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(menu) {
    var host, rootContext, config;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            host = menu.hasKey && foramtHost(menu.hasKey);
            rootContext = false;
            config = {};

            if (!(host && !(0, _tools.hasOwnProperty)(microCache, host))) {
              _context.next = 16;
              break;
            }

            _context.prev = 4;
            _context.next = 7;
            return getMicroConfig(host);

          case 7:
            config = _context.sent;
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](4);
            config = {
              scriptList: [],
              linkList: []
            };
            rootContext = microConfigError(menu, _context.t0);

          case 14:
            _context.next = 16;
            return loadMicroResource(host, config);

          case 16:
            return _context.abrupt("return", rootContext);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 10]]);
  }));

  return function (_x5) {
    return _ref4.apply(this, arguments);
  };
}();

exports.default = _default;