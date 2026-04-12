

/*---
esid: sec-atomics.exchange
description: >
  Atomics.exchange.name is "exchange".
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics.exchange, 'name', {
  value: 'exchange',
  enumerable: false,
  writable: false,
  configurable: true,
});
