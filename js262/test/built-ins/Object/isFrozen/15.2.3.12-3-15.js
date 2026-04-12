

/*---
es5id: 15.2.3.12-3-15
description: Object.isFrozen returns false for all built-in objects (Date)
---*/

var b = Object.isFrozen(Date);

assert.sameValue(b, false, 'b');
