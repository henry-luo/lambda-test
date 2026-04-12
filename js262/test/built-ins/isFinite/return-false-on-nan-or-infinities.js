

/*---
esid: sec-isfinite-number
description: >
  Return false if number is NaN, Infinity or -Infinity
info: |
  isFinite (number)

  1. Let num be ? ToNumber(number).
  2. If num is NaN, +∞, or -∞, return false.
---*/

assert.sameValue(isFinite(NaN), false, "NaN");
assert.sameValue(isFinite(Infinity), false, "Infinity");
assert.sameValue(isFinite(-Infinity), false, "-Infinity");
