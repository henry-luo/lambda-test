

/*---
es5id: 15.2.3.12-3-18
description: >
    Object.isFrozen returns false for all built-in objects
    (RegExp.prototype)
---*/

var b = Object.isFrozen(RegExp.prototype);

assert.sameValue(b, false, 'b');
