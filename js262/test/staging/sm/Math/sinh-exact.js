

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-Math-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assert.sameValue(Math.sinh(NaN), NaN);


assert.sameValue(Math.sinh(+0), +0);


assert.sameValue(Math.sinh(-0), -0);


assert.sameValue(Math.sinh(Infinity), Infinity);


assert.sameValue(Math.sinh(-Infinity), -Infinity);

