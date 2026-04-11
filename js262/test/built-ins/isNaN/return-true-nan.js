

/*---
esid: sec-isnan-number
description: >
  Return true if number is NaN
info: |
  isNaN (number)

  1. Let num be ? ToNumber(number).
  2. If num is NaN, return true.
includes: [nans.js]
---*/

NaNs.forEach(function(v, i) {
  assert.sameValue(isNaN(v), true, "value on position: " + i);
});
