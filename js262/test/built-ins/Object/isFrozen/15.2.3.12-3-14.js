

/*---
es5id: 15.2.3.12-3-14
description: Object.isFrozen returns false for all built-in objects (Math)
---*/

var b = Object.isFrozen(Math);

assert.sameValue(b, false, 'b');
