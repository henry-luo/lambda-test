

/*---
es5id: 15.2.3.11-4-24
description: >
    Object.isSealed returns false for all built-in objects
    (SyntaxError)
---*/

var b = Object.isSealed(SyntaxError);

assert.sameValue(b, false, 'b');
