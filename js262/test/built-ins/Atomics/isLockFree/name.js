

/*---
esid: sec-atomics.islockfree
description: >
  Atomics.isLockFree.name is "isLockFree".
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics.isLockFree, 'name', {
  value: 'isLockFree',
  enumerable: false,
  writable: false,
  configurable: true,
});
