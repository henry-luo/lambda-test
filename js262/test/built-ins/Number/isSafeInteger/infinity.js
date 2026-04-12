

/*---
esid: sec-number.issafeinteger
description: >
  Return false if argument is an Infinity value
info: |
  Number.isSafeInteger ( number )

  [...]
  2. If number is NaN, +∞, or -∞, return false.
  [...]
---*/

assert.sameValue(Number.isSafeInteger(Infinity), false, "Infinity");
assert.sameValue(Number.isSafeInteger(-Infinity), false, "-Infinity");
