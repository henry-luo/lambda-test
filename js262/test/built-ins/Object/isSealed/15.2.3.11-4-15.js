

/*---
es5id: 15.2.3.11-4-15
description: Object.isSealed returns false for all built-in objects (Date)
---*/

var b = Object.isSealed(Date);

assert.sameValue(b, false, 'b');
