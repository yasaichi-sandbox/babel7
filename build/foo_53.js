"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

_promise.default.resolve('foo');

'foo'.includes('bar');

function foo() {
  return _foo.apply(this, arguments);
}

function _foo() {
  _foo = (0, _asyncToGenerator2.default)(function* () {
    yield 1;
  });
  return _foo.apply(this, arguments);
}

[1, 2, 3].map(n => n * 2);