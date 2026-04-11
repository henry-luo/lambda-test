

/*---
description: Math.LN2 is a numeric value
esid: sec-math.ln2
info: |
    The Number value for the natural logarithm of 2, which is approximately
    0.6931471805599453.

    The precision of this approximation is host-defined.
---*/

assert.sameValue(typeof Math.LN2, 'number');
assert.notSameValue(Math.LN2, NaN);
