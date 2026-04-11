

/*---
es5id: 15.2.3.11-4-23
description: >
    Object.isSealed returns false for all built-in objects
    (ReferenceError)
---*/

var b = Object.isSealed(ReferenceError);

assert.sameValue(b, false, 'b');
