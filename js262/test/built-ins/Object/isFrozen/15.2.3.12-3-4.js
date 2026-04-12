

/*---
es5id: 15.2.3.12-3-4
description: Object.isFrozen returns false for all built-in objects (Function)
---*/

var b = Object.isFrozen(Function);

assert.sameValue(b, false, 'b');
