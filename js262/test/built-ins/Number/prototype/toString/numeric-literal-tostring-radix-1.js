

/*---
esid: sec-number.prototype.tostring
description: >
  If radixNumber < 2 or radixNumber > 36, throw a RangeError exception.
---*/

assert.throws(RangeError, () => {
  0..toString(1);
});
assert.throws(RangeError, () => {
  1..toString(1);
});
assert.throws(RangeError, () => {
  NaN.toString(1);
});
assert.throws(RangeError, () => {
  Infinity.toString(1);
});
