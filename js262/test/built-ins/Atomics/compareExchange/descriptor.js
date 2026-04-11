

/*---
esid: sec-atomics.compareexchange
description: Testing descriptor property of Atomics.compareExchange
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics, 'compareExchange', {
  enumerable: false,
  writable: true,
  configurable: true,
});
