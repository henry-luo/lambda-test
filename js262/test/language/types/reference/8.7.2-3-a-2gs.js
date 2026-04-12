

/*---
es5id: 8.7.2-3-a-2gs
description: >
    Strict Mode - 'runtime' error is thrown before LeftHandSide
    evaluates to an unresolvable Reference
flags: [onlyStrict]
---*/

assert.throws(Test262Error, function() {
  throw new Test262Error();
  b = 11;
});
