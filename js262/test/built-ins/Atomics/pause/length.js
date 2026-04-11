

/*---
esid: sec-atomics.pause
description: Atomics.pause.length is 0.
includes: [propertyHelper.js]
features: [Atomics.pause]
---*/

verifyProperty(Atomics.pause, 'length', {
  value: 0,
  enumerable: false,
  writable: false,
  configurable: true,
});
