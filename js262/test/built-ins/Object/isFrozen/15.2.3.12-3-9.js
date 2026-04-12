

/*---
es5id: 15.2.3.12-3-9
description: >
    Object.isFrozen returns false for all built-in objects
    (String.prototype)
---*/

var b = Object.isFrozen(String.prototype);

assert.sameValue(b, false, 'b');
