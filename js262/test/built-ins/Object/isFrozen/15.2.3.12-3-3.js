

/*---
es5id: 15.2.3.12-3-3
description: >
    Object.isFrozen returns false for all built-in objects
    (Object.prototype)
---*/

var b = Object.isFrozen(Object.prototype);

assert.sameValue(b, false, 'b');
