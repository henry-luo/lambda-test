

/*---
es5id: 15.2.3.11-4-5
description: >
    Object.isSealed returns false for all built-in objects
    (Function.prototype)
---*/

var b = Object.isSealed(Function.prototype);

assert.sameValue(b, false, 'b');
