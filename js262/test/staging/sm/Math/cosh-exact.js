

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-Math-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assert.sameValue(Math.cosh(NaN), NaN);


assert.sameValue(Math.cosh(+0), 1);


assert.sameValue(Math.cosh(-0), 1);


assert.sameValue(Math.cosh(Infinity), Infinity);


assert.sameValue(Math.cosh(-Infinity), Infinity);

