

/*---
esid: sec-atomics.xor
description: Testing descriptor property of Atomics.xor
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics, 'xor', {
  enumerable: false,
  writable: true,
  configurable: true,
});
