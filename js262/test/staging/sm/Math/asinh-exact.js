

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-Math-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assert.sameValue(Math.asinh(NaN), NaN);


assert.sameValue(Math.asinh(+0), +0);


assert.sameValue(Math.asinh(-0), -0);


assert.sameValue(Math.asinh(Infinity), Infinity);


assert.sameValue(Math.asinh(-Infinity), -Infinity);

