

/*---
esid: sec-number.prototype.tostring
description: >
  If radixNumber < 2 or radixNumber > 36, throw a RangeError exception.
---*/

assert.throws(RangeError, () => {
  0..toString(37);
});
assert.throws(RangeError, () => {
  1..toString(37);
});
assert.throws(RangeError, () => {
  NaN.toString(37);
});
assert.throws(RangeError, () => {
  Infinity.toString(37);
});
