

/*---
esid: sec-atomics.load
description: >
  Atomics.load.name is "load".
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics.load, 'name', {
  value: 'load',
  enumerable: false,
  writable: false,
  configurable: true,
});
