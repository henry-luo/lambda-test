

/*---
es5id: 15.2.3.11-4-12
description: Object.isSealed returns false for all built-in objects (Number)
---*/

var b = Object.isSealed(Number);

assert.sameValue(b, false, 'b');
