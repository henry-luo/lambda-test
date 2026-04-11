

/*---
esid: sec-date.prototype.gettime
description: Return value for valid dates
info: |
  1. Return ? thisTimeValue(this value). 
---*/

assert.sameValue(new Date(0).getTime(), 0, '+0');
assert.sameValue(new Date(-0).getTime(), 0, '-0');
assert.sameValue(new Date(-1).getTime(), -1);
assert.sameValue(new Date(1).getTime(), 1);
assert.sameValue(new Date(8640000000000000).getTime(), 8640000000000000);
assert.sameValue(new Date(-8640000000000000).getTime(), -8640000000000000);
