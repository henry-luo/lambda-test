

/*---
es5id: 15.2.3.11-4-17
description: Object.isSealed returns false for all built-in objects (RegExp)
---*/

var b = Object.isSealed(RegExp);

assert.sameValue(b, false, 'b');
