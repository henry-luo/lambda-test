

/*---
includes: [sm/non262.js, sm/non262-strict-shell.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assert.sameValue(testLenientAndStrict('let let_declared; let_declared=1',
                              completesNormally,
                              completesNormally),
         true);

