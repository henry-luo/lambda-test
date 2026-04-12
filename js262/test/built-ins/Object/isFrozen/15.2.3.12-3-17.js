

/*---
es5id: 15.2.3.12-3-17
description: Object.isFrozen returns false for all built-in objects (RegExp)
---*/

var b = Object.isFrozen(RegExp);

assert.sameValue(b, false, 'b');
