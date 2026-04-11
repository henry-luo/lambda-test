

/*---
es5id: 15.2.3.11-4-9
description: >
    Object.isSealed returns false for all built-in objects
    (String.prototype)
---*/

var b = Object.isSealed(String.prototype);

assert.sameValue(b, false, 'b');
