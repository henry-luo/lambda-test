

/*---
esid: sec-date.prototype.todatestring
description: Invalid Dates are rendered as "Invalid Date"
info: |
  Date.prototype.toDateString ( )

  ...
  3. If tv is NaN, return "Invalid Date".
  ...
---*/

assert.sameValue(new Date(NaN).toDateString(), "Invalid Date");
