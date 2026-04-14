

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-Math-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assert.sameValue(Math.cbrt(NaN), NaN);


assert.sameValue(Math.cbrt(+0), +0);


assert.sameValue(Math.cbrt(-0), -0);


assert.sameValue(Math.cbrt(Infinity), Infinity);


assert.sameValue(Math.cbrt(-Infinity), -Infinity);

