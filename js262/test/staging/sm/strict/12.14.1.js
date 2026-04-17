

/*---
includes: [sm/non262.js, sm/non262-strict-shell.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assert.sameValue(testLenientAndStrict('try{}catch(eval){}',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('try{}catch([eval]){}',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('try{}catch({x:eval}){}',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('try{}catch(arguments){}',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('try{}catch([arguments]){}',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('try{}catch({x:arguments}){}',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

