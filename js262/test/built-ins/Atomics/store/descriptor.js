

/*---
esid: sec-atomics.store
description: Testing descriptor property of Atomics.store
includes: [propertyHelper.js]
features: [Atomics]
---*/
verifyProperty(Atomics, 'store', {
  enumerable: false,
  writable: true,
  configurable: true,
});
