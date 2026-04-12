

/*---
es5id: 15.2.3.12-3-12
description: Object.isFrozen returns false for all built-in objects (Number)
---*/

var b = Object.isFrozen(Number);

assert.sameValue(b, false, 'b');
