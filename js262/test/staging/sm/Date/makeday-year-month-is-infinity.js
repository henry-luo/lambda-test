

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-Date-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assert.sameValue(Date.UTC(Number.MAX_VALUE, Number.MAX_VALUE), NaN);
assert.sameValue(new Date(Number.MAX_VALUE, Number.MAX_VALUE).getTime(), NaN);


var d = new Date(0);
d.setUTCFullYear(Number.MAX_VALUE, Number.MAX_VALUE);
assert.sameValue(d.getTime(), NaN);

