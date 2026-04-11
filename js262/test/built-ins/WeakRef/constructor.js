

/*---
esid: sec-weak-ref-constructor
description: >
  The WeakRef constructor is the %WeakRef% intrinsic object and the initial
  value of the WeakRef property of the global object.
features: [WeakRef]
---*/

assert.sameValue(
  typeof WeakRef, 'function',
  'typeof WeakRef is function'
);
