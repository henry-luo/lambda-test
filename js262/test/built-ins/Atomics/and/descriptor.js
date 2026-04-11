

/*---
esid: sec-atomics.and
description: Testing descriptor property of Atomics.and
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics, 'and', {
  enumerable: false,
  writable: true,
  configurable: true,
});
