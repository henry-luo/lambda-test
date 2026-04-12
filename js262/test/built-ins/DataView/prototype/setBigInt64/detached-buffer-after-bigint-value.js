

/*---
esid: sec-dataview.prototype.setbigint64
description: >
  Detached buffer is checked after ToBigInt(value)
includes: [detachArrayBuffer.js]
features: [DataView, ArrayBuffer, BigInt]
---*/

var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);

var v = {
  valueOf() {
    throw new Test262Error();
  }
};

$DETACHBUFFER(buffer);
assert.throws(Test262Error, function() {
  sample.setBigInt64(0, v);
});
