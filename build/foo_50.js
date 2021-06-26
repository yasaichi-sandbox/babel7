"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

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
  _foo = (0, _asyncToGenerator2.default)(function* () {
    yield 1;
  });
  return _foo.apply(this, arguments);
}

(0, _map.default)(_context2 = [1, 2, 3]).call(_context2, n => n * 2);