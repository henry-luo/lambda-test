

/*---
esid: sec-number.prototype.tofixed
description: Number.prototype.toFixed permits fractionDigits from 0 to 100
info: |
  Number.prototype.toFixed ( fractionDigits )

  ...
  3. If _f_ &lt; 0 or _f_ &gt; 100, throw a *RangeError* exception.
  ...
---*/

assert.sameValue((3).toFixed(-0), "3");
assert.throws(RangeError, () => (3).toFixed(-1));

assert.sameValue((3).toFixed(100), "3.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
assert.throws(RangeError, () => (3).toFixed(101));
