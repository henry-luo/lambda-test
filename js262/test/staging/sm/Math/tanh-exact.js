

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-Math-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assert.sameValue(Math.tanh(NaN), NaN);


assert.sameValue(Math.tanh(+0), +0);


assert.sameValue(Math.tanh(-0), -0);


assert.sameValue(Math.tanh(Number.POSITIVE_INFINITY), +1);


assert.sameValue(Math.tanh(Number.NEGATIVE_INFINITY), -1);

