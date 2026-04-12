

/*---
es5id: 15.2.3.11-4-22
description: Object.isSealed returns false for all built-in objects (RangeError)
---*/

var b = Object.isSealed(RangeError);

assert.sameValue(b, false, 'b');
