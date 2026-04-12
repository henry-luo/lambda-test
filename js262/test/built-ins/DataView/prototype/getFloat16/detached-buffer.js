

/*---
esid: sec-dataview.prototype.getfloat16
description: >
  Throws a TypeError if buffer is detached
features: [Float16Array]
includes: [detachArrayBuffer.js]
---*/

var buffer = new ArrayBuffer(1);
var sample = new DataView(buffer, 0);

$DETACHBUFFER(buffer);
assert.throws(TypeError, function() {
  sample.getFloat16(0);
});
