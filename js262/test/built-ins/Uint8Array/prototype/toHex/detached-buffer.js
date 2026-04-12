

/*---
esid: sec-uint8array.prototype.tohex
description: Uint8Array.prototype.toHex throws if called on a detached buffer
includes: [detachArrayBuffer.js]
features: [uint8array-base64, TypedArray]
---*/

var array = new Uint8Array(2);
$DETACHBUFFER(array.buffer);
assert.throws(TypeError, function() {
  array.toHex();
});

