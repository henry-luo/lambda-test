

/*---
esid: sec-uint8array.prototype.tobase64
description: >
  Uint8Array.prototype.toBase64 is not a constructor function.
includes: [isConstructor.js]
features: [uint8array-base64, TypedArray, Reflect.construct]
---*/

assert(!isConstructor(Uint8Array.prototype.toBase64), "Uint8Array.prototype.toBase64 is not a constructor");

var uint8Array = new Uint8Array(8);
assert.throws(TypeError, function() {
  new uint8Array.toBase64();
});
