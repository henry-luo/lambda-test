

/*---
es5id: 15.2.3.11-4-10
description: Object.isSealed returns false for all built-in objects (Boolean)
---*/

var b = Object.isSealed(Boolean);

assert.sameValue(b, false, 'b');
