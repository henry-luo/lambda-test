

/*---
esid: sec-weakmap-constructor
description: >
  The WeakMap constructor is the %WeakMap% intrinsic object and the initial
  value of the WeakMap property of the global object.
---*/

assert.sameValue(
  typeof WeakMap, 'function',
  'typeof WeakMap is "function"'
);
