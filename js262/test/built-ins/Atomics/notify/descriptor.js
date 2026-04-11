

/*---
esid: sec-atomics.notify
description: Testing descriptor property of Atomics.notify
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics, 'notify', {
  enumerable: false,
  writable: true,
  configurable: true,
});
