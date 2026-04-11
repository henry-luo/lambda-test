

/*---
es5id: 15.2.3.11-4-18
description: >
    Object.isSealed returns false for all built-in objects
    (RegExp.prototype)
---*/

var b = Object.isSealed(RegExp.prototype);

assert.sameValue(b, false, 'b');
