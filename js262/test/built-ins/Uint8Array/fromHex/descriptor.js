

/*---
esid: sec-uint8array.fromhex
description: >
  Uint8Array.fromHex has default data property attributes.
includes: [propertyHelper.js]
features: [uint8array-base64, TypedArray]
---*/

verifyProperty(Uint8Array, 'fromHex', {
  enumerable: false,
  writable: true,
  configurable: true
});
