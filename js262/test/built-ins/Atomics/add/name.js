

/*---
esid: sec-atomics.add
description: >
  Atomics.add.name is "add".
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics.add, 'name', {
  value: 'add',
  enumerable: false,
  writable: false,
  configurable: true,
});
