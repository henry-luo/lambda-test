

/*---
esid: sec-dataview.prototype.setbigint64
description: >
  Throws a TypeError if buffer is detached
includes: [detachArrayBuffer.js]
features: [DataView, ArrayBuffer, BigInt]
---*/

var buffer = new ArrayBuffer(1);
var sample = new DataView(buffer, 0);

$DETACHBUFFER(buffer);
assert.throws(TypeError, function() {
  sample.setBigInt64(0, 0n);
});
