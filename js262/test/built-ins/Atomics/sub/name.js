

/*---
esid: sec-atomics.sub
description: >
  Atomics.sub.name is "sub".
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics.sub, 'name', {
  value: 'sub',
  enumerable: false,
  writable: false,
  configurable: true,
});

