"use strict";

Promise.resolve('foo');
'foo'.includes('bar');

async function foo() {
  await 1;
}

[1, 2, 3].map(n => n * 2);