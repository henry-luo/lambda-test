

/*---
es5id: 15.2.3.11-4-27
description: Object.isSealed returns false for all built-in objects (JSON)
---*/

var b = Object.isSealed(JSON);

assert.sameValue(b, false, 'b');
