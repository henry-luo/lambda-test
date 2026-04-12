

/*---
esid: sec-uint8array.prototype.tohex
description: >
  Uint8Array.prototype.toHex has default data property attributes.
includes: [propertyHelper.js]
features: [uint8array-base64, TypedArray]
---*/

verifyProperty(Uint8Array.prototype, 'toHex', {
  enumerable: false,
  writable: true,
  configurable: true
});
