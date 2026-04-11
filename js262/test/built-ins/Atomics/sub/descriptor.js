

/*---
esid: sec-atomics.sub
description: Testing descriptor property of Atomics.sub
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics, 'sub', {
  enumerable: false,
  writable: true,
  configurable: true,
});
