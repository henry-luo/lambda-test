

/*---
es5id: 15.2.3.12-3-16
description: >
    Object.isFrozen returns false for all built-in objects
    (Date.prototype)
---*/

var b = Object.isFrozen(Date.prototype);

assert.sameValue(b, false, 'b');
