

/*---
esid: sec-finalization-registry-constructor
description: >
  The FinalizationRegistry constructor is the %FinalizationRegistry% intrinsic object and the initial
  value of the FinalizationRegistry property of the global object.
features: [FinalizationRegistry]
---*/

assert.sameValue(
  typeof FinalizationRegistry, 'function',
  'typeof FinalizationRegistry is function'
);
