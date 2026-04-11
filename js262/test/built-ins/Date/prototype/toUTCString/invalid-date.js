

/*---
esid: sec-date.prototype.toutcstring
description: Invalid Dates are rendered as "Invalid Date"
info: |
  Date.prototype.toUTCString ( )

  ...
  3. If tv is NaN, return "Invalid Date".
  ...
---*/

assert.sameValue(new Date(NaN).toUTCString(), "Invalid Date");
