

/*---
esid: sec-atomics.or
description: Testing descriptor property of Atomics.or
includes: [propertyHelper.js]
features: [Atomics]
---*/
verifyProperty(Atomics, 'or', {
  enumerable: false,
  writable: true,
  configurable: true,
});
