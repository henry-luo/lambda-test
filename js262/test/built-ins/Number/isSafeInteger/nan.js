

/*---
esid: sec-number.issafeinteger
description: >
  Return false if argument is NaN
info: |
  Number.isSafeInteger ( number )

  [...]
  2. If number is NaN, +∞, or -∞, return false.
  [...]
---*/

assert.sameValue(Number.isSafeInteger(NaN), false);
