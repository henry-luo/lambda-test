

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-Math-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assert.sameValue(Math.exp(NaN), NaN);


assert.sameValue(Math.exp(+0), 1);


assert.sameValue(Math.exp(-0), 1);


assert.sameValue(Math.exp(Infinity), Infinity);


assert.sameValue(Math.exp(-Infinity), +0);


assert.sameValue(Math.exp(1), Math.E);


assert.sameValue(Math.exp(-1), 1 / Math.E);

