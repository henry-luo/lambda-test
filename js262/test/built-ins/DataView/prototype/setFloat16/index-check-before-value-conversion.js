

/*---
esid: sec-dataview.prototype.setfloat16
description: >
  RangeError exception for negative index is thrown before the value conversion.
features: [Float16Array]
---*/

var dataView = new DataView(new ArrayBuffer(8), 0);

var poisoned = {
  valueOf: function() {
    throw new Test262Error("valueOf called");
  }
};

assert.throws(RangeError, function() {
  dataView.setFloat16(-1.5, poisoned);
}, "setFloat16(-1.5, poisoned)");

assert.throws(RangeError, function() {
  dataView.setFloat16(-1, poisoned);
}, "setFloat16(-1, poisoned)");

assert.throws(RangeError, function() {
  dataView.setFloat16(-Infinity, poisoned);
}, "setFloat16(-Infinity, poisoned)");

assert.throws(RangeError, function() {
  dataView.setFloat16(Infinity, poisoned);
}, "setFloat16(Infinity, poisoned)");
