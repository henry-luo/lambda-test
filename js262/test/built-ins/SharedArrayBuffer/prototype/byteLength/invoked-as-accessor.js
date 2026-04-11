

/*---
description: Requires this value to have a [[ArrayBufferData]] internal slot
features: [SharedArrayBuffer]
---*/

assert.throws(TypeError, function() {
  SharedArrayBuffer.prototype.byteLength;
});
