

/*---
includes: [sm/non262.js, sm/non262-strict-shell.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

assert.sameValue(testLenientAndStrict('010',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);


assert.sameValue(parseRaisesException(SyntaxError)
         ('function f() { "use strict"; 010; }'),
         true);
                              

assert.sameValue(parsesSuccessfully('function f() { "use strict"; }; 010'),
         true);


assert.sameValue(parsesSuccessfully('function f() { 010; }'),
         true);

