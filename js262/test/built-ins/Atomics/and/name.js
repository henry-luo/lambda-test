

/*---
esid: sec-atomics.and
description: >
  Atomics.and.name is "and".
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics.and, 'name', {
  value: 'and',
  enumerable: false,
  writable: false,
  configurable: true,
});
