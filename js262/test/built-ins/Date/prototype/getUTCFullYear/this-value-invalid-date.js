

/*---
esid: sec-date.prototype.getutcfullyear
description: Return value for invalid date
info: |
  1. Let t be ? thisTimeValue(this value).
  2. If t is NaN, return NaN.
---*/

assert.sameValue(new Date(NaN).getUTCFullYear(), NaN);
