

/*---
esid: sec-dataview.prototype.setuint16
description: >
  Throws a RangeError if getIndex < 0
info: |
  24.2.4.19 DataView.prototype.setUint16 ( byteOffset, value [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be false.
  3. Return ? SetViewValue(v, byteOffset, littleEndian, "Uint16", value).

  24.2.1.2 SetViewValue ( view, requestIndex, isLittleEndian, type, value )

  ...
  4. Let getIndex be ? ToIndex(requestIndex).
  ...
features: [DataView.prototype.getUint16]
---*/

var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);

assert.throws(RangeError, function() {
  sample.setUint16(-1, 39);
}, "-1");
assert.sameValue(sample.getUint16(0), 0, "-1 - no value was set");

assert.throws(RangeError, function() {
  sample.setUint16(-Infinity, 39);
}, "-Infinity");
assert.sameValue(sample.getUint16(0), 0, "-Infinity - no value was set");
