

/*---
esid: sec-atomics.wait
description: Testing descriptor property of Atomics.wait
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics, 'wait', {
  enumerable: false,
  writable: true,
  configurable: true,
});
