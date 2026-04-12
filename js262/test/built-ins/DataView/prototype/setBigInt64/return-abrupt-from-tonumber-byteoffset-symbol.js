

/*---
esid: sec-dataview.prototype.setbigint64
description: >
  Return abrupt from ToNumber(symbol byteOffset)
features: [DataView, ArrayBuffer, Symbol, BigInt]
---*/

var buffer = new ArrayBuffer(1);
var sample = new DataView(buffer, 0);

var s = Symbol("1");

assert.throws(TypeError, function() {
  sample.setBigInt64(s, 1n);
});
