"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import ComponentStore from '../store';
function fetchComponentSend(_x) {
  return _fetchComponentSend.apply(this, arguments);
}

function _fetchComponentSend() {
  _fetchComponentSend = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var store, context, _store$reactNode$comp, components;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store, context = _ref.context;
            _store$reactNode$comp = store.reactNode.components, components = _store$reactNode$comp === void 0 ? [] : _store$reactNode$comp;
            _context.next = 4;
            return Promise.all(components.map(function (component) {
              return formatComponent({
                store: {
                  reactNode: component
                },
                context: context
              });
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _fetchComponentSend.apply(this, arguments);
}

function formatComponent(_x2) {
  return _formatComponent.apply(this, arguments);
}

function _formatComponent() {
  _formatComponent = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref2) {
    var store, context, res, reactNode, getMounted, isMounted;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            store = _ref2.store, context = _ref2.context;
            reactNode = store.reactNode, getMounted = store.getMounted;
            isMounted = getMounted && getMounted(context) || false;

            if (!(!isMounted && reactNode)) {
              _context2.next = 10;
              break;
            }

            if (!reactNode.preFetch) {
              _context2.next = 8;
              break;
            }

            _context2.next = 7;
            return reactNode.preFetch(context);

          case 7:
            res = _context2.sent;

          case 8:
            if (reactNode.setData) reactNode.setData(res);
            if (store.setMounted) store.setMounted(context, true);

          case 10:
            _context2.next = 12;
            return fetchComponentSend({
              store: store,
              context: context
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _formatComponent.apply(this, arguments);
}

var _default = function _default(_ref3) {
  var store = _ref3.store,
      context = _ref3.context;
  return function (next) {
    return function () {
      return new Promise(function (resolve, reject) {
        return formatComponent({
          store: store,
          context: context
        }).then(function () {
          next();
        }).catch(function (e) {
          /* eslint-disable no-console */
          console.log(e);
          reject(e);
        });
      });
    };
  };
};

exports.default = _default;