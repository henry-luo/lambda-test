

/*---
es5id: 15.2.3.11-4-2
description: Object.isSealed returns false for all built-in objects (Object)
---*/

var b = Object.isSealed(Object);

assert.sameValue(b, false, 'b');
