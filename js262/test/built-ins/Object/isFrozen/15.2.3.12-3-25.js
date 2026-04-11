

/*---
es5id: 15.2.3.12-3-25
description: Object.isFrozen returns false for all built-in objects (TypeError)
---*/

var b = Object.isFrozen(TypeError);

assert.sameValue(b, false, 'b');
