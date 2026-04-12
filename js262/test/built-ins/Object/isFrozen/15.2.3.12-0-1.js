

/*---
es5id: 15.2.3.12-0-1
description: Object.isFrozen must exist as a function
---*/

var f = Object.isFrozen;

assert.sameValue(typeof(f), "function", 'typeof(f)');
