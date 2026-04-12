

/*---
esid: sec-uint8array.fromhex
description: >
  Uint8Array.fromHex.length is 1.
includes: [propertyHelper.js]
features: [uint8array-base64, TypedArray]
---*/

verifyProperty(Uint8Array.fromHex, 'length', {
  value: 1,
  enumerable: false,
  writable: false,
  configurable: true
});
