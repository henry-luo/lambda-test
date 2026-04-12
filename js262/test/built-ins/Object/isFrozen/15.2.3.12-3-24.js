

/*---
es5id: 15.2.3.12-3-24
description: >
    Object.isFrozen returns false for all built-in objects
    (SyntaxError)
---*/

var b = Object.isFrozen(SyntaxError);

assert.sameValue(b, false, 'b');
