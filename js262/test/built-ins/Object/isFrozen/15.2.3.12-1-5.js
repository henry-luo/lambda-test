

/*---
es5id: 15.2.3.12-1-5
description: Object.isFrozen applies to dense array
---*/

var obj = Object.freeze([0, 1, 2]);

assert(Object.isFrozen(obj), 'Object.isFrozen(obj) !== true');
