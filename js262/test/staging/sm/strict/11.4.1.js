

/*---
includes: [sm/non262-strict-shell.js]
description: |
  pending
esid: pending
---*/

assert.sameValue(testLenientAndStrict('delete x;',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);


assert.sameValue(testLenientAndStrict('delete (x);',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);


assert.sameValue(testLenientAndStrict('delete x.y;',
                              parsesSuccessfully,
                              parsesSuccessfully),
         true);
assert.sameValue(testLenientAndStrict('delete Object();',
                              returns(true),
                              returns(true)),
         true);


assert.sameValue(testLenientAndStrict('function f() { delete x; }',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);


assert.sameValue(testLenientAndStrict('function f() { "use strict"; delete x; }',
                              parseRaisesException(SyntaxError),
                              parseRaisesException(SyntaxError)),
         true);

