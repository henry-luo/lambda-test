

/*---
esid: sec-dataview.prototype.setbigint64
description: >
  Set value as undefined (cast to 0) when value argument is not present
features: [DataView, ArrayBuffer, BigInt, arrow-function]
---*/

var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);

assert.throws(TypeError, () => sample.setBigInt64(0));
