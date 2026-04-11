

/*---
includes: [sm/non262-strict-shell.js]
description: |
  pending
esid: pending
---*/


assert.sameValue(testLenientAndStrict('arguments++',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('eval++',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('(arguments)++',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('(eval)++',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

