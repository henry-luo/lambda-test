

/*---
includes: [sm/non262-strict-shell.js]
description: |
  pending
esid: pending
---*/


assert.sameValue(testLenientAndStrict('with (1) {}',
                              completesNormally,
                              raisesException(SyntaxError)),
         true);


assert.sameValue(testLenientAndStrict('function f() { "use strict"; with (1) {} }',
                              parseRaisesException(SyntaxError),
                              parseRaisesException(SyntaxError)),
         true);
                              

assert.sameValue(parsesSuccessfully('function f() { "use strict"; }; with (1) {}'),
         true);

