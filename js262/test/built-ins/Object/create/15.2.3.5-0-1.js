

/*---
es5id: 15.2.3.5-0-1
description: Object.create must exist as a function
---*/

assert.sameValue(typeof(Object.create), "function", 'typeof(Object.create)');
