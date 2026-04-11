

/*---
es5id: 15.2.3.12-4-1
description: Object.isFrozen returns false if extensible is true
---*/

assert.sameValue(Object.isFrozen({}), false, 'Object.isFrozen({})');
