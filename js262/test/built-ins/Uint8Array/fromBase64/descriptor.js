

/*---
esid: sec-uint8array.frombase64
description: >
  Uint8Array.fromBase64 has default data property attributes.
includes: [propertyHelper.js]
features: [uint8array-base64, TypedArray]
---*/

verifyProperty(Uint8Array, 'fromBase64', {
  enumerable: false,
  writable: true,
  configurable: true
});
