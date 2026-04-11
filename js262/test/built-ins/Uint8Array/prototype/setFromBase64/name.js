

/*---
esid: sec-uint8array.prototype.setfrombase64
description: >
  Uint8Array.prototype.setFromBase64.name is "setFromBase64".
includes: [propertyHelper.js]
features: [uint8array-base64, TypedArray]
---*/

verifyProperty(Uint8Array.prototype.setFromBase64, 'name', {
  value: 'setFromBase64',
  enumerable: false,
  writable: false,
  configurable: true
});
