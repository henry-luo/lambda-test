

/*---
esid: sec-uint8array.fromhex
description: >
  Uint8Array.fromHex is not a constructor function.
includes: [isConstructor.js]
features: [uint8array-base64, TypedArray, Reflect.construct]
---*/

assert(!isConstructor(Uint8Array.fromHex), "Uint8Array.fromHex is not a constructor");

assert.throws(TypeError, function() {
  new Uint8Array.fromHex('');
});
