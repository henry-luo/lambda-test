

/*---
esid: sec-dataview.prototype.getbiguint64
description: >
  Return abrupt from ToNumber(symbol byteOffset)
features: [DataView, ArrayBuffer, Symbol, BigInt, arrow-function]
---*/

var buffer = new ArrayBuffer(1);
var sample = new DataView(buffer, 0);

var s = Symbol("1");

assert.throws(TypeError, () => sample.getBigUint64(s));
