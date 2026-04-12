

/*---
esid: sec-todatestring
description: Invalid Dates are rendered as "Invalid Date"
info: |
  ToDateString ( tv )

  ...
  2. If tv is NaN, return "Invalid Date".
  ...
---*/

assert.sameValue(new Date(NaN).toString(), "Invalid Date");
