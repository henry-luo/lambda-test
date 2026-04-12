

/*---
esid: sec-atomics.add
description: Testing descriptor property of Atomics.add
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics, 'add', {
  enumerable: false,
  writable: true,
  configurable: true,
});
