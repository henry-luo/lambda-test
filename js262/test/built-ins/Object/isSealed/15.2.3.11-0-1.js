

/*---
es5id: 15.2.3.11-0-1
description: Object.isSealed must exist as a function
---*/

var f = Object.isSealed;

assert.sameValue(typeof(f), "function", 'typeof(f)');
