

/*---
description: |
  Number.parseFloat(string)
info: bugzilla.mozilla.org/show_bug.cgi?id=886949
esid: pending
---*/

assert.sameValue(Number.parseFloat("Infinity"), Infinity);
assert.sameValue(Number.parseFloat("+Infinity"), Infinity);
assert.sameValue(Number.parseFloat("-Infinity"), -Infinity);

assert.sameValue(Number.parseFloat("inf"), NaN);
assert.sameValue(Number.parseFloat("Inf"), NaN);
assert.sameValue(Number.parseFloat("infinity"), NaN);

assert.sameValue(Number.parseFloat("nan"), NaN);
assert.sameValue(Number.parseFloat("NaN"), NaN);


assert.sameValue(Number.parseFloat, parseFloat);
