

/*---
es5id: 15.2.3.12-3-13
description: >
    Object.isFrozen returns false for all built-in objects
    (Number.prototype)
---*/

var b = Object.isFrozen(Number.prototype);

assert.sameValue(b, false, 'b');
