

/*---
esid: sec-uint8array.prototype.tobase64
description: >
  Uint8Array.prototype.toBase64 has default data property attributes.
includes: [propertyHelper.js]
features: [uint8array-base64, TypedArray]
---*/

verifyProperty(Uint8Array.prototype, 'toBase64', {
  enumerable: false,
  writable: true,
  configurable: true
});
