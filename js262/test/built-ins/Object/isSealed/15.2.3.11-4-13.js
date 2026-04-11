

/*---
es5id: 15.2.3.11-4-13
description: >
    Object.isSealed returns false for all built-in objects
    (Number.prototype)
---*/

var b = Object.isSealed(Number.prototype);

assert.sameValue(b, false, 'b');
