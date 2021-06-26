"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _context, _context2;

_promise.default.resolve('foo');

(0, _includes.default)(_context = 'foo').call(_context, 'bar');

function foo() {
  return _foo.apply(this, arguments);
}

function _foo() {
  _foo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return 1;

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee);
  }));
  return _foo.apply(this, arguments);
}

(0, _map.default)(_context2 = [1, 2, 3]).call(_context2, function (n) {
  return n * 2;
});