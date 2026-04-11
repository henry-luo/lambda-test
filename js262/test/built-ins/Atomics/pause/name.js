

/*---
esid: sec-atomics.pause
description: Atomics.pause.name is "pause".
includes: [propertyHelper.js]
features: [Atomics.pause]
---*/

verifyProperty(Atomics.pause, 'name', {
  value: 'pause',
  enumerable: false,
  writable: false,
  configurable: true,
});
