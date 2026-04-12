

/*---
esid: sec-date.prototype.gettime
description: Return value for invalid date
info: |
  1. Return ? thisTimeValue(this value). 
---*/

assert.sameValue(new Date(NaN).getTime(), NaN);
