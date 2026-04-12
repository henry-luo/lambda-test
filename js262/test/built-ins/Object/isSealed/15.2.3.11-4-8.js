

/*---
es5id: 15.2.3.11-4-8
description: Object.isSealed returns false for all built-in objects (String)
---*/

var b = Object.isSealed(String);

assert.sameValue(b, false, 'b');
