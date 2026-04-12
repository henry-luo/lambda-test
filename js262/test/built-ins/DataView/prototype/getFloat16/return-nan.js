

/*---
esid: sec-dataview.prototype.getfloat16
description: >
  Return NaN values
features: [Float16Array, DataView.prototype.setUint8]
---*/

var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);

sample.setUint8(0, 126); 
sample.setUint8(1, 0);
sample.setUint8(2, 254); 
sample.setUint8(3, 0);

assert.sameValue(sample.getFloat16(0), NaN);
assert.sameValue(sample.getFloat16(2), NaN);
