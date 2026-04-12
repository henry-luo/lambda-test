

/*---
esid: sec-number.isfinite
description: >
  Return false if argument is Infinity or -Infinity
info: |
  Number.isFinite ( number )

  [...]
  2. If number is NaN, +∞, or -∞, return false.
  [...]
---*/

assert.sameValue(Number.isFinite(Infinity), false, "+Infinity");
assert.sameValue(Number.isFinite(-Infinity), false, "-Infinity");
