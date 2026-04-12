

/*---
es5id: 15.2.3.11-4-25
description: Object.isSealed returns false for all built-in objects (TypeError)
---*/

var b = Object.isSealed(TypeError);

assert.sameValue(b, false, 'b');
