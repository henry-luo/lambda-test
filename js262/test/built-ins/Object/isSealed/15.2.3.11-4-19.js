

/*---
es5id: 15.2.3.11-4-19
description: Object.isSealed returns false for all built-in objects (Error)
---*/

var b = Object.isSealed(Error);

assert.sameValue(b, false, 'b');
