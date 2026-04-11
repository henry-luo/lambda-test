

/*---
esid: sec-uint8array.prototype.setfrombase64
description: >
  Uint8Array.prototype.setFromBase64 has default data property attributes.
includes: [propertyHelper.js]
features: [uint8array-base64, TypedArray]
---*/

verifyProperty(Uint8Array.prototype, 'setFromBase64', {
  enumerable: false,
  writable: true,
  configurable: true
});
