

/*---
esid: sec-number.negative_infinity
description: >
  The value of Number.NEGATIVE_INFINITY is -Infinity
info: |
  Number.NEGATIVE_INFINITY

  The value of Number.NEGATIVE_INFINITY is -∞.
---*/

assert.sameValue(Number.NEGATIVE_INFINITY, -Infinity);
