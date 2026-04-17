

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-Math-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assert.sameValue(Math.expm1(NaN), NaN);


assert.sameValue(Math.expm1(+0), +0);


assert.sameValue(Math.expm1(-0), -0);


assert.sameValue(Math.expm1(Infinity), Infinity);


assert.sameValue(Math.expm1(-Infinity), -1);

