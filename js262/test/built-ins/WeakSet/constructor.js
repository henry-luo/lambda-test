

/*---
esid: sec-weakset-constructor
description: >
  The WeakSet constructor is the %WeakSet% intrinsic object and the initial
  value of the WeakSet property of the global object.
---*/

assert.sameValue(
  typeof WeakSet, 'function',
  'typeof WeakSet is "function"'
);
