

/*---
esid: sec-atomics.compareexchange
description: >
  Atomics.compareExchange.name is "compareExchange".
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics.compareExchange, 'name', {
  value: 'compareExchange',
  enumerable: false,
  writable: false,
  configurable: true,
});
