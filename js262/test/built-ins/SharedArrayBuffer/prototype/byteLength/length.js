

/*---
description: >
  get SharedArrayBuffer.prototype.byteLength.length is 0.
includes: [propertyHelper.js]
features: [SharedArrayBuffer]
---*/

var desc = Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "byteLength");

verifyProperty(desc.get, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
