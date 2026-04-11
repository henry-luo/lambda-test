

/*---
esid: sec-atomics.pause
description: Testing descriptor property of Atomics.pause
includes: [propertyHelper.js]
features: [Atomics.pause]
---*/

verifyProperty(Atomics, 'pause', {
  enumerable: false,
  writable: true,
  configurable: true,
});
