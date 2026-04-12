

/*---
esid: sec-uint8array.frombase64
description: >
  Uint8Array.fromBase64.name is "fromBase64".
includes: [propertyHelper.js]
features: [uint8array-base64, TypedArray]
---*/

verifyProperty(Uint8Array.fromBase64, 'name', {
  value: 'fromBase64',
  enumerable: false,
  writable: false,
  configurable: true
});
