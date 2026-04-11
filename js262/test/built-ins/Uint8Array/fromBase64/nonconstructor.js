

/*---
esid: sec-uint8array.frombase64
description: >
  Uint8Array.fromBase64 is not a constructor function.
includes: [isConstructor.js]
features: [uint8array-base64, TypedArray, Reflect.construct]
---*/

assert(!isConstructor(Uint8Array.fromBase64), "Uint8Array.fromBase64 is not a constructor");

assert.throws(TypeError, function() {
  new Uint8Array.fromBase64('');
});
