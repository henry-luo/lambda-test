

/*---
esid: sec-uint8array.fromhex
description: >
  Uint8Array.fromHex.name is "fromHex".
includes: [propertyHelper.js]
features: [uint8array-base64, TypedArray]
---*/

verifyProperty(Uint8Array.fromHex, 'name', {
  value: 'fromHex',
  enumerable: false,
  writable: false,
  configurable: true
});
