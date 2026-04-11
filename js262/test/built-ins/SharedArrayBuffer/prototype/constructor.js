

/*---
description: >
  The `SharedArrayBuffer.prototype.constructor` property descriptor.
includes: [propertyHelper.js]
features: [SharedArrayBuffer]
---*/

assert.sameValue(SharedArrayBuffer.prototype.constructor, SharedArrayBuffer);

verifyProperty(SharedArrayBuffer.prototype, "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
