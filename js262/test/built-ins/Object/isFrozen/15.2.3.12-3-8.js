

/*---
es5id: 15.2.3.12-3-8
description: Object.isFrozen returns false for all built-in objects (String)
---*/

var b = Object.isFrozen(String);

assert.sameValue(b, false, 'b');
