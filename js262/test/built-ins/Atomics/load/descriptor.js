

/*---
esid: sec-atomics.load
description: Testing descriptor property of Atomics.load
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics, 'load', {
  enumerable: false,
  writable: true,
  configurable: true,
});
