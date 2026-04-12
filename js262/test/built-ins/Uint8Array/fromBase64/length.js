

/*---
esid: sec-uint8array.frombase64
description: >
  Uint8Array.fromBase64.length is 1.
includes: [propertyHelper.js]
features: [uint8array-base64, TypedArray]
---*/

verifyProperty(Uint8Array.fromBase64, 'length', {
  value: 1,
  enumerable: false,
  writable: false,
  configurable: true
});
