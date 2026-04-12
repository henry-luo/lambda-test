

/*---
esid: sec-atomics.xor
description: >
  Atomics.xor.name is "xor".
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics.xor, 'name', {
  value: 'xor',
  enumerable: false,
  writable: false,
  configurable: true,
});
