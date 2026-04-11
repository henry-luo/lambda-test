

/*---
es5id: 15.2.3.12-3-2
description: Object.isFrozen returns false for all built-in objects (Object)
---*/

var b = Object.isFrozen(Object);

assert.sameValue(b, false, 'b');
