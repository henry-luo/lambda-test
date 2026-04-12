

/*---
es5id: 8.7.2-3-a-1gs
description: >
    Strict Mode - ReferenceError is thrown if LeftHandSide evaluate to
    an unresolvable Reference
flags: [onlyStrict]
---*/

assert.throws(ReferenceError, function() {
  b = 11;
});
