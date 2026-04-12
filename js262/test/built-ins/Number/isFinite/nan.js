

/*---
esid: sec-number.isfinite
description: >
  Return false if argument is NaN
info: |
  Number.isFinite ( number )

  [...]
  2. If number is NaN, +∞, or -∞, return false.
  [...]
---*/

assert.sameValue(Number.isFinite(NaN), false);
