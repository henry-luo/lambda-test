

/*---
esid: sec-uint8array.prototype.setfromhex
description: >
  Uint8Array.prototype.setFromHex.name is "setFromHex".
includes: [propertyHelper.js]
features: [uint8array-base64, TypedArray]
---*/

verifyProperty(Uint8Array.prototype.setFromHex, 'name', {
  value: 'setFromHex',
  enumerable: false,
  writable: false,
  configurable: true
});
