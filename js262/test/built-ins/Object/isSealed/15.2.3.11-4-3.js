

/*---
es5id: 15.2.3.11-4-3
description: >
    Object.isSealed returns false for all built-in objects
    (Object.prototype)
---*/

var b = Object.isSealed(Object.prototype);

assert.sameValue(b, false, 'b');
