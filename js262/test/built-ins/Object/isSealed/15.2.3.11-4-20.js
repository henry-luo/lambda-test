

/*---
es5id: 15.2.3.11-4-20
description: >
    Object.isSealed returns false for all built-in objects
    (Error.prototype)
---*/

var b = Object.isSealed(Error.prototype);

assert.sameValue(b, false, 'b');
