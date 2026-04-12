

/*---
esid: sec-uint8array.prototype.setfromhex
description: Uint8Array.prototype.setFromHex throws on detatched buffers
includes: [detachArrayBuffer.js]
features: [uint8array-base64, TypedArray]
---*/

var target = new Uint8Array([255, 255, 255]);
$DETACHBUFFER(target.buffer);
assert.throws(TypeError, function() {
  target.setFromHex('aa');
});
