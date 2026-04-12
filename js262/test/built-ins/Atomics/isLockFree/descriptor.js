

/*---
esid: sec-atomics.islockfree
description: Testing descriptor property of Atomics.isLockFree
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics, 'isLockFree', {
  enumerable: false,
  writable: true,
  configurable: true,
});
