

/*---
esid: sec-uint8array.prototype.setfrombase64
description: >
  Uint8Array.prototype.setFromBase64.length is 1.
includes: [propertyHelper.js]
features: [uint8array-base64, TypedArray]
---*/

verifyProperty(Uint8Array.prototype.setFromBase64, 'length', {
  value: 1,
  enumerable: false,
  writable: false,
  configurable: true
});
