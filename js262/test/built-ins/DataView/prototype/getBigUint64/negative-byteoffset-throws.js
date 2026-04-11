

/*---
esid: sec-dataview.prototype.getbiguint64
description: >
  Throws a RangeError if getIndex < 0
features: [DataView, ArrayBuffer, BigInt, arrow-function]
---*/

var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);

assert.throws(RangeError, () => sample.getBigUint64(-1),
  "DataView access at index -1 should throw");

assert.throws(RangeError, () => sample.getBigUint64(-Infinity),
  "DataView access at index -Infinity should throw");
