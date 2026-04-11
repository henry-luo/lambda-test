

/*---
es5id: 15.2.3.11-4-16
description: >
    Object.isSealed returns false for all built-in objects
    (Date.prototype)
---*/

var b = Object.isSealed(Date.prototype);

assert.sameValue(b, false, 'b');
