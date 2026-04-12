

/*---
es5id: 8.7.2-2-s
description: >
    ReferenceError isn't thrown if LeftHandSide evaluates to a resolvable
    Reference
---*/

        var b = 11;

assert.sameValue(b, 11, 'b');
