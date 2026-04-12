

/*---
esid: sec-dataview.prototype.setfloat16
description: >
  Detached buffer is checked after ToNumber(value)
features: [Float16Array]
includes: [detachArrayBuffer.js]
---*/

var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);

var v = {
  valueOf: function() {
    throw new Test262Error();
  }
};

$DETACHBUFFER(buffer);
assert.throws(Test262Error, function() {
  sample.setFloat16(0, v);
});
