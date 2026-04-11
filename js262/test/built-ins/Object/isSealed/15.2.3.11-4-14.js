

/*---
es5id: 15.2.3.11-4-14
description: Object.isSealed returns false for all built-in objects (Math)
---*/

var b = Object.isSealed(Math);

assert.sameValue(b, false, 'b');
