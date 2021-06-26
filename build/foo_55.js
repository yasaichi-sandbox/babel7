"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

_promise.default.resolve('foo');

'foo'.includes('bar');

async function foo() {
  await 1;
}

[1, 2, 3].map(n => n * 2);