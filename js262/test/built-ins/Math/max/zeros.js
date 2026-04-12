

/*---
esid: sec-math.max
description: >
  +0 is considered to be larger than -0
info: |
  Math.max ( value1, value2 , …values )

  The comparison of values to determine the largest value is done using the
  Abstract Relational Comparison algorithm except that +0 is considered to be
  larger than -0.
---*/

assert.sameValue(Math.max(0, 0), 0, "(0, 0)");
assert.sameValue(Math.max(-0, -0), -0, "(-0, -0)");
assert.sameValue(Math.max(0, -0), 0, "(0, -0)");
assert.sameValue(Math.max(-0, 0), 0, "(-0, 0)");
assert.sameValue(Math.max(0, 0, -0), 0, "(0, 0, -0)");
