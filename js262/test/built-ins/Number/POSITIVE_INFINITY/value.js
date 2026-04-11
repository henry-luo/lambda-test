

/*---
esid: sec-number.positive_infinity
description: >
  The value of Number.POSITIVE_INFINITY is +Infinity
info: |
  Number.POSITIVE_INFINITY

  The value of Number.POSITIVE_INFINITY is +∞.
---*/

assert.sameValue(Number.POSITIVE_INFINITY, Infinity);
