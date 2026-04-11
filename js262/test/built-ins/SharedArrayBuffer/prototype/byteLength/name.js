

/*---
description: >
  get SharedArrayBuffer.prototype.byteLength

includes: [propertyHelper.js]
features: [SharedArrayBuffer]
---*/

var descriptor = Object.getOwnPropertyDescriptor(
  SharedArrayBuffer.prototype, 'byteLength'
);

verifyProperty(descriptor.get, "name", {
  value: "get byteLength",
  writable: false,
  enumerable: false,
  configurable: true
});
