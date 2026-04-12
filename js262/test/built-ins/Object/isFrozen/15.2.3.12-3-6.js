

/*---
es5id: 15.2.3.12-3-6
description: Object.isFrozen returns false for all built-in objects (Array)
---*/

var b = Object.isFrozen(Array);

assert.sameValue(b, false, 'b');
