

/*---
esid: sec-atomics.or
description: >
  Atomics.or.name is "or".
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics.or, 'name', {
  value: 'or',
  enumerable: false,
  writable: false,
  configurable: true,
});
