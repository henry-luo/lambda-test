

/*---
esid: sec-atomics.exchange
description: Testing descriptor property of Atomics.exchange
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics, 'exchange', {
  enumerable: false,
  writable: true,
  configurable: true,
});
