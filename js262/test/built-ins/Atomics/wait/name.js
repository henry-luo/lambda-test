

/*---
esid: sec-atomics.wait
description: >
  Atomics.wait.name is "wait".
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics.wait, 'name', {
  value: 'wait',
  enumerable: false,
  writable: false,
  configurable: true,
});
