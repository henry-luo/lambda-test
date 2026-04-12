

/*---
esid: sec-number-format-functions
description: >
  Tests that the default value for the argument of
  Intl.NumberFormat.prototype.format (value) is undefined.
info: |
  11.1.4 Number Format Functions

  3. If value is not provided, let value be undefined.
  4. Let x be ? ToNumber(value).
---*/

const nf = new Intl.NumberFormat();


const resultNaN = nf.format(NaN);

assert.sameValue(nf.format(), resultNaN);
assert.sameValue(nf.format(undefined), resultNaN);
