

/*---
es5id: 15.2.3.12-3-10
description: Object.isFrozen returns false for all built-in objects (Boolean)
---*/

var b = Object.isFrozen(Boolean);

assert.sameValue(b, false, 'b');
