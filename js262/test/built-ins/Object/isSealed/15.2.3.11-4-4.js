

/*---
es5id: 15.2.3.11-4-4
description: Object.isSealed returns false for all built-in objects (Function)
---*/

var b = Object.isSealed(Function);

assert.sameValue(b, false, 'b');
