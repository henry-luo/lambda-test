

/*---
es5id: 15.2.3.11-4-6
description: Object.isSealed returns false for all built-in objects (Array)
---*/

var b = Object.isSealed(Array);

assert.sameValue(b, false, 'b');
